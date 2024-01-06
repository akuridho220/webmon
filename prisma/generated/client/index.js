
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\DEV\\Webmon\\webmon-63\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIGJsb2tzZW5zdXMgewogIG5vX2JzICAgICAgICBTdHJpbmcgICAgQGlkKG1hcDogInBrX2Jsb2tzZW5zdXMiKSBAZGIuVmFyQ2hhcig0KQogIG5hbWFfc2xzICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjU1KQogIGlkX2thYiAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMykKICBpZF9rZWMgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDMpCiAgaWRfa2VsdXJhaGFuIFN0cmluZyAgICBAZGIuVmFyQ2hhcigzKQogIGptbF9ydCAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkKICBqbWxfcnRfZ2VueiAgSW50ICAgICAgIEBkZWZhdWx0KDApCiAgam1sX2dlbnogICAgIEludCAgICAgICBAZGVmYXVsdCgwKQogIG5pbV9wZW5jYWNhaCBTdHJpbmcgICAgQGRiLlZhckNoYXIoOSkKICB0aW1fcGVuY2FjYWggU3RyaW5nICAgIEBkYi5WYXJDaGFyKDkpCiAgdGdsX2xpc3RpbmcgIERhdGVUaW1lPyBAZGIuRGF0ZQogIHRnbF9wZXJpa3NhICBEYXRlVGltZT8gQGRiLkRhdGUKICBjYXRhdGFuICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBzdGF0dXMgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDIwKQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCBkYXRhc3QgewogIG5vX2JzICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMTQpCiAga29kZV9ydXRhIFN0cmluZyBAaWQobWFwOiAicGtfZGF0YXN0IikgQGRiLlZhckNoYXIoMzApCiAgc3RhdHVzICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMCkKCiAgQEBpZ25vcmUKfQoKbW9kZWwga2FidXBhdGVuIHsKICBpZF9rYWIgICBTdHJpbmcgQGlkKG1hcDogInBrX2thYnVwYXRlbiIpIEBkYi5WYXJDaGFyKDMpCiAgbmFtYV9rYWIgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwga2VjYW1hdGFuIHsKICBpZF9rZWMgICBTdHJpbmcgQGlkKG1hcDogInBrX2tlY2FtYXRhbiIpIEBkYi5WYXJDaGFyKDMpCiAgbmFtYV9rZWMgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwga2VsdXJhaGFuIHsKICBpZF9rZWx1cmFoYW4gICBTdHJpbmcgQGlkKG1hcDogInBrX2tlbHVyYWhhbiIpIEBkYi5WYXJDaGFyKDMpCiAgbmFtYV9rZWx1cmFoYW4gU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkKfQoKbW9kZWwgbWFoYXNpc3dhIHsKICBuaW0gICAgICAgICAgICBTdHJpbmcgQGlkKG1hcDogInBrX21haGFzaXN3YSIpIEBkYi5WYXJDaGFyKDkpCiAgZW1haWwgICAgICAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDUwKQogIG5hbWEgICAgICAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgbm9faHAgICAgICAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDE2KQogIGFsYW1hdCAgICAgICAgIFN0cmluZwogIGZvdG8gICAgICAgICAgIFN0cmluZwogIHBsYWluX3Bhc3N3b3JkIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgcGFzc3dvcmQgICAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkKICBpZF90aW0gICAgICAgICBJbnQKCiAgQEBpbmRleChbaWRfdGltXSwgbWFwOiAibWFoYXNpc3dhX2lkX3RpbSIpCn0KCm1vZGVsIG1pZ3JhdGlvbnMgewogIGlkICAgICAgICBCaWdJbnQgQGlkKG1hcDogInBrX21pZ3JhdGlvbnMiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdmVyc2lvbiAgIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgY2xhc3MgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgZ3JvdXAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgbmFtZXNwYWNlIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgdGltZSAgICAgIEludAogIGJhdGNoICAgICBJbnQKfQoKbW9kZWwgcG9zaXNpX3BjbCB7CiAgbmltICAgICAgICAgIFN0cmluZyAgICBAaWQobWFwOiAicGtfcG9zaXNpX3BjbCIpIEBkYi5WYXJDaGFyKDkpCiAgbG9rdXMgICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTYpCiAgbGF0aXR1ZGUgICAgIEZsb2F0PwogIGxvbmdpdHVkZSAgICBGbG9hdD8KICBha3VyYXNpICAgICAgRmxvYXQ/CiAgdGltZV9jcmVhdGVkIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDYpCn0KCm1vZGVsIHJpd2F5YXRwb3Npc2lwY2wgewogIGlkICAgICAgICBJbnQgICAgICBAaWQobWFwOiAicGtfcml3YXlhdHBvc2lzaXBjbCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuaW0gICAgICAgU3RyaW5nICAgQGRiLlZhckNoYXIoOSkKICBsYXRpdHVkZSAgRmxvYXQKICBsb25naXR1ZGUgRmxvYXQKICBha3VyYXNpICAgRmxvYXQKICB0aW1lICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoIicyMDI0LTAxLTA1IDAwOjAwOjAwJzo6dGltZXN0YW1wIHdpdGhvdXQgdGltZSB6b25lIikpIEBkYi5UaW1lc3RhbXAoNikKfQoKbW9kZWwgcnVtYWh0YW5nZ2EgewogIGtvZGVSdXRhICAgICAgIFN0cmluZyBAaWQobWFwOiAicGtfcnVtYWh0YW5nZ2EiKSBAZGIuVmFyQ2hhcigyMCkKICBub19zZWdtZW4gICAgICBJbnQKICBub19iZ19maXNpayAgICBJbnQKICBub19iZ19zZW5zdXMgICBJbnQKICBub191cnV0X3J0ICAgICBJbnQKICBuYW1hX2tydCAgICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjU1KQogIGFsYW1hdCAgICAgICAgIFN0cmluZwogIG5vX2JzICAgICAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcig0KQogIGlzX2dlbnpfb3J0dSAgIFN0cmluZyBAZGIuVmFyQ2hhcigxKQogIGptbF9nZW56ICAgICAgIEludAogIG5vX3VydXRfcnRfZWdiIEludAogIGxvbmcgICAgICAgICAgIEZsb2F0PwogIGxhdCAgICAgICAgICAgIEZsb2F0PwogIGNhdGF0YW4gICAgICAgIFN0cmluZwp9Cgptb2RlbCB0aW1wZW5jYWNhaCB7CiAgaWRfdGltICAgSW50ICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1hX3RpbSBTdHJpbmcgQGRiLlZhckNoYXIoMjU1KQogIG5pbV9wbWwgIFN0cmluZyBAaWQobWFwOiAicGtfdGltcGVuY2FjYWgiKSBAZGIuVmFyQ2hhcig5KQp9Cgptb2RlbCB0b2tlbl9hbWJpbF9zYW1wZWwgewogIHJpc2V0IEludCAgICAgQGlkKG1hcDogInBrX3Rva2VuX2FtYmlsX3NhbXBlbCIpCiAgdG9rZW4gSW50CiAgbG9rdXMgU3RyaW5nPyBAZGIuVmFyQ2hhcigxNikKICBjb3VudCBJbnQKfQoKbW9kZWwgdXNlcnMgewogIGlkICAgICAgIEludCAgICBAaWQobWFwOiAicGtfdXNlcnMiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZW1haWwgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDEwMCkKICBwYXNzd29yZCBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQp9CgovLy8gVGhlIHVuZGVybHlpbmcgdGFibGUgZG9lcyBub3QgY29udGFpbiBhIHZhbGlkIHVuaXF1ZSBpZGVudGlmaWVyIGFuZCBjYW4gdGhlcmVmb3JlIGN1cnJlbnRseSBub3QgYmUgaGFuZGxlZCBieSBQcmlzbWEgQ2xpZW50Lgptb2RlbCB3ZWJtb25fbG9nIHsKICBlbWFpbCBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKICB3YWt0dSBTdHJpbmc/IEBkYi5WYXJDaGFyKDI1NSkKCiAgQEBpZ25vcmUKfQo=",
  "inlineSchemaHash": "5e7c66429679661bab736ef3591aaaae8215f8baf9ad8572c49cc41b4431412a"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"bloksensus\":{\"dbName\":null,\"fields\":[{\"name\":\"no_bs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_sls\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kab\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_kelurahan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jml_rt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jml_rt_genz\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jml_genz\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim_pencacah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tim_pencacah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_listing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_periksa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"kabupaten\":{\"dbName\":null,\"fields\":[{\"name\":\"id_kab\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kab\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"kecamatan\":{\"dbName\":null,\"fields\":[{\"name\":\"id_kec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"kelurahan\":{\"dbName\":null,\"fields\":[{\"name\":\"id_kelurahan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_kelurahan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mahasiswa\":{\"dbName\":null,\"fields\":[{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plain_password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"migrations\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"class\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namespace\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"posisi_pcl\":{\"dbName\":null,\"fields\":[{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lokus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akurasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"riwayatposisipcl\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"akurasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2024-01-05 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"rumahtangga\":{\"dbName\":null,\"fields\":[{\"name\":\"kodeRuta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_segmen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_bg_fisik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_bg_sensus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_urut_rt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_krt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_bs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_genz_ortu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jml_genz\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_urut_rt_egb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"long\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"timpencacah\":{\"dbName\":null,\"fields\":[{\"name\":\"id_tim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_tim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim_pml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"token_ambil_sampel\":{\"dbName\":null,\"fields\":[{\"name\":\"riset\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lokus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
