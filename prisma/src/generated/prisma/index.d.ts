
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model LawyerApplication
 * 
 */
export type LawyerApplication = $Result.DefaultSelection<Prisma.$LawyerApplicationPayload>
/**
 * Model LawyerProfile
 * 
 */
export type LawyerProfile = $Result.DefaultSelection<Prisma.$LawyerProfilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  LAWYER: 'LAWYER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyerApplication`: Exposes CRUD operations for the **LawyerApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawyerApplications
    * const lawyerApplications = await prisma.lawyerApplication.findMany()
    * ```
    */
  get lawyerApplication(): Prisma.LawyerApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyerProfile`: Exposes CRUD operations for the **LawyerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawyerProfiles
    * const lawyerProfiles = await prisma.lawyerProfile.findMany()
    * ```
    */
  get lawyerProfile(): Prisma.LawyerProfileDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    LawyerApplication: 'LawyerApplication',
    LawyerProfile: 'LawyerProfile'
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
      modelProps: "user" | "lawyerApplication" | "lawyerProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      LawyerApplication: {
        payload: Prisma.$LawyerApplicationPayload<ExtArgs>
        fields: Prisma.LawyerApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload>
          }
          findFirst: {
            args: Prisma.LawyerApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload>
          }
          findMany: {
            args: Prisma.LawyerApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload>[]
          }
          create: {
            args: Prisma.LawyerApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload>
          }
          createMany: {
            args: Prisma.LawyerApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawyerApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload>[]
          }
          delete: {
            args: Prisma.LawyerApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload>
          }
          update: {
            args: Prisma.LawyerApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload>
          }
          deleteMany: {
            args: Prisma.LawyerApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawyerApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload>[]
          }
          upsert: {
            args: Prisma.LawyerApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerApplicationPayload>
          }
          aggregate: {
            args: Prisma.LawyerApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyerApplication>
          }
          groupBy: {
            args: Prisma.LawyerApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerApplicationCountAggregateOutputType> | number
          }
        }
      }
      LawyerProfile: {
        payload: Prisma.$LawyerProfilePayload<ExtArgs>
        fields: Prisma.LawyerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload>
          }
          findFirst: {
            args: Prisma.LawyerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload>
          }
          findMany: {
            args: Prisma.LawyerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload>[]
          }
          create: {
            args: Prisma.LawyerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload>
          }
          createMany: {
            args: Prisma.LawyerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawyerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload>[]
          }
          delete: {
            args: Prisma.LawyerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload>
          }
          update: {
            args: Prisma.LawyerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload>
          }
          deleteMany: {
            args: Prisma.LawyerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawyerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload>[]
          }
          upsert: {
            args: Prisma.LawyerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerProfilePayload>
          }
          aggregate: {
            args: Prisma.LawyerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyerProfile>
          }
          groupBy: {
            args: Prisma.LawyerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerProfileCountAggregateOutputType> | number
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
    user?: UserOmit
    lawyerApplication?: LawyerApplicationOmit
    lawyerProfile?: LawyerProfileOmit
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    second_name: string | null
    email: string | null
    role: $Enums.UserRole | null
    dob: Date | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    second_name: string | null
    email: string | null
    role: $Enums.UserRole | null
    dob: Date | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    second_name: number
    email: number
    role: number
    dob: number
    created_at: number
    deleted_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    second_name?: true
    email?: true
    role?: true
    dob?: true
    created_at?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    second_name?: true
    email?: true
    role?: true
    dob?: true
    created_at?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    second_name?: true
    email?: true
    role?: true
    dob?: true
    created_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    first_name: string
    second_name: string
    email: string
    role: $Enums.UserRole
    dob: Date | null
    created_at: Date
    deleted_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    email?: boolean
    role?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
    lawyerApplication?: boolean | User$lawyerApplicationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    email?: boolean
    role?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    email?: boolean
    role?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    email?: boolean
    role?: boolean
    dob?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "second_name" | "email" | "role" | "dob" | "created_at" | "deleted_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyerApplication?: boolean | User$lawyerApplicationArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lawyerApplication: Prisma.$LawyerApplicationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      second_name: string
      email: string
      role: $Enums.UserRole
      dob: Date | null
      created_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lawyerApplication<T extends User$lawyerApplicationArgs<ExtArgs> = {}>(args?: Subset<T, User$lawyerApplicationArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly second_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.lawyerApplication
   */
  export type User$lawyerApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    where?: LawyerApplicationWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LawyerApplication
   */

  export type AggregateLawyerApplication = {
    _count: LawyerApplicationCountAggregateOutputType | null
    _min: LawyerApplicationMinAggregateOutputType | null
    _max: LawyerApplicationMaxAggregateOutputType | null
  }

  export type LawyerApplicationMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    file_url: string | null
    lsk_number: string | null
    created_at: Date | null
    status: string | null
  }

  export type LawyerApplicationMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    file_url: string | null
    lsk_number: string | null
    created_at: Date | null
    status: string | null
  }

  export type LawyerApplicationCountAggregateOutputType = {
    id: number
    user_id: number
    file_url: number
    lsk_number: number
    created_at: number
    status: number
    _all: number
  }


  export type LawyerApplicationMinAggregateInputType = {
    id?: true
    user_id?: true
    file_url?: true
    lsk_number?: true
    created_at?: true
    status?: true
  }

  export type LawyerApplicationMaxAggregateInputType = {
    id?: true
    user_id?: true
    file_url?: true
    lsk_number?: true
    created_at?: true
    status?: true
  }

  export type LawyerApplicationCountAggregateInputType = {
    id?: true
    user_id?: true
    file_url?: true
    lsk_number?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type LawyerApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerApplication to aggregate.
     */
    where?: LawyerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerApplications to fetch.
     */
    orderBy?: LawyerApplicationOrderByWithRelationInput | LawyerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawyerApplications
    **/
    _count?: true | LawyerApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerApplicationMaxAggregateInputType
  }

  export type GetLawyerApplicationAggregateType<T extends LawyerApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyerApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyerApplication[P]>
      : GetScalarType<T[P], AggregateLawyerApplication[P]>
  }




  export type LawyerApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerApplicationWhereInput
    orderBy?: LawyerApplicationOrderByWithAggregationInput | LawyerApplicationOrderByWithAggregationInput[]
    by: LawyerApplicationScalarFieldEnum[] | LawyerApplicationScalarFieldEnum
    having?: LawyerApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerApplicationCountAggregateInputType | true
    _min?: LawyerApplicationMinAggregateInputType
    _max?: LawyerApplicationMaxAggregateInputType
  }

  export type LawyerApplicationGroupByOutputType = {
    id: string
    user_id: string
    file_url: string
    lsk_number: string
    created_at: Date
    status: string
    _count: LawyerApplicationCountAggregateOutputType | null
    _min: LawyerApplicationMinAggregateOutputType | null
    _max: LawyerApplicationMaxAggregateOutputType | null
  }

  type GetLawyerApplicationGroupByPayload<T extends LawyerApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerApplicationGroupByOutputType[P]>
        }
      >
    >


  export type LawyerApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    file_url?: boolean
    lsk_number?: boolean
    created_at?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lawyerProfile?: boolean | LawyerApplication$lawyerProfileArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerApplication"]>

  export type LawyerApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    file_url?: boolean
    lsk_number?: boolean
    created_at?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerApplication"]>

  export type LawyerApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    file_url?: boolean
    lsk_number?: boolean
    created_at?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerApplication"]>

  export type LawyerApplicationSelectScalar = {
    id?: boolean
    user_id?: boolean
    file_url?: boolean
    lsk_number?: boolean
    created_at?: boolean
    status?: boolean
  }

  export type LawyerApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "file_url" | "lsk_number" | "created_at" | "status", ExtArgs["result"]["lawyerApplication"]>
  export type LawyerApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lawyerProfile?: boolean | LawyerApplication$lawyerProfileArgs<ExtArgs>
  }
  export type LawyerApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LawyerApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LawyerApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawyerApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lawyerProfile: Prisma.$LawyerProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      file_url: string
      lsk_number: string
      created_at: Date
      status: string
    }, ExtArgs["result"]["lawyerApplication"]>
    composites: {}
  }

  type LawyerApplicationGetPayload<S extends boolean | null | undefined | LawyerApplicationDefaultArgs> = $Result.GetResult<Prisma.$LawyerApplicationPayload, S>

  type LawyerApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerApplicationCountAggregateInputType | true
    }

  export interface LawyerApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawyerApplication'], meta: { name: 'LawyerApplication' } }
    /**
     * Find zero or one LawyerApplication that matches the filter.
     * @param {LawyerApplicationFindUniqueArgs} args - Arguments to find a LawyerApplication
     * @example
     * // Get one LawyerApplication
     * const lawyerApplication = await prisma.lawyerApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerApplicationFindUniqueArgs>(args: SelectSubset<T, LawyerApplicationFindUniqueArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LawyerApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerApplicationFindUniqueOrThrowArgs} args - Arguments to find a LawyerApplication
     * @example
     * // Get one LawyerApplication
     * const lawyerApplication = await prisma.lawyerApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerApplicationFindFirstArgs} args - Arguments to find a LawyerApplication
     * @example
     * // Get one LawyerApplication
     * const lawyerApplication = await prisma.lawyerApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerApplicationFindFirstArgs>(args?: SelectSubset<T, LawyerApplicationFindFirstArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerApplicationFindFirstOrThrowArgs} args - Arguments to find a LawyerApplication
     * @example
     * // Get one LawyerApplication
     * const lawyerApplication = await prisma.lawyerApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LawyerApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawyerApplications
     * const lawyerApplications = await prisma.lawyerApplication.findMany()
     * 
     * // Get first 10 LawyerApplications
     * const lawyerApplications = await prisma.lawyerApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerApplicationWithIdOnly = await prisma.lawyerApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerApplicationFindManyArgs>(args?: SelectSubset<T, LawyerApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LawyerApplication.
     * @param {LawyerApplicationCreateArgs} args - Arguments to create a LawyerApplication.
     * @example
     * // Create one LawyerApplication
     * const LawyerApplication = await prisma.lawyerApplication.create({
     *   data: {
     *     // ... data to create a LawyerApplication
     *   }
     * })
     * 
     */
    create<T extends LawyerApplicationCreateArgs>(args: SelectSubset<T, LawyerApplicationCreateArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LawyerApplications.
     * @param {LawyerApplicationCreateManyArgs} args - Arguments to create many LawyerApplications.
     * @example
     * // Create many LawyerApplications
     * const lawyerApplication = await prisma.lawyerApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerApplicationCreateManyArgs>(args?: SelectSubset<T, LawyerApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LawyerApplications and returns the data saved in the database.
     * @param {LawyerApplicationCreateManyAndReturnArgs} args - Arguments to create many LawyerApplications.
     * @example
     * // Create many LawyerApplications
     * const lawyerApplication = await prisma.lawyerApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LawyerApplications and only return the `id`
     * const lawyerApplicationWithIdOnly = await prisma.lawyerApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawyerApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, LawyerApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LawyerApplication.
     * @param {LawyerApplicationDeleteArgs} args - Arguments to delete one LawyerApplication.
     * @example
     * // Delete one LawyerApplication
     * const LawyerApplication = await prisma.lawyerApplication.delete({
     *   where: {
     *     // ... filter to delete one LawyerApplication
     *   }
     * })
     * 
     */
    delete<T extends LawyerApplicationDeleteArgs>(args: SelectSubset<T, LawyerApplicationDeleteArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LawyerApplication.
     * @param {LawyerApplicationUpdateArgs} args - Arguments to update one LawyerApplication.
     * @example
     * // Update one LawyerApplication
     * const lawyerApplication = await prisma.lawyerApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerApplicationUpdateArgs>(args: SelectSubset<T, LawyerApplicationUpdateArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LawyerApplications.
     * @param {LawyerApplicationDeleteManyArgs} args - Arguments to filter LawyerApplications to delete.
     * @example
     * // Delete a few LawyerApplications
     * const { count } = await prisma.lawyerApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerApplicationDeleteManyArgs>(args?: SelectSubset<T, LawyerApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawyerApplications
     * const lawyerApplication = await prisma.lawyerApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerApplicationUpdateManyArgs>(args: SelectSubset<T, LawyerApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerApplications and returns the data updated in the database.
     * @param {LawyerApplicationUpdateManyAndReturnArgs} args - Arguments to update many LawyerApplications.
     * @example
     * // Update many LawyerApplications
     * const lawyerApplication = await prisma.lawyerApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LawyerApplications and only return the `id`
     * const lawyerApplicationWithIdOnly = await prisma.lawyerApplication.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawyerApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, LawyerApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LawyerApplication.
     * @param {LawyerApplicationUpsertArgs} args - Arguments to update or create a LawyerApplication.
     * @example
     * // Update or create a LawyerApplication
     * const lawyerApplication = await prisma.lawyerApplication.upsert({
     *   create: {
     *     // ... data to create a LawyerApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawyerApplication we want to update
     *   }
     * })
     */
    upsert<T extends LawyerApplicationUpsertArgs>(args: SelectSubset<T, LawyerApplicationUpsertArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LawyerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerApplicationCountArgs} args - Arguments to filter LawyerApplications to count.
     * @example
     * // Count the number of LawyerApplications
     * const count = await prisma.lawyerApplication.count({
     *   where: {
     *     // ... the filter for the LawyerApplications we want to count
     *   }
     * })
    **/
    count<T extends LawyerApplicationCountArgs>(
      args?: Subset<T, LawyerApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawyerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerApplicationAggregateArgs>(args: Subset<T, LawyerApplicationAggregateArgs>): Prisma.PrismaPromise<GetLawyerApplicationAggregateType<T>>

    /**
     * Group by LawyerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerApplicationGroupByArgs} args - Group by arguments.
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
      T extends LawyerApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerApplicationGroupByArgs['orderBy'] }
        : { orderBy?: LawyerApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawyerApplication model
   */
  readonly fields: LawyerApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawyerApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lawyerProfile<T extends LawyerApplication$lawyerProfileArgs<ExtArgs> = {}>(args?: Subset<T, LawyerApplication$lawyerProfileArgs<ExtArgs>>): Prisma__LawyerProfileClient<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LawyerApplication model
   */
  interface LawyerApplicationFieldRefs {
    readonly id: FieldRef<"LawyerApplication", 'String'>
    readonly user_id: FieldRef<"LawyerApplication", 'String'>
    readonly file_url: FieldRef<"LawyerApplication", 'String'>
    readonly lsk_number: FieldRef<"LawyerApplication", 'String'>
    readonly created_at: FieldRef<"LawyerApplication", 'DateTime'>
    readonly status: FieldRef<"LawyerApplication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LawyerApplication findUnique
   */
  export type LawyerApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LawyerApplication to fetch.
     */
    where: LawyerApplicationWhereUniqueInput
  }

  /**
   * LawyerApplication findUniqueOrThrow
   */
  export type LawyerApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LawyerApplication to fetch.
     */
    where: LawyerApplicationWhereUniqueInput
  }

  /**
   * LawyerApplication findFirst
   */
  export type LawyerApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LawyerApplication to fetch.
     */
    where?: LawyerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerApplications to fetch.
     */
    orderBy?: LawyerApplicationOrderByWithRelationInput | LawyerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerApplications.
     */
    cursor?: LawyerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerApplications.
     */
    distinct?: LawyerApplicationScalarFieldEnum | LawyerApplicationScalarFieldEnum[]
  }

  /**
   * LawyerApplication findFirstOrThrow
   */
  export type LawyerApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LawyerApplication to fetch.
     */
    where?: LawyerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerApplications to fetch.
     */
    orderBy?: LawyerApplicationOrderByWithRelationInput | LawyerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerApplications.
     */
    cursor?: LawyerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerApplications.
     */
    distinct?: LawyerApplicationScalarFieldEnum | LawyerApplicationScalarFieldEnum[]
  }

  /**
   * LawyerApplication findMany
   */
  export type LawyerApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which LawyerApplications to fetch.
     */
    where?: LawyerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerApplications to fetch.
     */
    orderBy?: LawyerApplicationOrderByWithRelationInput | LawyerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawyerApplications.
     */
    cursor?: LawyerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerApplications.
     */
    distinct?: LawyerApplicationScalarFieldEnum | LawyerApplicationScalarFieldEnum[]
  }

  /**
   * LawyerApplication create
   */
  export type LawyerApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a LawyerApplication.
     */
    data: XOR<LawyerApplicationCreateInput, LawyerApplicationUncheckedCreateInput>
  }

  /**
   * LawyerApplication createMany
   */
  export type LawyerApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawyerApplications.
     */
    data: LawyerApplicationCreateManyInput | LawyerApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LawyerApplication createManyAndReturn
   */
  export type LawyerApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many LawyerApplications.
     */
    data: LawyerApplicationCreateManyInput | LawyerApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerApplication update
   */
  export type LawyerApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a LawyerApplication.
     */
    data: XOR<LawyerApplicationUpdateInput, LawyerApplicationUncheckedUpdateInput>
    /**
     * Choose, which LawyerApplication to update.
     */
    where: LawyerApplicationWhereUniqueInput
  }

  /**
   * LawyerApplication updateMany
   */
  export type LawyerApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawyerApplications.
     */
    data: XOR<LawyerApplicationUpdateManyMutationInput, LawyerApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LawyerApplications to update
     */
    where?: LawyerApplicationWhereInput
    /**
     * Limit how many LawyerApplications to update.
     */
    limit?: number
  }

  /**
   * LawyerApplication updateManyAndReturn
   */
  export type LawyerApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * The data used to update LawyerApplications.
     */
    data: XOR<LawyerApplicationUpdateManyMutationInput, LawyerApplicationUncheckedUpdateManyInput>
    /**
     * Filter which LawyerApplications to update
     */
    where?: LawyerApplicationWhereInput
    /**
     * Limit how many LawyerApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerApplication upsert
   */
  export type LawyerApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the LawyerApplication to update in case it exists.
     */
    where: LawyerApplicationWhereUniqueInput
    /**
     * In case the LawyerApplication found by the `where` argument doesn't exist, create a new LawyerApplication with this data.
     */
    create: XOR<LawyerApplicationCreateInput, LawyerApplicationUncheckedCreateInput>
    /**
     * In case the LawyerApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerApplicationUpdateInput, LawyerApplicationUncheckedUpdateInput>
  }

  /**
   * LawyerApplication delete
   */
  export type LawyerApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
    /**
     * Filter which LawyerApplication to delete.
     */
    where: LawyerApplicationWhereUniqueInput
  }

  /**
   * LawyerApplication deleteMany
   */
  export type LawyerApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerApplications to delete
     */
    where?: LawyerApplicationWhereInput
    /**
     * Limit how many LawyerApplications to delete.
     */
    limit?: number
  }

  /**
   * LawyerApplication.lawyerProfile
   */
  export type LawyerApplication$lawyerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    where?: LawyerProfileWhereInput
  }

  /**
   * LawyerApplication without action
   */
  export type LawyerApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerApplication
     */
    select?: LawyerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerApplication
     */
    omit?: LawyerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerApplicationInclude<ExtArgs> | null
  }


  /**
   * Model LawyerProfile
   */

  export type AggregateLawyerProfile = {
    _count: LawyerProfileCountAggregateOutputType | null
    _avg: LawyerProfileAvgAggregateOutputType | null
    _sum: LawyerProfileSumAggregateOutputType | null
    _min: LawyerProfileMinAggregateOutputType | null
    _max: LawyerProfileMaxAggregateOutputType | null
  }

  export type LawyerProfileAvgAggregateOutputType = {
    experience: number | null
    consultation_fee: number | null
  }

  export type LawyerProfileSumAggregateOutputType = {
    experience: number | null
    consultation_fee: number | null
  }

  export type LawyerProfileMinAggregateOutputType = {
    id: string | null
    lawyer_application_id: string | null
    category: string | null
    phone_number: string | null
    description: string | null
    created_at: Date | null
    experience: number | null
    consultation_fee: number | null
    is_active: boolean | null
  }

  export type LawyerProfileMaxAggregateOutputType = {
    id: string | null
    lawyer_application_id: string | null
    category: string | null
    phone_number: string | null
    description: string | null
    created_at: Date | null
    experience: number | null
    consultation_fee: number | null
    is_active: boolean | null
  }

  export type LawyerProfileCountAggregateOutputType = {
    id: number
    lawyer_application_id: number
    category: number
    phone_number: number
    description: number
    created_at: number
    experience: number
    consultation_fee: number
    is_active: number
    _all: number
  }


  export type LawyerProfileAvgAggregateInputType = {
    experience?: true
    consultation_fee?: true
  }

  export type LawyerProfileSumAggregateInputType = {
    experience?: true
    consultation_fee?: true
  }

  export type LawyerProfileMinAggregateInputType = {
    id?: true
    lawyer_application_id?: true
    category?: true
    phone_number?: true
    description?: true
    created_at?: true
    experience?: true
    consultation_fee?: true
    is_active?: true
  }

  export type LawyerProfileMaxAggregateInputType = {
    id?: true
    lawyer_application_id?: true
    category?: true
    phone_number?: true
    description?: true
    created_at?: true
    experience?: true
    consultation_fee?: true
    is_active?: true
  }

  export type LawyerProfileCountAggregateInputType = {
    id?: true
    lawyer_application_id?: true
    category?: true
    phone_number?: true
    description?: true
    created_at?: true
    experience?: true
    consultation_fee?: true
    is_active?: true
    _all?: true
  }

  export type LawyerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerProfile to aggregate.
     */
    where?: LawyerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerProfiles to fetch.
     */
    orderBy?: LawyerProfileOrderByWithRelationInput | LawyerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawyerProfiles
    **/
    _count?: true | LawyerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawyerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawyerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerProfileMaxAggregateInputType
  }

  export type GetLawyerProfileAggregateType<T extends LawyerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyerProfile[P]>
      : GetScalarType<T[P], AggregateLawyerProfile[P]>
  }




  export type LawyerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerProfileWhereInput
    orderBy?: LawyerProfileOrderByWithAggregationInput | LawyerProfileOrderByWithAggregationInput[]
    by: LawyerProfileScalarFieldEnum[] | LawyerProfileScalarFieldEnum
    having?: LawyerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerProfileCountAggregateInputType | true
    _avg?: LawyerProfileAvgAggregateInputType
    _sum?: LawyerProfileSumAggregateInputType
    _min?: LawyerProfileMinAggregateInputType
    _max?: LawyerProfileMaxAggregateInputType
  }

  export type LawyerProfileGroupByOutputType = {
    id: string
    lawyer_application_id: string
    category: string
    phone_number: string
    description: string
    created_at: Date
    experience: number
    consultation_fee: number
    is_active: boolean
    _count: LawyerProfileCountAggregateOutputType | null
    _avg: LawyerProfileAvgAggregateOutputType | null
    _sum: LawyerProfileSumAggregateOutputType | null
    _min: LawyerProfileMinAggregateOutputType | null
    _max: LawyerProfileMaxAggregateOutputType | null
  }

  type GetLawyerProfileGroupByPayload<T extends LawyerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerProfileGroupByOutputType[P]>
        }
      >
    >


  export type LawyerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyer_application_id?: boolean
    category?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    experience?: boolean
    consultation_fee?: boolean
    is_active?: boolean
    lawyerApplication?: boolean | LawyerApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerProfile"]>

  export type LawyerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyer_application_id?: boolean
    category?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    experience?: boolean
    consultation_fee?: boolean
    is_active?: boolean
    lawyerApplication?: boolean | LawyerApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerProfile"]>

  export type LawyerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyer_application_id?: boolean
    category?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    experience?: boolean
    consultation_fee?: boolean
    is_active?: boolean
    lawyerApplication?: boolean | LawyerApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerProfile"]>

  export type LawyerProfileSelectScalar = {
    id?: boolean
    lawyer_application_id?: boolean
    category?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    experience?: boolean
    consultation_fee?: boolean
    is_active?: boolean
  }

  export type LawyerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lawyer_application_id" | "category" | "phone_number" | "description" | "created_at" | "experience" | "consultation_fee" | "is_active", ExtArgs["result"]["lawyerProfile"]>
  export type LawyerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyerApplication?: boolean | LawyerApplicationDefaultArgs<ExtArgs>
  }
  export type LawyerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyerApplication?: boolean | LawyerApplicationDefaultArgs<ExtArgs>
  }
  export type LawyerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyerApplication?: boolean | LawyerApplicationDefaultArgs<ExtArgs>
  }

  export type $LawyerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawyerProfile"
    objects: {
      lawyerApplication: Prisma.$LawyerApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lawyer_application_id: string
      category: string
      phone_number: string
      description: string
      created_at: Date
      experience: number
      consultation_fee: number
      is_active: boolean
    }, ExtArgs["result"]["lawyerProfile"]>
    composites: {}
  }

  type LawyerProfileGetPayload<S extends boolean | null | undefined | LawyerProfileDefaultArgs> = $Result.GetResult<Prisma.$LawyerProfilePayload, S>

  type LawyerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerProfileCountAggregateInputType | true
    }

  export interface LawyerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawyerProfile'], meta: { name: 'LawyerProfile' } }
    /**
     * Find zero or one LawyerProfile that matches the filter.
     * @param {LawyerProfileFindUniqueArgs} args - Arguments to find a LawyerProfile
     * @example
     * // Get one LawyerProfile
     * const lawyerProfile = await prisma.lawyerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerProfileFindUniqueArgs>(args: SelectSubset<T, LawyerProfileFindUniqueArgs<ExtArgs>>): Prisma__LawyerProfileClient<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LawyerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerProfileFindUniqueOrThrowArgs} args - Arguments to find a LawyerProfile
     * @example
     * // Get one LawyerProfile
     * const lawyerProfile = await prisma.lawyerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerProfileClient<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerProfileFindFirstArgs} args - Arguments to find a LawyerProfile
     * @example
     * // Get one LawyerProfile
     * const lawyerProfile = await prisma.lawyerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerProfileFindFirstArgs>(args?: SelectSubset<T, LawyerProfileFindFirstArgs<ExtArgs>>): Prisma__LawyerProfileClient<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerProfileFindFirstOrThrowArgs} args - Arguments to find a LawyerProfile
     * @example
     * // Get one LawyerProfile
     * const lawyerProfile = await prisma.lawyerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerProfileClient<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LawyerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawyerProfiles
     * const lawyerProfiles = await prisma.lawyerProfile.findMany()
     * 
     * // Get first 10 LawyerProfiles
     * const lawyerProfiles = await prisma.lawyerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerProfileWithIdOnly = await prisma.lawyerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerProfileFindManyArgs>(args?: SelectSubset<T, LawyerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LawyerProfile.
     * @param {LawyerProfileCreateArgs} args - Arguments to create a LawyerProfile.
     * @example
     * // Create one LawyerProfile
     * const LawyerProfile = await prisma.lawyerProfile.create({
     *   data: {
     *     // ... data to create a LawyerProfile
     *   }
     * })
     * 
     */
    create<T extends LawyerProfileCreateArgs>(args: SelectSubset<T, LawyerProfileCreateArgs<ExtArgs>>): Prisma__LawyerProfileClient<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LawyerProfiles.
     * @param {LawyerProfileCreateManyArgs} args - Arguments to create many LawyerProfiles.
     * @example
     * // Create many LawyerProfiles
     * const lawyerProfile = await prisma.lawyerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerProfileCreateManyArgs>(args?: SelectSubset<T, LawyerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LawyerProfiles and returns the data saved in the database.
     * @param {LawyerProfileCreateManyAndReturnArgs} args - Arguments to create many LawyerProfiles.
     * @example
     * // Create many LawyerProfiles
     * const lawyerProfile = await prisma.lawyerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LawyerProfiles and only return the `id`
     * const lawyerProfileWithIdOnly = await prisma.lawyerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawyerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, LawyerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LawyerProfile.
     * @param {LawyerProfileDeleteArgs} args - Arguments to delete one LawyerProfile.
     * @example
     * // Delete one LawyerProfile
     * const LawyerProfile = await prisma.lawyerProfile.delete({
     *   where: {
     *     // ... filter to delete one LawyerProfile
     *   }
     * })
     * 
     */
    delete<T extends LawyerProfileDeleteArgs>(args: SelectSubset<T, LawyerProfileDeleteArgs<ExtArgs>>): Prisma__LawyerProfileClient<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LawyerProfile.
     * @param {LawyerProfileUpdateArgs} args - Arguments to update one LawyerProfile.
     * @example
     * // Update one LawyerProfile
     * const lawyerProfile = await prisma.lawyerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerProfileUpdateArgs>(args: SelectSubset<T, LawyerProfileUpdateArgs<ExtArgs>>): Prisma__LawyerProfileClient<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LawyerProfiles.
     * @param {LawyerProfileDeleteManyArgs} args - Arguments to filter LawyerProfiles to delete.
     * @example
     * // Delete a few LawyerProfiles
     * const { count } = await prisma.lawyerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerProfileDeleteManyArgs>(args?: SelectSubset<T, LawyerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawyerProfiles
     * const lawyerProfile = await prisma.lawyerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerProfileUpdateManyArgs>(args: SelectSubset<T, LawyerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerProfiles and returns the data updated in the database.
     * @param {LawyerProfileUpdateManyAndReturnArgs} args - Arguments to update many LawyerProfiles.
     * @example
     * // Update many LawyerProfiles
     * const lawyerProfile = await prisma.lawyerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LawyerProfiles and only return the `id`
     * const lawyerProfileWithIdOnly = await prisma.lawyerProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawyerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, LawyerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LawyerProfile.
     * @param {LawyerProfileUpsertArgs} args - Arguments to update or create a LawyerProfile.
     * @example
     * // Update or create a LawyerProfile
     * const lawyerProfile = await prisma.lawyerProfile.upsert({
     *   create: {
     *     // ... data to create a LawyerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawyerProfile we want to update
     *   }
     * })
     */
    upsert<T extends LawyerProfileUpsertArgs>(args: SelectSubset<T, LawyerProfileUpsertArgs<ExtArgs>>): Prisma__LawyerProfileClient<$Result.GetResult<Prisma.$LawyerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LawyerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerProfileCountArgs} args - Arguments to filter LawyerProfiles to count.
     * @example
     * // Count the number of LawyerProfiles
     * const count = await prisma.lawyerProfile.count({
     *   where: {
     *     // ... the filter for the LawyerProfiles we want to count
     *   }
     * })
    **/
    count<T extends LawyerProfileCountArgs>(
      args?: Subset<T, LawyerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawyerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerProfileAggregateArgs>(args: Subset<T, LawyerProfileAggregateArgs>): Prisma.PrismaPromise<GetLawyerProfileAggregateType<T>>

    /**
     * Group by LawyerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerProfileGroupByArgs} args - Group by arguments.
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
      T extends LawyerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerProfileGroupByArgs['orderBy'] }
        : { orderBy?: LawyerProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawyerProfile model
   */
  readonly fields: LawyerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawyerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lawyerApplication<T extends LawyerApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LawyerApplicationDefaultArgs<ExtArgs>>): Prisma__LawyerApplicationClient<$Result.GetResult<Prisma.$LawyerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LawyerProfile model
   */
  interface LawyerProfileFieldRefs {
    readonly id: FieldRef<"LawyerProfile", 'String'>
    readonly lawyer_application_id: FieldRef<"LawyerProfile", 'String'>
    readonly category: FieldRef<"LawyerProfile", 'String'>
    readonly phone_number: FieldRef<"LawyerProfile", 'String'>
    readonly description: FieldRef<"LawyerProfile", 'String'>
    readonly created_at: FieldRef<"LawyerProfile", 'DateTime'>
    readonly experience: FieldRef<"LawyerProfile", 'Int'>
    readonly consultation_fee: FieldRef<"LawyerProfile", 'Int'>
    readonly is_active: FieldRef<"LawyerProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LawyerProfile findUnique
   */
  export type LawyerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which LawyerProfile to fetch.
     */
    where: LawyerProfileWhereUniqueInput
  }

  /**
   * LawyerProfile findUniqueOrThrow
   */
  export type LawyerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which LawyerProfile to fetch.
     */
    where: LawyerProfileWhereUniqueInput
  }

  /**
   * LawyerProfile findFirst
   */
  export type LawyerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which LawyerProfile to fetch.
     */
    where?: LawyerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerProfiles to fetch.
     */
    orderBy?: LawyerProfileOrderByWithRelationInput | LawyerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerProfiles.
     */
    cursor?: LawyerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerProfiles.
     */
    distinct?: LawyerProfileScalarFieldEnum | LawyerProfileScalarFieldEnum[]
  }

  /**
   * LawyerProfile findFirstOrThrow
   */
  export type LawyerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which LawyerProfile to fetch.
     */
    where?: LawyerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerProfiles to fetch.
     */
    orderBy?: LawyerProfileOrderByWithRelationInput | LawyerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerProfiles.
     */
    cursor?: LawyerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerProfiles.
     */
    distinct?: LawyerProfileScalarFieldEnum | LawyerProfileScalarFieldEnum[]
  }

  /**
   * LawyerProfile findMany
   */
  export type LawyerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    /**
     * Filter, which LawyerProfiles to fetch.
     */
    where?: LawyerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerProfiles to fetch.
     */
    orderBy?: LawyerProfileOrderByWithRelationInput | LawyerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawyerProfiles.
     */
    cursor?: LawyerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerProfiles.
     */
    distinct?: LawyerProfileScalarFieldEnum | LawyerProfileScalarFieldEnum[]
  }

  /**
   * LawyerProfile create
   */
  export type LawyerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a LawyerProfile.
     */
    data: XOR<LawyerProfileCreateInput, LawyerProfileUncheckedCreateInput>
  }

  /**
   * LawyerProfile createMany
   */
  export type LawyerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawyerProfiles.
     */
    data: LawyerProfileCreateManyInput | LawyerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LawyerProfile createManyAndReturn
   */
  export type LawyerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many LawyerProfiles.
     */
    data: LawyerProfileCreateManyInput | LawyerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerProfile update
   */
  export type LawyerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a LawyerProfile.
     */
    data: XOR<LawyerProfileUpdateInput, LawyerProfileUncheckedUpdateInput>
    /**
     * Choose, which LawyerProfile to update.
     */
    where: LawyerProfileWhereUniqueInput
  }

  /**
   * LawyerProfile updateMany
   */
  export type LawyerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawyerProfiles.
     */
    data: XOR<LawyerProfileUpdateManyMutationInput, LawyerProfileUncheckedUpdateManyInput>
    /**
     * Filter which LawyerProfiles to update
     */
    where?: LawyerProfileWhereInput
    /**
     * Limit how many LawyerProfiles to update.
     */
    limit?: number
  }

  /**
   * LawyerProfile updateManyAndReturn
   */
  export type LawyerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * The data used to update LawyerProfiles.
     */
    data: XOR<LawyerProfileUpdateManyMutationInput, LawyerProfileUncheckedUpdateManyInput>
    /**
     * Filter which LawyerProfiles to update
     */
    where?: LawyerProfileWhereInput
    /**
     * Limit how many LawyerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerProfile upsert
   */
  export type LawyerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the LawyerProfile to update in case it exists.
     */
    where: LawyerProfileWhereUniqueInput
    /**
     * In case the LawyerProfile found by the `where` argument doesn't exist, create a new LawyerProfile with this data.
     */
    create: XOR<LawyerProfileCreateInput, LawyerProfileUncheckedCreateInput>
    /**
     * In case the LawyerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerProfileUpdateInput, LawyerProfileUncheckedUpdateInput>
  }

  /**
   * LawyerProfile delete
   */
  export type LawyerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
    /**
     * Filter which LawyerProfile to delete.
     */
    where: LawyerProfileWhereUniqueInput
  }

  /**
   * LawyerProfile deleteMany
   */
  export type LawyerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerProfiles to delete
     */
    where?: LawyerProfileWhereInput
    /**
     * Limit how many LawyerProfiles to delete.
     */
    limit?: number
  }

  /**
   * LawyerProfile without action
   */
  export type LawyerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerProfile
     */
    select?: LawyerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerProfile
     */
    omit?: LawyerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerProfileInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    second_name: 'second_name',
    email: 'email',
    role: 'role',
    dob: 'dob',
    created_at: 'created_at',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LawyerApplicationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    file_url: 'file_url',
    lsk_number: 'lsk_number',
    created_at: 'created_at',
    status: 'status'
  };

  export type LawyerApplicationScalarFieldEnum = (typeof LawyerApplicationScalarFieldEnum)[keyof typeof LawyerApplicationScalarFieldEnum]


  export const LawyerProfileScalarFieldEnum: {
    id: 'id',
    lawyer_application_id: 'lawyer_application_id',
    category: 'category',
    phone_number: 'phone_number',
    description: 'description',
    created_at: 'created_at',
    experience: 'experience',
    consultation_fee: 'consultation_fee',
    is_active: 'is_active'
  };

  export type LawyerProfileScalarFieldEnum = (typeof LawyerProfileScalarFieldEnum)[keyof typeof LawyerProfileScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    second_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    lawyerApplication?: XOR<LawyerApplicationNullableScalarRelationFilter, LawyerApplicationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrderInput | SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    lawyerApplication?: LawyerApplicationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    second_name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    lawyerApplication?: XOR<LawyerApplicationNullableScalarRelationFilter, LawyerApplicationWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrderInput | SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    second_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    dob?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type LawyerApplicationWhereInput = {
    AND?: LawyerApplicationWhereInput | LawyerApplicationWhereInput[]
    OR?: LawyerApplicationWhereInput[]
    NOT?: LawyerApplicationWhereInput | LawyerApplicationWhereInput[]
    id?: StringFilter<"LawyerApplication"> | string
    user_id?: StringFilter<"LawyerApplication"> | string
    file_url?: StringFilter<"LawyerApplication"> | string
    lsk_number?: StringFilter<"LawyerApplication"> | string
    created_at?: DateTimeFilter<"LawyerApplication"> | Date | string
    status?: StringFilter<"LawyerApplication"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lawyerProfile?: XOR<LawyerProfileNullableScalarRelationFilter, LawyerProfileWhereInput> | null
  }

  export type LawyerApplicationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    lawyerProfile?: LawyerProfileOrderByWithRelationInput
  }

  export type LawyerApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: LawyerApplicationWhereInput | LawyerApplicationWhereInput[]
    OR?: LawyerApplicationWhereInput[]
    NOT?: LawyerApplicationWhereInput | LawyerApplicationWhereInput[]
    file_url?: StringFilter<"LawyerApplication"> | string
    lsk_number?: StringFilter<"LawyerApplication"> | string
    created_at?: DateTimeFilter<"LawyerApplication"> | Date | string
    status?: StringFilter<"LawyerApplication"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lawyerProfile?: XOR<LawyerProfileNullableScalarRelationFilter, LawyerProfileWhereInput> | null
  }, "id" | "user_id">

  export type LawyerApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: LawyerApplicationCountOrderByAggregateInput
    _max?: LawyerApplicationMaxOrderByAggregateInput
    _min?: LawyerApplicationMinOrderByAggregateInput
  }

  export type LawyerApplicationScalarWhereWithAggregatesInput = {
    AND?: LawyerApplicationScalarWhereWithAggregatesInput | LawyerApplicationScalarWhereWithAggregatesInput[]
    OR?: LawyerApplicationScalarWhereWithAggregatesInput[]
    NOT?: LawyerApplicationScalarWhereWithAggregatesInput | LawyerApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LawyerApplication"> | string
    user_id?: StringWithAggregatesFilter<"LawyerApplication"> | string
    file_url?: StringWithAggregatesFilter<"LawyerApplication"> | string
    lsk_number?: StringWithAggregatesFilter<"LawyerApplication"> | string
    created_at?: DateTimeWithAggregatesFilter<"LawyerApplication"> | Date | string
    status?: StringWithAggregatesFilter<"LawyerApplication"> | string
  }

  export type LawyerProfileWhereInput = {
    AND?: LawyerProfileWhereInput | LawyerProfileWhereInput[]
    OR?: LawyerProfileWhereInput[]
    NOT?: LawyerProfileWhereInput | LawyerProfileWhereInput[]
    id?: StringFilter<"LawyerProfile"> | string
    lawyer_application_id?: StringFilter<"LawyerProfile"> | string
    category?: StringFilter<"LawyerProfile"> | string
    phone_number?: StringFilter<"LawyerProfile"> | string
    description?: StringFilter<"LawyerProfile"> | string
    created_at?: DateTimeFilter<"LawyerProfile"> | Date | string
    experience?: IntFilter<"LawyerProfile"> | number
    consultation_fee?: IntFilter<"LawyerProfile"> | number
    is_active?: BoolFilter<"LawyerProfile"> | boolean
    lawyerApplication?: XOR<LawyerApplicationScalarRelationFilter, LawyerApplicationWhereInput>
  }

  export type LawyerProfileOrderByWithRelationInput = {
    id?: SortOrder
    lawyer_application_id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
    lawyerApplication?: LawyerApplicationOrderByWithRelationInput
  }

  export type LawyerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lawyer_application_id?: string
    AND?: LawyerProfileWhereInput | LawyerProfileWhereInput[]
    OR?: LawyerProfileWhereInput[]
    NOT?: LawyerProfileWhereInput | LawyerProfileWhereInput[]
    category?: StringFilter<"LawyerProfile"> | string
    phone_number?: StringFilter<"LawyerProfile"> | string
    description?: StringFilter<"LawyerProfile"> | string
    created_at?: DateTimeFilter<"LawyerProfile"> | Date | string
    experience?: IntFilter<"LawyerProfile"> | number
    consultation_fee?: IntFilter<"LawyerProfile"> | number
    is_active?: BoolFilter<"LawyerProfile"> | boolean
    lawyerApplication?: XOR<LawyerApplicationScalarRelationFilter, LawyerApplicationWhereInput>
  }, "id" | "lawyer_application_id">

  export type LawyerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    lawyer_application_id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
    _count?: LawyerProfileCountOrderByAggregateInput
    _avg?: LawyerProfileAvgOrderByAggregateInput
    _max?: LawyerProfileMaxOrderByAggregateInput
    _min?: LawyerProfileMinOrderByAggregateInput
    _sum?: LawyerProfileSumOrderByAggregateInput
  }

  export type LawyerProfileScalarWhereWithAggregatesInput = {
    AND?: LawyerProfileScalarWhereWithAggregatesInput | LawyerProfileScalarWhereWithAggregatesInput[]
    OR?: LawyerProfileScalarWhereWithAggregatesInput[]
    NOT?: LawyerProfileScalarWhereWithAggregatesInput | LawyerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LawyerProfile"> | string
    lawyer_application_id?: StringWithAggregatesFilter<"LawyerProfile"> | string
    category?: StringWithAggregatesFilter<"LawyerProfile"> | string
    phone_number?: StringWithAggregatesFilter<"LawyerProfile"> | string
    description?: StringWithAggregatesFilter<"LawyerProfile"> | string
    created_at?: DateTimeWithAggregatesFilter<"LawyerProfile"> | Date | string
    experience?: IntWithAggregatesFilter<"LawyerProfile"> | number
    consultation_fee?: IntWithAggregatesFilter<"LawyerProfile"> | number
    is_active?: BoolWithAggregatesFilter<"LawyerProfile"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.UserRole
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
    lawyerApplication?: LawyerApplicationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.UserRole
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
    lawyerApplication?: LawyerApplicationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lawyerApplication?: LawyerApplicationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lawyerApplication?: LawyerApplicationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.UserRole
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LawyerApplicationCreateInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    status: string
    user: UserCreateNestedOneWithoutLawyerApplicationInput
    lawyerProfile?: LawyerProfileCreateNestedOneWithoutLawyerApplicationInput
  }

  export type LawyerApplicationUncheckedCreateInput = {
    id?: string
    user_id: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    status: string
    lawyerProfile?: LawyerProfileUncheckedCreateNestedOneWithoutLawyerApplicationInput
  }

  export type LawyerApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLawyerApplicationNestedInput
    lawyerProfile?: LawyerProfileUpdateOneWithoutLawyerApplicationNestedInput
  }

  export type LawyerApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    lawyerProfile?: LawyerProfileUncheckedUpdateOneWithoutLawyerApplicationNestedInput
  }

  export type LawyerApplicationCreateManyInput = {
    id?: string
    user_id: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    status: string
  }

  export type LawyerApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerProfileCreateInput = {
    id?: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
    lawyerApplication: LawyerApplicationCreateNestedOneWithoutLawyerProfileInput
  }

  export type LawyerProfileUncheckedCreateInput = {
    id?: string
    lawyer_application_id: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
  }

  export type LawyerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    lawyerApplication?: LawyerApplicationUpdateOneRequiredWithoutLawyerProfileNestedInput
  }

  export type LawyerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyer_application_id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LawyerProfileCreateManyInput = {
    id?: string
    lawyer_application_id: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
  }

  export type LawyerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LawyerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyer_application_id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type LawyerApplicationNullableScalarRelationFilter = {
    is?: LawyerApplicationWhereInput | null
    isNot?: LawyerApplicationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LawyerProfileNullableScalarRelationFilter = {
    is?: LawyerProfileWhereInput | null
    isNot?: LawyerProfileWhereInput | null
  }

  export type LawyerApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type LawyerApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type LawyerApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_url?: SortOrder
    lsk_number?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
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

  export type LawyerApplicationScalarRelationFilter = {
    is?: LawyerApplicationWhereInput
    isNot?: LawyerApplicationWhereInput
  }

  export type LawyerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    lawyer_application_id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
  }

  export type LawyerProfileAvgOrderByAggregateInput = {
    experience?: SortOrder
    consultation_fee?: SortOrder
  }

  export type LawyerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    lawyer_application_id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
  }

  export type LawyerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    lawyer_application_id?: SortOrder
    category?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    experience?: SortOrder
    consultation_fee?: SortOrder
    is_active?: SortOrder
  }

  export type LawyerProfileSumOrderByAggregateInput = {
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

  export type LawyerApplicationCreateNestedOneWithoutUserInput = {
    create?: XOR<LawyerApplicationCreateWithoutUserInput, LawyerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LawyerApplicationCreateOrConnectWithoutUserInput
    connect?: LawyerApplicationWhereUniqueInput
  }

  export type LawyerApplicationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LawyerApplicationCreateWithoutUserInput, LawyerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LawyerApplicationCreateOrConnectWithoutUserInput
    connect?: LawyerApplicationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LawyerApplicationUpdateOneWithoutUserNestedInput = {
    create?: XOR<LawyerApplicationCreateWithoutUserInput, LawyerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LawyerApplicationCreateOrConnectWithoutUserInput
    upsert?: LawyerApplicationUpsertWithoutUserInput
    disconnect?: LawyerApplicationWhereInput | boolean
    delete?: LawyerApplicationWhereInput | boolean
    connect?: LawyerApplicationWhereUniqueInput
    update?: XOR<XOR<LawyerApplicationUpdateToOneWithWhereWithoutUserInput, LawyerApplicationUpdateWithoutUserInput>, LawyerApplicationUncheckedUpdateWithoutUserInput>
  }

  export type LawyerApplicationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LawyerApplicationCreateWithoutUserInput, LawyerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LawyerApplicationCreateOrConnectWithoutUserInput
    upsert?: LawyerApplicationUpsertWithoutUserInput
    disconnect?: LawyerApplicationWhereInput | boolean
    delete?: LawyerApplicationWhereInput | boolean
    connect?: LawyerApplicationWhereUniqueInput
    update?: XOR<XOR<LawyerApplicationUpdateToOneWithWhereWithoutUserInput, LawyerApplicationUpdateWithoutUserInput>, LawyerApplicationUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutLawyerApplicationInput = {
    create?: XOR<UserCreateWithoutLawyerApplicationInput, UserUncheckedCreateWithoutLawyerApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLawyerApplicationInput
    connect?: UserWhereUniqueInput
  }

  export type LawyerProfileCreateNestedOneWithoutLawyerApplicationInput = {
    create?: XOR<LawyerProfileCreateWithoutLawyerApplicationInput, LawyerProfileUncheckedCreateWithoutLawyerApplicationInput>
    connectOrCreate?: LawyerProfileCreateOrConnectWithoutLawyerApplicationInput
    connect?: LawyerProfileWhereUniqueInput
  }

  export type LawyerProfileUncheckedCreateNestedOneWithoutLawyerApplicationInput = {
    create?: XOR<LawyerProfileCreateWithoutLawyerApplicationInput, LawyerProfileUncheckedCreateWithoutLawyerApplicationInput>
    connectOrCreate?: LawyerProfileCreateOrConnectWithoutLawyerApplicationInput
    connect?: LawyerProfileWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLawyerApplicationNestedInput = {
    create?: XOR<UserCreateWithoutLawyerApplicationInput, UserUncheckedCreateWithoutLawyerApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLawyerApplicationInput
    upsert?: UserUpsertWithoutLawyerApplicationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLawyerApplicationInput, UserUpdateWithoutLawyerApplicationInput>, UserUncheckedUpdateWithoutLawyerApplicationInput>
  }

  export type LawyerProfileUpdateOneWithoutLawyerApplicationNestedInput = {
    create?: XOR<LawyerProfileCreateWithoutLawyerApplicationInput, LawyerProfileUncheckedCreateWithoutLawyerApplicationInput>
    connectOrCreate?: LawyerProfileCreateOrConnectWithoutLawyerApplicationInput
    upsert?: LawyerProfileUpsertWithoutLawyerApplicationInput
    disconnect?: LawyerProfileWhereInput | boolean
    delete?: LawyerProfileWhereInput | boolean
    connect?: LawyerProfileWhereUniqueInput
    update?: XOR<XOR<LawyerProfileUpdateToOneWithWhereWithoutLawyerApplicationInput, LawyerProfileUpdateWithoutLawyerApplicationInput>, LawyerProfileUncheckedUpdateWithoutLawyerApplicationInput>
  }

  export type LawyerProfileUncheckedUpdateOneWithoutLawyerApplicationNestedInput = {
    create?: XOR<LawyerProfileCreateWithoutLawyerApplicationInput, LawyerProfileUncheckedCreateWithoutLawyerApplicationInput>
    connectOrCreate?: LawyerProfileCreateOrConnectWithoutLawyerApplicationInput
    upsert?: LawyerProfileUpsertWithoutLawyerApplicationInput
    disconnect?: LawyerProfileWhereInput | boolean
    delete?: LawyerProfileWhereInput | boolean
    connect?: LawyerProfileWhereUniqueInput
    update?: XOR<XOR<LawyerProfileUpdateToOneWithWhereWithoutLawyerApplicationInput, LawyerProfileUpdateWithoutLawyerApplicationInput>, LawyerProfileUncheckedUpdateWithoutLawyerApplicationInput>
  }

  export type LawyerApplicationCreateNestedOneWithoutLawyerProfileInput = {
    create?: XOR<LawyerApplicationCreateWithoutLawyerProfileInput, LawyerApplicationUncheckedCreateWithoutLawyerProfileInput>
    connectOrCreate?: LawyerApplicationCreateOrConnectWithoutLawyerProfileInput
    connect?: LawyerApplicationWhereUniqueInput
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

  export type LawyerApplicationUpdateOneRequiredWithoutLawyerProfileNestedInput = {
    create?: XOR<LawyerApplicationCreateWithoutLawyerProfileInput, LawyerApplicationUncheckedCreateWithoutLawyerProfileInput>
    connectOrCreate?: LawyerApplicationCreateOrConnectWithoutLawyerProfileInput
    upsert?: LawyerApplicationUpsertWithoutLawyerProfileInput
    connect?: LawyerApplicationWhereUniqueInput
    update?: XOR<XOR<LawyerApplicationUpdateToOneWithWhereWithoutLawyerProfileInput, LawyerApplicationUpdateWithoutLawyerProfileInput>, LawyerApplicationUncheckedUpdateWithoutLawyerProfileInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type LawyerApplicationCreateWithoutUserInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    status: string
    lawyerProfile?: LawyerProfileCreateNestedOneWithoutLawyerApplicationInput
  }

  export type LawyerApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    status: string
    lawyerProfile?: LawyerProfileUncheckedCreateNestedOneWithoutLawyerApplicationInput
  }

  export type LawyerApplicationCreateOrConnectWithoutUserInput = {
    where: LawyerApplicationWhereUniqueInput
    create: XOR<LawyerApplicationCreateWithoutUserInput, LawyerApplicationUncheckedCreateWithoutUserInput>
  }

  export type LawyerApplicationUpsertWithoutUserInput = {
    update: XOR<LawyerApplicationUpdateWithoutUserInput, LawyerApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<LawyerApplicationCreateWithoutUserInput, LawyerApplicationUncheckedCreateWithoutUserInput>
    where?: LawyerApplicationWhereInput
  }

  export type LawyerApplicationUpdateToOneWithWhereWithoutUserInput = {
    where?: LawyerApplicationWhereInput
    data: XOR<LawyerApplicationUpdateWithoutUserInput, LawyerApplicationUncheckedUpdateWithoutUserInput>
  }

  export type LawyerApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    lawyerProfile?: LawyerProfileUpdateOneWithoutLawyerApplicationNestedInput
  }

  export type LawyerApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    lawyerProfile?: LawyerProfileUncheckedUpdateOneWithoutLawyerApplicationNestedInput
  }

  export type UserCreateWithoutLawyerApplicationInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.UserRole
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUncheckedCreateWithoutLawyerApplicationInput = {
    id?: string
    first_name: string
    second_name: string
    email: string
    role?: $Enums.UserRole
    dob?: Date | string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserCreateOrConnectWithoutLawyerApplicationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLawyerApplicationInput, UserUncheckedCreateWithoutLawyerApplicationInput>
  }

  export type LawyerProfileCreateWithoutLawyerApplicationInput = {
    id?: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
  }

  export type LawyerProfileUncheckedCreateWithoutLawyerApplicationInput = {
    id?: string
    category: string
    phone_number: string
    description: string
    created_at?: Date | string
    experience: number
    consultation_fee: number
    is_active?: boolean
  }

  export type LawyerProfileCreateOrConnectWithoutLawyerApplicationInput = {
    where: LawyerProfileWhereUniqueInput
    create: XOR<LawyerProfileCreateWithoutLawyerApplicationInput, LawyerProfileUncheckedCreateWithoutLawyerApplicationInput>
  }

  export type UserUpsertWithoutLawyerApplicationInput = {
    update: XOR<UserUpdateWithoutLawyerApplicationInput, UserUncheckedUpdateWithoutLawyerApplicationInput>
    create: XOR<UserCreateWithoutLawyerApplicationInput, UserUncheckedCreateWithoutLawyerApplicationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLawyerApplicationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLawyerApplicationInput, UserUncheckedUpdateWithoutLawyerApplicationInput>
  }

  export type UserUpdateWithoutLawyerApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutLawyerApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LawyerProfileUpsertWithoutLawyerApplicationInput = {
    update: XOR<LawyerProfileUpdateWithoutLawyerApplicationInput, LawyerProfileUncheckedUpdateWithoutLawyerApplicationInput>
    create: XOR<LawyerProfileCreateWithoutLawyerApplicationInput, LawyerProfileUncheckedCreateWithoutLawyerApplicationInput>
    where?: LawyerProfileWhereInput
  }

  export type LawyerProfileUpdateToOneWithWhereWithoutLawyerApplicationInput = {
    where?: LawyerProfileWhereInput
    data: XOR<LawyerProfileUpdateWithoutLawyerApplicationInput, LawyerProfileUncheckedUpdateWithoutLawyerApplicationInput>
  }

  export type LawyerProfileUpdateWithoutLawyerApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LawyerProfileUncheckedUpdateWithoutLawyerApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: IntFieldUpdateOperationsInput | number
    consultation_fee?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LawyerApplicationCreateWithoutLawyerProfileInput = {
    id?: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    status: string
    user: UserCreateNestedOneWithoutLawyerApplicationInput
  }

  export type LawyerApplicationUncheckedCreateWithoutLawyerProfileInput = {
    id?: string
    user_id: string
    file_url: string
    lsk_number: string
    created_at?: Date | string
    status: string
  }

  export type LawyerApplicationCreateOrConnectWithoutLawyerProfileInput = {
    where: LawyerApplicationWhereUniqueInput
    create: XOR<LawyerApplicationCreateWithoutLawyerProfileInput, LawyerApplicationUncheckedCreateWithoutLawyerProfileInput>
  }

  export type LawyerApplicationUpsertWithoutLawyerProfileInput = {
    update: XOR<LawyerApplicationUpdateWithoutLawyerProfileInput, LawyerApplicationUncheckedUpdateWithoutLawyerProfileInput>
    create: XOR<LawyerApplicationCreateWithoutLawyerProfileInput, LawyerApplicationUncheckedCreateWithoutLawyerProfileInput>
    where?: LawyerApplicationWhereInput
  }

  export type LawyerApplicationUpdateToOneWithWhereWithoutLawyerProfileInput = {
    where?: LawyerApplicationWhereInput
    data: XOR<LawyerApplicationUpdateWithoutLawyerProfileInput, LawyerApplicationUncheckedUpdateWithoutLawyerProfileInput>
  }

  export type LawyerApplicationUpdateWithoutLawyerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLawyerApplicationNestedInput
  }

  export type LawyerApplicationUncheckedUpdateWithoutLawyerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    lsk_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
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