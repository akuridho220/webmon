
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BloksensusScalarFieldEnum = {
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

exports.Prisma.KabupatenScalarFieldEnum = {
  id_kab: 'id_kab',
  nama_kab: 'nama_kab'
};

exports.Prisma.KecamatanScalarFieldEnum = {
  id_kec: 'id_kec',
  nama_kec: 'nama_kec'
};

exports.Prisma.KelurahanScalarFieldEnum = {
  id_kelurahan: 'id_kelurahan',
  nama_kelurahan: 'nama_kelurahan'
};

exports.Prisma.MahasiswaScalarFieldEnum = {
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

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  version: 'version',
  class: 'class',
  group: 'group',
  namespace: 'namespace',
  time: 'time',
  batch: 'batch'
};

exports.Prisma.Posisi_pclScalarFieldEnum = {
  nim: 'nim',
  lokus: 'lokus',
  latitude: 'latitude',
  longitude: 'longitude',
  akurasi: 'akurasi',
  time_created: 'time_created'
};

exports.Prisma.RiwayatposisipclScalarFieldEnum = {
  id: 'id',
  nim: 'nim',
  latitude: 'latitude',
  longitude: 'longitude',
  akurasi: 'akurasi',
  time: 'time'
};

exports.Prisma.RumahtanggaScalarFieldEnum = {
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

exports.Prisma.TimpencacahScalarFieldEnum = {
  id_tim: 'id_tim',
  nama_tim: 'nama_tim',
  nim_pml: 'nim_pml'
};

exports.Prisma.Token_ambil_sampelScalarFieldEnum = {
  riset: 'riset',
  token: 'token',
  lokus: 'lokus',
  count: 'count'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
