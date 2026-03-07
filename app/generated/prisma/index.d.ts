
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model HomeContent
 * 
 */
export type HomeContent = $Result.DefaultSelection<Prisma.$HomeContentPayload>
/**
 * Model HomeStat
 * 
 */
export type HomeStat = $Result.DefaultSelection<Prisma.$HomeStatPayload>
/**
 * Model ProfileCard
 * 
 */
export type ProfileCard = $Result.DefaultSelection<Prisma.$ProfileCardPayload>
/**
 * Model AboutContent
 * 
 */
export type AboutContent = $Result.DefaultSelection<Prisma.$AboutContentPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homeContent`: Exposes CRUD operations for the **HomeContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeContents
    * const homeContents = await prisma.homeContent.findMany()
    * ```
    */
  get homeContent(): Prisma.HomeContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homeStat`: Exposes CRUD operations for the **HomeStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeStats
    * const homeStats = await prisma.homeStat.findMany()
    * ```
    */
  get homeStat(): Prisma.HomeStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileCard`: Exposes CRUD operations for the **ProfileCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileCards
    * const profileCards = await prisma.profileCard.findMany()
    * ```
    */
  get profileCard(): Prisma.ProfileCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutContent`: Exposes CRUD operations for the **AboutContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutContents
    * const aboutContents = await prisma.aboutContent.findMany()
    * ```
    */
  get aboutContent(): Prisma.AboutContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdminUser: 'AdminUser',
    HomeContent: 'HomeContent',
    HomeStat: 'HomeStat',
    ProfileCard: 'ProfileCard',
    AboutContent: 'AboutContent',
    Skill: 'Skill',
    Project: 'Project',
    Certificate: 'Certificate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "adminUser" | "homeContent" | "homeStat" | "profileCard" | "aboutContent" | "skill" | "project" | "certificate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      HomeContent: {
        payload: Prisma.$HomeContentPayload<ExtArgs>
        fields: Prisma.HomeContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload>
          }
          findFirst: {
            args: Prisma.HomeContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload>
          }
          findMany: {
            args: Prisma.HomeContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload>[]
          }
          create: {
            args: Prisma.HomeContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload>
          }
          createMany: {
            args: Prisma.HomeContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomeContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload>[]
          }
          delete: {
            args: Prisma.HomeContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload>
          }
          update: {
            args: Prisma.HomeContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload>
          }
          deleteMany: {
            args: Prisma.HomeContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomeContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload>[]
          }
          upsert: {
            args: Prisma.HomeContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeContentPayload>
          }
          aggregate: {
            args: Prisma.HomeContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomeContent>
          }
          groupBy: {
            args: Prisma.HomeContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeContentCountArgs<ExtArgs>
            result: $Utils.Optional<HomeContentCountAggregateOutputType> | number
          }
        }
      }
      HomeStat: {
        payload: Prisma.$HomeStatPayload<ExtArgs>
        fields: Prisma.HomeStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          findFirst: {
            args: Prisma.HomeStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          findMany: {
            args: Prisma.HomeStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>[]
          }
          create: {
            args: Prisma.HomeStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          createMany: {
            args: Prisma.HomeStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomeStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>[]
          }
          delete: {
            args: Prisma.HomeStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          update: {
            args: Prisma.HomeStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          deleteMany: {
            args: Prisma.HomeStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomeStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>[]
          }
          upsert: {
            args: Prisma.HomeStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          aggregate: {
            args: Prisma.HomeStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomeStat>
          }
          groupBy: {
            args: Prisma.HomeStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeStatCountArgs<ExtArgs>
            result: $Utils.Optional<HomeStatCountAggregateOutputType> | number
          }
        }
      }
      ProfileCard: {
        payload: Prisma.$ProfileCardPayload<ExtArgs>
        fields: Prisma.ProfileCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload>
          }
          findFirst: {
            args: Prisma.ProfileCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload>
          }
          findMany: {
            args: Prisma.ProfileCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload>[]
          }
          create: {
            args: Prisma.ProfileCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload>
          }
          createMany: {
            args: Prisma.ProfileCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload>[]
          }
          delete: {
            args: Prisma.ProfileCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload>
          }
          update: {
            args: Prisma.ProfileCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload>
          }
          deleteMany: {
            args: Prisma.ProfileCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload>[]
          }
          upsert: {
            args: Prisma.ProfileCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileCardPayload>
          }
          aggregate: {
            args: Prisma.ProfileCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileCard>
          }
          groupBy: {
            args: Prisma.ProfileCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCardCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCardCountAggregateOutputType> | number
          }
        }
      }
      AboutContent: {
        payload: Prisma.$AboutContentPayload<ExtArgs>
        fields: Prisma.AboutContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findFirst: {
            args: Prisma.AboutContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findMany: {
            args: Prisma.AboutContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          create: {
            args: Prisma.AboutContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          createMany: {
            args: Prisma.AboutContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          delete: {
            args: Prisma.AboutContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          update: {
            args: Prisma.AboutContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          deleteMany: {
            args: Prisma.AboutContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          upsert: {
            args: Prisma.AboutContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          aggregate: {
            args: Prisma.AboutContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutContent>
          }
          groupBy: {
            args: Prisma.AboutContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutContentCountArgs<ExtArgs>
            result: $Utils.Optional<AboutContentCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    homeContent?: HomeContentOmit
    homeStat?: HomeStatOmit
    profileCard?: ProfileCardOmit
    aboutContent?: AboutContentOmit
    skill?: SkillOmit
    project?: ProjectOmit
    certificate?: CertificateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    photoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    username: string
    passwordHash: string
    photoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "photoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      passwordHash: string
      photoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */ 
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly photoUrl: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model HomeContent
   */

  export type AggregateHomeContent = {
    _count: HomeContentCountAggregateOutputType | null
    _avg: HomeContentAvgAggregateOutputType | null
    _sum: HomeContentSumAggregateOutputType | null
    _min: HomeContentMinAggregateOutputType | null
    _max: HomeContentMaxAggregateOutputType | null
  }

  export type HomeContentAvgAggregateOutputType = {
    id: number | null
  }

  export type HomeContentSumAggregateOutputType = {
    id: number | null
  }

  export type HomeContentMinAggregateOutputType = {
    id: number | null
    greeting: string | null
    name: string | null
    description: string | null
    cvUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeContentMaxAggregateOutputType = {
    id: number | null
    greeting: string | null
    name: string | null
    description: string | null
    cvUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeContentCountAggregateOutputType = {
    id: number
    greeting: number
    name: number
    description: number
    cvUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomeContentAvgAggregateInputType = {
    id?: true
  }

  export type HomeContentSumAggregateInputType = {
    id?: true
  }

  export type HomeContentMinAggregateInputType = {
    id?: true
    greeting?: true
    name?: true
    description?: true
    cvUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeContentMaxAggregateInputType = {
    id?: true
    greeting?: true
    name?: true
    description?: true
    cvUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeContentCountAggregateInputType = {
    id?: true
    greeting?: true
    name?: true
    description?: true
    cvUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomeContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeContent to aggregate.
     */
    where?: HomeContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeContents to fetch.
     */
    orderBy?: HomeContentOrderByWithRelationInput | HomeContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeContents
    **/
    _count?: true | HomeContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomeContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomeContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeContentMaxAggregateInputType
  }

  export type GetHomeContentAggregateType<T extends HomeContentAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeContent[P]>
      : GetScalarType<T[P], AggregateHomeContent[P]>
  }




  export type HomeContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeContentWhereInput
    orderBy?: HomeContentOrderByWithAggregationInput | HomeContentOrderByWithAggregationInput[]
    by: HomeContentScalarFieldEnum[] | HomeContentScalarFieldEnum
    having?: HomeContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeContentCountAggregateInputType | true
    _avg?: HomeContentAvgAggregateInputType
    _sum?: HomeContentSumAggregateInputType
    _min?: HomeContentMinAggregateInputType
    _max?: HomeContentMaxAggregateInputType
  }

  export type HomeContentGroupByOutputType = {
    id: number
    greeting: string
    name: string
    description: string
    cvUrl: string
    createdAt: Date
    updatedAt: Date
    _count: HomeContentCountAggregateOutputType | null
    _avg: HomeContentAvgAggregateOutputType | null
    _sum: HomeContentSumAggregateOutputType | null
    _min: HomeContentMinAggregateOutputType | null
    _max: HomeContentMaxAggregateOutputType | null
  }

  type GetHomeContentGroupByPayload<T extends HomeContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeContentGroupByOutputType[P]>
            : GetScalarType<T[P], HomeContentGroupByOutputType[P]>
        }
      >
    >


  export type HomeContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    greeting?: boolean
    name?: boolean
    description?: boolean
    cvUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeContent"]>

  export type HomeContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    greeting?: boolean
    name?: boolean
    description?: boolean
    cvUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeContent"]>

  export type HomeContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    greeting?: boolean
    name?: boolean
    description?: boolean
    cvUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeContent"]>

  export type HomeContentSelectScalar = {
    id?: boolean
    greeting?: boolean
    name?: boolean
    description?: boolean
    cvUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomeContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "greeting" | "name" | "description" | "cvUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["homeContent"]>

  export type $HomeContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomeContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      greeting: string
      name: string
      description: string
      cvUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homeContent"]>
    composites: {}
  }

  type HomeContentGetPayload<S extends boolean | null | undefined | HomeContentDefaultArgs> = $Result.GetResult<Prisma.$HomeContentPayload, S>

  type HomeContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeContentCountAggregateInputType | true
    }

  export interface HomeContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomeContent'], meta: { name: 'HomeContent' } }
    /**
     * Find zero or one HomeContent that matches the filter.
     * @param {HomeContentFindUniqueArgs} args - Arguments to find a HomeContent
     * @example
     * // Get one HomeContent
     * const homeContent = await prisma.homeContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeContentFindUniqueArgs>(args: SelectSubset<T, HomeContentFindUniqueArgs<ExtArgs>>): Prisma__HomeContentClient<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one HomeContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeContentFindUniqueOrThrowArgs} args - Arguments to find a HomeContent
     * @example
     * // Get one HomeContent
     * const homeContent = await prisma.homeContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeContentFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeContentClient<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first HomeContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeContentFindFirstArgs} args - Arguments to find a HomeContent
     * @example
     * // Get one HomeContent
     * const homeContent = await prisma.homeContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeContentFindFirstArgs>(args?: SelectSubset<T, HomeContentFindFirstArgs<ExtArgs>>): Prisma__HomeContentClient<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first HomeContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeContentFindFirstOrThrowArgs} args - Arguments to find a HomeContent
     * @example
     * // Get one HomeContent
     * const homeContent = await prisma.homeContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeContentFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeContentClient<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more HomeContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeContents
     * const homeContents = await prisma.homeContent.findMany()
     * 
     * // Get first 10 HomeContents
     * const homeContents = await prisma.homeContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeContentWithIdOnly = await prisma.homeContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeContentFindManyArgs>(args?: SelectSubset<T, HomeContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a HomeContent.
     * @param {HomeContentCreateArgs} args - Arguments to create a HomeContent.
     * @example
     * // Create one HomeContent
     * const HomeContent = await prisma.homeContent.create({
     *   data: {
     *     // ... data to create a HomeContent
     *   }
     * })
     * 
     */
    create<T extends HomeContentCreateArgs>(args: SelectSubset<T, HomeContentCreateArgs<ExtArgs>>): Prisma__HomeContentClient<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many HomeContents.
     * @param {HomeContentCreateManyArgs} args - Arguments to create many HomeContents.
     * @example
     * // Create many HomeContents
     * const homeContent = await prisma.homeContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeContentCreateManyArgs>(args?: SelectSubset<T, HomeContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomeContents and returns the data saved in the database.
     * @param {HomeContentCreateManyAndReturnArgs} args - Arguments to create many HomeContents.
     * @example
     * // Create many HomeContents
     * const homeContent = await prisma.homeContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomeContents and only return the `id`
     * const homeContentWithIdOnly = await prisma.homeContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomeContentCreateManyAndReturnArgs>(args?: SelectSubset<T, HomeContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a HomeContent.
     * @param {HomeContentDeleteArgs} args - Arguments to delete one HomeContent.
     * @example
     * // Delete one HomeContent
     * const HomeContent = await prisma.homeContent.delete({
     *   where: {
     *     // ... filter to delete one HomeContent
     *   }
     * })
     * 
     */
    delete<T extends HomeContentDeleteArgs>(args: SelectSubset<T, HomeContentDeleteArgs<ExtArgs>>): Prisma__HomeContentClient<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one HomeContent.
     * @param {HomeContentUpdateArgs} args - Arguments to update one HomeContent.
     * @example
     * // Update one HomeContent
     * const homeContent = await prisma.homeContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeContentUpdateArgs>(args: SelectSubset<T, HomeContentUpdateArgs<ExtArgs>>): Prisma__HomeContentClient<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more HomeContents.
     * @param {HomeContentDeleteManyArgs} args - Arguments to filter HomeContents to delete.
     * @example
     * // Delete a few HomeContents
     * const { count } = await prisma.homeContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeContentDeleteManyArgs>(args?: SelectSubset<T, HomeContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeContents
     * const homeContent = await prisma.homeContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeContentUpdateManyArgs>(args: SelectSubset<T, HomeContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeContents and returns the data updated in the database.
     * @param {HomeContentUpdateManyAndReturnArgs} args - Arguments to update many HomeContents.
     * @example
     * // Update many HomeContents
     * const homeContent = await prisma.homeContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomeContents and only return the `id`
     * const homeContentWithIdOnly = await prisma.homeContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HomeContentUpdateManyAndReturnArgs>(args: SelectSubset<T, HomeContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one HomeContent.
     * @param {HomeContentUpsertArgs} args - Arguments to update or create a HomeContent.
     * @example
     * // Update or create a HomeContent
     * const homeContent = await prisma.homeContent.upsert({
     *   create: {
     *     // ... data to create a HomeContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeContent we want to update
     *   }
     * })
     */
    upsert<T extends HomeContentUpsertArgs>(args: SelectSubset<T, HomeContentUpsertArgs<ExtArgs>>): Prisma__HomeContentClient<$Result.GetResult<Prisma.$HomeContentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of HomeContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeContentCountArgs} args - Arguments to filter HomeContents to count.
     * @example
     * // Count the number of HomeContents
     * const count = await prisma.homeContent.count({
     *   where: {
     *     // ... the filter for the HomeContents we want to count
     *   }
     * })
    **/
    count<T extends HomeContentCountArgs>(
      args?: Subset<T, HomeContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeContentAggregateArgs>(args: Subset<T, HomeContentAggregateArgs>): Prisma.PrismaPromise<GetHomeContentAggregateType<T>>

    /**
     * Group by HomeContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomeContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeContentGroupByArgs['orderBy'] }
        : { orderBy?: HomeContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomeContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomeContent model
   */
  readonly fields: HomeContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HomeContent model
   */ 
  interface HomeContentFieldRefs {
    readonly id: FieldRef<"HomeContent", 'Int'>
    readonly greeting: FieldRef<"HomeContent", 'String'>
    readonly name: FieldRef<"HomeContent", 'String'>
    readonly description: FieldRef<"HomeContent", 'String'>
    readonly cvUrl: FieldRef<"HomeContent", 'String'>
    readonly createdAt: FieldRef<"HomeContent", 'DateTime'>
    readonly updatedAt: FieldRef<"HomeContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomeContent findUnique
   */
  export type HomeContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * Filter, which HomeContent to fetch.
     */
    where: HomeContentWhereUniqueInput
  }

  /**
   * HomeContent findUniqueOrThrow
   */
  export type HomeContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * Filter, which HomeContent to fetch.
     */
    where: HomeContentWhereUniqueInput
  }

  /**
   * HomeContent findFirst
   */
  export type HomeContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * Filter, which HomeContent to fetch.
     */
    where?: HomeContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeContents to fetch.
     */
    orderBy?: HomeContentOrderByWithRelationInput | HomeContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeContents.
     */
    cursor?: HomeContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeContents.
     */
    distinct?: HomeContentScalarFieldEnum | HomeContentScalarFieldEnum[]
  }

  /**
   * HomeContent findFirstOrThrow
   */
  export type HomeContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * Filter, which HomeContent to fetch.
     */
    where?: HomeContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeContents to fetch.
     */
    orderBy?: HomeContentOrderByWithRelationInput | HomeContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeContents.
     */
    cursor?: HomeContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeContents.
     */
    distinct?: HomeContentScalarFieldEnum | HomeContentScalarFieldEnum[]
  }

  /**
   * HomeContent findMany
   */
  export type HomeContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * Filter, which HomeContents to fetch.
     */
    where?: HomeContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeContents to fetch.
     */
    orderBy?: HomeContentOrderByWithRelationInput | HomeContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeContents.
     */
    cursor?: HomeContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeContents.
     */
    skip?: number
    distinct?: HomeContentScalarFieldEnum | HomeContentScalarFieldEnum[]
  }

  /**
   * HomeContent create
   */
  export type HomeContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * The data needed to create a HomeContent.
     */
    data: XOR<HomeContentCreateInput, HomeContentUncheckedCreateInput>
  }

  /**
   * HomeContent createMany
   */
  export type HomeContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomeContents.
     */
    data: HomeContentCreateManyInput | HomeContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeContent createManyAndReturn
   */
  export type HomeContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * The data used to create many HomeContents.
     */
    data: HomeContentCreateManyInput | HomeContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeContent update
   */
  export type HomeContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * The data needed to update a HomeContent.
     */
    data: XOR<HomeContentUpdateInput, HomeContentUncheckedUpdateInput>
    /**
     * Choose, which HomeContent to update.
     */
    where: HomeContentWhereUniqueInput
  }

  /**
   * HomeContent updateMany
   */
  export type HomeContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomeContents.
     */
    data: XOR<HomeContentUpdateManyMutationInput, HomeContentUncheckedUpdateManyInput>
    /**
     * Filter which HomeContents to update
     */
    where?: HomeContentWhereInput
    /**
     * Limit how many HomeContents to update.
     */
    limit?: number
  }

  /**
   * HomeContent updateManyAndReturn
   */
  export type HomeContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * The data used to update HomeContents.
     */
    data: XOR<HomeContentUpdateManyMutationInput, HomeContentUncheckedUpdateManyInput>
    /**
     * Filter which HomeContents to update
     */
    where?: HomeContentWhereInput
    /**
     * Limit how many HomeContents to update.
     */
    limit?: number
  }

  /**
   * HomeContent upsert
   */
  export type HomeContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * The filter to search for the HomeContent to update in case it exists.
     */
    where: HomeContentWhereUniqueInput
    /**
     * In case the HomeContent found by the `where` argument doesn't exist, create a new HomeContent with this data.
     */
    create: XOR<HomeContentCreateInput, HomeContentUncheckedCreateInput>
    /**
     * In case the HomeContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeContentUpdateInput, HomeContentUncheckedUpdateInput>
  }

  /**
   * HomeContent delete
   */
  export type HomeContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
    /**
     * Filter which HomeContent to delete.
     */
    where: HomeContentWhereUniqueInput
  }

  /**
   * HomeContent deleteMany
   */
  export type HomeContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeContents to delete
     */
    where?: HomeContentWhereInput
    /**
     * Limit how many HomeContents to delete.
     */
    limit?: number
  }

  /**
   * HomeContent without action
   */
  export type HomeContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeContent
     */
    select?: HomeContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeContent
     */
    omit?: HomeContentOmit<ExtArgs> | null
  }


  /**
   * Model HomeStat
   */

  export type AggregateHomeStat = {
    _count: HomeStatCountAggregateOutputType | null
    _avg: HomeStatAvgAggregateOutputType | null
    _sum: HomeStatSumAggregateOutputType | null
    _min: HomeStatMinAggregateOutputType | null
    _max: HomeStatMaxAggregateOutputType | null
  }

  export type HomeStatAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type HomeStatSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type HomeStatMinAggregateOutputType = {
    id: number | null
    statKey: string | null
    statValue: string | null
    statLabel: string | null
    icon: string | null
    gradientFrom: string | null
    gradientTo: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeStatMaxAggregateOutputType = {
    id: number | null
    statKey: string | null
    statValue: string | null
    statLabel: string | null
    icon: string | null
    gradientFrom: string | null
    gradientTo: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeStatCountAggregateOutputType = {
    id: number
    statKey: number
    statValue: number
    statLabel: number
    icon: number
    gradientFrom: number
    gradientTo: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomeStatAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type HomeStatSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type HomeStatMinAggregateInputType = {
    id?: true
    statKey?: true
    statValue?: true
    statLabel?: true
    icon?: true
    gradientFrom?: true
    gradientTo?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeStatMaxAggregateInputType = {
    id?: true
    statKey?: true
    statValue?: true
    statLabel?: true
    icon?: true
    gradientFrom?: true
    gradientTo?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeStatCountAggregateInputType = {
    id?: true
    statKey?: true
    statValue?: true
    statLabel?: true
    icon?: true
    gradientFrom?: true
    gradientTo?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomeStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeStat to aggregate.
     */
    where?: HomeStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeStats to fetch.
     */
    orderBy?: HomeStatOrderByWithRelationInput | HomeStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeStats
    **/
    _count?: true | HomeStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomeStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomeStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeStatMaxAggregateInputType
  }

  export type GetHomeStatAggregateType<T extends HomeStatAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeStat[P]>
      : GetScalarType<T[P], AggregateHomeStat[P]>
  }




  export type HomeStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeStatWhereInput
    orderBy?: HomeStatOrderByWithAggregationInput | HomeStatOrderByWithAggregationInput[]
    by: HomeStatScalarFieldEnum[] | HomeStatScalarFieldEnum
    having?: HomeStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeStatCountAggregateInputType | true
    _avg?: HomeStatAvgAggregateInputType
    _sum?: HomeStatSumAggregateInputType
    _min?: HomeStatMinAggregateInputType
    _max?: HomeStatMaxAggregateInputType
  }

  export type HomeStatGroupByOutputType = {
    id: number
    statKey: string
    statValue: string
    statLabel: string
    icon: string | null
    gradientFrom: string
    gradientTo: string
    displayOrder: number | null
    createdAt: Date
    updatedAt: Date
    _count: HomeStatCountAggregateOutputType | null
    _avg: HomeStatAvgAggregateOutputType | null
    _sum: HomeStatSumAggregateOutputType | null
    _min: HomeStatMinAggregateOutputType | null
    _max: HomeStatMaxAggregateOutputType | null
  }

  type GetHomeStatGroupByPayload<T extends HomeStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeStatGroupByOutputType[P]>
            : GetScalarType<T[P], HomeStatGroupByOutputType[P]>
        }
      >
    >


  export type HomeStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statKey?: boolean
    statValue?: boolean
    statLabel?: boolean
    icon?: boolean
    gradientFrom?: boolean
    gradientTo?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeStat"]>

  export type HomeStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statKey?: boolean
    statValue?: boolean
    statLabel?: boolean
    icon?: boolean
    gradientFrom?: boolean
    gradientTo?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeStat"]>

  export type HomeStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statKey?: boolean
    statValue?: boolean
    statLabel?: boolean
    icon?: boolean
    gradientFrom?: boolean
    gradientTo?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeStat"]>

  export type HomeStatSelectScalar = {
    id?: boolean
    statKey?: boolean
    statValue?: boolean
    statLabel?: boolean
    icon?: boolean
    gradientFrom?: boolean
    gradientTo?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomeStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statKey" | "statValue" | "statLabel" | "icon" | "gradientFrom" | "gradientTo" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["homeStat"]>

  export type $HomeStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomeStat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      statKey: string
      statValue: string
      statLabel: string
      icon: string | null
      gradientFrom: string
      gradientTo: string
      displayOrder: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homeStat"]>
    composites: {}
  }

  type HomeStatGetPayload<S extends boolean | null | undefined | HomeStatDefaultArgs> = $Result.GetResult<Prisma.$HomeStatPayload, S>

  type HomeStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeStatCountAggregateInputType | true
    }

  export interface HomeStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomeStat'], meta: { name: 'HomeStat' } }
    /**
     * Find zero or one HomeStat that matches the filter.
     * @param {HomeStatFindUniqueArgs} args - Arguments to find a HomeStat
     * @example
     * // Get one HomeStat
     * const homeStat = await prisma.homeStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeStatFindUniqueArgs>(args: SelectSubset<T, HomeStatFindUniqueArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one HomeStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeStatFindUniqueOrThrowArgs} args - Arguments to find a HomeStat
     * @example
     * // Get one HomeStat
     * const homeStat = await prisma.homeStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeStatFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first HomeStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatFindFirstArgs} args - Arguments to find a HomeStat
     * @example
     * // Get one HomeStat
     * const homeStat = await prisma.homeStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeStatFindFirstArgs>(args?: SelectSubset<T, HomeStatFindFirstArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first HomeStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatFindFirstOrThrowArgs} args - Arguments to find a HomeStat
     * @example
     * // Get one HomeStat
     * const homeStat = await prisma.homeStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeStatFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more HomeStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeStats
     * const homeStats = await prisma.homeStat.findMany()
     * 
     * // Get first 10 HomeStats
     * const homeStats = await prisma.homeStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeStatWithIdOnly = await prisma.homeStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeStatFindManyArgs>(args?: SelectSubset<T, HomeStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a HomeStat.
     * @param {HomeStatCreateArgs} args - Arguments to create a HomeStat.
     * @example
     * // Create one HomeStat
     * const HomeStat = await prisma.homeStat.create({
     *   data: {
     *     // ... data to create a HomeStat
     *   }
     * })
     * 
     */
    create<T extends HomeStatCreateArgs>(args: SelectSubset<T, HomeStatCreateArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many HomeStats.
     * @param {HomeStatCreateManyArgs} args - Arguments to create many HomeStats.
     * @example
     * // Create many HomeStats
     * const homeStat = await prisma.homeStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeStatCreateManyArgs>(args?: SelectSubset<T, HomeStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomeStats and returns the data saved in the database.
     * @param {HomeStatCreateManyAndReturnArgs} args - Arguments to create many HomeStats.
     * @example
     * // Create many HomeStats
     * const homeStat = await prisma.homeStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomeStats and only return the `id`
     * const homeStatWithIdOnly = await prisma.homeStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomeStatCreateManyAndReturnArgs>(args?: SelectSubset<T, HomeStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a HomeStat.
     * @param {HomeStatDeleteArgs} args - Arguments to delete one HomeStat.
     * @example
     * // Delete one HomeStat
     * const HomeStat = await prisma.homeStat.delete({
     *   where: {
     *     // ... filter to delete one HomeStat
     *   }
     * })
     * 
     */
    delete<T extends HomeStatDeleteArgs>(args: SelectSubset<T, HomeStatDeleteArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one HomeStat.
     * @param {HomeStatUpdateArgs} args - Arguments to update one HomeStat.
     * @example
     * // Update one HomeStat
     * const homeStat = await prisma.homeStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeStatUpdateArgs>(args: SelectSubset<T, HomeStatUpdateArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more HomeStats.
     * @param {HomeStatDeleteManyArgs} args - Arguments to filter HomeStats to delete.
     * @example
     * // Delete a few HomeStats
     * const { count } = await prisma.homeStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeStatDeleteManyArgs>(args?: SelectSubset<T, HomeStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeStats
     * const homeStat = await prisma.homeStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeStatUpdateManyArgs>(args: SelectSubset<T, HomeStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeStats and returns the data updated in the database.
     * @param {HomeStatUpdateManyAndReturnArgs} args - Arguments to update many HomeStats.
     * @example
     * // Update many HomeStats
     * const homeStat = await prisma.homeStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomeStats and only return the `id`
     * const homeStatWithIdOnly = await prisma.homeStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HomeStatUpdateManyAndReturnArgs>(args: SelectSubset<T, HomeStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one HomeStat.
     * @param {HomeStatUpsertArgs} args - Arguments to update or create a HomeStat.
     * @example
     * // Update or create a HomeStat
     * const homeStat = await prisma.homeStat.upsert({
     *   create: {
     *     // ... data to create a HomeStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeStat we want to update
     *   }
     * })
     */
    upsert<T extends HomeStatUpsertArgs>(args: SelectSubset<T, HomeStatUpsertArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of HomeStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatCountArgs} args - Arguments to filter HomeStats to count.
     * @example
     * // Count the number of HomeStats
     * const count = await prisma.homeStat.count({
     *   where: {
     *     // ... the filter for the HomeStats we want to count
     *   }
     * })
    **/
    count<T extends HomeStatCountArgs>(
      args?: Subset<T, HomeStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeStatAggregateArgs>(args: Subset<T, HomeStatAggregateArgs>): Prisma.PrismaPromise<GetHomeStatAggregateType<T>>

    /**
     * Group by HomeStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomeStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeStatGroupByArgs['orderBy'] }
        : { orderBy?: HomeStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomeStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomeStat model
   */
  readonly fields: HomeStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HomeStat model
   */ 
  interface HomeStatFieldRefs {
    readonly id: FieldRef<"HomeStat", 'Int'>
    readonly statKey: FieldRef<"HomeStat", 'String'>
    readonly statValue: FieldRef<"HomeStat", 'String'>
    readonly statLabel: FieldRef<"HomeStat", 'String'>
    readonly icon: FieldRef<"HomeStat", 'String'>
    readonly gradientFrom: FieldRef<"HomeStat", 'String'>
    readonly gradientTo: FieldRef<"HomeStat", 'String'>
    readonly displayOrder: FieldRef<"HomeStat", 'Int'>
    readonly createdAt: FieldRef<"HomeStat", 'DateTime'>
    readonly updatedAt: FieldRef<"HomeStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomeStat findUnique
   */
  export type HomeStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStat to fetch.
     */
    where: HomeStatWhereUniqueInput
  }

  /**
   * HomeStat findUniqueOrThrow
   */
  export type HomeStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStat to fetch.
     */
    where: HomeStatWhereUniqueInput
  }

  /**
   * HomeStat findFirst
   */
  export type HomeStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStat to fetch.
     */
    where?: HomeStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeStats to fetch.
     */
    orderBy?: HomeStatOrderByWithRelationInput | HomeStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeStats.
     */
    cursor?: HomeStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeStats.
     */
    distinct?: HomeStatScalarFieldEnum | HomeStatScalarFieldEnum[]
  }

  /**
   * HomeStat findFirstOrThrow
   */
  export type HomeStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStat to fetch.
     */
    where?: HomeStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeStats to fetch.
     */
    orderBy?: HomeStatOrderByWithRelationInput | HomeStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeStats.
     */
    cursor?: HomeStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeStats.
     */
    distinct?: HomeStatScalarFieldEnum | HomeStatScalarFieldEnum[]
  }

  /**
   * HomeStat findMany
   */
  export type HomeStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStats to fetch.
     */
    where?: HomeStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeStats to fetch.
     */
    orderBy?: HomeStatOrderByWithRelationInput | HomeStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeStats.
     */
    cursor?: HomeStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeStats.
     */
    skip?: number
    distinct?: HomeStatScalarFieldEnum | HomeStatScalarFieldEnum[]
  }

  /**
   * HomeStat create
   */
  export type HomeStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The data needed to create a HomeStat.
     */
    data: XOR<HomeStatCreateInput, HomeStatUncheckedCreateInput>
  }

  /**
   * HomeStat createMany
   */
  export type HomeStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomeStats.
     */
    data: HomeStatCreateManyInput | HomeStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeStat createManyAndReturn
   */
  export type HomeStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The data used to create many HomeStats.
     */
    data: HomeStatCreateManyInput | HomeStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeStat update
   */
  export type HomeStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The data needed to update a HomeStat.
     */
    data: XOR<HomeStatUpdateInput, HomeStatUncheckedUpdateInput>
    /**
     * Choose, which HomeStat to update.
     */
    where: HomeStatWhereUniqueInput
  }

  /**
   * HomeStat updateMany
   */
  export type HomeStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomeStats.
     */
    data: XOR<HomeStatUpdateManyMutationInput, HomeStatUncheckedUpdateManyInput>
    /**
     * Filter which HomeStats to update
     */
    where?: HomeStatWhereInput
    /**
     * Limit how many HomeStats to update.
     */
    limit?: number
  }

  /**
   * HomeStat updateManyAndReturn
   */
  export type HomeStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The data used to update HomeStats.
     */
    data: XOR<HomeStatUpdateManyMutationInput, HomeStatUncheckedUpdateManyInput>
    /**
     * Filter which HomeStats to update
     */
    where?: HomeStatWhereInput
    /**
     * Limit how many HomeStats to update.
     */
    limit?: number
  }

  /**
   * HomeStat upsert
   */
  export type HomeStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The filter to search for the HomeStat to update in case it exists.
     */
    where: HomeStatWhereUniqueInput
    /**
     * In case the HomeStat found by the `where` argument doesn't exist, create a new HomeStat with this data.
     */
    create: XOR<HomeStatCreateInput, HomeStatUncheckedCreateInput>
    /**
     * In case the HomeStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeStatUpdateInput, HomeStatUncheckedUpdateInput>
  }

  /**
   * HomeStat delete
   */
  export type HomeStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter which HomeStat to delete.
     */
    where: HomeStatWhereUniqueInput
  }

  /**
   * HomeStat deleteMany
   */
  export type HomeStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeStats to delete
     */
    where?: HomeStatWhereInput
    /**
     * Limit how many HomeStats to delete.
     */
    limit?: number
  }

  /**
   * HomeStat without action
   */
  export type HomeStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
  }


  /**
   * Model ProfileCard
   */

  export type AggregateProfileCard = {
    _count: ProfileCardCountAggregateOutputType | null
    _avg: ProfileCardAvgAggregateOutputType | null
    _sum: ProfileCardSumAggregateOutputType | null
    _min: ProfileCardMinAggregateOutputType | null
    _max: ProfileCardMaxAggregateOutputType | null
  }

  export type ProfileCardAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfileCardSumAggregateOutputType = {
    id: number | null
  }

  export type ProfileCardMinAggregateOutputType = {
    id: number | null
    handle: string | null
    status: string | null
    avatarUrl: string | null
    miniAvatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCardMaxAggregateOutputType = {
    id: number | null
    handle: string | null
    status: string | null
    avatarUrl: string | null
    miniAvatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCardCountAggregateOutputType = {
    id: number
    handle: number
    status: number
    avatarUrl: number
    miniAvatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileCardAvgAggregateInputType = {
    id?: true
  }

  export type ProfileCardSumAggregateInputType = {
    id?: true
  }

  export type ProfileCardMinAggregateInputType = {
    id?: true
    handle?: true
    status?: true
    avatarUrl?: true
    miniAvatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCardMaxAggregateInputType = {
    id?: true
    handle?: true
    status?: true
    avatarUrl?: true
    miniAvatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCardCountAggregateInputType = {
    id?: true
    handle?: true
    status?: true
    avatarUrl?: true
    miniAvatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileCard to aggregate.
     */
    where?: ProfileCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileCards to fetch.
     */
    orderBy?: ProfileCardOrderByWithRelationInput | ProfileCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileCards
    **/
    _count?: true | ProfileCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileCardMaxAggregateInputType
  }

  export type GetProfileCardAggregateType<T extends ProfileCardAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileCard[P]>
      : GetScalarType<T[P], AggregateProfileCard[P]>
  }




  export type ProfileCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileCardWhereInput
    orderBy?: ProfileCardOrderByWithAggregationInput | ProfileCardOrderByWithAggregationInput[]
    by: ProfileCardScalarFieldEnum[] | ProfileCardScalarFieldEnum
    having?: ProfileCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCardCountAggregateInputType | true
    _avg?: ProfileCardAvgAggregateInputType
    _sum?: ProfileCardSumAggregateInputType
    _min?: ProfileCardMinAggregateInputType
    _max?: ProfileCardMaxAggregateInputType
  }

  export type ProfileCardGroupByOutputType = {
    id: number
    handle: string
    status: string
    avatarUrl: string
    miniAvatarUrl: string
    createdAt: Date
    updatedAt: Date
    _count: ProfileCardCountAggregateOutputType | null
    _avg: ProfileCardAvgAggregateOutputType | null
    _sum: ProfileCardSumAggregateOutputType | null
    _min: ProfileCardMinAggregateOutputType | null
    _max: ProfileCardMaxAggregateOutputType | null
  }

  type GetProfileCardGroupByPayload<T extends ProfileCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileCardGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileCardGroupByOutputType[P]>
        }
      >
    >


  export type ProfileCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    status?: boolean
    avatarUrl?: boolean
    miniAvatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profileCard"]>

  export type ProfileCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    status?: boolean
    avatarUrl?: boolean
    miniAvatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profileCard"]>

  export type ProfileCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    status?: boolean
    avatarUrl?: boolean
    miniAvatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profileCard"]>

  export type ProfileCardSelectScalar = {
    id?: boolean
    handle?: boolean
    status?: boolean
    avatarUrl?: boolean
    miniAvatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "handle" | "status" | "avatarUrl" | "miniAvatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["profileCard"]>

  export type $ProfileCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileCard"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      handle: string
      status: string
      avatarUrl: string
      miniAvatarUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profileCard"]>
    composites: {}
  }

  type ProfileCardGetPayload<S extends boolean | null | undefined | ProfileCardDefaultArgs> = $Result.GetResult<Prisma.$ProfileCardPayload, S>

  type ProfileCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCardCountAggregateInputType | true
    }

  export interface ProfileCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileCard'], meta: { name: 'ProfileCard' } }
    /**
     * Find zero or one ProfileCard that matches the filter.
     * @param {ProfileCardFindUniqueArgs} args - Arguments to find a ProfileCard
     * @example
     * // Get one ProfileCard
     * const profileCard = await prisma.profileCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileCardFindUniqueArgs>(args: SelectSubset<T, ProfileCardFindUniqueArgs<ExtArgs>>): Prisma__ProfileCardClient<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProfileCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileCardFindUniqueOrThrowArgs} args - Arguments to find a ProfileCard
     * @example
     * // Get one ProfileCard
     * const profileCard = await prisma.profileCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileCardFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileCardClient<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProfileCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCardFindFirstArgs} args - Arguments to find a ProfileCard
     * @example
     * // Get one ProfileCard
     * const profileCard = await prisma.profileCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileCardFindFirstArgs>(args?: SelectSubset<T, ProfileCardFindFirstArgs<ExtArgs>>): Prisma__ProfileCardClient<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProfileCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCardFindFirstOrThrowArgs} args - Arguments to find a ProfileCard
     * @example
     * // Get one ProfileCard
     * const profileCard = await prisma.profileCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileCardFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileCardClient<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProfileCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileCards
     * const profileCards = await prisma.profileCard.findMany()
     * 
     * // Get first 10 ProfileCards
     * const profileCards = await prisma.profileCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileCardWithIdOnly = await prisma.profileCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileCardFindManyArgs>(args?: SelectSubset<T, ProfileCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProfileCard.
     * @param {ProfileCardCreateArgs} args - Arguments to create a ProfileCard.
     * @example
     * // Create one ProfileCard
     * const ProfileCard = await prisma.profileCard.create({
     *   data: {
     *     // ... data to create a ProfileCard
     *   }
     * })
     * 
     */
    create<T extends ProfileCardCreateArgs>(args: SelectSubset<T, ProfileCardCreateArgs<ExtArgs>>): Prisma__ProfileCardClient<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProfileCards.
     * @param {ProfileCardCreateManyArgs} args - Arguments to create many ProfileCards.
     * @example
     * // Create many ProfileCards
     * const profileCard = await prisma.profileCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCardCreateManyArgs>(args?: SelectSubset<T, ProfileCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileCards and returns the data saved in the database.
     * @param {ProfileCardCreateManyAndReturnArgs} args - Arguments to create many ProfileCards.
     * @example
     * // Create many ProfileCards
     * const profileCard = await prisma.profileCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileCards and only return the `id`
     * const profileCardWithIdOnly = await prisma.profileCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCardCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProfileCard.
     * @param {ProfileCardDeleteArgs} args - Arguments to delete one ProfileCard.
     * @example
     * // Delete one ProfileCard
     * const ProfileCard = await prisma.profileCard.delete({
     *   where: {
     *     // ... filter to delete one ProfileCard
     *   }
     * })
     * 
     */
    delete<T extends ProfileCardDeleteArgs>(args: SelectSubset<T, ProfileCardDeleteArgs<ExtArgs>>): Prisma__ProfileCardClient<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProfileCard.
     * @param {ProfileCardUpdateArgs} args - Arguments to update one ProfileCard.
     * @example
     * // Update one ProfileCard
     * const profileCard = await prisma.profileCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileCardUpdateArgs>(args: SelectSubset<T, ProfileCardUpdateArgs<ExtArgs>>): Prisma__ProfileCardClient<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProfileCards.
     * @param {ProfileCardDeleteManyArgs} args - Arguments to filter ProfileCards to delete.
     * @example
     * // Delete a few ProfileCards
     * const { count } = await prisma.profileCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileCardDeleteManyArgs>(args?: SelectSubset<T, ProfileCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileCards
     * const profileCard = await prisma.profileCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileCardUpdateManyArgs>(args: SelectSubset<T, ProfileCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileCards and returns the data updated in the database.
     * @param {ProfileCardUpdateManyAndReturnArgs} args - Arguments to update many ProfileCards.
     * @example
     * // Update many ProfileCards
     * const profileCard = await prisma.profileCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileCards and only return the `id`
     * const profileCardWithIdOnly = await prisma.profileCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileCardUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProfileCard.
     * @param {ProfileCardUpsertArgs} args - Arguments to update or create a ProfileCard.
     * @example
     * // Update or create a ProfileCard
     * const profileCard = await prisma.profileCard.upsert({
     *   create: {
     *     // ... data to create a ProfileCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileCard we want to update
     *   }
     * })
     */
    upsert<T extends ProfileCardUpsertArgs>(args: SelectSubset<T, ProfileCardUpsertArgs<ExtArgs>>): Prisma__ProfileCardClient<$Result.GetResult<Prisma.$ProfileCardPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProfileCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCardCountArgs} args - Arguments to filter ProfileCards to count.
     * @example
     * // Count the number of ProfileCards
     * const count = await prisma.profileCard.count({
     *   where: {
     *     // ... the filter for the ProfileCards we want to count
     *   }
     * })
    **/
    count<T extends ProfileCardCountArgs>(
      args?: Subset<T, ProfileCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileCardAggregateArgs>(args: Subset<T, ProfileCardAggregateArgs>): Prisma.PrismaPromise<GetProfileCardAggregateType<T>>

    /**
     * Group by ProfileCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileCardGroupByArgs['orderBy'] }
        : { orderBy?: ProfileCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileCard model
   */
  readonly fields: ProfileCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileCard model
   */ 
  interface ProfileCardFieldRefs {
    readonly id: FieldRef<"ProfileCard", 'Int'>
    readonly handle: FieldRef<"ProfileCard", 'String'>
    readonly status: FieldRef<"ProfileCard", 'String'>
    readonly avatarUrl: FieldRef<"ProfileCard", 'String'>
    readonly miniAvatarUrl: FieldRef<"ProfileCard", 'String'>
    readonly createdAt: FieldRef<"ProfileCard", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfileCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileCard findUnique
   */
  export type ProfileCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * Filter, which ProfileCard to fetch.
     */
    where: ProfileCardWhereUniqueInput
  }

  /**
   * ProfileCard findUniqueOrThrow
   */
  export type ProfileCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * Filter, which ProfileCard to fetch.
     */
    where: ProfileCardWhereUniqueInput
  }

  /**
   * ProfileCard findFirst
   */
  export type ProfileCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * Filter, which ProfileCard to fetch.
     */
    where?: ProfileCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileCards to fetch.
     */
    orderBy?: ProfileCardOrderByWithRelationInput | ProfileCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileCards.
     */
    cursor?: ProfileCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileCards.
     */
    distinct?: ProfileCardScalarFieldEnum | ProfileCardScalarFieldEnum[]
  }

  /**
   * ProfileCard findFirstOrThrow
   */
  export type ProfileCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * Filter, which ProfileCard to fetch.
     */
    where?: ProfileCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileCards to fetch.
     */
    orderBy?: ProfileCardOrderByWithRelationInput | ProfileCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileCards.
     */
    cursor?: ProfileCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileCards.
     */
    distinct?: ProfileCardScalarFieldEnum | ProfileCardScalarFieldEnum[]
  }

  /**
   * ProfileCard findMany
   */
  export type ProfileCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * Filter, which ProfileCards to fetch.
     */
    where?: ProfileCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileCards to fetch.
     */
    orderBy?: ProfileCardOrderByWithRelationInput | ProfileCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileCards.
     */
    cursor?: ProfileCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileCards.
     */
    skip?: number
    distinct?: ProfileCardScalarFieldEnum | ProfileCardScalarFieldEnum[]
  }

  /**
   * ProfileCard create
   */
  export type ProfileCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * The data needed to create a ProfileCard.
     */
    data: XOR<ProfileCardCreateInput, ProfileCardUncheckedCreateInput>
  }

  /**
   * ProfileCard createMany
   */
  export type ProfileCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileCards.
     */
    data: ProfileCardCreateManyInput | ProfileCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileCard createManyAndReturn
   */
  export type ProfileCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileCards.
     */
    data: ProfileCardCreateManyInput | ProfileCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileCard update
   */
  export type ProfileCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * The data needed to update a ProfileCard.
     */
    data: XOR<ProfileCardUpdateInput, ProfileCardUncheckedUpdateInput>
    /**
     * Choose, which ProfileCard to update.
     */
    where: ProfileCardWhereUniqueInput
  }

  /**
   * ProfileCard updateMany
   */
  export type ProfileCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileCards.
     */
    data: XOR<ProfileCardUpdateManyMutationInput, ProfileCardUncheckedUpdateManyInput>
    /**
     * Filter which ProfileCards to update
     */
    where?: ProfileCardWhereInput
    /**
     * Limit how many ProfileCards to update.
     */
    limit?: number
  }

  /**
   * ProfileCard updateManyAndReturn
   */
  export type ProfileCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * The data used to update ProfileCards.
     */
    data: XOR<ProfileCardUpdateManyMutationInput, ProfileCardUncheckedUpdateManyInput>
    /**
     * Filter which ProfileCards to update
     */
    where?: ProfileCardWhereInput
    /**
     * Limit how many ProfileCards to update.
     */
    limit?: number
  }

  /**
   * ProfileCard upsert
   */
  export type ProfileCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * The filter to search for the ProfileCard to update in case it exists.
     */
    where: ProfileCardWhereUniqueInput
    /**
     * In case the ProfileCard found by the `where` argument doesn't exist, create a new ProfileCard with this data.
     */
    create: XOR<ProfileCardCreateInput, ProfileCardUncheckedCreateInput>
    /**
     * In case the ProfileCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileCardUpdateInput, ProfileCardUncheckedUpdateInput>
  }

  /**
   * ProfileCard delete
   */
  export type ProfileCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
    /**
     * Filter which ProfileCard to delete.
     */
    where: ProfileCardWhereUniqueInput
  }

  /**
   * ProfileCard deleteMany
   */
  export type ProfileCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileCards to delete
     */
    where?: ProfileCardWhereInput
    /**
     * Limit how many ProfileCards to delete.
     */
    limit?: number
  }

  /**
   * ProfileCard without action
   */
  export type ProfileCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCard
     */
    select?: ProfileCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileCard
     */
    omit?: ProfileCardOmit<ExtArgs> | null
  }


  /**
   * Model AboutContent
   */

  export type AggregateAboutContent = {
    _count: AboutContentCountAggregateOutputType | null
    _avg: AboutContentAvgAggregateOutputType | null
    _sum: AboutContentSumAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  export type AboutContentAvgAggregateOutputType = {
    id: number | null
  }

  export type AboutContentSumAggregateOutputType = {
    id: number | null
  }

  export type AboutContentMinAggregateOutputType = {
    id: number | null
    whoAmITitle: string | null
    whoAmIContent: string | null
    myApproachTitle: string | null
    myApproachContent: string | null
    lanyardCardFile: string | null
    lanyardTextureFile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutContentMaxAggregateOutputType = {
    id: number | null
    whoAmITitle: string | null
    whoAmIContent: string | null
    myApproachTitle: string | null
    myApproachContent: string | null
    lanyardCardFile: string | null
    lanyardTextureFile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutContentCountAggregateOutputType = {
    id: number
    whoAmITitle: number
    whoAmIContent: number
    myApproachTitle: number
    myApproachContent: number
    lanyardCardFile: number
    lanyardTextureFile: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutContentAvgAggregateInputType = {
    id?: true
  }

  export type AboutContentSumAggregateInputType = {
    id?: true
  }

  export type AboutContentMinAggregateInputType = {
    id?: true
    whoAmITitle?: true
    whoAmIContent?: true
    myApproachTitle?: true
    myApproachContent?: true
    lanyardCardFile?: true
    lanyardTextureFile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutContentMaxAggregateInputType = {
    id?: true
    whoAmITitle?: true
    whoAmIContent?: true
    myApproachTitle?: true
    myApproachContent?: true
    lanyardCardFile?: true
    lanyardTextureFile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutContentCountAggregateInputType = {
    id?: true
    whoAmITitle?: true
    whoAmIContent?: true
    myApproachTitle?: true
    myApproachContent?: true
    lanyardCardFile?: true
    lanyardTextureFile?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContent to aggregate.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutContents
    **/
    _count?: true | AboutContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutContentMaxAggregateInputType
  }

  export type GetAboutContentAggregateType<T extends AboutContentAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutContent[P]>
      : GetScalarType<T[P], AggregateAboutContent[P]>
  }




  export type AboutContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutContentWhereInput
    orderBy?: AboutContentOrderByWithAggregationInput | AboutContentOrderByWithAggregationInput[]
    by: AboutContentScalarFieldEnum[] | AboutContentScalarFieldEnum
    having?: AboutContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutContentCountAggregateInputType | true
    _avg?: AboutContentAvgAggregateInputType
    _sum?: AboutContentSumAggregateInputType
    _min?: AboutContentMinAggregateInputType
    _max?: AboutContentMaxAggregateInputType
  }

  export type AboutContentGroupByOutputType = {
    id: number
    whoAmITitle: string
    whoAmIContent: string
    myApproachTitle: string
    myApproachContent: string
    lanyardCardFile: string
    lanyardTextureFile: string
    createdAt: Date
    updatedAt: Date
    _count: AboutContentCountAggregateOutputType | null
    _avg: AboutContentAvgAggregateOutputType | null
    _sum: AboutContentSumAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  type GetAboutContentGroupByPayload<T extends AboutContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
            : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
        }
      >
    >


  export type AboutContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whoAmITitle?: boolean
    whoAmIContent?: boolean
    myApproachTitle?: boolean
    myApproachContent?: boolean
    lanyardCardFile?: boolean
    lanyardTextureFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutContent"]>

  export type AboutContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whoAmITitle?: boolean
    whoAmIContent?: boolean
    myApproachTitle?: boolean
    myApproachContent?: boolean
    lanyardCardFile?: boolean
    lanyardTextureFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutContent"]>

  export type AboutContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whoAmITitle?: boolean
    whoAmIContent?: boolean
    myApproachTitle?: boolean
    myApproachContent?: boolean
    lanyardCardFile?: boolean
    lanyardTextureFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutContent"]>

  export type AboutContentSelectScalar = {
    id?: boolean
    whoAmITitle?: boolean
    whoAmIContent?: boolean
    myApproachTitle?: boolean
    myApproachContent?: boolean
    lanyardCardFile?: boolean
    lanyardTextureFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "whoAmITitle" | "whoAmIContent" | "myApproachTitle" | "myApproachContent" | "lanyardCardFile" | "lanyardTextureFile" | "createdAt" | "updatedAt", ExtArgs["result"]["aboutContent"]>

  export type $AboutContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      whoAmITitle: string
      whoAmIContent: string
      myApproachTitle: string
      myApproachContent: string
      lanyardCardFile: string
      lanyardTextureFile: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutContent"]>
    composites: {}
  }

  type AboutContentGetPayload<S extends boolean | null | undefined | AboutContentDefaultArgs> = $Result.GetResult<Prisma.$AboutContentPayload, S>

  type AboutContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutContentCountAggregateInputType | true
    }

  export interface AboutContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutContent'], meta: { name: 'AboutContent' } }
    /**
     * Find zero or one AboutContent that matches the filter.
     * @param {AboutContentFindUniqueArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutContentFindUniqueArgs>(args: SelectSubset<T, AboutContentFindUniqueArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AboutContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutContentFindUniqueOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutContentFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AboutContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutContentFindFirstArgs>(args?: SelectSubset<T, AboutContentFindFirstArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AboutContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutContentFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AboutContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutContents
     * const aboutContents = await prisma.aboutContent.findMany()
     * 
     * // Get first 10 AboutContents
     * const aboutContents = await prisma.aboutContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutContentFindManyArgs>(args?: SelectSubset<T, AboutContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AboutContent.
     * @param {AboutContentCreateArgs} args - Arguments to create a AboutContent.
     * @example
     * // Create one AboutContent
     * const AboutContent = await prisma.aboutContent.create({
     *   data: {
     *     // ... data to create a AboutContent
     *   }
     * })
     * 
     */
    create<T extends AboutContentCreateArgs>(args: SelectSubset<T, AboutContentCreateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AboutContents.
     * @param {AboutContentCreateManyArgs} args - Arguments to create many AboutContents.
     * @example
     * // Create many AboutContents
     * const aboutContent = await prisma.aboutContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutContentCreateManyArgs>(args?: SelectSubset<T, AboutContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutContents and returns the data saved in the database.
     * @param {AboutContentCreateManyAndReturnArgs} args - Arguments to create many AboutContents.
     * @example
     * // Create many AboutContents
     * const aboutContent = await prisma.aboutContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutContents and only return the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutContentCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AboutContent.
     * @param {AboutContentDeleteArgs} args - Arguments to delete one AboutContent.
     * @example
     * // Delete one AboutContent
     * const AboutContent = await prisma.aboutContent.delete({
     *   where: {
     *     // ... filter to delete one AboutContent
     *   }
     * })
     * 
     */
    delete<T extends AboutContentDeleteArgs>(args: SelectSubset<T, AboutContentDeleteArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AboutContent.
     * @param {AboutContentUpdateArgs} args - Arguments to update one AboutContent.
     * @example
     * // Update one AboutContent
     * const aboutContent = await prisma.aboutContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutContentUpdateArgs>(args: SelectSubset<T, AboutContentUpdateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AboutContents.
     * @param {AboutContentDeleteManyArgs} args - Arguments to filter AboutContents to delete.
     * @example
     * // Delete a few AboutContents
     * const { count } = await prisma.aboutContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutContentDeleteManyArgs>(args?: SelectSubset<T, AboutContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutContents
     * const aboutContent = await prisma.aboutContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutContentUpdateManyArgs>(args: SelectSubset<T, AboutContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutContents and returns the data updated in the database.
     * @param {AboutContentUpdateManyAndReturnArgs} args - Arguments to update many AboutContents.
     * @example
     * // Update many AboutContents
     * const aboutContent = await prisma.aboutContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AboutContents and only return the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AboutContentUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AboutContent.
     * @param {AboutContentUpsertArgs} args - Arguments to update or create a AboutContent.
     * @example
     * // Update or create a AboutContent
     * const aboutContent = await prisma.aboutContent.upsert({
     *   create: {
     *     // ... data to create a AboutContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutContent we want to update
     *   }
     * })
     */
    upsert<T extends AboutContentUpsertArgs>(args: SelectSubset<T, AboutContentUpsertArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentCountArgs} args - Arguments to filter AboutContents to count.
     * @example
     * // Count the number of AboutContents
     * const count = await prisma.aboutContent.count({
     *   where: {
     *     // ... the filter for the AboutContents we want to count
     *   }
     * })
    **/
    count<T extends AboutContentCountArgs>(
      args?: Subset<T, AboutContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutContentAggregateArgs>(args: Subset<T, AboutContentAggregateArgs>): Prisma.PrismaPromise<GetAboutContentAggregateType<T>>

    /**
     * Group by AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutContentGroupByArgs['orderBy'] }
        : { orderBy?: AboutContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutContent model
   */
  readonly fields: AboutContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutContent model
   */ 
  interface AboutContentFieldRefs {
    readonly id: FieldRef<"AboutContent", 'Int'>
    readonly whoAmITitle: FieldRef<"AboutContent", 'String'>
    readonly whoAmIContent: FieldRef<"AboutContent", 'String'>
    readonly myApproachTitle: FieldRef<"AboutContent", 'String'>
    readonly myApproachContent: FieldRef<"AboutContent", 'String'>
    readonly lanyardCardFile: FieldRef<"AboutContent", 'String'>
    readonly lanyardTextureFile: FieldRef<"AboutContent", 'String'>
    readonly createdAt: FieldRef<"AboutContent", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutContent findUnique
   */
  export type AboutContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findUniqueOrThrow
   */
  export type AboutContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findFirst
   */
  export type AboutContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findFirstOrThrow
   */
  export type AboutContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findMany
   */
  export type AboutContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContents to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent create
   */
  export type AboutContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutContent.
     */
    data: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
  }

  /**
   * AboutContent createMany
   */
  export type AboutContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutContents.
     */
    data: AboutContentCreateManyInput | AboutContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutContent createManyAndReturn
   */
  export type AboutContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * The data used to create many AboutContents.
     */
    data: AboutContentCreateManyInput | AboutContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutContent update
   */
  export type AboutContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutContent.
     */
    data: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
    /**
     * Choose, which AboutContent to update.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent updateMany
   */
  export type AboutContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutContents.
     */
    data: XOR<AboutContentUpdateManyMutationInput, AboutContentUncheckedUpdateManyInput>
    /**
     * Filter which AboutContents to update
     */
    where?: AboutContentWhereInput
    /**
     * Limit how many AboutContents to update.
     */
    limit?: number
  }

  /**
   * AboutContent updateManyAndReturn
   */
  export type AboutContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * The data used to update AboutContents.
     */
    data: XOR<AboutContentUpdateManyMutationInput, AboutContentUncheckedUpdateManyInput>
    /**
     * Filter which AboutContents to update
     */
    where?: AboutContentWhereInput
    /**
     * Limit how many AboutContents to update.
     */
    limit?: number
  }

  /**
   * AboutContent upsert
   */
  export type AboutContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutContent to update in case it exists.
     */
    where: AboutContentWhereUniqueInput
    /**
     * In case the AboutContent found by the `where` argument doesn't exist, create a new AboutContent with this data.
     */
    create: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
    /**
     * In case the AboutContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
  }

  /**
   * AboutContent delete
   */
  export type AboutContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter which AboutContent to delete.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent deleteMany
   */
  export type AboutContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContents to delete
     */
    where?: AboutContentWhereInput
    /**
     * Limit how many AboutContents to delete.
     */
    limit?: number
  }

  /**
   * AboutContent without action
   */
  export type AboutContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    skillName: string | null
    skillCategory: string | null
    skillIcon: string | null
    gradientFrom: string | null
    gradientTo: string | null
    borderColor: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    skillName: string | null
    skillCategory: string | null
    skillIcon: string | null
    gradientFrom: string | null
    gradientTo: string | null
    borderColor: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    skillName: number
    skillCategory: number
    skillIcon: number
    gradientFrom: number
    gradientTo: number
    borderColor: number
    displayOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    skillName?: true
    skillCategory?: true
    skillIcon?: true
    gradientFrom?: true
    gradientTo?: true
    borderColor?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    skillName?: true
    skillCategory?: true
    skillIcon?: true
    gradientFrom?: true
    gradientTo?: true
    borderColor?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    skillName?: true
    skillCategory?: true
    skillIcon?: true
    gradientFrom?: true
    gradientTo?: true
    borderColor?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    skillName: string
    skillCategory: string
    skillIcon: string
    gradientFrom: string
    gradientTo: string
    borderColor: string
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillName?: boolean
    skillCategory?: boolean
    skillIcon?: boolean
    gradientFrom?: boolean
    gradientTo?: boolean
    borderColor?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillName?: boolean
    skillCategory?: boolean
    skillIcon?: boolean
    gradientFrom?: boolean
    gradientTo?: boolean
    borderColor?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillName?: boolean
    skillCategory?: boolean
    skillIcon?: boolean
    gradientFrom?: boolean
    gradientTo?: boolean
    borderColor?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    skillName?: boolean
    skillCategory?: boolean
    skillIcon?: boolean
    gradientFrom?: boolean
    gradientTo?: boolean
    borderColor?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillName" | "skillCategory" | "skillIcon" | "gradientFrom" | "gradientTo" | "borderColor" | "displayOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skillName: string
      skillCategory: string
      skillIcon: string
      gradientFrom: string
      gradientTo: string
      borderColor: string
      displayOrder: number | null
      isActive: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */ 
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly skillName: FieldRef<"Skill", 'String'>
    readonly skillCategory: FieldRef<"Skill", 'String'>
    readonly skillIcon: FieldRef<"Skill", 'String'>
    readonly gradientFrom: FieldRef<"Skill", 'String'>
    readonly gradientTo: FieldRef<"Skill", 'String'>
    readonly borderColor: FieldRef<"Skill", 'String'>
    readonly displayOrder: FieldRef<"Skill", 'Int'>
    readonly isActive: FieldRef<"Skill", 'Boolean'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    projectTitle: string | null
    projectSubtitle: string | null
    projectHandle: string | null
    projectLocation: string | null
    projectImageUrl: string | null
    projectUrl: string | null
    demoUrl: string | null
    projectDescription: string | null
    borderColor: string | null
    gradient: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    category: string | null
    aboutTitle: string | null
    detailsTitle: string | null
    featuresTitle: string | null
    galleryTitle: string | null
    demoType: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    projectTitle: string | null
    projectSubtitle: string | null
    projectHandle: string | null
    projectLocation: string | null
    projectImageUrl: string | null
    projectUrl: string | null
    demoUrl: string | null
    projectDescription: string | null
    borderColor: string | null
    gradient: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    category: string | null
    aboutTitle: string | null
    detailsTitle: string | null
    featuresTitle: string | null
    galleryTitle: string | null
    demoType: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    projectTitle: number
    projectSubtitle: number
    projectHandle: number
    projectLocation: number
    projectImageUrl: number
    projectUrl: number
    demoUrl: number
    projectDescription: number
    borderColor: number
    gradient: number
    displayOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    category: number
    techStack: number
    galleryImages: number
    features: number
    aboutTitle: number
    detailsTitle: number
    featuresTitle: number
    galleryTitle: number
    demoType: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    projectTitle?: true
    projectSubtitle?: true
    projectHandle?: true
    projectLocation?: true
    projectImageUrl?: true
    projectUrl?: true
    demoUrl?: true
    projectDescription?: true
    borderColor?: true
    gradient?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    aboutTitle?: true
    detailsTitle?: true
    featuresTitle?: true
    galleryTitle?: true
    demoType?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    projectTitle?: true
    projectSubtitle?: true
    projectHandle?: true
    projectLocation?: true
    projectImageUrl?: true
    projectUrl?: true
    demoUrl?: true
    projectDescription?: true
    borderColor?: true
    gradient?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    aboutTitle?: true
    detailsTitle?: true
    featuresTitle?: true
    galleryTitle?: true
    demoType?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    projectTitle?: true
    projectSubtitle?: true
    projectHandle?: true
    projectLocation?: true
    projectImageUrl?: true
    projectUrl?: true
    demoUrl?: true
    projectDescription?: true
    borderColor?: true
    gradient?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    techStack?: true
    galleryImages?: true
    features?: true
    aboutTitle?: true
    detailsTitle?: true
    featuresTitle?: true
    galleryTitle?: true
    demoType?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    projectTitle: string
    projectSubtitle: string
    projectHandle: string | null
    projectLocation: string | null
    projectImageUrl: string
    projectUrl: string | null
    demoUrl: string | null
    projectDescription: string | null
    borderColor: string
    gradient: string
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date
    updatedAt: Date
    category: string | null
    techStack: string[]
    galleryImages: JsonValue | null
    features: JsonValue | null
    aboutTitle: string | null
    detailsTitle: string | null
    featuresTitle: string | null
    galleryTitle: string | null
    demoType: string | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectTitle?: boolean
    projectSubtitle?: boolean
    projectHandle?: boolean
    projectLocation?: boolean
    projectImageUrl?: boolean
    projectUrl?: boolean
    demoUrl?: boolean
    projectDescription?: boolean
    borderColor?: boolean
    gradient?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    techStack?: boolean
    galleryImages?: boolean
    features?: boolean
    aboutTitle?: boolean
    detailsTitle?: boolean
    featuresTitle?: boolean
    galleryTitle?: boolean
    demoType?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectTitle?: boolean
    projectSubtitle?: boolean
    projectHandle?: boolean
    projectLocation?: boolean
    projectImageUrl?: boolean
    projectUrl?: boolean
    demoUrl?: boolean
    projectDescription?: boolean
    borderColor?: boolean
    gradient?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    techStack?: boolean
    galleryImages?: boolean
    features?: boolean
    aboutTitle?: boolean
    detailsTitle?: boolean
    featuresTitle?: boolean
    galleryTitle?: boolean
    demoType?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectTitle?: boolean
    projectSubtitle?: boolean
    projectHandle?: boolean
    projectLocation?: boolean
    projectImageUrl?: boolean
    projectUrl?: boolean
    demoUrl?: boolean
    projectDescription?: boolean
    borderColor?: boolean
    gradient?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    techStack?: boolean
    galleryImages?: boolean
    features?: boolean
    aboutTitle?: boolean
    detailsTitle?: boolean
    featuresTitle?: boolean
    galleryTitle?: boolean
    demoType?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    projectTitle?: boolean
    projectSubtitle?: boolean
    projectHandle?: boolean
    projectLocation?: boolean
    projectImageUrl?: boolean
    projectUrl?: boolean
    demoUrl?: boolean
    projectDescription?: boolean
    borderColor?: boolean
    gradient?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    techStack?: boolean
    galleryImages?: boolean
    features?: boolean
    aboutTitle?: boolean
    detailsTitle?: boolean
    featuresTitle?: boolean
    galleryTitle?: boolean
    demoType?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectTitle" | "projectSubtitle" | "projectHandle" | "projectLocation" | "projectImageUrl" | "projectUrl" | "demoUrl" | "projectDescription" | "borderColor" | "gradient" | "displayOrder" | "isActive" | "createdAt" | "updatedAt" | "category" | "techStack" | "galleryImages" | "features" | "aboutTitle" | "detailsTitle" | "featuresTitle" | "galleryTitle" | "demoType", ExtArgs["result"]["project"]>

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectTitle: string
      projectSubtitle: string
      projectHandle: string | null
      projectLocation: string | null
      projectImageUrl: string
      projectUrl: string | null
      demoUrl: string | null
      projectDescription: string | null
      borderColor: string
      gradient: string
      displayOrder: number | null
      isActive: boolean | null
      createdAt: Date
      updatedAt: Date
      category: string | null
      techStack: string[]
      galleryImages: Prisma.JsonValue | null
      features: Prisma.JsonValue | null
      aboutTitle: string | null
      detailsTitle: string | null
      featuresTitle: string | null
      galleryTitle: string | null
      demoType: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly projectTitle: FieldRef<"Project", 'String'>
    readonly projectSubtitle: FieldRef<"Project", 'String'>
    readonly projectHandle: FieldRef<"Project", 'String'>
    readonly projectLocation: FieldRef<"Project", 'String'>
    readonly projectImageUrl: FieldRef<"Project", 'String'>
    readonly projectUrl: FieldRef<"Project", 'String'>
    readonly demoUrl: FieldRef<"Project", 'String'>
    readonly projectDescription: FieldRef<"Project", 'String'>
    readonly borderColor: FieldRef<"Project", 'String'>
    readonly gradient: FieldRef<"Project", 'String'>
    readonly displayOrder: FieldRef<"Project", 'Int'>
    readonly isActive: FieldRef<"Project", 'Boolean'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly category: FieldRef<"Project", 'String'>
    readonly techStack: FieldRef<"Project", 'String[]'>
    readonly galleryImages: FieldRef<"Project", 'Json'>
    readonly features: FieldRef<"Project", 'Json'>
    readonly aboutTitle: FieldRef<"Project", 'String'>
    readonly detailsTitle: FieldRef<"Project", 'String'>
    readonly featuresTitle: FieldRef<"Project", 'String'>
    readonly galleryTitle: FieldRef<"Project", 'String'>
    readonly demoType: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type CertificateSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    title: string | null
    issuer: string | null
    date: string | null
    imageUrl: string | null
    credentialUrl: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    issuer: string | null
    date: string | null
    imageUrl: string | null
    credentialUrl: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    title: number
    issuer: number
    date: number
    imageUrl: number
    credentialUrl: number
    displayOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CertificateAvgAggregateInputType = {
    displayOrder?: true
  }

  export type CertificateSumAggregateInputType = {
    displayOrder?: true
  }

  export type CertificateMinAggregateInputType = {
    id?: true
    title?: true
    issuer?: true
    date?: true
    imageUrl?: true
    credentialUrl?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    title?: true
    issuer?: true
    date?: true
    imageUrl?: true
    credentialUrl?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    title?: true
    issuer?: true
    date?: true
    imageUrl?: true
    credentialUrl?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _avg?: CertificateAvgAggregateInputType
    _sum?: CertificateSumAggregateInputType
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    title: string
    issuer: string
    date: string | null
    imageUrl: string
    credentialUrl: string | null
    displayOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    issuer?: boolean
    date?: boolean
    imageUrl?: boolean
    credentialUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    issuer?: boolean
    date?: boolean
    imageUrl?: boolean
    credentialUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    issuer?: boolean
    date?: boolean
    imageUrl?: boolean
    credentialUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    title?: boolean
    issuer?: boolean
    date?: boolean
    imageUrl?: boolean
    credentialUrl?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "issuer" | "date" | "imageUrl" | "credentialUrl" | "displayOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["certificate"]>

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      issuer: string
      date: string | null
      imageUrl: string
      credentialUrl: string | null
      displayOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificate model
   */ 
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly title: FieldRef<"Certificate", 'String'>
    readonly issuer: FieldRef<"Certificate", 'String'>
    readonly date: FieldRef<"Certificate", 'String'>
    readonly imageUrl: FieldRef<"Certificate", 'String'>
    readonly credentialUrl: FieldRef<"Certificate", 'String'>
    readonly displayOrder: FieldRef<"Certificate", 'Int'>
    readonly isActive: FieldRef<"Certificate", 'Boolean'>
    readonly createdAt: FieldRef<"Certificate", 'DateTime'>
    readonly updatedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    photoUrl: 'photoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const HomeContentScalarFieldEnum: {
    id: 'id',
    greeting: 'greeting',
    name: 'name',
    description: 'description',
    cvUrl: 'cvUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomeContentScalarFieldEnum = (typeof HomeContentScalarFieldEnum)[keyof typeof HomeContentScalarFieldEnum]


  export const HomeStatScalarFieldEnum: {
    id: 'id',
    statKey: 'statKey',
    statValue: 'statValue',
    statLabel: 'statLabel',
    icon: 'icon',
    gradientFrom: 'gradientFrom',
    gradientTo: 'gradientTo',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomeStatScalarFieldEnum = (typeof HomeStatScalarFieldEnum)[keyof typeof HomeStatScalarFieldEnum]


  export const ProfileCardScalarFieldEnum: {
    id: 'id',
    handle: 'handle',
    status: 'status',
    avatarUrl: 'avatarUrl',
    miniAvatarUrl: 'miniAvatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileCardScalarFieldEnum = (typeof ProfileCardScalarFieldEnum)[keyof typeof ProfileCardScalarFieldEnum]


  export const AboutContentScalarFieldEnum: {
    id: 'id',
    whoAmITitle: 'whoAmITitle',
    whoAmIContent: 'whoAmIContent',
    myApproachTitle: 'myApproachTitle',
    myApproachContent: 'myApproachContent',
    lanyardCardFile: 'lanyardCardFile',
    lanyardTextureFile: 'lanyardTextureFile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutContentScalarFieldEnum = (typeof AboutContentScalarFieldEnum)[keyof typeof AboutContentScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    skillName: 'skillName',
    skillCategory: 'skillCategory',
    skillIcon: 'skillIcon',
    gradientFrom: 'gradientFrom',
    gradientTo: 'gradientTo',
    borderColor: 'borderColor',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    projectTitle: 'projectTitle',
    projectSubtitle: 'projectSubtitle',
    projectHandle: 'projectHandle',
    projectLocation: 'projectLocation',
    projectImageUrl: 'projectImageUrl',
    projectUrl: 'projectUrl',
    demoUrl: 'demoUrl',
    projectDescription: 'projectDescription',
    borderColor: 'borderColor',
    gradient: 'gradient',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    category: 'category',
    techStack: 'techStack',
    galleryImages: 'galleryImages',
    features: 'features',
    aboutTitle: 'aboutTitle',
    detailsTitle: 'detailsTitle',
    featuresTitle: 'featuresTitle',
    galleryTitle: 'galleryTitle',
    demoType: 'demoType'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    issuer: 'issuer',
    date: 'date',
    imageUrl: 'imageUrl',
    credentialUrl: 'credentialUrl',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    username?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    photoUrl?: StringNullableFilter<"AdminUser"> | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    photoUrl?: StringNullableFilter<"AdminUser"> | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "username">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"AdminUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type HomeContentWhereInput = {
    AND?: HomeContentWhereInput | HomeContentWhereInput[]
    OR?: HomeContentWhereInput[]
    NOT?: HomeContentWhereInput | HomeContentWhereInput[]
    id?: IntFilter<"HomeContent"> | number
    greeting?: StringFilter<"HomeContent"> | string
    name?: StringFilter<"HomeContent"> | string
    description?: StringFilter<"HomeContent"> | string
    cvUrl?: StringFilter<"HomeContent"> | string
    createdAt?: DateTimeFilter<"HomeContent"> | Date | string
    updatedAt?: DateTimeFilter<"HomeContent"> | Date | string
  }

  export type HomeContentOrderByWithRelationInput = {
    id?: SortOrder
    greeting?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cvUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HomeContentWhereInput | HomeContentWhereInput[]
    OR?: HomeContentWhereInput[]
    NOT?: HomeContentWhereInput | HomeContentWhereInput[]
    greeting?: StringFilter<"HomeContent"> | string
    name?: StringFilter<"HomeContent"> | string
    description?: StringFilter<"HomeContent"> | string
    cvUrl?: StringFilter<"HomeContent"> | string
    createdAt?: DateTimeFilter<"HomeContent"> | Date | string
    updatedAt?: DateTimeFilter<"HomeContent"> | Date | string
  }, "id">

  export type HomeContentOrderByWithAggregationInput = {
    id?: SortOrder
    greeting?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cvUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomeContentCountOrderByAggregateInput
    _avg?: HomeContentAvgOrderByAggregateInput
    _max?: HomeContentMaxOrderByAggregateInput
    _min?: HomeContentMinOrderByAggregateInput
    _sum?: HomeContentSumOrderByAggregateInput
  }

  export type HomeContentScalarWhereWithAggregatesInput = {
    AND?: HomeContentScalarWhereWithAggregatesInput | HomeContentScalarWhereWithAggregatesInput[]
    OR?: HomeContentScalarWhereWithAggregatesInput[]
    NOT?: HomeContentScalarWhereWithAggregatesInput | HomeContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HomeContent"> | number
    greeting?: StringWithAggregatesFilter<"HomeContent"> | string
    name?: StringWithAggregatesFilter<"HomeContent"> | string
    description?: StringWithAggregatesFilter<"HomeContent"> | string
    cvUrl?: StringWithAggregatesFilter<"HomeContent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HomeContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomeContent"> | Date | string
  }

  export type HomeStatWhereInput = {
    AND?: HomeStatWhereInput | HomeStatWhereInput[]
    OR?: HomeStatWhereInput[]
    NOT?: HomeStatWhereInput | HomeStatWhereInput[]
    id?: IntFilter<"HomeStat"> | number
    statKey?: StringFilter<"HomeStat"> | string
    statValue?: StringFilter<"HomeStat"> | string
    statLabel?: StringFilter<"HomeStat"> | string
    icon?: StringNullableFilter<"HomeStat"> | string | null
    gradientFrom?: StringFilter<"HomeStat"> | string
    gradientTo?: StringFilter<"HomeStat"> | string
    displayOrder?: IntNullableFilter<"HomeStat"> | number | null
    createdAt?: DateTimeFilter<"HomeStat"> | Date | string
    updatedAt?: DateTimeFilter<"HomeStat"> | Date | string
  }

  export type HomeStatOrderByWithRelationInput = {
    id?: SortOrder
    statKey?: SortOrder
    statValue?: SortOrder
    statLabel?: SortOrder
    icon?: SortOrderInput | SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    displayOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeStatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    statKey?: string
    AND?: HomeStatWhereInput | HomeStatWhereInput[]
    OR?: HomeStatWhereInput[]
    NOT?: HomeStatWhereInput | HomeStatWhereInput[]
    statValue?: StringFilter<"HomeStat"> | string
    statLabel?: StringFilter<"HomeStat"> | string
    icon?: StringNullableFilter<"HomeStat"> | string | null
    gradientFrom?: StringFilter<"HomeStat"> | string
    gradientTo?: StringFilter<"HomeStat"> | string
    displayOrder?: IntNullableFilter<"HomeStat"> | number | null
    createdAt?: DateTimeFilter<"HomeStat"> | Date | string
    updatedAt?: DateTimeFilter<"HomeStat"> | Date | string
  }, "id" | "statKey">

  export type HomeStatOrderByWithAggregationInput = {
    id?: SortOrder
    statKey?: SortOrder
    statValue?: SortOrder
    statLabel?: SortOrder
    icon?: SortOrderInput | SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    displayOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomeStatCountOrderByAggregateInput
    _avg?: HomeStatAvgOrderByAggregateInput
    _max?: HomeStatMaxOrderByAggregateInput
    _min?: HomeStatMinOrderByAggregateInput
    _sum?: HomeStatSumOrderByAggregateInput
  }

  export type HomeStatScalarWhereWithAggregatesInput = {
    AND?: HomeStatScalarWhereWithAggregatesInput | HomeStatScalarWhereWithAggregatesInput[]
    OR?: HomeStatScalarWhereWithAggregatesInput[]
    NOT?: HomeStatScalarWhereWithAggregatesInput | HomeStatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HomeStat"> | number
    statKey?: StringWithAggregatesFilter<"HomeStat"> | string
    statValue?: StringWithAggregatesFilter<"HomeStat"> | string
    statLabel?: StringWithAggregatesFilter<"HomeStat"> | string
    icon?: StringNullableWithAggregatesFilter<"HomeStat"> | string | null
    gradientFrom?: StringWithAggregatesFilter<"HomeStat"> | string
    gradientTo?: StringWithAggregatesFilter<"HomeStat"> | string
    displayOrder?: IntNullableWithAggregatesFilter<"HomeStat"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"HomeStat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomeStat"> | Date | string
  }

  export type ProfileCardWhereInput = {
    AND?: ProfileCardWhereInput | ProfileCardWhereInput[]
    OR?: ProfileCardWhereInput[]
    NOT?: ProfileCardWhereInput | ProfileCardWhereInput[]
    id?: IntFilter<"ProfileCard"> | number
    handle?: StringFilter<"ProfileCard"> | string
    status?: StringFilter<"ProfileCard"> | string
    avatarUrl?: StringFilter<"ProfileCard"> | string
    miniAvatarUrl?: StringFilter<"ProfileCard"> | string
    createdAt?: DateTimeFilter<"ProfileCard"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileCard"> | Date | string
  }

  export type ProfileCardOrderByWithRelationInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    avatarUrl?: SortOrder
    miniAvatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfileCardWhereInput | ProfileCardWhereInput[]
    OR?: ProfileCardWhereInput[]
    NOT?: ProfileCardWhereInput | ProfileCardWhereInput[]
    handle?: StringFilter<"ProfileCard"> | string
    status?: StringFilter<"ProfileCard"> | string
    avatarUrl?: StringFilter<"ProfileCard"> | string
    miniAvatarUrl?: StringFilter<"ProfileCard"> | string
    createdAt?: DateTimeFilter<"ProfileCard"> | Date | string
    updatedAt?: DateTimeFilter<"ProfileCard"> | Date | string
  }, "id">

  export type ProfileCardOrderByWithAggregationInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    avatarUrl?: SortOrder
    miniAvatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCardCountOrderByAggregateInput
    _avg?: ProfileCardAvgOrderByAggregateInput
    _max?: ProfileCardMaxOrderByAggregateInput
    _min?: ProfileCardMinOrderByAggregateInput
    _sum?: ProfileCardSumOrderByAggregateInput
  }

  export type ProfileCardScalarWhereWithAggregatesInput = {
    AND?: ProfileCardScalarWhereWithAggregatesInput | ProfileCardScalarWhereWithAggregatesInput[]
    OR?: ProfileCardScalarWhereWithAggregatesInput[]
    NOT?: ProfileCardScalarWhereWithAggregatesInput | ProfileCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfileCard"> | number
    handle?: StringWithAggregatesFilter<"ProfileCard"> | string
    status?: StringWithAggregatesFilter<"ProfileCard"> | string
    avatarUrl?: StringWithAggregatesFilter<"ProfileCard"> | string
    miniAvatarUrl?: StringWithAggregatesFilter<"ProfileCard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProfileCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfileCard"> | Date | string
  }

  export type AboutContentWhereInput = {
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    id?: IntFilter<"AboutContent"> | number
    whoAmITitle?: StringFilter<"AboutContent"> | string
    whoAmIContent?: StringFilter<"AboutContent"> | string
    myApproachTitle?: StringFilter<"AboutContent"> | string
    myApproachContent?: StringFilter<"AboutContent"> | string
    lanyardCardFile?: StringFilter<"AboutContent"> | string
    lanyardTextureFile?: StringFilter<"AboutContent"> | string
    createdAt?: DateTimeFilter<"AboutContent"> | Date | string
    updatedAt?: DateTimeFilter<"AboutContent"> | Date | string
  }

  export type AboutContentOrderByWithRelationInput = {
    id?: SortOrder
    whoAmITitle?: SortOrder
    whoAmIContent?: SortOrder
    myApproachTitle?: SortOrder
    myApproachContent?: SortOrder
    lanyardCardFile?: SortOrder
    lanyardTextureFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    whoAmITitle?: StringFilter<"AboutContent"> | string
    whoAmIContent?: StringFilter<"AboutContent"> | string
    myApproachTitle?: StringFilter<"AboutContent"> | string
    myApproachContent?: StringFilter<"AboutContent"> | string
    lanyardCardFile?: StringFilter<"AboutContent"> | string
    lanyardTextureFile?: StringFilter<"AboutContent"> | string
    createdAt?: DateTimeFilter<"AboutContent"> | Date | string
    updatedAt?: DateTimeFilter<"AboutContent"> | Date | string
  }, "id">

  export type AboutContentOrderByWithAggregationInput = {
    id?: SortOrder
    whoAmITitle?: SortOrder
    whoAmIContent?: SortOrder
    myApproachTitle?: SortOrder
    myApproachContent?: SortOrder
    lanyardCardFile?: SortOrder
    lanyardTextureFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutContentCountOrderByAggregateInput
    _avg?: AboutContentAvgOrderByAggregateInput
    _max?: AboutContentMaxOrderByAggregateInput
    _min?: AboutContentMinOrderByAggregateInput
    _sum?: AboutContentSumOrderByAggregateInput
  }

  export type AboutContentScalarWhereWithAggregatesInput = {
    AND?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    OR?: AboutContentScalarWhereWithAggregatesInput[]
    NOT?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutContent"> | number
    whoAmITitle?: StringWithAggregatesFilter<"AboutContent"> | string
    whoAmIContent?: StringWithAggregatesFilter<"AboutContent"> | string
    myApproachTitle?: StringWithAggregatesFilter<"AboutContent"> | string
    myApproachContent?: StringWithAggregatesFilter<"AboutContent"> | string
    lanyardCardFile?: StringWithAggregatesFilter<"AboutContent"> | string
    lanyardTextureFile?: StringWithAggregatesFilter<"AboutContent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AboutContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutContent"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    skillName?: StringFilter<"Skill"> | string
    skillCategory?: StringFilter<"Skill"> | string
    skillIcon?: StringFilter<"Skill"> | string
    gradientFrom?: StringFilter<"Skill"> | string
    gradientTo?: StringFilter<"Skill"> | string
    borderColor?: StringFilter<"Skill"> | string
    displayOrder?: IntNullableFilter<"Skill"> | number | null
    isActive?: BoolNullableFilter<"Skill"> | boolean | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    skillName?: SortOrder
    skillCategory?: SortOrder
    skillIcon?: SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    borderColor?: SortOrder
    displayOrder?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    skillName?: StringFilter<"Skill"> | string
    skillCategory?: StringFilter<"Skill"> | string
    skillIcon?: StringFilter<"Skill"> | string
    gradientFrom?: StringFilter<"Skill"> | string
    gradientTo?: StringFilter<"Skill"> | string
    borderColor?: StringFilter<"Skill"> | string
    displayOrder?: IntNullableFilter<"Skill"> | number | null
    isActive?: BoolNullableFilter<"Skill"> | boolean | null
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    skillName?: SortOrder
    skillCategory?: SortOrder
    skillIcon?: SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    borderColor?: SortOrder
    displayOrder?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    skillName?: StringWithAggregatesFilter<"Skill"> | string
    skillCategory?: StringWithAggregatesFilter<"Skill"> | string
    skillIcon?: StringWithAggregatesFilter<"Skill"> | string
    gradientFrom?: StringWithAggregatesFilter<"Skill"> | string
    gradientTo?: StringWithAggregatesFilter<"Skill"> | string
    borderColor?: StringWithAggregatesFilter<"Skill"> | string
    displayOrder?: IntNullableWithAggregatesFilter<"Skill"> | number | null
    isActive?: BoolNullableWithAggregatesFilter<"Skill"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    projectTitle?: StringFilter<"Project"> | string
    projectSubtitle?: StringFilter<"Project"> | string
    projectHandle?: StringNullableFilter<"Project"> | string | null
    projectLocation?: StringNullableFilter<"Project"> | string | null
    projectImageUrl?: StringFilter<"Project"> | string
    projectUrl?: StringNullableFilter<"Project"> | string | null
    demoUrl?: StringNullableFilter<"Project"> | string | null
    projectDescription?: StringNullableFilter<"Project"> | string | null
    borderColor?: StringFilter<"Project"> | string
    gradient?: StringFilter<"Project"> | string
    displayOrder?: IntNullableFilter<"Project"> | number | null
    isActive?: BoolNullableFilter<"Project"> | boolean | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    category?: StringNullableFilter<"Project"> | string | null
    techStack?: StringNullableListFilter<"Project">
    galleryImages?: JsonNullableFilter<"Project">
    features?: JsonNullableFilter<"Project">
    aboutTitle?: StringNullableFilter<"Project"> | string | null
    detailsTitle?: StringNullableFilter<"Project"> | string | null
    featuresTitle?: StringNullableFilter<"Project"> | string | null
    galleryTitle?: StringNullableFilter<"Project"> | string | null
    demoType?: StringNullableFilter<"Project"> | string | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    projectTitle?: SortOrder
    projectSubtitle?: SortOrder
    projectHandle?: SortOrderInput | SortOrder
    projectLocation?: SortOrderInput | SortOrder
    projectImageUrl?: SortOrder
    projectUrl?: SortOrderInput | SortOrder
    demoUrl?: SortOrderInput | SortOrder
    projectDescription?: SortOrderInput | SortOrder
    borderColor?: SortOrder
    gradient?: SortOrder
    displayOrder?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrderInput | SortOrder
    techStack?: SortOrder
    galleryImages?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    aboutTitle?: SortOrderInput | SortOrder
    detailsTitle?: SortOrderInput | SortOrder
    featuresTitle?: SortOrderInput | SortOrder
    galleryTitle?: SortOrderInput | SortOrder
    demoType?: SortOrderInput | SortOrder
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectHandle?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    projectTitle?: StringFilter<"Project"> | string
    projectSubtitle?: StringFilter<"Project"> | string
    projectLocation?: StringNullableFilter<"Project"> | string | null
    projectImageUrl?: StringFilter<"Project"> | string
    projectUrl?: StringNullableFilter<"Project"> | string | null
    demoUrl?: StringNullableFilter<"Project"> | string | null
    projectDescription?: StringNullableFilter<"Project"> | string | null
    borderColor?: StringFilter<"Project"> | string
    gradient?: StringFilter<"Project"> | string
    displayOrder?: IntNullableFilter<"Project"> | number | null
    isActive?: BoolNullableFilter<"Project"> | boolean | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    category?: StringNullableFilter<"Project"> | string | null
    techStack?: StringNullableListFilter<"Project">
    galleryImages?: JsonNullableFilter<"Project">
    features?: JsonNullableFilter<"Project">
    aboutTitle?: StringNullableFilter<"Project"> | string | null
    detailsTitle?: StringNullableFilter<"Project"> | string | null
    featuresTitle?: StringNullableFilter<"Project"> | string | null
    galleryTitle?: StringNullableFilter<"Project"> | string | null
    demoType?: StringNullableFilter<"Project"> | string | null
  }, "id" | "projectHandle">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    projectTitle?: SortOrder
    projectSubtitle?: SortOrder
    projectHandle?: SortOrderInput | SortOrder
    projectLocation?: SortOrderInput | SortOrder
    projectImageUrl?: SortOrder
    projectUrl?: SortOrderInput | SortOrder
    demoUrl?: SortOrderInput | SortOrder
    projectDescription?: SortOrderInput | SortOrder
    borderColor?: SortOrder
    gradient?: SortOrder
    displayOrder?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrderInput | SortOrder
    techStack?: SortOrder
    galleryImages?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    aboutTitle?: SortOrderInput | SortOrder
    detailsTitle?: SortOrderInput | SortOrder
    featuresTitle?: SortOrderInput | SortOrder
    galleryTitle?: SortOrderInput | SortOrder
    demoType?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    projectTitle?: StringWithAggregatesFilter<"Project"> | string
    projectSubtitle?: StringWithAggregatesFilter<"Project"> | string
    projectHandle?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectLocation?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectImageUrl?: StringWithAggregatesFilter<"Project"> | string
    projectUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    demoUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectDescription?: StringNullableWithAggregatesFilter<"Project"> | string | null
    borderColor?: StringWithAggregatesFilter<"Project"> | string
    gradient?: StringWithAggregatesFilter<"Project"> | string
    displayOrder?: IntNullableWithAggregatesFilter<"Project"> | number | null
    isActive?: BoolNullableWithAggregatesFilter<"Project"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    category?: StringNullableWithAggregatesFilter<"Project"> | string | null
    techStack?: StringNullableListFilter<"Project">
    galleryImages?: JsonNullableWithAggregatesFilter<"Project">
    features?: JsonNullableWithAggregatesFilter<"Project">
    aboutTitle?: StringNullableWithAggregatesFilter<"Project"> | string | null
    detailsTitle?: StringNullableWithAggregatesFilter<"Project"> | string | null
    featuresTitle?: StringNullableWithAggregatesFilter<"Project"> | string | null
    galleryTitle?: StringNullableWithAggregatesFilter<"Project"> | string | null
    demoType?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    title?: StringFilter<"Certificate"> | string
    issuer?: StringFilter<"Certificate"> | string
    date?: StringNullableFilter<"Certificate"> | string | null
    imageUrl?: StringFilter<"Certificate"> | string
    credentialUrl?: StringNullableFilter<"Certificate"> | string | null
    displayOrder?: IntFilter<"Certificate"> | number
    isActive?: BoolFilter<"Certificate"> | boolean
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    date?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    credentialUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    title?: StringFilter<"Certificate"> | string
    issuer?: StringFilter<"Certificate"> | string
    date?: StringNullableFilter<"Certificate"> | string | null
    imageUrl?: StringFilter<"Certificate"> | string
    credentialUrl?: StringNullableFilter<"Certificate"> | string | null
    displayOrder?: IntFilter<"Certificate"> | number
    isActive?: BoolFilter<"Certificate"> | boolean
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
  }, "id">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    date?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    credentialUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _avg?: CertificateAvgOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
    _sum?: CertificateSumOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    title?: StringWithAggregatesFilter<"Certificate"> | string
    issuer?: StringWithAggregatesFilter<"Certificate"> | string
    date?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    imageUrl?: StringWithAggregatesFilter<"Certificate"> | string
    credentialUrl?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    displayOrder?: IntWithAggregatesFilter<"Certificate"> | number
    isActive?: BoolWithAggregatesFilter<"Certificate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type AdminUserCreateInput = {
    username: string
    passwordHash: string
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    username: string
    passwordHash: string
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: number
    username: string
    passwordHash: string
    photoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeContentCreateInput = {
    greeting?: string
    name?: string
    description: string
    cvUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeContentUncheckedCreateInput = {
    id?: number
    greeting?: string
    name?: string
    description: string
    cvUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeContentUpdateInput = {
    greeting?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cvUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    greeting?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cvUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeContentCreateManyInput = {
    id?: number
    greeting?: string
    name?: string
    description: string
    cvUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeContentUpdateManyMutationInput = {
    greeting?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cvUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    greeting?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cvUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeStatCreateInput = {
    statKey: string
    statValue: string
    statLabel: string
    icon?: string | null
    gradientFrom: string
    gradientTo: string
    displayOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeStatUncheckedCreateInput = {
    id?: number
    statKey: string
    statValue: string
    statLabel: string
    icon?: string | null
    gradientFrom: string
    gradientTo: string
    displayOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeStatUpdateInput = {
    statKey?: StringFieldUpdateOperationsInput | string
    statValue?: StringFieldUpdateOperationsInput | string
    statLabel?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    gradientFrom?: StringFieldUpdateOperationsInput | string
    gradientTo?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeStatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statKey?: StringFieldUpdateOperationsInput | string
    statValue?: StringFieldUpdateOperationsInput | string
    statLabel?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    gradientFrom?: StringFieldUpdateOperationsInput | string
    gradientTo?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeStatCreateManyInput = {
    id?: number
    statKey: string
    statValue: string
    statLabel: string
    icon?: string | null
    gradientFrom: string
    gradientTo: string
    displayOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeStatUpdateManyMutationInput = {
    statKey?: StringFieldUpdateOperationsInput | string
    statValue?: StringFieldUpdateOperationsInput | string
    statLabel?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    gradientFrom?: StringFieldUpdateOperationsInput | string
    gradientTo?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeStatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    statKey?: StringFieldUpdateOperationsInput | string
    statValue?: StringFieldUpdateOperationsInput | string
    statLabel?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    gradientFrom?: StringFieldUpdateOperationsInput | string
    gradientTo?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCardCreateInput = {
    handle: string
    status: string
    avatarUrl: string
    miniAvatarUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCardUncheckedCreateInput = {
    id?: number
    handle: string
    status: string
    avatarUrl: string
    miniAvatarUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCardUpdateInput = {
    handle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    miniAvatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    miniAvatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCardCreateManyInput = {
    id?: number
    handle: string
    status: string
    avatarUrl: string
    miniAvatarUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCardUpdateManyMutationInput = {
    handle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    miniAvatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    handle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    miniAvatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentCreateInput = {
    whoAmITitle?: string
    whoAmIContent: string
    myApproachTitle?: string
    myApproachContent: string
    lanyardCardFile?: string
    lanyardTextureFile?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutContentUncheckedCreateInput = {
    id?: number
    whoAmITitle?: string
    whoAmIContent: string
    myApproachTitle?: string
    myApproachContent: string
    lanyardCardFile?: string
    lanyardTextureFile?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutContentUpdateInput = {
    whoAmITitle?: StringFieldUpdateOperationsInput | string
    whoAmIContent?: StringFieldUpdateOperationsInput | string
    myApproachTitle?: StringFieldUpdateOperationsInput | string
    myApproachContent?: StringFieldUpdateOperationsInput | string
    lanyardCardFile?: StringFieldUpdateOperationsInput | string
    lanyardTextureFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    whoAmITitle?: StringFieldUpdateOperationsInput | string
    whoAmIContent?: StringFieldUpdateOperationsInput | string
    myApproachTitle?: StringFieldUpdateOperationsInput | string
    myApproachContent?: StringFieldUpdateOperationsInput | string
    lanyardCardFile?: StringFieldUpdateOperationsInput | string
    lanyardTextureFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentCreateManyInput = {
    id?: number
    whoAmITitle?: string
    whoAmIContent: string
    myApproachTitle?: string
    myApproachContent: string
    lanyardCardFile?: string
    lanyardTextureFile?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutContentUpdateManyMutationInput = {
    whoAmITitle?: StringFieldUpdateOperationsInput | string
    whoAmIContent?: StringFieldUpdateOperationsInput | string
    myApproachTitle?: StringFieldUpdateOperationsInput | string
    myApproachContent?: StringFieldUpdateOperationsInput | string
    lanyardCardFile?: StringFieldUpdateOperationsInput | string
    lanyardTextureFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    whoAmITitle?: StringFieldUpdateOperationsInput | string
    whoAmIContent?: StringFieldUpdateOperationsInput | string
    myApproachTitle?: StringFieldUpdateOperationsInput | string
    myApproachContent?: StringFieldUpdateOperationsInput | string
    lanyardCardFile?: StringFieldUpdateOperationsInput | string
    lanyardTextureFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    skillName: string
    skillCategory: string
    skillIcon: string
    gradientFrom: string
    gradientTo: string
    borderColor: string
    displayOrder?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    skillName: string
    skillCategory: string
    skillIcon: string
    gradientFrom: string
    gradientTo: string
    borderColor: string
    displayOrder?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateInput = {
    skillName?: StringFieldUpdateOperationsInput | string
    skillCategory?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    gradientFrom?: StringFieldUpdateOperationsInput | string
    gradientTo?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
    skillCategory?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    gradientFrom?: StringFieldUpdateOperationsInput | string
    gradientTo?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyInput = {
    id?: number
    skillName: string
    skillCategory: string
    skillIcon: string
    gradientFrom: string
    gradientTo: string
    borderColor: string
    displayOrder?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    skillName?: StringFieldUpdateOperationsInput | string
    skillCategory?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    gradientFrom?: StringFieldUpdateOperationsInput | string
    gradientTo?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
    skillCategory?: StringFieldUpdateOperationsInput | string
    skillIcon?: StringFieldUpdateOperationsInput | string
    gradientFrom?: StringFieldUpdateOperationsInput | string
    gradientTo?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    projectTitle: string
    projectSubtitle: string
    projectHandle?: string | null
    projectLocation?: string | null
    projectImageUrl: string
    projectUrl?: string | null
    demoUrl?: string | null
    projectDescription?: string | null
    borderColor?: string
    gradient?: string
    displayOrder?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string | null
    techStack?: ProjectCreatetechStackInput | string[]
    galleryImages?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    aboutTitle?: string | null
    detailsTitle?: string | null
    featuresTitle?: string | null
    galleryTitle?: string | null
    demoType?: string | null
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    projectTitle: string
    projectSubtitle: string
    projectHandle?: string | null
    projectLocation?: string | null
    projectImageUrl: string
    projectUrl?: string | null
    demoUrl?: string | null
    projectDescription?: string | null
    borderColor?: string
    gradient?: string
    displayOrder?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string | null
    techStack?: ProjectCreatetechStackInput | string[]
    galleryImages?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    aboutTitle?: string | null
    detailsTitle?: string | null
    featuresTitle?: string | null
    galleryTitle?: string | null
    demoType?: string | null
  }

  export type ProjectUpdateInput = {
    projectTitle?: StringFieldUpdateOperationsInput | string
    projectSubtitle?: StringFieldUpdateOperationsInput | string
    projectHandle?: NullableStringFieldUpdateOperationsInput | string | null
    projectLocation?: NullableStringFieldUpdateOperationsInput | string | null
    projectImageUrl?: StringFieldUpdateOperationsInput | string
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: ProjectUpdatetechStackInput | string[]
    galleryImages?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    aboutTitle?: NullableStringFieldUpdateOperationsInput | string | null
    detailsTitle?: NullableStringFieldUpdateOperationsInput | string | null
    featuresTitle?: NullableStringFieldUpdateOperationsInput | string | null
    galleryTitle?: NullableStringFieldUpdateOperationsInput | string | null
    demoType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectTitle?: StringFieldUpdateOperationsInput | string
    projectSubtitle?: StringFieldUpdateOperationsInput | string
    projectHandle?: NullableStringFieldUpdateOperationsInput | string | null
    projectLocation?: NullableStringFieldUpdateOperationsInput | string | null
    projectImageUrl?: StringFieldUpdateOperationsInput | string
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: ProjectUpdatetechStackInput | string[]
    galleryImages?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    aboutTitle?: NullableStringFieldUpdateOperationsInput | string | null
    detailsTitle?: NullableStringFieldUpdateOperationsInput | string | null
    featuresTitle?: NullableStringFieldUpdateOperationsInput | string | null
    galleryTitle?: NullableStringFieldUpdateOperationsInput | string | null
    demoType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateManyInput = {
    id?: number
    projectTitle: string
    projectSubtitle: string
    projectHandle?: string | null
    projectLocation?: string | null
    projectImageUrl: string
    projectUrl?: string | null
    demoUrl?: string | null
    projectDescription?: string | null
    borderColor?: string
    gradient?: string
    displayOrder?: number | null
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: string | null
    techStack?: ProjectCreatetechStackInput | string[]
    galleryImages?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    aboutTitle?: string | null
    detailsTitle?: string | null
    featuresTitle?: string | null
    galleryTitle?: string | null
    demoType?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    projectTitle?: StringFieldUpdateOperationsInput | string
    projectSubtitle?: StringFieldUpdateOperationsInput | string
    projectHandle?: NullableStringFieldUpdateOperationsInput | string | null
    projectLocation?: NullableStringFieldUpdateOperationsInput | string | null
    projectImageUrl?: StringFieldUpdateOperationsInput | string
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: ProjectUpdatetechStackInput | string[]
    galleryImages?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    aboutTitle?: NullableStringFieldUpdateOperationsInput | string | null
    detailsTitle?: NullableStringFieldUpdateOperationsInput | string | null
    featuresTitle?: NullableStringFieldUpdateOperationsInput | string | null
    galleryTitle?: NullableStringFieldUpdateOperationsInput | string | null
    demoType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectTitle?: StringFieldUpdateOperationsInput | string
    projectSubtitle?: StringFieldUpdateOperationsInput | string
    projectHandle?: NullableStringFieldUpdateOperationsInput | string | null
    projectLocation?: NullableStringFieldUpdateOperationsInput | string | null
    projectImageUrl?: StringFieldUpdateOperationsInput | string
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    borderColor?: StringFieldUpdateOperationsInput | string
    gradient?: StringFieldUpdateOperationsInput | string
    displayOrder?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: ProjectUpdatetechStackInput | string[]
    galleryImages?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    aboutTitle?: NullableStringFieldUpdateOperationsInput | string | null
    detailsTitle?: NullableStringFieldUpdateOperationsInput | string | null
    featuresTitle?: NullableStringFieldUpdateOperationsInput | string | null
    galleryTitle?: NullableStringFieldUpdateOperationsInput | string | null
    demoType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificateCreateInput = {
    id?: string
    title: string
    issuer: string
    date?: string | null
    imageUrl: string
    credentialUrl?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    title: string
    issuer: string
    date?: string | null
    imageUrl: string
    credentialUrl?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    title: string
    issuer: string
    date?: string | null
    imageUrl: string
    credentialUrl?: string | null
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HomeContentCountOrderByAggregateInput = {
    id?: SortOrder
    greeting?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cvUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeContentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HomeContentMaxOrderByAggregateInput = {
    id?: SortOrder
    greeting?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cvUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeContentMinOrderByAggregateInput = {
    id?: SortOrder
    greeting?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cvUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeContentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type HomeStatCountOrderByAggregateInput = {
    id?: SortOrder
    statKey?: SortOrder
    statValue?: SortOrder
    statLabel?: SortOrder
    icon?: SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeStatAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type HomeStatMaxOrderByAggregateInput = {
    id?: SortOrder
    statKey?: SortOrder
    statValue?: SortOrder
    statLabel?: SortOrder
    icon?: SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeStatMinOrderByAggregateInput = {
    id?: SortOrder
    statKey?: SortOrder
    statValue?: SortOrder
    statLabel?: SortOrder
    icon?: SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeStatSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProfileCardCountOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    avatarUrl?: SortOrder
    miniAvatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileCardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfileCardMaxOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    avatarUrl?: SortOrder
    miniAvatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileCardMinOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    avatarUrl?: SortOrder
    miniAvatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileCardSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutContentCountOrderByAggregateInput = {
    id?: SortOrder
    whoAmITitle?: SortOrder
    whoAmIContent?: SortOrder
    myApproachTitle?: SortOrder
    myApproachContent?: SortOrder
    lanyardCardFile?: SortOrder
    lanyardTextureFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutContentMaxOrderByAggregateInput = {
    id?: SortOrder
    whoAmITitle?: SortOrder
    whoAmIContent?: SortOrder
    myApproachTitle?: SortOrder
    myApproachContent?: SortOrder
    lanyardCardFile?: SortOrder
    lanyardTextureFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentMinOrderByAggregateInput = {
    id?: SortOrder
    whoAmITitle?: SortOrder
    whoAmIContent?: SortOrder
    myApproachTitle?: SortOrder
    myApproachContent?: SortOrder
    lanyardCardFile?: SortOrder
    lanyardTextureFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    skillName?: SortOrder
    skillCategory?: SortOrder
    skillIcon?: SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    borderColor?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    skillName?: SortOrder
    skillCategory?: SortOrder
    skillIcon?: SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    borderColor?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    skillName?: SortOrder
    skillCategory?: SortOrder
    skillIcon?: SortOrder
    gradientFrom?: SortOrder
    gradientTo?: SortOrder
    borderColor?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    projectTitle?: SortOrder
    projectSubtitle?: SortOrder
    projectHandle?: SortOrder
    projectLocation?: SortOrder
    projectImageUrl?: SortOrder
    projectUrl?: SortOrder
    demoUrl?: SortOrder
    projectDescription?: SortOrder
    borderColor?: SortOrder
    gradient?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    techStack?: SortOrder
    galleryImages?: SortOrder
    features?: SortOrder
    aboutTitle?: SortOrder
    detailsTitle?: SortOrder
    featuresTitle?: SortOrder
    galleryTitle?: SortOrder
    demoType?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    projectTitle?: SortOrder
    projectSubtitle?: SortOrder
    projectHandle?: SortOrder
    projectLocation?: SortOrder
    projectImageUrl?: SortOrder
    projectUrl?: SortOrder
    demoUrl?: SortOrder
    projectDescription?: SortOrder
    borderColor?: SortOrder
    gradient?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    aboutTitle?: SortOrder
    detailsTitle?: SortOrder
    featuresTitle?: SortOrder
    galleryTitle?: SortOrder
    demoType?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    projectTitle?: SortOrder
    projectSubtitle?: SortOrder
    projectHandle?: SortOrder
    projectLocation?: SortOrder
    projectImageUrl?: SortOrder
    projectUrl?: SortOrder
    demoUrl?: SortOrder
    projectDescription?: SortOrder
    borderColor?: SortOrder
    gradient?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    aboutTitle?: SortOrder
    detailsTitle?: SortOrder
    featuresTitle?: SortOrder
    galleryTitle?: SortOrder
    demoType?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    date?: SortOrder
    imageUrl?: SortOrder
    credentialUrl?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    date?: SortOrder
    imageUrl?: SortOrder
    credentialUrl?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    date?: SortOrder
    imageUrl?: SortOrder
    credentialUrl?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProjectCreatetechStackInput = {
    set: string[]
  }

  export type ProjectUpdatetechStackInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}