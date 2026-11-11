# ASVISUAL website

Struktur folder:
- index.html : isi halaman
- style.css : tampilan (warna mode siang/malam ada di bagian atas: :root dan [data-theme=light])
- script.js : data (CONFIG, PRICING, BUNDLES, PORTFOLIO, WORKFLOW, TERMS) dan interaksi
- assets/ : logo dan favicon

Isi dulu di script.js, bagian CONFIG:
- whatsapp: format 6281234567890 (tanpa + dan tanpa 0 di depan)
- instagram: link profil
- email: email bisnis

Portfolio: simpan gambar di assets/, lalu isi img:"assets/nama-file.jpg" di array PORTFOLIO.

Publish gratis: seret folder ini ke Netlify atau Cloudflare Pages, atau unggah ke GitHub lalu aktifkan GitHub Pages.
Uji lokal: buka folder di VS Code dan jalankan ekstensi Live Server.
