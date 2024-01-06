
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bloksensus
 * 
 */
export type bloksensus = $Result.DefaultSelection<Prisma.$bloksensusPayload>
/**
 * Model kabupaten
 * 
 */
export type kabupaten = $Result.DefaultSelection<Prisma.$kabupatenPayload>
/**
 * Model kecamatan
 * 
 */
export type kecamatan = $Result.DefaultSelection<Prisma.$kecamatanPayload>
/**
 * Model kelurahan
 * 
 */
export type kelurahan = $Result.DefaultSelection<Prisma.$kelurahanPayload>
/**
 * Model mahasiswa
 * 
 */
export type mahasiswa = $Result.DefaultSelection<Prisma.$mahasiswaPayload>
/**
 * Model migrations
 * 
 */
export type migrations = $Result.DefaultSelection<Prisma.$migrationsPayload>
/**
 * Model posisi_pcl
 * 
 */
export type posisi_pcl = $Result.DefaultSelection<Prisma.$posisi_pclPayload>
/**
 * Model riwayatposisipcl
 * 
 */
export type riwayatposisipcl = $Result.DefaultSelection<Prisma.$riwayatposisipclPayload>
/**
 * Model rumahtangga
 * 
 */
export type rumahtangga = $Result.DefaultSelection<Prisma.$rumahtanggaPayload>
/**
 * Model timpencacah
 * 
 */
export type timpencacah = $Result.DefaultSelection<Prisma.$timpencacahPayload>
/**
 * Model token_ambil_sampel
 * 
 */
export type token_ambil_sampel = $Result.DefaultSelection<Prisma.$token_ambil_sampelPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bloksensuses
 * const bloksensuses = await prisma.bloksensus.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Bloksensuses
   * const bloksensuses = await prisma.bloksensus.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.bloksensus`: Exposes CRUD operations for the **bloksensus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bloksensuses
    * const bloksensuses = await prisma.bloksensus.findMany()
    * ```
    */
  get bloksensus(): Prisma.bloksensusDelegate<ExtArgs>;

  /**
   * `prisma.kabupaten`: Exposes CRUD operations for the **kabupaten** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kabupatens
    * const kabupatens = await prisma.kabupaten.findMany()
    * ```
    */
  get kabupaten(): Prisma.kabupatenDelegate<ExtArgs>;

  /**
   * `prisma.kecamatan`: Exposes CRUD operations for the **kecamatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kecamatans
    * const kecamatans = await prisma.kecamatan.findMany()
    * ```
    */
  get kecamatan(): Prisma.kecamatanDelegate<ExtArgs>;

  /**
   * `prisma.kelurahan`: Exposes CRUD operations for the **kelurahan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelurahans
    * const kelurahans = await prisma.kelurahan.findMany()
    * ```
    */
  get kelurahan(): Prisma.kelurahanDelegate<ExtArgs>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.mahasiswaDelegate<ExtArgs>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<ExtArgs>;

  /**
   * `prisma.posisi_pcl`: Exposes CRUD operations for the **posisi_pcl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posisi_pcls
    * const posisi_pcls = await prisma.posisi_pcl.findMany()
    * ```
    */
  get posisi_pcl(): Prisma.posisi_pclDelegate<ExtArgs>;

  /**
   * `prisma.riwayatposisipcl`: Exposes CRUD operations for the **riwayatposisipcl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Riwayatposisipcls
    * const riwayatposisipcls = await prisma.riwayatposisipcl.findMany()
    * ```
    */
  get riwayatposisipcl(): Prisma.riwayatposisipclDelegate<ExtArgs>;

  /**
   * `prisma.rumahtangga`: Exposes CRUD operations for the **rumahtangga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rumahtanggas
    * const rumahtanggas = await prisma.rumahtangga.findMany()
    * ```
    */
  get rumahtangga(): Prisma.rumahtanggaDelegate<ExtArgs>;

  /**
   * `prisma.timpencacah`: Exposes CRUD operations for the **timpencacah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timpencacahs
    * const timpencacahs = await prisma.timpencacah.findMany()
    * ```
    */
  get timpencacah(): Prisma.timpencacahDelegate<ExtArgs>;

  /**
   * `prisma.token_ambil_sampel`: Exposes CRUD operations for the **token_ambil_sampel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Token_ambil_sampels
    * const token_ambil_sampels = await prisma.token_ambil_sampel.findMany()
    * ```
    */
  get token_ambil_sampel(): Prisma.token_ambil_sampelDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    bloksensus: 'bloksensus',
    kabupaten: 'kabupaten',
    kecamatan: 'kecamatan',
    kelurahan: 'kelurahan',
    mahasiswa: 'mahasiswa',
    migrations: 'migrations',
    posisi_pcl: 'posisi_pcl',
    riwayatposisipcl: 'riwayatposisipcl',
    rumahtangga: 'rumahtangga',
    timpencacah: 'timpencacah',
    token_ambil_sampel: 'token_ambil_sampel',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'bloksensus' | 'kabupaten' | 'kecamatan' | 'kelurahan' | 'mahasiswa' | 'migrations' | 'posisi_pcl' | 'riwayatposisipcl' | 'rumahtangga' | 'timpencacah' | 'token_ambil_sampel' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      bloksensus: {
        payload: Prisma.$bloksensusPayload<ExtArgs>
        fields: Prisma.bloksensusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bloksensusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bloksensusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bloksensusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bloksensusPayload>
          }
          findFirst: {
            args: Prisma.bloksensusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bloksensusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bloksensusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bloksensusPayload>
          }
          findMany: {
            args: Prisma.bloksensusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bloksensusPayload>[]
          }
          create: {
            args: Prisma.bloksensusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bloksensusPayload>
          }
          createMany: {
            args: Prisma.bloksensusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.bloksensusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bloksensusPayload>
          }
          update: {
            args: Prisma.bloksensusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bloksensusPayload>
          }
          deleteMany: {
            args: Prisma.bloksensusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.bloksensusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.bloksensusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bloksensusPayload>
          }
          aggregate: {
            args: Prisma.BloksensusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBloksensus>
          }
          groupBy: {
            args: Prisma.bloksensusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BloksensusGroupByOutputType>[]
          }
          count: {
            args: Prisma.bloksensusCountArgs<ExtArgs>,
            result: $Utils.Optional<BloksensusCountAggregateOutputType> | number
          }
        }
      }
      kabupaten: {
        payload: Prisma.$kabupatenPayload<ExtArgs>
        fields: Prisma.kabupatenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kabupatenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kabupatenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kabupatenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kabupatenPayload>
          }
          findFirst: {
            args: Prisma.kabupatenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kabupatenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kabupatenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kabupatenPayload>
          }
          findMany: {
            args: Prisma.kabupatenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kabupatenPayload>[]
          }
          create: {
            args: Prisma.kabupatenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kabupatenPayload>
          }
          createMany: {
            args: Prisma.kabupatenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.kabupatenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kabupatenPayload>
          }
          update: {
            args: Prisma.kabupatenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kabupatenPayload>
          }
          deleteMany: {
            args: Prisma.kabupatenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.kabupatenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.kabupatenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kabupatenPayload>
          }
          aggregate: {
            args: Prisma.KabupatenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKabupaten>
          }
          groupBy: {
            args: Prisma.kabupatenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KabupatenGroupByOutputType>[]
          }
          count: {
            args: Prisma.kabupatenCountArgs<ExtArgs>,
            result: $Utils.Optional<KabupatenCountAggregateOutputType> | number
          }
        }
      }
      kecamatan: {
        payload: Prisma.$kecamatanPayload<ExtArgs>
        fields: Prisma.kecamatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kecamatanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kecamatanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          findFirst: {
            args: Prisma.kecamatanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kecamatanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          findMany: {
            args: Prisma.kecamatanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>[]
          }
          create: {
            args: Prisma.kecamatanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          createMany: {
            args: Prisma.kecamatanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.kecamatanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          update: {
            args: Prisma.kecamatanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          deleteMany: {
            args: Prisma.kecamatanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.kecamatanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.kecamatanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          aggregate: {
            args: Prisma.KecamatanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKecamatan>
          }
          groupBy: {
            args: Prisma.kecamatanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KecamatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.kecamatanCountArgs<ExtArgs>,
            result: $Utils.Optional<KecamatanCountAggregateOutputType> | number
          }
        }
      }
      kelurahan: {
        payload: Prisma.$kelurahanPayload<ExtArgs>
        fields: Prisma.kelurahanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kelurahanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kelurahanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          findFirst: {
            args: Prisma.kelurahanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kelurahanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          findMany: {
            args: Prisma.kelurahanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>[]
          }
          create: {
            args: Prisma.kelurahanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          createMany: {
            args: Prisma.kelurahanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.kelurahanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          update: {
            args: Prisma.kelurahanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          deleteMany: {
            args: Prisma.kelurahanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.kelurahanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.kelurahanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          aggregate: {
            args: Prisma.KelurahanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKelurahan>
          }
          groupBy: {
            args: Prisma.kelurahanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KelurahanGroupByOutputType>[]
          }
          count: {
            args: Prisma.kelurahanCountArgs<ExtArgs>,
            result: $Utils.Optional<KelurahanCountAggregateOutputType> | number
          }
        }
      }
      mahasiswa: {
        payload: Prisma.$mahasiswaPayload<ExtArgs>
        fields: Prisma.mahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mahasiswaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mahasiswaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findFirst: {
            args: Prisma.mahasiswaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mahasiswaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findMany: {
            args: Prisma.mahasiswaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          create: {
            args: Prisma.mahasiswaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          createMany: {
            args: Prisma.mahasiswaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.mahasiswaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          update: {
            args: Prisma.mahasiswaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.mahasiswaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.mahasiswaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.mahasiswaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.mahasiswaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mahasiswaCountArgs<ExtArgs>,
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      migrations: {
        payload: Prisma.$migrationsPayload<ExtArgs>
        fields: Prisma.migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.migrationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findFirst: {
            args: Prisma.migrationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findMany: {
            args: Prisma.migrationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          create: {
            args: Prisma.migrationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          createMany: {
            args: Prisma.migrationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.migrationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          update: {
            args: Prisma.migrationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          deleteMany: {
            args: Prisma.migrationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.migrationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.migrationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMigrations>
          }
          groupBy: {
            args: Prisma.migrationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.migrationsCountArgs<ExtArgs>,
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number
          }
        }
      }
      posisi_pcl: {
        payload: Prisma.$posisi_pclPayload<ExtArgs>
        fields: Prisma.posisi_pclFieldRefs
        operations: {
          findUnique: {
            args: Prisma.posisi_pclFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posisi_pclPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.posisi_pclFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posisi_pclPayload>
          }
          findFirst: {
            args: Prisma.posisi_pclFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posisi_pclPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.posisi_pclFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posisi_pclPayload>
          }
          findMany: {
            args: Prisma.posisi_pclFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posisi_pclPayload>[]
          }
          create: {
            args: Prisma.posisi_pclCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posisi_pclPayload>
          }
          createMany: {
            args: Prisma.posisi_pclCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.posisi_pclDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posisi_pclPayload>
          }
          update: {
            args: Prisma.posisi_pclUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posisi_pclPayload>
          }
          deleteMany: {
            args: Prisma.posisi_pclDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.posisi_pclUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.posisi_pclUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posisi_pclPayload>
          }
          aggregate: {
            args: Prisma.Posisi_pclAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePosisi_pcl>
          }
          groupBy: {
            args: Prisma.posisi_pclGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Posisi_pclGroupByOutputType>[]
          }
          count: {
            args: Prisma.posisi_pclCountArgs<ExtArgs>,
            result: $Utils.Optional<Posisi_pclCountAggregateOutputType> | number
          }
        }
      }
      riwayatposisipcl: {
        payload: Prisma.$riwayatposisipclPayload<ExtArgs>
        fields: Prisma.riwayatposisipclFieldRefs
        operations: {
          findUnique: {
            args: Prisma.riwayatposisipclFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$riwayatposisipclPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.riwayatposisipclFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$riwayatposisipclPayload>
          }
          findFirst: {
            args: Prisma.riwayatposisipclFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$riwayatposisipclPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.riwayatposisipclFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$riwayatposisipclPayload>
          }
          findMany: {
            args: Prisma.riwayatposisipclFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$riwayatposisipclPayload>[]
          }
          create: {
            args: Prisma.riwayatposisipclCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$riwayatposisipclPayload>
          }
          createMany: {
            args: Prisma.riwayatposisipclCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.riwayatposisipclDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$riwayatposisipclPayload>
          }
          update: {
            args: Prisma.riwayatposisipclUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$riwayatposisipclPayload>
          }
          deleteMany: {
            args: Prisma.riwayatposisipclDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.riwayatposisipclUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.riwayatposisipclUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$riwayatposisipclPayload>
          }
          aggregate: {
            args: Prisma.RiwayatposisipclAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRiwayatposisipcl>
          }
          groupBy: {
            args: Prisma.riwayatposisipclGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RiwayatposisipclGroupByOutputType>[]
          }
          count: {
            args: Prisma.riwayatposisipclCountArgs<ExtArgs>,
            result: $Utils.Optional<RiwayatposisipclCountAggregateOutputType> | number
          }
        }
      }
      rumahtangga: {
        payload: Prisma.$rumahtanggaPayload<ExtArgs>
        fields: Prisma.rumahtanggaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rumahtanggaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rumahtanggaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rumahtanggaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rumahtanggaPayload>
          }
          findFirst: {
            args: Prisma.rumahtanggaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rumahtanggaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rumahtanggaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rumahtanggaPayload>
          }
          findMany: {
            args: Prisma.rumahtanggaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rumahtanggaPayload>[]
          }
          create: {
            args: Prisma.rumahtanggaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rumahtanggaPayload>
          }
          createMany: {
            args: Prisma.rumahtanggaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.rumahtanggaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rumahtanggaPayload>
          }
          update: {
            args: Prisma.rumahtanggaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rumahtanggaPayload>
          }
          deleteMany: {
            args: Prisma.rumahtanggaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rumahtanggaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rumahtanggaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rumahtanggaPayload>
          }
          aggregate: {
            args: Prisma.RumahtanggaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRumahtangga>
          }
          groupBy: {
            args: Prisma.rumahtanggaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RumahtanggaGroupByOutputType>[]
          }
          count: {
            args: Prisma.rumahtanggaCountArgs<ExtArgs>,
            result: $Utils.Optional<RumahtanggaCountAggregateOutputType> | number
          }
        }
      }
      timpencacah: {
        payload: Prisma.$timpencacahPayload<ExtArgs>
        fields: Prisma.timpencacahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.timpencacahFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$timpencacahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.timpencacahFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$timpencacahPayload>
          }
          findFirst: {
            args: Prisma.timpencacahFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$timpencacahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.timpencacahFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$timpencacahPayload>
          }
          findMany: {
            args: Prisma.timpencacahFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$timpencacahPayload>[]
          }
          create: {
            args: Prisma.timpencacahCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$timpencacahPayload>
          }
          createMany: {
            args: Prisma.timpencacahCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.timpencacahDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$timpencacahPayload>
          }
          update: {
            args: Prisma.timpencacahUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$timpencacahPayload>
          }
          deleteMany: {
            args: Prisma.timpencacahDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.timpencacahUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.timpencacahUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$timpencacahPayload>
          }
          aggregate: {
            args: Prisma.TimpencacahAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTimpencacah>
          }
          groupBy: {
            args: Prisma.timpencacahGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TimpencacahGroupByOutputType>[]
          }
          count: {
            args: Prisma.timpencacahCountArgs<ExtArgs>,
            result: $Utils.Optional<TimpencacahCountAggregateOutputType> | number
          }
        }
      }
      token_ambil_sampel: {
        payload: Prisma.$token_ambil_sampelPayload<ExtArgs>
        fields: Prisma.token_ambil_sampelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.token_ambil_sampelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$token_ambil_sampelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.token_ambil_sampelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$token_ambil_sampelPayload>
          }
          findFirst: {
            args: Prisma.token_ambil_sampelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$token_ambil_sampelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.token_ambil_sampelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$token_ambil_sampelPayload>
          }
          findMany: {
            args: Prisma.token_ambil_sampelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$token_ambil_sampelPayload>[]
          }
          create: {
            args: Prisma.token_ambil_sampelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$token_ambil_sampelPayload>
          }
          createMany: {
            args: Prisma.token_ambil_sampelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.token_ambil_sampelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$token_ambil_sampelPayload>
          }
          update: {
            args: Prisma.token_ambil_sampelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$token_ambil_sampelPayload>
          }
          deleteMany: {
            args: Prisma.token_ambil_sampelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.token_ambil_sampelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.token_ambil_sampelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$token_ambil_sampelPayload>
          }
          aggregate: {
            args: Prisma.Token_ambil_sampelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateToken_ambil_sampel>
          }
          groupBy: {
            args: Prisma.token_ambil_sampelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Token_ambil_sampelGroupByOutputType>[]
          }
          count: {
            args: Prisma.token_ambil_sampelCountArgs<ExtArgs>,
            result: $Utils.Optional<Token_ambil_sampelCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Model bloksensus
   */

  export type AggregateBloksensus = {
    _count: BloksensusCountAggregateOutputType | null
    _avg: BloksensusAvgAggregateOutputType | null
    _sum: BloksensusSumAggregateOutputType | null
    _min: BloksensusMinAggregateOutputType | null
    _max: BloksensusMaxAggregateOutputType | null
  }

  export type BloksensusAvgAggregateOutputType = {
    jml_rt: number | null
    jml_rt_genz: number | null
    jml_genz: number | null
  }

  export type BloksensusSumAggregateOutputType = {
    jml_rt: number | null
    jml_rt_genz: number | null
    jml_genz: number | null
  }

  export type BloksensusMinAggregateOutputType = {
    no_bs: string | null
    nama_sls: string | null
    id_kab: string | null
    id_kec: string | null
    id_kelurahan: string | null
    jml_rt: number | null
    jml_rt_genz: number | null
    jml_genz: number | null
    nim_pencacah: string | null
    tim_pencacah: string | null
    tgl_listing: Date | null
    tgl_periksa: Date | null
    catatan: string | null
    status: string | null
  }

  export type BloksensusMaxAggregateOutputType = {
    no_bs: string | null
    nama_sls: string | null
    id_kab: string | null
    id_kec: string | null
    id_kelurahan: string | null
    jml_rt: number | null
    jml_rt_genz: number | null
    jml_genz: number | null
    nim_pencacah: string | null
    tim_pencacah: string | null
    tgl_listing: Date | null
    tgl_periksa: Date | null
    catatan: string | null
    status: string | null
  }

  export type BloksensusCountAggregateOutputType = {
    no_bs: number
    nama_sls: number
    id_kab: number
    id_kec: number
    id_kelurahan: number
    jml_rt: number
    jml_rt_genz: number
    jml_genz: number
    nim_pencacah: number
    tim_pencacah: number
    tgl_listing: number
    tgl_periksa: number
    catatan: number
    status: number
    _all: number
  }


  export type BloksensusAvgAggregateInputType = {
    jml_rt?: true
    jml_rt_genz?: true
    jml_genz?: true
  }

  export type BloksensusSumAggregateInputType = {
    jml_rt?: true
    jml_rt_genz?: true
    jml_genz?: true
  }

  export type BloksensusMinAggregateInputType = {
    no_bs?: true
    nama_sls?: true
    id_kab?: true
    id_kec?: true
    id_kelurahan?: true
    jml_rt?: true
    jml_rt_genz?: true
    jml_genz?: true
    nim_pencacah?: true
    tim_pencacah?: true
    tgl_listing?: true
    tgl_periksa?: true
    catatan?: true
    status?: true
  }

  export type BloksensusMaxAggregateInputType = {
    no_bs?: true
    nama_sls?: true
    id_kab?: true
    id_kec?: true
    id_kelurahan?: true
    jml_rt?: true
    jml_rt_genz?: true
    jml_genz?: true
    nim_pencacah?: true
    tim_pencacah?: true
    tgl_listing?: true
    tgl_periksa?: true
    catatan?: true
    status?: true
  }

  export type BloksensusCountAggregateInputType = {
    no_bs?: true
    nama_sls?: true
    id_kab?: true
    id_kec?: true
    id_kelurahan?: true
    jml_rt?: true
    jml_rt_genz?: true
    jml_genz?: true
    nim_pencacah?: true
    tim_pencacah?: true
    tgl_listing?: true
    tgl_periksa?: true
    catatan?: true
    status?: true
    _all?: true
  }

  export type BloksensusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bloksensus to aggregate.
     */
    where?: bloksensusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloksensuses to fetch.
     */
    orderBy?: bloksensusOrderByWithRelationInput | bloksensusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bloksensusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloksensuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloksensuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bloksensuses
    **/
    _count?: true | BloksensusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloksensusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloksensusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloksensusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloksensusMaxAggregateInputType
  }

  export type GetBloksensusAggregateType<T extends BloksensusAggregateArgs> = {
        [P in keyof T & keyof AggregateBloksensus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloksensus[P]>
      : GetScalarType<T[P], AggregateBloksensus[P]>
  }




  export type bloksensusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bloksensusWhereInput
    orderBy?: bloksensusOrderByWithAggregationInput | bloksensusOrderByWithAggregationInput[]
    by: BloksensusScalarFieldEnum[] | BloksensusScalarFieldEnum
    having?: bloksensusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloksensusCountAggregateInputType | true
    _avg?: BloksensusAvgAggregateInputType
    _sum?: BloksensusSumAggregateInputType
    _min?: BloksensusMinAggregateInputType
    _max?: BloksensusMaxAggregateInputType
  }

  export type BloksensusGroupByOutputType = {
    no_bs: string
    nama_sls: string
    id_kab: string
    id_kec: string
    id_kelurahan: string
    jml_rt: number
    jml_rt_genz: number
    jml_genz: number
    nim_pencacah: string
    tim_pencacah: string
    tgl_listing: Date | null
    tgl_periksa: Date | null
    catatan: string | null
    status: string
    _count: BloksensusCountAggregateOutputType | null
    _avg: BloksensusAvgAggregateOutputType | null
    _sum: BloksensusSumAggregateOutputType | null
    _min: BloksensusMinAggregateOutputType | null
    _max: BloksensusMaxAggregateOutputType | null
  }

  type GetBloksensusGroupByPayload<T extends bloksensusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloksensusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloksensusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloksensusGroupByOutputType[P]>
            : GetScalarType<T[P], BloksensusGroupByOutputType[P]>
        }
      >
    >


  export type bloksensusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    no_bs?: boolean
    nama_sls?: boolean
    id_kab?: boolean
    id_kec?: boolean
    id_kelurahan?: boolean
    jml_rt?: boolean
    jml_rt_genz?: boolean
    jml_genz?: boolean
    nim_pencacah?: boolean
    tim_pencacah?: boolean
    tgl_listing?: boolean
    tgl_periksa?: boolean
    catatan?: boolean
    status?: boolean
  }, ExtArgs["result"]["bloksensus"]>

  export type bloksensusSelectScalar = {
    no_bs?: boolean
    nama_sls?: boolean
    id_kab?: boolean
    id_kec?: boolean
    id_kelurahan?: boolean
    jml_rt?: boolean
    jml_rt_genz?: boolean
    jml_genz?: boolean
    nim_pencacah?: boolean
    tim_pencacah?: boolean
    tgl_listing?: boolean
    tgl_periksa?: boolean
    catatan?: boolean
    status?: boolean
  }


  export type $bloksensusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bloksensus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      no_bs: string
      nama_sls: string
      id_kab: string
      id_kec: string
      id_kelurahan: string
      jml_rt: number
      jml_rt_genz: number
      jml_genz: number
      nim_pencacah: string
      tim_pencacah: string
      tgl_listing: Date | null
      tgl_periksa: Date | null
      catatan: string | null
      status: string
    }, ExtArgs["result"]["bloksensus"]>
    composites: {}
  }


  type bloksensusGetPayload<S extends boolean | null | undefined | bloksensusDefaultArgs> = $Result.GetResult<Prisma.$bloksensusPayload, S>

  type bloksensusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bloksensusFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BloksensusCountAggregateInputType | true
    }

  export interface bloksensusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bloksensus'], meta: { name: 'bloksensus' } }
    /**
     * Find zero or one Bloksensus that matches the filter.
     * @param {bloksensusFindUniqueArgs} args - Arguments to find a Bloksensus
     * @example
     * // Get one Bloksensus
     * const bloksensus = await prisma.bloksensus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends bloksensusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bloksensusFindUniqueArgs<ExtArgs>>
    ): Prisma__bloksensusClient<$Result.GetResult<Prisma.$bloksensusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bloksensus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {bloksensusFindUniqueOrThrowArgs} args - Arguments to find a Bloksensus
     * @example
     * // Get one Bloksensus
     * const bloksensus = await prisma.bloksensus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends bloksensusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bloksensusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__bloksensusClient<$Result.GetResult<Prisma.$bloksensusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bloksensus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloksensusFindFirstArgs} args - Arguments to find a Bloksensus
     * @example
     * // Get one Bloksensus
     * const bloksensus = await prisma.bloksensus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends bloksensusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bloksensusFindFirstArgs<ExtArgs>>
    ): Prisma__bloksensusClient<$Result.GetResult<Prisma.$bloksensusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bloksensus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloksensusFindFirstOrThrowArgs} args - Arguments to find a Bloksensus
     * @example
     * // Get one Bloksensus
     * const bloksensus = await prisma.bloksensus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends bloksensusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bloksensusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__bloksensusClient<$Result.GetResult<Prisma.$bloksensusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bloksensuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloksensusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bloksensuses
     * const bloksensuses = await prisma.bloksensus.findMany()
     * 
     * // Get first 10 Bloksensuses
     * const bloksensuses = await prisma.bloksensus.findMany({ take: 10 })
     * 
     * // Only select the `no_bs`
     * const bloksensusWithNo_bsOnly = await prisma.bloksensus.findMany({ select: { no_bs: true } })
     * 
    **/
    findMany<T extends bloksensusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bloksensusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bloksensusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bloksensus.
     * @param {bloksensusCreateArgs} args - Arguments to create a Bloksensus.
     * @example
     * // Create one Bloksensus
     * const Bloksensus = await prisma.bloksensus.create({
     *   data: {
     *     // ... data to create a Bloksensus
     *   }
     * })
     * 
    **/
    create<T extends bloksensusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bloksensusCreateArgs<ExtArgs>>
    ): Prisma__bloksensusClient<$Result.GetResult<Prisma.$bloksensusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bloksensuses.
     *     @param {bloksensusCreateManyArgs} args - Arguments to create many Bloksensuses.
     *     @example
     *     // Create many Bloksensuses
     *     const bloksensus = await prisma.bloksensus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends bloksensusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bloksensusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bloksensus.
     * @param {bloksensusDeleteArgs} args - Arguments to delete one Bloksensus.
     * @example
     * // Delete one Bloksensus
     * const Bloksensus = await prisma.bloksensus.delete({
     *   where: {
     *     // ... filter to delete one Bloksensus
     *   }
     * })
     * 
    **/
    delete<T extends bloksensusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bloksensusDeleteArgs<ExtArgs>>
    ): Prisma__bloksensusClient<$Result.GetResult<Prisma.$bloksensusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bloksensus.
     * @param {bloksensusUpdateArgs} args - Arguments to update one Bloksensus.
     * @example
     * // Update one Bloksensus
     * const bloksensus = await prisma.bloksensus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends bloksensusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bloksensusUpdateArgs<ExtArgs>>
    ): Prisma__bloksensusClient<$Result.GetResult<Prisma.$bloksensusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bloksensuses.
     * @param {bloksensusDeleteManyArgs} args - Arguments to filter Bloksensuses to delete.
     * @example
     * // Delete a few Bloksensuses
     * const { count } = await prisma.bloksensus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends bloksensusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bloksensusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloksensuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloksensusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bloksensuses
     * const bloksensus = await prisma.bloksensus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends bloksensusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bloksensusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bloksensus.
     * @param {bloksensusUpsertArgs} args - Arguments to update or create a Bloksensus.
     * @example
     * // Update or create a Bloksensus
     * const bloksensus = await prisma.bloksensus.upsert({
     *   create: {
     *     // ... data to create a Bloksensus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bloksensus we want to update
     *   }
     * })
    **/
    upsert<T extends bloksensusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bloksensusUpsertArgs<ExtArgs>>
    ): Prisma__bloksensusClient<$Result.GetResult<Prisma.$bloksensusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bloksensuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloksensusCountArgs} args - Arguments to filter Bloksensuses to count.
     * @example
     * // Count the number of Bloksensuses
     * const count = await prisma.bloksensus.count({
     *   where: {
     *     // ... the filter for the Bloksensuses we want to count
     *   }
     * })
    **/
    count<T extends bloksensusCountArgs>(
      args?: Subset<T, bloksensusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloksensusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bloksensus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloksensusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BloksensusAggregateArgs>(args: Subset<T, BloksensusAggregateArgs>): Prisma.PrismaPromise<GetBloksensusAggregateType<T>>

    /**
     * Group by Bloksensus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bloksensusGroupByArgs} args - Group by arguments.
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
      T extends bloksensusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bloksensusGroupByArgs['orderBy'] }
        : { orderBy?: bloksensusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bloksensusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloksensusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bloksensus model
   */
  readonly fields: bloksensusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bloksensus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bloksensusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the bloksensus model
   */ 
  interface bloksensusFieldRefs {
    readonly no_bs: FieldRef<"bloksensus", 'String'>
    readonly nama_sls: FieldRef<"bloksensus", 'String'>
    readonly id_kab: FieldRef<"bloksensus", 'String'>
    readonly id_kec: FieldRef<"bloksensus", 'String'>
    readonly id_kelurahan: FieldRef<"bloksensus", 'String'>
    readonly jml_rt: FieldRef<"bloksensus", 'Int'>
    readonly jml_rt_genz: FieldRef<"bloksensus", 'Int'>
    readonly jml_genz: FieldRef<"bloksensus", 'Int'>
    readonly nim_pencacah: FieldRef<"bloksensus", 'String'>
    readonly tim_pencacah: FieldRef<"bloksensus", 'String'>
    readonly tgl_listing: FieldRef<"bloksensus", 'DateTime'>
    readonly tgl_periksa: FieldRef<"bloksensus", 'DateTime'>
    readonly catatan: FieldRef<"bloksensus", 'String'>
    readonly status: FieldRef<"bloksensus", 'String'>
  }
    

  // Custom InputTypes

  /**
   * bloksensus findUnique
   */
  export type bloksensusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
    /**
     * Filter, which bloksensus to fetch.
     */
    where: bloksensusWhereUniqueInput
  }


  /**
   * bloksensus findUniqueOrThrow
   */
  export type bloksensusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
    /**
     * Filter, which bloksensus to fetch.
     */
    where: bloksensusWhereUniqueInput
  }


  /**
   * bloksensus findFirst
   */
  export type bloksensusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
    /**
     * Filter, which bloksensus to fetch.
     */
    where?: bloksensusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloksensuses to fetch.
     */
    orderBy?: bloksensusOrderByWithRelationInput | bloksensusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bloksensuses.
     */
    cursor?: bloksensusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloksensuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloksensuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bloksensuses.
     */
    distinct?: BloksensusScalarFieldEnum | BloksensusScalarFieldEnum[]
  }


  /**
   * bloksensus findFirstOrThrow
   */
  export type bloksensusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
    /**
     * Filter, which bloksensus to fetch.
     */
    where?: bloksensusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloksensuses to fetch.
     */
    orderBy?: bloksensusOrderByWithRelationInput | bloksensusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bloksensuses.
     */
    cursor?: bloksensusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloksensuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloksensuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bloksensuses.
     */
    distinct?: BloksensusScalarFieldEnum | BloksensusScalarFieldEnum[]
  }


  /**
   * bloksensus findMany
   */
  export type bloksensusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
    /**
     * Filter, which bloksensuses to fetch.
     */
    where?: bloksensusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bloksensuses to fetch.
     */
    orderBy?: bloksensusOrderByWithRelationInput | bloksensusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bloksensuses.
     */
    cursor?: bloksensusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bloksensuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bloksensuses.
     */
    skip?: number
    distinct?: BloksensusScalarFieldEnum | BloksensusScalarFieldEnum[]
  }


  /**
   * bloksensus create
   */
  export type bloksensusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
    /**
     * The data needed to create a bloksensus.
     */
    data: XOR<bloksensusCreateInput, bloksensusUncheckedCreateInput>
  }


  /**
   * bloksensus createMany
   */
  export type bloksensusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bloksensuses.
     */
    data: bloksensusCreateManyInput | bloksensusCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * bloksensus update
   */
  export type bloksensusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
    /**
     * The data needed to update a bloksensus.
     */
    data: XOR<bloksensusUpdateInput, bloksensusUncheckedUpdateInput>
    /**
     * Choose, which bloksensus to update.
     */
    where: bloksensusWhereUniqueInput
  }


  /**
   * bloksensus updateMany
   */
  export type bloksensusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bloksensuses.
     */
    data: XOR<bloksensusUpdateManyMutationInput, bloksensusUncheckedUpdateManyInput>
    /**
     * Filter which bloksensuses to update
     */
    where?: bloksensusWhereInput
  }


  /**
   * bloksensus upsert
   */
  export type bloksensusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
    /**
     * The filter to search for the bloksensus to update in case it exists.
     */
    where: bloksensusWhereUniqueInput
    /**
     * In case the bloksensus found by the `where` argument doesn't exist, create a new bloksensus with this data.
     */
    create: XOR<bloksensusCreateInput, bloksensusUncheckedCreateInput>
    /**
     * In case the bloksensus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bloksensusUpdateInput, bloksensusUncheckedUpdateInput>
  }


  /**
   * bloksensus delete
   */
  export type bloksensusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
    /**
     * Filter which bloksensus to delete.
     */
    where: bloksensusWhereUniqueInput
  }


  /**
   * bloksensus deleteMany
   */
  export type bloksensusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bloksensuses to delete
     */
    where?: bloksensusWhereInput
  }


  /**
   * bloksensus without action
   */
  export type bloksensusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloksensus
     */
    select?: bloksensusSelect<ExtArgs> | null
  }



  /**
   * Model kabupaten
   */

  export type AggregateKabupaten = {
    _count: KabupatenCountAggregateOutputType | null
    _min: KabupatenMinAggregateOutputType | null
    _max: KabupatenMaxAggregateOutputType | null
  }

  export type KabupatenMinAggregateOutputType = {
    id_kab: string | null
    nama_kab: string | null
  }

  export type KabupatenMaxAggregateOutputType = {
    id_kab: string | null
    nama_kab: string | null
  }

  export type KabupatenCountAggregateOutputType = {
    id_kab: number
    nama_kab: number
    _all: number
  }


  export type KabupatenMinAggregateInputType = {
    id_kab?: true
    nama_kab?: true
  }

  export type KabupatenMaxAggregateInputType = {
    id_kab?: true
    nama_kab?: true
  }

  export type KabupatenCountAggregateInputType = {
    id_kab?: true
    nama_kab?: true
    _all?: true
  }

  export type KabupatenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kabupaten to aggregate.
     */
    where?: kabupatenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kabupatens to fetch.
     */
    orderBy?: kabupatenOrderByWithRelationInput | kabupatenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kabupatenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kabupatens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kabupatens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kabupatens
    **/
    _count?: true | KabupatenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KabupatenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KabupatenMaxAggregateInputType
  }

  export type GetKabupatenAggregateType<T extends KabupatenAggregateArgs> = {
        [P in keyof T & keyof AggregateKabupaten]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKabupaten[P]>
      : GetScalarType<T[P], AggregateKabupaten[P]>
  }




  export type kabupatenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kabupatenWhereInput
    orderBy?: kabupatenOrderByWithAggregationInput | kabupatenOrderByWithAggregationInput[]
    by: KabupatenScalarFieldEnum[] | KabupatenScalarFieldEnum
    having?: kabupatenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KabupatenCountAggregateInputType | true
    _min?: KabupatenMinAggregateInputType
    _max?: KabupatenMaxAggregateInputType
  }

  export type KabupatenGroupByOutputType = {
    id_kab: string
    nama_kab: string
    _count: KabupatenCountAggregateOutputType | null
    _min: KabupatenMinAggregateOutputType | null
    _max: KabupatenMaxAggregateOutputType | null
  }

  type GetKabupatenGroupByPayload<T extends kabupatenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KabupatenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KabupatenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KabupatenGroupByOutputType[P]>
            : GetScalarType<T[P], KabupatenGroupByOutputType[P]>
        }
      >
    >


  export type kabupatenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kab?: boolean
    nama_kab?: boolean
  }, ExtArgs["result"]["kabupaten"]>

  export type kabupatenSelectScalar = {
    id_kab?: boolean
    nama_kab?: boolean
  }


  export type $kabupatenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kabupaten"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_kab: string
      nama_kab: string
    }, ExtArgs["result"]["kabupaten"]>
    composites: {}
  }


  type kabupatenGetPayload<S extends boolean | null | undefined | kabupatenDefaultArgs> = $Result.GetResult<Prisma.$kabupatenPayload, S>

  type kabupatenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<kabupatenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: KabupatenCountAggregateInputType | true
    }

  export interface kabupatenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kabupaten'], meta: { name: 'kabupaten' } }
    /**
     * Find zero or one Kabupaten that matches the filter.
     * @param {kabupatenFindUniqueArgs} args - Arguments to find a Kabupaten
     * @example
     * // Get one Kabupaten
     * const kabupaten = await prisma.kabupaten.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends kabupatenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, kabupatenFindUniqueArgs<ExtArgs>>
    ): Prisma__kabupatenClient<$Result.GetResult<Prisma.$kabupatenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kabupaten that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {kabupatenFindUniqueOrThrowArgs} args - Arguments to find a Kabupaten
     * @example
     * // Get one Kabupaten
     * const kabupaten = await prisma.kabupaten.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends kabupatenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kabupatenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__kabupatenClient<$Result.GetResult<Prisma.$kabupatenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kabupaten that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kabupatenFindFirstArgs} args - Arguments to find a Kabupaten
     * @example
     * // Get one Kabupaten
     * const kabupaten = await prisma.kabupaten.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends kabupatenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, kabupatenFindFirstArgs<ExtArgs>>
    ): Prisma__kabupatenClient<$Result.GetResult<Prisma.$kabupatenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kabupaten that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kabupatenFindFirstOrThrowArgs} args - Arguments to find a Kabupaten
     * @example
     * // Get one Kabupaten
     * const kabupaten = await prisma.kabupaten.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends kabupatenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kabupatenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__kabupatenClient<$Result.GetResult<Prisma.$kabupatenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Kabupatens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kabupatenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kabupatens
     * const kabupatens = await prisma.kabupaten.findMany()
     * 
     * // Get first 10 Kabupatens
     * const kabupatens = await prisma.kabupaten.findMany({ take: 10 })
     * 
     * // Only select the `id_kab`
     * const kabupatenWithId_kabOnly = await prisma.kabupaten.findMany({ select: { id_kab: true } })
     * 
    **/
    findMany<T extends kabupatenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kabupatenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kabupatenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kabupaten.
     * @param {kabupatenCreateArgs} args - Arguments to create a Kabupaten.
     * @example
     * // Create one Kabupaten
     * const Kabupaten = await prisma.kabupaten.create({
     *   data: {
     *     // ... data to create a Kabupaten
     *   }
     * })
     * 
    **/
    create<T extends kabupatenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, kabupatenCreateArgs<ExtArgs>>
    ): Prisma__kabupatenClient<$Result.GetResult<Prisma.$kabupatenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Kabupatens.
     *     @param {kabupatenCreateManyArgs} args - Arguments to create many Kabupatens.
     *     @example
     *     // Create many Kabupatens
     *     const kabupaten = await prisma.kabupaten.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends kabupatenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kabupatenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kabupaten.
     * @param {kabupatenDeleteArgs} args - Arguments to delete one Kabupaten.
     * @example
     * // Delete one Kabupaten
     * const Kabupaten = await prisma.kabupaten.delete({
     *   where: {
     *     // ... filter to delete one Kabupaten
     *   }
     * })
     * 
    **/
    delete<T extends kabupatenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, kabupatenDeleteArgs<ExtArgs>>
    ): Prisma__kabupatenClient<$Result.GetResult<Prisma.$kabupatenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kabupaten.
     * @param {kabupatenUpdateArgs} args - Arguments to update one Kabupaten.
     * @example
     * // Update one Kabupaten
     * const kabupaten = await prisma.kabupaten.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends kabupatenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, kabupatenUpdateArgs<ExtArgs>>
    ): Prisma__kabupatenClient<$Result.GetResult<Prisma.$kabupatenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Kabupatens.
     * @param {kabupatenDeleteManyArgs} args - Arguments to filter Kabupatens to delete.
     * @example
     * // Delete a few Kabupatens
     * const { count } = await prisma.kabupaten.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends kabupatenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kabupatenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kabupatens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kabupatenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kabupatens
     * const kabupaten = await prisma.kabupaten.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends kabupatenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, kabupatenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kabupaten.
     * @param {kabupatenUpsertArgs} args - Arguments to update or create a Kabupaten.
     * @example
     * // Update or create a Kabupaten
     * const kabupaten = await prisma.kabupaten.upsert({
     *   create: {
     *     // ... data to create a Kabupaten
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kabupaten we want to update
     *   }
     * })
    **/
    upsert<T extends kabupatenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, kabupatenUpsertArgs<ExtArgs>>
    ): Prisma__kabupatenClient<$Result.GetResult<Prisma.$kabupatenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Kabupatens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kabupatenCountArgs} args - Arguments to filter Kabupatens to count.
     * @example
     * // Count the number of Kabupatens
     * const count = await prisma.kabupaten.count({
     *   where: {
     *     // ... the filter for the Kabupatens we want to count
     *   }
     * })
    **/
    count<T extends kabupatenCountArgs>(
      args?: Subset<T, kabupatenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KabupatenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kabupaten.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KabupatenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KabupatenAggregateArgs>(args: Subset<T, KabupatenAggregateArgs>): Prisma.PrismaPromise<GetKabupatenAggregateType<T>>

    /**
     * Group by Kabupaten.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kabupatenGroupByArgs} args - Group by arguments.
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
      T extends kabupatenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kabupatenGroupByArgs['orderBy'] }
        : { orderBy?: kabupatenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kabupatenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKabupatenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kabupaten model
   */
  readonly fields: kabupatenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kabupaten.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kabupatenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the kabupaten model
   */ 
  interface kabupatenFieldRefs {
    readonly id_kab: FieldRef<"kabupaten", 'String'>
    readonly nama_kab: FieldRef<"kabupaten", 'String'>
  }
    

  // Custom InputTypes

  /**
   * kabupaten findUnique
   */
  export type kabupatenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
    /**
     * Filter, which kabupaten to fetch.
     */
    where: kabupatenWhereUniqueInput
  }


  /**
   * kabupaten findUniqueOrThrow
   */
  export type kabupatenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
    /**
     * Filter, which kabupaten to fetch.
     */
    where: kabupatenWhereUniqueInput
  }


  /**
   * kabupaten findFirst
   */
  export type kabupatenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
    /**
     * Filter, which kabupaten to fetch.
     */
    where?: kabupatenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kabupatens to fetch.
     */
    orderBy?: kabupatenOrderByWithRelationInput | kabupatenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kabupatens.
     */
    cursor?: kabupatenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kabupatens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kabupatens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kabupatens.
     */
    distinct?: KabupatenScalarFieldEnum | KabupatenScalarFieldEnum[]
  }


  /**
   * kabupaten findFirstOrThrow
   */
  export type kabupatenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
    /**
     * Filter, which kabupaten to fetch.
     */
    where?: kabupatenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kabupatens to fetch.
     */
    orderBy?: kabupatenOrderByWithRelationInput | kabupatenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kabupatens.
     */
    cursor?: kabupatenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kabupatens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kabupatens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kabupatens.
     */
    distinct?: KabupatenScalarFieldEnum | KabupatenScalarFieldEnum[]
  }


  /**
   * kabupaten findMany
   */
  export type kabupatenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
    /**
     * Filter, which kabupatens to fetch.
     */
    where?: kabupatenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kabupatens to fetch.
     */
    orderBy?: kabupatenOrderByWithRelationInput | kabupatenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kabupatens.
     */
    cursor?: kabupatenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kabupatens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kabupatens.
     */
    skip?: number
    distinct?: KabupatenScalarFieldEnum | KabupatenScalarFieldEnum[]
  }


  /**
   * kabupaten create
   */
  export type kabupatenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
    /**
     * The data needed to create a kabupaten.
     */
    data: XOR<kabupatenCreateInput, kabupatenUncheckedCreateInput>
  }


  /**
   * kabupaten createMany
   */
  export type kabupatenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kabupatens.
     */
    data: kabupatenCreateManyInput | kabupatenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * kabupaten update
   */
  export type kabupatenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
    /**
     * The data needed to update a kabupaten.
     */
    data: XOR<kabupatenUpdateInput, kabupatenUncheckedUpdateInput>
    /**
     * Choose, which kabupaten to update.
     */
    where: kabupatenWhereUniqueInput
  }


  /**
   * kabupaten updateMany
   */
  export type kabupatenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kabupatens.
     */
    data: XOR<kabupatenUpdateManyMutationInput, kabupatenUncheckedUpdateManyInput>
    /**
     * Filter which kabupatens to update
     */
    where?: kabupatenWhereInput
  }


  /**
   * kabupaten upsert
   */
  export type kabupatenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
    /**
     * The filter to search for the kabupaten to update in case it exists.
     */
    where: kabupatenWhereUniqueInput
    /**
     * In case the kabupaten found by the `where` argument doesn't exist, create a new kabupaten with this data.
     */
    create: XOR<kabupatenCreateInput, kabupatenUncheckedCreateInput>
    /**
     * In case the kabupaten was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kabupatenUpdateInput, kabupatenUncheckedUpdateInput>
  }


  /**
   * kabupaten delete
   */
  export type kabupatenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
    /**
     * Filter which kabupaten to delete.
     */
    where: kabupatenWhereUniqueInput
  }


  /**
   * kabupaten deleteMany
   */
  export type kabupatenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kabupatens to delete
     */
    where?: kabupatenWhereInput
  }


  /**
   * kabupaten without action
   */
  export type kabupatenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kabupaten
     */
    select?: kabupatenSelect<ExtArgs> | null
  }



  /**
   * Model kecamatan
   */

  export type AggregateKecamatan = {
    _count: KecamatanCountAggregateOutputType | null
    _min: KecamatanMinAggregateOutputType | null
    _max: KecamatanMaxAggregateOutputType | null
  }

  export type KecamatanMinAggregateOutputType = {
    id_kec: string | null
    nama_kec: string | null
  }

  export type KecamatanMaxAggregateOutputType = {
    id_kec: string | null
    nama_kec: string | null
  }

  export type KecamatanCountAggregateOutputType = {
    id_kec: number
    nama_kec: number
    _all: number
  }


  export type KecamatanMinAggregateInputType = {
    id_kec?: true
    nama_kec?: true
  }

  export type KecamatanMaxAggregateInputType = {
    id_kec?: true
    nama_kec?: true
  }

  export type KecamatanCountAggregateInputType = {
    id_kec?: true
    nama_kec?: true
    _all?: true
  }

  export type KecamatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kecamatan to aggregate.
     */
    where?: kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kecamatans to fetch.
     */
    orderBy?: kecamatanOrderByWithRelationInput | kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kecamatans
    **/
    _count?: true | KecamatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KecamatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KecamatanMaxAggregateInputType
  }

  export type GetKecamatanAggregateType<T extends KecamatanAggregateArgs> = {
        [P in keyof T & keyof AggregateKecamatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKecamatan[P]>
      : GetScalarType<T[P], AggregateKecamatan[P]>
  }




  export type kecamatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kecamatanWhereInput
    orderBy?: kecamatanOrderByWithAggregationInput | kecamatanOrderByWithAggregationInput[]
    by: KecamatanScalarFieldEnum[] | KecamatanScalarFieldEnum
    having?: kecamatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KecamatanCountAggregateInputType | true
    _min?: KecamatanMinAggregateInputType
    _max?: KecamatanMaxAggregateInputType
  }

  export type KecamatanGroupByOutputType = {
    id_kec: string
    nama_kec: string
    _count: KecamatanCountAggregateOutputType | null
    _min: KecamatanMinAggregateOutputType | null
    _max: KecamatanMaxAggregateOutputType | null
  }

  type GetKecamatanGroupByPayload<T extends kecamatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KecamatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KecamatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KecamatanGroupByOutputType[P]>
            : GetScalarType<T[P], KecamatanGroupByOutputType[P]>
        }
      >
    >


  export type kecamatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kec?: boolean
    nama_kec?: boolean
  }, ExtArgs["result"]["kecamatan"]>

  export type kecamatanSelectScalar = {
    id_kec?: boolean
    nama_kec?: boolean
  }


  export type $kecamatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kecamatan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_kec: string
      nama_kec: string
    }, ExtArgs["result"]["kecamatan"]>
    composites: {}
  }


  type kecamatanGetPayload<S extends boolean | null | undefined | kecamatanDefaultArgs> = $Result.GetResult<Prisma.$kecamatanPayload, S>

  type kecamatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<kecamatanFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: KecamatanCountAggregateInputType | true
    }

  export interface kecamatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kecamatan'], meta: { name: 'kecamatan' } }
    /**
     * Find zero or one Kecamatan that matches the filter.
     * @param {kecamatanFindUniqueArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends kecamatanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, kecamatanFindUniqueArgs<ExtArgs>>
    ): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kecamatan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {kecamatanFindUniqueOrThrowArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends kecamatanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kecamatanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kecamatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanFindFirstArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends kecamatanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, kecamatanFindFirstArgs<ExtArgs>>
    ): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kecamatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanFindFirstOrThrowArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends kecamatanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kecamatanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Kecamatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kecamatans
     * const kecamatans = await prisma.kecamatan.findMany()
     * 
     * // Get first 10 Kecamatans
     * const kecamatans = await prisma.kecamatan.findMany({ take: 10 })
     * 
     * // Only select the `id_kec`
     * const kecamatanWithId_kecOnly = await prisma.kecamatan.findMany({ select: { id_kec: true } })
     * 
    **/
    findMany<T extends kecamatanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kecamatanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kecamatan.
     * @param {kecamatanCreateArgs} args - Arguments to create a Kecamatan.
     * @example
     * // Create one Kecamatan
     * const Kecamatan = await prisma.kecamatan.create({
     *   data: {
     *     // ... data to create a Kecamatan
     *   }
     * })
     * 
    **/
    create<T extends kecamatanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, kecamatanCreateArgs<ExtArgs>>
    ): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Kecamatans.
     *     @param {kecamatanCreateManyArgs} args - Arguments to create many Kecamatans.
     *     @example
     *     // Create many Kecamatans
     *     const kecamatan = await prisma.kecamatan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends kecamatanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kecamatanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kecamatan.
     * @param {kecamatanDeleteArgs} args - Arguments to delete one Kecamatan.
     * @example
     * // Delete one Kecamatan
     * const Kecamatan = await prisma.kecamatan.delete({
     *   where: {
     *     // ... filter to delete one Kecamatan
     *   }
     * })
     * 
    **/
    delete<T extends kecamatanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, kecamatanDeleteArgs<ExtArgs>>
    ): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kecamatan.
     * @param {kecamatanUpdateArgs} args - Arguments to update one Kecamatan.
     * @example
     * // Update one Kecamatan
     * const kecamatan = await prisma.kecamatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends kecamatanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, kecamatanUpdateArgs<ExtArgs>>
    ): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Kecamatans.
     * @param {kecamatanDeleteManyArgs} args - Arguments to filter Kecamatans to delete.
     * @example
     * // Delete a few Kecamatans
     * const { count } = await prisma.kecamatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends kecamatanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kecamatanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kecamatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kecamatans
     * const kecamatan = await prisma.kecamatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends kecamatanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, kecamatanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kecamatan.
     * @param {kecamatanUpsertArgs} args - Arguments to update or create a Kecamatan.
     * @example
     * // Update or create a Kecamatan
     * const kecamatan = await prisma.kecamatan.upsert({
     *   create: {
     *     // ... data to create a Kecamatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kecamatan we want to update
     *   }
     * })
    **/
    upsert<T extends kecamatanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, kecamatanUpsertArgs<ExtArgs>>
    ): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Kecamatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanCountArgs} args - Arguments to filter Kecamatans to count.
     * @example
     * // Count the number of Kecamatans
     * const count = await prisma.kecamatan.count({
     *   where: {
     *     // ... the filter for the Kecamatans we want to count
     *   }
     * })
    **/
    count<T extends kecamatanCountArgs>(
      args?: Subset<T, kecamatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KecamatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kecamatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KecamatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KecamatanAggregateArgs>(args: Subset<T, KecamatanAggregateArgs>): Prisma.PrismaPromise<GetKecamatanAggregateType<T>>

    /**
     * Group by Kecamatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanGroupByArgs} args - Group by arguments.
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
      T extends kecamatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kecamatanGroupByArgs['orderBy'] }
        : { orderBy?: kecamatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kecamatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKecamatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kecamatan model
   */
  readonly fields: kecamatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kecamatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kecamatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the kecamatan model
   */ 
  interface kecamatanFieldRefs {
    readonly id_kec: FieldRef<"kecamatan", 'String'>
    readonly nama_kec: FieldRef<"kecamatan", 'String'>
  }
    

  // Custom InputTypes

  /**
   * kecamatan findUnique
   */
  export type kecamatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Filter, which kecamatan to fetch.
     */
    where: kecamatanWhereUniqueInput
  }


  /**
   * kecamatan findUniqueOrThrow
   */
  export type kecamatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Filter, which kecamatan to fetch.
     */
    where: kecamatanWhereUniqueInput
  }


  /**
   * kecamatan findFirst
   */
  export type kecamatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Filter, which kecamatan to fetch.
     */
    where?: kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kecamatans to fetch.
     */
    orderBy?: kecamatanOrderByWithRelationInput | kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kecamatans.
     */
    cursor?: kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kecamatans.
     */
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }


  /**
   * kecamatan findFirstOrThrow
   */
  export type kecamatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Filter, which kecamatan to fetch.
     */
    where?: kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kecamatans to fetch.
     */
    orderBy?: kecamatanOrderByWithRelationInput | kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kecamatans.
     */
    cursor?: kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kecamatans.
     */
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }


  /**
   * kecamatan findMany
   */
  export type kecamatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Filter, which kecamatans to fetch.
     */
    where?: kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kecamatans to fetch.
     */
    orderBy?: kecamatanOrderByWithRelationInput | kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kecamatans.
     */
    cursor?: kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kecamatans.
     */
    skip?: number
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }


  /**
   * kecamatan create
   */
  export type kecamatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * The data needed to create a kecamatan.
     */
    data: XOR<kecamatanCreateInput, kecamatanUncheckedCreateInput>
  }


  /**
   * kecamatan createMany
   */
  export type kecamatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kecamatans.
     */
    data: kecamatanCreateManyInput | kecamatanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * kecamatan update
   */
  export type kecamatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * The data needed to update a kecamatan.
     */
    data: XOR<kecamatanUpdateInput, kecamatanUncheckedUpdateInput>
    /**
     * Choose, which kecamatan to update.
     */
    where: kecamatanWhereUniqueInput
  }


  /**
   * kecamatan updateMany
   */
  export type kecamatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kecamatans.
     */
    data: XOR<kecamatanUpdateManyMutationInput, kecamatanUncheckedUpdateManyInput>
    /**
     * Filter which kecamatans to update
     */
    where?: kecamatanWhereInput
  }


  /**
   * kecamatan upsert
   */
  export type kecamatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * The filter to search for the kecamatan to update in case it exists.
     */
    where: kecamatanWhereUniqueInput
    /**
     * In case the kecamatan found by the `where` argument doesn't exist, create a new kecamatan with this data.
     */
    create: XOR<kecamatanCreateInput, kecamatanUncheckedCreateInput>
    /**
     * In case the kecamatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kecamatanUpdateInput, kecamatanUncheckedUpdateInput>
  }


  /**
   * kecamatan delete
   */
  export type kecamatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Filter which kecamatan to delete.
     */
    where: kecamatanWhereUniqueInput
  }


  /**
   * kecamatan deleteMany
   */
  export type kecamatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kecamatans to delete
     */
    where?: kecamatanWhereInput
  }


  /**
   * kecamatan without action
   */
  export type kecamatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
  }



  /**
   * Model kelurahan
   */

  export type AggregateKelurahan = {
    _count: KelurahanCountAggregateOutputType | null
    _min: KelurahanMinAggregateOutputType | null
    _max: KelurahanMaxAggregateOutputType | null
  }

  export type KelurahanMinAggregateOutputType = {
    id_kelurahan: string | null
    nama_kelurahan: string | null
  }

  export type KelurahanMaxAggregateOutputType = {
    id_kelurahan: string | null
    nama_kelurahan: string | null
  }

  export type KelurahanCountAggregateOutputType = {
    id_kelurahan: number
    nama_kelurahan: number
    _all: number
  }


  export type KelurahanMinAggregateInputType = {
    id_kelurahan?: true
    nama_kelurahan?: true
  }

  export type KelurahanMaxAggregateInputType = {
    id_kelurahan?: true
    nama_kelurahan?: true
  }

  export type KelurahanCountAggregateInputType = {
    id_kelurahan?: true
    nama_kelurahan?: true
    _all?: true
  }

  export type KelurahanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelurahan to aggregate.
     */
    where?: kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelurahans to fetch.
     */
    orderBy?: kelurahanOrderByWithRelationInput | kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kelurahans
    **/
    _count?: true | KelurahanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelurahanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelurahanMaxAggregateInputType
  }

  export type GetKelurahanAggregateType<T extends KelurahanAggregateArgs> = {
        [P in keyof T & keyof AggregateKelurahan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelurahan[P]>
      : GetScalarType<T[P], AggregateKelurahan[P]>
  }




  export type kelurahanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kelurahanWhereInput
    orderBy?: kelurahanOrderByWithAggregationInput | kelurahanOrderByWithAggregationInput[]
    by: KelurahanScalarFieldEnum[] | KelurahanScalarFieldEnum
    having?: kelurahanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelurahanCountAggregateInputType | true
    _min?: KelurahanMinAggregateInputType
    _max?: KelurahanMaxAggregateInputType
  }

  export type KelurahanGroupByOutputType = {
    id_kelurahan: string
    nama_kelurahan: string
    _count: KelurahanCountAggregateOutputType | null
    _min: KelurahanMinAggregateOutputType | null
    _max: KelurahanMaxAggregateOutputType | null
  }

  type GetKelurahanGroupByPayload<T extends kelurahanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelurahanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelurahanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelurahanGroupByOutputType[P]>
            : GetScalarType<T[P], KelurahanGroupByOutputType[P]>
        }
      >
    >


  export type kelurahanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kelurahan?: boolean
    nama_kelurahan?: boolean
  }, ExtArgs["result"]["kelurahan"]>

  export type kelurahanSelectScalar = {
    id_kelurahan?: boolean
    nama_kelurahan?: boolean
  }


  export type $kelurahanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kelurahan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_kelurahan: string
      nama_kelurahan: string
    }, ExtArgs["result"]["kelurahan"]>
    composites: {}
  }


  type kelurahanGetPayload<S extends boolean | null | undefined | kelurahanDefaultArgs> = $Result.GetResult<Prisma.$kelurahanPayload, S>

  type kelurahanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<kelurahanFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: KelurahanCountAggregateInputType | true
    }

  export interface kelurahanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kelurahan'], meta: { name: 'kelurahan' } }
    /**
     * Find zero or one Kelurahan that matches the filter.
     * @param {kelurahanFindUniqueArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends kelurahanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, kelurahanFindUniqueArgs<ExtArgs>>
    ): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kelurahan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {kelurahanFindUniqueOrThrowArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends kelurahanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kelurahanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kelurahan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanFindFirstArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends kelurahanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, kelurahanFindFirstArgs<ExtArgs>>
    ): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kelurahan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanFindFirstOrThrowArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends kelurahanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, kelurahanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Kelurahans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelurahans
     * const kelurahans = await prisma.kelurahan.findMany()
     * 
     * // Get first 10 Kelurahans
     * const kelurahans = await prisma.kelurahan.findMany({ take: 10 })
     * 
     * // Only select the `id_kelurahan`
     * const kelurahanWithId_kelurahanOnly = await prisma.kelurahan.findMany({ select: { id_kelurahan: true } })
     * 
    **/
    findMany<T extends kelurahanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kelurahanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kelurahan.
     * @param {kelurahanCreateArgs} args - Arguments to create a Kelurahan.
     * @example
     * // Create one Kelurahan
     * const Kelurahan = await prisma.kelurahan.create({
     *   data: {
     *     // ... data to create a Kelurahan
     *   }
     * })
     * 
    **/
    create<T extends kelurahanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, kelurahanCreateArgs<ExtArgs>>
    ): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Kelurahans.
     *     @param {kelurahanCreateManyArgs} args - Arguments to create many Kelurahans.
     *     @example
     *     // Create many Kelurahans
     *     const kelurahan = await prisma.kelurahan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends kelurahanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kelurahanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kelurahan.
     * @param {kelurahanDeleteArgs} args - Arguments to delete one Kelurahan.
     * @example
     * // Delete one Kelurahan
     * const Kelurahan = await prisma.kelurahan.delete({
     *   where: {
     *     // ... filter to delete one Kelurahan
     *   }
     * })
     * 
    **/
    delete<T extends kelurahanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, kelurahanDeleteArgs<ExtArgs>>
    ): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kelurahan.
     * @param {kelurahanUpdateArgs} args - Arguments to update one Kelurahan.
     * @example
     * // Update one Kelurahan
     * const kelurahan = await prisma.kelurahan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends kelurahanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, kelurahanUpdateArgs<ExtArgs>>
    ): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Kelurahans.
     * @param {kelurahanDeleteManyArgs} args - Arguments to filter Kelurahans to delete.
     * @example
     * // Delete a few Kelurahans
     * const { count } = await prisma.kelurahan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends kelurahanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, kelurahanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelurahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelurahans
     * const kelurahan = await prisma.kelurahan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends kelurahanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, kelurahanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kelurahan.
     * @param {kelurahanUpsertArgs} args - Arguments to update or create a Kelurahan.
     * @example
     * // Update or create a Kelurahan
     * const kelurahan = await prisma.kelurahan.upsert({
     *   create: {
     *     // ... data to create a Kelurahan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelurahan we want to update
     *   }
     * })
    **/
    upsert<T extends kelurahanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, kelurahanUpsertArgs<ExtArgs>>
    ): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Kelurahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanCountArgs} args - Arguments to filter Kelurahans to count.
     * @example
     * // Count the number of Kelurahans
     * const count = await prisma.kelurahan.count({
     *   where: {
     *     // ... the filter for the Kelurahans we want to count
     *   }
     * })
    **/
    count<T extends kelurahanCountArgs>(
      args?: Subset<T, kelurahanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelurahanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelurahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelurahanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KelurahanAggregateArgs>(args: Subset<T, KelurahanAggregateArgs>): Prisma.PrismaPromise<GetKelurahanAggregateType<T>>

    /**
     * Group by Kelurahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanGroupByArgs} args - Group by arguments.
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
      T extends kelurahanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kelurahanGroupByArgs['orderBy'] }
        : { orderBy?: kelurahanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kelurahanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelurahanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kelurahan model
   */
  readonly fields: kelurahanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kelurahan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kelurahanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the kelurahan model
   */ 
  interface kelurahanFieldRefs {
    readonly id_kelurahan: FieldRef<"kelurahan", 'String'>
    readonly nama_kelurahan: FieldRef<"kelurahan", 'String'>
  }
    

  // Custom InputTypes

  /**
   * kelurahan findUnique
   */
  export type kelurahanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Filter, which kelurahan to fetch.
     */
    where: kelurahanWhereUniqueInput
  }


  /**
   * kelurahan findUniqueOrThrow
   */
  export type kelurahanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Filter, which kelurahan to fetch.
     */
    where: kelurahanWhereUniqueInput
  }


  /**
   * kelurahan findFirst
   */
  export type kelurahanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Filter, which kelurahan to fetch.
     */
    where?: kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelurahans to fetch.
     */
    orderBy?: kelurahanOrderByWithRelationInput | kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelurahans.
     */
    cursor?: kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelurahans.
     */
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }


  /**
   * kelurahan findFirstOrThrow
   */
  export type kelurahanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Filter, which kelurahan to fetch.
     */
    where?: kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelurahans to fetch.
     */
    orderBy?: kelurahanOrderByWithRelationInput | kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelurahans.
     */
    cursor?: kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelurahans.
     */
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }


  /**
   * kelurahan findMany
   */
  export type kelurahanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Filter, which kelurahans to fetch.
     */
    where?: kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelurahans to fetch.
     */
    orderBy?: kelurahanOrderByWithRelationInput | kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kelurahans.
     */
    cursor?: kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelurahans.
     */
    skip?: number
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }


  /**
   * kelurahan create
   */
  export type kelurahanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * The data needed to create a kelurahan.
     */
    data: XOR<kelurahanCreateInput, kelurahanUncheckedCreateInput>
  }


  /**
   * kelurahan createMany
   */
  export type kelurahanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kelurahans.
     */
    data: kelurahanCreateManyInput | kelurahanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * kelurahan update
   */
  export type kelurahanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * The data needed to update a kelurahan.
     */
    data: XOR<kelurahanUpdateInput, kelurahanUncheckedUpdateInput>
    /**
     * Choose, which kelurahan to update.
     */
    where: kelurahanWhereUniqueInput
  }


  /**
   * kelurahan updateMany
   */
  export type kelurahanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kelurahans.
     */
    data: XOR<kelurahanUpdateManyMutationInput, kelurahanUncheckedUpdateManyInput>
    /**
     * Filter which kelurahans to update
     */
    where?: kelurahanWhereInput
  }


  /**
   * kelurahan upsert
   */
  export type kelurahanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * The filter to search for the kelurahan to update in case it exists.
     */
    where: kelurahanWhereUniqueInput
    /**
     * In case the kelurahan found by the `where` argument doesn't exist, create a new kelurahan with this data.
     */
    create: XOR<kelurahanCreateInput, kelurahanUncheckedCreateInput>
    /**
     * In case the kelurahan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kelurahanUpdateInput, kelurahanUncheckedUpdateInput>
  }


  /**
   * kelurahan delete
   */
  export type kelurahanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Filter which kelurahan to delete.
     */
    where: kelurahanWhereUniqueInput
  }


  /**
   * kelurahan deleteMany
   */
  export type kelurahanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelurahans to delete
     */
    where?: kelurahanWhereInput
  }


  /**
   * kelurahan without action
   */
  export type kelurahanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
  }



  /**
   * Model mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaAvgAggregateOutputType = {
    id_tim: number | null
  }

  export type MahasiswaSumAggregateOutputType = {
    id_tim: number | null
  }

  export type MahasiswaMinAggregateOutputType = {
    nim: string | null
    email: string | null
    nama: string | null
    no_hp: string | null
    alamat: string | null
    foto: string | null
    plain_password: string | null
    password: string | null
    id_tim: number | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    nim: string | null
    email: string | null
    nama: string | null
    no_hp: string | null
    alamat: string | null
    foto: string | null
    plain_password: string | null
    password: string | null
    id_tim: number | null
  }

  export type MahasiswaCountAggregateOutputType = {
    nim: number
    email: number
    nama: number
    no_hp: number
    alamat: number
    foto: number
    plain_password: number
    password: number
    id_tim: number
    _all: number
  }


  export type MahasiswaAvgAggregateInputType = {
    id_tim?: true
  }

  export type MahasiswaSumAggregateInputType = {
    id_tim?: true
  }

  export type MahasiswaMinAggregateInputType = {
    nim?: true
    email?: true
    nama?: true
    no_hp?: true
    alamat?: true
    foto?: true
    plain_password?: true
    password?: true
    id_tim?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    nim?: true
    email?: true
    nama?: true
    no_hp?: true
    alamat?: true
    foto?: true
    plain_password?: true
    password?: true
    id_tim?: true
  }

  export type MahasiswaCountAggregateInputType = {
    nim?: true
    email?: true
    nama?: true
    no_hp?: true
    alamat?: true
    foto?: true
    plain_password?: true
    password?: true
    id_tim?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswa to aggregate.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MahasiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MahasiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type mahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mahasiswaWhereInput
    orderBy?: mahasiswaOrderByWithAggregationInput | mahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: mahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _avg?: MahasiswaAvgAggregateInputType
    _sum?: MahasiswaSumAggregateInputType
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    nim: string
    email: string
    nama: string
    no_hp: string
    alamat: string
    foto: string
    plain_password: string
    password: string
    id_tim: number
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends mahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type mahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    email?: boolean
    nama?: boolean
    no_hp?: boolean
    alamat?: boolean
    foto?: boolean
    plain_password?: boolean
    password?: boolean
    id_tim?: boolean
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectScalar = {
    nim?: boolean
    email?: boolean
    nama?: boolean
    no_hp?: boolean
    alamat?: boolean
    foto?: boolean
    plain_password?: boolean
    password?: boolean
    id_tim?: boolean
  }


  export type $mahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mahasiswa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nim: string
      email: string
      nama: string
      no_hp: string
      alamat: string
      foto: string
      plain_password: string
      password: string
      id_tim: number
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }


  type mahasiswaGetPayload<S extends boolean | null | undefined | mahasiswaDefaultArgs> = $Result.GetResult<Prisma.$mahasiswaPayload, S>

  type mahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mahasiswaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface mahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mahasiswa'], meta: { name: 'mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {mahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mahasiswaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, mahasiswaFindUniqueArgs<ExtArgs>>
    ): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mahasiswa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mahasiswaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mahasiswaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mahasiswaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, mahasiswaFindFirstArgs<ExtArgs>>
    ): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mahasiswaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mahasiswaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.findMany({ select: { nim: true } })
     * 
    **/
    findMany<T extends mahasiswaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mahasiswaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mahasiswa.
     * @param {mahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
    **/
    create<T extends mahasiswaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, mahasiswaCreateArgs<ExtArgs>>
    ): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Mahasiswas.
     *     @param {mahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     *     @example
     *     // Create many Mahasiswas
     *     const mahasiswa = await prisma.mahasiswa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mahasiswaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mahasiswaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mahasiswa.
     * @param {mahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
    **/
    delete<T extends mahasiswaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, mahasiswaDeleteArgs<ExtArgs>>
    ): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mahasiswa.
     * @param {mahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mahasiswaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, mahasiswaUpdateArgs<ExtArgs>>
    ): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Mahasiswas.
     * @param {mahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mahasiswaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mahasiswaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mahasiswaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, mahasiswaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mahasiswa.
     * @param {mahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
    **/
    upsert<T extends mahasiswaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, mahasiswaUpsertArgs<ExtArgs>>
    ): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends mahasiswaCountArgs>(
      args?: Subset<T, mahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaGroupByArgs} args - Group by arguments.
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
      T extends mahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: mahasiswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mahasiswa model
   */
  readonly fields: mahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the mahasiswa model
   */ 
  interface mahasiswaFieldRefs {
    readonly nim: FieldRef<"mahasiswa", 'String'>
    readonly email: FieldRef<"mahasiswa", 'String'>
    readonly nama: FieldRef<"mahasiswa", 'String'>
    readonly no_hp: FieldRef<"mahasiswa", 'String'>
    readonly alamat: FieldRef<"mahasiswa", 'String'>
    readonly foto: FieldRef<"mahasiswa", 'String'>
    readonly plain_password: FieldRef<"mahasiswa", 'String'>
    readonly password: FieldRef<"mahasiswa", 'String'>
    readonly id_tim: FieldRef<"mahasiswa", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * mahasiswa findUnique
   */
  export type mahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }


  /**
   * mahasiswa findUniqueOrThrow
   */
  export type mahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }


  /**
   * mahasiswa findFirst
   */
  export type mahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }


  /**
   * mahasiswa findFirstOrThrow
   */
  export type mahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }


  /**
   * mahasiswa findMany
   */
  export type mahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Filter, which mahasiswas to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }


  /**
   * mahasiswa create
   */
  export type mahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * The data needed to create a mahasiswa.
     */
    data: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
  }


  /**
   * mahasiswa createMany
   */
  export type mahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mahasiswas.
     */
    data: mahasiswaCreateManyInput | mahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * mahasiswa update
   */
  export type mahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * The data needed to update a mahasiswa.
     */
    data: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
    /**
     * Choose, which mahasiswa to update.
     */
    where: mahasiswaWhereUniqueInput
  }


  /**
   * mahasiswa updateMany
   */
  export type mahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mahasiswas.
     */
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which mahasiswas to update
     */
    where?: mahasiswaWhereInput
  }


  /**
   * mahasiswa upsert
   */
  export type mahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * The filter to search for the mahasiswa to update in case it exists.
     */
    where: mahasiswaWhereUniqueInput
    /**
     * In case the mahasiswa found by the `where` argument doesn't exist, create a new mahasiswa with this data.
     */
    create: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
    /**
     * In case the mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
  }


  /**
   * mahasiswa delete
   */
  export type mahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Filter which mahasiswa to delete.
     */
    where: mahasiswaWhereUniqueInput
  }


  /**
   * mahasiswa deleteMany
   */
  export type mahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswas to delete
     */
    where?: mahasiswaWhereInput
  }


  /**
   * mahasiswa without action
   */
  export type mahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
  }



  /**
   * Model migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
    time: number | null
    batch: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: bigint | null
    time: number | null
    batch: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: bigint | null
    version: string | null
    class: string | null
    group: string | null
    namespace: string | null
    time: number | null
    batch: number | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: bigint | null
    version: string | null
    class: string | null
    group: string | null
    namespace: string | null
    time: number | null
    batch: number | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    version: number
    class: number
    group: number
    namespace: number
    time: number
    batch: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
    time?: true
    batch?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
    time?: true
    batch?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    version?: true
    class?: true
    group?: true
    namespace?: true
    time?: true
    batch?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    version?: true
    class?: true
    group?: true
    namespace?: true
    time?: true
    batch?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    version?: true
    class?: true
    group?: true
    namespace?: true
    time?: true
    batch?: true
    _all?: true
  }

  export type MigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: migrationsWhereInput
    orderBy?: migrationsOrderByWithAggregationInput | migrationsOrderByWithAggregationInput[]
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }

  export type MigrationsGroupByOutputType = {
    id: bigint
    version: string
    class: string
    group: string
    namespace: string
    time: number
    batch: number
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    class?: boolean
    group?: boolean
    namespace?: boolean
    time?: boolean
    batch?: boolean
  }, ExtArgs["result"]["migrations"]>

  export type migrationsSelectScalar = {
    id?: boolean
    version?: boolean
    class?: boolean
    group?: boolean
    namespace?: boolean
    time?: boolean
    batch?: boolean
  }


  export type $migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      version: string
      class: string
      group: string
      namespace: string
      time: number
      batch: number
    }, ExtArgs["result"]["migrations"]>
    composites: {}
  }


  type migrationsGetPayload<S extends boolean | null | undefined | migrationsDefaultArgs> = $Result.GetResult<Prisma.$migrationsPayload, S>

  type migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<migrationsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['migrations'], meta: { name: 'migrations' } }
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends migrationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsFindUniqueArgs<ExtArgs>>
    ): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Migrations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends migrationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsFindFirstArgs<ExtArgs>>
    ): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends migrationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
    **/
    create<T extends migrationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsCreateArgs<ExtArgs>>
    ): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Migrations.
     *     @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     *     @example
     *     // Create many Migrations
     *     const migrations = await prisma.migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends migrationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
    **/
    delete<T extends migrationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsDeleteArgs<ExtArgs>>
    ): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends migrationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsUpdateArgs<ExtArgs>>
    ): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends migrationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, migrationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends migrationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
    **/
    upsert<T extends migrationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, migrationsUpsertArgs<ExtArgs>>
    ): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsGroupByArgs} args - Group by arguments.
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
      T extends migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: migrationsGroupByArgs['orderBy'] }
        : { orderBy?: migrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the migrations model
   */
  readonly fields: migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the migrations model
   */ 
  interface migrationsFieldRefs {
    readonly id: FieldRef<"migrations", 'BigInt'>
    readonly version: FieldRef<"migrations", 'String'>
    readonly class: FieldRef<"migrations", 'String'>
    readonly group: FieldRef<"migrations", 'String'>
    readonly namespace: FieldRef<"migrations", 'String'>
    readonly time: FieldRef<"migrations", 'Int'>
    readonly batch: FieldRef<"migrations", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }


  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }


  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }


  /**
   * migrations create
   */
  export type migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }


  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * migrations update
   */
  export type migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
  }


  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }


  /**
   * migrations delete
   */
  export type migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
  }


  /**
   * migrations without action
   */
  export type migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
  }



  /**
   * Model posisi_pcl
   */

  export type AggregatePosisi_pcl = {
    _count: Posisi_pclCountAggregateOutputType | null
    _avg: Posisi_pclAvgAggregateOutputType | null
    _sum: Posisi_pclSumAggregateOutputType | null
    _min: Posisi_pclMinAggregateOutputType | null
    _max: Posisi_pclMaxAggregateOutputType | null
  }

  export type Posisi_pclAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    akurasi: number | null
  }

  export type Posisi_pclSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    akurasi: number | null
  }

  export type Posisi_pclMinAggregateOutputType = {
    nim: string | null
    lokus: string | null
    latitude: number | null
    longitude: number | null
    akurasi: number | null
    time_created: Date | null
  }

  export type Posisi_pclMaxAggregateOutputType = {
    nim: string | null
    lokus: string | null
    latitude: number | null
    longitude: number | null
    akurasi: number | null
    time_created: Date | null
  }

  export type Posisi_pclCountAggregateOutputType = {
    nim: number
    lokus: number
    latitude: number
    longitude: number
    akurasi: number
    time_created: number
    _all: number
  }


  export type Posisi_pclAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    akurasi?: true
  }

  export type Posisi_pclSumAggregateInputType = {
    latitude?: true
    longitude?: true
    akurasi?: true
  }

  export type Posisi_pclMinAggregateInputType = {
    nim?: true
    lokus?: true
    latitude?: true
    longitude?: true
    akurasi?: true
    time_created?: true
  }

  export type Posisi_pclMaxAggregateInputType = {
    nim?: true
    lokus?: true
    latitude?: true
    longitude?: true
    akurasi?: true
    time_created?: true
  }

  export type Posisi_pclCountAggregateInputType = {
    nim?: true
    lokus?: true
    latitude?: true
    longitude?: true
    akurasi?: true
    time_created?: true
    _all?: true
  }

  export type Posisi_pclAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posisi_pcl to aggregate.
     */
    where?: posisi_pclWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posisi_pcls to fetch.
     */
    orderBy?: posisi_pclOrderByWithRelationInput | posisi_pclOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: posisi_pclWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posisi_pcls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posisi_pcls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posisi_pcls
    **/
    _count?: true | Posisi_pclCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Posisi_pclAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Posisi_pclSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Posisi_pclMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Posisi_pclMaxAggregateInputType
  }

  export type GetPosisi_pclAggregateType<T extends Posisi_pclAggregateArgs> = {
        [P in keyof T & keyof AggregatePosisi_pcl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosisi_pcl[P]>
      : GetScalarType<T[P], AggregatePosisi_pcl[P]>
  }




  export type posisi_pclGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posisi_pclWhereInput
    orderBy?: posisi_pclOrderByWithAggregationInput | posisi_pclOrderByWithAggregationInput[]
    by: Posisi_pclScalarFieldEnum[] | Posisi_pclScalarFieldEnum
    having?: posisi_pclScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Posisi_pclCountAggregateInputType | true
    _avg?: Posisi_pclAvgAggregateInputType
    _sum?: Posisi_pclSumAggregateInputType
    _min?: Posisi_pclMinAggregateInputType
    _max?: Posisi_pclMaxAggregateInputType
  }

  export type Posisi_pclGroupByOutputType = {
    nim: string
    lokus: string | null
    latitude: number | null
    longitude: number | null
    akurasi: number | null
    time_created: Date | null
    _count: Posisi_pclCountAggregateOutputType | null
    _avg: Posisi_pclAvgAggregateOutputType | null
    _sum: Posisi_pclSumAggregateOutputType | null
    _min: Posisi_pclMinAggregateOutputType | null
    _max: Posisi_pclMaxAggregateOutputType | null
  }

  type GetPosisi_pclGroupByPayload<T extends posisi_pclGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Posisi_pclGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Posisi_pclGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Posisi_pclGroupByOutputType[P]>
            : GetScalarType<T[P], Posisi_pclGroupByOutputType[P]>
        }
      >
    >


  export type posisi_pclSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    lokus?: boolean
    latitude?: boolean
    longitude?: boolean
    akurasi?: boolean
    time_created?: boolean
  }, ExtArgs["result"]["posisi_pcl"]>

  export type posisi_pclSelectScalar = {
    nim?: boolean
    lokus?: boolean
    latitude?: boolean
    longitude?: boolean
    akurasi?: boolean
    time_created?: boolean
  }


  export type $posisi_pclPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posisi_pcl"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nim: string
      lokus: string | null
      latitude: number | null
      longitude: number | null
      akurasi: number | null
      time_created: Date | null
    }, ExtArgs["result"]["posisi_pcl"]>
    composites: {}
  }


  type posisi_pclGetPayload<S extends boolean | null | undefined | posisi_pclDefaultArgs> = $Result.GetResult<Prisma.$posisi_pclPayload, S>

  type posisi_pclCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<posisi_pclFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Posisi_pclCountAggregateInputType | true
    }

  export interface posisi_pclDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posisi_pcl'], meta: { name: 'posisi_pcl' } }
    /**
     * Find zero or one Posisi_pcl that matches the filter.
     * @param {posisi_pclFindUniqueArgs} args - Arguments to find a Posisi_pcl
     * @example
     * // Get one Posisi_pcl
     * const posisi_pcl = await prisma.posisi_pcl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends posisi_pclFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, posisi_pclFindUniqueArgs<ExtArgs>>
    ): Prisma__posisi_pclClient<$Result.GetResult<Prisma.$posisi_pclPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Posisi_pcl that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {posisi_pclFindUniqueOrThrowArgs} args - Arguments to find a Posisi_pcl
     * @example
     * // Get one Posisi_pcl
     * const posisi_pcl = await prisma.posisi_pcl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends posisi_pclFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, posisi_pclFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__posisi_pclClient<$Result.GetResult<Prisma.$posisi_pclPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Posisi_pcl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisi_pclFindFirstArgs} args - Arguments to find a Posisi_pcl
     * @example
     * // Get one Posisi_pcl
     * const posisi_pcl = await prisma.posisi_pcl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends posisi_pclFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, posisi_pclFindFirstArgs<ExtArgs>>
    ): Prisma__posisi_pclClient<$Result.GetResult<Prisma.$posisi_pclPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Posisi_pcl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisi_pclFindFirstOrThrowArgs} args - Arguments to find a Posisi_pcl
     * @example
     * // Get one Posisi_pcl
     * const posisi_pcl = await prisma.posisi_pcl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends posisi_pclFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, posisi_pclFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__posisi_pclClient<$Result.GetResult<Prisma.$posisi_pclPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posisi_pcls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisi_pclFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posisi_pcls
     * const posisi_pcls = await prisma.posisi_pcl.findMany()
     * 
     * // Get first 10 Posisi_pcls
     * const posisi_pcls = await prisma.posisi_pcl.findMany({ take: 10 })
     * 
     * // Only select the `nim`
     * const posisi_pclWithNimOnly = await prisma.posisi_pcl.findMany({ select: { nim: true } })
     * 
    **/
    findMany<T extends posisi_pclFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, posisi_pclFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posisi_pclPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Posisi_pcl.
     * @param {posisi_pclCreateArgs} args - Arguments to create a Posisi_pcl.
     * @example
     * // Create one Posisi_pcl
     * const Posisi_pcl = await prisma.posisi_pcl.create({
     *   data: {
     *     // ... data to create a Posisi_pcl
     *   }
     * })
     * 
    **/
    create<T extends posisi_pclCreateArgs<ExtArgs>>(
      args: SelectSubset<T, posisi_pclCreateArgs<ExtArgs>>
    ): Prisma__posisi_pclClient<$Result.GetResult<Prisma.$posisi_pclPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posisi_pcls.
     *     @param {posisi_pclCreateManyArgs} args - Arguments to create many Posisi_pcls.
     *     @example
     *     // Create many Posisi_pcls
     *     const posisi_pcl = await prisma.posisi_pcl.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends posisi_pclCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, posisi_pclCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posisi_pcl.
     * @param {posisi_pclDeleteArgs} args - Arguments to delete one Posisi_pcl.
     * @example
     * // Delete one Posisi_pcl
     * const Posisi_pcl = await prisma.posisi_pcl.delete({
     *   where: {
     *     // ... filter to delete one Posisi_pcl
     *   }
     * })
     * 
    **/
    delete<T extends posisi_pclDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, posisi_pclDeleteArgs<ExtArgs>>
    ): Prisma__posisi_pclClient<$Result.GetResult<Prisma.$posisi_pclPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Posisi_pcl.
     * @param {posisi_pclUpdateArgs} args - Arguments to update one Posisi_pcl.
     * @example
     * // Update one Posisi_pcl
     * const posisi_pcl = await prisma.posisi_pcl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends posisi_pclUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, posisi_pclUpdateArgs<ExtArgs>>
    ): Prisma__posisi_pclClient<$Result.GetResult<Prisma.$posisi_pclPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posisi_pcls.
     * @param {posisi_pclDeleteManyArgs} args - Arguments to filter Posisi_pcls to delete.
     * @example
     * // Delete a few Posisi_pcls
     * const { count } = await prisma.posisi_pcl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends posisi_pclDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, posisi_pclDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posisi_pcls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisi_pclUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posisi_pcls
     * const posisi_pcl = await prisma.posisi_pcl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends posisi_pclUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, posisi_pclUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posisi_pcl.
     * @param {posisi_pclUpsertArgs} args - Arguments to update or create a Posisi_pcl.
     * @example
     * // Update or create a Posisi_pcl
     * const posisi_pcl = await prisma.posisi_pcl.upsert({
     *   create: {
     *     // ... data to create a Posisi_pcl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posisi_pcl we want to update
     *   }
     * })
    **/
    upsert<T extends posisi_pclUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, posisi_pclUpsertArgs<ExtArgs>>
    ): Prisma__posisi_pclClient<$Result.GetResult<Prisma.$posisi_pclPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posisi_pcls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisi_pclCountArgs} args - Arguments to filter Posisi_pcls to count.
     * @example
     * // Count the number of Posisi_pcls
     * const count = await prisma.posisi_pcl.count({
     *   where: {
     *     // ... the filter for the Posisi_pcls we want to count
     *   }
     * })
    **/
    count<T extends posisi_pclCountArgs>(
      args?: Subset<T, posisi_pclCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Posisi_pclCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posisi_pcl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Posisi_pclAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Posisi_pclAggregateArgs>(args: Subset<T, Posisi_pclAggregateArgs>): Prisma.PrismaPromise<GetPosisi_pclAggregateType<T>>

    /**
     * Group by Posisi_pcl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisi_pclGroupByArgs} args - Group by arguments.
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
      T extends posisi_pclGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: posisi_pclGroupByArgs['orderBy'] }
        : { orderBy?: posisi_pclGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, posisi_pclGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosisi_pclGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posisi_pcl model
   */
  readonly fields: posisi_pclFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posisi_pcl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__posisi_pclClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the posisi_pcl model
   */ 
  interface posisi_pclFieldRefs {
    readonly nim: FieldRef<"posisi_pcl", 'String'>
    readonly lokus: FieldRef<"posisi_pcl", 'String'>
    readonly latitude: FieldRef<"posisi_pcl", 'Float'>
    readonly longitude: FieldRef<"posisi_pcl", 'Float'>
    readonly akurasi: FieldRef<"posisi_pcl", 'Float'>
    readonly time_created: FieldRef<"posisi_pcl", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * posisi_pcl findUnique
   */
  export type posisi_pclFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
    /**
     * Filter, which posisi_pcl to fetch.
     */
    where: posisi_pclWhereUniqueInput
  }


  /**
   * posisi_pcl findUniqueOrThrow
   */
  export type posisi_pclFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
    /**
     * Filter, which posisi_pcl to fetch.
     */
    where: posisi_pclWhereUniqueInput
  }


  /**
   * posisi_pcl findFirst
   */
  export type posisi_pclFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
    /**
     * Filter, which posisi_pcl to fetch.
     */
    where?: posisi_pclWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posisi_pcls to fetch.
     */
    orderBy?: posisi_pclOrderByWithRelationInput | posisi_pclOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posisi_pcls.
     */
    cursor?: posisi_pclWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posisi_pcls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posisi_pcls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posisi_pcls.
     */
    distinct?: Posisi_pclScalarFieldEnum | Posisi_pclScalarFieldEnum[]
  }


  /**
   * posisi_pcl findFirstOrThrow
   */
  export type posisi_pclFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
    /**
     * Filter, which posisi_pcl to fetch.
     */
    where?: posisi_pclWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posisi_pcls to fetch.
     */
    orderBy?: posisi_pclOrderByWithRelationInput | posisi_pclOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posisi_pcls.
     */
    cursor?: posisi_pclWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posisi_pcls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posisi_pcls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posisi_pcls.
     */
    distinct?: Posisi_pclScalarFieldEnum | Posisi_pclScalarFieldEnum[]
  }


  /**
   * posisi_pcl findMany
   */
  export type posisi_pclFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
    /**
     * Filter, which posisi_pcls to fetch.
     */
    where?: posisi_pclWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posisi_pcls to fetch.
     */
    orderBy?: posisi_pclOrderByWithRelationInput | posisi_pclOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posisi_pcls.
     */
    cursor?: posisi_pclWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posisi_pcls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posisi_pcls.
     */
    skip?: number
    distinct?: Posisi_pclScalarFieldEnum | Posisi_pclScalarFieldEnum[]
  }


  /**
   * posisi_pcl create
   */
  export type posisi_pclCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
    /**
     * The data needed to create a posisi_pcl.
     */
    data: XOR<posisi_pclCreateInput, posisi_pclUncheckedCreateInput>
  }


  /**
   * posisi_pcl createMany
   */
  export type posisi_pclCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posisi_pcls.
     */
    data: posisi_pclCreateManyInput | posisi_pclCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * posisi_pcl update
   */
  export type posisi_pclUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
    /**
     * The data needed to update a posisi_pcl.
     */
    data: XOR<posisi_pclUpdateInput, posisi_pclUncheckedUpdateInput>
    /**
     * Choose, which posisi_pcl to update.
     */
    where: posisi_pclWhereUniqueInput
  }


  /**
   * posisi_pcl updateMany
   */
  export type posisi_pclUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posisi_pcls.
     */
    data: XOR<posisi_pclUpdateManyMutationInput, posisi_pclUncheckedUpdateManyInput>
    /**
     * Filter which posisi_pcls to update
     */
    where?: posisi_pclWhereInput
  }


  /**
   * posisi_pcl upsert
   */
  export type posisi_pclUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
    /**
     * The filter to search for the posisi_pcl to update in case it exists.
     */
    where: posisi_pclWhereUniqueInput
    /**
     * In case the posisi_pcl found by the `where` argument doesn't exist, create a new posisi_pcl with this data.
     */
    create: XOR<posisi_pclCreateInput, posisi_pclUncheckedCreateInput>
    /**
     * In case the posisi_pcl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<posisi_pclUpdateInput, posisi_pclUncheckedUpdateInput>
  }


  /**
   * posisi_pcl delete
   */
  export type posisi_pclDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
    /**
     * Filter which posisi_pcl to delete.
     */
    where: posisi_pclWhereUniqueInput
  }


  /**
   * posisi_pcl deleteMany
   */
  export type posisi_pclDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posisi_pcls to delete
     */
    where?: posisi_pclWhereInput
  }


  /**
   * posisi_pcl without action
   */
  export type posisi_pclDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi_pcl
     */
    select?: posisi_pclSelect<ExtArgs> | null
  }



  /**
   * Model riwayatposisipcl
   */

  export type AggregateRiwayatposisipcl = {
    _count: RiwayatposisipclCountAggregateOutputType | null
    _avg: RiwayatposisipclAvgAggregateOutputType | null
    _sum: RiwayatposisipclSumAggregateOutputType | null
    _min: RiwayatposisipclMinAggregateOutputType | null
    _max: RiwayatposisipclMaxAggregateOutputType | null
  }

  export type RiwayatposisipclAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    akurasi: number | null
  }

  export type RiwayatposisipclSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    akurasi: number | null
  }

  export type RiwayatposisipclMinAggregateOutputType = {
    id: number | null
    nim: string | null
    latitude: number | null
    longitude: number | null
    akurasi: number | null
    time: Date | null
  }

  export type RiwayatposisipclMaxAggregateOutputType = {
    id: number | null
    nim: string | null
    latitude: number | null
    longitude: number | null
    akurasi: number | null
    time: Date | null
  }

  export type RiwayatposisipclCountAggregateOutputType = {
    id: number
    nim: number
    latitude: number
    longitude: number
    akurasi: number
    time: number
    _all: number
  }


  export type RiwayatposisipclAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    akurasi?: true
  }

  export type RiwayatposisipclSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    akurasi?: true
  }

  export type RiwayatposisipclMinAggregateInputType = {
    id?: true
    nim?: true
    latitude?: true
    longitude?: true
    akurasi?: true
    time?: true
  }

  export type RiwayatposisipclMaxAggregateInputType = {
    id?: true
    nim?: true
    latitude?: true
    longitude?: true
    akurasi?: true
    time?: true
  }

  export type RiwayatposisipclCountAggregateInputType = {
    id?: true
    nim?: true
    latitude?: true
    longitude?: true
    akurasi?: true
    time?: true
    _all?: true
  }

  export type RiwayatposisipclAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which riwayatposisipcl to aggregate.
     */
    where?: riwayatposisipclWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of riwayatposisipcls to fetch.
     */
    orderBy?: riwayatposisipclOrderByWithRelationInput | riwayatposisipclOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: riwayatposisipclWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` riwayatposisipcls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` riwayatposisipcls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned riwayatposisipcls
    **/
    _count?: true | RiwayatposisipclCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiwayatposisipclAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiwayatposisipclSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiwayatposisipclMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiwayatposisipclMaxAggregateInputType
  }

  export type GetRiwayatposisipclAggregateType<T extends RiwayatposisipclAggregateArgs> = {
        [P in keyof T & keyof AggregateRiwayatposisipcl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiwayatposisipcl[P]>
      : GetScalarType<T[P], AggregateRiwayatposisipcl[P]>
  }




  export type riwayatposisipclGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: riwayatposisipclWhereInput
    orderBy?: riwayatposisipclOrderByWithAggregationInput | riwayatposisipclOrderByWithAggregationInput[]
    by: RiwayatposisipclScalarFieldEnum[] | RiwayatposisipclScalarFieldEnum
    having?: riwayatposisipclScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiwayatposisipclCountAggregateInputType | true
    _avg?: RiwayatposisipclAvgAggregateInputType
    _sum?: RiwayatposisipclSumAggregateInputType
    _min?: RiwayatposisipclMinAggregateInputType
    _max?: RiwayatposisipclMaxAggregateInputType
  }

  export type RiwayatposisipclGroupByOutputType = {
    id: number
    nim: string
    latitude: number
    longitude: number
    akurasi: number
    time: Date
    _count: RiwayatposisipclCountAggregateOutputType | null
    _avg: RiwayatposisipclAvgAggregateOutputType | null
    _sum: RiwayatposisipclSumAggregateOutputType | null
    _min: RiwayatposisipclMinAggregateOutputType | null
    _max: RiwayatposisipclMaxAggregateOutputType | null
  }

  type GetRiwayatposisipclGroupByPayload<T extends riwayatposisipclGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiwayatposisipclGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiwayatposisipclGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiwayatposisipclGroupByOutputType[P]>
            : GetScalarType<T[P], RiwayatposisipclGroupByOutputType[P]>
        }
      >
    >


  export type riwayatposisipclSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    latitude?: boolean
    longitude?: boolean
    akurasi?: boolean
    time?: boolean
  }, ExtArgs["result"]["riwayatposisipcl"]>

  export type riwayatposisipclSelectScalar = {
    id?: boolean
    nim?: boolean
    latitude?: boolean
    longitude?: boolean
    akurasi?: boolean
    time?: boolean
  }


  export type $riwayatposisipclPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "riwayatposisipcl"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nim: string
      latitude: number
      longitude: number
      akurasi: number
      time: Date
    }, ExtArgs["result"]["riwayatposisipcl"]>
    composites: {}
  }


  type riwayatposisipclGetPayload<S extends boolean | null | undefined | riwayatposisipclDefaultArgs> = $Result.GetResult<Prisma.$riwayatposisipclPayload, S>

  type riwayatposisipclCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<riwayatposisipclFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RiwayatposisipclCountAggregateInputType | true
    }

  export interface riwayatposisipclDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['riwayatposisipcl'], meta: { name: 'riwayatposisipcl' } }
    /**
     * Find zero or one Riwayatposisipcl that matches the filter.
     * @param {riwayatposisipclFindUniqueArgs} args - Arguments to find a Riwayatposisipcl
     * @example
     * // Get one Riwayatposisipcl
     * const riwayatposisipcl = await prisma.riwayatposisipcl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends riwayatposisipclFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, riwayatposisipclFindUniqueArgs<ExtArgs>>
    ): Prisma__riwayatposisipclClient<$Result.GetResult<Prisma.$riwayatposisipclPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Riwayatposisipcl that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {riwayatposisipclFindUniqueOrThrowArgs} args - Arguments to find a Riwayatposisipcl
     * @example
     * // Get one Riwayatposisipcl
     * const riwayatposisipcl = await prisma.riwayatposisipcl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends riwayatposisipclFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, riwayatposisipclFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__riwayatposisipclClient<$Result.GetResult<Prisma.$riwayatposisipclPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Riwayatposisipcl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {riwayatposisipclFindFirstArgs} args - Arguments to find a Riwayatposisipcl
     * @example
     * // Get one Riwayatposisipcl
     * const riwayatposisipcl = await prisma.riwayatposisipcl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends riwayatposisipclFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, riwayatposisipclFindFirstArgs<ExtArgs>>
    ): Prisma__riwayatposisipclClient<$Result.GetResult<Prisma.$riwayatposisipclPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Riwayatposisipcl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {riwayatposisipclFindFirstOrThrowArgs} args - Arguments to find a Riwayatposisipcl
     * @example
     * // Get one Riwayatposisipcl
     * const riwayatposisipcl = await prisma.riwayatposisipcl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends riwayatposisipclFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, riwayatposisipclFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__riwayatposisipclClient<$Result.GetResult<Prisma.$riwayatposisipclPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Riwayatposisipcls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {riwayatposisipclFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Riwayatposisipcls
     * const riwayatposisipcls = await prisma.riwayatposisipcl.findMany()
     * 
     * // Get first 10 Riwayatposisipcls
     * const riwayatposisipcls = await prisma.riwayatposisipcl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riwayatposisipclWithIdOnly = await prisma.riwayatposisipcl.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends riwayatposisipclFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, riwayatposisipclFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$riwayatposisipclPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Riwayatposisipcl.
     * @param {riwayatposisipclCreateArgs} args - Arguments to create a Riwayatposisipcl.
     * @example
     * // Create one Riwayatposisipcl
     * const Riwayatposisipcl = await prisma.riwayatposisipcl.create({
     *   data: {
     *     // ... data to create a Riwayatposisipcl
     *   }
     * })
     * 
    **/
    create<T extends riwayatposisipclCreateArgs<ExtArgs>>(
      args: SelectSubset<T, riwayatposisipclCreateArgs<ExtArgs>>
    ): Prisma__riwayatposisipclClient<$Result.GetResult<Prisma.$riwayatposisipclPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Riwayatposisipcls.
     *     @param {riwayatposisipclCreateManyArgs} args - Arguments to create many Riwayatposisipcls.
     *     @example
     *     // Create many Riwayatposisipcls
     *     const riwayatposisipcl = await prisma.riwayatposisipcl.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends riwayatposisipclCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, riwayatposisipclCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Riwayatposisipcl.
     * @param {riwayatposisipclDeleteArgs} args - Arguments to delete one Riwayatposisipcl.
     * @example
     * // Delete one Riwayatposisipcl
     * const Riwayatposisipcl = await prisma.riwayatposisipcl.delete({
     *   where: {
     *     // ... filter to delete one Riwayatposisipcl
     *   }
     * })
     * 
    **/
    delete<T extends riwayatposisipclDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, riwayatposisipclDeleteArgs<ExtArgs>>
    ): Prisma__riwayatposisipclClient<$Result.GetResult<Prisma.$riwayatposisipclPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Riwayatposisipcl.
     * @param {riwayatposisipclUpdateArgs} args - Arguments to update one Riwayatposisipcl.
     * @example
     * // Update one Riwayatposisipcl
     * const riwayatposisipcl = await prisma.riwayatposisipcl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends riwayatposisipclUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, riwayatposisipclUpdateArgs<ExtArgs>>
    ): Prisma__riwayatposisipclClient<$Result.GetResult<Prisma.$riwayatposisipclPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Riwayatposisipcls.
     * @param {riwayatposisipclDeleteManyArgs} args - Arguments to filter Riwayatposisipcls to delete.
     * @example
     * // Delete a few Riwayatposisipcls
     * const { count } = await prisma.riwayatposisipcl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends riwayatposisipclDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, riwayatposisipclDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riwayatposisipcls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {riwayatposisipclUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Riwayatposisipcls
     * const riwayatposisipcl = await prisma.riwayatposisipcl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends riwayatposisipclUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, riwayatposisipclUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Riwayatposisipcl.
     * @param {riwayatposisipclUpsertArgs} args - Arguments to update or create a Riwayatposisipcl.
     * @example
     * // Update or create a Riwayatposisipcl
     * const riwayatposisipcl = await prisma.riwayatposisipcl.upsert({
     *   create: {
     *     // ... data to create a Riwayatposisipcl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Riwayatposisipcl we want to update
     *   }
     * })
    **/
    upsert<T extends riwayatposisipclUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, riwayatposisipclUpsertArgs<ExtArgs>>
    ): Prisma__riwayatposisipclClient<$Result.GetResult<Prisma.$riwayatposisipclPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Riwayatposisipcls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {riwayatposisipclCountArgs} args - Arguments to filter Riwayatposisipcls to count.
     * @example
     * // Count the number of Riwayatposisipcls
     * const count = await prisma.riwayatposisipcl.count({
     *   where: {
     *     // ... the filter for the Riwayatposisipcls we want to count
     *   }
     * })
    **/
    count<T extends riwayatposisipclCountArgs>(
      args?: Subset<T, riwayatposisipclCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiwayatposisipclCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Riwayatposisipcl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiwayatposisipclAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiwayatposisipclAggregateArgs>(args: Subset<T, RiwayatposisipclAggregateArgs>): Prisma.PrismaPromise<GetRiwayatposisipclAggregateType<T>>

    /**
     * Group by Riwayatposisipcl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {riwayatposisipclGroupByArgs} args - Group by arguments.
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
      T extends riwayatposisipclGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: riwayatposisipclGroupByArgs['orderBy'] }
        : { orderBy?: riwayatposisipclGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, riwayatposisipclGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiwayatposisipclGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the riwayatposisipcl model
   */
  readonly fields: riwayatposisipclFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for riwayatposisipcl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__riwayatposisipclClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the riwayatposisipcl model
   */ 
  interface riwayatposisipclFieldRefs {
    readonly id: FieldRef<"riwayatposisipcl", 'Int'>
    readonly nim: FieldRef<"riwayatposisipcl", 'String'>
    readonly latitude: FieldRef<"riwayatposisipcl", 'Float'>
    readonly longitude: FieldRef<"riwayatposisipcl", 'Float'>
    readonly akurasi: FieldRef<"riwayatposisipcl", 'Float'>
    readonly time: FieldRef<"riwayatposisipcl", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * riwayatposisipcl findUnique
   */
  export type riwayatposisipclFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
    /**
     * Filter, which riwayatposisipcl to fetch.
     */
    where: riwayatposisipclWhereUniqueInput
  }


  /**
   * riwayatposisipcl findUniqueOrThrow
   */
  export type riwayatposisipclFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
    /**
     * Filter, which riwayatposisipcl to fetch.
     */
    where: riwayatposisipclWhereUniqueInput
  }


  /**
   * riwayatposisipcl findFirst
   */
  export type riwayatposisipclFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
    /**
     * Filter, which riwayatposisipcl to fetch.
     */
    where?: riwayatposisipclWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of riwayatposisipcls to fetch.
     */
    orderBy?: riwayatposisipclOrderByWithRelationInput | riwayatposisipclOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for riwayatposisipcls.
     */
    cursor?: riwayatposisipclWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` riwayatposisipcls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` riwayatposisipcls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of riwayatposisipcls.
     */
    distinct?: RiwayatposisipclScalarFieldEnum | RiwayatposisipclScalarFieldEnum[]
  }


  /**
   * riwayatposisipcl findFirstOrThrow
   */
  export type riwayatposisipclFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
    /**
     * Filter, which riwayatposisipcl to fetch.
     */
    where?: riwayatposisipclWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of riwayatposisipcls to fetch.
     */
    orderBy?: riwayatposisipclOrderByWithRelationInput | riwayatposisipclOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for riwayatposisipcls.
     */
    cursor?: riwayatposisipclWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` riwayatposisipcls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` riwayatposisipcls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of riwayatposisipcls.
     */
    distinct?: RiwayatposisipclScalarFieldEnum | RiwayatposisipclScalarFieldEnum[]
  }


  /**
   * riwayatposisipcl findMany
   */
  export type riwayatposisipclFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
    /**
     * Filter, which riwayatposisipcls to fetch.
     */
    where?: riwayatposisipclWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of riwayatposisipcls to fetch.
     */
    orderBy?: riwayatposisipclOrderByWithRelationInput | riwayatposisipclOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing riwayatposisipcls.
     */
    cursor?: riwayatposisipclWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` riwayatposisipcls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` riwayatposisipcls.
     */
    skip?: number
    distinct?: RiwayatposisipclScalarFieldEnum | RiwayatposisipclScalarFieldEnum[]
  }


  /**
   * riwayatposisipcl create
   */
  export type riwayatposisipclCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
    /**
     * The data needed to create a riwayatposisipcl.
     */
    data: XOR<riwayatposisipclCreateInput, riwayatposisipclUncheckedCreateInput>
  }


  /**
   * riwayatposisipcl createMany
   */
  export type riwayatposisipclCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many riwayatposisipcls.
     */
    data: riwayatposisipclCreateManyInput | riwayatposisipclCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * riwayatposisipcl update
   */
  export type riwayatposisipclUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
    /**
     * The data needed to update a riwayatposisipcl.
     */
    data: XOR<riwayatposisipclUpdateInput, riwayatposisipclUncheckedUpdateInput>
    /**
     * Choose, which riwayatposisipcl to update.
     */
    where: riwayatposisipclWhereUniqueInput
  }


  /**
   * riwayatposisipcl updateMany
   */
  export type riwayatposisipclUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update riwayatposisipcls.
     */
    data: XOR<riwayatposisipclUpdateManyMutationInput, riwayatposisipclUncheckedUpdateManyInput>
    /**
     * Filter which riwayatposisipcls to update
     */
    where?: riwayatposisipclWhereInput
  }


  /**
   * riwayatposisipcl upsert
   */
  export type riwayatposisipclUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
    /**
     * The filter to search for the riwayatposisipcl to update in case it exists.
     */
    where: riwayatposisipclWhereUniqueInput
    /**
     * In case the riwayatposisipcl found by the `where` argument doesn't exist, create a new riwayatposisipcl with this data.
     */
    create: XOR<riwayatposisipclCreateInput, riwayatposisipclUncheckedCreateInput>
    /**
     * In case the riwayatposisipcl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<riwayatposisipclUpdateInput, riwayatposisipclUncheckedUpdateInput>
  }


  /**
   * riwayatposisipcl delete
   */
  export type riwayatposisipclDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
    /**
     * Filter which riwayatposisipcl to delete.
     */
    where: riwayatposisipclWhereUniqueInput
  }


  /**
   * riwayatposisipcl deleteMany
   */
  export type riwayatposisipclDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which riwayatposisipcls to delete
     */
    where?: riwayatposisipclWhereInput
  }


  /**
   * riwayatposisipcl without action
   */
  export type riwayatposisipclDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the riwayatposisipcl
     */
    select?: riwayatposisipclSelect<ExtArgs> | null
  }



  /**
   * Model rumahtangga
   */

  export type AggregateRumahtangga = {
    _count: RumahtanggaCountAggregateOutputType | null
    _avg: RumahtanggaAvgAggregateOutputType | null
    _sum: RumahtanggaSumAggregateOutputType | null
    _min: RumahtanggaMinAggregateOutputType | null
    _max: RumahtanggaMaxAggregateOutputType | null
  }

  export type RumahtanggaAvgAggregateOutputType = {
    no_segmen: number | null
    no_bg_fisik: number | null
    no_bg_sensus: number | null
    no_urut_rt: number | null
    jml_genz: number | null
    no_urut_rt_egb: number | null
    long: number | null
    lat: number | null
  }

  export type RumahtanggaSumAggregateOutputType = {
    no_segmen: number | null
    no_bg_fisik: number | null
    no_bg_sensus: number | null
    no_urut_rt: number | null
    jml_genz: number | null
    no_urut_rt_egb: number | null
    long: number | null
    lat: number | null
  }

  export type RumahtanggaMinAggregateOutputType = {
    kodeRuta: string | null
    no_segmen: number | null
    no_bg_fisik: number | null
    no_bg_sensus: number | null
    no_urut_rt: number | null
    nama_krt: string | null
    alamat: string | null
    no_bs: string | null
    is_genz_ortu: string | null
    jml_genz: number | null
    no_urut_rt_egb: number | null
    long: number | null
    lat: number | null
    catatan: string | null
  }

  export type RumahtanggaMaxAggregateOutputType = {
    kodeRuta: string | null
    no_segmen: number | null
    no_bg_fisik: number | null
    no_bg_sensus: number | null
    no_urut_rt: number | null
    nama_krt: string | null
    alamat: string | null
    no_bs: string | null
    is_genz_ortu: string | null
    jml_genz: number | null
    no_urut_rt_egb: number | null
    long: number | null
    lat: number | null
    catatan: string | null
  }

  export type RumahtanggaCountAggregateOutputType = {
    kodeRuta: number
    no_segmen: number
    no_bg_fisik: number
    no_bg_sensus: number
    no_urut_rt: number
    nama_krt: number
    alamat: number
    no_bs: number
    is_genz_ortu: number
    jml_genz: number
    no_urut_rt_egb: number
    long: number
    lat: number
    catatan: number
    _all: number
  }


  export type RumahtanggaAvgAggregateInputType = {
    no_segmen?: true
    no_bg_fisik?: true
    no_bg_sensus?: true
    no_urut_rt?: true
    jml_genz?: true
    no_urut_rt_egb?: true
    long?: true
    lat?: true
  }

  export type RumahtanggaSumAggregateInputType = {
    no_segmen?: true
    no_bg_fisik?: true
    no_bg_sensus?: true
    no_urut_rt?: true
    jml_genz?: true
    no_urut_rt_egb?: true
    long?: true
    lat?: true
  }

  export type RumahtanggaMinAggregateInputType = {
    kodeRuta?: true
    no_segmen?: true
    no_bg_fisik?: true
    no_bg_sensus?: true
    no_urut_rt?: true
    nama_krt?: true
    alamat?: true
    no_bs?: true
    is_genz_ortu?: true
    jml_genz?: true
    no_urut_rt_egb?: true
    long?: true
    lat?: true
    catatan?: true
  }

  export type RumahtanggaMaxAggregateInputType = {
    kodeRuta?: true
    no_segmen?: true
    no_bg_fisik?: true
    no_bg_sensus?: true
    no_urut_rt?: true
    nama_krt?: true
    alamat?: true
    no_bs?: true
    is_genz_ortu?: true
    jml_genz?: true
    no_urut_rt_egb?: true
    long?: true
    lat?: true
    catatan?: true
  }

  export type RumahtanggaCountAggregateInputType = {
    kodeRuta?: true
    no_segmen?: true
    no_bg_fisik?: true
    no_bg_sensus?: true
    no_urut_rt?: true
    nama_krt?: true
    alamat?: true
    no_bs?: true
    is_genz_ortu?: true
    jml_genz?: true
    no_urut_rt_egb?: true
    long?: true
    lat?: true
    catatan?: true
    _all?: true
  }

  export type RumahtanggaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rumahtangga to aggregate.
     */
    where?: rumahtanggaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rumahtanggas to fetch.
     */
    orderBy?: rumahtanggaOrderByWithRelationInput | rumahtanggaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rumahtanggaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rumahtanggas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rumahtanggas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rumahtanggas
    **/
    _count?: true | RumahtanggaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RumahtanggaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RumahtanggaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RumahtanggaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RumahtanggaMaxAggregateInputType
  }

  export type GetRumahtanggaAggregateType<T extends RumahtanggaAggregateArgs> = {
        [P in keyof T & keyof AggregateRumahtangga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRumahtangga[P]>
      : GetScalarType<T[P], AggregateRumahtangga[P]>
  }




  export type rumahtanggaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rumahtanggaWhereInput
    orderBy?: rumahtanggaOrderByWithAggregationInput | rumahtanggaOrderByWithAggregationInput[]
    by: RumahtanggaScalarFieldEnum[] | RumahtanggaScalarFieldEnum
    having?: rumahtanggaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RumahtanggaCountAggregateInputType | true
    _avg?: RumahtanggaAvgAggregateInputType
    _sum?: RumahtanggaSumAggregateInputType
    _min?: RumahtanggaMinAggregateInputType
    _max?: RumahtanggaMaxAggregateInputType
  }

  export type RumahtanggaGroupByOutputType = {
    kodeRuta: string
    no_segmen: number
    no_bg_fisik: number
    no_bg_sensus: number
    no_urut_rt: number
    nama_krt: string
    alamat: string
    no_bs: string
    is_genz_ortu: string
    jml_genz: number
    no_urut_rt_egb: number
    long: number | null
    lat: number | null
    catatan: string
    _count: RumahtanggaCountAggregateOutputType | null
    _avg: RumahtanggaAvgAggregateOutputType | null
    _sum: RumahtanggaSumAggregateOutputType | null
    _min: RumahtanggaMinAggregateOutputType | null
    _max: RumahtanggaMaxAggregateOutputType | null
  }

  type GetRumahtanggaGroupByPayload<T extends rumahtanggaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RumahtanggaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RumahtanggaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RumahtanggaGroupByOutputType[P]>
            : GetScalarType<T[P], RumahtanggaGroupByOutputType[P]>
        }
      >
    >


  export type rumahtanggaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kodeRuta?: boolean
    no_segmen?: boolean
    no_bg_fisik?: boolean
    no_bg_sensus?: boolean
    no_urut_rt?: boolean
    nama_krt?: boolean
    alamat?: boolean
    no_bs?: boolean
    is_genz_ortu?: boolean
    jml_genz?: boolean
    no_urut_rt_egb?: boolean
    long?: boolean
    lat?: boolean
    catatan?: boolean
  }, ExtArgs["result"]["rumahtangga"]>

  export type rumahtanggaSelectScalar = {
    kodeRuta?: boolean
    no_segmen?: boolean
    no_bg_fisik?: boolean
    no_bg_sensus?: boolean
    no_urut_rt?: boolean
    nama_krt?: boolean
    alamat?: boolean
    no_bs?: boolean
    is_genz_ortu?: boolean
    jml_genz?: boolean
    no_urut_rt_egb?: boolean
    long?: boolean
    lat?: boolean
    catatan?: boolean
  }


  export type $rumahtanggaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rumahtangga"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      kodeRuta: string
      no_segmen: number
      no_bg_fisik: number
      no_bg_sensus: number
      no_urut_rt: number
      nama_krt: string
      alamat: string
      no_bs: string
      is_genz_ortu: string
      jml_genz: number
      no_urut_rt_egb: number
      long: number | null
      lat: number | null
      catatan: string
    }, ExtArgs["result"]["rumahtangga"]>
    composites: {}
  }


  type rumahtanggaGetPayload<S extends boolean | null | undefined | rumahtanggaDefaultArgs> = $Result.GetResult<Prisma.$rumahtanggaPayload, S>

  type rumahtanggaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rumahtanggaFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RumahtanggaCountAggregateInputType | true
    }

  export interface rumahtanggaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rumahtangga'], meta: { name: 'rumahtangga' } }
    /**
     * Find zero or one Rumahtangga that matches the filter.
     * @param {rumahtanggaFindUniqueArgs} args - Arguments to find a Rumahtangga
     * @example
     * // Get one Rumahtangga
     * const rumahtangga = await prisma.rumahtangga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rumahtanggaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rumahtanggaFindUniqueArgs<ExtArgs>>
    ): Prisma__rumahtanggaClient<$Result.GetResult<Prisma.$rumahtanggaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rumahtangga that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rumahtanggaFindUniqueOrThrowArgs} args - Arguments to find a Rumahtangga
     * @example
     * // Get one Rumahtangga
     * const rumahtangga = await prisma.rumahtangga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rumahtanggaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rumahtanggaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rumahtanggaClient<$Result.GetResult<Prisma.$rumahtanggaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rumahtangga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rumahtanggaFindFirstArgs} args - Arguments to find a Rumahtangga
     * @example
     * // Get one Rumahtangga
     * const rumahtangga = await prisma.rumahtangga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rumahtanggaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rumahtanggaFindFirstArgs<ExtArgs>>
    ): Prisma__rumahtanggaClient<$Result.GetResult<Prisma.$rumahtanggaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rumahtangga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rumahtanggaFindFirstOrThrowArgs} args - Arguments to find a Rumahtangga
     * @example
     * // Get one Rumahtangga
     * const rumahtangga = await prisma.rumahtangga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rumahtanggaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rumahtanggaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rumahtanggaClient<$Result.GetResult<Prisma.$rumahtanggaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rumahtanggas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rumahtanggaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rumahtanggas
     * const rumahtanggas = await prisma.rumahtangga.findMany()
     * 
     * // Get first 10 Rumahtanggas
     * const rumahtanggas = await prisma.rumahtangga.findMany({ take: 10 })
     * 
     * // Only select the `kodeRuta`
     * const rumahtanggaWithKodeRutaOnly = await prisma.rumahtangga.findMany({ select: { kodeRuta: true } })
     * 
    **/
    findMany<T extends rumahtanggaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rumahtanggaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rumahtanggaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rumahtangga.
     * @param {rumahtanggaCreateArgs} args - Arguments to create a Rumahtangga.
     * @example
     * // Create one Rumahtangga
     * const Rumahtangga = await prisma.rumahtangga.create({
     *   data: {
     *     // ... data to create a Rumahtangga
     *   }
     * })
     * 
    **/
    create<T extends rumahtanggaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rumahtanggaCreateArgs<ExtArgs>>
    ): Prisma__rumahtanggaClient<$Result.GetResult<Prisma.$rumahtanggaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rumahtanggas.
     *     @param {rumahtanggaCreateManyArgs} args - Arguments to create many Rumahtanggas.
     *     @example
     *     // Create many Rumahtanggas
     *     const rumahtangga = await prisma.rumahtangga.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rumahtanggaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rumahtanggaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rumahtangga.
     * @param {rumahtanggaDeleteArgs} args - Arguments to delete one Rumahtangga.
     * @example
     * // Delete one Rumahtangga
     * const Rumahtangga = await prisma.rumahtangga.delete({
     *   where: {
     *     // ... filter to delete one Rumahtangga
     *   }
     * })
     * 
    **/
    delete<T extends rumahtanggaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rumahtanggaDeleteArgs<ExtArgs>>
    ): Prisma__rumahtanggaClient<$Result.GetResult<Prisma.$rumahtanggaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rumahtangga.
     * @param {rumahtanggaUpdateArgs} args - Arguments to update one Rumahtangga.
     * @example
     * // Update one Rumahtangga
     * const rumahtangga = await prisma.rumahtangga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rumahtanggaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rumahtanggaUpdateArgs<ExtArgs>>
    ): Prisma__rumahtanggaClient<$Result.GetResult<Prisma.$rumahtanggaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rumahtanggas.
     * @param {rumahtanggaDeleteManyArgs} args - Arguments to filter Rumahtanggas to delete.
     * @example
     * // Delete a few Rumahtanggas
     * const { count } = await prisma.rumahtangga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rumahtanggaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rumahtanggaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rumahtanggas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rumahtanggaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rumahtanggas
     * const rumahtangga = await prisma.rumahtangga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rumahtanggaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rumahtanggaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rumahtangga.
     * @param {rumahtanggaUpsertArgs} args - Arguments to update or create a Rumahtangga.
     * @example
     * // Update or create a Rumahtangga
     * const rumahtangga = await prisma.rumahtangga.upsert({
     *   create: {
     *     // ... data to create a Rumahtangga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rumahtangga we want to update
     *   }
     * })
    **/
    upsert<T extends rumahtanggaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rumahtanggaUpsertArgs<ExtArgs>>
    ): Prisma__rumahtanggaClient<$Result.GetResult<Prisma.$rumahtanggaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rumahtanggas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rumahtanggaCountArgs} args - Arguments to filter Rumahtanggas to count.
     * @example
     * // Count the number of Rumahtanggas
     * const count = await prisma.rumahtangga.count({
     *   where: {
     *     // ... the filter for the Rumahtanggas we want to count
     *   }
     * })
    **/
    count<T extends rumahtanggaCountArgs>(
      args?: Subset<T, rumahtanggaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RumahtanggaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rumahtangga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RumahtanggaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RumahtanggaAggregateArgs>(args: Subset<T, RumahtanggaAggregateArgs>): Prisma.PrismaPromise<GetRumahtanggaAggregateType<T>>

    /**
     * Group by Rumahtangga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rumahtanggaGroupByArgs} args - Group by arguments.
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
      T extends rumahtanggaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rumahtanggaGroupByArgs['orderBy'] }
        : { orderBy?: rumahtanggaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rumahtanggaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRumahtanggaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rumahtangga model
   */
  readonly fields: rumahtanggaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rumahtangga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rumahtanggaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the rumahtangga model
   */ 
  interface rumahtanggaFieldRefs {
    readonly kodeRuta: FieldRef<"rumahtangga", 'String'>
    readonly no_segmen: FieldRef<"rumahtangga", 'Int'>
    readonly no_bg_fisik: FieldRef<"rumahtangga", 'Int'>
    readonly no_bg_sensus: FieldRef<"rumahtangga", 'Int'>
    readonly no_urut_rt: FieldRef<"rumahtangga", 'Int'>
    readonly nama_krt: FieldRef<"rumahtangga", 'String'>
    readonly alamat: FieldRef<"rumahtangga", 'String'>
    readonly no_bs: FieldRef<"rumahtangga", 'String'>
    readonly is_genz_ortu: FieldRef<"rumahtangga", 'String'>
    readonly jml_genz: FieldRef<"rumahtangga", 'Int'>
    readonly no_urut_rt_egb: FieldRef<"rumahtangga", 'Int'>
    readonly long: FieldRef<"rumahtangga", 'Float'>
    readonly lat: FieldRef<"rumahtangga", 'Float'>
    readonly catatan: FieldRef<"rumahtangga", 'String'>
  }
    

  // Custom InputTypes

  /**
   * rumahtangga findUnique
   */
  export type rumahtanggaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
    /**
     * Filter, which rumahtangga to fetch.
     */
    where: rumahtanggaWhereUniqueInput
  }


  /**
   * rumahtangga findUniqueOrThrow
   */
  export type rumahtanggaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
    /**
     * Filter, which rumahtangga to fetch.
     */
    where: rumahtanggaWhereUniqueInput
  }


  /**
   * rumahtangga findFirst
   */
  export type rumahtanggaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
    /**
     * Filter, which rumahtangga to fetch.
     */
    where?: rumahtanggaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rumahtanggas to fetch.
     */
    orderBy?: rumahtanggaOrderByWithRelationInput | rumahtanggaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rumahtanggas.
     */
    cursor?: rumahtanggaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rumahtanggas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rumahtanggas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rumahtanggas.
     */
    distinct?: RumahtanggaScalarFieldEnum | RumahtanggaScalarFieldEnum[]
  }


  /**
   * rumahtangga findFirstOrThrow
   */
  export type rumahtanggaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
    /**
     * Filter, which rumahtangga to fetch.
     */
    where?: rumahtanggaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rumahtanggas to fetch.
     */
    orderBy?: rumahtanggaOrderByWithRelationInput | rumahtanggaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rumahtanggas.
     */
    cursor?: rumahtanggaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rumahtanggas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rumahtanggas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rumahtanggas.
     */
    distinct?: RumahtanggaScalarFieldEnum | RumahtanggaScalarFieldEnum[]
  }


  /**
   * rumahtangga findMany
   */
  export type rumahtanggaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
    /**
     * Filter, which rumahtanggas to fetch.
     */
    where?: rumahtanggaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rumahtanggas to fetch.
     */
    orderBy?: rumahtanggaOrderByWithRelationInput | rumahtanggaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rumahtanggas.
     */
    cursor?: rumahtanggaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rumahtanggas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rumahtanggas.
     */
    skip?: number
    distinct?: RumahtanggaScalarFieldEnum | RumahtanggaScalarFieldEnum[]
  }


  /**
   * rumahtangga create
   */
  export type rumahtanggaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
    /**
     * The data needed to create a rumahtangga.
     */
    data: XOR<rumahtanggaCreateInput, rumahtanggaUncheckedCreateInput>
  }


  /**
   * rumahtangga createMany
   */
  export type rumahtanggaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rumahtanggas.
     */
    data: rumahtanggaCreateManyInput | rumahtanggaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * rumahtangga update
   */
  export type rumahtanggaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
    /**
     * The data needed to update a rumahtangga.
     */
    data: XOR<rumahtanggaUpdateInput, rumahtanggaUncheckedUpdateInput>
    /**
     * Choose, which rumahtangga to update.
     */
    where: rumahtanggaWhereUniqueInput
  }


  /**
   * rumahtangga updateMany
   */
  export type rumahtanggaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rumahtanggas.
     */
    data: XOR<rumahtanggaUpdateManyMutationInput, rumahtanggaUncheckedUpdateManyInput>
    /**
     * Filter which rumahtanggas to update
     */
    where?: rumahtanggaWhereInput
  }


  /**
   * rumahtangga upsert
   */
  export type rumahtanggaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
    /**
     * The filter to search for the rumahtangga to update in case it exists.
     */
    where: rumahtanggaWhereUniqueInput
    /**
     * In case the rumahtangga found by the `where` argument doesn't exist, create a new rumahtangga with this data.
     */
    create: XOR<rumahtanggaCreateInput, rumahtanggaUncheckedCreateInput>
    /**
     * In case the rumahtangga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rumahtanggaUpdateInput, rumahtanggaUncheckedUpdateInput>
  }


  /**
   * rumahtangga delete
   */
  export type rumahtanggaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
    /**
     * Filter which rumahtangga to delete.
     */
    where: rumahtanggaWhereUniqueInput
  }


  /**
   * rumahtangga deleteMany
   */
  export type rumahtanggaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rumahtanggas to delete
     */
    where?: rumahtanggaWhereInput
  }


  /**
   * rumahtangga without action
   */
  export type rumahtanggaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rumahtangga
     */
    select?: rumahtanggaSelect<ExtArgs> | null
  }



  /**
   * Model timpencacah
   */

  export type AggregateTimpencacah = {
    _count: TimpencacahCountAggregateOutputType | null
    _avg: TimpencacahAvgAggregateOutputType | null
    _sum: TimpencacahSumAggregateOutputType | null
    _min: TimpencacahMinAggregateOutputType | null
    _max: TimpencacahMaxAggregateOutputType | null
  }

  export type TimpencacahAvgAggregateOutputType = {
    id_tim: number | null
  }

  export type TimpencacahSumAggregateOutputType = {
    id_tim: number | null
  }

  export type TimpencacahMinAggregateOutputType = {
    id_tim: number | null
    nama_tim: string | null
    nim_pml: string | null
  }

  export type TimpencacahMaxAggregateOutputType = {
    id_tim: number | null
    nama_tim: string | null
    nim_pml: string | null
  }

  export type TimpencacahCountAggregateOutputType = {
    id_tim: number
    nama_tim: number
    nim_pml: number
    _all: number
  }


  export type TimpencacahAvgAggregateInputType = {
    id_tim?: true
  }

  export type TimpencacahSumAggregateInputType = {
    id_tim?: true
  }

  export type TimpencacahMinAggregateInputType = {
    id_tim?: true
    nama_tim?: true
    nim_pml?: true
  }

  export type TimpencacahMaxAggregateInputType = {
    id_tim?: true
    nama_tim?: true
    nim_pml?: true
  }

  export type TimpencacahCountAggregateInputType = {
    id_tim?: true
    nama_tim?: true
    nim_pml?: true
    _all?: true
  }

  export type TimpencacahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timpencacah to aggregate.
     */
    where?: timpencacahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timpencacahs to fetch.
     */
    orderBy?: timpencacahOrderByWithRelationInput | timpencacahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: timpencacahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timpencacahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timpencacahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned timpencacahs
    **/
    _count?: true | TimpencacahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimpencacahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimpencacahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimpencacahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimpencacahMaxAggregateInputType
  }

  export type GetTimpencacahAggregateType<T extends TimpencacahAggregateArgs> = {
        [P in keyof T & keyof AggregateTimpencacah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimpencacah[P]>
      : GetScalarType<T[P], AggregateTimpencacah[P]>
  }




  export type timpencacahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timpencacahWhereInput
    orderBy?: timpencacahOrderByWithAggregationInput | timpencacahOrderByWithAggregationInput[]
    by: TimpencacahScalarFieldEnum[] | TimpencacahScalarFieldEnum
    having?: timpencacahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimpencacahCountAggregateInputType | true
    _avg?: TimpencacahAvgAggregateInputType
    _sum?: TimpencacahSumAggregateInputType
    _min?: TimpencacahMinAggregateInputType
    _max?: TimpencacahMaxAggregateInputType
  }

  export type TimpencacahGroupByOutputType = {
    id_tim: number
    nama_tim: string
    nim_pml: string
    _count: TimpencacahCountAggregateOutputType | null
    _avg: TimpencacahAvgAggregateOutputType | null
    _sum: TimpencacahSumAggregateOutputType | null
    _min: TimpencacahMinAggregateOutputType | null
    _max: TimpencacahMaxAggregateOutputType | null
  }

  type GetTimpencacahGroupByPayload<T extends timpencacahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimpencacahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimpencacahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimpencacahGroupByOutputType[P]>
            : GetScalarType<T[P], TimpencacahGroupByOutputType[P]>
        }
      >
    >


  export type timpencacahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tim?: boolean
    nama_tim?: boolean
    nim_pml?: boolean
  }, ExtArgs["result"]["timpencacah"]>

  export type timpencacahSelectScalar = {
    id_tim?: boolean
    nama_tim?: boolean
    nim_pml?: boolean
  }


  export type $timpencacahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "timpencacah"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_tim: number
      nama_tim: string
      nim_pml: string
    }, ExtArgs["result"]["timpencacah"]>
    composites: {}
  }


  type timpencacahGetPayload<S extends boolean | null | undefined | timpencacahDefaultArgs> = $Result.GetResult<Prisma.$timpencacahPayload, S>

  type timpencacahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<timpencacahFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TimpencacahCountAggregateInputType | true
    }

  export interface timpencacahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['timpencacah'], meta: { name: 'timpencacah' } }
    /**
     * Find zero or one Timpencacah that matches the filter.
     * @param {timpencacahFindUniqueArgs} args - Arguments to find a Timpencacah
     * @example
     * // Get one Timpencacah
     * const timpencacah = await prisma.timpencacah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends timpencacahFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, timpencacahFindUniqueArgs<ExtArgs>>
    ): Prisma__timpencacahClient<$Result.GetResult<Prisma.$timpencacahPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Timpencacah that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {timpencacahFindUniqueOrThrowArgs} args - Arguments to find a Timpencacah
     * @example
     * // Get one Timpencacah
     * const timpencacah = await prisma.timpencacah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends timpencacahFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, timpencacahFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__timpencacahClient<$Result.GetResult<Prisma.$timpencacahPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Timpencacah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timpencacahFindFirstArgs} args - Arguments to find a Timpencacah
     * @example
     * // Get one Timpencacah
     * const timpencacah = await prisma.timpencacah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends timpencacahFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, timpencacahFindFirstArgs<ExtArgs>>
    ): Prisma__timpencacahClient<$Result.GetResult<Prisma.$timpencacahPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Timpencacah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timpencacahFindFirstOrThrowArgs} args - Arguments to find a Timpencacah
     * @example
     * // Get one Timpencacah
     * const timpencacah = await prisma.timpencacah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends timpencacahFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, timpencacahFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__timpencacahClient<$Result.GetResult<Prisma.$timpencacahPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Timpencacahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timpencacahFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timpencacahs
     * const timpencacahs = await prisma.timpencacah.findMany()
     * 
     * // Get first 10 Timpencacahs
     * const timpencacahs = await prisma.timpencacah.findMany({ take: 10 })
     * 
     * // Only select the `id_tim`
     * const timpencacahWithId_timOnly = await prisma.timpencacah.findMany({ select: { id_tim: true } })
     * 
    **/
    findMany<T extends timpencacahFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, timpencacahFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timpencacahPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Timpencacah.
     * @param {timpencacahCreateArgs} args - Arguments to create a Timpencacah.
     * @example
     * // Create one Timpencacah
     * const Timpencacah = await prisma.timpencacah.create({
     *   data: {
     *     // ... data to create a Timpencacah
     *   }
     * })
     * 
    **/
    create<T extends timpencacahCreateArgs<ExtArgs>>(
      args: SelectSubset<T, timpencacahCreateArgs<ExtArgs>>
    ): Prisma__timpencacahClient<$Result.GetResult<Prisma.$timpencacahPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Timpencacahs.
     *     @param {timpencacahCreateManyArgs} args - Arguments to create many Timpencacahs.
     *     @example
     *     // Create many Timpencacahs
     *     const timpencacah = await prisma.timpencacah.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends timpencacahCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, timpencacahCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Timpencacah.
     * @param {timpencacahDeleteArgs} args - Arguments to delete one Timpencacah.
     * @example
     * // Delete one Timpencacah
     * const Timpencacah = await prisma.timpencacah.delete({
     *   where: {
     *     // ... filter to delete one Timpencacah
     *   }
     * })
     * 
    **/
    delete<T extends timpencacahDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, timpencacahDeleteArgs<ExtArgs>>
    ): Prisma__timpencacahClient<$Result.GetResult<Prisma.$timpencacahPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Timpencacah.
     * @param {timpencacahUpdateArgs} args - Arguments to update one Timpencacah.
     * @example
     * // Update one Timpencacah
     * const timpencacah = await prisma.timpencacah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends timpencacahUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, timpencacahUpdateArgs<ExtArgs>>
    ): Prisma__timpencacahClient<$Result.GetResult<Prisma.$timpencacahPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Timpencacahs.
     * @param {timpencacahDeleteManyArgs} args - Arguments to filter Timpencacahs to delete.
     * @example
     * // Delete a few Timpencacahs
     * const { count } = await prisma.timpencacah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends timpencacahDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, timpencacahDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timpencacahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timpencacahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timpencacahs
     * const timpencacah = await prisma.timpencacah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends timpencacahUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, timpencacahUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timpencacah.
     * @param {timpencacahUpsertArgs} args - Arguments to update or create a Timpencacah.
     * @example
     * // Update or create a Timpencacah
     * const timpencacah = await prisma.timpencacah.upsert({
     *   create: {
     *     // ... data to create a Timpencacah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timpencacah we want to update
     *   }
     * })
    **/
    upsert<T extends timpencacahUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, timpencacahUpsertArgs<ExtArgs>>
    ): Prisma__timpencacahClient<$Result.GetResult<Prisma.$timpencacahPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Timpencacahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timpencacahCountArgs} args - Arguments to filter Timpencacahs to count.
     * @example
     * // Count the number of Timpencacahs
     * const count = await prisma.timpencacah.count({
     *   where: {
     *     // ... the filter for the Timpencacahs we want to count
     *   }
     * })
    **/
    count<T extends timpencacahCountArgs>(
      args?: Subset<T, timpencacahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimpencacahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timpencacah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimpencacahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimpencacahAggregateArgs>(args: Subset<T, TimpencacahAggregateArgs>): Prisma.PrismaPromise<GetTimpencacahAggregateType<T>>

    /**
     * Group by Timpencacah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timpencacahGroupByArgs} args - Group by arguments.
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
      T extends timpencacahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: timpencacahGroupByArgs['orderBy'] }
        : { orderBy?: timpencacahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, timpencacahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimpencacahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the timpencacah model
   */
  readonly fields: timpencacahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for timpencacah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__timpencacahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the timpencacah model
   */ 
  interface timpencacahFieldRefs {
    readonly id_tim: FieldRef<"timpencacah", 'Int'>
    readonly nama_tim: FieldRef<"timpencacah", 'String'>
    readonly nim_pml: FieldRef<"timpencacah", 'String'>
  }
    

  // Custom InputTypes

  /**
   * timpencacah findUnique
   */
  export type timpencacahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
    /**
     * Filter, which timpencacah to fetch.
     */
    where: timpencacahWhereUniqueInput
  }


  /**
   * timpencacah findUniqueOrThrow
   */
  export type timpencacahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
    /**
     * Filter, which timpencacah to fetch.
     */
    where: timpencacahWhereUniqueInput
  }


  /**
   * timpencacah findFirst
   */
  export type timpencacahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
    /**
     * Filter, which timpencacah to fetch.
     */
    where?: timpencacahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timpencacahs to fetch.
     */
    orderBy?: timpencacahOrderByWithRelationInput | timpencacahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timpencacahs.
     */
    cursor?: timpencacahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timpencacahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timpencacahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timpencacahs.
     */
    distinct?: TimpencacahScalarFieldEnum | TimpencacahScalarFieldEnum[]
  }


  /**
   * timpencacah findFirstOrThrow
   */
  export type timpencacahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
    /**
     * Filter, which timpencacah to fetch.
     */
    where?: timpencacahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timpencacahs to fetch.
     */
    orderBy?: timpencacahOrderByWithRelationInput | timpencacahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timpencacahs.
     */
    cursor?: timpencacahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timpencacahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timpencacahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timpencacahs.
     */
    distinct?: TimpencacahScalarFieldEnum | TimpencacahScalarFieldEnum[]
  }


  /**
   * timpencacah findMany
   */
  export type timpencacahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
    /**
     * Filter, which timpencacahs to fetch.
     */
    where?: timpencacahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timpencacahs to fetch.
     */
    orderBy?: timpencacahOrderByWithRelationInput | timpencacahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing timpencacahs.
     */
    cursor?: timpencacahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timpencacahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timpencacahs.
     */
    skip?: number
    distinct?: TimpencacahScalarFieldEnum | TimpencacahScalarFieldEnum[]
  }


  /**
   * timpencacah create
   */
  export type timpencacahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
    /**
     * The data needed to create a timpencacah.
     */
    data: XOR<timpencacahCreateInput, timpencacahUncheckedCreateInput>
  }


  /**
   * timpencacah createMany
   */
  export type timpencacahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many timpencacahs.
     */
    data: timpencacahCreateManyInput | timpencacahCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * timpencacah update
   */
  export type timpencacahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
    /**
     * The data needed to update a timpencacah.
     */
    data: XOR<timpencacahUpdateInput, timpencacahUncheckedUpdateInput>
    /**
     * Choose, which timpencacah to update.
     */
    where: timpencacahWhereUniqueInput
  }


  /**
   * timpencacah updateMany
   */
  export type timpencacahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update timpencacahs.
     */
    data: XOR<timpencacahUpdateManyMutationInput, timpencacahUncheckedUpdateManyInput>
    /**
     * Filter which timpencacahs to update
     */
    where?: timpencacahWhereInput
  }


  /**
   * timpencacah upsert
   */
  export type timpencacahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
    /**
     * The filter to search for the timpencacah to update in case it exists.
     */
    where: timpencacahWhereUniqueInput
    /**
     * In case the timpencacah found by the `where` argument doesn't exist, create a new timpencacah with this data.
     */
    create: XOR<timpencacahCreateInput, timpencacahUncheckedCreateInput>
    /**
     * In case the timpencacah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<timpencacahUpdateInput, timpencacahUncheckedUpdateInput>
  }


  /**
   * timpencacah delete
   */
  export type timpencacahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
    /**
     * Filter which timpencacah to delete.
     */
    where: timpencacahWhereUniqueInput
  }


  /**
   * timpencacah deleteMany
   */
  export type timpencacahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timpencacahs to delete
     */
    where?: timpencacahWhereInput
  }


  /**
   * timpencacah without action
   */
  export type timpencacahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timpencacah
     */
    select?: timpencacahSelect<ExtArgs> | null
  }



  /**
   * Model token_ambil_sampel
   */

  export type AggregateToken_ambil_sampel = {
    _count: Token_ambil_sampelCountAggregateOutputType | null
    _avg: Token_ambil_sampelAvgAggregateOutputType | null
    _sum: Token_ambil_sampelSumAggregateOutputType | null
    _min: Token_ambil_sampelMinAggregateOutputType | null
    _max: Token_ambil_sampelMaxAggregateOutputType | null
  }

  export type Token_ambil_sampelAvgAggregateOutputType = {
    riset: number | null
    token: number | null
    count: number | null
  }

  export type Token_ambil_sampelSumAggregateOutputType = {
    riset: number | null
    token: number | null
    count: number | null
  }

  export type Token_ambil_sampelMinAggregateOutputType = {
    riset: number | null
    token: number | null
    lokus: string | null
    count: number | null
  }

  export type Token_ambil_sampelMaxAggregateOutputType = {
    riset: number | null
    token: number | null
    lokus: string | null
    count: number | null
  }

  export type Token_ambil_sampelCountAggregateOutputType = {
    riset: number
    token: number
    lokus: number
    count: number
    _all: number
  }


  export type Token_ambil_sampelAvgAggregateInputType = {
    riset?: true
    token?: true
    count?: true
  }

  export type Token_ambil_sampelSumAggregateInputType = {
    riset?: true
    token?: true
    count?: true
  }

  export type Token_ambil_sampelMinAggregateInputType = {
    riset?: true
    token?: true
    lokus?: true
    count?: true
  }

  export type Token_ambil_sampelMaxAggregateInputType = {
    riset?: true
    token?: true
    lokus?: true
    count?: true
  }

  export type Token_ambil_sampelCountAggregateInputType = {
    riset?: true
    token?: true
    lokus?: true
    count?: true
    _all?: true
  }

  export type Token_ambil_sampelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_ambil_sampel to aggregate.
     */
    where?: token_ambil_sampelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_ambil_sampels to fetch.
     */
    orderBy?: token_ambil_sampelOrderByWithRelationInput | token_ambil_sampelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: token_ambil_sampelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_ambil_sampels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_ambil_sampels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned token_ambil_sampels
    **/
    _count?: true | Token_ambil_sampelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Token_ambil_sampelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Token_ambil_sampelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Token_ambil_sampelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Token_ambil_sampelMaxAggregateInputType
  }

  export type GetToken_ambil_sampelAggregateType<T extends Token_ambil_sampelAggregateArgs> = {
        [P in keyof T & keyof AggregateToken_ambil_sampel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken_ambil_sampel[P]>
      : GetScalarType<T[P], AggregateToken_ambil_sampel[P]>
  }




  export type token_ambil_sampelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_ambil_sampelWhereInput
    orderBy?: token_ambil_sampelOrderByWithAggregationInput | token_ambil_sampelOrderByWithAggregationInput[]
    by: Token_ambil_sampelScalarFieldEnum[] | Token_ambil_sampelScalarFieldEnum
    having?: token_ambil_sampelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Token_ambil_sampelCountAggregateInputType | true
    _avg?: Token_ambil_sampelAvgAggregateInputType
    _sum?: Token_ambil_sampelSumAggregateInputType
    _min?: Token_ambil_sampelMinAggregateInputType
    _max?: Token_ambil_sampelMaxAggregateInputType
  }

  export type Token_ambil_sampelGroupByOutputType = {
    riset: number
    token: number
    lokus: string | null
    count: number
    _count: Token_ambil_sampelCountAggregateOutputType | null
    _avg: Token_ambil_sampelAvgAggregateOutputType | null
    _sum: Token_ambil_sampelSumAggregateOutputType | null
    _min: Token_ambil_sampelMinAggregateOutputType | null
    _max: Token_ambil_sampelMaxAggregateOutputType | null
  }

  type GetToken_ambil_sampelGroupByPayload<T extends token_ambil_sampelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Token_ambil_sampelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Token_ambil_sampelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Token_ambil_sampelGroupByOutputType[P]>
            : GetScalarType<T[P], Token_ambil_sampelGroupByOutputType[P]>
        }
      >
    >


  export type token_ambil_sampelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    riset?: boolean
    token?: boolean
    lokus?: boolean
    count?: boolean
  }, ExtArgs["result"]["token_ambil_sampel"]>

  export type token_ambil_sampelSelectScalar = {
    riset?: boolean
    token?: boolean
    lokus?: boolean
    count?: boolean
  }


  export type $token_ambil_sampelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "token_ambil_sampel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      riset: number
      token: number
      lokus: string | null
      count: number
    }, ExtArgs["result"]["token_ambil_sampel"]>
    composites: {}
  }


  type token_ambil_sampelGetPayload<S extends boolean | null | undefined | token_ambil_sampelDefaultArgs> = $Result.GetResult<Prisma.$token_ambil_sampelPayload, S>

  type token_ambil_sampelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<token_ambil_sampelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Token_ambil_sampelCountAggregateInputType | true
    }

  export interface token_ambil_sampelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['token_ambil_sampel'], meta: { name: 'token_ambil_sampel' } }
    /**
     * Find zero or one Token_ambil_sampel that matches the filter.
     * @param {token_ambil_sampelFindUniqueArgs} args - Arguments to find a Token_ambil_sampel
     * @example
     * // Get one Token_ambil_sampel
     * const token_ambil_sampel = await prisma.token_ambil_sampel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends token_ambil_sampelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, token_ambil_sampelFindUniqueArgs<ExtArgs>>
    ): Prisma__token_ambil_sampelClient<$Result.GetResult<Prisma.$token_ambil_sampelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Token_ambil_sampel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {token_ambil_sampelFindUniqueOrThrowArgs} args - Arguments to find a Token_ambil_sampel
     * @example
     * // Get one Token_ambil_sampel
     * const token_ambil_sampel = await prisma.token_ambil_sampel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends token_ambil_sampelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, token_ambil_sampelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__token_ambil_sampelClient<$Result.GetResult<Prisma.$token_ambil_sampelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Token_ambil_sampel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_ambil_sampelFindFirstArgs} args - Arguments to find a Token_ambil_sampel
     * @example
     * // Get one Token_ambil_sampel
     * const token_ambil_sampel = await prisma.token_ambil_sampel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends token_ambil_sampelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, token_ambil_sampelFindFirstArgs<ExtArgs>>
    ): Prisma__token_ambil_sampelClient<$Result.GetResult<Prisma.$token_ambil_sampelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Token_ambil_sampel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_ambil_sampelFindFirstOrThrowArgs} args - Arguments to find a Token_ambil_sampel
     * @example
     * // Get one Token_ambil_sampel
     * const token_ambil_sampel = await prisma.token_ambil_sampel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends token_ambil_sampelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, token_ambil_sampelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__token_ambil_sampelClient<$Result.GetResult<Prisma.$token_ambil_sampelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Token_ambil_sampels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_ambil_sampelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Token_ambil_sampels
     * const token_ambil_sampels = await prisma.token_ambil_sampel.findMany()
     * 
     * // Get first 10 Token_ambil_sampels
     * const token_ambil_sampels = await prisma.token_ambil_sampel.findMany({ take: 10 })
     * 
     * // Only select the `riset`
     * const token_ambil_sampelWithRisetOnly = await prisma.token_ambil_sampel.findMany({ select: { riset: true } })
     * 
    **/
    findMany<T extends token_ambil_sampelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, token_ambil_sampelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_ambil_sampelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Token_ambil_sampel.
     * @param {token_ambil_sampelCreateArgs} args - Arguments to create a Token_ambil_sampel.
     * @example
     * // Create one Token_ambil_sampel
     * const Token_ambil_sampel = await prisma.token_ambil_sampel.create({
     *   data: {
     *     // ... data to create a Token_ambil_sampel
     *   }
     * })
     * 
    **/
    create<T extends token_ambil_sampelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, token_ambil_sampelCreateArgs<ExtArgs>>
    ): Prisma__token_ambil_sampelClient<$Result.GetResult<Prisma.$token_ambil_sampelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Token_ambil_sampels.
     *     @param {token_ambil_sampelCreateManyArgs} args - Arguments to create many Token_ambil_sampels.
     *     @example
     *     // Create many Token_ambil_sampels
     *     const token_ambil_sampel = await prisma.token_ambil_sampel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends token_ambil_sampelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, token_ambil_sampelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Token_ambil_sampel.
     * @param {token_ambil_sampelDeleteArgs} args - Arguments to delete one Token_ambil_sampel.
     * @example
     * // Delete one Token_ambil_sampel
     * const Token_ambil_sampel = await prisma.token_ambil_sampel.delete({
     *   where: {
     *     // ... filter to delete one Token_ambil_sampel
     *   }
     * })
     * 
    **/
    delete<T extends token_ambil_sampelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, token_ambil_sampelDeleteArgs<ExtArgs>>
    ): Prisma__token_ambil_sampelClient<$Result.GetResult<Prisma.$token_ambil_sampelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Token_ambil_sampel.
     * @param {token_ambil_sampelUpdateArgs} args - Arguments to update one Token_ambil_sampel.
     * @example
     * // Update one Token_ambil_sampel
     * const token_ambil_sampel = await prisma.token_ambil_sampel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends token_ambil_sampelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, token_ambil_sampelUpdateArgs<ExtArgs>>
    ): Prisma__token_ambil_sampelClient<$Result.GetResult<Prisma.$token_ambil_sampelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Token_ambil_sampels.
     * @param {token_ambil_sampelDeleteManyArgs} args - Arguments to filter Token_ambil_sampels to delete.
     * @example
     * // Delete a few Token_ambil_sampels
     * const { count } = await prisma.token_ambil_sampel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends token_ambil_sampelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, token_ambil_sampelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Token_ambil_sampels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_ambil_sampelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Token_ambil_sampels
     * const token_ambil_sampel = await prisma.token_ambil_sampel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends token_ambil_sampelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, token_ambil_sampelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token_ambil_sampel.
     * @param {token_ambil_sampelUpsertArgs} args - Arguments to update or create a Token_ambil_sampel.
     * @example
     * // Update or create a Token_ambil_sampel
     * const token_ambil_sampel = await prisma.token_ambil_sampel.upsert({
     *   create: {
     *     // ... data to create a Token_ambil_sampel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token_ambil_sampel we want to update
     *   }
     * })
    **/
    upsert<T extends token_ambil_sampelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, token_ambil_sampelUpsertArgs<ExtArgs>>
    ): Prisma__token_ambil_sampelClient<$Result.GetResult<Prisma.$token_ambil_sampelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Token_ambil_sampels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_ambil_sampelCountArgs} args - Arguments to filter Token_ambil_sampels to count.
     * @example
     * // Count the number of Token_ambil_sampels
     * const count = await prisma.token_ambil_sampel.count({
     *   where: {
     *     // ... the filter for the Token_ambil_sampels we want to count
     *   }
     * })
    **/
    count<T extends token_ambil_sampelCountArgs>(
      args?: Subset<T, token_ambil_sampelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Token_ambil_sampelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token_ambil_sampel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Token_ambil_sampelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Token_ambil_sampelAggregateArgs>(args: Subset<T, Token_ambil_sampelAggregateArgs>): Prisma.PrismaPromise<GetToken_ambil_sampelAggregateType<T>>

    /**
     * Group by Token_ambil_sampel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_ambil_sampelGroupByArgs} args - Group by arguments.
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
      T extends token_ambil_sampelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: token_ambil_sampelGroupByArgs['orderBy'] }
        : { orderBy?: token_ambil_sampelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, token_ambil_sampelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToken_ambil_sampelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the token_ambil_sampel model
   */
  readonly fields: token_ambil_sampelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for token_ambil_sampel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__token_ambil_sampelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the token_ambil_sampel model
   */ 
  interface token_ambil_sampelFieldRefs {
    readonly riset: FieldRef<"token_ambil_sampel", 'Int'>
    readonly token: FieldRef<"token_ambil_sampel", 'Int'>
    readonly lokus: FieldRef<"token_ambil_sampel", 'String'>
    readonly count: FieldRef<"token_ambil_sampel", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * token_ambil_sampel findUnique
   */
  export type token_ambil_sampelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
    /**
     * Filter, which token_ambil_sampel to fetch.
     */
    where: token_ambil_sampelWhereUniqueInput
  }


  /**
   * token_ambil_sampel findUniqueOrThrow
   */
  export type token_ambil_sampelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
    /**
     * Filter, which token_ambil_sampel to fetch.
     */
    where: token_ambil_sampelWhereUniqueInput
  }


  /**
   * token_ambil_sampel findFirst
   */
  export type token_ambil_sampelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
    /**
     * Filter, which token_ambil_sampel to fetch.
     */
    where?: token_ambil_sampelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_ambil_sampels to fetch.
     */
    orderBy?: token_ambil_sampelOrderByWithRelationInput | token_ambil_sampelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_ambil_sampels.
     */
    cursor?: token_ambil_sampelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_ambil_sampels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_ambil_sampels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of token_ambil_sampels.
     */
    distinct?: Token_ambil_sampelScalarFieldEnum | Token_ambil_sampelScalarFieldEnum[]
  }


  /**
   * token_ambil_sampel findFirstOrThrow
   */
  export type token_ambil_sampelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
    /**
     * Filter, which token_ambil_sampel to fetch.
     */
    where?: token_ambil_sampelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_ambil_sampels to fetch.
     */
    orderBy?: token_ambil_sampelOrderByWithRelationInput | token_ambil_sampelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_ambil_sampels.
     */
    cursor?: token_ambil_sampelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_ambil_sampels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_ambil_sampels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of token_ambil_sampels.
     */
    distinct?: Token_ambil_sampelScalarFieldEnum | Token_ambil_sampelScalarFieldEnum[]
  }


  /**
   * token_ambil_sampel findMany
   */
  export type token_ambil_sampelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
    /**
     * Filter, which token_ambil_sampels to fetch.
     */
    where?: token_ambil_sampelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_ambil_sampels to fetch.
     */
    orderBy?: token_ambil_sampelOrderByWithRelationInput | token_ambil_sampelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing token_ambil_sampels.
     */
    cursor?: token_ambil_sampelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_ambil_sampels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_ambil_sampels.
     */
    skip?: number
    distinct?: Token_ambil_sampelScalarFieldEnum | Token_ambil_sampelScalarFieldEnum[]
  }


  /**
   * token_ambil_sampel create
   */
  export type token_ambil_sampelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
    /**
     * The data needed to create a token_ambil_sampel.
     */
    data: XOR<token_ambil_sampelCreateInput, token_ambil_sampelUncheckedCreateInput>
  }


  /**
   * token_ambil_sampel createMany
   */
  export type token_ambil_sampelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many token_ambil_sampels.
     */
    data: token_ambil_sampelCreateManyInput | token_ambil_sampelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * token_ambil_sampel update
   */
  export type token_ambil_sampelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
    /**
     * The data needed to update a token_ambil_sampel.
     */
    data: XOR<token_ambil_sampelUpdateInput, token_ambil_sampelUncheckedUpdateInput>
    /**
     * Choose, which token_ambil_sampel to update.
     */
    where: token_ambil_sampelWhereUniqueInput
  }


  /**
   * token_ambil_sampel updateMany
   */
  export type token_ambil_sampelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update token_ambil_sampels.
     */
    data: XOR<token_ambil_sampelUpdateManyMutationInput, token_ambil_sampelUncheckedUpdateManyInput>
    /**
     * Filter which token_ambil_sampels to update
     */
    where?: token_ambil_sampelWhereInput
  }


  /**
   * token_ambil_sampel upsert
   */
  export type token_ambil_sampelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
    /**
     * The filter to search for the token_ambil_sampel to update in case it exists.
     */
    where: token_ambil_sampelWhereUniqueInput
    /**
     * In case the token_ambil_sampel found by the `where` argument doesn't exist, create a new token_ambil_sampel with this data.
     */
    create: XOR<token_ambil_sampelCreateInput, token_ambil_sampelUncheckedCreateInput>
    /**
     * In case the token_ambil_sampel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<token_ambil_sampelUpdateInput, token_ambil_sampelUncheckedUpdateInput>
  }


  /**
   * token_ambil_sampel delete
   */
  export type token_ambil_sampelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
    /**
     * Filter which token_ambil_sampel to delete.
     */
    where: token_ambil_sampelWhereUniqueInput
  }


  /**
   * token_ambil_sampel deleteMany
   */
  export type token_ambil_sampelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_ambil_sampels to delete
     */
    where?: token_ambil_sampelWhereInput
  }


  /**
   * token_ambil_sampel without action
   */
  export type token_ambil_sampelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_ambil_sampel
     */
    select?: token_ambil_sampelSelect<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
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


  export const BloksensusScalarFieldEnum: {
    no_bs: 'no_bs',
    nama_sls: 'nama_sls',
    id_kab: 'id_kab',
    id_kec: 'id_kec',
    id_kelurahan: 'id_kelurahan',
    jml_rt: 'jml_rt',
    jml_rt_genz: 'jml_rt_genz',
    jml_genz: 'jml_genz',
    nim_pencacah: 'nim_pencacah',
    tim_pencacah: 'tim_pencacah',
    tgl_listing: 'tgl_listing',
    tgl_periksa: 'tgl_periksa',
    catatan: 'catatan',
    status: 'status'
  };

  export type BloksensusScalarFieldEnum = (typeof BloksensusScalarFieldEnum)[keyof typeof BloksensusScalarFieldEnum]


  export const KabupatenScalarFieldEnum: {
    id_kab: 'id_kab',
    nama_kab: 'nama_kab'
  };

  export type KabupatenScalarFieldEnum = (typeof KabupatenScalarFieldEnum)[keyof typeof KabupatenScalarFieldEnum]


  export const KecamatanScalarFieldEnum: {
    id_kec: 'id_kec',
    nama_kec: 'nama_kec'
  };

  export type KecamatanScalarFieldEnum = (typeof KecamatanScalarFieldEnum)[keyof typeof KecamatanScalarFieldEnum]


  export const KelurahanScalarFieldEnum: {
    id_kelurahan: 'id_kelurahan',
    nama_kelurahan: 'nama_kelurahan'
  };

  export type KelurahanScalarFieldEnum = (typeof KelurahanScalarFieldEnum)[keyof typeof KelurahanScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    nim: 'nim',
    email: 'email',
    nama: 'nama',
    no_hp: 'no_hp',
    alamat: 'alamat',
    foto: 'foto',
    plain_password: 'plain_password',
    password: 'password',
    id_tim: 'id_tim'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    version: 'version',
    class: 'class',
    group: 'group',
    namespace: 'namespace',
    time: 'time',
    batch: 'batch'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const Posisi_pclScalarFieldEnum: {
    nim: 'nim',
    lokus: 'lokus',
    latitude: 'latitude',
    longitude: 'longitude',
    akurasi: 'akurasi',
    time_created: 'time_created'
  };

  export type Posisi_pclScalarFieldEnum = (typeof Posisi_pclScalarFieldEnum)[keyof typeof Posisi_pclScalarFieldEnum]


  export const RiwayatposisipclScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    latitude: 'latitude',
    longitude: 'longitude',
    akurasi: 'akurasi',
    time: 'time'
  };

  export type RiwayatposisipclScalarFieldEnum = (typeof RiwayatposisipclScalarFieldEnum)[keyof typeof RiwayatposisipclScalarFieldEnum]


  export const RumahtanggaScalarFieldEnum: {
    kodeRuta: 'kodeRuta',
    no_segmen: 'no_segmen',
    no_bg_fisik: 'no_bg_fisik',
    no_bg_sensus: 'no_bg_sensus',
    no_urut_rt: 'no_urut_rt',
    nama_krt: 'nama_krt',
    alamat: 'alamat',
    no_bs: 'no_bs',
    is_genz_ortu: 'is_genz_ortu',
    jml_genz: 'jml_genz',
    no_urut_rt_egb: 'no_urut_rt_egb',
    long: 'long',
    lat: 'lat',
    catatan: 'catatan'
  };

  export type RumahtanggaScalarFieldEnum = (typeof RumahtanggaScalarFieldEnum)[keyof typeof RumahtanggaScalarFieldEnum]


  export const TimpencacahScalarFieldEnum: {
    id_tim: 'id_tim',
    nama_tim: 'nama_tim',
    nim_pml: 'nim_pml'
  };

  export type TimpencacahScalarFieldEnum = (typeof TimpencacahScalarFieldEnum)[keyof typeof TimpencacahScalarFieldEnum]


  export const Token_ambil_sampelScalarFieldEnum: {
    riset: 'riset',
    token: 'token',
    lokus: 'lokus',
    count: 'count'
  };

  export type Token_ambil_sampelScalarFieldEnum = (typeof Token_ambil_sampelScalarFieldEnum)[keyof typeof Token_ambil_sampelScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type bloksensusWhereInput = {
    AND?: bloksensusWhereInput | bloksensusWhereInput[]
    OR?: bloksensusWhereInput[]
    NOT?: bloksensusWhereInput | bloksensusWhereInput[]
    no_bs?: StringFilter<"bloksensus"> | string
    nama_sls?: StringFilter<"bloksensus"> | string
    id_kab?: StringFilter<"bloksensus"> | string
    id_kec?: StringFilter<"bloksensus"> | string
    id_kelurahan?: StringFilter<"bloksensus"> | string
    jml_rt?: IntFilter<"bloksensus"> | number
    jml_rt_genz?: IntFilter<"bloksensus"> | number
    jml_genz?: IntFilter<"bloksensus"> | number
    nim_pencacah?: StringFilter<"bloksensus"> | string
    tim_pencacah?: StringFilter<"bloksensus"> | string
    tgl_listing?: DateTimeNullableFilter<"bloksensus"> | Date | string | null
    tgl_periksa?: DateTimeNullableFilter<"bloksensus"> | Date | string | null
    catatan?: StringNullableFilter<"bloksensus"> | string | null
    status?: StringFilter<"bloksensus"> | string
  }

  export type bloksensusOrderByWithRelationInput = {
    no_bs?: SortOrder
    nama_sls?: SortOrder
    id_kab?: SortOrder
    id_kec?: SortOrder
    id_kelurahan?: SortOrder
    jml_rt?: SortOrder
    jml_rt_genz?: SortOrder
    jml_genz?: SortOrder
    nim_pencacah?: SortOrder
    tim_pencacah?: SortOrder
    tgl_listing?: SortOrderInput | SortOrder
    tgl_periksa?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    status?: SortOrder
  }

  export type bloksensusWhereUniqueInput = Prisma.AtLeast<{
    no_bs?: string
    AND?: bloksensusWhereInput | bloksensusWhereInput[]
    OR?: bloksensusWhereInput[]
    NOT?: bloksensusWhereInput | bloksensusWhereInput[]
    nama_sls?: StringFilter<"bloksensus"> | string
    id_kab?: StringFilter<"bloksensus"> | string
    id_kec?: StringFilter<"bloksensus"> | string
    id_kelurahan?: StringFilter<"bloksensus"> | string
    jml_rt?: IntFilter<"bloksensus"> | number
    jml_rt_genz?: IntFilter<"bloksensus"> | number
    jml_genz?: IntFilter<"bloksensus"> | number
    nim_pencacah?: StringFilter<"bloksensus"> | string
    tim_pencacah?: StringFilter<"bloksensus"> | string
    tgl_listing?: DateTimeNullableFilter<"bloksensus"> | Date | string | null
    tgl_periksa?: DateTimeNullableFilter<"bloksensus"> | Date | string | null
    catatan?: StringNullableFilter<"bloksensus"> | string | null
    status?: StringFilter<"bloksensus"> | string
  }, "no_bs">

  export type bloksensusOrderByWithAggregationInput = {
    no_bs?: SortOrder
    nama_sls?: SortOrder
    id_kab?: SortOrder
    id_kec?: SortOrder
    id_kelurahan?: SortOrder
    jml_rt?: SortOrder
    jml_rt_genz?: SortOrder
    jml_genz?: SortOrder
    nim_pencacah?: SortOrder
    tim_pencacah?: SortOrder
    tgl_listing?: SortOrderInput | SortOrder
    tgl_periksa?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: bloksensusCountOrderByAggregateInput
    _avg?: bloksensusAvgOrderByAggregateInput
    _max?: bloksensusMaxOrderByAggregateInput
    _min?: bloksensusMinOrderByAggregateInput
    _sum?: bloksensusSumOrderByAggregateInput
  }

  export type bloksensusScalarWhereWithAggregatesInput = {
    AND?: bloksensusScalarWhereWithAggregatesInput | bloksensusScalarWhereWithAggregatesInput[]
    OR?: bloksensusScalarWhereWithAggregatesInput[]
    NOT?: bloksensusScalarWhereWithAggregatesInput | bloksensusScalarWhereWithAggregatesInput[]
    no_bs?: StringWithAggregatesFilter<"bloksensus"> | string
    nama_sls?: StringWithAggregatesFilter<"bloksensus"> | string
    id_kab?: StringWithAggregatesFilter<"bloksensus"> | string
    id_kec?: StringWithAggregatesFilter<"bloksensus"> | string
    id_kelurahan?: StringWithAggregatesFilter<"bloksensus"> | string
    jml_rt?: IntWithAggregatesFilter<"bloksensus"> | number
    jml_rt_genz?: IntWithAggregatesFilter<"bloksensus"> | number
    jml_genz?: IntWithAggregatesFilter<"bloksensus"> | number
    nim_pencacah?: StringWithAggregatesFilter<"bloksensus"> | string
    tim_pencacah?: StringWithAggregatesFilter<"bloksensus"> | string
    tgl_listing?: DateTimeNullableWithAggregatesFilter<"bloksensus"> | Date | string | null
    tgl_periksa?: DateTimeNullableWithAggregatesFilter<"bloksensus"> | Date | string | null
    catatan?: StringNullableWithAggregatesFilter<"bloksensus"> | string | null
    status?: StringWithAggregatesFilter<"bloksensus"> | string
  }

  export type kabupatenWhereInput = {
    AND?: kabupatenWhereInput | kabupatenWhereInput[]
    OR?: kabupatenWhereInput[]
    NOT?: kabupatenWhereInput | kabupatenWhereInput[]
    id_kab?: StringFilter<"kabupaten"> | string
    nama_kab?: StringFilter<"kabupaten"> | string
  }

  export type kabupatenOrderByWithRelationInput = {
    id_kab?: SortOrder
    nama_kab?: SortOrder
  }

  export type kabupatenWhereUniqueInput = Prisma.AtLeast<{
    id_kab?: string
    AND?: kabupatenWhereInput | kabupatenWhereInput[]
    OR?: kabupatenWhereInput[]
    NOT?: kabupatenWhereInput | kabupatenWhereInput[]
    nama_kab?: StringFilter<"kabupaten"> | string
  }, "id_kab">

  export type kabupatenOrderByWithAggregationInput = {
    id_kab?: SortOrder
    nama_kab?: SortOrder
    _count?: kabupatenCountOrderByAggregateInput
    _max?: kabupatenMaxOrderByAggregateInput
    _min?: kabupatenMinOrderByAggregateInput
  }

  export type kabupatenScalarWhereWithAggregatesInput = {
    AND?: kabupatenScalarWhereWithAggregatesInput | kabupatenScalarWhereWithAggregatesInput[]
    OR?: kabupatenScalarWhereWithAggregatesInput[]
    NOT?: kabupatenScalarWhereWithAggregatesInput | kabupatenScalarWhereWithAggregatesInput[]
    id_kab?: StringWithAggregatesFilter<"kabupaten"> | string
    nama_kab?: StringWithAggregatesFilter<"kabupaten"> | string
  }

  export type kecamatanWhereInput = {
    AND?: kecamatanWhereInput | kecamatanWhereInput[]
    OR?: kecamatanWhereInput[]
    NOT?: kecamatanWhereInput | kecamatanWhereInput[]
    id_kec?: StringFilter<"kecamatan"> | string
    nama_kec?: StringFilter<"kecamatan"> | string
  }

  export type kecamatanOrderByWithRelationInput = {
    id_kec?: SortOrder
    nama_kec?: SortOrder
  }

  export type kecamatanWhereUniqueInput = Prisma.AtLeast<{
    id_kec?: string
    AND?: kecamatanWhereInput | kecamatanWhereInput[]
    OR?: kecamatanWhereInput[]
    NOT?: kecamatanWhereInput | kecamatanWhereInput[]
    nama_kec?: StringFilter<"kecamatan"> | string
  }, "id_kec">

  export type kecamatanOrderByWithAggregationInput = {
    id_kec?: SortOrder
    nama_kec?: SortOrder
    _count?: kecamatanCountOrderByAggregateInput
    _max?: kecamatanMaxOrderByAggregateInput
    _min?: kecamatanMinOrderByAggregateInput
  }

  export type kecamatanScalarWhereWithAggregatesInput = {
    AND?: kecamatanScalarWhereWithAggregatesInput | kecamatanScalarWhereWithAggregatesInput[]
    OR?: kecamatanScalarWhereWithAggregatesInput[]
    NOT?: kecamatanScalarWhereWithAggregatesInput | kecamatanScalarWhereWithAggregatesInput[]
    id_kec?: StringWithAggregatesFilter<"kecamatan"> | string
    nama_kec?: StringWithAggregatesFilter<"kecamatan"> | string
  }

  export type kelurahanWhereInput = {
    AND?: kelurahanWhereInput | kelurahanWhereInput[]
    OR?: kelurahanWhereInput[]
    NOT?: kelurahanWhereInput | kelurahanWhereInput[]
    id_kelurahan?: StringFilter<"kelurahan"> | string
    nama_kelurahan?: StringFilter<"kelurahan"> | string
  }

  export type kelurahanOrderByWithRelationInput = {
    id_kelurahan?: SortOrder
    nama_kelurahan?: SortOrder
  }

  export type kelurahanWhereUniqueInput = Prisma.AtLeast<{
    id_kelurahan?: string
    AND?: kelurahanWhereInput | kelurahanWhereInput[]
    OR?: kelurahanWhereInput[]
    NOT?: kelurahanWhereInput | kelurahanWhereInput[]
    nama_kelurahan?: StringFilter<"kelurahan"> | string
  }, "id_kelurahan">

  export type kelurahanOrderByWithAggregationInput = {
    id_kelurahan?: SortOrder
    nama_kelurahan?: SortOrder
    _count?: kelurahanCountOrderByAggregateInput
    _max?: kelurahanMaxOrderByAggregateInput
    _min?: kelurahanMinOrderByAggregateInput
  }

  export type kelurahanScalarWhereWithAggregatesInput = {
    AND?: kelurahanScalarWhereWithAggregatesInput | kelurahanScalarWhereWithAggregatesInput[]
    OR?: kelurahanScalarWhereWithAggregatesInput[]
    NOT?: kelurahanScalarWhereWithAggregatesInput | kelurahanScalarWhereWithAggregatesInput[]
    id_kelurahan?: StringWithAggregatesFilter<"kelurahan"> | string
    nama_kelurahan?: StringWithAggregatesFilter<"kelurahan"> | string
  }

  export type mahasiswaWhereInput = {
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    nim?: StringFilter<"mahasiswa"> | string
    email?: StringFilter<"mahasiswa"> | string
    nama?: StringFilter<"mahasiswa"> | string
    no_hp?: StringFilter<"mahasiswa"> | string
    alamat?: StringFilter<"mahasiswa"> | string
    foto?: StringFilter<"mahasiswa"> | string
    plain_password?: StringFilter<"mahasiswa"> | string
    password?: StringFilter<"mahasiswa"> | string
    id_tim?: IntFilter<"mahasiswa"> | number
  }

  export type mahasiswaOrderByWithRelationInput = {
    nim?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    foto?: SortOrder
    plain_password?: SortOrder
    password?: SortOrder
    id_tim?: SortOrder
  }

  export type mahasiswaWhereUniqueInput = Prisma.AtLeast<{
    nim?: string
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    email?: StringFilter<"mahasiswa"> | string
    nama?: StringFilter<"mahasiswa"> | string
    no_hp?: StringFilter<"mahasiswa"> | string
    alamat?: StringFilter<"mahasiswa"> | string
    foto?: StringFilter<"mahasiswa"> | string
    plain_password?: StringFilter<"mahasiswa"> | string
    password?: StringFilter<"mahasiswa"> | string
    id_tim?: IntFilter<"mahasiswa"> | number
  }, "nim">

  export type mahasiswaOrderByWithAggregationInput = {
    nim?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    foto?: SortOrder
    plain_password?: SortOrder
    password?: SortOrder
    id_tim?: SortOrder
    _count?: mahasiswaCountOrderByAggregateInput
    _avg?: mahasiswaAvgOrderByAggregateInput
    _max?: mahasiswaMaxOrderByAggregateInput
    _min?: mahasiswaMinOrderByAggregateInput
    _sum?: mahasiswaSumOrderByAggregateInput
  }

  export type mahasiswaScalarWhereWithAggregatesInput = {
    AND?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    OR?: mahasiswaScalarWhereWithAggregatesInput[]
    NOT?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    nim?: StringWithAggregatesFilter<"mahasiswa"> | string
    email?: StringWithAggregatesFilter<"mahasiswa"> | string
    nama?: StringWithAggregatesFilter<"mahasiswa"> | string
    no_hp?: StringWithAggregatesFilter<"mahasiswa"> | string
    alamat?: StringWithAggregatesFilter<"mahasiswa"> | string
    foto?: StringWithAggregatesFilter<"mahasiswa"> | string
    plain_password?: StringWithAggregatesFilter<"mahasiswa"> | string
    password?: StringWithAggregatesFilter<"mahasiswa"> | string
    id_tim?: IntWithAggregatesFilter<"mahasiswa"> | number
  }

  export type migrationsWhereInput = {
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    id?: BigIntFilter<"migrations"> | bigint | number
    version?: StringFilter<"migrations"> | string
    class?: StringFilter<"migrations"> | string
    group?: StringFilter<"migrations"> | string
    namespace?: StringFilter<"migrations"> | string
    time?: IntFilter<"migrations"> | number
    batch?: IntFilter<"migrations"> | number
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    class?: SortOrder
    group?: SortOrder
    namespace?: SortOrder
    time?: SortOrder
    batch?: SortOrder
  }

  export type migrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    version?: StringFilter<"migrations"> | string
    class?: StringFilter<"migrations"> | string
    group?: StringFilter<"migrations"> | string
    namespace?: StringFilter<"migrations"> | string
    time?: IntFilter<"migrations"> | number
    batch?: IntFilter<"migrations"> | number
  }, "id">

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    class?: SortOrder
    group?: SortOrder
    namespace?: SortOrder
    time?: SortOrder
    batch?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    OR?: migrationsScalarWhereWithAggregatesInput[]
    NOT?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"migrations"> | bigint | number
    version?: StringWithAggregatesFilter<"migrations"> | string
    class?: StringWithAggregatesFilter<"migrations"> | string
    group?: StringWithAggregatesFilter<"migrations"> | string
    namespace?: StringWithAggregatesFilter<"migrations"> | string
    time?: IntWithAggregatesFilter<"migrations"> | number
    batch?: IntWithAggregatesFilter<"migrations"> | number
  }

  export type posisi_pclWhereInput = {
    AND?: posisi_pclWhereInput | posisi_pclWhereInput[]
    OR?: posisi_pclWhereInput[]
    NOT?: posisi_pclWhereInput | posisi_pclWhereInput[]
    nim?: StringFilter<"posisi_pcl"> | string
    lokus?: StringNullableFilter<"posisi_pcl"> | string | null
    latitude?: FloatNullableFilter<"posisi_pcl"> | number | null
    longitude?: FloatNullableFilter<"posisi_pcl"> | number | null
    akurasi?: FloatNullableFilter<"posisi_pcl"> | number | null
    time_created?: DateTimeNullableFilter<"posisi_pcl"> | Date | string | null
  }

  export type posisi_pclOrderByWithRelationInput = {
    nim?: SortOrder
    lokus?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    akurasi?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
  }

  export type posisi_pclWhereUniqueInput = Prisma.AtLeast<{
    nim?: string
    AND?: posisi_pclWhereInput | posisi_pclWhereInput[]
    OR?: posisi_pclWhereInput[]
    NOT?: posisi_pclWhereInput | posisi_pclWhereInput[]
    lokus?: StringNullableFilter<"posisi_pcl"> | string | null
    latitude?: FloatNullableFilter<"posisi_pcl"> | number | null
    longitude?: FloatNullableFilter<"posisi_pcl"> | number | null
    akurasi?: FloatNullableFilter<"posisi_pcl"> | number | null
    time_created?: DateTimeNullableFilter<"posisi_pcl"> | Date | string | null
  }, "nim">

  export type posisi_pclOrderByWithAggregationInput = {
    nim?: SortOrder
    lokus?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    akurasi?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    _count?: posisi_pclCountOrderByAggregateInput
    _avg?: posisi_pclAvgOrderByAggregateInput
    _max?: posisi_pclMaxOrderByAggregateInput
    _min?: posisi_pclMinOrderByAggregateInput
    _sum?: posisi_pclSumOrderByAggregateInput
  }

  export type posisi_pclScalarWhereWithAggregatesInput = {
    AND?: posisi_pclScalarWhereWithAggregatesInput | posisi_pclScalarWhereWithAggregatesInput[]
    OR?: posisi_pclScalarWhereWithAggregatesInput[]
    NOT?: posisi_pclScalarWhereWithAggregatesInput | posisi_pclScalarWhereWithAggregatesInput[]
    nim?: StringWithAggregatesFilter<"posisi_pcl"> | string
    lokus?: StringNullableWithAggregatesFilter<"posisi_pcl"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"posisi_pcl"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"posisi_pcl"> | number | null
    akurasi?: FloatNullableWithAggregatesFilter<"posisi_pcl"> | number | null
    time_created?: DateTimeNullableWithAggregatesFilter<"posisi_pcl"> | Date | string | null
  }

  export type riwayatposisipclWhereInput = {
    AND?: riwayatposisipclWhereInput | riwayatposisipclWhereInput[]
    OR?: riwayatposisipclWhereInput[]
    NOT?: riwayatposisipclWhereInput | riwayatposisipclWhereInput[]
    id?: IntFilter<"riwayatposisipcl"> | number
    nim?: StringFilter<"riwayatposisipcl"> | string
    latitude?: FloatFilter<"riwayatposisipcl"> | number
    longitude?: FloatFilter<"riwayatposisipcl"> | number
    akurasi?: FloatFilter<"riwayatposisipcl"> | number
    time?: DateTimeFilter<"riwayatposisipcl"> | Date | string
  }

  export type riwayatposisipclOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
    time?: SortOrder
  }

  export type riwayatposisipclWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: riwayatposisipclWhereInput | riwayatposisipclWhereInput[]
    OR?: riwayatposisipclWhereInput[]
    NOT?: riwayatposisipclWhereInput | riwayatposisipclWhereInput[]
    nim?: StringFilter<"riwayatposisipcl"> | string
    latitude?: FloatFilter<"riwayatposisipcl"> | number
    longitude?: FloatFilter<"riwayatposisipcl"> | number
    akurasi?: FloatFilter<"riwayatposisipcl"> | number
    time?: DateTimeFilter<"riwayatposisipcl"> | Date | string
  }, "id">

  export type riwayatposisipclOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
    time?: SortOrder
    _count?: riwayatposisipclCountOrderByAggregateInput
    _avg?: riwayatposisipclAvgOrderByAggregateInput
    _max?: riwayatposisipclMaxOrderByAggregateInput
    _min?: riwayatposisipclMinOrderByAggregateInput
    _sum?: riwayatposisipclSumOrderByAggregateInput
  }

  export type riwayatposisipclScalarWhereWithAggregatesInput = {
    AND?: riwayatposisipclScalarWhereWithAggregatesInput | riwayatposisipclScalarWhereWithAggregatesInput[]
    OR?: riwayatposisipclScalarWhereWithAggregatesInput[]
    NOT?: riwayatposisipclScalarWhereWithAggregatesInput | riwayatposisipclScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"riwayatposisipcl"> | number
    nim?: StringWithAggregatesFilter<"riwayatposisipcl"> | string
    latitude?: FloatWithAggregatesFilter<"riwayatposisipcl"> | number
    longitude?: FloatWithAggregatesFilter<"riwayatposisipcl"> | number
    akurasi?: FloatWithAggregatesFilter<"riwayatposisipcl"> | number
    time?: DateTimeWithAggregatesFilter<"riwayatposisipcl"> | Date | string
  }

  export type rumahtanggaWhereInput = {
    AND?: rumahtanggaWhereInput | rumahtanggaWhereInput[]
    OR?: rumahtanggaWhereInput[]
    NOT?: rumahtanggaWhereInput | rumahtanggaWhereInput[]
    kodeRuta?: StringFilter<"rumahtangga"> | string
    no_segmen?: IntFilter<"rumahtangga"> | number
    no_bg_fisik?: IntFilter<"rumahtangga"> | number
    no_bg_sensus?: IntFilter<"rumahtangga"> | number
    no_urut_rt?: IntFilter<"rumahtangga"> | number
    nama_krt?: StringFilter<"rumahtangga"> | string
    alamat?: StringFilter<"rumahtangga"> | string
    no_bs?: StringFilter<"rumahtangga"> | string
    is_genz_ortu?: StringFilter<"rumahtangga"> | string
    jml_genz?: IntFilter<"rumahtangga"> | number
    no_urut_rt_egb?: IntFilter<"rumahtangga"> | number
    long?: FloatNullableFilter<"rumahtangga"> | number | null
    lat?: FloatNullableFilter<"rumahtangga"> | number | null
    catatan?: StringFilter<"rumahtangga"> | string
  }

  export type rumahtanggaOrderByWithRelationInput = {
    kodeRuta?: SortOrder
    no_segmen?: SortOrder
    no_bg_fisik?: SortOrder
    no_bg_sensus?: SortOrder
    no_urut_rt?: SortOrder
    nama_krt?: SortOrder
    alamat?: SortOrder
    no_bs?: SortOrder
    is_genz_ortu?: SortOrder
    jml_genz?: SortOrder
    no_urut_rt_egb?: SortOrder
    long?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    catatan?: SortOrder
  }

  export type rumahtanggaWhereUniqueInput = Prisma.AtLeast<{
    kodeRuta?: string
    AND?: rumahtanggaWhereInput | rumahtanggaWhereInput[]
    OR?: rumahtanggaWhereInput[]
    NOT?: rumahtanggaWhereInput | rumahtanggaWhereInput[]
    no_segmen?: IntFilter<"rumahtangga"> | number
    no_bg_fisik?: IntFilter<"rumahtangga"> | number
    no_bg_sensus?: IntFilter<"rumahtangga"> | number
    no_urut_rt?: IntFilter<"rumahtangga"> | number
    nama_krt?: StringFilter<"rumahtangga"> | string
    alamat?: StringFilter<"rumahtangga"> | string
    no_bs?: StringFilter<"rumahtangga"> | string
    is_genz_ortu?: StringFilter<"rumahtangga"> | string
    jml_genz?: IntFilter<"rumahtangga"> | number
    no_urut_rt_egb?: IntFilter<"rumahtangga"> | number
    long?: FloatNullableFilter<"rumahtangga"> | number | null
    lat?: FloatNullableFilter<"rumahtangga"> | number | null
    catatan?: StringFilter<"rumahtangga"> | string
  }, "kodeRuta">

  export type rumahtanggaOrderByWithAggregationInput = {
    kodeRuta?: SortOrder
    no_segmen?: SortOrder
    no_bg_fisik?: SortOrder
    no_bg_sensus?: SortOrder
    no_urut_rt?: SortOrder
    nama_krt?: SortOrder
    alamat?: SortOrder
    no_bs?: SortOrder
    is_genz_ortu?: SortOrder
    jml_genz?: SortOrder
    no_urut_rt_egb?: SortOrder
    long?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    catatan?: SortOrder
    _count?: rumahtanggaCountOrderByAggregateInput
    _avg?: rumahtanggaAvgOrderByAggregateInput
    _max?: rumahtanggaMaxOrderByAggregateInput
    _min?: rumahtanggaMinOrderByAggregateInput
    _sum?: rumahtanggaSumOrderByAggregateInput
  }

  export type rumahtanggaScalarWhereWithAggregatesInput = {
    AND?: rumahtanggaScalarWhereWithAggregatesInput | rumahtanggaScalarWhereWithAggregatesInput[]
    OR?: rumahtanggaScalarWhereWithAggregatesInput[]
    NOT?: rumahtanggaScalarWhereWithAggregatesInput | rumahtanggaScalarWhereWithAggregatesInput[]
    kodeRuta?: StringWithAggregatesFilter<"rumahtangga"> | string
    no_segmen?: IntWithAggregatesFilter<"rumahtangga"> | number
    no_bg_fisik?: IntWithAggregatesFilter<"rumahtangga"> | number
    no_bg_sensus?: IntWithAggregatesFilter<"rumahtangga"> | number
    no_urut_rt?: IntWithAggregatesFilter<"rumahtangga"> | number
    nama_krt?: StringWithAggregatesFilter<"rumahtangga"> | string
    alamat?: StringWithAggregatesFilter<"rumahtangga"> | string
    no_bs?: StringWithAggregatesFilter<"rumahtangga"> | string
    is_genz_ortu?: StringWithAggregatesFilter<"rumahtangga"> | string
    jml_genz?: IntWithAggregatesFilter<"rumahtangga"> | number
    no_urut_rt_egb?: IntWithAggregatesFilter<"rumahtangga"> | number
    long?: FloatNullableWithAggregatesFilter<"rumahtangga"> | number | null
    lat?: FloatNullableWithAggregatesFilter<"rumahtangga"> | number | null
    catatan?: StringWithAggregatesFilter<"rumahtangga"> | string
  }

  export type timpencacahWhereInput = {
    AND?: timpencacahWhereInput | timpencacahWhereInput[]
    OR?: timpencacahWhereInput[]
    NOT?: timpencacahWhereInput | timpencacahWhereInput[]
    id_tim?: IntFilter<"timpencacah"> | number
    nama_tim?: StringFilter<"timpencacah"> | string
    nim_pml?: StringFilter<"timpencacah"> | string
  }

  export type timpencacahOrderByWithRelationInput = {
    id_tim?: SortOrder
    nama_tim?: SortOrder
    nim_pml?: SortOrder
  }

  export type timpencacahWhereUniqueInput = Prisma.AtLeast<{
    nim_pml?: string
    AND?: timpencacahWhereInput | timpencacahWhereInput[]
    OR?: timpencacahWhereInput[]
    NOT?: timpencacahWhereInput | timpencacahWhereInput[]
    id_tim?: IntFilter<"timpencacah"> | number
    nama_tim?: StringFilter<"timpencacah"> | string
  }, "nim_pml">

  export type timpencacahOrderByWithAggregationInput = {
    id_tim?: SortOrder
    nama_tim?: SortOrder
    nim_pml?: SortOrder
    _count?: timpencacahCountOrderByAggregateInput
    _avg?: timpencacahAvgOrderByAggregateInput
    _max?: timpencacahMaxOrderByAggregateInput
    _min?: timpencacahMinOrderByAggregateInput
    _sum?: timpencacahSumOrderByAggregateInput
  }

  export type timpencacahScalarWhereWithAggregatesInput = {
    AND?: timpencacahScalarWhereWithAggregatesInput | timpencacahScalarWhereWithAggregatesInput[]
    OR?: timpencacahScalarWhereWithAggregatesInput[]
    NOT?: timpencacahScalarWhereWithAggregatesInput | timpencacahScalarWhereWithAggregatesInput[]
    id_tim?: IntWithAggregatesFilter<"timpencacah"> | number
    nama_tim?: StringWithAggregatesFilter<"timpencacah"> | string
    nim_pml?: StringWithAggregatesFilter<"timpencacah"> | string
  }

  export type token_ambil_sampelWhereInput = {
    AND?: token_ambil_sampelWhereInput | token_ambil_sampelWhereInput[]
    OR?: token_ambil_sampelWhereInput[]
    NOT?: token_ambil_sampelWhereInput | token_ambil_sampelWhereInput[]
    riset?: IntFilter<"token_ambil_sampel"> | number
    token?: IntFilter<"token_ambil_sampel"> | number
    lokus?: StringNullableFilter<"token_ambil_sampel"> | string | null
    count?: IntFilter<"token_ambil_sampel"> | number
  }

  export type token_ambil_sampelOrderByWithRelationInput = {
    riset?: SortOrder
    token?: SortOrder
    lokus?: SortOrderInput | SortOrder
    count?: SortOrder
  }

  export type token_ambil_sampelWhereUniqueInput = Prisma.AtLeast<{
    riset?: number
    AND?: token_ambil_sampelWhereInput | token_ambil_sampelWhereInput[]
    OR?: token_ambil_sampelWhereInput[]
    NOT?: token_ambil_sampelWhereInput | token_ambil_sampelWhereInput[]
    token?: IntFilter<"token_ambil_sampel"> | number
    lokus?: StringNullableFilter<"token_ambil_sampel"> | string | null
    count?: IntFilter<"token_ambil_sampel"> | number
  }, "riset">

  export type token_ambil_sampelOrderByWithAggregationInput = {
    riset?: SortOrder
    token?: SortOrder
    lokus?: SortOrderInput | SortOrder
    count?: SortOrder
    _count?: token_ambil_sampelCountOrderByAggregateInput
    _avg?: token_ambil_sampelAvgOrderByAggregateInput
    _max?: token_ambil_sampelMaxOrderByAggregateInput
    _min?: token_ambil_sampelMinOrderByAggregateInput
    _sum?: token_ambil_sampelSumOrderByAggregateInput
  }

  export type token_ambil_sampelScalarWhereWithAggregatesInput = {
    AND?: token_ambil_sampelScalarWhereWithAggregatesInput | token_ambil_sampelScalarWhereWithAggregatesInput[]
    OR?: token_ambil_sampelScalarWhereWithAggregatesInput[]
    NOT?: token_ambil_sampelScalarWhereWithAggregatesInput | token_ambil_sampelScalarWhereWithAggregatesInput[]
    riset?: IntWithAggregatesFilter<"token_ambil_sampel"> | number
    token?: IntWithAggregatesFilter<"token_ambil_sampel"> | number
    lokus?: StringNullableWithAggregatesFilter<"token_ambil_sampel"> | string | null
    count?: IntWithAggregatesFilter<"token_ambil_sampel"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
  }

  export type bloksensusCreateInput = {
    no_bs: string
    nama_sls: string
    id_kab: string
    id_kec: string
    id_kelurahan: string
    jml_rt?: number
    jml_rt_genz?: number
    jml_genz?: number
    nim_pencacah: string
    tim_pencacah: string
    tgl_listing?: Date | string | null
    tgl_periksa?: Date | string | null
    catatan?: string | null
    status: string
  }

  export type bloksensusUncheckedCreateInput = {
    no_bs: string
    nama_sls: string
    id_kab: string
    id_kec: string
    id_kelurahan: string
    jml_rt?: number
    jml_rt_genz?: number
    jml_genz?: number
    nim_pencacah: string
    tim_pencacah: string
    tgl_listing?: Date | string | null
    tgl_periksa?: Date | string | null
    catatan?: string | null
    status: string
  }

  export type bloksensusUpdateInput = {
    no_bs?: StringFieldUpdateOperationsInput | string
    nama_sls?: StringFieldUpdateOperationsInput | string
    id_kab?: StringFieldUpdateOperationsInput | string
    id_kec?: StringFieldUpdateOperationsInput | string
    id_kelurahan?: StringFieldUpdateOperationsInput | string
    jml_rt?: IntFieldUpdateOperationsInput | number
    jml_rt_genz?: IntFieldUpdateOperationsInput | number
    jml_genz?: IntFieldUpdateOperationsInput | number
    nim_pencacah?: StringFieldUpdateOperationsInput | string
    tim_pencacah?: StringFieldUpdateOperationsInput | string
    tgl_listing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_periksa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type bloksensusUncheckedUpdateInput = {
    no_bs?: StringFieldUpdateOperationsInput | string
    nama_sls?: StringFieldUpdateOperationsInput | string
    id_kab?: StringFieldUpdateOperationsInput | string
    id_kec?: StringFieldUpdateOperationsInput | string
    id_kelurahan?: StringFieldUpdateOperationsInput | string
    jml_rt?: IntFieldUpdateOperationsInput | number
    jml_rt_genz?: IntFieldUpdateOperationsInput | number
    jml_genz?: IntFieldUpdateOperationsInput | number
    nim_pencacah?: StringFieldUpdateOperationsInput | string
    tim_pencacah?: StringFieldUpdateOperationsInput | string
    tgl_listing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_periksa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type bloksensusCreateManyInput = {
    no_bs: string
    nama_sls: string
    id_kab: string
    id_kec: string
    id_kelurahan: string
    jml_rt?: number
    jml_rt_genz?: number
    jml_genz?: number
    nim_pencacah: string
    tim_pencacah: string
    tgl_listing?: Date | string | null
    tgl_periksa?: Date | string | null
    catatan?: string | null
    status: string
  }

  export type bloksensusUpdateManyMutationInput = {
    no_bs?: StringFieldUpdateOperationsInput | string
    nama_sls?: StringFieldUpdateOperationsInput | string
    id_kab?: StringFieldUpdateOperationsInput | string
    id_kec?: StringFieldUpdateOperationsInput | string
    id_kelurahan?: StringFieldUpdateOperationsInput | string
    jml_rt?: IntFieldUpdateOperationsInput | number
    jml_rt_genz?: IntFieldUpdateOperationsInput | number
    jml_genz?: IntFieldUpdateOperationsInput | number
    nim_pencacah?: StringFieldUpdateOperationsInput | string
    tim_pencacah?: StringFieldUpdateOperationsInput | string
    tgl_listing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_periksa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type bloksensusUncheckedUpdateManyInput = {
    no_bs?: StringFieldUpdateOperationsInput | string
    nama_sls?: StringFieldUpdateOperationsInput | string
    id_kab?: StringFieldUpdateOperationsInput | string
    id_kec?: StringFieldUpdateOperationsInput | string
    id_kelurahan?: StringFieldUpdateOperationsInput | string
    jml_rt?: IntFieldUpdateOperationsInput | number
    jml_rt_genz?: IntFieldUpdateOperationsInput | number
    jml_genz?: IntFieldUpdateOperationsInput | number
    nim_pencacah?: StringFieldUpdateOperationsInput | string
    tim_pencacah?: StringFieldUpdateOperationsInput | string
    tgl_listing?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tgl_periksa?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type kabupatenCreateInput = {
    id_kab: string
    nama_kab: string
  }

  export type kabupatenUncheckedCreateInput = {
    id_kab: string
    nama_kab: string
  }

  export type kabupatenUpdateInput = {
    id_kab?: StringFieldUpdateOperationsInput | string
    nama_kab?: StringFieldUpdateOperationsInput | string
  }

  export type kabupatenUncheckedUpdateInput = {
    id_kab?: StringFieldUpdateOperationsInput | string
    nama_kab?: StringFieldUpdateOperationsInput | string
  }

  export type kabupatenCreateManyInput = {
    id_kab: string
    nama_kab: string
  }

  export type kabupatenUpdateManyMutationInput = {
    id_kab?: StringFieldUpdateOperationsInput | string
    nama_kab?: StringFieldUpdateOperationsInput | string
  }

  export type kabupatenUncheckedUpdateManyInput = {
    id_kab?: StringFieldUpdateOperationsInput | string
    nama_kab?: StringFieldUpdateOperationsInput | string
  }

  export type kecamatanCreateInput = {
    id_kec: string
    nama_kec: string
  }

  export type kecamatanUncheckedCreateInput = {
    id_kec: string
    nama_kec: string
  }

  export type kecamatanUpdateInput = {
    id_kec?: StringFieldUpdateOperationsInput | string
    nama_kec?: StringFieldUpdateOperationsInput | string
  }

  export type kecamatanUncheckedUpdateInput = {
    id_kec?: StringFieldUpdateOperationsInput | string
    nama_kec?: StringFieldUpdateOperationsInput | string
  }

  export type kecamatanCreateManyInput = {
    id_kec: string
    nama_kec: string
  }

  export type kecamatanUpdateManyMutationInput = {
    id_kec?: StringFieldUpdateOperationsInput | string
    nama_kec?: StringFieldUpdateOperationsInput | string
  }

  export type kecamatanUncheckedUpdateManyInput = {
    id_kec?: StringFieldUpdateOperationsInput | string
    nama_kec?: StringFieldUpdateOperationsInput | string
  }

  export type kelurahanCreateInput = {
    id_kelurahan: string
    nama_kelurahan: string
  }

  export type kelurahanUncheckedCreateInput = {
    id_kelurahan: string
    nama_kelurahan: string
  }

  export type kelurahanUpdateInput = {
    id_kelurahan?: StringFieldUpdateOperationsInput | string
    nama_kelurahan?: StringFieldUpdateOperationsInput | string
  }

  export type kelurahanUncheckedUpdateInput = {
    id_kelurahan?: StringFieldUpdateOperationsInput | string
    nama_kelurahan?: StringFieldUpdateOperationsInput | string
  }

  export type kelurahanCreateManyInput = {
    id_kelurahan: string
    nama_kelurahan: string
  }

  export type kelurahanUpdateManyMutationInput = {
    id_kelurahan?: StringFieldUpdateOperationsInput | string
    nama_kelurahan?: StringFieldUpdateOperationsInput | string
  }

  export type kelurahanUncheckedUpdateManyInput = {
    id_kelurahan?: StringFieldUpdateOperationsInput | string
    nama_kelurahan?: StringFieldUpdateOperationsInput | string
  }

  export type mahasiswaCreateInput = {
    nim: string
    email: string
    nama: string
    no_hp: string
    alamat: string
    foto: string
    plain_password: string
    password: string
    id_tim: number
  }

  export type mahasiswaUncheckedCreateInput = {
    nim: string
    email: string
    nama: string
    no_hp: string
    alamat: string
    foto: string
    plain_password: string
    password: string
    id_tim: number
  }

  export type mahasiswaUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    plain_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    id_tim?: IntFieldUpdateOperationsInput | number
  }

  export type mahasiswaUncheckedUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    plain_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    id_tim?: IntFieldUpdateOperationsInput | number
  }

  export type mahasiswaCreateManyInput = {
    nim: string
    email: string
    nama: string
    no_hp: string
    alamat: string
    foto: string
    plain_password: string
    password: string
    id_tim: number
  }

  export type mahasiswaUpdateManyMutationInput = {
    nim?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    plain_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    id_tim?: IntFieldUpdateOperationsInput | number
  }

  export type mahasiswaUncheckedUpdateManyInput = {
    nim?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    plain_password?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    id_tim?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateInput = {
    id?: bigint | number
    version: string
    class: string
    group: string
    namespace: string
    time: number
    batch: number
  }

  export type migrationsUncheckedCreateInput = {
    id?: bigint | number
    version: string
    class: string
    group: string
    namespace: string
    time: number
    batch: number
  }

  export type migrationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    version?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    version?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateManyInput = {
    id?: bigint | number
    version: string
    class: string
    group: string
    namespace: string
    time: number
    batch: number
  }

  export type migrationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    version?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    version?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    namespace?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type posisi_pclCreateInput = {
    nim: string
    lokus?: string | null
    latitude?: number | null
    longitude?: number | null
    akurasi?: number | null
    time_created?: Date | string | null
  }

  export type posisi_pclUncheckedCreateInput = {
    nim: string
    lokus?: string | null
    latitude?: number | null
    longitude?: number | null
    akurasi?: number | null
    time_created?: Date | string | null
  }

  export type posisi_pclUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    lokus?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    akurasi?: NullableFloatFieldUpdateOperationsInput | number | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type posisi_pclUncheckedUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    lokus?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    akurasi?: NullableFloatFieldUpdateOperationsInput | number | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type posisi_pclCreateManyInput = {
    nim: string
    lokus?: string | null
    latitude?: number | null
    longitude?: number | null
    akurasi?: number | null
    time_created?: Date | string | null
  }

  export type posisi_pclUpdateManyMutationInput = {
    nim?: StringFieldUpdateOperationsInput | string
    lokus?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    akurasi?: NullableFloatFieldUpdateOperationsInput | number | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type posisi_pclUncheckedUpdateManyInput = {
    nim?: StringFieldUpdateOperationsInput | string
    lokus?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    akurasi?: NullableFloatFieldUpdateOperationsInput | number | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type riwayatposisipclCreateInput = {
    nim: string
    latitude: number
    longitude: number
    akurasi: number
    time?: Date | string
  }

  export type riwayatposisipclUncheckedCreateInput = {
    id?: number
    nim: string
    latitude: number
    longitude: number
    akurasi: number
    time?: Date | string
  }

  export type riwayatposisipclUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    akurasi?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type riwayatposisipclUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    akurasi?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type riwayatposisipclCreateManyInput = {
    id?: number
    nim: string
    latitude: number
    longitude: number
    akurasi: number
    time?: Date | string
  }

  export type riwayatposisipclUpdateManyMutationInput = {
    nim?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    akurasi?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type riwayatposisipclUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    akurasi?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rumahtanggaCreateInput = {
    kodeRuta: string
    no_segmen: number
    no_bg_fisik: number
    no_bg_sensus: number
    no_urut_rt: number
    nama_krt: string
    alamat: string
    no_bs: string
    is_genz_ortu: string
    jml_genz: number
    no_urut_rt_egb: number
    long?: number | null
    lat?: number | null
    catatan: string
  }

  export type rumahtanggaUncheckedCreateInput = {
    kodeRuta: string
    no_segmen: number
    no_bg_fisik: number
    no_bg_sensus: number
    no_urut_rt: number
    nama_krt: string
    alamat: string
    no_bs: string
    is_genz_ortu: string
    jml_genz: number
    no_urut_rt_egb: number
    long?: number | null
    lat?: number | null
    catatan: string
  }

  export type rumahtanggaUpdateInput = {
    kodeRuta?: StringFieldUpdateOperationsInput | string
    no_segmen?: IntFieldUpdateOperationsInput | number
    no_bg_fisik?: IntFieldUpdateOperationsInput | number
    no_bg_sensus?: IntFieldUpdateOperationsInput | number
    no_urut_rt?: IntFieldUpdateOperationsInput | number
    nama_krt?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_bs?: StringFieldUpdateOperationsInput | string
    is_genz_ortu?: StringFieldUpdateOperationsInput | string
    jml_genz?: IntFieldUpdateOperationsInput | number
    no_urut_rt_egb?: IntFieldUpdateOperationsInput | number
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    catatan?: StringFieldUpdateOperationsInput | string
  }

  export type rumahtanggaUncheckedUpdateInput = {
    kodeRuta?: StringFieldUpdateOperationsInput | string
    no_segmen?: IntFieldUpdateOperationsInput | number
    no_bg_fisik?: IntFieldUpdateOperationsInput | number
    no_bg_sensus?: IntFieldUpdateOperationsInput | number
    no_urut_rt?: IntFieldUpdateOperationsInput | number
    nama_krt?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_bs?: StringFieldUpdateOperationsInput | string
    is_genz_ortu?: StringFieldUpdateOperationsInput | string
    jml_genz?: IntFieldUpdateOperationsInput | number
    no_urut_rt_egb?: IntFieldUpdateOperationsInput | number
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    catatan?: StringFieldUpdateOperationsInput | string
  }

  export type rumahtanggaCreateManyInput = {
    kodeRuta: string
    no_segmen: number
    no_bg_fisik: number
    no_bg_sensus: number
    no_urut_rt: number
    nama_krt: string
    alamat: string
    no_bs: string
    is_genz_ortu: string
    jml_genz: number
    no_urut_rt_egb: number
    long?: number | null
    lat?: number | null
    catatan: string
  }

  export type rumahtanggaUpdateManyMutationInput = {
    kodeRuta?: StringFieldUpdateOperationsInput | string
    no_segmen?: IntFieldUpdateOperationsInput | number
    no_bg_fisik?: IntFieldUpdateOperationsInput | number
    no_bg_sensus?: IntFieldUpdateOperationsInput | number
    no_urut_rt?: IntFieldUpdateOperationsInput | number
    nama_krt?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_bs?: StringFieldUpdateOperationsInput | string
    is_genz_ortu?: StringFieldUpdateOperationsInput | string
    jml_genz?: IntFieldUpdateOperationsInput | number
    no_urut_rt_egb?: IntFieldUpdateOperationsInput | number
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    catatan?: StringFieldUpdateOperationsInput | string
  }

  export type rumahtanggaUncheckedUpdateManyInput = {
    kodeRuta?: StringFieldUpdateOperationsInput | string
    no_segmen?: IntFieldUpdateOperationsInput | number
    no_bg_fisik?: IntFieldUpdateOperationsInput | number
    no_bg_sensus?: IntFieldUpdateOperationsInput | number
    no_urut_rt?: IntFieldUpdateOperationsInput | number
    nama_krt?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_bs?: StringFieldUpdateOperationsInput | string
    is_genz_ortu?: StringFieldUpdateOperationsInput | string
    jml_genz?: IntFieldUpdateOperationsInput | number
    no_urut_rt_egb?: IntFieldUpdateOperationsInput | number
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    catatan?: StringFieldUpdateOperationsInput | string
  }

  export type timpencacahCreateInput = {
    id_tim?: number
    nama_tim: string
    nim_pml: string
  }

  export type timpencacahUncheckedCreateInput = {
    id_tim?: number
    nama_tim: string
    nim_pml: string
  }

  export type timpencacahUpdateInput = {
    id_tim?: IntFieldUpdateOperationsInput | number
    nama_tim?: StringFieldUpdateOperationsInput | string
    nim_pml?: StringFieldUpdateOperationsInput | string
  }

  export type timpencacahUncheckedUpdateInput = {
    id_tim?: IntFieldUpdateOperationsInput | number
    nama_tim?: StringFieldUpdateOperationsInput | string
    nim_pml?: StringFieldUpdateOperationsInput | string
  }

  export type timpencacahCreateManyInput = {
    id_tim?: number
    nama_tim: string
    nim_pml: string
  }

  export type timpencacahUpdateManyMutationInput = {
    id_tim?: IntFieldUpdateOperationsInput | number
    nama_tim?: StringFieldUpdateOperationsInput | string
    nim_pml?: StringFieldUpdateOperationsInput | string
  }

  export type timpencacahUncheckedUpdateManyInput = {
    id_tim?: IntFieldUpdateOperationsInput | number
    nama_tim?: StringFieldUpdateOperationsInput | string
    nim_pml?: StringFieldUpdateOperationsInput | string
  }

  export type token_ambil_sampelCreateInput = {
    riset: number
    token: number
    lokus?: string | null
    count: number
  }

  export type token_ambil_sampelUncheckedCreateInput = {
    riset: number
    token: number
    lokus?: string | null
    count: number
  }

  export type token_ambil_sampelUpdateInput = {
    riset?: IntFieldUpdateOperationsInput | number
    token?: IntFieldUpdateOperationsInput | number
    lokus?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
  }

  export type token_ambil_sampelUncheckedUpdateInput = {
    riset?: IntFieldUpdateOperationsInput | number
    token?: IntFieldUpdateOperationsInput | number
    lokus?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
  }

  export type token_ambil_sampelCreateManyInput = {
    riset: number
    token: number
    lokus?: string | null
    count: number
  }

  export type token_ambil_sampelUpdateManyMutationInput = {
    riset?: IntFieldUpdateOperationsInput | number
    token?: IntFieldUpdateOperationsInput | number
    lokus?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
  }

  export type token_ambil_sampelUncheckedUpdateManyInput = {
    riset?: IntFieldUpdateOperationsInput | number
    token?: IntFieldUpdateOperationsInput | number
    lokus?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    email: string
    password: string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bloksensusCountOrderByAggregateInput = {
    no_bs?: SortOrder
    nama_sls?: SortOrder
    id_kab?: SortOrder
    id_kec?: SortOrder
    id_kelurahan?: SortOrder
    jml_rt?: SortOrder
    jml_rt_genz?: SortOrder
    jml_genz?: SortOrder
    nim_pencacah?: SortOrder
    tim_pencacah?: SortOrder
    tgl_listing?: SortOrder
    tgl_periksa?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
  }

  export type bloksensusAvgOrderByAggregateInput = {
    jml_rt?: SortOrder
    jml_rt_genz?: SortOrder
    jml_genz?: SortOrder
  }

  export type bloksensusMaxOrderByAggregateInput = {
    no_bs?: SortOrder
    nama_sls?: SortOrder
    id_kab?: SortOrder
    id_kec?: SortOrder
    id_kelurahan?: SortOrder
    jml_rt?: SortOrder
    jml_rt_genz?: SortOrder
    jml_genz?: SortOrder
    nim_pencacah?: SortOrder
    tim_pencacah?: SortOrder
    tgl_listing?: SortOrder
    tgl_periksa?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
  }

  export type bloksensusMinOrderByAggregateInput = {
    no_bs?: SortOrder
    nama_sls?: SortOrder
    id_kab?: SortOrder
    id_kec?: SortOrder
    id_kelurahan?: SortOrder
    jml_rt?: SortOrder
    jml_rt_genz?: SortOrder
    jml_genz?: SortOrder
    nim_pencacah?: SortOrder
    tim_pencacah?: SortOrder
    tgl_listing?: SortOrder
    tgl_periksa?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
  }

  export type bloksensusSumOrderByAggregateInput = {
    jml_rt?: SortOrder
    jml_rt_genz?: SortOrder
    jml_genz?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type kabupatenCountOrderByAggregateInput = {
    id_kab?: SortOrder
    nama_kab?: SortOrder
  }

  export type kabupatenMaxOrderByAggregateInput = {
    id_kab?: SortOrder
    nama_kab?: SortOrder
  }

  export type kabupatenMinOrderByAggregateInput = {
    id_kab?: SortOrder
    nama_kab?: SortOrder
  }

  export type kecamatanCountOrderByAggregateInput = {
    id_kec?: SortOrder
    nama_kec?: SortOrder
  }

  export type kecamatanMaxOrderByAggregateInput = {
    id_kec?: SortOrder
    nama_kec?: SortOrder
  }

  export type kecamatanMinOrderByAggregateInput = {
    id_kec?: SortOrder
    nama_kec?: SortOrder
  }

  export type kelurahanCountOrderByAggregateInput = {
    id_kelurahan?: SortOrder
    nama_kelurahan?: SortOrder
  }

  export type kelurahanMaxOrderByAggregateInput = {
    id_kelurahan?: SortOrder
    nama_kelurahan?: SortOrder
  }

  export type kelurahanMinOrderByAggregateInput = {
    id_kelurahan?: SortOrder
    nama_kelurahan?: SortOrder
  }

  export type mahasiswaCountOrderByAggregateInput = {
    nim?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    foto?: SortOrder
    plain_password?: SortOrder
    password?: SortOrder
    id_tim?: SortOrder
  }

  export type mahasiswaAvgOrderByAggregateInput = {
    id_tim?: SortOrder
  }

  export type mahasiswaMaxOrderByAggregateInput = {
    nim?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    foto?: SortOrder
    plain_password?: SortOrder
    password?: SortOrder
    id_tim?: SortOrder
  }

  export type mahasiswaMinOrderByAggregateInput = {
    nim?: SortOrder
    email?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    foto?: SortOrder
    plain_password?: SortOrder
    password?: SortOrder
    id_tim?: SortOrder
  }

  export type mahasiswaSumOrderByAggregateInput = {
    id_tim?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    class?: SortOrder
    group?: SortOrder
    namespace?: SortOrder
    time?: SortOrder
    batch?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    class?: SortOrder
    group?: SortOrder
    namespace?: SortOrder
    time?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    class?: SortOrder
    group?: SortOrder
    namespace?: SortOrder
    time?: SortOrder
    batch?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    batch?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type posisi_pclCountOrderByAggregateInput = {
    nim?: SortOrder
    lokus?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
    time_created?: SortOrder
  }

  export type posisi_pclAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
  }

  export type posisi_pclMaxOrderByAggregateInput = {
    nim?: SortOrder
    lokus?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
    time_created?: SortOrder
  }

  export type posisi_pclMinOrderByAggregateInput = {
    nim?: SortOrder
    lokus?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
    time_created?: SortOrder
  }

  export type posisi_pclSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type riwayatposisipclCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
    time?: SortOrder
  }

  export type riwayatposisipclAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
  }

  export type riwayatposisipclMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
    time?: SortOrder
  }

  export type riwayatposisipclMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
    time?: SortOrder
  }

  export type riwayatposisipclSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    akurasi?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type rumahtanggaCountOrderByAggregateInput = {
    kodeRuta?: SortOrder
    no_segmen?: SortOrder
    no_bg_fisik?: SortOrder
    no_bg_sensus?: SortOrder
    no_urut_rt?: SortOrder
    nama_krt?: SortOrder
    alamat?: SortOrder
    no_bs?: SortOrder
    is_genz_ortu?: SortOrder
    jml_genz?: SortOrder
    no_urut_rt_egb?: SortOrder
    long?: SortOrder
    lat?: SortOrder
    catatan?: SortOrder
  }

  export type rumahtanggaAvgOrderByAggregateInput = {
    no_segmen?: SortOrder
    no_bg_fisik?: SortOrder
    no_bg_sensus?: SortOrder
    no_urut_rt?: SortOrder
    jml_genz?: SortOrder
    no_urut_rt_egb?: SortOrder
    long?: SortOrder
    lat?: SortOrder
  }

  export type rumahtanggaMaxOrderByAggregateInput = {
    kodeRuta?: SortOrder
    no_segmen?: SortOrder
    no_bg_fisik?: SortOrder
    no_bg_sensus?: SortOrder
    no_urut_rt?: SortOrder
    nama_krt?: SortOrder
    alamat?: SortOrder
    no_bs?: SortOrder
    is_genz_ortu?: SortOrder
    jml_genz?: SortOrder
    no_urut_rt_egb?: SortOrder
    long?: SortOrder
    lat?: SortOrder
    catatan?: SortOrder
  }

  export type rumahtanggaMinOrderByAggregateInput = {
    kodeRuta?: SortOrder
    no_segmen?: SortOrder
    no_bg_fisik?: SortOrder
    no_bg_sensus?: SortOrder
    no_urut_rt?: SortOrder
    nama_krt?: SortOrder
    alamat?: SortOrder
    no_bs?: SortOrder
    is_genz_ortu?: SortOrder
    jml_genz?: SortOrder
    no_urut_rt_egb?: SortOrder
    long?: SortOrder
    lat?: SortOrder
    catatan?: SortOrder
  }

  export type rumahtanggaSumOrderByAggregateInput = {
    no_segmen?: SortOrder
    no_bg_fisik?: SortOrder
    no_bg_sensus?: SortOrder
    no_urut_rt?: SortOrder
    jml_genz?: SortOrder
    no_urut_rt_egb?: SortOrder
    long?: SortOrder
    lat?: SortOrder
  }

  export type timpencacahCountOrderByAggregateInput = {
    id_tim?: SortOrder
    nama_tim?: SortOrder
    nim_pml?: SortOrder
  }

  export type timpencacahAvgOrderByAggregateInput = {
    id_tim?: SortOrder
  }

  export type timpencacahMaxOrderByAggregateInput = {
    id_tim?: SortOrder
    nama_tim?: SortOrder
    nim_pml?: SortOrder
  }

  export type timpencacahMinOrderByAggregateInput = {
    id_tim?: SortOrder
    nama_tim?: SortOrder
    nim_pml?: SortOrder
  }

  export type timpencacahSumOrderByAggregateInput = {
    id_tim?: SortOrder
  }

  export type token_ambil_sampelCountOrderByAggregateInput = {
    riset?: SortOrder
    token?: SortOrder
    lokus?: SortOrder
    count?: SortOrder
  }

  export type token_ambil_sampelAvgOrderByAggregateInput = {
    riset?: SortOrder
    token?: SortOrder
    count?: SortOrder
  }

  export type token_ambil_sampelMaxOrderByAggregateInput = {
    riset?: SortOrder
    token?: SortOrder
    lokus?: SortOrder
    count?: SortOrder
  }

  export type token_ambil_sampelMinOrderByAggregateInput = {
    riset?: SortOrder
    token?: SortOrder
    lokus?: SortOrder
    count?: SortOrder
  }

  export type token_ambil_sampelSumOrderByAggregateInput = {
    riset?: SortOrder
    token?: SortOrder
    count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use bloksensusDefaultArgs instead
     */
    export type bloksensusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bloksensusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use kabupatenDefaultArgs instead
     */
    export type kabupatenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = kabupatenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use kecamatanDefaultArgs instead
     */
    export type kecamatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = kecamatanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use kelurahanDefaultArgs instead
     */
    export type kelurahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = kelurahanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mahasiswaDefaultArgs instead
     */
    export type mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mahasiswaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use migrationsDefaultArgs instead
     */
    export type migrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = migrationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use posisi_pclDefaultArgs instead
     */
    export type posisi_pclArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = posisi_pclDefaultArgs<ExtArgs>
    /**
     * @deprecated Use riwayatposisipclDefaultArgs instead
     */
    export type riwayatposisipclArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = riwayatposisipclDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rumahtanggaDefaultArgs instead
     */
    export type rumahtanggaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rumahtanggaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use timpencacahDefaultArgs instead
     */
    export type timpencacahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = timpencacahDefaultArgs<ExtArgs>
    /**
     * @deprecated Use token_ambil_sampelDefaultArgs instead
     */
    export type token_ambil_sampelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = token_ambil_sampelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

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