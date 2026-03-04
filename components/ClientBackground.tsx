'use client';

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import LightRays from "@/components/LightRays";

export default function ClientBackground() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  // Mengatur atribut body agar sesuai dengan kodingan kamu sebelumnya
  useEffect(() => {
    if (!isAdminRoute) {
      document.body.setAttribute('data-page-loading', 'true');
    } else {
      document.body.setAttribute('data-page-loading', 'false');
    }
  }, [isAdminRoute]);

  if (isAdminRoute) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.6}
        rayLength={1.8}
        fadeDistance={1.2}
        saturation={1.2}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.08}
        distortion={0.06}
      />
    </div>
  );
}