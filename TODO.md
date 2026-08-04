# Optimasi Performa Geowisata Karangsambung

## Rencana

- [x] 1. Setup build pipeline Tailwind v4 (package.json, postcss.config.js, assets/css/main.css)
- [x] 2. Update `hugo.toml` (minify, imaging, locale)
- [x] 3. Update `layouts/_default/baseof.html` (pakai CSS compiled + meta SEO + defer script)
- [x] 4. Update `layouts/index.html` (hapus CDN Tailwind, pindah CSS ke file, optimasi gambar, optimasi JS carousel)
- [x] 5. Update 5 file list.html (loading lazy, decoding async, width/height)
- [x] 6. Update 5 file single.html (loading lazy, decoding async, width/height)
- [x] 7. Update `static/admin/index.html` (defer script)
- [x] 8. Tambah `_default/single.html` & `_default/list.html` (hapus warning layout)
- [x] 9. Build & verifikasi (npm run build:css, hugo) — bersih tanpa warning

## Catatan Duplikat Konten

- `content/destinasi/singkapan-diabas-gunung-parang.md` berisi skema lama (tidak terpakai oleh layout, path gambar `/images/destinasi/...` tidak ada). Ini file stale yang tidak dirender oleh layout manapun.
- Ada dua file artikel serupa: `2026-08-02-dari-dasar-laut...` dan `dari-dasar-laut-hingga-menjadi-daratan-perjalanan-panjang-pulau-jawa.md`. Keduanya berisi konten yang mirip.

## Cara Build

```bash
npm install
npm run build:css
hugo --gc
```
