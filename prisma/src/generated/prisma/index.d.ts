
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bookings
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model chatbots
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type chatbots = $Result.DefaultSelection<Prisma.$chatbotsPayload>
/**
 * Model documents
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type documents = $Result.DefaultSelection<Prisma.$documentsPayload>
/**
 * Model lawyer_applications
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type lawyer_applications = $Result.DefaultSelection<Prisma.$lawyer_applicationsPayload>
/**
 * Model lawyer_profiles
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type lawyer_profiles = $Result.DefaultSelection<Prisma.$lawyer_profilesPayload>
/**
 * Model passwords
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type passwords = $Result.DefaultSelection<Prisma.$passwordsPayload>
/**
 * Model payments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model users
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model pending_callbacks
 * 
 */
export type pending_callbacks = $Result.DefaultSelection<Prisma.$pending_callbacksPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CLIENT: 'CLIENT',
  LAWYER: 'LAWYER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const booking_status: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type booking_status = (typeof booking_status)[keyof typeof booking_status]


export const payment_status: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type payment_status = (typeof payment_status)[keyof typeof payment_status]


export const payment_transaction_status: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type payment_transaction_status = (typeof payment_transaction_status)[keyof typeof payment_transaction_status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type booking_status = $Enums.booking_status

export const booking_status: typeof $Enums.booking_status

export type payment_status = $Enums.payment_status

export const payment_status: typeof $Enums.payment_status

export type payment_transaction_status = $Enums.payment_transaction_status

export const payment_transaction_status: typeof $Enums.payment_transaction_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Bookings
 * const bookings = await prisma.bookings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Bookings
   * const bookings = await prisma.bookings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatbots`: Exposes CRUD operations for the **chatbots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatbots
    * const chatbots = await prisma.chatbots.findMany()
    * ```
    */
  get chatbots(): Prisma.chatbotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.documentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyer_applications`: Exposes CRUD operations for the **lawyer_applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lawyer_applications
    * const lawyer_applications = await prisma.lawyer_applications.findMany()
    * ```
    */
  get lawyer_applications(): Prisma.lawyer_applicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyer_profiles`: Exposes CRUD operations for the **lawyer_profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lawyer_profiles
    * const lawyer_profiles = await prisma.lawyer_profiles.findMany()
    * ```
    */
  get lawyer_profiles(): Prisma.lawyer_profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwords`: Exposes CRUD operations for the **passwords** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passwords
    * const passwords = await prisma.passwords.findMany()
    * ```
    */
  get passwords(): Prisma.passwordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pending_callbacks`: Exposes CRUD operations for the **pending_callbacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pending_callbacks
    * const pending_callbacks = await prisma.pending_callbacks.findMany()
    * ```
    */
  get pending_callbacks(): Prisma.pending_callbacksDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    bookings: 'bookings',
    chatbots: 'chatbots',
    documents: 'documents',
    lawyer_applications: 'lawyer_applications',
    lawyer_profiles: 'lawyer_profiles',
    passwords: 'passwords',
    payments: 'payments',
    users: 'users',
    pending_callbacks: 'pending_callbacks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bookings" | "chatbots" | "documents" | "lawyer_applications" | "lawyer_profiles" | "passwords" | "payments" | "users" | "pending_callbacks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      chatbots: {
        payload: Prisma.$chatbotsPayload<ExtArgs>
        fields: Prisma.chatbotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatbotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatbotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload>
          }
          findFirst: {
            args: Prisma.chatbotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatbotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload>
          }
          findMany: {
            args: Prisma.chatbotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload>[]
          }
          create: {
            args: Prisma.chatbotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload>
          }
          createMany: {
            args: Prisma.chatbotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatbotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload>[]
          }
          delete: {
            args: Prisma.chatbotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload>
          }
          update: {
            args: Prisma.chatbotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload>
          }
          deleteMany: {
            args: Prisma.chatbotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatbotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatbotsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload>[]
          }
          upsert: {
            args: Prisma.chatbotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatbotsPayload>
          }
          aggregate: {
            args: Prisma.ChatbotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatbots>
          }
          groupBy: {
            args: Prisma.chatbotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatbotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatbotsCountArgs<ExtArgs>
            result: $Utils.Optional<ChatbotsCountAggregateOutputType> | number
          }
        }
      }
      documents: {
        payload: Prisma.$documentsPayload<ExtArgs>
        fields: Prisma.documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findFirst: {
            args: Prisma.documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findMany: {
            args: Prisma.documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          create: {
            args: Prisma.documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          createMany: {
            args: Prisma.documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.documentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          delete: {
            args: Prisma.documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          update: {
            args: Prisma.documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          deleteMany: {
            args: Prisma.documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.documentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          upsert: {
            args: Prisma.documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      lawyer_applications: {
        payload: Prisma.$lawyer_applicationsPayload<ExtArgs>
        fields: Prisma.lawyer_applicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lawyer_applicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lawyer_applicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload>
          }
          findFirst: {
            args: Prisma.lawyer_applicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lawyer_applicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload>
          }
          findMany: {
            args: Prisma.lawyer_applicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload>[]
          }
          create: {
            args: Prisma.lawyer_applicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload>
          }
          createMany: {
            args: Prisma.lawyer_applicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lawyer_applicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload>[]
          }
          delete: {
            args: Prisma.lawyer_applicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload>
          }
          update: {
            args: Prisma.lawyer_applicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload>
          }
          deleteMany: {
            args: Prisma.lawyer_applicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lawyer_applicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lawyer_applicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload>[]
          }
          upsert: {
            args: Prisma.lawyer_applicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_applicationsPayload>
          }
          aggregate: {
            args: Prisma.Lawyer_applicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyer_applications>
          }
          groupBy: {
            args: Prisma.lawyer_applicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lawyer_applicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.lawyer_applicationsCountArgs<ExtArgs>
            result: $Utils.Optional<Lawyer_applicationsCountAggregateOutputType> | number
          }
        }
      }
      lawyer_profiles: {
        payload: Prisma.$lawyer_profilesPayload<ExtArgs>
        fields: Prisma.lawyer_profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lawyer_profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lawyer_profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload>
          }
          findFirst: {
            args: Prisma.lawyer_profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lawyer_profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload>
          }
          findMany: {
            args: Prisma.lawyer_profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload>[]
          }
          create: {
            args: Prisma.lawyer_profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload>
          }
          createMany: {
            args: Prisma.lawyer_profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lawyer_profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload>[]
          }
          delete: {
            args: Prisma.lawyer_profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload>
          }
          update: {
            args: Prisma.lawyer_profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload>
          }
          deleteMany: {
            args: Prisma.lawyer_profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lawyer_profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lawyer_profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload>[]
          }
          upsert: {
            args: Prisma.lawyer_profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lawyer_profilesPayload>
          }
          aggregate: {
            args: Prisma.Lawyer_profilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyer_profiles>
          }
          groupBy: {
            args: Prisma.lawyer_profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lawyer_profilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.lawyer_profilesCountArgs<ExtArgs>
            result: $Utils.Optional<Lawyer_profilesCountAggregateOutputType> | number
          }
        }
      }
      passwords: {
        payload: Prisma.$passwordsPayload<ExtArgs>
        fields: Prisma.passwordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.passwordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.passwordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload>
          }
          findFirst: {
            args: Prisma.passwordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.passwordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload>
          }
          findMany: {
            args: Prisma.passwordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload>[]
          }
          create: {
            args: Prisma.passwordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload>
          }
          createMany: {
            args: Prisma.passwordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.passwordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload>[]
          }
          delete: {
            args: Prisma.passwordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload>
          }
          update: {
            args: Prisma.passwordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload>
          }
          deleteMany: {
            args: Prisma.passwordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.passwordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.passwordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload>[]
          }
          upsert: {
            args: Prisma.passwordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordsPayload>
          }
          aggregate: {
            args: Prisma.PasswordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswords>
          }
          groupBy: {
            args: Prisma.passwordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.passwordsCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordsCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      pending_callbacks: {
        payload: Prisma.$pending_callbacksPayload<ExtArgs>
        fields: Prisma.pending_callbacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pending_callbacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pending_callbacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload>
          }
          findFirst: {
            args: Prisma.pending_callbacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pending_callbacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload>
          }
          findMany: {
            args: Prisma.pending_callbacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload>[]
          }
          create: {
            args: Prisma.pending_callbacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload>
          }
          createMany: {
            args: Prisma.pending_callbacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pending_callbacksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload>[]
          }
          delete: {
            args: Prisma.pending_callbacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload>
          }
          update: {
            args: Prisma.pending_callbacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload>
          }
          deleteMany: {
            args: Prisma.pending_callbacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pending_callbacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pending_callbacksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload>[]
          }
          upsert: {
            args: Prisma.pending_callbacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pending_callbacksPayload>
          }
          aggregate: {
            args: Prisma.Pending_callbacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePending_callbacks>
          }
          groupBy: {
            args: Prisma.pending_callbacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pending_callbacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.pending_callbacksCountArgs<ExtArgs>
            result: $Utils.Optional<Pending_callbacksCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    bookings?: bookingsOmit
    chatbots?: chatbotsOmit
    documents?: documentsOmit
    lawyer_applications?: lawyer_applicationsOmit
    lawyer_profiles?: lawyer_profilesOmit
    passwords?: passwordsOmit
    payments?: paymentsOmit
    users?: usersOmit
    pending_callbacks?: pending_callbacksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type BookingsCountOutputType
   */

  export type BookingsCountOutputType = {
    documents: number
  }

  export type BookingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | BookingsCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingsCountOutputType
     */
    select?: BookingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bookings_bookings_lawyer_idTousers: number
    bookings_bookings_user_idTousers: number
    chatbots: number
    documents: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings_bookings_lawyer_idTousers?: boolean | UsersCountOutputTypeCountBookings_bookings_lawyer_idTousersArgs
    bookings_bookings_user_idTousers?: boolean | UsersCountOutputTypeCountBookings_bookings_user_idTousersArgs
    chatbots?: boolean | UsersCountOutputTypeCountChatbotsArgs
    documents?: boolean | UsersCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookings_bookings_lawyer_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookings_bookings_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatbotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatbotsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsMinAggregateOutputType = {
    id: string | null
    date: Date | null
    payment_status: $Enums.payment_status | null
    notes: string | null
    booking_status: $Enums.booking_status | null
    user_id: string | null
    lawyer_id: string | null
  }

  export type BookingsMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    payment_status: $Enums.payment_status | null
    notes: string | null
    booking_status: $Enums.booking_status | null
    user_id: string | null
    lawyer_id: string | null
  }

  export type BookingsCountAggregateOutputType = {
    id: number
    date: number
    payment_status: number
    notes: number
    booking_status: number
    user_id: number
    lawyer_id: number
    _all: number
  }


  export type BookingsMinAggregateInputType = {
    id?: true
    date?: true
    payment_status?: true
    notes?: true
    booking_status?: true
    user_id?: true
    lawyer_id?: true
  }

  export type BookingsMaxAggregateInputType = {
    id?: true
    date?: true
    payment_status?: true
    notes?: true
    booking_status?: true
    user_id?: true
    lawyer_id?: true
  }

  export type BookingsCountAggregateInputType = {
    id?: true
    date?: true
    payment_status?: true
    notes?: true
    booking_status?: true
    user_id?: true
    lawyer_id?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    id: string
    date: Date
    payment_status: $Enums.payment_status
    notes: string | null
    booking_status: $Enums.booking_status
    user_id: string
    lawyer_id: string
    _count: BookingsCountAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    payment_status?: boolean
    notes?: boolean
    booking_status?: boolean
    user_id?: boolean
    lawyer_id?: boolean
    users_bookings_lawyer_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_bookings_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    documents?: boolean | bookings$documentsArgs<ExtArgs>
    payments?: boolean | bookings$paymentsArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    payment_status?: boolean
    notes?: boolean
    booking_status?: boolean
    user_id?: boolean
    lawyer_id?: boolean
    users_bookings_lawyer_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_bookings_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    payment_status?: boolean
    notes?: boolean
    booking_status?: boolean
    user_id?: boolean
    lawyer_id?: boolean
    users_bookings_lawyer_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_bookings_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    id?: boolean
    date?: boolean
    payment_status?: boolean
    notes?: boolean
    booking_status?: boolean
    user_id?: boolean
    lawyer_id?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "payment_status" | "notes" | "booking_status" | "user_id" | "lawyer_id", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_bookings_lawyer_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_bookings_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    documents?: boolean | bookings$documentsArgs<ExtArgs>
    payments?: boolean | bookings$paymentsArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_bookings_lawyer_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_bookings_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_bookings_lawyer_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_bookings_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      users_bookings_lawyer_idTousers: Prisma.$usersPayload<ExtArgs>
      users_bookings_user_idTousers: Prisma.$usersPayload<ExtArgs>
      documents: Prisma.$documentsPayload<ExtArgs>[]
      payments: Prisma.$paymentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      payment_status: $Enums.payment_status
      notes: string | null
      booking_status: $Enums.booking_status
      user_id: string
      lawyer_id: string
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingsWithIdOnly = await prisma.bookings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingsWithIdOnly = await prisma.bookings.updateManyAndReturn({
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
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
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
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_bookings_lawyer_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_bookings_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends bookings$documentsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends bookings$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$paymentsArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly id: FieldRef<"bookings", 'String'>
    readonly date: FieldRef<"bookings", 'DateTime'>
    readonly payment_status: FieldRef<"bookings", 'payment_status'>
    readonly notes: FieldRef<"bookings", 'String'>
    readonly booking_status: FieldRef<"bookings", 'booking_status'>
    readonly user_id: FieldRef<"bookings", 'String'>
    readonly lawyer_id: FieldRef<"bookings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings.documents
   */
  export type bookings$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    cursor?: documentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * bookings.payments
   */
  export type bookings$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model chatbots
   */

  export type AggregateChatbots = {
    _count: ChatbotsCountAggregateOutputType | null
    _min: ChatbotsMinAggregateOutputType | null
    _max: ChatbotsMaxAggregateOutputType | null
  }

  export type ChatbotsMinAggregateOutputType = {
    id: string | null
    category: string | null
    chat: string | null
    ai_response: string | null
    user_id: string | null
  }

  export type ChatbotsMaxAggregateOutputType = {
    id: string | null
    category: string | null
    chat: string | null
    ai_response: string | null
    user_id: string | null
  }

  export type ChatbotsCountAggregateOutputType = {
    id: number
    category: number
    chat: number
    ai_response: number
    user_id: number
    _all: number
  }


  export type ChatbotsMinAggregateInputType = {
    id?: true
    category?: true
    chat?: true
    ai_response?: true
    user_id?: true
  }

  export type ChatbotsMaxAggregateInputType = {
    id?: true
    category?: true
    chat?: true
    ai_response?: true
    user_id?: true
  }

  export type ChatbotsCountAggregateInputType = {
    id?: true
    category?: true
    chat?: true
    ai_response?: true
    user_id?: true
    _all?: true
  }

  export type ChatbotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatbots to aggregate.
     */
    where?: chatbotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatbots to fetch.
     */
    orderBy?: chatbotsOrderByWithRelationInput | chatbotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatbotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatbots
    **/
    _count?: true | ChatbotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatbotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatbotsMaxAggregateInputType
  }

  export type GetChatbotsAggregateType<T extends ChatbotsAggregateArgs> = {
        [P in keyof T & keyof AggregateChatbots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatbots[P]>
      : GetScalarType<T[P], AggregateChatbots[P]>
  }




  export type chatbotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatbotsWhereInput
    orderBy?: chatbotsOrderByWithAggregationInput | chatbotsOrderByWithAggregationInput[]
    by: ChatbotsScalarFieldEnum[] | ChatbotsScalarFieldEnum
    having?: chatbotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatbotsCountAggregateInputType | true
    _min?: ChatbotsMinAggregateInputType
    _max?: ChatbotsMaxAggregateInputType
  }

  export type ChatbotsGroupByOutputType = {
    id: string
    category: string
    chat: string
    ai_response: string
    user_id: string
    _count: ChatbotsCountAggregateOutputType | null
    _min: ChatbotsMinAggregateOutputType | null
    _max: ChatbotsMaxAggregateOutputType | null
  }

  type GetChatbotsGroupByPayload<T extends chatbotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatbotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatbotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatbotsGroupByOutputType[P]>
            : GetScalarType<T[P], ChatbotsGroupByOutputType[P]>
        }
      >
    >


  export type chatbotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    chat?: boolean
    ai_response?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatbots"]>

  export type chatbotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    chat?: boolean
    ai_response?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatbots"]>

  export type chatbotsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    chat?: boolean
    ai_response?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatbots"]>

  export type chatbotsSelectScalar = {
    id?: boolean
    category?: boolean
    chat?: boolean
    ai_response?: boolean
    user_id?: boolean
  }

  export type chatbotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "chat" | "ai_response" | "user_id", ExtArgs["result"]["chatbots"]>
  export type chatbotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type chatbotsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type chatbotsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $chatbotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatbots"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      chat: string
      ai_response: string
      user_id: string
    }, ExtArgs["result"]["chatbots"]>
    composites: {}
  }

  type chatbotsGetPayload<S extends boolean | null | undefined | chatbotsDefaultArgs> = $Result.GetResult<Prisma.$chatbotsPayload, S>

  type chatbotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatbotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatbotsCountAggregateInputType | true
    }

  export interface chatbotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatbots'], meta: { name: 'chatbots' } }
    /**
     * Find zero or one Chatbots that matches the filter.
     * @param {chatbotsFindUniqueArgs} args - Arguments to find a Chatbots
     * @example
     * // Get one Chatbots
     * const chatbots = await prisma.chatbots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatbotsFindUniqueArgs>(args: SelectSubset<T, chatbotsFindUniqueArgs<ExtArgs>>): Prisma__chatbotsClient<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatbots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatbotsFindUniqueOrThrowArgs} args - Arguments to find a Chatbots
     * @example
     * // Get one Chatbots
     * const chatbots = await prisma.chatbots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatbotsFindUniqueOrThrowArgs>(args: SelectSubset<T, chatbotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatbotsClient<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatbots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatbotsFindFirstArgs} args - Arguments to find a Chatbots
     * @example
     * // Get one Chatbots
     * const chatbots = await prisma.chatbots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatbotsFindFirstArgs>(args?: SelectSubset<T, chatbotsFindFirstArgs<ExtArgs>>): Prisma__chatbotsClient<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatbots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatbotsFindFirstOrThrowArgs} args - Arguments to find a Chatbots
     * @example
     * // Get one Chatbots
     * const chatbots = await prisma.chatbots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatbotsFindFirstOrThrowArgs>(args?: SelectSubset<T, chatbotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatbotsClient<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatbots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatbotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatbots
     * const chatbots = await prisma.chatbots.findMany()
     * 
     * // Get first 10 Chatbots
     * const chatbots = await prisma.chatbots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatbotsWithIdOnly = await prisma.chatbots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatbotsFindManyArgs>(args?: SelectSubset<T, chatbotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatbots.
     * @param {chatbotsCreateArgs} args - Arguments to create a Chatbots.
     * @example
     * // Create one Chatbots
     * const Chatbots = await prisma.chatbots.create({
     *   data: {
     *     // ... data to create a Chatbots
     *   }
     * })
     * 
     */
    create<T extends chatbotsCreateArgs>(args: SelectSubset<T, chatbotsCreateArgs<ExtArgs>>): Prisma__chatbotsClient<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatbots.
     * @param {chatbotsCreateManyArgs} args - Arguments to create many Chatbots.
     * @example
     * // Create many Chatbots
     * const chatbots = await prisma.chatbots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatbotsCreateManyArgs>(args?: SelectSubset<T, chatbotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chatbots and returns the data saved in the database.
     * @param {chatbotsCreateManyAndReturnArgs} args - Arguments to create many Chatbots.
     * @example
     * // Create many Chatbots
     * const chatbots = await prisma.chatbots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chatbots and only return the `id`
     * const chatbotsWithIdOnly = await prisma.chatbots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatbotsCreateManyAndReturnArgs>(args?: SelectSubset<T, chatbotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chatbots.
     * @param {chatbotsDeleteArgs} args - Arguments to delete one Chatbots.
     * @example
     * // Delete one Chatbots
     * const Chatbots = await prisma.chatbots.delete({
     *   where: {
     *     // ... filter to delete one Chatbots
     *   }
     * })
     * 
     */
    delete<T extends chatbotsDeleteArgs>(args: SelectSubset<T, chatbotsDeleteArgs<ExtArgs>>): Prisma__chatbotsClient<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatbots.
     * @param {chatbotsUpdateArgs} args - Arguments to update one Chatbots.
     * @example
     * // Update one Chatbots
     * const chatbots = await prisma.chatbots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatbotsUpdateArgs>(args: SelectSubset<T, chatbotsUpdateArgs<ExtArgs>>): Prisma__chatbotsClient<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatbots.
     * @param {chatbotsDeleteManyArgs} args - Arguments to filter Chatbots to delete.
     * @example
     * // Delete a few Chatbots
     * const { count } = await prisma.chatbots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatbotsDeleteManyArgs>(args?: SelectSubset<T, chatbotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatbotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatbots
     * const chatbots = await prisma.chatbots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatbotsUpdateManyArgs>(args: SelectSubset<T, chatbotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatbots and returns the data updated in the database.
     * @param {chatbotsUpdateManyAndReturnArgs} args - Arguments to update many Chatbots.
     * @example
     * // Update many Chatbots
     * const chatbots = await prisma.chatbots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chatbots and only return the `id`
     * const chatbotsWithIdOnly = await prisma.chatbots.updateManyAndReturn({
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
    updateManyAndReturn<T extends chatbotsUpdateManyAndReturnArgs>(args: SelectSubset<T, chatbotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chatbots.
     * @param {chatbotsUpsertArgs} args - Arguments to update or create a Chatbots.
     * @example
     * // Update or create a Chatbots
     * const chatbots = await prisma.chatbots.upsert({
     *   create: {
     *     // ... data to create a Chatbots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatbots we want to update
     *   }
     * })
     */
    upsert<T extends chatbotsUpsertArgs>(args: SelectSubset<T, chatbotsUpsertArgs<ExtArgs>>): Prisma__chatbotsClient<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatbotsCountArgs} args - Arguments to filter Chatbots to count.
     * @example
     * // Count the number of Chatbots
     * const count = await prisma.chatbots.count({
     *   where: {
     *     // ... the filter for the Chatbots we want to count
     *   }
     * })
    **/
    count<T extends chatbotsCountArgs>(
      args?: Subset<T, chatbotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatbotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatbotsAggregateArgs>(args: Subset<T, ChatbotsAggregateArgs>): Prisma.PrismaPromise<GetChatbotsAggregateType<T>>

    /**
     * Group by Chatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatbotsGroupByArgs} args - Group by arguments.
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
      T extends chatbotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatbotsGroupByArgs['orderBy'] }
        : { orderBy?: chatbotsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatbotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatbotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatbots model
   */
  readonly fields: chatbotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatbots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatbotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the chatbots model
   */
  interface chatbotsFieldRefs {
    readonly id: FieldRef<"chatbots", 'String'>
    readonly category: FieldRef<"chatbots", 'String'>
    readonly chat: FieldRef<"chatbots", 'String'>
    readonly ai_response: FieldRef<"chatbots", 'String'>
    readonly user_id: FieldRef<"chatbots", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chatbots findUnique
   */
  export type chatbotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    /**
     * Filter, which chatbots to fetch.
     */
    where: chatbotsWhereUniqueInput
  }

  /**
   * chatbots findUniqueOrThrow
   */
  export type chatbotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    /**
     * Filter, which chatbots to fetch.
     */
    where: chatbotsWhereUniqueInput
  }

  /**
   * chatbots findFirst
   */
  export type chatbotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    /**
     * Filter, which chatbots to fetch.
     */
    where?: chatbotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatbots to fetch.
     */
    orderBy?: chatbotsOrderByWithRelationInput | chatbotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatbots.
     */
    cursor?: chatbotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatbots.
     */
    distinct?: ChatbotsScalarFieldEnum | ChatbotsScalarFieldEnum[]
  }

  /**
   * chatbots findFirstOrThrow
   */
  export type chatbotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    /**
     * Filter, which chatbots to fetch.
     */
    where?: chatbotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatbots to fetch.
     */
    orderBy?: chatbotsOrderByWithRelationInput | chatbotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatbots.
     */
    cursor?: chatbotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatbots.
     */
    distinct?: ChatbotsScalarFieldEnum | ChatbotsScalarFieldEnum[]
  }

  /**
   * chatbots findMany
   */
  export type chatbotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    /**
     * Filter, which chatbots to fetch.
     */
    where?: chatbotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatbots to fetch.
     */
    orderBy?: chatbotsOrderByWithRelationInput | chatbotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatbots.
     */
    cursor?: chatbotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatbots.
     */
    distinct?: ChatbotsScalarFieldEnum | ChatbotsScalarFieldEnum[]
  }

  /**
   * chatbots create
   */
  export type chatbotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    /**
     * The data needed to create a chatbots.
     */
    data: XOR<chatbotsCreateInput, chatbotsUncheckedCreateInput>
  }

  /**
   * chatbots createMany
   */
  export type chatbotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatbots.
     */
    data: chatbotsCreateManyInput | chatbotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatbots createManyAndReturn
   */
  export type chatbotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * The data used to create many chatbots.
     */
    data: chatbotsCreateManyInput | chatbotsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatbots update
   */
  export type chatbotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    /**
     * The data needed to update a chatbots.
     */
    data: XOR<chatbotsUpdateInput, chatbotsUncheckedUpdateInput>
    /**
     * Choose, which chatbots to update.
     */
    where: chatbotsWhereUniqueInput
  }

  /**
   * chatbots updateMany
   */
  export type chatbotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatbots.
     */
    data: XOR<chatbotsUpdateManyMutationInput, chatbotsUncheckedUpdateManyInput>
    /**
     * Filter which chatbots to update
     */
    where?: chatbotsWhereInput
    /**
     * Limit how many chatbots to update.
     */
    limit?: number
  }

  /**
   * chatbots updateManyAndReturn
   */
  export type chatbotsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * The data used to update chatbots.
     */
    data: XOR<chatbotsUpdateManyMutationInput, chatbotsUncheckedUpdateManyInput>
    /**
     * Filter which chatbots to update
     */
    where?: chatbotsWhereInput
    /**
     * Limit how many chatbots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatbots upsert
   */
  export type chatbotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    /**
     * The filter to search for the chatbots to update in case it exists.
     */
    where: chatbotsWhereUniqueInput
    /**
     * In case the chatbots found by the `where` argument doesn't exist, create a new chatbots with this data.
     */
    create: XOR<chatbotsCreateInput, chatbotsUncheckedCreateInput>
    /**
     * In case the chatbots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatbotsUpdateInput, chatbotsUncheckedUpdateInput>
  }

  /**
   * chatbots delete
   */
  export type chatbotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    /**
     * Filter which chatbots to delete.
     */
    where: chatbotsWhereUniqueInput
  }

  /**
   * chatbots deleteMany
   */
  export type chatbotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatbots to delete
     */
    where?: chatbotsWhereInput
    /**
     * Limit how many chatbots to delete.
     */
    limit?: number
  }

  /**
   * chatbots without action
   */
  export type chatbotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
  }


  /**
   * Model documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsMinAggregateOutputType = {
    id: string | null
    file_url: string | null
    uploaded_at: Date | null
    user_id: string | null
    booking_id: string | null
  }

  export type DocumentsMaxAggregateOutputType = {
    id: string | null
    file_url: string | null
    uploaded_at: Date | null
    user_id: string | null
    booking_id: string | null
  }

  export type DocumentsCountAggregateOutputType = {
    id: number
    file_url: number
    uploaded_at: number
    user_id: number
    booking_id: number
    _all: number
  }


  export type DocumentsMinAggregateInputType = {
    id?: true
    file_url?: true
    uploaded_at?: true
    user_id?: true
    booking_id?: true
  }

  export type DocumentsMaxAggregateInputType = {
    id?: true
    file_url?: true
    uploaded_at?: true
    user_id?: true
    booking_id?: true
  }

  export type DocumentsCountAggregateInputType = {
    id?: true
    file_url?: true
    uploaded_at?: true
    user_id?: true
    booking_id?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to aggregate.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithAggregationInput | documentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    id: string
    file_url: string
    uploaded_at: Date
    user_id: string
    booking_id: string
    _count: DocumentsCountAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_url?: boolean
    uploaded_at?: boolean
    user_id?: boolean
    booking_id?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type documentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_url?: boolean
    uploaded_at?: boolean
    user_id?: boolean
    booking_id?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type documentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_url?: boolean
    uploaded_at?: boolean
    user_id?: boolean
    booking_id?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>

  export type documentsSelectScalar = {
    id?: boolean
    file_url?: boolean
    uploaded_at?: boolean
    user_id?: boolean
    booking_id?: boolean
  }

  export type documentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "file_url" | "uploaded_at" | "user_id" | "booking_id", ExtArgs["result"]["documents"]>
  export type documentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type documentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type documentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documents"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      file_url: string
      uploaded_at: Date
      user_id: string
      booking_id: string
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type documentsGetPayload<S extends boolean | null | undefined | documentsDefaultArgs> = $Result.GetResult<Prisma.$documentsPayload, S>

  type documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documents'], meta: { name: 'documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {documentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentsFindUniqueArgs>(args: SelectSubset<T, documentsFindUniqueArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentsFindFirstArgs>(args?: SelectSubset<T, documentsFindFirstArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentsWithIdOnly = await prisma.documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends documentsFindManyArgs>(args?: SelectSubset<T, documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documents.
     * @param {documentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends documentsCreateArgs>(args: SelectSubset<T, documentsCreateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {documentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentsCreateManyArgs>(args?: SelectSubset<T, documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {documentsCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends documentsCreateManyAndReturnArgs>(args?: SelectSubset<T, documentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documents.
     * @param {documentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends documentsDeleteArgs>(args: SelectSubset<T, documentsDeleteArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documents.
     * @param {documentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentsUpdateArgs>(args: SelectSubset<T, documentsUpdateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {documentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentsDeleteManyArgs>(args?: SelectSubset<T, documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentsUpdateManyArgs>(args: SelectSubset<T, documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {documentsUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentsWithIdOnly = await prisma.documents.updateManyAndReturn({
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
    updateManyAndReturn<T extends documentsUpdateManyAndReturnArgs>(args: SelectSubset<T, documentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documents.
     * @param {documentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends documentsUpsertArgs>(args: SelectSubset<T, documentsUpsertArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends documentsCountArgs>(
      args?: Subset<T, documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsGroupByArgs} args - Group by arguments.
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
      T extends documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentsGroupByArgs['orderBy'] }
        : { orderBy?: documentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documents model
   */
  readonly fields: documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends bookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingsDefaultArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the documents model
   */
  interface documentsFieldRefs {
    readonly id: FieldRef<"documents", 'String'>
    readonly file_url: FieldRef<"documents", 'String'>
    readonly uploaded_at: FieldRef<"documents", 'DateTime'>
    readonly user_id: FieldRef<"documents", 'String'>
    readonly booking_id: FieldRef<"documents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * documents findUnique
   */
  export type documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findUniqueOrThrow
   */
  export type documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findFirst
   */
  export type documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findFirstOrThrow
   */
  export type documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findMany
   */
  export type documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents create
   */
  export type documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The data needed to create a documents.
     */
    data: XOR<documentsCreateInput, documentsUncheckedCreateInput>
  }

  /**
   * documents createMany
   */
  export type documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentsCreateManyInput | documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documents createManyAndReturn
   */
  export type documentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * The data used to create many documents.
     */
    data: documentsCreateManyInput | documentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * documents update
   */
  export type documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The data needed to update a documents.
     */
    data: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
    /**
     * Choose, which documents to update.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents updateMany
   */
  export type documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
  }

  /**
   * documents updateManyAndReturn
   */
  export type documentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * The data used to update documents.
     */
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * documents upsert
   */
  export type documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The filter to search for the documents to update in case it exists.
     */
    where: documentsWhereUniqueInput
    /**
     * In case the documents found by the `where` argument doesn't exist, create a new documents with this data.
     */
    create: XOR<documentsCreateInput, documentsUncheckedCreateInput>
    /**
     * In case the documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
  }

  /**
   * documents delete
   */
  export type documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter which documents to delete.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents deleteMany
   */
  export type documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentsWhereInput
    /**
     * Limit how many documents to delete.
     */
    limit?: number
  }

  /**
   * documents without action
   */
  export type documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
  }


  /**
   * Model lawyer_applications
   */

  export type AggregateLawyer_applications = {
    _count: Lawyer_applicationsCountAggregateOutputType | null
    _min: Lawyer_applicationsMinAggregateOutputType | null
    _max: Lawyer_applicationsMaxAggregateOutputType | null
  }

  export type Lawyer_applicationsMinAggregateOutputType = {
    id: string | null
    file_url: string | null
    lsk_number: string | null
    created_at: Date | null
    user_id: string | null
  }

  export type Lawyer_applicationsMaxAggregateOutputType = {
    id: string | null
    file_url: string | null
    lsk_number: string | null
    created_at: Date | null
    user_id: string | null
  }

  export type Lawyer_applicationsCountAggregateOutputType = {
    id: number
    file_url: number
    lsk_number: number
    created_at: number
    user_id: number
    _all: number
  }


  export type Lawyer_applicationsMinAggregateInputType = {
    id?: true
    file_url?: true
    lsk_number?: true
    created_at?: true
    user_id?: true
  }

  export type Lawyer_applicationsMaxAggregateInputType = {
    id?: true
    file_url?: true
    lsk_number?: true
    created_at?: true
    user_id?: true
  }

  export type Lawyer_applicationsCountAggregateInputType = {
    id?: true
    file_url?: true
    lsk_number?: true
    created_at?: true
    user_id?: true
    _all?: true
  }

  export type Lawyer_applicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lawyer_applications to aggregate.
     */
    where?: lawyer_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lawyer_applications to fetch.
     */
    orderBy?: lawyer_applicationsOrderByWithRelationInput | lawyer_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lawyer_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lawyer_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lawyer_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lawyer_applications
    **/
    _count?: true | Lawyer_applicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lawyer_applicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lawyer_applicationsMaxAggregateInputType
  }

  export type GetLawyer_applicationsAggregateType<T extends Lawyer_applicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyer_applications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyer_applications[P]>
      : GetScalarType<T[P], AggregateLawyer_applications[P]>
  }




  export type lawyer_applicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lawyer_applicationsWhereInput
    orderBy?: lawyer_applicationsOrderByWithAggregationInput | lawyer_applicationsOrderByWithAggregationInput[]
    by: Lawyer_applicationsScalarFieldEnum[] | Lawyer_applicationsScalarFieldEnum
    having?: lawyer_applicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lawyer_applicationsCountAggregateInputType | true
    _min?: Lawyer_applicationsMinAggregateInputType
    _max?: Lawyer_applicationsMaxAggregateInputType
  }

  export type Lawyer_applicationsGroupByOutputType = {
    id: string
    file_url: string
    lsk_number: string
    created_at: Date
    user_id: string
    _count: Lawyer_applicationsCountAggregateOutputType | null
    _min: Lawyer_applicationsMinAggregateOutputType | null
    _max: Lawyer_applicationsMaxAggregateOutputType | null
  }

  type GetLawyer_applicationsGroupByPayload<T extends lawyer_applicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lawyer_applicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lawyer_applicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lawyer_applicationsGroupByOutputType[P]>
            : GetScalarType<T[P], Lawyer_applicationsGroupByOutputType[P]>
        }
      >
    >


  export type lawyer_applicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_url?: boolean
    lsk_number?: boolean
    created_at?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    lawyer_profiles?: boolean | lawyer_applications$lawyer_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["lawyer_applications"]>

  export type lawyer_applicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_url?: boolean
    lsk_number?: boolean
    created_at?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyer_applications"]>

  export type lawyer_applicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_url?: boolean
    lsk_number?: boolean
    created_at?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyer_applications"]>

  export type lawyer_applicationsSelectScalar = {
    id?: boolean
    file_url?: boolean
    lsk_number?: boolean
    created_at?: boolean
    user_id?: boolean
  }

  export type lawyer_applicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "file_url" | "lsk_number" | "created_at" | "user_id", ExtArgs["result"]["lawyer_applications"]>
  export type lawyer_applicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    lawyer_profiles?: boolean | lawyer_applications$lawyer_profilesArgs<ExtArgs>
  }
  export type lawyer_applicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type lawyer_applicationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $lawyer_applicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lawyer_applications"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      lawyer_profiles: Prisma.$lawyer_profilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      file_url: string
      lsk_number: string
      created_at: Date
      user_id: string
    }, ExtArgs["result"]["lawyer_applications"]>
    composites: {}
  }

  type lawyer_applicationsGetPayload<S extends boolean | null | undefined | lawyer_applicationsDefaultArgs> = $Result.GetResult<Prisma.$lawyer_applicationsPayload, S>

  type lawyer_applicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lawyer_applicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lawyer_applicationsCountAggregateInputType | true
    }

  export interface lawyer_applicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lawyer_applications'], meta: { name: 'lawyer_applications' } }
    /**
     * Find zero or one Lawyer_applications that matches the filter.
     * @param {lawyer_applicationsFindUniqueArgs} args - Arguments to find a Lawyer_applications
     * @example
     * // Get one Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lawyer_applicationsFindUniqueArgs>(args: SelectSubset<T, lawyer_applicationsFindUniqueArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lawyer_applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lawyer_applicationsFindUniqueOrThrowArgs} args - Arguments to find a Lawyer_applications
     * @example
     * // Get one Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lawyer_applicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, lawyer_applicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_applicationsFindFirstArgs} args - Arguments to find a Lawyer_applications
     * @example
     * // Get one Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lawyer_applicationsFindFirstArgs>(args?: SelectSubset<T, lawyer_applicationsFindFirstArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer_applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_applicationsFindFirstOrThrowArgs} args - Arguments to find a Lawyer_applications
     * @example
     * // Get one Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lawyer_applicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, lawyer_applicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lawyer_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_applicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.findMany()
     * 
     * // Get first 10 Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyer_applicationsWithIdOnly = await prisma.lawyer_applications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lawyer_applicationsFindManyArgs>(args?: SelectSubset<T, lawyer_applicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lawyer_applications.
     * @param {lawyer_applicationsCreateArgs} args - Arguments to create a Lawyer_applications.
     * @example
     * // Create one Lawyer_applications
     * const Lawyer_applications = await prisma.lawyer_applications.create({
     *   data: {
     *     // ... data to create a Lawyer_applications
     *   }
     * })
     * 
     */
    create<T extends lawyer_applicationsCreateArgs>(args: SelectSubset<T, lawyer_applicationsCreateArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lawyer_applications.
     * @param {lawyer_applicationsCreateManyArgs} args - Arguments to create many Lawyer_applications.
     * @example
     * // Create many Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lawyer_applicationsCreateManyArgs>(args?: SelectSubset<T, lawyer_applicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lawyer_applications and returns the data saved in the database.
     * @param {lawyer_applicationsCreateManyAndReturnArgs} args - Arguments to create many Lawyer_applications.
     * @example
     * // Create many Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lawyer_applications and only return the `id`
     * const lawyer_applicationsWithIdOnly = await prisma.lawyer_applications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lawyer_applicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, lawyer_applicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lawyer_applications.
     * @param {lawyer_applicationsDeleteArgs} args - Arguments to delete one Lawyer_applications.
     * @example
     * // Delete one Lawyer_applications
     * const Lawyer_applications = await prisma.lawyer_applications.delete({
     *   where: {
     *     // ... filter to delete one Lawyer_applications
     *   }
     * })
     * 
     */
    delete<T extends lawyer_applicationsDeleteArgs>(args: SelectSubset<T, lawyer_applicationsDeleteArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lawyer_applications.
     * @param {lawyer_applicationsUpdateArgs} args - Arguments to update one Lawyer_applications.
     * @example
     * // Update one Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lawyer_applicationsUpdateArgs>(args: SelectSubset<T, lawyer_applicationsUpdateArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lawyer_applications.
     * @param {lawyer_applicationsDeleteManyArgs} args - Arguments to filter Lawyer_applications to delete.
     * @example
     * // Delete a few Lawyer_applications
     * const { count } = await prisma.lawyer_applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lawyer_applicationsDeleteManyArgs>(args?: SelectSubset<T, lawyer_applicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyer_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_applicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lawyer_applicationsUpdateManyArgs>(args: SelectSubset<T, lawyer_applicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyer_applications and returns the data updated in the database.
     * @param {lawyer_applicationsUpdateManyAndReturnArgs} args - Arguments to update many Lawyer_applications.
     * @example
     * // Update many Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lawyer_applications and only return the `id`
     * const lawyer_applicationsWithIdOnly = await prisma.lawyer_applications.updateManyAndReturn({
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
    updateManyAndReturn<T extends lawyer_applicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, lawyer_applicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lawyer_applications.
     * @param {lawyer_applicationsUpsertArgs} args - Arguments to update or create a Lawyer_applications.
     * @example
     * // Update or create a Lawyer_applications
     * const lawyer_applications = await prisma.lawyer_applications.upsert({
     *   create: {
     *     // ... data to create a Lawyer_applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lawyer_applications we want to update
     *   }
     * })
     */
    upsert<T extends lawyer_applicationsUpsertArgs>(args: SelectSubset<T, lawyer_applicationsUpsertArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lawyer_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_applicationsCountArgs} args - Arguments to filter Lawyer_applications to count.
     * @example
     * // Count the number of Lawyer_applications
     * const count = await prisma.lawyer_applications.count({
     *   where: {
     *     // ... the filter for the Lawyer_applications we want to count
     *   }
     * })
    **/
    count<T extends lawyer_applicationsCountArgs>(
      args?: Subset<T, lawyer_applicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lawyer_applicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lawyer_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lawyer_applicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lawyer_applicationsAggregateArgs>(args: Subset<T, Lawyer_applicationsAggregateArgs>): Prisma.PrismaPromise<GetLawyer_applicationsAggregateType<T>>

    /**
     * Group by Lawyer_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_applicationsGroupByArgs} args - Group by arguments.
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
      T extends lawyer_applicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lawyer_applicationsGroupByArgs['orderBy'] }
        : { orderBy?: lawyer_applicationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lawyer_applicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyer_applicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lawyer_applications model
   */
  readonly fields: lawyer_applicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lawyer_applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lawyer_applicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lawyer_profiles<T extends lawyer_applications$lawyer_profilesArgs<ExtArgs> = {}>(args?: Subset<T, lawyer_applications$lawyer_profilesArgs<ExtArgs>>): Prisma__lawyer_profilesClient<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the lawyer_applications model
   */
  interface lawyer_applicationsFieldRefs {
    readonly id: FieldRef<"lawyer_applications", 'String'>
    readonly file_url: FieldRef<"lawyer_applications", 'String'>
    readonly lsk_number: FieldRef<"lawyer_applications", 'String'>
    readonly created_at: FieldRef<"lawyer_applications", 'DateTime'>
    readonly user_id: FieldRef<"lawyer_applications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lawyer_applications findUnique
   */
  export type lawyer_applicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_applications to fetch.
     */
    where: lawyer_applicationsWhereUniqueInput
  }

  /**
   * lawyer_applications findUniqueOrThrow
   */
  export type lawyer_applicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_applications to fetch.
     */
    where: lawyer_applicationsWhereUniqueInput
  }

  /**
   * lawyer_applications findFirst
   */
  export type lawyer_applicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_applications to fetch.
     */
    where?: lawyer_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lawyer_applications to fetch.
     */
    orderBy?: lawyer_applicationsOrderByWithRelationInput | lawyer_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lawyer_applications.
     */
    cursor?: lawyer_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lawyer_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lawyer_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lawyer_applications.
     */
    distinct?: Lawyer_applicationsScalarFieldEnum | Lawyer_applicationsScalarFieldEnum[]
  }

  /**
   * lawyer_applications findFirstOrThrow
   */
  export type lawyer_applicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_applications to fetch.
     */
    where?: lawyer_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lawyer_applications to fetch.
     */
    orderBy?: lawyer_applicationsOrderByWithRelationInput | lawyer_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lawyer_applications.
     */
    cursor?: lawyer_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lawyer_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lawyer_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lawyer_applications.
     */
    distinct?: Lawyer_applicationsScalarFieldEnum | Lawyer_applicationsScalarFieldEnum[]
  }

  /**
   * lawyer_applications findMany
   */
  export type lawyer_applicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_applications to fetch.
     */
    where?: lawyer_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lawyer_applications to fetch.
     */
    orderBy?: lawyer_applicationsOrderByWithRelationInput | lawyer_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lawyer_applications.
     */
    cursor?: lawyer_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lawyer_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lawyer_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lawyer_applications.
     */
    distinct?: Lawyer_applicationsScalarFieldEnum | Lawyer_applicationsScalarFieldEnum[]
  }

  /**
   * lawyer_applications create
   */
  export type lawyer_applicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a lawyer_applications.
     */
    data: XOR<lawyer_applicationsCreateInput, lawyer_applicationsUncheckedCreateInput>
  }

  /**
   * lawyer_applications createMany
   */
  export type lawyer_applicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lawyer_applications.
     */
    data: lawyer_applicationsCreateManyInput | lawyer_applicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lawyer_applications createManyAndReturn
   */
  export type lawyer_applicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * The data used to create many lawyer_applications.
     */
    data: lawyer_applicationsCreateManyInput | lawyer_applicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lawyer_applications update
   */
  export type lawyer_applicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a lawyer_applications.
     */
    data: XOR<lawyer_applicationsUpdateInput, lawyer_applicationsUncheckedUpdateInput>
    /**
     * Choose, which lawyer_applications to update.
     */
    where: lawyer_applicationsWhereUniqueInput
  }

  /**
   * lawyer_applications updateMany
   */
  export type lawyer_applicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lawyer_applications.
     */
    data: XOR<lawyer_applicationsUpdateManyMutationInput, lawyer_applicationsUncheckedUpdateManyInput>
    /**
     * Filter which lawyer_applications to update
     */
    where?: lawyer_applicationsWhereInput
    /**
     * Limit how many lawyer_applications to update.
     */
    limit?: number
  }

  /**
   * lawyer_applications updateManyAndReturn
   */
  export type lawyer_applicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * The data used to update lawyer_applications.
     */
    data: XOR<lawyer_applicationsUpdateManyMutationInput, lawyer_applicationsUncheckedUpdateManyInput>
    /**
     * Filter which lawyer_applications to update
     */
    where?: lawyer_applicationsWhereInput
    /**
     * Limit how many lawyer_applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lawyer_applications upsert
   */
  export type lawyer_applicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the lawyer_applications to update in case it exists.
     */
    where: lawyer_applicationsWhereUniqueInput
    /**
     * In case the lawyer_applications found by the `where` argument doesn't exist, create a new lawyer_applications with this data.
     */
    create: XOR<lawyer_applicationsCreateInput, lawyer_applicationsUncheckedCreateInput>
    /**
     * In case the lawyer_applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lawyer_applicationsUpdateInput, lawyer_applicationsUncheckedUpdateInput>
  }

  /**
   * lawyer_applications delete
   */
  export type lawyer_applicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    /**
     * Filter which lawyer_applications to delete.
     */
    where: lawyer_applicationsWhereUniqueInput
  }

  /**
   * lawyer_applications deleteMany
   */
  export type lawyer_applicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lawyer_applications to delete
     */
    where?: lawyer_applicationsWhereInput
    /**
     * Limit how many lawyer_applications to delete.
     */
    limit?: number
  }

  /**
   * lawyer_applications.lawyer_profiles
   */
  export type lawyer_applications$lawyer_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    where?: lawyer_profilesWhereInput
  }

  /**
   * lawyer_applications without action
   */
  export type lawyer_applicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
  }


  /**
   * Model lawyer_profiles
   */

  export type AggregateLawyer_profiles = {
    _count: Lawyer_profilesCountAggregateOutputType | null
    _avg: Lawyer_profilesAvgAggregateOutputType | null
    _sum: Lawyer_profilesSumAggregateOutputType | null
    _min: Lawyer_profilesMinAggregateOutputType | null
    _max: Lawyer_profilesMaxAggregateOutputType | null
  }

  export type Lawyer_profilesAvgAggregateOutputType = {
    experience: number | null
    consultation_fee: number | null
  }

  export type Lawyer_profilesSumAggregateOutputType = {
    experience: number | null
    consultation_fee: number | null
  }

  export type Lawyer_profilesMinAggregateOutputType = {
    id: string | null
    category: string | null
    phone_number: string | null
    description: string | null
    created_at: Date | null
    experience: number | null
    consultation_fee: number | null
    is_active: boolean | null
    lawyer_application_id: string | null
  }

  export type Lawyer_profilesMaxAggregateOutputType = {
    id: string | null
    category: string | null
    phone_number: string | null
    description: string | null
    created_at: Date | null
    experience: number | null
    consultation_fee: number | null
    is_active: boolean | null
    lawyer_application_id: string | null
  }

  export type Lawyer_profilesCountAggregateOutputType = {
    id: number
    category: number
    phone_number: number
    description: number
    created_at: number
    experience: number
    consultation_fee: number
    is_active: number
    lawyer_application_id: number
    _all: number
  }


  export type Lawyer_profilesAvgAggregateInputType = {
    experience?: true
    consultation_fee?: true
  }

  export type Lawyer_profilesSumAggregateInputType = {
    experience?: true
    consultation_fee?: true
  }

  export type Lawyer_profilesMinAggregateInputType = {
    id?: true
    category?: true
    phone_number?: true
    description?: true
    created_at?: true
    experience?: true
    consultation_fee?: true
    is_active?: true
    lawyer_application_id?: true
  }

  export type Lawyer_profilesMaxAggregateInputType = {
    id?: true
    category?: true
    phone_number?: true
    description?: true
    created_at?: true
    experience?: true
    consultation_fee?: true
    is_active?: true
    lawyer_application_id?: true
  }

  export type Lawyer_profilesCountAggregateInputType = {
    id?: true
    category?: true
    phone_number?: true
    description?: true
    created_at?: true
    experience?: true
    consultation_fee?: true
    is_active?: true
    lawyer_application_id?: true
    _all?: true
  }

  export type Lawyer_profilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lawyer_profiles to aggregate.
     */
    where?: lawyer_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lawyer_profiles to fetch.
     */
    orderBy?: lawyer_profilesOrderByWithRelationInput | lawyer_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lawyer_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lawyer_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lawyer_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lawyer_profiles
    **/
    _count?: true | Lawyer_profilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lawyer_profilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lawyer_profilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lawyer_profilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lawyer_profilesMaxAggregateInputType
  }

  export type GetLawyer_profilesAggregateType<T extends Lawyer_profilesAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyer_profiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyer_profiles[P]>
      : GetScalarType<T[P], AggregateLawyer_profiles[P]>
  }




  export type lawyer_profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lawyer_profilesWhereInput
    orderBy?: lawyer_profilesOrderByWithAggregationInput | lawyer_profilesOrderByWithAggregationInput[]
    by: Lawyer_profilesScalarFieldEnum[] | Lawyer_profilesScalarFieldEnum
    having?: lawyer_profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lawyer_profilesCountAggregateInputType | true
    _avg?: Lawyer_profilesAvgAggregateInputType
    _sum?: Lawyer_profilesSumAggregateInputType
    _min?: Lawyer_profilesMinAggregateInputType
    _max?: Lawyer_profilesMaxAggregateInputType
  }

  export type Lawyer_profilesGroupByOutputType = {
    id: string
    category: string
    phone_number: string
    description: string
    created_at: Date
    experience: number
    consultation_fee: number
    is_active: boolean
    lawyer_application_id: string
    _count: Lawyer_profilesCountAggregateOutputType | null
    _avg: Lawyer_profilesAvgAggregateOutputType | null
    _sum: Lawyer_profilesSumAggregateOutputType | null
    _min: Lawyer_profilesMinAggregateOutputType | null
    _max: Lawyer_profilesMaxAggregateOutputType | null
  }

  type GetLawyer_profilesGroupByPayload<T extends lawyer_profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lawyer_profilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lawyer_profilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lawyer_profilesGroupByOutputType[P]>
            : GetScalarType<T[P], Lawyer_profilesGroupByOutputType[P]>
        }
      >
    >


  export type lawyer_profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    experience?: boolean
    consultation_fee?: boolean
    is_active?: boolean
    lawyer_application_id?: boolean
    lawyer_applications?: boolean | lawyer_applicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyer_profiles"]>

  export type lawyer_profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    experience?: boolean
    consultation_fee?: boolean
    is_active?: boolean
    lawyer_application_id?: boolean
    lawyer_applications?: boolean | lawyer_applicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyer_profiles"]>

  export type lawyer_profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    experience?: boolean
    consultation_fee?: boolean
    is_active?: boolean
    lawyer_application_id?: boolean
    lawyer_applications?: boolean | lawyer_applicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyer_profiles"]>

  export type lawyer_profilesSelectScalar = {
    id?: boolean
    category?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    experience?: boolean
    consultation_fee?: boolean
    is_active?: boolean
    lawyer_application_id?: boolean
  }

  export type lawyer_profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "phone_number" | "description" | "created_at" | "experience" | "consultation_fee" | "is_active" | "lawyer_application_id", ExtArgs["result"]["lawyer_profiles"]>
  export type lawyer_profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer_applications?: boolean | lawyer_applicationsDefaultArgs<ExtArgs>
  }
  export type lawyer_profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer_applications?: boolean | lawyer_applicationsDefaultArgs<ExtArgs>
  }
  export type lawyer_profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer_applications?: boolean | lawyer_applicationsDefaultArgs<ExtArgs>
  }

  export type $lawyer_profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lawyer_profiles"
    objects: {
      lawyer_applications: Prisma.$lawyer_applicationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      phone_number: string
      description: string
      created_at: Date
      experience: number
      consultation_fee: number
      is_active: boolean
      lawyer_application_id: string
    }, ExtArgs["result"]["lawyer_profiles"]>
    composites: {}
  }

  type lawyer_profilesGetPayload<S extends boolean | null | undefined | lawyer_profilesDefaultArgs> = $Result.GetResult<Prisma.$lawyer_profilesPayload, S>

  type lawyer_profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lawyer_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lawyer_profilesCountAggregateInputType | true
    }

  export interface lawyer_profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lawyer_profiles'], meta: { name: 'lawyer_profiles' } }
    /**
     * Find zero or one Lawyer_profiles that matches the filter.
     * @param {lawyer_profilesFindUniqueArgs} args - Arguments to find a Lawyer_profiles
     * @example
     * // Get one Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lawyer_profilesFindUniqueArgs>(args: SelectSubset<T, lawyer_profilesFindUniqueArgs<ExtArgs>>): Prisma__lawyer_profilesClient<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lawyer_profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lawyer_profilesFindUniqueOrThrowArgs} args - Arguments to find a Lawyer_profiles
     * @example
     * // Get one Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lawyer_profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, lawyer_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lawyer_profilesClient<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_profilesFindFirstArgs} args - Arguments to find a Lawyer_profiles
     * @example
     * // Get one Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lawyer_profilesFindFirstArgs>(args?: SelectSubset<T, lawyer_profilesFindFirstArgs<ExtArgs>>): Prisma__lawyer_profilesClient<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_profilesFindFirstOrThrowArgs} args - Arguments to find a Lawyer_profiles
     * @example
     * // Get one Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lawyer_profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, lawyer_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__lawyer_profilesClient<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lawyer_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.findMany()
     * 
     * // Get first 10 Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyer_profilesWithIdOnly = await prisma.lawyer_profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lawyer_profilesFindManyArgs>(args?: SelectSubset<T, lawyer_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lawyer_profiles.
     * @param {lawyer_profilesCreateArgs} args - Arguments to create a Lawyer_profiles.
     * @example
     * // Create one Lawyer_profiles
     * const Lawyer_profiles = await prisma.lawyer_profiles.create({
     *   data: {
     *     // ... data to create a Lawyer_profiles
     *   }
     * })
     * 
     */
    create<T extends lawyer_profilesCreateArgs>(args: SelectSubset<T, lawyer_profilesCreateArgs<ExtArgs>>): Prisma__lawyer_profilesClient<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lawyer_profiles.
     * @param {lawyer_profilesCreateManyArgs} args - Arguments to create many Lawyer_profiles.
     * @example
     * // Create many Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lawyer_profilesCreateManyArgs>(args?: SelectSubset<T, lawyer_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lawyer_profiles and returns the data saved in the database.
     * @param {lawyer_profilesCreateManyAndReturnArgs} args - Arguments to create many Lawyer_profiles.
     * @example
     * // Create many Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lawyer_profiles and only return the `id`
     * const lawyer_profilesWithIdOnly = await prisma.lawyer_profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lawyer_profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, lawyer_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lawyer_profiles.
     * @param {lawyer_profilesDeleteArgs} args - Arguments to delete one Lawyer_profiles.
     * @example
     * // Delete one Lawyer_profiles
     * const Lawyer_profiles = await prisma.lawyer_profiles.delete({
     *   where: {
     *     // ... filter to delete one Lawyer_profiles
     *   }
     * })
     * 
     */
    delete<T extends lawyer_profilesDeleteArgs>(args: SelectSubset<T, lawyer_profilesDeleteArgs<ExtArgs>>): Prisma__lawyer_profilesClient<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lawyer_profiles.
     * @param {lawyer_profilesUpdateArgs} args - Arguments to update one Lawyer_profiles.
     * @example
     * // Update one Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lawyer_profilesUpdateArgs>(args: SelectSubset<T, lawyer_profilesUpdateArgs<ExtArgs>>): Prisma__lawyer_profilesClient<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lawyer_profiles.
     * @param {lawyer_profilesDeleteManyArgs} args - Arguments to filter Lawyer_profiles to delete.
     * @example
     * // Delete a few Lawyer_profiles
     * const { count } = await prisma.lawyer_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lawyer_profilesDeleteManyArgs>(args?: SelectSubset<T, lawyer_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyer_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lawyer_profilesUpdateManyArgs>(args: SelectSubset<T, lawyer_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyer_profiles and returns the data updated in the database.
     * @param {lawyer_profilesUpdateManyAndReturnArgs} args - Arguments to update many Lawyer_profiles.
     * @example
     * // Update many Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lawyer_profiles and only return the `id`
     * const lawyer_profilesWithIdOnly = await prisma.lawyer_profiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends lawyer_profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, lawyer_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lawyer_profiles.
     * @param {lawyer_profilesUpsertArgs} args - Arguments to update or create a Lawyer_profiles.
     * @example
     * // Update or create a Lawyer_profiles
     * const lawyer_profiles = await prisma.lawyer_profiles.upsert({
     *   create: {
     *     // ... data to create a Lawyer_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lawyer_profiles we want to update
     *   }
     * })
     */
    upsert<T extends lawyer_profilesUpsertArgs>(args: SelectSubset<T, lawyer_profilesUpsertArgs<ExtArgs>>): Prisma__lawyer_profilesClient<$Result.GetResult<Prisma.$lawyer_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lawyer_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_profilesCountArgs} args - Arguments to filter Lawyer_profiles to count.
     * @example
     * // Count the number of Lawyer_profiles
     * const count = await prisma.lawyer_profiles.count({
     *   where: {
     *     // ... the filter for the Lawyer_profiles we want to count
     *   }
     * })
    **/
    count<T extends lawyer_profilesCountArgs>(
      args?: Subset<T, lawyer_profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lawyer_profilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lawyer_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lawyer_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lawyer_profilesAggregateArgs>(args: Subset<T, Lawyer_profilesAggregateArgs>): Prisma.PrismaPromise<GetLawyer_profilesAggregateType<T>>

    /**
     * Group by Lawyer_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lawyer_profilesGroupByArgs} args - Group by arguments.
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
      T extends lawyer_profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lawyer_profilesGroupByArgs['orderBy'] }
        : { orderBy?: lawyer_profilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lawyer_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyer_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lawyer_profiles model
   */
  readonly fields: lawyer_profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lawyer_profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lawyer_profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lawyer_applications<T extends lawyer_applicationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lawyer_applicationsDefaultArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the lawyer_profiles model
   */
  interface lawyer_profilesFieldRefs {
    readonly id: FieldRef<"lawyer_profiles", 'String'>
    readonly category: FieldRef<"lawyer_profiles", 'String'>
    readonly phone_number: FieldRef<"lawyer_profiles", 'String'>
    readonly description: FieldRef<"lawyer_profiles", 'String'>
    readonly created_at: FieldRef<"lawyer_profiles", 'DateTime'>
    readonly experience: FieldRef<"lawyer_profiles", 'Int'>
    readonly consultation_fee: FieldRef<"lawyer_profiles", 'Int'>
    readonly is_active: FieldRef<"lawyer_profiles", 'Boolean'>
    readonly lawyer_application_id: FieldRef<"lawyer_profiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lawyer_profiles findUnique
   */
  export type lawyer_profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_profiles to fetch.
     */
    where: lawyer_profilesWhereUniqueInput
  }

  /**
   * lawyer_profiles findUniqueOrThrow
   */
  export type lawyer_profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_profiles to fetch.
     */
    where: lawyer_profilesWhereUniqueInput
  }

  /**
   * lawyer_profiles findFirst
   */
  export type lawyer_profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_profiles to fetch.
     */
    where?: lawyer_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lawyer_profiles to fetch.
     */
    orderBy?: lawyer_profilesOrderByWithRelationInput | lawyer_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lawyer_profiles.
     */
    cursor?: lawyer_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lawyer_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lawyer_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lawyer_profiles.
     */
    distinct?: Lawyer_profilesScalarFieldEnum | Lawyer_profilesScalarFieldEnum[]
  }

  /**
   * lawyer_profiles findFirstOrThrow
   */
  export type lawyer_profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_profiles to fetch.
     */
    where?: lawyer_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lawyer_profiles to fetch.
     */
    orderBy?: lawyer_profilesOrderByWithRelationInput | lawyer_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lawyer_profiles.
     */
    cursor?: lawyer_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lawyer_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lawyer_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lawyer_profiles.
     */
    distinct?: Lawyer_profilesScalarFieldEnum | Lawyer_profilesScalarFieldEnum[]
  }

  /**
   * lawyer_profiles findMany
   */
  export type lawyer_profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    /**
     * Filter, which lawyer_profiles to fetch.
     */
    where?: lawyer_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lawyer_profiles to fetch.
     */
    orderBy?: lawyer_profilesOrderByWithRelationInput | lawyer_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lawyer_profiles.
     */
    cursor?: lawyer_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lawyer_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lawyer_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lawyer_profiles.
     */
    distinct?: Lawyer_profilesScalarFieldEnum | Lawyer_profilesScalarFieldEnum[]
  }

  /**
   * lawyer_profiles create
   */
  export type lawyer_profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a lawyer_profiles.
     */
    data: XOR<lawyer_profilesCreateInput, lawyer_profilesUncheckedCreateInput>
  }

  /**
   * lawyer_profiles createMany
   */
  export type lawyer_profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lawyer_profiles.
     */
    data: lawyer_profilesCreateManyInput | lawyer_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lawyer_profiles createManyAndReturn
   */
  export type lawyer_profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * The data used to create many lawyer_profiles.
     */
    data: lawyer_profilesCreateManyInput | lawyer_profilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lawyer_profiles update
   */
  export type lawyer_profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a lawyer_profiles.
     */
    data: XOR<lawyer_profilesUpdateInput, lawyer_profilesUncheckedUpdateInput>
    /**
     * Choose, which lawyer_profiles to update.
     */
    where: lawyer_profilesWhereUniqueInput
  }

  /**
   * lawyer_profiles updateMany
   */
  export type lawyer_profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lawyer_profiles.
     */
    data: XOR<lawyer_profilesUpdateManyMutationInput, lawyer_profilesUncheckedUpdateManyInput>
    /**
     * Filter which lawyer_profiles to update
     */
    where?: lawyer_profilesWhereInput
    /**
     * Limit how many lawyer_profiles to update.
     */
    limit?: number
  }

  /**
   * lawyer_profiles updateManyAndReturn
   */
  export type lawyer_profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * The data used to update lawyer_profiles.
     */
    data: XOR<lawyer_profilesUpdateManyMutationInput, lawyer_profilesUncheckedUpdateManyInput>
    /**
     * Filter which lawyer_profiles to update
     */
    where?: lawyer_profilesWhereInput
    /**
     * Limit how many lawyer_profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lawyer_profiles upsert
   */
  export type lawyer_profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the lawyer_profiles to update in case it exists.
     */
    where: lawyer_profilesWhereUniqueInput
    /**
     * In case the lawyer_profiles found by the `where` argument doesn't exist, create a new lawyer_profiles with this data.
     */
    create: XOR<lawyer_profilesCreateInput, lawyer_profilesUncheckedCreateInput>
    /**
     * In case the lawyer_profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lawyer_profilesUpdateInput, lawyer_profilesUncheckedUpdateInput>
  }

  /**
   * lawyer_profiles delete
   */
  export type lawyer_profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
    /**
     * Filter which lawyer_profiles to delete.
     */
    where: lawyer_profilesWhereUniqueInput
  }

  /**
   * lawyer_profiles deleteMany
   */
  export type lawyer_profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lawyer_profiles to delete
     */
    where?: lawyer_profilesWhereInput
    /**
     * Limit how many lawyer_profiles to delete.
     */
    limit?: number
  }

  /**
   * lawyer_profiles without action
   */
  export type lawyer_profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_profiles
     */
    select?: lawyer_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_profiles
     */
    omit?: lawyer_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_profilesInclude<ExtArgs> | null
  }


  /**
   * Model passwords
   */

  export type AggregatePasswords = {
    _count: PasswordsCountAggregateOutputType | null
    _min: PasswordsMinAggregateOutputType | null
    _max: PasswordsMaxAggregateOutputType | null
  }

  export type PasswordsMinAggregateOutputType = {
    id: string | null
    password: string | null
    user_id: string | null
  }

  export type PasswordsMaxAggregateOutputType = {
    id: string | null
    password: string | null
    user_id: string | null
  }

  export type PasswordsCountAggregateOutputType = {
    id: number
    password: number
    user_id: number
    _all: number
  }


  export type PasswordsMinAggregateInputType = {
    id?: true
    password?: true
    user_id?: true
  }

  export type PasswordsMaxAggregateInputType = {
    id?: true
    password?: true
    user_id?: true
  }

  export type PasswordsCountAggregateInputType = {
    id?: true
    password?: true
    user_id?: true
    _all?: true
  }

  export type PasswordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passwords to aggregate.
     */
    where?: passwordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwords to fetch.
     */
    orderBy?: passwordsOrderByWithRelationInput | passwordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: passwordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned passwords
    **/
    _count?: true | PasswordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordsMaxAggregateInputType
  }

  export type GetPasswordsAggregateType<T extends PasswordsAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswords[P]>
      : GetScalarType<T[P], AggregatePasswords[P]>
  }




  export type passwordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: passwordsWhereInput
    orderBy?: passwordsOrderByWithAggregationInput | passwordsOrderByWithAggregationInput[]
    by: PasswordsScalarFieldEnum[] | PasswordsScalarFieldEnum
    having?: passwordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordsCountAggregateInputType | true
    _min?: PasswordsMinAggregateInputType
    _max?: PasswordsMaxAggregateInputType
  }

  export type PasswordsGroupByOutputType = {
    id: string
    password: string
    user_id: string
    _count: PasswordsCountAggregateOutputType | null
    _min: PasswordsMinAggregateOutputType | null
    _max: PasswordsMaxAggregateOutputType | null
  }

  type GetPasswordsGroupByPayload<T extends passwordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordsGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordsGroupByOutputType[P]>
        }
      >
    >


  export type passwordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwords"]>

  export type passwordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwords"]>

  export type passwordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    user_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwords"]>

  export type passwordsSelectScalar = {
    id?: boolean
    password?: boolean
    user_id?: boolean
  }

  export type passwordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "password" | "user_id", ExtArgs["result"]["passwords"]>
  export type passwordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type passwordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type passwordsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $passwordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "passwords"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      password: string
      user_id: string
    }, ExtArgs["result"]["passwords"]>
    composites: {}
  }

  type passwordsGetPayload<S extends boolean | null | undefined | passwordsDefaultArgs> = $Result.GetResult<Prisma.$passwordsPayload, S>

  type passwordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<passwordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordsCountAggregateInputType | true
    }

  export interface passwordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['passwords'], meta: { name: 'passwords' } }
    /**
     * Find zero or one Passwords that matches the filter.
     * @param {passwordsFindUniqueArgs} args - Arguments to find a Passwords
     * @example
     * // Get one Passwords
     * const passwords = await prisma.passwords.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends passwordsFindUniqueArgs>(args: SelectSubset<T, passwordsFindUniqueArgs<ExtArgs>>): Prisma__passwordsClient<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passwords that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {passwordsFindUniqueOrThrowArgs} args - Arguments to find a Passwords
     * @example
     * // Get one Passwords
     * const passwords = await prisma.passwords.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends passwordsFindUniqueOrThrowArgs>(args: SelectSubset<T, passwordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__passwordsClient<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordsFindFirstArgs} args - Arguments to find a Passwords
     * @example
     * // Get one Passwords
     * const passwords = await prisma.passwords.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends passwordsFindFirstArgs>(args?: SelectSubset<T, passwordsFindFirstArgs<ExtArgs>>): Prisma__passwordsClient<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passwords that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordsFindFirstOrThrowArgs} args - Arguments to find a Passwords
     * @example
     * // Get one Passwords
     * const passwords = await prisma.passwords.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends passwordsFindFirstOrThrowArgs>(args?: SelectSubset<T, passwordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__passwordsClient<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passwords
     * const passwords = await prisma.passwords.findMany()
     * 
     * // Get first 10 Passwords
     * const passwords = await prisma.passwords.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordsWithIdOnly = await prisma.passwords.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends passwordsFindManyArgs>(args?: SelectSubset<T, passwordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passwords.
     * @param {passwordsCreateArgs} args - Arguments to create a Passwords.
     * @example
     * // Create one Passwords
     * const Passwords = await prisma.passwords.create({
     *   data: {
     *     // ... data to create a Passwords
     *   }
     * })
     * 
     */
    create<T extends passwordsCreateArgs>(args: SelectSubset<T, passwordsCreateArgs<ExtArgs>>): Prisma__passwordsClient<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passwords.
     * @param {passwordsCreateManyArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const passwords = await prisma.passwords.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends passwordsCreateManyArgs>(args?: SelectSubset<T, passwordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passwords and returns the data saved in the database.
     * @param {passwordsCreateManyAndReturnArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const passwords = await prisma.passwords.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passwords and only return the `id`
     * const passwordsWithIdOnly = await prisma.passwords.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends passwordsCreateManyAndReturnArgs>(args?: SelectSubset<T, passwordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passwords.
     * @param {passwordsDeleteArgs} args - Arguments to delete one Passwords.
     * @example
     * // Delete one Passwords
     * const Passwords = await prisma.passwords.delete({
     *   where: {
     *     // ... filter to delete one Passwords
     *   }
     * })
     * 
     */
    delete<T extends passwordsDeleteArgs>(args: SelectSubset<T, passwordsDeleteArgs<ExtArgs>>): Prisma__passwordsClient<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passwords.
     * @param {passwordsUpdateArgs} args - Arguments to update one Passwords.
     * @example
     * // Update one Passwords
     * const passwords = await prisma.passwords.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends passwordsUpdateArgs>(args: SelectSubset<T, passwordsUpdateArgs<ExtArgs>>): Prisma__passwordsClient<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passwords.
     * @param {passwordsDeleteManyArgs} args - Arguments to filter Passwords to delete.
     * @example
     * // Delete a few Passwords
     * const { count } = await prisma.passwords.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends passwordsDeleteManyArgs>(args?: SelectSubset<T, passwordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passwords
     * const passwords = await prisma.passwords.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends passwordsUpdateManyArgs>(args: SelectSubset<T, passwordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords and returns the data updated in the database.
     * @param {passwordsUpdateManyAndReturnArgs} args - Arguments to update many Passwords.
     * @example
     * // Update many Passwords
     * const passwords = await prisma.passwords.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passwords and only return the `id`
     * const passwordsWithIdOnly = await prisma.passwords.updateManyAndReturn({
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
    updateManyAndReturn<T extends passwordsUpdateManyAndReturnArgs>(args: SelectSubset<T, passwordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passwords.
     * @param {passwordsUpsertArgs} args - Arguments to update or create a Passwords.
     * @example
     * // Update or create a Passwords
     * const passwords = await prisma.passwords.upsert({
     *   create: {
     *     // ... data to create a Passwords
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passwords we want to update
     *   }
     * })
     */
    upsert<T extends passwordsUpsertArgs>(args: SelectSubset<T, passwordsUpsertArgs<ExtArgs>>): Prisma__passwordsClient<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordsCountArgs} args - Arguments to filter Passwords to count.
     * @example
     * // Count the number of Passwords
     * const count = await prisma.passwords.count({
     *   where: {
     *     // ... the filter for the Passwords we want to count
     *   }
     * })
    **/
    count<T extends passwordsCountArgs>(
      args?: Subset<T, passwordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordsAggregateArgs>(args: Subset<T, PasswordsAggregateArgs>): Prisma.PrismaPromise<GetPasswordsAggregateType<T>>

    /**
     * Group by Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordsGroupByArgs} args - Group by arguments.
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
      T extends passwordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: passwordsGroupByArgs['orderBy'] }
        : { orderBy?: passwordsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, passwordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the passwords model
   */
  readonly fields: passwordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for passwords.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__passwordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the passwords model
   */
  interface passwordsFieldRefs {
    readonly id: FieldRef<"passwords", 'String'>
    readonly password: FieldRef<"passwords", 'String'>
    readonly user_id: FieldRef<"passwords", 'String'>
  }
    

  // Custom InputTypes
  /**
   * passwords findUnique
   */
  export type passwordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    /**
     * Filter, which passwords to fetch.
     */
    where: passwordsWhereUniqueInput
  }

  /**
   * passwords findUniqueOrThrow
   */
  export type passwordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    /**
     * Filter, which passwords to fetch.
     */
    where: passwordsWhereUniqueInput
  }

  /**
   * passwords findFirst
   */
  export type passwordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    /**
     * Filter, which passwords to fetch.
     */
    where?: passwordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwords to fetch.
     */
    orderBy?: passwordsOrderByWithRelationInput | passwordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwords.
     */
    cursor?: passwordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwords.
     */
    distinct?: PasswordsScalarFieldEnum | PasswordsScalarFieldEnum[]
  }

  /**
   * passwords findFirstOrThrow
   */
  export type passwordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    /**
     * Filter, which passwords to fetch.
     */
    where?: passwordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwords to fetch.
     */
    orderBy?: passwordsOrderByWithRelationInput | passwordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwords.
     */
    cursor?: passwordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwords.
     */
    distinct?: PasswordsScalarFieldEnum | PasswordsScalarFieldEnum[]
  }

  /**
   * passwords findMany
   */
  export type passwordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    /**
     * Filter, which passwords to fetch.
     */
    where?: passwordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwords to fetch.
     */
    orderBy?: passwordsOrderByWithRelationInput | passwordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing passwords.
     */
    cursor?: passwordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwords.
     */
    distinct?: PasswordsScalarFieldEnum | PasswordsScalarFieldEnum[]
  }

  /**
   * passwords create
   */
  export type passwordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    /**
     * The data needed to create a passwords.
     */
    data: XOR<passwordsCreateInput, passwordsUncheckedCreateInput>
  }

  /**
   * passwords createMany
   */
  export type passwordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many passwords.
     */
    data: passwordsCreateManyInput | passwordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * passwords createManyAndReturn
   */
  export type passwordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * The data used to create many passwords.
     */
    data: passwordsCreateManyInput | passwordsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * passwords update
   */
  export type passwordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    /**
     * The data needed to update a passwords.
     */
    data: XOR<passwordsUpdateInput, passwordsUncheckedUpdateInput>
    /**
     * Choose, which passwords to update.
     */
    where: passwordsWhereUniqueInput
  }

  /**
   * passwords updateMany
   */
  export type passwordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update passwords.
     */
    data: XOR<passwordsUpdateManyMutationInput, passwordsUncheckedUpdateManyInput>
    /**
     * Filter which passwords to update
     */
    where?: passwordsWhereInput
    /**
     * Limit how many passwords to update.
     */
    limit?: number
  }

  /**
   * passwords updateManyAndReturn
   */
  export type passwordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * The data used to update passwords.
     */
    data: XOR<passwordsUpdateManyMutationInput, passwordsUncheckedUpdateManyInput>
    /**
     * Filter which passwords to update
     */
    where?: passwordsWhereInput
    /**
     * Limit how many passwords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * passwords upsert
   */
  export type passwordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    /**
     * The filter to search for the passwords to update in case it exists.
     */
    where: passwordsWhereUniqueInput
    /**
     * In case the passwords found by the `where` argument doesn't exist, create a new passwords with this data.
     */
    create: XOR<passwordsCreateInput, passwordsUncheckedCreateInput>
    /**
     * In case the passwords was found with the provided `where` argument, update it with this data.
     */
    update: XOR<passwordsUpdateInput, passwordsUncheckedUpdateInput>
  }

  /**
   * passwords delete
   */
  export type passwordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    /**
     * Filter which passwords to delete.
     */
    where: passwordsWhereUniqueInput
  }

  /**
   * passwords deleteMany
   */
  export type passwordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passwords to delete
     */
    where?: passwordsWhereInput
    /**
     * Limit how many passwords to delete.
     */
    limit?: number
  }

  /**
   * passwords without action
   */
  export type passwordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    booking_id: string | null
    checkout_req_id: string | null
    number: string | null
    amount: Decimal | null
    mpesa_receipt: string | null
    status: $Enums.payment_transaction_status | null
    created_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    booking_id: string | null
    checkout_req_id: string | null
    number: string | null
    amount: Decimal | null
    mpesa_receipt: string | null
    status: $Enums.payment_transaction_status | null
    created_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    booking_id: number
    checkout_req_id: number
    number: number
    amount: number
    mpesa_receipt: number
    status: number
    created_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    booking_id?: true
    checkout_req_id?: true
    number?: true
    amount?: true
    mpesa_receipt?: true
    status?: true
    created_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    booking_id?: true
    checkout_req_id?: true
    number?: true
    amount?: true
    mpesa_receipt?: true
    status?: true
    created_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    booking_id?: true
    checkout_req_id?: true
    number?: true
    amount?: true
    mpesa_receipt?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    booking_id: string
    checkout_req_id: string | null
    number: string
    amount: Decimal
    mpesa_receipt: string | null
    status: $Enums.payment_transaction_status | null
    created_at: Date | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    checkout_req_id?: boolean
    number?: boolean
    amount?: boolean
    mpesa_receipt?: boolean
    status?: boolean
    created_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    checkout_req_id?: boolean
    number?: boolean
    amount?: boolean
    mpesa_receipt?: boolean
    status?: boolean
    created_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    checkout_req_id?: boolean
    number?: boolean
    amount?: boolean
    mpesa_receipt?: boolean
    status?: boolean
    created_at?: boolean
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    booking_id?: boolean
    checkout_req_id?: boolean
    number?: boolean
    amount?: boolean
    mpesa_receipt?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "checkout_req_id" | "number" | "amount" | "mpesa_receipt" | "status" | "created_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | bookingsDefaultArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      booking_id: string
      checkout_req_id: string | null
      number: string
      amount: Prisma.Decimal
      mpesa_receipt: string | null
      status: $Enums.payment_transaction_status | null
      created_at: Date | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
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
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends bookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingsDefaultArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'String'>
    readonly booking_id: FieldRef<"payments", 'String'>
    readonly checkout_req_id: FieldRef<"payments", 'String'>
    readonly number: FieldRef<"payments", 'String'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly mpesa_receipt: FieldRef<"payments", 'String'>
    readonly status: FieldRef<"payments", 'payment_transaction_status'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    second_name: string | null
    email: string | null
    role: $Enums.Role | null
    dob: Date | null
    created_at: Date | null
    deleted_at: Date | null
    otp_hash: string | null
    otp_expires_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    second_name: string | null
    email: string | null
    role: $Enums.Role | null
    dob: Date | null
    created_at: Date | null
    deleted_at: Date | null
    otp_hash: string | null
    otp_expires_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    second_name: number
    email: number
    role: number
    dob: number
    created_at: number
    deleted_at: number
    otp_hash: number
    otp_expires_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    second_name?: true
    email?: true
    role?: true
    dob?: true
    created_at?: true
    deleted_at?: true
    otp_hash?: true
    otp_expires_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    second_name?: true
    email?: true
    role?: true
    dob?: true
    created_at?: true
    deleted_at?: true
    otp_hash?: true
    otp_expires_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    second_name?: true
    email?: true
    role?: true
    dob?: true
    created_at?: true
    deleted_at?: true
    otp_hash?: true
    otp_expires_at?: true
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
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    first_name: string
    second_name: string
    email: string
    role: $Enums.Role
    dob: Date
    created_at: Date
    deleted_at: Date | null
    otp_hash: string | null
    otp_expires_at: Date | null
    _count: UsersCountAggregateOutputType | null
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
    first_name?: boolean
    second_name?: boolean
    email?: boolean
    role?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
    otp_hash?: boolean
    otp_expires_at?: boolean
    bookings_bookings_lawyer_idTousers?: boolean | users$bookings_bookings_lawyer_idTousersArgs<ExtArgs>
    bookings_bookings_user_idTousers?: boolean | users$bookings_bookings_user_idTousersArgs<ExtArgs>
    chatbots?: boolean | users$chatbotsArgs<ExtArgs>
    documents?: boolean | users$documentsArgs<ExtArgs>
    lawyer_applications?: boolean | users$lawyer_applicationsArgs<ExtArgs>
    passwords?: boolean | users$passwordsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    email?: boolean
    role?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
    otp_hash?: boolean
    otp_expires_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    email?: boolean
    role?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
    otp_hash?: boolean
    otp_expires_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    email?: boolean
    role?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
    otp_hash?: boolean
    otp_expires_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "second_name" | "email" | "role" | "dob" | "created_at" | "deleted_at" | "otp_hash" | "otp_expires_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings_bookings_lawyer_idTousers?: boolean | users$bookings_bookings_lawyer_idTousersArgs<ExtArgs>
    bookings_bookings_user_idTousers?: boolean | users$bookings_bookings_user_idTousersArgs<ExtArgs>
    chatbots?: boolean | users$chatbotsArgs<ExtArgs>
    documents?: boolean | users$documentsArgs<ExtArgs>
    lawyer_applications?: boolean | users$lawyer_applicationsArgs<ExtArgs>
    passwords?: boolean | users$passwordsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      bookings_bookings_lawyer_idTousers: Prisma.$bookingsPayload<ExtArgs>[]
      bookings_bookings_user_idTousers: Prisma.$bookingsPayload<ExtArgs>[]
      chatbots: Prisma.$chatbotsPayload<ExtArgs>[]
      documents: Prisma.$documentsPayload<ExtArgs>[]
      lawyer_applications: Prisma.$lawyer_applicationsPayload<ExtArgs> | null
      passwords: Prisma.$passwordsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      second_name: string
      email: string
      role: $Enums.Role
      dob: Date
      created_at: Date
      deleted_at: Date | null
      otp_hash: string | null
      otp_expires_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings_bookings_lawyer_idTousers<T extends users$bookings_bookings_lawyer_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$bookings_bookings_lawyer_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings_bookings_user_idTousers<T extends users$bookings_bookings_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$bookings_bookings_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatbots<T extends users$chatbotsArgs<ExtArgs> = {}>(args?: Subset<T, users$chatbotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatbotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends users$documentsArgs<ExtArgs> = {}>(args?: Subset<T, users$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lawyer_applications<T extends users$lawyer_applicationsArgs<ExtArgs> = {}>(args?: Subset<T, users$lawyer_applicationsArgs<ExtArgs>>): Prisma__lawyer_applicationsClient<$Result.GetResult<Prisma.$lawyer_applicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    passwords<T extends users$passwordsArgs<ExtArgs> = {}>(args?: Subset<T, users$passwordsArgs<ExtArgs>>): Prisma__passwordsClient<$Result.GetResult<Prisma.$passwordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly second_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
    readonly dob: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
    readonly otp_hash: FieldRef<"users", 'String'>
    readonly otp_expires_at: FieldRef<"users", 'DateTime'>
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.bookings_bookings_lawyer_idTousers
   */
  export type users$bookings_bookings_lawyer_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * users.bookings_bookings_user_idTousers
   */
  export type users$bookings_bookings_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * users.chatbots
   */
  export type users$chatbotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatbots
     */
    select?: chatbotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatbots
     */
    omit?: chatbotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatbotsInclude<ExtArgs> | null
    where?: chatbotsWhereInput
    orderBy?: chatbotsOrderByWithRelationInput | chatbotsOrderByWithRelationInput[]
    cursor?: chatbotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatbotsScalarFieldEnum | ChatbotsScalarFieldEnum[]
  }

  /**
   * users.documents
   */
  export type users$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documents
     */
    omit?: documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    cursor?: documentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * users.lawyer_applications
   */
  export type users$lawyer_applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lawyer_applications
     */
    select?: lawyer_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lawyer_applications
     */
    omit?: lawyer_applicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lawyer_applicationsInclude<ExtArgs> | null
    where?: lawyer_applicationsWhereInput
  }

  /**
   * users.passwords
   */
  export type users$passwordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwords
     */
    select?: passwordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwords
     */
    omit?: passwordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordsInclude<ExtArgs> | null
    where?: passwordsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model pending_callbacks
   */

  export type AggregatePending_callbacks = {
    _count: Pending_callbacksCountAggregateOutputType | null
    _min: Pending_callbacksMinAggregateOutputType | null
    _max: Pending_callbacksMaxAggregateOutputType | null
  }

  export type Pending_callbacksMinAggregateOutputType = {
    id: string | null
    checkout_req_id: string | null
    created_at: Date | null
  }

  export type Pending_callbacksMaxAggregateOutputType = {
    id: string | null
    checkout_req_id: string | null
    created_at: Date | null
  }

  export type Pending_callbacksCountAggregateOutputType = {
    id: number
    checkout_req_id: number
    payload: number
    created_at: number
    _all: number
  }


  export type Pending_callbacksMinAggregateInputType = {
    id?: true
    checkout_req_id?: true
    created_at?: true
  }

  export type Pending_callbacksMaxAggregateInputType = {
    id?: true
    checkout_req_id?: true
    created_at?: true
  }

  export type Pending_callbacksCountAggregateInputType = {
    id?: true
    checkout_req_id?: true
    payload?: true
    created_at?: true
    _all?: true
  }

  export type Pending_callbacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pending_callbacks to aggregate.
     */
    where?: pending_callbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pending_callbacks to fetch.
     */
    orderBy?: pending_callbacksOrderByWithRelationInput | pending_callbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pending_callbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pending_callbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pending_callbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pending_callbacks
    **/
    _count?: true | Pending_callbacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pending_callbacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pending_callbacksMaxAggregateInputType
  }

  export type GetPending_callbacksAggregateType<T extends Pending_callbacksAggregateArgs> = {
        [P in keyof T & keyof AggregatePending_callbacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePending_callbacks[P]>
      : GetScalarType<T[P], AggregatePending_callbacks[P]>
  }




  export type pending_callbacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pending_callbacksWhereInput
    orderBy?: pending_callbacksOrderByWithAggregationInput | pending_callbacksOrderByWithAggregationInput[]
    by: Pending_callbacksScalarFieldEnum[] | Pending_callbacksScalarFieldEnum
    having?: pending_callbacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pending_callbacksCountAggregateInputType | true
    _min?: Pending_callbacksMinAggregateInputType
    _max?: Pending_callbacksMaxAggregateInputType
  }

  export type Pending_callbacksGroupByOutputType = {
    id: string
    checkout_req_id: string
    payload: JsonValue
    created_at: Date
    _count: Pending_callbacksCountAggregateOutputType | null
    _min: Pending_callbacksMinAggregateOutputType | null
    _max: Pending_callbacksMaxAggregateOutputType | null
  }

  type GetPending_callbacksGroupByPayload<T extends pending_callbacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pending_callbacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pending_callbacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pending_callbacksGroupByOutputType[P]>
            : GetScalarType<T[P], Pending_callbacksGroupByOutputType[P]>
        }
      >
    >


  export type pending_callbacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkout_req_id?: boolean
    payload?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["pending_callbacks"]>

  export type pending_callbacksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkout_req_id?: boolean
    payload?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["pending_callbacks"]>

  export type pending_callbacksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkout_req_id?: boolean
    payload?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["pending_callbacks"]>

  export type pending_callbacksSelectScalar = {
    id?: boolean
    checkout_req_id?: boolean
    payload?: boolean
    created_at?: boolean
  }

  export type pending_callbacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkout_req_id" | "payload" | "created_at", ExtArgs["result"]["pending_callbacks"]>

  export type $pending_callbacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pending_callbacks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checkout_req_id: string
      payload: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["pending_callbacks"]>
    composites: {}
  }

  type pending_callbacksGetPayload<S extends boolean | null | undefined | pending_callbacksDefaultArgs> = $Result.GetResult<Prisma.$pending_callbacksPayload, S>

  type pending_callbacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pending_callbacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pending_callbacksCountAggregateInputType | true
    }

  export interface pending_callbacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pending_callbacks'], meta: { name: 'pending_callbacks' } }
    /**
     * Find zero or one Pending_callbacks that matches the filter.
     * @param {pending_callbacksFindUniqueArgs} args - Arguments to find a Pending_callbacks
     * @example
     * // Get one Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pending_callbacksFindUniqueArgs>(args: SelectSubset<T, pending_callbacksFindUniqueArgs<ExtArgs>>): Prisma__pending_callbacksClient<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pending_callbacks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pending_callbacksFindUniqueOrThrowArgs} args - Arguments to find a Pending_callbacks
     * @example
     * // Get one Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pending_callbacksFindUniqueOrThrowArgs>(args: SelectSubset<T, pending_callbacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pending_callbacksClient<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pending_callbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_callbacksFindFirstArgs} args - Arguments to find a Pending_callbacks
     * @example
     * // Get one Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pending_callbacksFindFirstArgs>(args?: SelectSubset<T, pending_callbacksFindFirstArgs<ExtArgs>>): Prisma__pending_callbacksClient<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pending_callbacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_callbacksFindFirstOrThrowArgs} args - Arguments to find a Pending_callbacks
     * @example
     * // Get one Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pending_callbacksFindFirstOrThrowArgs>(args?: SelectSubset<T, pending_callbacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__pending_callbacksClient<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pending_callbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_callbacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.findMany()
     * 
     * // Get first 10 Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pending_callbacksWithIdOnly = await prisma.pending_callbacks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pending_callbacksFindManyArgs>(args?: SelectSubset<T, pending_callbacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pending_callbacks.
     * @param {pending_callbacksCreateArgs} args - Arguments to create a Pending_callbacks.
     * @example
     * // Create one Pending_callbacks
     * const Pending_callbacks = await prisma.pending_callbacks.create({
     *   data: {
     *     // ... data to create a Pending_callbacks
     *   }
     * })
     * 
     */
    create<T extends pending_callbacksCreateArgs>(args: SelectSubset<T, pending_callbacksCreateArgs<ExtArgs>>): Prisma__pending_callbacksClient<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pending_callbacks.
     * @param {pending_callbacksCreateManyArgs} args - Arguments to create many Pending_callbacks.
     * @example
     * // Create many Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pending_callbacksCreateManyArgs>(args?: SelectSubset<T, pending_callbacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pending_callbacks and returns the data saved in the database.
     * @param {pending_callbacksCreateManyAndReturnArgs} args - Arguments to create many Pending_callbacks.
     * @example
     * // Create many Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pending_callbacks and only return the `id`
     * const pending_callbacksWithIdOnly = await prisma.pending_callbacks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pending_callbacksCreateManyAndReturnArgs>(args?: SelectSubset<T, pending_callbacksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pending_callbacks.
     * @param {pending_callbacksDeleteArgs} args - Arguments to delete one Pending_callbacks.
     * @example
     * // Delete one Pending_callbacks
     * const Pending_callbacks = await prisma.pending_callbacks.delete({
     *   where: {
     *     // ... filter to delete one Pending_callbacks
     *   }
     * })
     * 
     */
    delete<T extends pending_callbacksDeleteArgs>(args: SelectSubset<T, pending_callbacksDeleteArgs<ExtArgs>>): Prisma__pending_callbacksClient<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pending_callbacks.
     * @param {pending_callbacksUpdateArgs} args - Arguments to update one Pending_callbacks.
     * @example
     * // Update one Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pending_callbacksUpdateArgs>(args: SelectSubset<T, pending_callbacksUpdateArgs<ExtArgs>>): Prisma__pending_callbacksClient<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pending_callbacks.
     * @param {pending_callbacksDeleteManyArgs} args - Arguments to filter Pending_callbacks to delete.
     * @example
     * // Delete a few Pending_callbacks
     * const { count } = await prisma.pending_callbacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pending_callbacksDeleteManyArgs>(args?: SelectSubset<T, pending_callbacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pending_callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_callbacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pending_callbacksUpdateManyArgs>(args: SelectSubset<T, pending_callbacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pending_callbacks and returns the data updated in the database.
     * @param {pending_callbacksUpdateManyAndReturnArgs} args - Arguments to update many Pending_callbacks.
     * @example
     * // Update many Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pending_callbacks and only return the `id`
     * const pending_callbacksWithIdOnly = await prisma.pending_callbacks.updateManyAndReturn({
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
    updateManyAndReturn<T extends pending_callbacksUpdateManyAndReturnArgs>(args: SelectSubset<T, pending_callbacksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pending_callbacks.
     * @param {pending_callbacksUpsertArgs} args - Arguments to update or create a Pending_callbacks.
     * @example
     * // Update or create a Pending_callbacks
     * const pending_callbacks = await prisma.pending_callbacks.upsert({
     *   create: {
     *     // ... data to create a Pending_callbacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pending_callbacks we want to update
     *   }
     * })
     */
    upsert<T extends pending_callbacksUpsertArgs>(args: SelectSubset<T, pending_callbacksUpsertArgs<ExtArgs>>): Prisma__pending_callbacksClient<$Result.GetResult<Prisma.$pending_callbacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pending_callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_callbacksCountArgs} args - Arguments to filter Pending_callbacks to count.
     * @example
     * // Count the number of Pending_callbacks
     * const count = await prisma.pending_callbacks.count({
     *   where: {
     *     // ... the filter for the Pending_callbacks we want to count
     *   }
     * })
    **/
    count<T extends pending_callbacksCountArgs>(
      args?: Subset<T, pending_callbacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pending_callbacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pending_callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_callbacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pending_callbacksAggregateArgs>(args: Subset<T, Pending_callbacksAggregateArgs>): Prisma.PrismaPromise<GetPending_callbacksAggregateType<T>>

    /**
     * Group by Pending_callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pending_callbacksGroupByArgs} args - Group by arguments.
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
      T extends pending_callbacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pending_callbacksGroupByArgs['orderBy'] }
        : { orderBy?: pending_callbacksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pending_callbacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPending_callbacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pending_callbacks model
   */
  readonly fields: pending_callbacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pending_callbacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pending_callbacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the pending_callbacks model
   */
  interface pending_callbacksFieldRefs {
    readonly id: FieldRef<"pending_callbacks", 'String'>
    readonly checkout_req_id: FieldRef<"pending_callbacks", 'String'>
    readonly payload: FieldRef<"pending_callbacks", 'Json'>
    readonly created_at: FieldRef<"pending_callbacks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pending_callbacks findUnique
   */
  export type pending_callbacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * Filter, which pending_callbacks to fetch.
     */
    where: pending_callbacksWhereUniqueInput
  }

  /**
   * pending_callbacks findUniqueOrThrow
   */
  export type pending_callbacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * Filter, which pending_callbacks to fetch.
     */
    where: pending_callbacksWhereUniqueInput
  }

  /**
   * pending_callbacks findFirst
   */
  export type pending_callbacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * Filter, which pending_callbacks to fetch.
     */
    where?: pending_callbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pending_callbacks to fetch.
     */
    orderBy?: pending_callbacksOrderByWithRelationInput | pending_callbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pending_callbacks.
     */
    cursor?: pending_callbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pending_callbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pending_callbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pending_callbacks.
     */
    distinct?: Pending_callbacksScalarFieldEnum | Pending_callbacksScalarFieldEnum[]
  }

  /**
   * pending_callbacks findFirstOrThrow
   */
  export type pending_callbacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * Filter, which pending_callbacks to fetch.
     */
    where?: pending_callbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pending_callbacks to fetch.
     */
    orderBy?: pending_callbacksOrderByWithRelationInput | pending_callbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pending_callbacks.
     */
    cursor?: pending_callbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pending_callbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pending_callbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pending_callbacks.
     */
    distinct?: Pending_callbacksScalarFieldEnum | Pending_callbacksScalarFieldEnum[]
  }

  /**
   * pending_callbacks findMany
   */
  export type pending_callbacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * Filter, which pending_callbacks to fetch.
     */
    where?: pending_callbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pending_callbacks to fetch.
     */
    orderBy?: pending_callbacksOrderByWithRelationInput | pending_callbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pending_callbacks.
     */
    cursor?: pending_callbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pending_callbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pending_callbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pending_callbacks.
     */
    distinct?: Pending_callbacksScalarFieldEnum | Pending_callbacksScalarFieldEnum[]
  }

  /**
   * pending_callbacks create
   */
  export type pending_callbacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * The data needed to create a pending_callbacks.
     */
    data: XOR<pending_callbacksCreateInput, pending_callbacksUncheckedCreateInput>
  }

  /**
   * pending_callbacks createMany
   */
  export type pending_callbacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pending_callbacks.
     */
    data: pending_callbacksCreateManyInput | pending_callbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pending_callbacks createManyAndReturn
   */
  export type pending_callbacksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * The data used to create many pending_callbacks.
     */
    data: pending_callbacksCreateManyInput | pending_callbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pending_callbacks update
   */
  export type pending_callbacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * The data needed to update a pending_callbacks.
     */
    data: XOR<pending_callbacksUpdateInput, pending_callbacksUncheckedUpdateInput>
    /**
     * Choose, which pending_callbacks to update.
     */
    where: pending_callbacksWhereUniqueInput
  }

  /**
   * pending_callbacks updateMany
   */
  export type pending_callbacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pending_callbacks.
     */
    data: XOR<pending_callbacksUpdateManyMutationInput, pending_callbacksUncheckedUpdateManyInput>
    /**
     * Filter which pending_callbacks to update
     */
    where?: pending_callbacksWhereInput
    /**
     * Limit how many pending_callbacks to update.
     */
    limit?: number
  }

  /**
   * pending_callbacks updateManyAndReturn
   */
  export type pending_callbacksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * The data used to update pending_callbacks.
     */
    data: XOR<pending_callbacksUpdateManyMutationInput, pending_callbacksUncheckedUpdateManyInput>
    /**
     * Filter which pending_callbacks to update
     */
    where?: pending_callbacksWhereInput
    /**
     * Limit how many pending_callbacks to update.
     */
    limit?: number
  }

  /**
   * pending_callbacks upsert
   */
  export type pending_callbacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * The filter to search for the pending_callbacks to update in case it exists.
     */
    where: pending_callbacksWhereUniqueInput
    /**
     * In case the pending_callbacks found by the `where` argument doesn't exist, create a new pending_callbacks with this data.
     */
    create: XOR<pending_callbacksCreateInput, pending_callbacksUncheckedCreateInput>
    /**
     * In case the pending_callbacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pending_callbacksUpdateInput, pending_callbacksUncheckedUpdateInput>
  }

  /**
   * pending_callbacks delete
   */
  export type pending_callbacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
    /**
     * Filter which pending_callbacks to delete.
     */
    where: pending_callbacksWhereUniqueInput
  }

  /**
   * pending_callbacks deleteMany
   */
  export type pending_callbacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pending_callbacks to delete
     */
    where?: pending_callbacksWhereInput
    /**
     * Limit how many pending_callbacks to delete.
     */
    limit?: number
  }

  /**
   * pending_callbacks without action
   */
  export type pending_callbacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending_callbacks
     */
    select?: pending_callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pending_callbacks
     */
    omit?: pending_callbacksOmit<ExtArgs> | null
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


  export const BookingsScalarFieldEnum: {
    id: 'id',
    date: 'date',
    payment_status: 'payment_status',
    notes: 'notes',
    booking_status: 'booking_status',
    user_id: 'user_id',
    lawyer_id: 'lawyer_id'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const ChatbotsScalarFieldEnum: {
    id: 'id',
    category: 'category',
    chat: 'chat',
    ai_response: 'ai_response',
    user_id: 'user_id'
  };

  export type ChatbotsScalarFieldEnum = (typeof ChatbotsScalarFieldEnum)[keyof typeof ChatbotsScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    id: 'id',
    file_url: 'file_url',
    uploaded_at: 'uploaded_at',
    user_id: 'user_id',
    booking_id: 'booking_id'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const Lawyer_applicationsScalarFieldEnum: {
    id: 'id',
    file_url: 'file_url',
    lsk_number: 'lsk_number',
    created_at: 'created_at',
    user_id: 'user_id'
  };

  export type Lawyer_applicationsScalarFieldEnum = (typeof Lawyer_applicationsScalarFieldEnum)[keyof typeof Lawyer_applicationsScalarFieldEnum]


  export const Lawyer_profilesScalarFieldEnum: {
    id: 'id',
    category: 'category',
    phone_number: 'phone_number',
    description: 'description',
    created_at: 'created_at',
    experience: 'experience',
    consultation_fee: 'consultation_fee',
    is_active: 'is_active',
    lawyer_application_id: 'lawyer_application_id'
  };

  export type Lawyer_profilesScalarFieldEnum = (typeof Lawyer_profilesScalarFieldEnum)[keyof typeof Lawyer_profilesScalarFieldEnum]


  export const PasswordsScalarFieldEnum: {
    id: 'id',
    password: 'password',
    user_id: 'user_id'
  };

  export type PasswordsScalarFieldEnum = (typeof PasswordsScalarFieldEnum)[keyof typeof PasswordsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    checkout_req_id: 'checkout_req_id',
    number: 'number',
    amount: 'amount',
    mpesa_receipt: 'mpesa_receipt',
    status: 'status',
    created_at: 'created_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    second_name: 'second_name',
    email: 'email',
    role: 'role',
    dob: 'dob',
    created_at: 'created_at',
    deleted_at: 'deleted_at',
    otp_hash: 'otp_hash',
    otp_expires_at: 'otp_expires_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Pending_callbacksScalarFieldEnum: {
    id: 'id',
    checkout_req_id: 'checkout_req_id',
    payload: 'payload',
    created_at: 'created_at'
  };

  export type Pending_callbacksScalarFieldEnum = (typeof Pending_callbacksScalarFieldEnum)[keyof typeof Pending_callbacksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'payment_status'
   */
  export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>
    


  /**
   * Reference to a field of type 'payment_status[]'
   */
  export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>
    


  /**
   * Reference to a field of type 'booking_status'
   */
  export type Enumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status'>
    


  /**
   * Reference to a field of type 'booking_status[]'
   */
  export type ListEnumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'payment_transaction_status'
   */
  export type Enumpayment_transaction_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_transaction_status'>
    


  /**
   * Reference to a field of type 'payment_transaction_status[]'
   */
  export type ListEnumpayment_transaction_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_transaction_status[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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


  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    id?: UuidFilter<"bookings"> | string
    date?: DateTimeFilter<"bookings"> | Date | string
    payment_status?: Enumpayment_statusFilter<"bookings"> | $Enums.payment_status
    notes?: StringNullableFilter<"bookings"> | string | null
    booking_status?: Enumbooking_statusFilter<"bookings"> | $Enums.booking_status
    user_id?: UuidFilter<"bookings"> | string
    lawyer_id?: UuidFilter<"bookings"> | string
    users_bookings_lawyer_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_bookings_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    documents?: DocumentsListRelationFilter
    payments?: XOR<PaymentsNullableScalarRelationFilter, paymentsWhereInput> | null
  }

  export type bookingsOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    payment_status?: SortOrder
    notes?: SortOrderInput | SortOrder
    booking_status?: SortOrder
    user_id?: SortOrder
    lawyer_id?: SortOrder
    users_bookings_lawyer_idTousers?: usersOrderByWithRelationInput
    users_bookings_user_idTousers?: usersOrderByWithRelationInput
    documents?: documentsOrderByRelationAggregateInput
    payments?: paymentsOrderByWithRelationInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    date?: DateTimeFilter<"bookings"> | Date | string
    payment_status?: Enumpayment_statusFilter<"bookings"> | $Enums.payment_status
    notes?: StringNullableFilter<"bookings"> | string | null
    booking_status?: Enumbooking_statusFilter<"bookings"> | $Enums.booking_status
    user_id?: UuidFilter<"bookings"> | string
    lawyer_id?: UuidFilter<"bookings"> | string
    users_bookings_lawyer_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_bookings_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    documents?: DocumentsListRelationFilter
    payments?: XOR<PaymentsNullableScalarRelationFilter, paymentsWhereInput> | null
  }, "id">

  export type bookingsOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    payment_status?: SortOrder
    notes?: SortOrderInput | SortOrder
    booking_status?: SortOrder
    user_id?: SortOrder
    lawyer_id?: SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"bookings"> | string
    date?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    payment_status?: Enumpayment_statusWithAggregatesFilter<"bookings"> | $Enums.payment_status
    notes?: StringNullableWithAggregatesFilter<"bookings"> | string | null
    booking_status?: Enumbooking_statusWithAggregatesFilter<"bookings"> | $Enums.booking_status
    user_id?: UuidWithAggregatesFilter<"bookings"> | string
    lawyer_id?: UuidWithAggregatesFilter<"bookings"> | string
  }

  export type chatbotsWhereInput = {
    AND?: chatbotsWhereInput | chatbotsWhereInput[]
    OR?: chatbotsWhereInput[]
    NOT?: chatbotsWhereInput | chatbotsWhereInput[]
    id?: UuidFilter<"chatbots"> | string
    category?: StringFilter<"chatbots"> | string
    chat?: StringFilter<"chatbots"> | string
    ai_response?: StringFilter<"chatbots"> | string
    user_id?: UuidFilter<"chatbots"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type chatbotsOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    chat?: SortOrder
    ai_response?: SortOrder
    user_id?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type chatbotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: chatbotsWhereInput | chatbotsWhereInput[]
    OR?: chatbotsWhereInput[]
    NOT?: chatbotsWhereInput | chatbotsWhereInput[]
    category?: StringFilter<"chatbots"> | string
    chat?: StringFilter<"chatbots"> | string
    ai_response?: StringFilter<"chatbots"> | string
    user_id?: UuidFilter<"chatbots"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type chatbotsOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    chat?: SortOrder
    ai_response?: SortOrder
    user_id?: SortOrder
    _count?: chatbotsCountOrderByAggregateInput
    _max?: chatbotsMaxOrderByAggregateInput
    _min?: chatbotsMinOrderByAggregateInput
  }

  export type chatbotsScalarWhereWithAggregatesInput = {
    AND?: chatbotsScalarWhereWithAggregatesInput | chatbotsScalarWhereWithAggregatesInput[]
    OR?: chatbotsScalarWhereWithAggregatesInput[]
    NOT?: chatbotsScalarWhereWithAggregatesInput | chatbotsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"chatbots"> | string
    category?: StringWithAggregatesFilter<"chatbots"> | string
    chat?: StringWithAggregatesFilter<"chatbots"> | string
    ai_response?: StringWithAggregatesFilter<"chatbots"> | string
    user_id?: UuidWithAggregatesFilter<"chatbots"> | string
  }

  export type documentsWhereInput = {
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    id?: UuidFilter<"documents"> | string
    file_url?: StringFilter<"documents"> | string
    uploaded_at?: DateTimeFilter<"documents"> | Date | string
    user_id?: UuidFilter<"documents"> | string
    booking_id?: UuidFilter<"documents"> | string
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type documentsOrderByWithRelationInput = {
    id?: SortOrder
    file_url?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrder
    booking_id?: SortOrder
    bookings?: bookingsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type documentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    file_url?: StringFilter<"documents"> | string
    uploaded_at?: DateTimeFilter<"documents"> | Date | string
    user_id?: UuidFilter<"documents"> | string
    booking_id?: UuidFilter<"documents"> | string
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type documentsOrderByWithAggregationInput = {
    id?: SortOrder
    file_url?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrder
    booking_id?: SortOrder
    _count?: documentsCountOrderByAggregateInput
    _max?: documentsMaxOrderByAggregateInput
    _min?: documentsMinOrderByAggregateInput
  }

  export type documentsScalarWhereWithAggregatesInput = {
    AND?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    OR?: documentsScalarWhereWithAggregatesInput[]
    NOT?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"documents"> | string
    file_url?: StringWithAggregatesFilter<"documents"> | string
    uploaded_at?: DateTimeWithAggregatesFilter<"documents"> | Date | string
    user_id?: UuidWithAggregatesFilter<"documents"> | string
    booking_id?: UuidWithAggregatesFilter<"documents"> | string
  }

  export type lawyer_applicationsWhereInput = {
    AND?: lawyer_applicationsWhereInput | lawyer_applicationsWhereInput[]
    OR?: lawyer_applicationsWhereInput[]
    NOT?: lawyer_applicationsWhereInput | lawyer_applicationsWhereInput[]
    id?: UuidFilter<"lawyer_applications"> | string
    file_url?: StringFilter<"lawyer_applications"> | string
    lsk_number?: StringFilter<"lawyer_applications"> | string
    created_at?: DateTimeFilter<"lawyer_applications"> | Date | string
    user_id?: UuidFilter<"lawyer_applications"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    lawyer_profiles?: XOR<Lawyer_profilesNullableScalarRelationFilter, lawyer_profilesWhereInput> | null
  }

  export type lawyer_applicationsOrderByWithRelationInput = {
    id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    users?: usersOrderByWithRelationInput
    lawyer_profiles?: lawyer_profilesOrderByWithRelationInput
  }

  export type lawyer_applicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: lawyer_applicationsWhereInput | lawyer_applicationsWhereInput[]
    OR?: lawyer_applicationsWhereInput[]
    NOT?: lawyer_applicationsWhereInput | lawyer_applicationsWhereInput[]
    file_url?: StringFilter<"lawyer_applications"> | string
    lsk_number?: StringFilter<"lawyer_applications"> | string
    created_at?: DateTimeFilter<"lawyer_applications"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    lawyer_profiles?: XOR<Lawyer_profilesNullableScalarRelationFilter, lawyer_profilesWhereInput> | null
  }, "id" | "user_id">

  export type lawyer_applicationsOrderByWithAggregationInput = {
    id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    _count?: lawyer_applicationsCountOrderByAggregateInput
    _max?: lawyer_applicationsMaxOrderByAggregateInput
    _min?: lawyer_applicationsMinOrderByAggregateInput
  }

  export type lawyer_applicationsScalarWhereWithAggregatesInput = {
    AND?: lawyer_applicationsScalarWhereWithAggregatesInput | lawyer_applicationsScalarWhereWithAggregatesInput[]
    OR?: lawyer_applicationsScalarWhereWithAggregatesInput[]
    NOT?: lawyer_applicationsScalarWhereWithAggregatesInput | lawyer_applicationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"lawyer_applications"> | string
    file_url?: StringWithAggregatesFilter<"lawyer_applications"> | string
    lsk_number?: StringWithAggregatesFilter<"lawyer_applications"> | string
    created_at?: DateTimeWithAggregatesFilter<"lawyer_applications"> | Date | string
    user_id?: UuidWithAggregatesFilter<"lawyer_applications"> | string
  }

  export type lawyer_profilesWhereInput = {
    AND?: lawyer_profilesWhereInput | lawyer_profilesWhereInput[]
    OR?: lawyer_profilesWhereInput[]
    NOT?: lawyer_profilesWhereInput | lawyer_profilesWhereInput[]
    id?: UuidFilter<"lawyer_profiles"> | string
    category?: StringFilter<"lawyer_profiles"> | string
    phone_number?: StringFilter<"lawyer_profiles"> | string
    description?: StringFilter<"lawyer_profiles"> | string
    created_at?: DateTimeFilter<"lawyer_profiles"> | Date | string
    experience?: IntFilter<"lawyer_profiles"> | number
    consultation_fee?: IntFilter<"lawyer_profiles"> | number
    is_active?: BoolFilter<"lawyer_profiles"> | boolean
    lawyer_application_id?: UuidFilter<"lawyer_profiles"> | string
    lawyer_applications?: XOR<Lawyer_applicationsScalarRelationFilter, lawyer_applicationsWhereInput>
  }

  export type lawyer_profilesOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
    lawyer_application_id?: SortOrder
    lawyer_applications?: lawyer_applicationsOrderByWithRelationInput
  }

  export type lawyer_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lawyer_application_id?: string
    AND?: lawyer_profilesWhereInput | lawyer_profilesWhereInput[]
    OR?: lawyer_profilesWhereInput[]
    NOT?: lawyer_profilesWhereInput | lawyer_profilesWhereInput[]
    category?: StringFilter<"lawyer_profiles"> | string
    phone_number?: StringFilter<"lawyer_profiles"> | string
    description?: StringFilter<"lawyer_profiles"> | string
    created_at?: DateTimeFilter<"lawyer_profiles"> | Date | string
    experience?: IntFilter<"lawyer_profiles"> | number
    consultation_fee?: IntFilter<"lawyer_profiles"> | number
    is_active?: BoolFilter<"lawyer_profiles"> | boolean
    lawyer_applications?: XOR<Lawyer_applicationsScalarRelationFilter, lawyer_applicationsWhereInput>
  }, "id" | "lawyer_application_id">

  export type lawyer_profilesOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
    lawyer_application_id?: SortOrder
    _count?: lawyer_profilesCountOrderByAggregateInput
    _avg?: lawyer_profilesAvgOrderByAggregateInput
    _max?: lawyer_profilesMaxOrderByAggregateInput
    _min?: lawyer_profilesMinOrderByAggregateInput
    _sum?: lawyer_profilesSumOrderByAggregateInput
  }

  export type lawyer_profilesScalarWhereWithAggregatesInput = {
    AND?: lawyer_profilesScalarWhereWithAggregatesInput | lawyer_profilesScalarWhereWithAggregatesInput[]
    OR?: lawyer_profilesScalarWhereWithAggregatesInput[]
    NOT?: lawyer_profilesScalarWhereWithAggregatesInput | lawyer_profilesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"lawyer_profiles"> | string
    category?: StringWithAggregatesFilter<"lawyer_profiles"> | string
    phone_number?: StringWithAggregatesFilter<"lawyer_profiles"> | string
    description?: StringWithAggregatesFilter<"lawyer_profiles"> | string
    created_at?: DateTimeWithAggregatesFilter<"lawyer_profiles"> | Date | string
    experience?: IntWithAggregatesFilter<"lawyer_profiles"> | number
    consultation_fee?: IntWithAggregatesFilter<"lawyer_profiles"> | number
    is_active?: BoolWithAggregatesFilter<"lawyer_profiles"> | boolean
    lawyer_application_id?: UuidWithAggregatesFilter<"lawyer_profiles"> | string
  }

  export type passwordsWhereInput = {
    AND?: passwordsWhereInput | passwordsWhereInput[]
    OR?: passwordsWhereInput[]
    NOT?: passwordsWhereInput | passwordsWhereInput[]
    id?: UuidFilter<"passwords"> | string
    password?: StringFilter<"passwords"> | string
    user_id?: UuidFilter<"passwords"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type passwordsOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type passwordsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: passwordsWhereInput | passwordsWhereInput[]
    OR?: passwordsWhereInput[]
    NOT?: passwordsWhereInput | passwordsWhereInput[]
    password?: StringFilter<"passwords"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type passwordsOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    _count?: passwordsCountOrderByAggregateInput
    _max?: passwordsMaxOrderByAggregateInput
    _min?: passwordsMinOrderByAggregateInput
  }

  export type passwordsScalarWhereWithAggregatesInput = {
    AND?: passwordsScalarWhereWithAggregatesInput | passwordsScalarWhereWithAggregatesInput[]
    OR?: passwordsScalarWhereWithAggregatesInput[]
    NOT?: passwordsScalarWhereWithAggregatesInput | passwordsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"passwords"> | string
    password?: StringWithAggregatesFilter<"passwords"> | string
    user_id?: UuidWithAggregatesFilter<"passwords"> | string
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: UuidFilter<"payments"> | string
    booking_id?: UuidFilter<"payments"> | string
    checkout_req_id?: StringNullableFilter<"payments"> | string | null
    number?: StringFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    mpesa_receipt?: StringNullableFilter<"payments"> | string | null
    status?: Enumpayment_transaction_statusNullableFilter<"payments"> | $Enums.payment_transaction_status | null
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    checkout_req_id?: SortOrderInput | SortOrder
    number?: SortOrder
    amount?: SortOrder
    mpesa_receipt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    booking_id?: string
    checkout_req_id?: string
    mpesa_receipt?: string
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    number?: StringFilter<"payments"> | string
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    status?: Enumpayment_transaction_statusNullableFilter<"payments"> | $Enums.payment_transaction_status | null
    created_at?: DateTimeNullableFilter<"payments"> | Date | string | null
    bookings?: XOR<BookingsScalarRelationFilter, bookingsWhereInput>
  }, "id" | "booking_id" | "checkout_req_id" | "mpesa_receipt">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    checkout_req_id?: SortOrderInput | SortOrder
    number?: SortOrder
    amount?: SortOrder
    mpesa_receipt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"payments"> | string
    booking_id?: UuidWithAggregatesFilter<"payments"> | string
    checkout_req_id?: StringNullableWithAggregatesFilter<"payments"> | string | null
    number?: StringWithAggregatesFilter<"payments"> | string
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    mpesa_receipt?: StringNullableWithAggregatesFilter<"payments"> | string | null
    status?: Enumpayment_transaction_statusNullableWithAggregatesFilter<"payments"> | $Enums.payment_transaction_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    second_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    dob?: DateTimeFilter<"users"> | Date | string
    created_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    otp_hash?: StringNullableFilter<"users"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"users"> | Date | string | null
    bookings_bookings_lawyer_idTousers?: BookingsListRelationFilter
    bookings_bookings_user_idTousers?: BookingsListRelationFilter
    chatbots?: ChatbotsListRelationFilter
    documents?: DocumentsListRelationFilter
    lawyer_applications?: XOR<Lawyer_applicationsNullableScalarRelationFilter, lawyer_applicationsWhereInput> | null
    passwords?: XOR<PasswordsNullableScalarRelationFilter, passwordsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    otp_hash?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    bookings_bookings_lawyer_idTousers?: bookingsOrderByRelationAggregateInput
    bookings_bookings_user_idTousers?: bookingsOrderByRelationAggregateInput
    chatbots?: chatbotsOrderByRelationAggregateInput
    documents?: documentsOrderByRelationAggregateInput
    lawyer_applications?: lawyer_applicationsOrderByWithRelationInput
    passwords?: passwordsOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    second_name?: StringFilter<"users"> | string
    role?: EnumRoleFilter<"users"> | $Enums.Role
    dob?: DateTimeFilter<"users"> | Date | string
    created_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    otp_hash?: StringNullableFilter<"users"> | string | null
    otp_expires_at?: DateTimeNullableFilter<"users"> | Date | string | null
    bookings_bookings_lawyer_idTousers?: BookingsListRelationFilter
    bookings_bookings_user_idTousers?: BookingsListRelationFilter
    chatbots?: ChatbotsListRelationFilter
    documents?: DocumentsListRelationFilter
    lawyer_applications?: XOR<Lawyer_applicationsNullableScalarRelationFilter, lawyer_applicationsWhereInput> | null
    passwords?: XOR<PasswordsNullableScalarRelationFilter, passwordsWhereInput> | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    otp_hash?: SortOrderInput | SortOrder
    otp_expires_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    second_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
    dob?: DateTimeWithAggregatesFilter<"users"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    otp_hash?: StringNullableWithAggregatesFilter<"users"> | string | null
    otp_expires_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type pending_callbacksWhereInput = {
    AND?: pending_callbacksWhereInput | pending_callbacksWhereInput[]
    OR?: pending_callbacksWhereInput[]
    NOT?: pending_callbacksWhereInput | pending_callbacksWhereInput[]
    id?: UuidFilter<"pending_callbacks"> | string
    checkout_req_id?: StringFilter<"pending_callbacks"> | string
    payload?: JsonFilter<"pending_callbacks">
    created_at?: DateTimeFilter<"pending_callbacks"> | Date | string
  }

  export type pending_callbacksOrderByWithRelationInput = {
    id?: SortOrder
    checkout_req_id?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
  }

  export type pending_callbacksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    checkout_req_id?: string
    AND?: pending_callbacksWhereInput | pending_callbacksWhereInput[]
    OR?: pending_callbacksWhereInput[]
    NOT?: pending_callbacksWhereInput | pending_callbacksWhereInput[]
    payload?: JsonFilter<"pending_callbacks">
    created_at?: DateTimeFilter<"pending_callbacks"> | Date | string
  }, "id" | "checkout_req_id">

  export type pending_callbacksOrderByWithAggregationInput = {
    id?: SortOrder
    checkout_req_id?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
    _count?: pending_callbacksCountOrderByAggregateInput
    _max?: pending_callbacksMaxOrderByAggregateInput
    _min?: pending_callbacksMinOrderByAggregateInput
  }

  export type pending_callbacksScalarWhereWithAggregatesInput = {
    AND?: pending_callbacksScalarWhereWithAggregatesInput | pending_callbacksScalarWhereWithAggregatesInput[]
    OR?: pending_callbacksScalarWhereWithAggregatesInput[]
    NOT?: pending_callbacksScalarWhereWithAggregatesInput | pending_callbacksScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pending_callbacks"> | string
    checkout_req_id?: StringWithAggregatesFilter<"pending_callbacks"> | string
    payload?: JsonWithAggregatesFilter<"pending_callbacks">
    created_at?: DateTimeWithAggregatesFilter<"pending_callbacks"> | Date | string
  }

  export type bookingsCreateInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    users_bookings_lawyer_idTousers: usersCreateNestedOneWithoutBookings_bookings_lawyer_idTousersInput
    users_bookings_user_idTousers: usersCreateNestedOneWithoutBookings_bookings_user_idTousersInput
    documents?: documentsCreateNestedManyWithoutBookingsInput
    payments?: paymentsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    user_id: string
    lawyer_id: string
    documents?: documentsUncheckedCreateNestedManyWithoutBookingsInput
    payments?: paymentsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    users_bookings_lawyer_idTousers?: usersUpdateOneRequiredWithoutBookings_bookings_lawyer_idTousersNestedInput
    users_bookings_user_idTousers?: usersUpdateOneRequiredWithoutBookings_bookings_user_idTousersNestedInput
    documents?: documentsUpdateManyWithoutBookingsNestedInput
    payments?: paymentsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    user_id?: StringFieldUpdateOperationsInput | string
    lawyer_id?: StringFieldUpdateOperationsInput | string
    documents?: documentsUncheckedUpdateManyWithoutBookingsNestedInput
    payments?: paymentsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsCreateManyInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    user_id: string
    lawyer_id: string
  }

  export type bookingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
  }

  export type bookingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    user_id?: StringFieldUpdateOperationsInput | string
    lawyer_id?: StringFieldUpdateOperationsInput | string
  }

  export type chatbotsCreateInput = {
    id?: string
    category: string
    chat: string
    ai_response: string
    users: usersCreateNestedOneWithoutChatbotsInput
  }

  export type chatbotsUncheckedCreateInput = {
    id?: string
    category: string
    chat: string
    ai_response: string
    user_id: string
  }

  export type chatbotsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    chat?: StringFieldUpdateOperationsInput | string
    ai_response?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutChatbotsNestedInput
  }

  export type chatbotsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    chat?: StringFieldUpdateOperationsInput | string
    ai_response?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type chatbotsCreateManyInput = {
    id?: string
    category: string
    chat: string
    ai_response: string
    user_id: string
  }

  export type chatbotsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    chat?: StringFieldUpdateOperationsInput | string
    ai_response?: StringFieldUpdateOperationsInput | string
  }

  export type chatbotsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    chat?: StringFieldUpdateOperationsInput | string
    ai_response?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type documentsCreateInput = {
    id?: string
    file_url: string
    uploaded_at?: Date | string
    bookings: bookingsCreateNestedOneWithoutDocumentsInput
    users: usersCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateInput = {
    id?: string
    file_url: string
    uploaded_at?: Date | string
    user_id: string
    booking_id: string
  }

  export type documentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateOneRequiredWithoutDocumentsNestedInput
    users?: usersUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
  }

  export type documentsCreateManyInput = {
    id?: string
    file_url: string
    uploaded_at?: Date | string
    user_id: string
    booking_id: string
  }

  export type documentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
  }

  export type lawyer_applicationsCreateInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutLawyer_applicationsInput
    lawyer_profiles?: lawyer_profilesCreateNestedOneWithoutLawyer_applicationsInput
  }

  export type lawyer_applicationsUncheckedCreateInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    user_id: string
    lawyer_profiles?: lawyer_profilesUncheckedCreateNestedOneWithoutLawyer_applicationsInput
  }

  export type lawyer_applicationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutLawyer_applicationsNestedInput
    lawyer_profiles?: lawyer_profilesUpdateOneWithoutLawyer_applicationsNestedInput
  }

  export type lawyer_applicationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    lawyer_profiles?: lawyer_profilesUncheckedUpdateOneWithoutLawyer_applicationsNestedInput
  }

  export type lawyer_applicationsCreateManyInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    user_id: string
  }

  export type lawyer_applicationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lawyer_applicationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type lawyer_profilesCreateInput = {
    id?: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
    lawyer_applications: lawyer_applicationsCreateNestedOneWithoutLawyer_profilesInput
  }

  export type lawyer_profilesUncheckedCreateInput = {
    id?: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
    lawyer_application_id: string
  }

  export type lawyer_profilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lawyer_applications?: lawyer_applicationsUpdateOneRequiredWithoutLawyer_profilesNestedInput
  }

  export type lawyer_profilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lawyer_application_id?: StringFieldUpdateOperationsInput | string
  }

  export type lawyer_profilesCreateManyInput = {
    id?: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
    lawyer_application_id: string
  }

  export type lawyer_profilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type lawyer_profilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lawyer_application_id?: StringFieldUpdateOperationsInput | string
  }

  export type passwordsCreateInput = {
    id?: string
    password: string
    users: usersCreateNestedOneWithoutPasswordsInput
  }

  export type passwordsUncheckedCreateInput = {
    id?: string
    password: string
    user_id: string
  }

  export type passwordsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutPasswordsNestedInput
  }

  export type passwordsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type passwordsCreateManyInput = {
    id?: string
    password: string
    user_id: string
  }

  export type passwordsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type passwordsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type paymentsCreateInput = {
    id?: string
    checkout_req_id?: string | null
    number: string
    amount: Decimal | DecimalJsLike | number | string
    mpesa_receipt?: string | null
    status?: $Enums.payment_transaction_status | null
    created_at?: Date | string | null
    bookings: bookingsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: string
    booking_id: string
    checkout_req_id?: string | null
    number: string
    amount: Decimal | DecimalJsLike | number | string
    mpesa_receipt?: string | null
    status?: $Enums.payment_transaction_status | null
    created_at?: Date | string | null
  }

  export type paymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mpesa_receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumpayment_transaction_statusFieldUpdateOperationsInput | $Enums.payment_transaction_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: bookingsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mpesa_receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumpayment_transaction_statusFieldUpdateOperationsInput | $Enums.payment_transaction_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsCreateManyInput = {
    id?: string
    booking_id: string
    checkout_req_id?: string | null
    number: string
    amount: Decimal | DecimalJsLike | number | string
    mpesa_receipt?: string | null
    status?: $Enums.payment_transaction_status | null
    created_at?: Date | string | null
  }

  export type paymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mpesa_receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumpayment_transaction_statusFieldUpdateOperationsInput | $Enums.payment_transaction_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mpesa_receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumpayment_transaction_statusFieldUpdateOperationsInput | $Enums.payment_transaction_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsCreateNestedManyWithoutUsersInput
    documents?: documentsCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsCreateNestedOneWithoutUsersInput
    passwords?: passwordsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsUncheckedCreateNestedManyWithoutUsersInput
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsUncheckedCreateNestedOneWithoutUsersInput
    passwords?: passwordsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUpdateManyWithoutUsersNestedInput
    documents?: documentsUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUncheckedUpdateManyWithoutUsersNestedInput
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUncheckedUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pending_callbacksCreateInput = {
    id?: string
    checkout_req_id: string
    payload: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type pending_callbacksUncheckedCreateInput = {
    id?: string
    checkout_req_id: string
    payload: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type pending_callbacksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pending_callbacksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pending_callbacksCreateManyInput = {
    id?: string
    checkout_req_id: string
    payload: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type pending_callbacksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pending_callbacksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type Enumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
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

  export type Enumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type DocumentsListRelationFilter = {
    every?: documentsWhereInput
    some?: documentsWhereInput
    none?: documentsWhereInput
  }

  export type PaymentsNullableScalarRelationFilter = {
    is?: paymentsWhereInput | null
    isNot?: paymentsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type documentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookingsCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    payment_status?: SortOrder
    notes?: SortOrder
    booking_status?: SortOrder
    user_id?: SortOrder
    lawyer_id?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    payment_status?: SortOrder
    notes?: SortOrder
    booking_status?: SortOrder
    user_id?: SortOrder
    lawyer_id?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    payment_status?: SortOrder
    notes?: SortOrder
    booking_status?: SortOrder
    user_id?: SortOrder
    lawyer_id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type Enumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
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

  export type Enumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbooking_statusFilter<$PrismaModel>
    _max?: NestedEnumbooking_statusFilter<$PrismaModel>
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

  export type chatbotsCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    chat?: SortOrder
    ai_response?: SortOrder
    user_id?: SortOrder
  }

  export type chatbotsMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    chat?: SortOrder
    ai_response?: SortOrder
    user_id?: SortOrder
  }

  export type chatbotsMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    chat?: SortOrder
    ai_response?: SortOrder
    user_id?: SortOrder
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

  export type BookingsScalarRelationFilter = {
    is?: bookingsWhereInput
    isNot?: bookingsWhereInput
  }

  export type documentsCountOrderByAggregateInput = {
    id?: SortOrder
    file_url?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrder
    booking_id?: SortOrder
  }

  export type documentsMaxOrderByAggregateInput = {
    id?: SortOrder
    file_url?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrder
    booking_id?: SortOrder
  }

  export type documentsMinOrderByAggregateInput = {
    id?: SortOrder
    file_url?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrder
    booking_id?: SortOrder
  }

  export type Lawyer_profilesNullableScalarRelationFilter = {
    is?: lawyer_profilesWhereInput | null
    isNot?: lawyer_profilesWhereInput | null
  }

  export type lawyer_applicationsCountOrderByAggregateInput = {
    id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type lawyer_applicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type lawyer_applicationsMinOrderByAggregateInput = {
    id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Lawyer_applicationsScalarRelationFilter = {
    is?: lawyer_applicationsWhereInput
    isNot?: lawyer_applicationsWhereInput
  }

  export type lawyer_profilesCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
    lawyer_application_id?: SortOrder
  }

  export type lawyer_profilesAvgOrderByAggregateInput = {
    experience?: SortOrder
    consultation_fee?: SortOrder
  }

  export type lawyer_profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
    lawyer_application_id?: SortOrder
  }

  export type lawyer_profilesMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
    lawyer_application_id?: SortOrder
  }

  export type lawyer_profilesSumOrderByAggregateInput = {
    experience?: SortOrder
    consultation_fee?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type passwordsCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
  }

  export type passwordsMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
  }

  export type passwordsMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Enumpayment_transaction_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_transaction_status | Enumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_transaction_status[] | ListEnumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_transaction_status[] | ListEnumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_transaction_statusNullableFilter<$PrismaModel> | $Enums.payment_transaction_status | null
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

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    checkout_req_id?: SortOrder
    number?: SortOrder
    amount?: SortOrder
    mpesa_receipt?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    checkout_req_id?: SortOrder
    number?: SortOrder
    amount?: SortOrder
    mpesa_receipt?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    checkout_req_id?: SortOrder
    number?: SortOrder
    amount?: SortOrder
    mpesa_receipt?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumpayment_transaction_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_transaction_status | Enumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_transaction_status[] | ListEnumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_transaction_status[] | ListEnumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_transaction_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_transaction_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_transaction_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_transaction_statusNullableFilter<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type ChatbotsListRelationFilter = {
    every?: chatbotsWhereInput
    some?: chatbotsWhereInput
    none?: chatbotsWhereInput
  }

  export type Lawyer_applicationsNullableScalarRelationFilter = {
    is?: lawyer_applicationsWhereInput | null
    isNot?: lawyer_applicationsWhereInput | null
  }

  export type PasswordsNullableScalarRelationFilter = {
    is?: passwordsWhereInput | null
    isNot?: passwordsWhereInput | null
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatbotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
    otp_hash?: SortOrder
    otp_expires_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
    otp_hash?: SortOrder
    otp_expires_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
    otp_hash?: SortOrder
    otp_expires_at?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type pending_callbacksCountOrderByAggregateInput = {
    id?: SortOrder
    checkout_req_id?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
  }

  export type pending_callbacksMaxOrderByAggregateInput = {
    id?: SortOrder
    checkout_req_id?: SortOrder
    created_at?: SortOrder
  }

  export type pending_callbacksMinOrderByAggregateInput = {
    id?: SortOrder
    checkout_req_id?: SortOrder
    created_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutBookings_bookings_lawyer_idTousersInput = {
    create?: XOR<usersCreateWithoutBookings_bookings_lawyer_idTousersInput, usersUncheckedCreateWithoutBookings_bookings_lawyer_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookings_bookings_lawyer_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutBookings_bookings_user_idTousersInput = {
    create?: XOR<usersCreateWithoutBookings_bookings_user_idTousersInput, usersUncheckedCreateWithoutBookings_bookings_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookings_bookings_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type documentsCreateNestedManyWithoutBookingsInput = {
    create?: XOR<documentsCreateWithoutBookingsInput, documentsUncheckedCreateWithoutBookingsInput> | documentsCreateWithoutBookingsInput[] | documentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutBookingsInput | documentsCreateOrConnectWithoutBookingsInput[]
    createMany?: documentsCreateManyBookingsInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type paymentsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingsInput
    connect?: paymentsWhereUniqueInput
  }

  export type documentsUncheckedCreateNestedManyWithoutBookingsInput = {
    create?: XOR<documentsCreateWithoutBookingsInput, documentsUncheckedCreateWithoutBookingsInput> | documentsCreateWithoutBookingsInput[] | documentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutBookingsInput | documentsCreateOrConnectWithoutBookingsInput[]
    createMany?: documentsCreateManyBookingsInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedOneWithoutBookingsInput = {
    create?: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingsInput
    connect?: paymentsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumbooking_statusFieldUpdateOperationsInput = {
    set?: $Enums.booking_status
  }

  export type usersUpdateOneRequiredWithoutBookings_bookings_lawyer_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutBookings_bookings_lawyer_idTousersInput, usersUncheckedCreateWithoutBookings_bookings_lawyer_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookings_bookings_lawyer_idTousersInput
    upsert?: usersUpsertWithoutBookings_bookings_lawyer_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBookings_bookings_lawyer_idTousersInput, usersUpdateWithoutBookings_bookings_lawyer_idTousersInput>, usersUncheckedUpdateWithoutBookings_bookings_lawyer_idTousersInput>
  }

  export type usersUpdateOneRequiredWithoutBookings_bookings_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutBookings_bookings_user_idTousersInput, usersUncheckedCreateWithoutBookings_bookings_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookings_bookings_user_idTousersInput
    upsert?: usersUpsertWithoutBookings_bookings_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBookings_bookings_user_idTousersInput, usersUpdateWithoutBookings_bookings_user_idTousersInput>, usersUncheckedUpdateWithoutBookings_bookings_user_idTousersInput>
  }

  export type documentsUpdateManyWithoutBookingsNestedInput = {
    create?: XOR<documentsCreateWithoutBookingsInput, documentsUncheckedCreateWithoutBookingsInput> | documentsCreateWithoutBookingsInput[] | documentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutBookingsInput | documentsCreateOrConnectWithoutBookingsInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutBookingsInput | documentsUpsertWithWhereUniqueWithoutBookingsInput[]
    createMany?: documentsCreateManyBookingsInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutBookingsInput | documentsUpdateWithWhereUniqueWithoutBookingsInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutBookingsInput | documentsUpdateManyWithWhereWithoutBookingsInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type paymentsUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingsInput
    upsert?: paymentsUpsertWithoutBookingsInput
    disconnect?: paymentsWhereInput | boolean
    delete?: paymentsWhereInput | boolean
    connect?: paymentsWhereUniqueInput
    update?: XOR<XOR<paymentsUpdateToOneWithWhereWithoutBookingsInput, paymentsUpdateWithoutBookingsInput>, paymentsUncheckedUpdateWithoutBookingsInput>
  }

  export type documentsUncheckedUpdateManyWithoutBookingsNestedInput = {
    create?: XOR<documentsCreateWithoutBookingsInput, documentsUncheckedCreateWithoutBookingsInput> | documentsCreateWithoutBookingsInput[] | documentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutBookingsInput | documentsCreateOrConnectWithoutBookingsInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutBookingsInput | documentsUpsertWithWhereUniqueWithoutBookingsInput[]
    createMany?: documentsCreateManyBookingsInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutBookingsInput | documentsUpdateWithWhereUniqueWithoutBookingsInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutBookingsInput | documentsUpdateManyWithWhereWithoutBookingsInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutBookingsInput
    upsert?: paymentsUpsertWithoutBookingsInput
    disconnect?: paymentsWhereInput | boolean
    delete?: paymentsWhereInput | boolean
    connect?: paymentsWhereUniqueInput
    update?: XOR<XOR<paymentsUpdateToOneWithWhereWithoutBookingsInput, paymentsUpdateWithoutBookingsInput>, paymentsUncheckedUpdateWithoutBookingsInput>
  }

  export type usersCreateNestedOneWithoutChatbotsInput = {
    create?: XOR<usersCreateWithoutChatbotsInput, usersUncheckedCreateWithoutChatbotsInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatbotsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutChatbotsNestedInput = {
    create?: XOR<usersCreateWithoutChatbotsInput, usersUncheckedCreateWithoutChatbotsInput>
    connectOrCreate?: usersCreateOrConnectWithoutChatbotsInput
    upsert?: usersUpsertWithoutChatbotsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChatbotsInput, usersUpdateWithoutChatbotsInput>, usersUncheckedUpdateWithoutChatbotsInput>
  }

  export type bookingsCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<bookingsCreateWithoutDocumentsInput, bookingsUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutDocumentsInput
    connect?: bookingsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<usersCreateWithoutDocumentsInput, usersUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDocumentsInput
    connect?: usersWhereUniqueInput
  }

  export type bookingsUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<bookingsCreateWithoutDocumentsInput, bookingsUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutDocumentsInput
    upsert?: bookingsUpsertWithoutDocumentsInput
    connect?: bookingsWhereUniqueInput
    update?: XOR<XOR<bookingsUpdateToOneWithWhereWithoutDocumentsInput, bookingsUpdateWithoutDocumentsInput>, bookingsUncheckedUpdateWithoutDocumentsInput>
  }

  export type usersUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<usersCreateWithoutDocumentsInput, usersUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDocumentsInput
    upsert?: usersUpsertWithoutDocumentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDocumentsInput, usersUpdateWithoutDocumentsInput>, usersUncheckedUpdateWithoutDocumentsInput>
  }

  export type usersCreateNestedOneWithoutLawyer_applicationsInput = {
    create?: XOR<usersCreateWithoutLawyer_applicationsInput, usersUncheckedCreateWithoutLawyer_applicationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLawyer_applicationsInput
    connect?: usersWhereUniqueInput
  }

  export type lawyer_profilesCreateNestedOneWithoutLawyer_applicationsInput = {
    create?: XOR<lawyer_profilesCreateWithoutLawyer_applicationsInput, lawyer_profilesUncheckedCreateWithoutLawyer_applicationsInput>
    connectOrCreate?: lawyer_profilesCreateOrConnectWithoutLawyer_applicationsInput
    connect?: lawyer_profilesWhereUniqueInput
  }

  export type lawyer_profilesUncheckedCreateNestedOneWithoutLawyer_applicationsInput = {
    create?: XOR<lawyer_profilesCreateWithoutLawyer_applicationsInput, lawyer_profilesUncheckedCreateWithoutLawyer_applicationsInput>
    connectOrCreate?: lawyer_profilesCreateOrConnectWithoutLawyer_applicationsInput
    connect?: lawyer_profilesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutLawyer_applicationsNestedInput = {
    create?: XOR<usersCreateWithoutLawyer_applicationsInput, usersUncheckedCreateWithoutLawyer_applicationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLawyer_applicationsInput
    upsert?: usersUpsertWithoutLawyer_applicationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLawyer_applicationsInput, usersUpdateWithoutLawyer_applicationsInput>, usersUncheckedUpdateWithoutLawyer_applicationsInput>
  }

  export type lawyer_profilesUpdateOneWithoutLawyer_applicationsNestedInput = {
    create?: XOR<lawyer_profilesCreateWithoutLawyer_applicationsInput, lawyer_profilesUncheckedCreateWithoutLawyer_applicationsInput>
    connectOrCreate?: lawyer_profilesCreateOrConnectWithoutLawyer_applicationsInput
    upsert?: lawyer_profilesUpsertWithoutLawyer_applicationsInput
    disconnect?: lawyer_profilesWhereInput | boolean
    delete?: lawyer_profilesWhereInput | boolean
    connect?: lawyer_profilesWhereUniqueInput
    update?: XOR<XOR<lawyer_profilesUpdateToOneWithWhereWithoutLawyer_applicationsInput, lawyer_profilesUpdateWithoutLawyer_applicationsInput>, lawyer_profilesUncheckedUpdateWithoutLawyer_applicationsInput>
  }

  export type lawyer_profilesUncheckedUpdateOneWithoutLawyer_applicationsNestedInput = {
    create?: XOR<lawyer_profilesCreateWithoutLawyer_applicationsInput, lawyer_profilesUncheckedCreateWithoutLawyer_applicationsInput>
    connectOrCreate?: lawyer_profilesCreateOrConnectWithoutLawyer_applicationsInput
    upsert?: lawyer_profilesUpsertWithoutLawyer_applicationsInput
    disconnect?: lawyer_profilesWhereInput | boolean
    delete?: lawyer_profilesWhereInput | boolean
    connect?: lawyer_profilesWhereUniqueInput
    update?: XOR<XOR<lawyer_profilesUpdateToOneWithWhereWithoutLawyer_applicationsInput, lawyer_profilesUpdateWithoutLawyer_applicationsInput>, lawyer_profilesUncheckedUpdateWithoutLawyer_applicationsInput>
  }

  export type lawyer_applicationsCreateNestedOneWithoutLawyer_profilesInput = {
    create?: XOR<lawyer_applicationsCreateWithoutLawyer_profilesInput, lawyer_applicationsUncheckedCreateWithoutLawyer_profilesInput>
    connectOrCreate?: lawyer_applicationsCreateOrConnectWithoutLawyer_profilesInput
    connect?: lawyer_applicationsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type lawyer_applicationsUpdateOneRequiredWithoutLawyer_profilesNestedInput = {
    create?: XOR<lawyer_applicationsCreateWithoutLawyer_profilesInput, lawyer_applicationsUncheckedCreateWithoutLawyer_profilesInput>
    connectOrCreate?: lawyer_applicationsCreateOrConnectWithoutLawyer_profilesInput
    upsert?: lawyer_applicationsUpsertWithoutLawyer_profilesInput
    connect?: lawyer_applicationsWhereUniqueInput
    update?: XOR<XOR<lawyer_applicationsUpdateToOneWithWhereWithoutLawyer_profilesInput, lawyer_applicationsUpdateWithoutLawyer_profilesInput>, lawyer_applicationsUncheckedUpdateWithoutLawyer_profilesInput>
  }

  export type usersCreateNestedOneWithoutPasswordsInput = {
    create?: XOR<usersCreateWithoutPasswordsInput, usersUncheckedCreateWithoutPasswordsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPasswordsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutPasswordsNestedInput = {
    create?: XOR<usersCreateWithoutPasswordsInput, usersUncheckedCreateWithoutPasswordsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPasswordsInput
    upsert?: usersUpsertWithoutPasswordsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPasswordsInput, usersUpdateWithoutPasswordsInput>, usersUncheckedUpdateWithoutPasswordsInput>
  }

  export type bookingsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutPaymentsInput
    connect?: bookingsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumpayment_transaction_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_transaction_status | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type bookingsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bookingsCreateOrConnectWithoutPaymentsInput
    upsert?: bookingsUpsertWithoutPaymentsInput
    connect?: bookingsWhereUniqueInput
    update?: XOR<XOR<bookingsUpdateToOneWithWhereWithoutPaymentsInput, bookingsUpdateWithoutPaymentsInput>, bookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type bookingsCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput = {
    create?: XOR<bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput> | bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput[] | bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsers_bookings_lawyer_idTousersInput | bookingsCreateOrConnectWithoutUsers_bookings_lawyer_idTousersInput[]
    createMany?: bookingsCreateManyUsers_bookings_lawyer_idTousersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsCreateNestedManyWithoutUsers_bookings_user_idTousersInput = {
    create?: XOR<bookingsCreateWithoutUsers_bookings_user_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput> | bookingsCreateWithoutUsers_bookings_user_idTousersInput[] | bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsers_bookings_user_idTousersInput | bookingsCreateOrConnectWithoutUsers_bookings_user_idTousersInput[]
    createMany?: bookingsCreateManyUsers_bookings_user_idTousersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type chatbotsCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatbotsCreateWithoutUsersInput, chatbotsUncheckedCreateWithoutUsersInput> | chatbotsCreateWithoutUsersInput[] | chatbotsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatbotsCreateOrConnectWithoutUsersInput | chatbotsCreateOrConnectWithoutUsersInput[]
    createMany?: chatbotsCreateManyUsersInputEnvelope
    connect?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
  }

  export type documentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput> | documentsCreateWithoutUsersInput[] | documentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutUsersInput | documentsCreateOrConnectWithoutUsersInput[]
    createMany?: documentsCreateManyUsersInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type lawyer_applicationsCreateNestedOneWithoutUsersInput = {
    create?: XOR<lawyer_applicationsCreateWithoutUsersInput, lawyer_applicationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: lawyer_applicationsCreateOrConnectWithoutUsersInput
    connect?: lawyer_applicationsWhereUniqueInput
  }

  export type passwordsCreateNestedOneWithoutUsersInput = {
    create?: XOR<passwordsCreateWithoutUsersInput, passwordsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: passwordsCreateOrConnectWithoutUsersInput
    connect?: passwordsWhereUniqueInput
  }

  export type bookingsUncheckedCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput = {
    create?: XOR<bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput> | bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput[] | bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsers_bookings_lawyer_idTousersInput | bookingsCreateOrConnectWithoutUsers_bookings_lawyer_idTousersInput[]
    createMany?: bookingsCreateManyUsers_bookings_lawyer_idTousersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutUsers_bookings_user_idTousersInput = {
    create?: XOR<bookingsCreateWithoutUsers_bookings_user_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput> | bookingsCreateWithoutUsers_bookings_user_idTousersInput[] | bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsers_bookings_user_idTousersInput | bookingsCreateOrConnectWithoutUsers_bookings_user_idTousersInput[]
    createMany?: bookingsCreateManyUsers_bookings_user_idTousersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type chatbotsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chatbotsCreateWithoutUsersInput, chatbotsUncheckedCreateWithoutUsersInput> | chatbotsCreateWithoutUsersInput[] | chatbotsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatbotsCreateOrConnectWithoutUsersInput | chatbotsCreateOrConnectWithoutUsersInput[]
    createMany?: chatbotsCreateManyUsersInputEnvelope
    connect?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
  }

  export type documentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput> | documentsCreateWithoutUsersInput[] | documentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutUsersInput | documentsCreateOrConnectWithoutUsersInput[]
    createMany?: documentsCreateManyUsersInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type lawyer_applicationsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<lawyer_applicationsCreateWithoutUsersInput, lawyer_applicationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: lawyer_applicationsCreateOrConnectWithoutUsersInput
    connect?: lawyer_applicationsWhereUniqueInput
  }

  export type passwordsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<passwordsCreateWithoutUsersInput, passwordsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: passwordsCreateOrConnectWithoutUsersInput
    connect?: passwordsWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type bookingsUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput> | bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput[] | bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsers_bookings_lawyer_idTousersInput | bookingsCreateOrConnectWithoutUsers_bookings_lawyer_idTousersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput | bookingsUpsertWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput[]
    createMany?: bookingsCreateManyUsers_bookings_lawyer_idTousersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput | bookingsUpdateWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsers_bookings_lawyer_idTousersInput | bookingsUpdateManyWithWhereWithoutUsers_bookings_lawyer_idTousersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type bookingsUpdateManyWithoutUsers_bookings_user_idTousersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsers_bookings_user_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput> | bookingsCreateWithoutUsers_bookings_user_idTousersInput[] | bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsers_bookings_user_idTousersInput | bookingsCreateOrConnectWithoutUsers_bookings_user_idTousersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsers_bookings_user_idTousersInput | bookingsUpsertWithWhereUniqueWithoutUsers_bookings_user_idTousersInput[]
    createMany?: bookingsCreateManyUsers_bookings_user_idTousersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsers_bookings_user_idTousersInput | bookingsUpdateWithWhereUniqueWithoutUsers_bookings_user_idTousersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsers_bookings_user_idTousersInput | bookingsUpdateManyWithWhereWithoutUsers_bookings_user_idTousersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type chatbotsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatbotsCreateWithoutUsersInput, chatbotsUncheckedCreateWithoutUsersInput> | chatbotsCreateWithoutUsersInput[] | chatbotsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatbotsCreateOrConnectWithoutUsersInput | chatbotsCreateOrConnectWithoutUsersInput[]
    upsert?: chatbotsUpsertWithWhereUniqueWithoutUsersInput | chatbotsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatbotsCreateManyUsersInputEnvelope
    set?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
    disconnect?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
    delete?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
    connect?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
    update?: chatbotsUpdateWithWhereUniqueWithoutUsersInput | chatbotsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatbotsUpdateManyWithWhereWithoutUsersInput | chatbotsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatbotsScalarWhereInput | chatbotsScalarWhereInput[]
  }

  export type documentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput> | documentsCreateWithoutUsersInput[] | documentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutUsersInput | documentsCreateOrConnectWithoutUsersInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutUsersInput | documentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: documentsCreateManyUsersInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutUsersInput | documentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutUsersInput | documentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type lawyer_applicationsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<lawyer_applicationsCreateWithoutUsersInput, lawyer_applicationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: lawyer_applicationsCreateOrConnectWithoutUsersInput
    upsert?: lawyer_applicationsUpsertWithoutUsersInput
    disconnect?: lawyer_applicationsWhereInput | boolean
    delete?: lawyer_applicationsWhereInput | boolean
    connect?: lawyer_applicationsWhereUniqueInput
    update?: XOR<XOR<lawyer_applicationsUpdateToOneWithWhereWithoutUsersInput, lawyer_applicationsUpdateWithoutUsersInput>, lawyer_applicationsUncheckedUpdateWithoutUsersInput>
  }

  export type passwordsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<passwordsCreateWithoutUsersInput, passwordsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: passwordsCreateOrConnectWithoutUsersInput
    upsert?: passwordsUpsertWithoutUsersInput
    disconnect?: passwordsWhereInput | boolean
    delete?: passwordsWhereInput | boolean
    connect?: passwordsWhereUniqueInput
    update?: XOR<XOR<passwordsUpdateToOneWithWhereWithoutUsersInput, passwordsUpdateWithoutUsersInput>, passwordsUncheckedUpdateWithoutUsersInput>
  }

  export type bookingsUncheckedUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput> | bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput[] | bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsers_bookings_lawyer_idTousersInput | bookingsCreateOrConnectWithoutUsers_bookings_lawyer_idTousersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput | bookingsUpsertWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput[]
    createMany?: bookingsCreateManyUsers_bookings_lawyer_idTousersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput | bookingsUpdateWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsers_bookings_lawyer_idTousersInput | bookingsUpdateManyWithWhereWithoutUsers_bookings_lawyer_idTousersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutUsers_bookings_user_idTousersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsers_bookings_user_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput> | bookingsCreateWithoutUsers_bookings_user_idTousersInput[] | bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsers_bookings_user_idTousersInput | bookingsCreateOrConnectWithoutUsers_bookings_user_idTousersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsers_bookings_user_idTousersInput | bookingsUpsertWithWhereUniqueWithoutUsers_bookings_user_idTousersInput[]
    createMany?: bookingsCreateManyUsers_bookings_user_idTousersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsers_bookings_user_idTousersInput | bookingsUpdateWithWhereUniqueWithoutUsers_bookings_user_idTousersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsers_bookings_user_idTousersInput | bookingsUpdateManyWithWhereWithoutUsers_bookings_user_idTousersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type chatbotsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chatbotsCreateWithoutUsersInput, chatbotsUncheckedCreateWithoutUsersInput> | chatbotsCreateWithoutUsersInput[] | chatbotsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chatbotsCreateOrConnectWithoutUsersInput | chatbotsCreateOrConnectWithoutUsersInput[]
    upsert?: chatbotsUpsertWithWhereUniqueWithoutUsersInput | chatbotsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chatbotsCreateManyUsersInputEnvelope
    set?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
    disconnect?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
    delete?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
    connect?: chatbotsWhereUniqueInput | chatbotsWhereUniqueInput[]
    update?: chatbotsUpdateWithWhereUniqueWithoutUsersInput | chatbotsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chatbotsUpdateManyWithWhereWithoutUsersInput | chatbotsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chatbotsScalarWhereInput | chatbotsScalarWhereInput[]
  }

  export type documentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput> | documentsCreateWithoutUsersInput[] | documentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutUsersInput | documentsCreateOrConnectWithoutUsersInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutUsersInput | documentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: documentsCreateManyUsersInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutUsersInput | documentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutUsersInput | documentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type lawyer_applicationsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<lawyer_applicationsCreateWithoutUsersInput, lawyer_applicationsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: lawyer_applicationsCreateOrConnectWithoutUsersInput
    upsert?: lawyer_applicationsUpsertWithoutUsersInput
    disconnect?: lawyer_applicationsWhereInput | boolean
    delete?: lawyer_applicationsWhereInput | boolean
    connect?: lawyer_applicationsWhereUniqueInput
    update?: XOR<XOR<lawyer_applicationsUpdateToOneWithWhereWithoutUsersInput, lawyer_applicationsUpdateWithoutUsersInput>, lawyer_applicationsUncheckedUpdateWithoutUsersInput>
  }

  export type passwordsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<passwordsCreateWithoutUsersInput, passwordsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: passwordsCreateOrConnectWithoutUsersInput
    upsert?: passwordsUpsertWithoutUsersInput
    disconnect?: passwordsWhereInput | boolean
    delete?: passwordsWhereInput | boolean
    connect?: passwordsWhereUniqueInput
    update?: XOR<XOR<passwordsUpdateToOneWithWhereWithoutUsersInput, passwordsUpdateWithoutUsersInput>, passwordsUncheckedUpdateWithoutUsersInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
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

  export type NestedEnumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
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

  export type NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbooking_statusFilter<$PrismaModel>
    _max?: NestedEnumbooking_statusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumpayment_transaction_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_transaction_status | Enumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_transaction_status[] | ListEnumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_transaction_status[] | ListEnumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_transaction_statusNullableFilter<$PrismaModel> | $Enums.payment_transaction_status | null
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumpayment_transaction_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_transaction_status | Enumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.payment_transaction_status[] | ListEnumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.payment_transaction_status[] | ListEnumpayment_transaction_statusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpayment_transaction_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.payment_transaction_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpayment_transaction_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumpayment_transaction_statusNullableFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type usersCreateWithoutBookings_bookings_lawyer_idTousersInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_user_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsCreateNestedManyWithoutUsersInput
    documents?: documentsCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsCreateNestedOneWithoutUsersInput
    passwords?: passwordsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBookings_bookings_lawyer_idTousersInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_user_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsUncheckedCreateNestedManyWithoutUsersInput
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsUncheckedCreateNestedOneWithoutUsersInput
    passwords?: passwordsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBookings_bookings_lawyer_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBookings_bookings_lawyer_idTousersInput, usersUncheckedCreateWithoutBookings_bookings_lawyer_idTousersInput>
  }

  export type usersCreateWithoutBookings_bookings_user_idTousersInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    chatbots?: chatbotsCreateNestedManyWithoutUsersInput
    documents?: documentsCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsCreateNestedOneWithoutUsersInput
    passwords?: passwordsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBookings_bookings_user_idTousersInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    chatbots?: chatbotsUncheckedCreateNestedManyWithoutUsersInput
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsUncheckedCreateNestedOneWithoutUsersInput
    passwords?: passwordsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBookings_bookings_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBookings_bookings_user_idTousersInput, usersUncheckedCreateWithoutBookings_bookings_user_idTousersInput>
  }

  export type documentsCreateWithoutBookingsInput = {
    id?: string
    file_url: string
    uploaded_at?: Date | string
    users: usersCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateWithoutBookingsInput = {
    id?: string
    file_url: string
    uploaded_at?: Date | string
    user_id: string
  }

  export type documentsCreateOrConnectWithoutBookingsInput = {
    where: documentsWhereUniqueInput
    create: XOR<documentsCreateWithoutBookingsInput, documentsUncheckedCreateWithoutBookingsInput>
  }

  export type documentsCreateManyBookingsInputEnvelope = {
    data: documentsCreateManyBookingsInput | documentsCreateManyBookingsInput[]
    skipDuplicates?: boolean
  }

  export type paymentsCreateWithoutBookingsInput = {
    id?: string
    checkout_req_id?: string | null
    number: string
    amount: Decimal | DecimalJsLike | number | string
    mpesa_receipt?: string | null
    status?: $Enums.payment_transaction_status | null
    created_at?: Date | string | null
  }

  export type paymentsUncheckedCreateWithoutBookingsInput = {
    id?: string
    checkout_req_id?: string | null
    number: string
    amount: Decimal | DecimalJsLike | number | string
    mpesa_receipt?: string | null
    status?: $Enums.payment_transaction_status | null
    created_at?: Date | string | null
  }

  export type paymentsCreateOrConnectWithoutBookingsInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput>
  }

  export type usersUpsertWithoutBookings_bookings_lawyer_idTousersInput = {
    update: XOR<usersUpdateWithoutBookings_bookings_lawyer_idTousersInput, usersUncheckedUpdateWithoutBookings_bookings_lawyer_idTousersInput>
    create: XOR<usersCreateWithoutBookings_bookings_lawyer_idTousersInput, usersUncheckedCreateWithoutBookings_bookings_lawyer_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBookings_bookings_lawyer_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBookings_bookings_lawyer_idTousersInput, usersUncheckedUpdateWithoutBookings_bookings_lawyer_idTousersInput>
  }

  export type usersUpdateWithoutBookings_bookings_lawyer_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_user_idTousers?: bookingsUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUpdateManyWithoutUsersNestedInput
    documents?: documentsUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBookings_bookings_lawyer_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_user_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUncheckedUpdateManyWithoutUsersNestedInput
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUncheckedUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersUpsertWithoutBookings_bookings_user_idTousersInput = {
    update: XOR<usersUpdateWithoutBookings_bookings_user_idTousersInput, usersUncheckedUpdateWithoutBookings_bookings_user_idTousersInput>
    create: XOR<usersCreateWithoutBookings_bookings_user_idTousersInput, usersUncheckedCreateWithoutBookings_bookings_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBookings_bookings_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBookings_bookings_user_idTousersInput, usersUncheckedUpdateWithoutBookings_bookings_user_idTousersInput>
  }

  export type usersUpdateWithoutBookings_bookings_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    chatbots?: chatbotsUpdateManyWithoutUsersNestedInput
    documents?: documentsUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBookings_bookings_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    chatbots?: chatbotsUncheckedUpdateManyWithoutUsersNestedInput
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUncheckedUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type documentsUpsertWithWhereUniqueWithoutBookingsInput = {
    where: documentsWhereUniqueInput
    update: XOR<documentsUpdateWithoutBookingsInput, documentsUncheckedUpdateWithoutBookingsInput>
    create: XOR<documentsCreateWithoutBookingsInput, documentsUncheckedCreateWithoutBookingsInput>
  }

  export type documentsUpdateWithWhereUniqueWithoutBookingsInput = {
    where: documentsWhereUniqueInput
    data: XOR<documentsUpdateWithoutBookingsInput, documentsUncheckedUpdateWithoutBookingsInput>
  }

  export type documentsUpdateManyWithWhereWithoutBookingsInput = {
    where: documentsScalarWhereInput
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyWithoutBookingsInput>
  }

  export type documentsScalarWhereInput = {
    AND?: documentsScalarWhereInput | documentsScalarWhereInput[]
    OR?: documentsScalarWhereInput[]
    NOT?: documentsScalarWhereInput | documentsScalarWhereInput[]
    id?: UuidFilter<"documents"> | string
    file_url?: StringFilter<"documents"> | string
    uploaded_at?: DateTimeFilter<"documents"> | Date | string
    user_id?: UuidFilter<"documents"> | string
    booking_id?: UuidFilter<"documents"> | string
  }

  export type paymentsUpsertWithoutBookingsInput = {
    update: XOR<paymentsUpdateWithoutBookingsInput, paymentsUncheckedUpdateWithoutBookingsInput>
    create: XOR<paymentsCreateWithoutBookingsInput, paymentsUncheckedCreateWithoutBookingsInput>
    where?: paymentsWhereInput
  }

  export type paymentsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: paymentsWhereInput
    data: XOR<paymentsUpdateWithoutBookingsInput, paymentsUncheckedUpdateWithoutBookingsInput>
  }

  export type paymentsUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mpesa_receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumpayment_transaction_statusFieldUpdateOperationsInput | $Enums.payment_transaction_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentsUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkout_req_id?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mpesa_receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumpayment_transaction_statusFieldUpdateOperationsInput | $Enums.payment_transaction_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateWithoutChatbotsInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    documents?: documentsCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsCreateNestedOneWithoutUsersInput
    passwords?: passwordsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChatbotsInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsUncheckedCreateNestedOneWithoutUsersInput
    passwords?: passwordsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChatbotsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChatbotsInput, usersUncheckedCreateWithoutChatbotsInput>
  }

  export type usersUpsertWithoutChatbotsInput = {
    update: XOR<usersUpdateWithoutChatbotsInput, usersUncheckedUpdateWithoutChatbotsInput>
    create: XOR<usersCreateWithoutChatbotsInput, usersUncheckedCreateWithoutChatbotsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChatbotsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChatbotsInput, usersUncheckedUpdateWithoutChatbotsInput>
  }

  export type usersUpdateWithoutChatbotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    documents?: documentsUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChatbotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUncheckedUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type bookingsCreateWithoutDocumentsInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    users_bookings_lawyer_idTousers: usersCreateNestedOneWithoutBookings_bookings_lawyer_idTousersInput
    users_bookings_user_idTousers: usersCreateNestedOneWithoutBookings_bookings_user_idTousersInput
    payments?: paymentsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutDocumentsInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    user_id: string
    lawyer_id: string
    payments?: paymentsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutDocumentsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutDocumentsInput, bookingsUncheckedCreateWithoutDocumentsInput>
  }

  export type usersCreateWithoutDocumentsInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsCreateNestedOneWithoutUsersInput
    passwords?: passwordsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDocumentsInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsUncheckedCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsUncheckedCreateNestedOneWithoutUsersInput
    passwords?: passwordsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDocumentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDocumentsInput, usersUncheckedCreateWithoutDocumentsInput>
  }

  export type bookingsUpsertWithoutDocumentsInput = {
    update: XOR<bookingsUpdateWithoutDocumentsInput, bookingsUncheckedUpdateWithoutDocumentsInput>
    create: XOR<bookingsCreateWithoutDocumentsInput, bookingsUncheckedCreateWithoutDocumentsInput>
    where?: bookingsWhereInput
  }

  export type bookingsUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: bookingsWhereInput
    data: XOR<bookingsUpdateWithoutDocumentsInput, bookingsUncheckedUpdateWithoutDocumentsInput>
  }

  export type bookingsUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    users_bookings_lawyer_idTousers?: usersUpdateOneRequiredWithoutBookings_bookings_lawyer_idTousersNestedInput
    users_bookings_user_idTousers?: usersUpdateOneRequiredWithoutBookings_bookings_user_idTousersNestedInput
    payments?: paymentsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    user_id?: StringFieldUpdateOperationsInput | string
    lawyer_id?: StringFieldUpdateOperationsInput | string
    payments?: paymentsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type usersUpsertWithoutDocumentsInput = {
    update: XOR<usersUpdateWithoutDocumentsInput, usersUncheckedUpdateWithoutDocumentsInput>
    create: XOR<usersCreateWithoutDocumentsInput, usersUncheckedCreateWithoutDocumentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDocumentsInput, usersUncheckedUpdateWithoutDocumentsInput>
  }

  export type usersUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUncheckedUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUncheckedUpdateOneWithoutUsersNestedInput
    passwords?: passwordsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateWithoutLawyer_applicationsInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsCreateNestedManyWithoutUsersInput
    documents?: documentsCreateNestedManyWithoutUsersInput
    passwords?: passwordsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLawyer_applicationsInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsUncheckedCreateNestedManyWithoutUsersInput
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    passwords?: passwordsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLawyer_applicationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLawyer_applicationsInput, usersUncheckedCreateWithoutLawyer_applicationsInput>
  }

  export type lawyer_profilesCreateWithoutLawyer_applicationsInput = {
    id?: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
  }

  export type lawyer_profilesUncheckedCreateWithoutLawyer_applicationsInput = {
    id?: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
  }

  export type lawyer_profilesCreateOrConnectWithoutLawyer_applicationsInput = {
    where: lawyer_profilesWhereUniqueInput
    create: XOR<lawyer_profilesCreateWithoutLawyer_applicationsInput, lawyer_profilesUncheckedCreateWithoutLawyer_applicationsInput>
  }

  export type usersUpsertWithoutLawyer_applicationsInput = {
    update: XOR<usersUpdateWithoutLawyer_applicationsInput, usersUncheckedUpdateWithoutLawyer_applicationsInput>
    create: XOR<usersCreateWithoutLawyer_applicationsInput, usersUncheckedCreateWithoutLawyer_applicationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLawyer_applicationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLawyer_applicationsInput, usersUncheckedUpdateWithoutLawyer_applicationsInput>
  }

  export type usersUpdateWithoutLawyer_applicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUpdateManyWithoutUsersNestedInput
    documents?: documentsUpdateManyWithoutUsersNestedInput
    passwords?: passwordsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLawyer_applicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUncheckedUpdateManyWithoutUsersNestedInput
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    passwords?: passwordsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type lawyer_profilesUpsertWithoutLawyer_applicationsInput = {
    update: XOR<lawyer_profilesUpdateWithoutLawyer_applicationsInput, lawyer_profilesUncheckedUpdateWithoutLawyer_applicationsInput>
    create: XOR<lawyer_profilesCreateWithoutLawyer_applicationsInput, lawyer_profilesUncheckedCreateWithoutLawyer_applicationsInput>
    where?: lawyer_profilesWhereInput
  }

  export type lawyer_profilesUpdateToOneWithWhereWithoutLawyer_applicationsInput = {
    where?: lawyer_profilesWhereInput
    data: XOR<lawyer_profilesUpdateWithoutLawyer_applicationsInput, lawyer_profilesUncheckedUpdateWithoutLawyer_applicationsInput>
  }

  export type lawyer_profilesUpdateWithoutLawyer_applicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type lawyer_profilesUncheckedUpdateWithoutLawyer_applicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type lawyer_applicationsCreateWithoutLawyer_profilesInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutLawyer_applicationsInput
  }

  export type lawyer_applicationsUncheckedCreateWithoutLawyer_profilesInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    user_id: string
  }

  export type lawyer_applicationsCreateOrConnectWithoutLawyer_profilesInput = {
    where: lawyer_applicationsWhereUniqueInput
    create: XOR<lawyer_applicationsCreateWithoutLawyer_profilesInput, lawyer_applicationsUncheckedCreateWithoutLawyer_profilesInput>
  }

  export type lawyer_applicationsUpsertWithoutLawyer_profilesInput = {
    update: XOR<lawyer_applicationsUpdateWithoutLawyer_profilesInput, lawyer_applicationsUncheckedUpdateWithoutLawyer_profilesInput>
    create: XOR<lawyer_applicationsCreateWithoutLawyer_profilesInput, lawyer_applicationsUncheckedCreateWithoutLawyer_profilesInput>
    where?: lawyer_applicationsWhereInput
  }

  export type lawyer_applicationsUpdateToOneWithWhereWithoutLawyer_profilesInput = {
    where?: lawyer_applicationsWhereInput
    data: XOR<lawyer_applicationsUpdateWithoutLawyer_profilesInput, lawyer_applicationsUncheckedUpdateWithoutLawyer_profilesInput>
  }

  export type lawyer_applicationsUpdateWithoutLawyer_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutLawyer_applicationsNestedInput
  }

  export type lawyer_applicationsUncheckedUpdateWithoutLawyer_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateWithoutPasswordsInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsCreateNestedManyWithoutUsersInput
    documents?: documentsCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPasswordsInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.Role
    dob: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    otp_hash?: string | null
    otp_expires_at?: Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_lawyer_idTousersInput
    bookings_bookings_user_idTousers?: bookingsUncheckedCreateNestedManyWithoutUsers_bookings_user_idTousersInput
    chatbots?: chatbotsUncheckedCreateNestedManyWithoutUsersInput
    documents?: documentsUncheckedCreateNestedManyWithoutUsersInput
    lawyer_applications?: lawyer_applicationsUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPasswordsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPasswordsInput, usersUncheckedCreateWithoutPasswordsInput>
  }

  export type usersUpsertWithoutPasswordsInput = {
    update: XOR<usersUpdateWithoutPasswordsInput, usersUncheckedUpdateWithoutPasswordsInput>
    create: XOR<usersCreateWithoutPasswordsInput, usersUncheckedCreateWithoutPasswordsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPasswordsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPasswordsInput, usersUncheckedUpdateWithoutPasswordsInput>
  }

  export type usersUpdateWithoutPasswordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUpdateManyWithoutUsersNestedInput
    documents?: documentsUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPasswordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_hash?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings_bookings_lawyer_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_lawyer_idTousersNestedInput
    bookings_bookings_user_idTousers?: bookingsUncheckedUpdateManyWithoutUsers_bookings_user_idTousersNestedInput
    chatbots?: chatbotsUncheckedUpdateManyWithoutUsersNestedInput
    documents?: documentsUncheckedUpdateManyWithoutUsersNestedInput
    lawyer_applications?: lawyer_applicationsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type bookingsCreateWithoutPaymentsInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    users_bookings_lawyer_idTousers: usersCreateNestedOneWithoutBookings_bookings_lawyer_idTousersInput
    users_bookings_user_idTousers: usersCreateNestedOneWithoutBookings_bookings_user_idTousersInput
    documents?: documentsCreateNestedManyWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutPaymentsInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    user_id: string
    lawyer_id: string
    documents?: documentsUncheckedCreateNestedManyWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutPaymentsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
  }

  export type bookingsUpsertWithoutPaymentsInput = {
    update: XOR<bookingsUpdateWithoutPaymentsInput, bookingsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<bookingsCreateWithoutPaymentsInput, bookingsUncheckedCreateWithoutPaymentsInput>
    where?: bookingsWhereInput
  }

  export type bookingsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: bookingsWhereInput
    data: XOR<bookingsUpdateWithoutPaymentsInput, bookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type bookingsUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    users_bookings_lawyer_idTousers?: usersUpdateOneRequiredWithoutBookings_bookings_lawyer_idTousersNestedInput
    users_bookings_user_idTousers?: usersUpdateOneRequiredWithoutBookings_bookings_user_idTousersNestedInput
    documents?: documentsUpdateManyWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    user_id?: StringFieldUpdateOperationsInput | string
    lawyer_id?: StringFieldUpdateOperationsInput | string
    documents?: documentsUncheckedUpdateManyWithoutBookingsNestedInput
  }

  export type bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    users_bookings_user_idTousers: usersCreateNestedOneWithoutBookings_bookings_user_idTousersInput
    documents?: documentsCreateNestedManyWithoutBookingsInput
    payments?: paymentsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    user_id: string
    documents?: documentsUncheckedCreateNestedManyWithoutBookingsInput
    payments?: paymentsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutUsers_bookings_lawyer_idTousersInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput>
  }

  export type bookingsCreateManyUsers_bookings_lawyer_idTousersInputEnvelope = {
    data: bookingsCreateManyUsers_bookings_lawyer_idTousersInput | bookingsCreateManyUsers_bookings_lawyer_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type bookingsCreateWithoutUsers_bookings_user_idTousersInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    users_bookings_lawyer_idTousers: usersCreateNestedOneWithoutBookings_bookings_lawyer_idTousersInput
    documents?: documentsCreateNestedManyWithoutBookingsInput
    payments?: paymentsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    lawyer_id: string
    documents?: documentsUncheckedCreateNestedManyWithoutBookingsInput
    payments?: paymentsUncheckedCreateNestedOneWithoutBookingsInput
  }

  export type bookingsCreateOrConnectWithoutUsers_bookings_user_idTousersInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUsers_bookings_user_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput>
  }

  export type bookingsCreateManyUsers_bookings_user_idTousersInputEnvelope = {
    data: bookingsCreateManyUsers_bookings_user_idTousersInput | bookingsCreateManyUsers_bookings_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type chatbotsCreateWithoutUsersInput = {
    id?: string
    category: string
    chat: string
    ai_response: string
  }

  export type chatbotsUncheckedCreateWithoutUsersInput = {
    id?: string
    category: string
    chat: string
    ai_response: string
  }

  export type chatbotsCreateOrConnectWithoutUsersInput = {
    where: chatbotsWhereUniqueInput
    create: XOR<chatbotsCreateWithoutUsersInput, chatbotsUncheckedCreateWithoutUsersInput>
  }

  export type chatbotsCreateManyUsersInputEnvelope = {
    data: chatbotsCreateManyUsersInput | chatbotsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type documentsCreateWithoutUsersInput = {
    id?: string
    file_url: string
    uploaded_at?: Date | string
    bookings: bookingsCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateWithoutUsersInput = {
    id?: string
    file_url: string
    uploaded_at?: Date | string
    booking_id: string
  }

  export type documentsCreateOrConnectWithoutUsersInput = {
    where: documentsWhereUniqueInput
    create: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput>
  }

  export type documentsCreateManyUsersInputEnvelope = {
    data: documentsCreateManyUsersInput | documentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type lawyer_applicationsCreateWithoutUsersInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    lawyer_profiles?: lawyer_profilesCreateNestedOneWithoutLawyer_applicationsInput
  }

  export type lawyer_applicationsUncheckedCreateWithoutUsersInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    lawyer_profiles?: lawyer_profilesUncheckedCreateNestedOneWithoutLawyer_applicationsInput
  }

  export type lawyer_applicationsCreateOrConnectWithoutUsersInput = {
    where: lawyer_applicationsWhereUniqueInput
    create: XOR<lawyer_applicationsCreateWithoutUsersInput, lawyer_applicationsUncheckedCreateWithoutUsersInput>
  }

  export type passwordsCreateWithoutUsersInput = {
    id?: string
    password: string
  }

  export type passwordsUncheckedCreateWithoutUsersInput = {
    id?: string
    password: string
  }

  export type passwordsCreateOrConnectWithoutUsersInput = {
    where: passwordsWhereUniqueInput
    create: XOR<passwordsCreateWithoutUsersInput, passwordsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsUpsertWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUsers_bookings_lawyer_idTousersInput, bookingsUncheckedUpdateWithoutUsers_bookings_lawyer_idTousersInput>
    create: XOR<bookingsCreateWithoutUsers_bookings_lawyer_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_lawyer_idTousersInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUsers_bookings_lawyer_idTousersInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUsers_bookings_lawyer_idTousersInput, bookingsUncheckedUpdateWithoutUsers_bookings_lawyer_idTousersInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUsers_bookings_lawyer_idTousersInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUsers_bookings_lawyer_idTousersInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    id?: UuidFilter<"bookings"> | string
    date?: DateTimeFilter<"bookings"> | Date | string
    payment_status?: Enumpayment_statusFilter<"bookings"> | $Enums.payment_status
    notes?: StringNullableFilter<"bookings"> | string | null
    booking_status?: Enumbooking_statusFilter<"bookings"> | $Enums.booking_status
    user_id?: UuidFilter<"bookings"> | string
    lawyer_id?: UuidFilter<"bookings"> | string
  }

  export type bookingsUpsertWithWhereUniqueWithoutUsers_bookings_user_idTousersInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUsers_bookings_user_idTousersInput, bookingsUncheckedUpdateWithoutUsers_bookings_user_idTousersInput>
    create: XOR<bookingsCreateWithoutUsers_bookings_user_idTousersInput, bookingsUncheckedCreateWithoutUsers_bookings_user_idTousersInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUsers_bookings_user_idTousersInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUsers_bookings_user_idTousersInput, bookingsUncheckedUpdateWithoutUsers_bookings_user_idTousersInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUsers_bookings_user_idTousersInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUsers_bookings_user_idTousersInput>
  }

  export type chatbotsUpsertWithWhereUniqueWithoutUsersInput = {
    where: chatbotsWhereUniqueInput
    update: XOR<chatbotsUpdateWithoutUsersInput, chatbotsUncheckedUpdateWithoutUsersInput>
    create: XOR<chatbotsCreateWithoutUsersInput, chatbotsUncheckedCreateWithoutUsersInput>
  }

  export type chatbotsUpdateWithWhereUniqueWithoutUsersInput = {
    where: chatbotsWhereUniqueInput
    data: XOR<chatbotsUpdateWithoutUsersInput, chatbotsUncheckedUpdateWithoutUsersInput>
  }

  export type chatbotsUpdateManyWithWhereWithoutUsersInput = {
    where: chatbotsScalarWhereInput
    data: XOR<chatbotsUpdateManyMutationInput, chatbotsUncheckedUpdateManyWithoutUsersInput>
  }

  export type chatbotsScalarWhereInput = {
    AND?: chatbotsScalarWhereInput | chatbotsScalarWhereInput[]
    OR?: chatbotsScalarWhereInput[]
    NOT?: chatbotsScalarWhereInput | chatbotsScalarWhereInput[]
    id?: UuidFilter<"chatbots"> | string
    category?: StringFilter<"chatbots"> | string
    chat?: StringFilter<"chatbots"> | string
    ai_response?: StringFilter<"chatbots"> | string
    user_id?: UuidFilter<"chatbots"> | string
  }

  export type documentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: documentsWhereUniqueInput
    update: XOR<documentsUpdateWithoutUsersInput, documentsUncheckedUpdateWithoutUsersInput>
    create: XOR<documentsCreateWithoutUsersInput, documentsUncheckedCreateWithoutUsersInput>
  }

  export type documentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: documentsWhereUniqueInput
    data: XOR<documentsUpdateWithoutUsersInput, documentsUncheckedUpdateWithoutUsersInput>
  }

  export type documentsUpdateManyWithWhereWithoutUsersInput = {
    where: documentsScalarWhereInput
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type lawyer_applicationsUpsertWithoutUsersInput = {
    update: XOR<lawyer_applicationsUpdateWithoutUsersInput, lawyer_applicationsUncheckedUpdateWithoutUsersInput>
    create: XOR<lawyer_applicationsCreateWithoutUsersInput, lawyer_applicationsUncheckedCreateWithoutUsersInput>
    where?: lawyer_applicationsWhereInput
  }

  export type lawyer_applicationsUpdateToOneWithWhereWithoutUsersInput = {
    where?: lawyer_applicationsWhereInput
    data: XOR<lawyer_applicationsUpdateWithoutUsersInput, lawyer_applicationsUncheckedUpdateWithoutUsersInput>
  }

  export type lawyer_applicationsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lawyer_profiles?: lawyer_profilesUpdateOneWithoutLawyer_applicationsNestedInput
  }

  export type lawyer_applicationsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lawyer_profiles?: lawyer_profilesUncheckedUpdateOneWithoutLawyer_applicationsNestedInput
  }

  export type passwordsUpsertWithoutUsersInput = {
    update: XOR<passwordsUpdateWithoutUsersInput, passwordsUncheckedUpdateWithoutUsersInput>
    create: XOR<passwordsCreateWithoutUsersInput, passwordsUncheckedCreateWithoutUsersInput>
    where?: passwordsWhereInput
  }

  export type passwordsUpdateToOneWithWhereWithoutUsersInput = {
    where?: passwordsWhereInput
    data: XOR<passwordsUpdateWithoutUsersInput, passwordsUncheckedUpdateWithoutUsersInput>
  }

  export type passwordsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type passwordsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type documentsCreateManyBookingsInput = {
    id?: string
    file_url: string
    uploaded_at?: Date | string
    user_id: string
  }

  export type documentsUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type documentsUncheckedUpdateManyWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type bookingsCreateManyUsers_bookings_lawyer_idTousersInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    user_id: string
  }

  export type bookingsCreateManyUsers_bookings_user_idTousersInput = {
    id?: string
    date: Date | string
    payment_status?: $Enums.payment_status
    notes?: string | null
    booking_status?: $Enums.booking_status
    lawyer_id: string
  }

  export type chatbotsCreateManyUsersInput = {
    id?: string
    category: string
    chat: string
    ai_response: string
  }

  export type documentsCreateManyUsersInput = {
    id?: string
    file_url: string
    uploaded_at?: Date | string
    booking_id: string
  }

  export type bookingsUpdateWithoutUsers_bookings_lawyer_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    users_bookings_user_idTousers?: usersUpdateOneRequiredWithoutBookings_bookings_user_idTousersNestedInput
    documents?: documentsUpdateManyWithoutBookingsNestedInput
    payments?: paymentsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutUsers_bookings_lawyer_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    user_id?: StringFieldUpdateOperationsInput | string
    documents?: documentsUncheckedUpdateManyWithoutBookingsNestedInput
    payments?: paymentsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutUsers_bookings_lawyer_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type bookingsUpdateWithoutUsers_bookings_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    users_bookings_lawyer_idTousers?: usersUpdateOneRequiredWithoutBookings_bookings_lawyer_idTousersNestedInput
    documents?: documentsUpdateManyWithoutBookingsNestedInput
    payments?: paymentsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutUsers_bookings_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    lawyer_id?: StringFieldUpdateOperationsInput | string
    documents?: documentsUncheckedUpdateManyWithoutBookingsNestedInput
    payments?: paymentsUncheckedUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateManyWithoutUsers_bookings_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    booking_status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    lawyer_id?: StringFieldUpdateOperationsInput | string
  }

  export type chatbotsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    chat?: StringFieldUpdateOperationsInput | string
    ai_response?: StringFieldUpdateOperationsInput | string
  }

  export type chatbotsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    chat?: StringFieldUpdateOperationsInput | string
    ai_response?: StringFieldUpdateOperationsInput | string
  }

  export type chatbotsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    chat?: StringFieldUpdateOperationsInput | string
    ai_response?: StringFieldUpdateOperationsInput | string
  }

  export type documentsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingsUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_id?: StringFieldUpdateOperationsInput | string
  }

  export type documentsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_id?: StringFieldUpdateOperationsInput | string
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