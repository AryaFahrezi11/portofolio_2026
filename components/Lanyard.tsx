/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
    position?: number[];
    gravity?: number[];
    fov?: number;
    transparent?: boolean;
    textureFile?: string; // Tali
    cardTextureFile?: string; // Foto Kartu
}

export default function Lanyard({
    position = [0, 0, 20],
    gravity = [0, -40, 0],
    fov = 25,
    transparent = true,
    textureFile = 'lanyard.png',
    cardTextureFile = 'id-card.png'
}: LanyardProps) {
    const lanyardTexturePath = `/assets/lanyard/${textureFile}`;
    const cardTexturePath = `/assets/lanyard/${cardTextureFile}`;

    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
    const [inView, setInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative z-0 w-full h-full flex justify-center items-center overflow-hidden">
            {inView && (
                <Canvas
                    camera={{ position: position as [number, number, number], fov: fov }}
                    dpr={[1, 1.5]}
                    gl={{ alpha: transparent, powerPreference: "low-power", antialias: false }}
                >
                    <ambientLight intensity={2} />
                    <Physics gravity={gravity as [number, number, number]}>
                        <Band
                            isMobile={isMobile}
                            lanyardTexture={lanyardTexturePath}
                            cardTexturePath={cardTexturePath}
                        />
                    </Physics>
                    <Environment preset="city" />
                </Canvas>
            )}
        </div>
    );
}

function Band({ isMobile, lanyardTexture, cardTexturePath }: { isMobile: boolean, lanyardTexture: string, cardTexturePath: string }) {
    const band = useRef<THREE.Mesh>(null);
    const fixed = useRef<any>(null);
    const j1 = useRef<any>(null);
    const j2 = useRef<any>(null);
    const j3 = useRef<any>(null);
    const card = useRef<any>(null);

    const vec = new THREE.Vector3();
    const ang = new THREE.Vector3();
    const rot = new THREE.Vector3();
    const dir = new THREE.Vector3();

    const texture = useTexture(lanyardTexture);
    const cardTexture = useTexture(cardTexturePath);

    const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
    const [dragged, drag] = useState<THREE.Vector3 | boolean>(false);
    const [hovered, hover] = useState(false);

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.3]);
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.3]);
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.3]);
    useSphericalJoint(j3, card, [[0, 0, 0], [0, 2.5, 0]]);

    useEffect(() => {
        document.body.style.cursor = hovered ? (dragged ? 'grabbing' : 'grab') : 'auto';
    }, [hovered, dragged]);

    useFrame((state, delta) => {
        if (dragged && typeof dragged !== 'boolean') {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
            dir.copy(vec).sub(state.camera.position).normalize();
            vec.add(dir.multiplyScalar(state.camera.position.length()));
            [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
            card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
        }

        if (fixed.current) {
            [j1, j2, j3].forEach(ref => {
                if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
                ref.current.lerped.lerp(ref.current.translation(), delta * 20);
            });
            curve.points[0].copy(j3.current.translation());
            curve.points[1].copy(j2.current.lerped);
            curve.points[2].copy(j1.current.lerped);
            curve.points[3].copy(fixed.current.translation());

            if (band.current) {
                (band.current.geometry as any).setPoints(curve.getPoints(isMobile ? 16 : 32));
            }

            ang.copy(card.current.angvel());
            rot.copy(card.current.rotation());
            card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
        }
    });

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <>
            <group position={[0, 4, 0]}>
                <RigidBody ref={fixed} type="fixed" />
                <RigidBody position={[0.3, 0, 0]} ref={j1} linearDamping={2} angularDamping={2}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[0.6, 0, 0]} ref={j2} linearDamping={2} angularDamping={2}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[0.9, 0, 0]} ref={j3} linearDamping={2} angularDamping={2}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody
                    position={[1.2, 0, 0]}
                    ref={card}
                    type={dragged ? 'kinematicPosition' : 'dynamic'}
                    linearDamping={2}
                    angularDamping={2}
                >
                    <CuboidCollider args={[1.5, 2.2, 0.05]} />
                    <group
                        scale={1}
                        onPointerOver={() => hover(true)}
                        onPointerOut={() => hover(false)}
                        onPointerUp={(e: any) => { e.target.releasePointerCapture(e.pointerId); drag(false); }}
                        onPointerDown={(e: any) => { e.target.setPointerCapture(e.pointerId); drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))); }}
                    >
                        {/* Tampak Depan */}
                        <mesh>
                            <planeGeometry args={[3, 4.5]} />
                            <meshBasicMaterial map={cardTexture} side={THREE.FrontSide} transparent />
                        </mesh>
                        {/* Tampak Belakang */}
                        <mesh rotation={[0, Math.PI, 0]}>
                            <planeGeometry args={[3, 4.5]} />
                            <meshBasicMaterial color="#222" side={THREE.FrontSide} />
                        </mesh>
                    </group>
                </RigidBody>
            </group>
            <mesh ref={band}>
                {/* @ts-ignore */}
                <meshLineGeometry />
                {/* @ts-ignore */}
                <meshLineMaterial
                    transparent
                    color="white"
                    useMap
                    map={texture}
                    lineWidth={1}
                    repeat={[-4, 1]}
                />
            </mesh>
        </>
    );
}