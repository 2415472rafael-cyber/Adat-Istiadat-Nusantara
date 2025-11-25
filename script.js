const provinces = [
  {
    id: "aceh",
    province: "Aceh",
    island: "sumatra",
    tradition: "Upacara Peusijuek",
    short: "Upacara penyambutan dengan beras kunyit sebagai simbol berkah.",
    image: "assets/img/peusijuek.jpeg",
    description: "Upacara adat penyambutan tamu atau peristiwa penting seperti pernikahan dan kelahiran dengan menaburkan beras kunyit sebagai simbol berkah dan keselamatan.",
    origin: "Dilakukan masyarakat Aceh sejak lama sebagai doa keselamatan.",
    when: "Pernikahan, kelahiran, penyambutan tamu."
  },
  {
    id: "sumut",
    province: "Sumatera Utara",
    island: "sumatra",
    tradition: "Mangokkal Holi",
    short: "Pemindahan tulang leluhur sebagai bentuk penghormatan.",
    image: "assets/img/mangokkalholi.jpg",
    description: "Upacara Batak Toba untuk memindahkan tulang-belulang leluhur ke tempat yang lebih layak sebagai bentuk penghormatan.",
    origin: "Tradisi leluhur Batak Toba untuk memuliakan orang yang telah meninggal.",
    when: "Dilakukan pada waktu khusus sesuai adat."
  },
  {
    id: "sumbar",
    province: "Sumatera Barat",
    island: "sumatra",
    tradition: "Upacara Turun Mandi",
    short: "Memandikan bayi dengan air tujuh sumur dan bunga.",
    image: "assets/img/turunmandi.jpg",
    description: "Tradisi menyambut bayi yang baru lahir dengan memandikannya menggunakan air tujuh sumur dan bunga sebagai simbol penyucian.",
    origin: "Tradisi Minangkabau untuk menyambut kelahiran.",
    when: "Sesaat setelah kelahiran."
  },
  {
    id: "riau",
    province: "Riau",
    island: "sumatra",
    tradition: "Tepuk Tepung Tawar",
    short: "Ritual Melayu untuk memberi restu dan keselamatan.",
    image: "assets/img/tepungtawar.jpg",
    description: "Upacara adat Melayu Riau untuk memberi restu dan doa keselamatan, biasanya dilakukan pada pernikahan atau menyambut tamu penting.",
    origin: "Tradisi Melayu sebagai ungkapan doa kebaikan.",
    when: "Pernikahan, penyambutan tamu."
  },
  {
    id: "kepri",
    province: "Kepulauan Riau",
    island: "sumatra",
    tradition: "Mandi Safar",
    short: "Tradisi tolak bala di pantai pada bulan Safar.",
    image: "assets/img/mandisafar.jpg",
    description: "Tradisi masyarakat Melayu di Pulau Bintan untuk menolak bala, biasanya dilakukan di pantai pada bulan Safar dalam kalender Hijriah.",
    origin: "Tradisi Islam-Melayu yang tetap dilestarikan hingga kini.",
    when: "Bulan Safar."
  },
  {
    id: "jambi",
    province: "Jambi",
    island: "sumatra",
    tradition: "Kenduri Sko",
    short: "Upacara adat suku Kerinci untuk menghormati leluhur.",
    image: "assets/img/kenduriski.jpg",
    description: "Upacara adat suku Kerinci sebagai bentuk penghormatan terhadap leluhur dan penetapan adat desa.",
    origin: "Tradisi turun-temurun masyarakat Kerinci.",
    when: "Ketika menetapkan adat dan perayaan desa."
  },
  {
    id: "sumsel",
    province: "Sumatera Selatan",
    island: "sumatra",
    tradition: "Sedekah Rame",
    short: "Syukuran masyarakat Palembang atas hasil panen.",
    image: "assets/img/sedekahrame.jpg",
    description: "Tradisi masyarakat Palembang untuk bersyukur atas hasil panen dan memohon keberkahan pada musim tanam berikutnya.",
    origin: "Dilakukan petani sejak masa lampau.",
    when: "Setelah panen."
  },
  {
    id: "bengkulu",
    province: "Bengkulu",
    island: "sumatra",
    tradition: "Tabot",
    short: "Peringatan gugurnya Husain bin Ali setiap Muharram.",
    image: "assets/img/tabot.jpg",
    description: "Upacara memperingati gugurnya cucu Nabi Muhammad SAW, Husain bin Ali, di Karbala. Dilaksanakan setiap 1–10 Muharram.",
    origin: "Dibawa oleh keturunan India-Bengal pada abad ke-18.",
    when: "1–10 Muharram."
  },
  {
    id: "lampung",
    province: "Lampung",
    island: "sumatra",
    tradition: "Cakak Pepadun",
    short: "Upacara kenaikan derajat adat Lampung Pepadun.",
    image: "assets/img/cakakpepadun.jpg",
    description: "Upacara kenaikan derajat sosial bagi masyarakat adat Lampung Pepadun, disertai tari dan prosesi adat.",
    origin: "Dilakukan masyarakat Pepadun sebagai bagian struktur adat.",
    when: "Sesuai kebutuhan adat."
  },
  {
    id: "babel",
    province: "Bangka Belitung",
    island: "sumatra",
    tradition: "Nganggung",
    short: "Tradisi membawa dulang makanan ke masjid.",
    image: "assets/img/nganggur.jpg",
    description: "Tradisi membawa makanan dalam dulang ke masjid untuk dimakan bersama sebagai simbol kebersamaan dan syukur.",
    origin: "Tradisi masyarakat Melayu Bangka Belitung.",
    when: "Hari besar atau acara desa."
  },

  // Jawa
  {
    id: "jakarta",
    province: "DKI Jakarta",
    island: "jawa",
    tradition: "Palang Pintu",
    short: "Adu pantun dan silat khas Betawi pada pernikahan.",
    image: "assets/img/palangpintu.jpg",
    description: "Tradisi Betawi yang dilakukan saat pernikahan berupa adu pantun dan silat antara pihak mempelai pria dan keluarga wanita.",
    origin: "Tradisi masyarakat Betawi.",
    when: "Pernikahan adat Betawi."
  },
  {
    id: "jabar",
    province: "Jawa Barat",
    island: "jawa",
    tradition: "Seren Taun",
    short: "Upacara syukur panen padi masyarakat Sunda.",
    image: "assets/img/serentaun.jpg",
    description: "Upacara adat Sunda sebagai bentuk syukur atas panen padi, biasanya dilaksanakan di Cigugur atau Kanekes.",
    origin: "Tradisi pertanian masyarakat Sunda.",
    when: "Akhir musim panen."
  },
  {
    id: "banten",
    province: "Banten",
    island: "jawa",
    tradition: "Seba Baduy",
    short: "Orang Baduy menyerahkan hasil bumi ke pemerintah.",
    image: "assets/img/sebabaduy.jpg",
    description: "Tradisi masyarakat Baduy berjalan kaki ke kantor gubernur dan bupati untuk menyerahkan hasil bumi sebagai tanda bakti.",
    origin: "Bagian hubungan adat Baduy dengan pemerintah.",
    when: "Setahun sekali."
  },
  {
    id: "jateng",
    province: "Jawa Tengah",
    island: "jawa",
    tradition: "Dugderan",
    short: "Pesta rakyat Semarang sambut Ramadan.",
    image: "assets/img/dugderan.jpg",
    description: "Tradisi masyarakat Semarang menyambut Ramadan dengan arak-arakan warak ngendog dan pesta rakyat.",
    origin: "Tradisi kota Semarang sejak abad ke-19.",
    when: "Menjelang Ramadan."
  },
  {
    id: "yogyakarta",
    province: "D.I. Yogyakarta",
    island: "jawa",
    tradition: "Labuhan",
    short: "Persembahan Keraton untuk laut selatan.",
    image: "assets/img/labuhan.jpg",
    description: "Upacara persembahan kepada penguasa laut selatan (Nyi Roro Kidul) oleh Keraton Yogyakarta di Pantai Parangkusumo.",
    origin: "Tradisi keraton yang turun-temurun.",
    when: "Waktu tertentu ditetapkan keraton."
  },
  {
    id: "jatim",
    province: "Jawa Timur",
    island: "jawa",
    tradition: "Kasada",
    short: "Upacara masyarakat Tengger di Gunung Bromo.",
    image: "assets/img/kasada.jpg",
    description: "Upacara masyarakat Tengger di Gunung Bromo untuk mempersembahkan hasil bumi ke kawah sebagai tanda syukur.",
    origin: "Tradisi Hindu-Tengger.",
    when: "Bulan Kasada kalender Tengger."
  },

  // Bali - Nusa
  {
    id: "bali",
    province: "Bali",
    island: "bali-nusa",
    tradition: "Ngaben",
    short: "Ritual kremasi umat Hindu Bali.",
    image: "assets/img/ngaben.jpg",
    description: "Upacara pembakaran jenazah umat Hindu Bali untuk menyucikan roh agar mencapai kehidupan baru.",
    origin: "Tradisi Hindu-Bali.",
    when: "Sesuai penentuan keluarga."
  },
  {
    id: "ntb",
    province: "Nusa Tenggara Barat",
    island: "bali-nusa",
    tradition: "Nyongkolan",
    short: "Arak-arakan pengantin pria menuju rumah mempelai wanita.",
    image: "assets/img/nyongkolan.jpg",
    description: "Tradisi pernikahan masyarakat Sasak di Lombok, di mana pengantin pria diarak menuju rumah pengantin wanita.",
    origin: "Tradisi masyarakat Sasak.",
    when: "Pernikahan."
  },
  {
    id: "ntt",
    province: "Nusa Tenggara Timur",
    island: "bali-nusa",
    tradition: "Reba",
    short: "Upacara suku Lio untuk mengenang leluhur.",
    image: "assets/img/reba.jpg",
    description: "Upacara suku Lio di Flores untuk mengenang leluhur dan mensyukuri hasil panen.",
    origin: "Tradisi suku Lio.",
    when: "Awal tahun."
  },

  // Kalimantan
  {
    id: "kalbar",
    province: "Kalimantan Barat",
    island: "kalimantan",
    tradition: "Naik Dango",
    short: "Upacara syukur panen Dayak Kanayatn.",
    image: "assets/img/naikdango.jpg",
    description: "Upacara adat suku Dayak Kanayatn untuk mengucap syukur atas panen padi.",
    origin: "Tradisi pertanian Dayak Kanayatn.",
    when: "Setelah panen."
  },
  {
    id: "kalteng",
    province: "Kalimantan Tengah",
    island: "kalimantan",
    tradition: "Tiwah",
    short: "Pengantaran arwah ke alam baka.",
    image: "assets/img/tiwah.jpeg",
    description: "Upacara adat suku Dayak Ngaju untuk mengantarkan arwah orang meninggal ke alam baka.",
    origin: "Kepercayaan Kaharingan Dayak Ngaju.",
    when: "Sesuai adat keluarga."
  },
  {
    id: "kalsel",
    province: "Kalimantan Selatan",
    island: "kalimantan",
    tradition: "Bapalas Bidan",
    short: "Upacara membersihkan bayi setelah lahir.",
    image: "assets/img/bapalasbidan.jpg",
    description: "Tradisi masyarakat Banjar untuk membersihkan bayi setelah lahir sebagai tanda syukur dan doa keselamatan.",
    origin: "Adat Banjar.",
    when: "Setelah kelahiran."
  },
  {
    id: "kaltim",
    province: "Kalimantan Timur",
    island: "kalimantan",
    tradition: "Erau",
    short: "Upacara kerajaan Kutai penuh tari dan ritual adat.",
    image: "assets/img/erau.jpg",
    description: "Upacara kerajaan Kutai yang melibatkan tari, musik, dan ritual adat untuk membersihkan diri dan lingkungan dari hal buruk.",
    origin: "Tradisi Kesultanan Kutai Kartanegara.",
    when: "Festival Erau."
  },
  {
    id: "kalut",
    province: "Kalimantan Utara",
    island: "kalimantan",
    tradition: "Iraw Tengkayu",
    short: "Upacara menurunkan perahu hias ke laut.",
    image: "assets/img/irawtengkayu.jpeg",
    description: "Tradisi masyarakat Tidung di Tarakan untuk menurunkan perahu hias ke laut sebagai simbol keselamatan dan persatuan.",
    origin: "Budaya suku Tidung.",
    when: "Dua tahun sekali."
  },

  // Sulawesi
  {
    id: "sulut",
    province: "Sulawesi Utara",
    island: "sulawesi",
    tradition: "Tulude",
    short: "Upacara akhir tahun masyarakat Sangihe.",
    image: "assets/img/tulude.jpg",
    description: "Upacara masyarakat Sangihe untuk mengakhiri tahun dan menyambut tahun baru dengan doa dan tarian adat.",
    origin: "Tradisi Sangihe.",
    when: "Akhir tahun."
  },
  {
    id: "gorontalo",
    province: "Gorontalo",
    island: "sulawesi",
    tradition: "Tolobalango",
    short: "Upacara peminangan adat Gorontalo.",
    image: "assets/img/tolobalango.jpg",
    description: "Upacara adat peminangan dari keluarga calon mempelai pria kepada keluarga calon mempelai wanita.",
    origin: "Tradisi perkawinan Gorontalo.",
    when: "Peminangan."
  },
  {
    id: "sulteng",
    province: "Sulawesi Tengah",
    island: "sulawesi",
    tradition: "Nosarara Nosabatutu",
    short: "Upacara perdamaian suku Kaili.",
    image: "assets/img/nosarara.jpg",
    description: "Tradisi suku Kaili untuk mempererat persaudaraan dan menjaga perdamaian dalam masyarakat.",
    origin: "Budaya masyarakat Kaili.",
    when: "Acara perdamaian."
  },
  {
    id: "sulbar",
    province: "Sulawesi Barat",
    island: "sulawesi",
    tradition: "Sayyang Pattudu",
    short: "Kuda menari tanda syukur khatam Al-Qur'an.",
    image: "assets/img/sayyangpattudu.jpg",
    description: "Tradisi menunggang kuda menari untuk merayakan keberhasilan anak-anak mengkhatamkan Al-Qur’an.",
    origin: "Budaya Mandar.",
    when: "Syukuran khatam Qur’an."
  },
  {
    id: "sulsel",
    province: "Sulawesi Selatan",
    island: "sulawesi",
    tradition: "Ma'Nene",
    short: "Mengganti pakaian jenazah leluhur suku Toraja.",
    image: "assets/img/manene.jpg",
    description: "Tradisi suku Toraja mengganti pakaian jenazah leluhur dan membersihkan makam sebagai tanda penghormatan.",
    origin: "Kepercayaan leluhur suku Toraja.",
    when: "Waktu tertentu sesuai adat."
  },
  {
    id: "sultra",
    province: "Sulawesi Tenggara",
    island: "sulawesi",
    tradition: "Posuo",
    short: "Pingitan gadis Tolaki sebelum dewasa.",
    image: "assets/img/posuo.jpg",
    description: "Upacara pingitan bagi gadis remaja suku Tolaki sebelum dianggap dewasa dan siap menikah.",
    origin: "Adat suku Tolaki.",
    when: "Menjelang pernikahan."
  },

  // Maluku
  {
    id: "maluku",
    province: "Maluku",
    island: "maluku",
    tradition: "Pela Gandong",
    short: "Tradisi persaudaraan antar desa.",
    image: "assets/img/pelagandong.jpg",
    description: "Tradisi persaudaraan antar desa di Maluku untuk mempererat hubungan dan mencegah konflik.",
    origin: "Tradisi Maluku sejak masa kerajaan.",
    when: "Saat perjanjian adat diperbarui."
  },
  {
    id: "malut",
    province: "Maluku Utara",
    island: "maluku",
    tradition: "Fere Kie",
    short: "Upacara adat Tidore di Gunung Kie Matubu.",
    image: "assets/img/ferekie.jpg",
    description: "Upacara adat masyarakat Tidore yang dilakukan di gunung Kie Matubu sebagai tanda syukur dan doa keselamatan.",
    origin: "Adat Kesultanan Tidore.",
    when: "Hari tertentu adat."
  },

  // Papua Baru 6 Provinsi
  {
    id: "papua",
    province: "Papua",
    island: "papua",
    tradition: "Bakar Batu",
    short: "Masak bersama dengan batu panas sebagai simbol kebersamaan.",
    image: "assets/img/bakarbatu.jpeg",
    description: "Tradisi memasak bersama dengan cara membakar batu untuk memasak daging dan umbi-umbian, sebagai simbol kebersamaan dan perdamaian.",
    origin: "Dilakukan banyak suku di Papua.",
    when: "Perayaan adat dan penyambutan."
  },
  {
    id: "pabar",
    province: "Papua Barat",
    island: "papua",
    tradition: "Wor",
    short: "Upacara adat Biak untuk berbagai peristiwa penting.",
    image: "assets/img/wor.jpg",
    description: "Upacara adat suku Biak untuk merayakan peristiwa penting seperti kelahiran, perkawinan, atau kematian.",
    origin: "Adat suku Biak.",
    when: "Berbagai momen adat."
  },
  {
    id: "pasel",
    province: "Papua Selatan",
    island: "papua",
    tradition: "Tiwah Anim",
    short: "Memohon berkat leluhur sebelum musim tanam atau berburu.",
    image: "assets/img/tiwahanim.jpg",
    description: "Upacara adat suku Marind-Anim untuk memohon berkat leluhur sebelum musim tanam atau perburuan.",
    origin: "Adat suku Marind.",
    when: "Menjelang musim tanam atau berburu."
  },
  {
    id: "papeg",
    province: "Papua Pegunungan",
    island: "papua",
    tradition: "Pesta Babi Wamena",
    short: "Pesta penyembelihan babi untuk mempererat hubungan sosial.",
    image: "assets/img/pestababi.jpg",
    description: "Tradisi masyarakat pegunungan untuk mempererat hubungan sosial melalui pesta penyembelihan babi bersama.",
    origin: "Adat masyarakat pegunungan Papua.",
    when: "Acara besar komunitas."
  },
  {
    id: "pateng",
    province: "Papua Tengah",
    island: "papua",
    tradition: "Sasi",
    short: "Larangan mengambil hasil alam demi menjaga keseimbangan.",
    image: "assets/img/sasi.jpeg",
    description: "Upacara larangan mengambil hasil alam di wilayah tertentu untuk menjaga keseimbangan alam.",
    origin: "Adat masyarakat pesisir Papua.",
    when: "Saat area ditutup adat."
  },
  {
    id: "pabd",
    province: "Papua Barat Daya",
    island: "papua",
    tradition: "Kwerba",
    short: "Upacara penyambutan tamu dengan tarian adat.",
    image: "assets/img/kwerba.jpg",
    description: "Tradisi masyarakat setempat untuk menyambut tamu atau merayakan hasil panen dengan tarian dan nyanyian adat.",
    origin: "Budaya Papua Barat Daya.",
    when: "Penyambutan tamu atau panen."
  }
];


const cardsGrid = document.getElementById("cardsGrid");
const searchInput = document.getElementById("searchInput");
const islandFilter = document.getElementById("islandFilter");

const modal = document.getElementById("detailModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalImage = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDesc");
const modalOrigin = document.getElementById("modalOrigin");
const modalWhen = document.getElementById("modalWhen");

function createCard(p){
  return `
    <article class="card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.tradition}">
      <h3>${p.province}</h3>
      <p><strong>${p.tradition}</strong> — ${p.short}</p>
      <div class="meta">
        <small>${capitalize(p.island)}</small>
        <button class="btn view-btn" data-id="${p.id}">Lihat</button>
      </div>
    </article>
  `;
}

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderCards(list){
  cardsGrid.innerHTML = list.map(createCard).join("");

  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.id));
  });
}

function openModal(id){
  const p = provinces.find(x => x.id === id);
  if(!p) return;

  modalTitle.textContent = `${p.tradition} — ${p.province}`;
  modalSubtitle.textContent = `${p.province} · ${capitalize(p.island)}`;
  modalImage.src = p.image;
  modalDesc.textContent = p.description;
  modalOrigin.textContent = p.origin;
  modalWhen.textContent = p.when;

  modal.setAttribute("aria-hidden", "false");
}

function closeModal(){
  modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if(e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});

function applyFilters(){
  const q = searchInput.value.toLowerCase();
  const island = islandFilter.value;

  const filtered = provinces.filter(p => {
    const matchIsland = island === "all" || p.island === island;
    const matchQuery =
      p.province.toLowerCase().includes(q) ||
      p.tradition.toLowerCase().includes(q) ||
      p.short.toLowerCase().includes(q);

    return matchIsland && matchQuery;
  });

  renderCards(filtered);
}

searchInput.addEventListener("input", applyFilters);
islandFilter.addEventListener("change", applyFilters);

renderCards(provinces);

const scrollBtn = document.getElementById("scrollDownBtn");
scrollBtn.addEventListener("click", () => {
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});

// NAVBAR MUNCUL SAAT SCROLL
const navbar = document.getElementById("navbar");

// muncul ketika lewat 120px (bisa kamu ubah)
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
});

// tombol navbar scroll otomatis
document.getElementById("navHome").addEventListener("click", () => {
  document.querySelector(".landing").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("navExplore").addEventListener("click", () => {
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});
