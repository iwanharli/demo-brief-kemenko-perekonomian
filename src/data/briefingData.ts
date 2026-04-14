// Briefing Data for Kemenko Perekonomian Newsletter
// 14-15 April 2026

export interface Indicator {
  label: string;
  value: string;
  status: 'positive' | 'negative' | 'neutral' | 'caution';
}

export interface Issue {
  number: string;
  title: string;
  description: string;
  priority?: 'flash' | 'kritis' | 'pantau';
}

export interface GeoItem {
  title: string;
  risk: 'tinggi' | 'sedang' | 'rendah';
  body: string;
  implikasi: string;
  footnote?: string;
}

export interface Program {
  id: string;
  title: string;
  atensi: 'tinggi' | 'sedang' | 'rendah';
  tujuan: string;
  status: string;
  perkembangan: string;
  indikator: string;
  hambatan: string;
}

export interface PresidenItem {
  date: string;
  content: string;
  highlight?: boolean;
}

export interface AgendaItem {
  time: string;
  description: string;
  urgency: 'kritis' | 'penting' | 'pantau';
}

export const indicators: Indicator[] = [
  { label: 'Caddev', value: 'USD 148,2 miliar', status: 'neutral' },
  { label: 'Neraca Dagang', value: 'Surplus 70 bln', status: 'positive' },
  { label: 'Pertumbuhan Q1', value: '~5,5%', status: 'positive' },
  { label: 'Kurs', value: 'Rp 17.000–17.141/USD', status: 'negative' },
  { label: 'BI Rate', value: '4,75%', status: 'neutral' },
  { label: 'PMI Manufaktur', value: '50,1', status: 'neutral' },
  { label: 'APBN Defisit', value: '0,93% PDB', status: 'neutral' },
  { label: 'IKK Maret', value: '122,9 ↓', status: 'caution' },
];

export const executiveIssues: Issue[] = [
  {
    number: '01',
    title: 'Review MSCI Mei 2026 — Ancaman Reklasifikasi Pasar Modal Belum Selesai',
    description: 'MSCI menjadwalkan pengumuman indeks pada 12 Mei 2026 (efektif 1 Juni). Pertemuan OJK–MSCI dijadwalkan pekan ketiga April 2026 sebagai checkpoint kritis. OJK dan BEI telah menyelesaikan 4 dari 8 agenda reformasi transparansi, namun kesimpulan MSCI belum dapat diprediksi. Risiko reklasifikasi dari emerging market ke frontier market berpotensi memicu arus keluar modal asing signifikan (estimasi USD 4–8 miliar).',
  },
  {
    number: '02',
    title: 'Tekanan Rupiah di Level Rp 17.000+ — Dipicu Gejolak Timur Tengah & Dolar Global',
    description: 'Rupiah bergerak di kisaran Rp 17.005–17.141 per USD, dipicu oleh eskalasi konflik AS–Iran, penguatan dolar global, dan sentimen risk-off. Bank Indonesia mengaktifkan triple intervention. Gencatan senjata AS–Iran (8 April) sempat menahan tekanan namun tetap fragil. Tekanan bersifat eksternal, bukan fundamental.',
  },
  {
    number: '03',
    title: 'Groundbreaking 21 Proyek Hilirisasi April 2026 — Momentum Akselerasi Industrialisasi',
    description: 'Presiden Prabowo menargetkan groundbreaking 21 proyek hilirisasi dan 29 proyek Waste to Energy pada April 2026, termasuk pabrik melamin pertama di KEK Gresik. Total investasi Danantara mencapai sekitar USD 26 miliar dengan proyeksi penciptaan 600.000+ lapangan kerja.',
  },
];

export const geoItems: GeoItem[] = [
  {
    title: 'Konflik AS–Iran: Gencatan Senjata Sementara, Hormuz Masih Volatil',
    risk: 'tinggi',
    body: 'Amerika Serikat mengumumkan gencatan senjata dua minggu dengan Iran (per 8 April 2026), dengan syarat pembukaan kembali Selat Hormuz. Iran mengajukan proposal 10 poin sebagai dasar negosiasi lebih luas. Kondisi ini memicu penguatan sementara rupiah dari Rp 17.105 ke Rp 16.985 pada 8 April. Namun situasi masih sangat cair — eskalasi ulang tetap menjadi skenario yang harus diantisipasi. Federal Reserve AS menahan suku bunga di 3,50–3,75% karena inflasi energi yang masih meningkat.',
    implikasi: 'Harga minyak yang meningkat mempertebal risiko defisit migas, menekan subsidi BBM, dan melemahkan rupiah. Gangguan Selat Hormuz memengaruhi harga minyak global dan rantai pasok LPG. Pemerintah telah mengizinkan kenaikan fuel surcharge penerbangan hingga 38% dari batas atas tarif sebagai penyesuaian jangka pendek.',
  },
  {
    title: 'Fragmentasi Perdagangan Global: Tarif AS dan Proteksionisme Berlanjut',
    risk: 'tinggi',
    body: 'Tarif resiprokal AS terhadap Indonesia ditetapkan 19% (turun dari 32%) setelah negosiasi panjang. Dokumen ART telah ditandatangani Presiden Prabowo–Trump pada 19 Februari 2026. IMF memproyeksikan pertumbuhan global 2026 sebesar 3,3% (WEO Januari 2026; dikonfirmasi WEO April 2026 yang dirilis 14 April 2026), dengan risiko fragmentasi perdagangan yang terus berlanjut.',
    implikasi: 'Tarif 19% masih berdampak pada ekspor garmen, alas kaki, elektronik, dan komoditas. Diversifikasi pasar ekspor ke Uni Eropa (I-EU CEPA), CPTPP, dan RCEP menjadi jalur penting untuk mitigasi.',
    footnote: 'Koreksi: Angka "2,6–3,3%" dalam dokumen sebelumnya tidak dapat diverifikasi. Proyeksi yang terverifikasi adalah 3,3% (WEO Jan 2026) dikonfirmasi WEO April 2026. Sumber: IMF.org.',
  },
  {
    title: 'Geoekonomi Rusia: Kunjungan Prabowo–Putin, Energi & BRICS',
    risk: 'sedang',
    body: 'Presiden Prabowo mengunjungi Moskow (berangkat 12 April, tiba 13 April 2026) dan bertemu Putin selama 5 jam di Istana Kremlin. Perdagangan RI–Rusia meningkat 12%. Indonesia–Rusia sepakat memperkuat kerja sama ESDM jangka panjang, hilirisasi, antariksa, pertanian, industri, dan farmasi. Indonesia juga memanfaatkan keanggotaan BRICS untuk memperluas kerja sama ekonomi dengan Rusia. Pertemuan ini adalah pertemuan kelima Prabowo–Putin dalam satu tahun terakhir.',
    implikasi: 'Kerja sama energi Rusia membuka opsi diversifikasi sumber migas di luar Timur Tengah — relevan sebagai lindung nilai saat Selat Hormuz terganggu. Namun perlu diantisipasi sensitivitas Barat terhadap kedekatan RI–Rusia, terutama dalam konteks negosiasi tarif dengan AS dan perundingan I-EU CEPA.',
  },
  {
    title: 'Ancaman Reklasifikasi MSCI — Risiko Pasar Modal Sistemik',
    risk: 'tinggi',
    body: 'MSCI membekukan rebalancing indeks saham Indonesia sejak Januari 2026 akibat permasalahan transparansi kepemilikan saham. Review MSCI Mei 2026 (pengumuman 12 Mei, efektif 1 Juni) adalah checkpoint paling kritis. OJK dan BEI telah menyelesaikan 4 dari 8 agenda reformasi, termasuk peningkatan free float minimum ke 15% dan perluasan subkategori investor KSEI dari 9 menjadi 39.',
    implikasi: 'Reklasifikasi ke frontier market dapat memicu capital outflow USD 4–8 miliar dari dana ETF dan institusional. Moodys (Baa2) dan Fitch (BBB) telah menurunkan outlook sovereign menjadi negatif, namun mempertahankan rating investment grade — S&P masih pada outlook stable. Pertemuan OJK–MSCI pekan ketiga April menjadi momen krusial.',
    footnote: 'Klarifikasi: Penurunan outlook bukan penurunan rating. Moodys Baa2 dan Fitch BBB tetap dalam kategori investment grade. Sumber: Reuters 4 Maret 2026.',
  },
  {
    title: 'Ketegangan Selat Taiwan dan Risiko Rantai Pasok Semikonduktor',
    risk: 'sedang',
    body: 'Taiwan (TSMC) menguasai ~70% pangsa pasar foundry semikonduktor global (data 2025: 69,9%; Q4 2025: 70,4%) — naik dari 64,4% pada 2024. Ketegangan Selat Taiwan yang belum mereda menjadi risiko struktural bagi rantai pasok global.',
    implikasi: 'Peluang jangka menengah: Indonesia dapat memposisikan diri sebagai lokasi alternatif untuk industri semikonduktor hulu-menengah. Komitmen investasi dari Jepang dan Korea Selatan perlu diarahkan sebagian ke sektor ini melalui KEK berbasis teknologi.',
    footnote: 'Koreksi: Angka "~60%" dalam dokumen sebelumnya sudah tidak akurat. Sumber: TrendForce via Focus Taiwan, 13 Maret 2026.',
  },
];

export const dampakData = [
  {
    kanal: 'Kurs & Pasar Modal',
    kondisi: 'Rupiah bergerak di kisaran Rp 17.000–17.141/USD. IHSG menutup 14 April di level 7.675,95 (+2,34%) — sinyal pemulihan. Moodys (Baa2) & Fitch (BBB): outlook negatif — rating investment grade dipertahankan. S&P: masih stable.',
    arah: 'naik',
    implikasi: 'BI aktifkan triple intervention. IHSG rebound positif didukung reformasi OJK. Risiko terbesar: pengumuman MSCI 12 Mei 2026. Pertemuan OJK–MSCI pekan ketiga April menjadi penentu.',
  },
  {
    kanal: 'Energi',
    kondisi: 'WTI ~$97/barel pasca gencatan senjata AS–Iran (8 April). Gencatan senjata fragil — masih berpotensi eskalasi. B50 dijadwalkan 1 Juli 2026. Prabowo–Putin sepakat kerja sama energi migas jangka panjang.',
    arah: 'naik',
    implikasi: 'Alokasi subsidi energi 2026 Rp 203,4 triliun berpotensi tidak mencukupi jika harga minyak bertahan >$97/barel. Diversifikasi pasokan migas via Rusia menjadi opsi strategis baru dari kunjungan Moskow.',
  },
  {
    kanal: 'Pangan',
    kondisi: 'Stok beras Bulog: ~4,6 juta ton (per 8 April 2026). Produksi beras 2025 mencapai 34,7 juta ton. Inflasi pangan terkendali. Program MBG menjangkau 60,2 juta penerima manfaat.',
    arah: 'stabil',
    implikasi: 'Ketahanan pangan dalam kondisi baik. Potensi El Niño "Godzilla" yang dipantau PUPR perlu dimitigasi sejak dini. Kerja sama pertanian dengan Rusia yang disepakati di Moskow relevan untuk diversifikasi rantai pasok pangan.',
    footnote: 'Catatan: Angka 4,6 juta ton belum terkonfirmasi dari Bulog secara resmi. Sumber publik per 5 Apr menyebut 4,4 juta ton (Kompas) dan 4,3 juta ton (Tempo 1 Apr).',
  },
  {
    kanal: 'Investasi',
    kondisi: 'Komitmen investasi Jepang (USD 23,63 miliar) + Korsel (USD 10,26 miliar) = USD 33,89 miliar. FDI menunjukkan tren positif. World Bank koreksi proyeksi Indonesia 2026 dari 4,8% ke 4,7%; ADB tetap di 5,2%.',
    arah: 'turun',
    implikasi: 'Dua lembaga memberikan proyeksi berbeda: World Bank lebih konservatif vs ADB yang optimis. Tekanan MSCI dan outlook negatif lembaga pemeringkat menghambat portofolio jangka pendek. FDI jangka menengah masih prospektif.',
  },
  {
    kanal: 'Industri & Tenaga Kerja',
    kondisi: 'PMI Manufaktur Maret 2026: 50,1 (fase ekspansi tipis). Hilirisasi 21 proyek groundbreaking April 2026. Sektor tekstil tertekan impor murah China.',
    arah: 'stabil',
    implikasi: 'Ekspansi manufaktur masih terbatas dan rentan. Industri padat karya memerlukan proteksi terukur dari gelombang impor China. Hilirisasi sebagai motor lapangan kerja perlu didukung ekosistem UMKM yang kuat.',
  },
];

export const programs: Program[] = [
  {
    id: 'stimulus',
    title: 'Stimulus Ekonomi & Daya Beli',
    atensi: 'tinggi',
    tujuan: 'Jaga daya beli masyarakat, stabilisasi inflasi, dan pertahankan konsumsi rumah tangga sebagai pilar utama pertumbuhan (kontribusi ~54% PDB).',
    status: 'Paket stimulus Q1-2026 senilai Rp 11,92 triliun dalam bentuk bantuan pangan, diskon transportasi, subsidi BBM, dan kompensasi. Defisit APBN terjaga di 0,93% PDB per Maret 2026. Penerimaan pajak Q1: Rp 462,7 triliun (+14,3% YoY). MBG menjangkau 60,2 juta penerima.',
    perkembangan: 'IKK Maret 2026 turun ke 122,9 dari 125,2 di Februari — sinyal pelemahan sentimen konsumen yang perlu diwaspadai. Mandiri Spending Index tetap tinggi di 360,7, mengindikasikan konsumsi segmen menengah atas masih terjaga.',
    indikator: 'Inflasi dalam target BI 2,5%. Kemiskinan turun ke 8,25%. Pengangguran turun ke 4,7%. Gini ratio membaik ke 0,363. Investasi serap 2,71 juta tenaga kerja baru sepanjang 2025.',
    hambatan: 'Pelemahan IKK mengindikasikan tekanan daya beli yang mulai terasa. Kenaikan harga BBM non-subsidi dan tarif listrik dapat menekan konsumsi kelas menengah bawah. Anggaran stimulus yang terbatas memerlukan prioritisasi yang ketat antara efektivitas sosial dan keberlanjutan fiskal.',
  },
  {
    id: 'hilirisasi',
    title: 'Hilirisasi & Industrialisasi',
    atensi: 'tinggi',
    tujuan: 'Transformasi ekspor dari komoditas mentah ke produk olahan bernilai tambah tinggi di sektor mineral, perkebunan, kelautan, dan kehutanan.',
    status: 'Groundbreaking 21 proyek hilirisasi dijadwalkan April 2026. Pabrik melamin pertama di KEK Gresik termasuk dalam rencana. Danantara mengalokasikan ~USD 26 miliar untuk hilirisasi. Target penciptaan 600.000+ lapangan kerja. Kerja sama hilirisasi dengan Rusia disepakati di Moskow (13 April 2026).',
    perkembangan: 'Kesepakatan hilirisasi dalam pertemuan Prabowo–Putin memperluas akses ke teknologi pengolahan mineral Rusia. B50 per 1 Juli 2026 sebagai hilirisasi energi — proyeksi hemat Rp 48 triliun APBN dan kurangi konsumsi 4 juta KL BBM fosil.',
    indikator: 'KEK Gresik (smelter alumina), KEK Batam (elektronik), KEK Mandalika (pariwisata). Ekspor komoditas unggulan — batu bara, karet, nikel, tembaga, aluminium — mencapai USD 47 miliar di 2025.',
    hambatan: 'Risiko over-concentration investasi di sektor mineral hulu. Kesiapan SDM terampil di kawasan industri baru masih terbatas. Ekspansi Danantara ke sektor baru memerlukan pengawasan ketat untuk mencegah crowding out investasi swasta. Negosiasi bea ekspor mineral dengan Kemenkeu perlu diselesaikan sebelum menimbulkan ketidakpastian kebijakan.',
  },
  {
    id: 'pangan',
    title: 'Ketahanan Pangan & MBG',
    atensi: 'sedang',
    tujuan: 'Jamin ketersediaan pangan nasional, stabilisasi harga komoditas pangan, dan perlindungan sosial melalui MBG untuk 82,9 juta penerima (target 2026).',
    status: 'Stok Bulog: ~4,3–4,6 juta ton beras. Produksi padi 2025: 34,7 juta ton. MBG: 60,2 juta penerima aktif. Inflasi pangan terkendali. Kerja sama pertanian dengan Rusia disepakati (13 April 2026).',
    perkembangan: 'Koperasi Desa Merah Putih dalam proses operasionalisasi sebagai penyangga rantai pasok lokal. PUPR memantau potensi El Niño "Godzilla" — perlu mitigasi dini untuk melindungi produksi padi musim kemarau 2026.',
    indikator: 'Rusia merupakan salah satu eksportir gandum terbesar dunia. Kerja sama pertanian yang disepakati di Moskow berpotensi menjamin pasokan gandum untuk industri pangan nasional di tengah kenaikan harga global.',
    hambatan: 'El Niño berpotensi mengganggu produksi padi dan hortikultura Q3-Q4 2026. Kelambatan operasionalisasi Koperasi Desa Merah Putih dapat melemahkan distribusi bahan pokok di daerah. Kenaikan harga fertilizer global akibat konflik Ukraina-Rusia masih menekan biaya produksi pertanian.',
  },
  {
    id: 'energi',
    title: 'Stabilisasi Energi & B50',
    atensi: 'tinggi',
    tujuan: 'Jaga stabilitas harga energi domestik, kurangi ketergantungan impor BBM, dan akselerasi transisi energi melalui biodiesel dan energi terbarukan.',
    status: 'B50 berlaku 1 Juli 2026. WTI ~$97/barel pasca gencatan senjata AS–Iran. Subsidi energi 2026: Rp 203,4 triliun (terancam tidak mencukupi jika harga bertahan tinggi). Fuel surcharge penerbangan naik ke 38% batas atas tarif.',
    perkembangan: 'Kesepakatan kerja sama ESDM jangka panjang dengan Rusia membuka akses potensi impor minyak Rusia dengan harga lebih kompetitif, diversifikasi dari Timur Tengah. Prabowo didampingi Menteri ESDM Bahlil Lahadalia dalam pertemuan bilateral.',
    indikator: 'Penghematan APBN Rp 48 triliun. Pengurangan konsumsi BBM fosil 4 juta KL. Presiden mematok target kesiapan industri CPO dan Pertamina sebelum 1 Juli. Perlu sinkronisasi jadwal produksi biodiesel nasional.',
    hambatan: 'Kenaikan harga minyak global >$97/barel mengancam kebutuhan tambahan alokasi subsidi yang tidak dianggarkan. Gencatan senjata AS–Iran yang fragil mempertahankan premium risiko geopolitik di harga minyak. Kesiapan industri biodiesel nasional untuk B50 masih perlu konfirmasi dari BPDPKS dan produsen CPO.',
  },
  {
    id: 'mscireform',
    title: 'Reformasi Pasar Modal & MSCI',
    atensi: 'tinggi',
    tujuan: 'Cegah reklasifikasi Indonesia ke frontier market oleh MSCI dan FTSE Russell melalui reformasi transparansi pasar modal yang memenuhi standar internasional.',
    status: 'OJK menaikkan batas minimum free float dari 7,5% ke 15%. Kewajiban UBO (Ultimate Beneficial Owner) diberlakukan. Keterbukaan kepemilikan saham >1% diimplementasikan. IHSG menutup 14 April di 7.675,95 (+2,34%) — sinyal positif untuk reformasi.',
    perkembangan: 'Pertemuan OJK–MSCI: pekan ketiga April 2026. MSCI Mei: pengumuman 12 Mei, efektif 1 Juni 2026. FTSE Russell quarterly GEIS: 22 Mei 2026. Deadline reformasi semakin mendekat — 4 dari 8 agenda telah selesai.',
    indikator: 'IHSG +2,34% pada 14 April 2026 ditopang penguatan sektor infrastruktur (+5,62%) dan industri (+4,47%). Kapitalisasi pasar Rp 13,683 triliun. Analis: reformasi OJK mulai direspons positif pasar.',
    hambatan: '4 agenda reformasi tersisa berpotensi membentur kepentingan pemegang saham mayoritas emiten besar. Waktu yang sangat terbatas sebelum pengumuman MSCI 12 Mei. Kondisi pasar yang masih dibayangi tekanan rupiah dapat memperlemah posisi tawar Indonesia dalam negosiasi dengan MSCI.',
  },
  {
    id: 'investasi',
    title: 'Investasi & Debottlenecking',
    atensi: 'sedang',
    tujuan: 'Akselerasi realisasi FDI dan PMDN melalui simplifikasi perizinan, kepastian hukum, dan pengawalan komitmen investasi dari mitra strategis.',
    status: 'Kredit perbankan mendekati 8% YoY. Komitmen investasi Jepang + Korsel USD 33,89 miliar sedang dalam proses realisasi. Kesepakatan investasi di berbagai bidang dengan Rusia baru disepakati 13 April 2026 — perlu rencana implementasi konkret.',
    perkembangan: 'World Bank memproyeksikan pertumbuhan Indonesia 2026 di 4,7% — lebih rendah dari proyeksi pemerintah 5,4%. ADB memproyeksikan 5,2%. Divergensi proyeksi ini perlu dikomunikasikan secara strategis kepada investor.',
    indikator: 'Danantara mengalokasikan USD 26 miliar untuk hilirisasi. Sektor swasta mewaspadai ekspansi mandatnya. Fokus perlu diarahkan pada pengawalan realisasi komitmen yang sudah ada, bukan ekspansi mandat baru.',
    hambatan: 'Birokrasi perizinan di daerah masih menjadi hambatan utama realisasi investasi — APINDO menunggu deregulasi konkret di lapangan. Kepastian hukum investasi di tengah diskusi kenaikan royalti batu bara dan bea ekspor mineral perlu dijaga agar tidak mengirimkan sinyal negatif ke investor.',
  },
  {
    id: 'diplomasi',
    title: 'Diplomasi Ekonomi & Perdagangan',
    atensi: 'sedang',
    tujuan: 'Perluas pasar ekspor, tarik FDI, dan perkuat posisi geoekonomi Indonesia melalui perjanjian perdagangan multilateral dan bilateral.',
    status: 'ART Indonesia–AS berlaku dengan tarif 19% (ditandatangani 19 Februari 2026). I-EU CEPA dan CPTPP dalam proses. Indonesia–Rusia WGTII ke-7 menghasilkan protokol kerja sama ekonomi (11 April 2026). Local Currency Transaction USD 25,6 miliar (2025) — 2x lipat dari 2024.',
    perkembangan: 'Prabowo–Putin sepakat perdagangan bilateral meningkat 12%. Kerja sama energi, antariksa, pertanian, industri, farmasi, dan pendidikan diperluas. Keanggotaan BRICS diberdayakan untuk memperluas kerja sama multilateral dengan anggota BRICS lainnya.',
    indikator: 'Review FTSE quarterly GEIS: 22 Mei 2026. Review MSCI Mei: pengumuman 12 Mei 2026, efektif 1 Juni 2026. Reformasi pasar modal perlu rampung sebelum tanggal tersebut.',
    hambatan: 'Kedekatan RI–Rusia berpotensi menimbulkan friksi dengan AS dan Eropa dalam negosiasi ART dan I-EU CEPA. Perlu dikelola melalui komunikasi diplomatik yang hati-hati. Komitmen pembelian energi dari AS berpotensi mengikat Indonesia pada harga di atas pasar.',
  },
  {
    id: 'digital',
    title: 'Ekonomi Digital & AI',
    atensi: 'sedang',
    tujuan: 'Percepat transformasi digital ekonomi nasional, perkuat infrastruktur AI dan pusat data, serta tingkatkan produktivitas berbasis teknologi.',
    status: 'Transaksi QRIS Indonesia diterima di Malaysia, Korea Selatan, Thailand, Jepang, dan China. Komitmen FDI ke sektor semikonduktor dan pusat data dari Jepang dan Korsel termasuk dalam kunjungan Presiden awal April 2026.',
    perkembangan: 'Platform SPPA resmi menjadi platform kuotasi Dealer Utama di pasar uang dan valas. 8 Butir Transformasi Budaya Kerja Nasional mencakup digitalisasi pola kerja ASN. Kerja sama antariksa dengan Rusia dibuka (disepakati di Moskow).',
    indikator: 'IMF WEO April 2026 menyoroti AI sebagai faktor positif yang mengimbangi risiko global — Indonesia perlu memanfaatkan tren ini untuk menarik FDI di sektor teknologi tinggi melalui KEK berbasis digital.',
    hambatan: 'Negosiasi dengan AS terkait produk digital dan regulasi platform menjadi isu NTM yang sensitif. Kesiapan ekosistem SDM digital di luar kota besar masih terbatas. Dominasi platform asing dalam transaksi e-commerce perlu diimbangi dengan penguatan platform nasional yang kompetitif.',
  },
];

export const presidenItems: PresidenItem[] = [
  {
    date: '1–2 Apr',
    content: 'Kunjungan kenegaraan ke Jepang dan Korea Selatan — mengamankan komitmen investasi total USD 33,89 miliar (Jepang USD 23,63 miliar + Korsel USD 10,26 miliar) setara ~Rp 574–575 triliun. Menko Airlangga menyampaikan hasil secara publik pada 2 April. Sumber: Setkab.go.id 2 April 2026.',
  },
  {
    date: '1 Apr',
    content: 'Peluncuran 8 Butir Transformasi Budaya Kerja Nasional — termasuk WFH ASN, B50, pembatasan BBM subsidi via MyPertamina, dan optimalisasi MBG. Berlaku mulai 1 April 2026, evaluasi dua bulan.',
  },
  {
    date: '8–9 Apr',
    content: 'Presiden menggelar Rapat Kerja bersama Kabinet Merah Putih, seluruh Eselon I K/L, dan Dirut BUMN di Istana — evaluasi kinerja ekonomi sekaligus konsolidasi menghadapi gejolak global. Menko Airlangga: pertumbuhan Q1 ≥5,5%, stok Bulog ~4,3–4,6 juta ton, cadangan devisa USD 148,2 miliar.',
  },
  {
    date: '11 Apr',
    content: 'Munas XVI IPSI dibuka Presiden Prabowo di JICC — Pencak Silat menuju Olimpiade. Kemenko Perekonomian memperkuat komitmen akselerasi transaksi mata uang lokal multilateral.',
  },
  {
    date: '12–13 Apr',
    content: 'Presiden Prabowo berangkat ke Rusia (12 April malam), tiba Moskow 13 April. Pertemuan bilateral dengan Putin selama 5 jam di Istana Kremlin — disepakati kerja sama ESDM jangka panjang, hilirisasi, antariksa, pertanian, industri, farmasi, dan pendidikan. Perdagangan RI–Rusia naik 12%.',
    highlight: true,
  },
  {
    date: '13 Apr',
    content: 'Media Briefing Menko Airlangga — Update on Economic and Reform Measures. Proyeksi pertumbuhan Q1-2026 di atas 5,3–5,5%, PMI ekspansif 50,1, IKK Maret 2026: 122,9, surplus dagang 70 bulan. Menegaskan subsidi energi fokus pada stabilitas harga.',
  },
];

export const pulseData = [
  {
    label: 'Elite Pulse',
    text: 'Konsolidasi kabinet terlihat solid pasca Rapat Kerja 8–9 April. Presiden Prabowo secara eksplisit menegaskan komitmen fiskal: rasio utang ≤40% dan defisit ≤3% PDB. Kunjungan ke Rusia memperlihatkan strategi keseimbangan strategis (hedging) Indonesia di antara kekuatan besar dunia.',
  },
  {
    label: 'Business Pulse',
    text: 'Sektor bisnis memberikan respons positif terhadap komitmen investasi dari Jepang dan Korea (total USD 33,89 miliar). Kesepakatan Moskow menambah diversifikasi mitra strategis. HKI mengapresiasi diplomasi investasi Presiden namun mendesak pengawalan realisasi yang lebih terstruktur.',
  },
  {
    label: 'Public Pulse',
    text: 'IKK Maret 2026 turun ke 122,9 dari 125,2 di Februari — mengindikasikan mulai melemahnya sentimen konsumen. Program MBG (60,2 juta penerima) menjadi peredam sosial yang efektif. IHSG menutup 14 April di 7.675,95 (+2,34%) — respons positif atas reformasi OJK dan hasil kunjungan Moskow.',
  },
  {
    label: 'Potensi Friksi Kebijakan',
    text: 'Tiga isu berpotensi memicu friksi: (1) B50 per 1 Juli jika kesiapan industri tidak sinkron, (2) Kenaikan royalti batu bara dan bea ekspor mineral, (3) Kedekatan RI–Rusia di tengah negosiasi ART dan I-EU CEPA dengan AS dan Eropa.',
  },
];

export const friksiItems = [
  'Moodys (Baa2) dan Fitch (BBB) menetapkan outlook sovereign negatif sebagian karena kekhawatiran atas kapasitas fiskal dan pengelolaan BUMN — namun keduanya mempertahankan rating investment grade. S&P masih pada outlook stable. [Sumber: Reuters 4 Maret 2026, DBS Research]',
  'Kesepakatan Prabowo–Putin (13 April) mencakup sektor-sektor yang berdampak langsung pada mandat Kemenko Perekonomian: ESDM, hilirisasi, perdagangan bilateral. Perlu segera disusun roadmap implementasi teknis agar tidak hanya menjadi deklarasi diplomatik.',
  'World Bank memangkas proyeksi Indonesia 2026 ke 4,7% (vs ADB 5,2% dan target pemerintah ≥5,4%). Divergensi proyeksi ini perlu dikomunikasikan dengan narasi yang konsisten kepada pasar dan investor institusional agar tidak menimbulkan kebingungan persepsi.',
  'Isu kenaikan royalti batu bara dan bea ekspor mineral yang sedang dibahas Kemenkeu — jika tidak dikomunikasikan dengan baik ke pelaku usaha, dapat memunculkan persepsi ketidakpastian kebijakan investasi di sektor tambang dan hilirisasi.',
];

// Daily Briefing 15 April Data
export const dailyFlashData = {
  date: '15 April 2026',
  preparedAt: '05.00 WIB',
  kurs: 'Rp 17.130 / USD',
  ihsg: '7.675,95 (+2,34%)',
  wti: '~$97 / barel',
  biRate: '4,75%',
  status: 'WASPADA AKTIF',
};

export const flashChips = [
  { label: 'IHSG', value: '7.675,95', delta: '+2,34%', deltaType: 'up' as const },
  { label: 'Rupiah/USD', value: '17.130', delta: 'tertekan', deltaType: 'down' as const },
  { label: 'WTI Crude', value: '~$97', delta: 'fragil', deltaType: 'warn' as const },
  { label: 'Emas Antam', value: '+Rp 45.000/g', delta: 'naik', deltaType: 'up' as const },
  { label: 'Gencatan AS–Iran', value: 'Fragil', delta: 'hari ke-7', deltaType: 'warn' as const },
  { label: 'IMF WEO Apr', value: 'Dirilis', delta: '14 Apr', deltaType: 'neutral' as const },
];

export const dailyTopIssues: Issue[] = [
  {
    number: '01',
    priority: 'flash',
    title: 'Prabowo–Putin 5 Jam di Moskow: Kerja Sama ESDM, Hilirisasi & Diversifikasi Energi Disepakati',
    description: 'Pertemuan bilateral Presiden Prabowo–Putin di Istana Kremlin (13 April, 5 jam) menghasilkan kesepakatan strategis di bidang ESDM jangka panjang, hilirisasi, antariksa, pertanian, industri, farmasi, dan pendidikan riset. Perdagangan bilateral meningkat 12%. Ini pertemuan kelima Prabowo–Putin dalam setahun. Presiden didampingi Menlu Sugiono dan Menteri ESDM Bahlil Lahadalia. Relevansi langsung untuk Kemenko: diversifikasi pasokan energi migas dari Rusia membuka opsi di luar Timur Tengah saat Selat Hormuz masih volatil; kerja sama pertanian memperkuat ketahanan pangan; perluasan BRICS membuka kanal perdagangan multilateral baru.',
  },
  {
    number: '02',
    priority: 'kritis',
    title: 'IMF World Economic Outlook April 2026 Dirilis: Pertumbuhan Global Terancam Energi & Ketidakpastian',
    description: 'IMF merilis WEO April 2026 (press briefing 14 April, pukul 09.00 ET — dirilis hari ini). Berdasarkan WEO Januari 2026, pertumbuhan global diproyeksikan 3,3% untuk 2026. Edisi April kemungkinan besar mempertahankan atau merevisi ke bawah akibat energy shock dari konflik AS–Iran dan ketidakpastian kebijakan perdagangan. IMF secara khusus menyoroti dampak defisit anggaran pertahanan global dan dampak konflik bersenjata sebagai tema analitik utama. World Bank telah lebih dulu merevisi proyeksi Indonesia ke 4,7% (dari 4,8%), sedangkan ADB mempertahankan 5,2%. Kemenko perlu mencermati angka proyeksi IMF untuk Indonesia dalam WEO April ini guna menyiapkan narasi respons yang tepat.',
  },
  {
    number: '03',
    priority: 'pantau',
    title: 'IHSG Rebound +2,34% ke 7.675,95 — OJK Konfirmasi Reformasi Pasar Modal Responsif',
    description: 'IHSG menutup perdagangan 14 April 2026 di level 7.675,95, menguat 2,34% atau 175,76 poin. Penguatan terkuat di sektor infrastruktur (+5,62%), industri (+4,47%), dan transportasi (+3,20%). Nilai transaksi Rp 24,68 triliun; kapitalisasi pasar Rp 13,683 triliun. OJK mengonfirmasi penguatan IHSG merupakan hasil reformasi pasar modal yang sedang berjalan — peningkatan batas free float 7,5% → 15%, kewajiban UBO, dan keterbukaan data kepemilikan >1%. Momentum positif ini perlu dijaga menjelang pertemuan OJK–MSCI di pekan ketiga April dan pengumuman MSCI 12 Mei.',
  },
];

export const moscowData = {
  tags: ['ESDM & Energi', 'Hilirisasi Mineral', 'Pertanian', 'Antariksa', 'Farmasi', 'Pendidikan & Riset', 'BRICS'],
  points: [
    { title: 'ESDM jangka panjang', desc: 'kerja sama ketahanan energi migas, termasuk potensi suplai minyak Rusia ke Indonesia sebagai diversifikasi dari Timur Tengah. Relevan saat Selat Hormuz masih tidak stabil.' },
    { title: 'Hilirisasi', desc: 'akses teknologi pengolahan mineral Rusia untuk mendukung program hilirisasi Indonesia, khususnya di sektor mineral kritis (nikel, tembaga, alumina).' },
    { title: 'Pertanian', desc: 'kerja sama diversifikasi pasokan gandum dan pupuk dari Rusia — produsen gandum terbesar dunia — untuk menjaga ketahanan pangan nasional di tengah gejolak harga global.' },
    { title: 'Perdagangan meningkat 12%', desc: 'tren positif yang perlu diakselerasi melalui platform Local Currency Transaction (LCT) yang telah berkembang pesat ke USD 25,6 miliar di 2025.' },
    { title: 'BRICS', desc: 'keanggotaan Indonesia di BRICS diperkuat sebagai platform kerja sama multilateral — membuka akses ke jaringan perdagangan dan investasi negara-negara anggota BRICS.' },
  ],
  warning: 'Perlu diantisipasi: kemungkinan sensitivitas dari mitra Barat (AS, UE) terhadap eskalasi hubungan RI–Rusia. Diplomasi ekonomi perlu dikomunikasikan dengan narasi kemandirian strategis Indonesia, bukan keberpihakan blok.',
};

export const imfData = {
  globalGrowth: '3.3%',
  indonesiaADB: '5.2%',
  indonesiaWB: '4.7%',
  note: 'IMF merilis WEO April 2026 dengan press briefing Chief Economist Pierre-Olivier Gourinchas pada 14 April pukul 09.00 ET. Tema analitik utama: dampak makroekonomi belanja pertahanan global yang meningkat akibat ketegangan geopolitik, dan konsekuensi ekonomi konflik bersenjata. IMF menekankan kebutuhan untuk mengurangi ketidakpastian kebijakan perdagangan sebagai prioritas global. Untuk Indonesia, posisi pertumbuhan yang lebih tinggi dari rata-rata kawasan EAP (4,4%) tetap menjadi keunggulan naratif yang perlu dikomunikasikan kepada investor global.',
};

export const dailyGeoItems: GeoItem[] = [
  {
    title: 'AS–Iran: Gencatan Senjata Hari ke-7 — Negosiasi Lanjutan di Islamabad',
    risk: 'tinggi',
    body: 'Gencatan senjata dua minggu (berlaku sejak 8 April) memasuki hari ke-7. Kedua pihak dilaporkan dalam diskusi untuk menggelar negosiasi lanjutan di Islamabad dengan mediasi Pakistan. Minyak WTI turun dari puncak $117 (7 April) ke sekitar $97/barel — namun masih jauh di atas level pra-perang ($73/barel). Selat Hormuz belum sepenuhnya terbuka — lalu lintas tanker masih terbatas. Goldman Sachs memproyeksikan Brent >$100/barel sepanjang 2026 jika Hormuz tidak pulih penuh.',
    implikasi: 'Harga minyak $97 masih menekan alokasi subsidi APBN Rp 203,4 triliun. Diversifikasi pasokan energi dari Rusia (hasil Moskow) menjadi opsi alternatif yang kini memiliki basis komitmen bilateral. Perlu koordinasi Kemenko–Kementerian ESDM untuk menindaklanjuti kerja sama energi Rusia ke rencana teknis yang konkret.',
  },
  {
    title: 'IMF Spring Meetings 2026 — Pesan Kebijakan untuk Indonesia',
    risk: 'sedang',
    body: 'Spring Meetings IMF–World Bank 2026 berlangsung di Washington DC pekan ini. IMF menekankan tiga tema: (1) pengurangan ketidakpastian kebijakan perdagangan, (2) pemeliharaan kemandirian bank sentral, dan (3) reformasi struktural yang meningkatkan produktivitas jangka panjang. IMF juga menyoroti kenaikan belanja pertahanan global yang dibiayai defisit — rata-rata 2,7 poin persentase PDB selama 2,5 tahun — dengan dampak inflasi jangka menengah. Tema ini relevan dengan konteks geopolitik Indonesia saat ini.',
    implikasi: 'Pesan IMF soal kemandirian bank sentral relevan untuk memperkuat posisi BI dalam komunikasi kebijakan. Rekomendasi reformasi struktural — termasuk penghapusan hambatan non-tarif di sektor jasa — searah dengan agenda I-EU CEPA dan deregulasi investasi. Kemenko perlu memanfaatkan Spring Meetings untuk mengirim delegasi tingkat tinggi guna menegaskan komitmen reformasi pasar modal kepada investor institusional global.',
  },
  {
    title: 'Isu Sensitif: Kunjungan Menhan Sjafrie ke Washington — MDCP Ditandatangani, Overflight Masih Berstatus Draf LOI',
    risk: 'tinggi',
    body: 'Laporan investigatif The Sunday Guardian (12 April 2026) yang menyebut Menteri Pertahanan Sjafrie Sjamsoeddin dijadwalkan terbang ke Washington pada 15 April untuk membahas atau menandatangani perjanjian akses overflight militer AS di wilayah udara Indonesia — tindak lanjut pertemuan Prabowo–Trump di Washington, Februari 2026 — telah terupdate signifikan. Kunjungan aktual berlangsung lebih cepat pada 13 April 2026. Hasil pertemuan adalah penandatanganan Major Defense Cooperation Partnership (MDCP) yang mencakup kerja sama teknologi pertahanan, latihan militer, dan peningkatan kesiapan operasional. Namun, dokumen bertajuk “Operationalizing U.S. Overflight” tidak diteken dan masih berstatus draf awal Letter of Intent (LOI) yang sedang dibahas internal antarlembaga. Kemhan menegaskan overflight bukan bagian dari MDCP, kedaulatan ruang udara Indonesia tetap prioritas utama, dan Kemlu telah mengirim surat rahasia mendesak agar kesepakatan ditunda. Isu ini masih sensitif dan belum terverifikasi sebagai kesepakatan final — perlu konfirmasi resmi dari Setneg/Kemhan/Kemlu sebelum dijadikan dasar kebijakan.',
    implikasi: 'Meski overflight belum disepakati, penandatanganan MDCP tetap membuka peluang penguatan kapasitas pertahanan tanpa komitmen aliansi penuh. Namun jika LOI kelak disetujui, perjanjian ini dapat memperumit dinamika strategis Indonesia dengan Rusia dan China — dua mitra ekonomi besar yang baru saja memperkuat kesepakatan (Moskow 13 April). Kemenko perlu berkoordinasi lebih erat dengan Kemlu untuk memastikan narasi kebijakan luar negeri yang konsisten tidak mengirimkan sinyal ketidaknetralan kepada mitra dagang dan investor. Persepsi “miring ke AS” berpotensi memengaruhi posisi tawar dalam negosiasi perdagangan dan investasi, meskipun koordinasi internal pemerintah saat ini menunjukkan kehati-hatian yang kuat dalam menjaga keseimbangan Indo-Pasifik.',
  },
  {
    title: 'Divergensi Proyeksi Indonesia 2026: World Bank vs ADB vs Pemerintah',
    risk: 'sedang',
    body: 'Tiga proyeksi pertumbuhan Indonesia 2026 yang berbeda saat ini beredar di pasar: World Bank 4,7% (April 2026, turun dari 4,8%), ADB 5,2% (ADO April 2026), dan target pemerintah ≥5,4% (APBN 2026). Alasan World Bank lebih konservatif: harga minyak global yang tinggi dan sentimen risk-off yang menekan investor. ADB lebih optimis dengan memperhatikan ketahanan konsumsi domestik dan investasi. Menko Airlangga mengkonfirmasi optimisme Q1 di 5,5% pada briefing 13 April. Angka resmi BPS Q1-2026 akan dirilis ~5 Mei 2026 dan menjadi data pembuktian penting.',
    implikasi: 'Komunikasi publik perlu menjelaskan divergensi ini dengan narasi yang tidak defensif: mengakui tekanan eksternal sambil menegaskan ketahanan fundamental domestik. Data Q1 dari BPS (Mei) akan menjadi argumen terkuat. Kemenko perlu mempersiapkan narasi respons terhadap kemungkinan proyeksi IMF yang lebih rendah dalam WEO April 2026.',
  },
];

export const dailyPresidenItems: PresidenItem[] = [
  {
    date: '13 Apr',
    content: 'Pertemuan bilateral Prabowo–Putin di Kremlin, Moskow (5 jam). Sepakat: ESDM jangka panjang, hilirisasi, antariksa, pertanian, farmasi, pendidikan riset. Perdagangan RI–Rusia naik 12%. Kelima pertemuan Prabowo–Putin dalam setahun. Konfirmasi dari Seskab Teddy Indra Wijaya (14 April 2026). Sumber: ANTARA, 14 April 2026.',
    highlight: true,
  },
  {
    date: '15 Apr',
    content: 'Presiden diperkirakan dalam perjalanan kembali dari Moskow ke Jakarta (penerbangan ~12 jam nonstop). Menhan Sjafrie Sjamsoeddin dilaporkan terbang ke Washington DC  — Hasilnya adalah penandatanganan Major Defense Cooperation Partnership (MDCP) yang mencakup kerja sama teknologi pertahanan, latihan militer, dan peningkatan kapasitas. Namun, dokumen “Operationalizing U.S. Overflight” tidak diteken dan masih berstatus draf awal Letter of Intent (LOI) yang sedang dibahas internal antarlembaga.',
  },
  {
    date: '17 Apr',
    content: 'Presiden Prabowo diundang menghadiri puncak perayaan Dharma Santi Nasional 2026 di Bali (Hari Suci Nyepi Tahun Baru Saka 1948). Wamenpar Ni Luh Puspa mengkonfirmasi undangan telah disampaikan melalui Setneg. Relevansi Kemenko: momentum penguatan sektor pariwisata dan wellness economy berbasis budaya Hindu di Bali.',
  },
  {
    date: 'Mei 2026',
    content: 'Dua tanggal kritis menjelang: BPS merilis data PDB Q1-2026 (~5 Mei) — angka resmi yang akan membuktikan atau membantah proyeksi 5,5%. Pengumuman MSCI (12 Mei, efektif 1 Juni) — penentu nasib pasar modal Indonesia.',
  },
];

export const agendaItems: AgendaItem[] = [
  { time: 'Hari ini', description: 'Rilis IMF WEO April 2026 — Baca proyeksi pertumbuhan Indonesia dan rekomendasi kebijakan. Siapkan narasi respons jika angka lebih rendah dari target pemerintah.', urgency: 'kritis' },
  { time: 'Hari ini', description: 'Washington DC — Pemantauan kunjungan Menhan Sjafrie terkait potensi perjanjian overflight militer AS. Koordinasi dengan Kemlu untuk pastikan konsistensi narasi kebijakan luar negeri tidak mengganggu hubungan dengan mitra ekonomi lainnya.', urgency: 'kritis' },
  { time: 'Pekan ini', description: 'Tindak lanjut hasil Moskow — Koordinasi Kemenko–ESDM–Kemdag untuk menyusun roadmap teknis implementasi kesepakatan Prabowo–Putin: ESDM, hilirisasi, pertanian, dan LCT Rusia-Indonesia.', urgency: 'penting' },
  { time: 'Pekan ke-3 Apr', description: 'Pertemuan OJK–MSCI — Checkpoint kritis reformasi pasar modal. Pastikan 4 agenda reformasi tersisa sudah dalam kondisi siap dipresentasikan ke tim MSCI. IHSG rebound +2,34% (14 Apr) menjadi amunisi positif.', urgency: 'kritis' },
  { time: '17 Apr', description: 'Dharma Santi Nasional di Bali — Presiden diundang hadir. Relevansi: narasi pariwisata berbasis budaya dan wellness economy sebagai pilar pertumbuhan baru di luar Jawa.', urgency: 'pantau' },
  { time: '~5 Mei', description: 'BPS — Rilis PDB Q1-2026 — Angka ini akan menjadi ujian utama proyeksi 5,5% yang diklaim Menko Airlangga. Perlu persiapan komunikasi publik untuk berbagai skenario hasil.', urgency: 'penting' },
  { time: '12 Mei', description: 'Pengumuman MSCI Index Review — Hari paling kritis untuk pasar modal Indonesia 2026. Potensi outflow USD 4–8 miliar jika reklasifikasi terjadi. Seluruh upaya reformasi OJK–BEI mengarah ke tanggal ini.', urgency: 'kritis' },
];

export const dailySnapshot = {
  risiko: 'Gencatan senjata AS–Iran yang fragil berpotensi runtuh sewaktu-waktu, memicu lonjakan harga minyak kembali ke >$110 dan menekan subsidi APBN serta nilai tukar rupiah secara simultan.',
  peluang: 'Hasil Moskow membuka diversifikasi energi dan pertanian dari Rusia — mengurangi ketergantungan pada rantai pasok yang rentan konflik. IHSG rebound memperkuat posisi tawar di pertemuan OJK–MSCI.',
  watchlist: 'Rupiah di Rp 17.130 — masih di atas Rp 17.000 dan memberikan tekanan pada importir bahan baku. Intervensi BI tetap diperlukan. Pantau pergerakan yen Jepang dan yuan China sebagai sinyal regional.',
  aksi: 'Susun respons narasi WEO IMF April 2026. Koordinasi teknis tindak lanjut Moskow. Pastikan kesiapan OJK–MSCI. Monitor isu overflight militer untuk antisipasi dampak diplomatik pada mitra ekonomi.',
};

export const dailySummary = `Indonesia memasuki Rabu pagi dengan sinyal pasar yang lebih positif dari sebelumnya — IHSG menutup 14 April di 7.675,95 (+2,34%), momen terbaik dalam beberapa pekan terakhir, didukung reformasi OJK dan penguatan kepercayaan investor. Namun dua tekanan utama belum mereda: rupiah masih di Rp 17.130/USD dan harga minyak WTI bertahan di ~$97/barel.

Dua perkembangan besar hari ini memerlukan perhatian langsung Kemenko: (1) Rilis IMF WEO April 2026 yang akan diikuti pemberitaan global — Kemenko perlu menyiapkan narasi respons terhadap kemungkinan revisi proyeksi Indonesia ke bawah target APBN; (2) Hasil bilateral Prabowo–Putin di Kremlin (13 April) memerlukan tindak lanjut teknis segera dalam bentuk roadmap implementasi kerja sama ESDM dan hilirisasi dengan Rusia.

Di sisi geopolitik, isu overflight militer AS yang dilaporkan sedang dibahas Menhan Sjafrie di Washington perlu dipantau dampaknya terhadap persepsi mitra ekonomi strategis Indonesia lainnya.

Status pagi ini: WASPADA AKTIF — sinyal pasar membaik, tetapi risiko eksternal dan agenda kritis menumpuk.`;
