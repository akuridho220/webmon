-- CreateTable
CREATE TABLE "bloksensus" (
    "no_bs" VARCHAR(4) NOT NULL,
    "nama_sls" VARCHAR(255) NOT NULL,
    "id_kab" VARCHAR(3) NOT NULL,
    "id_kec" VARCHAR(3) NOT NULL,
    "id_kelurahan" VARCHAR(3) NOT NULL,
    "jml_rt" INTEGER NOT NULL DEFAULT 0,
    "jml_rt_genz" INTEGER NOT NULL DEFAULT 0,
    "jml_genz" INTEGER NOT NULL DEFAULT 0,
    "nim_pencacah" VARCHAR(9) NOT NULL,
    "tim_pencacah" VARCHAR(9) NOT NULL,
    "tgl_listing" DATE,
    "tgl_periksa" DATE,
    "catatan" VARCHAR(255),
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "pk_bloksensus" PRIMARY KEY ("no_bs")
);

-- CreateTable
CREATE TABLE "datast" (
    "no_bs" VARCHAR(14) NOT NULL,
    "kode_ruta" VARCHAR(30) NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "pk_datast" PRIMARY KEY ("kode_ruta")
);

-- CreateTable
CREATE TABLE "kabupaten" (
    "id_kab" VARCHAR(3) NOT NULL,
    "nama_kab" VARCHAR(255) NOT NULL,

    CONSTRAINT "pk_kabupaten" PRIMARY KEY ("id_kab")
);

-- CreateTable
CREATE TABLE "kecamatan" (
    "id_kec" VARCHAR(3) NOT NULL,
    "nama_kec" VARCHAR(255) NOT NULL,

    CONSTRAINT "pk_kecamatan" PRIMARY KEY ("id_kec")
);

-- CreateTable
CREATE TABLE "kelurahan" (
    "id_kelurahan" VARCHAR(3) NOT NULL,
    "nama_kelurahan" VARCHAR(255) NOT NULL,

    CONSTRAINT "pk_kelurahan" PRIMARY KEY ("id_kelurahan")
);

-- CreateTable
CREATE TABLE "mahasiswa" (
    "nim" VARCHAR(9) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "no_hp" VARCHAR(16) NOT NULL,
    "alamat" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "plain_password" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "id_tim" INTEGER NOT NULL,

    CONSTRAINT "pk_mahasiswa" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" BIGSERIAL NOT NULL,
    "version" VARCHAR(255) NOT NULL,
    "class" VARCHAR(255) NOT NULL,
    "group" VARCHAR(255) NOT NULL,
    "namespace" VARCHAR(255) NOT NULL,
    "time" INTEGER NOT NULL,
    "batch" INTEGER NOT NULL,

    CONSTRAINT "pk_migrations" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posisi_pcl" (
    "nim" VARCHAR(9) NOT NULL,
    "lokus" VARCHAR(256),
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "akurasi" DOUBLE PRECISION,
    "time_created" TIMESTAMP(6),

    CONSTRAINT "pk_posisi_pcl" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "riwayatposisipcl" (
    "id" SERIAL NOT NULL,
    "nim" VARCHAR(9) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "akurasi" DOUBLE PRECISION NOT NULL,
    "time" TIMESTAMP(6) NOT NULL DEFAULT '2024-01-05 00:00:00'::timestamp without time zone,

    CONSTRAINT "pk_riwayatposisipcl" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rumahtangga" (
    "kodeRuta" VARCHAR(20) NOT NULL,
    "no_segmen" INTEGER NOT NULL,
    "no_bg_fisik" INTEGER NOT NULL,
    "no_bg_sensus" INTEGER NOT NULL,
    "no_urut_rt" INTEGER NOT NULL,
    "nama_krt" VARCHAR(255) NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_bs" VARCHAR(4) NOT NULL,
    "is_genz_ortu" VARCHAR(1) NOT NULL,
    "jml_genz" INTEGER NOT NULL,
    "no_urut_rt_egb" INTEGER NOT NULL,
    "long" DOUBLE PRECISION,
    "lat" DOUBLE PRECISION,
    "catatan" TEXT NOT NULL,

    CONSTRAINT "pk_rumahtangga" PRIMARY KEY ("kodeRuta")
);

-- CreateTable
CREATE TABLE "timpencacah" (
    "id_tim" SERIAL NOT NULL,
    "nama_tim" VARCHAR(255) NOT NULL,
    "nim_pml" VARCHAR(9) NOT NULL,

    CONSTRAINT "pk_timpencacah" PRIMARY KEY ("nim_pml")
);

-- CreateTable
CREATE TABLE "token_ambil_sampel" (
    "riset" INTEGER NOT NULL,
    "token" INTEGER NOT NULL,
    "lokus" VARCHAR(16),
    "count" INTEGER NOT NULL,

    CONSTRAINT "pk_token_ambil_sampel" PRIMARY KEY ("riset")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(200) NOT NULL,

    CONSTRAINT "pk_users" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webmon_log" (
    "email" VARCHAR(255),
    "waktu" VARCHAR(255)
);

-- CreateIndex
CREATE INDEX "mahasiswa_id_tim" ON "mahasiswa"("id_tim");
