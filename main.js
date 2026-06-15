/* ===========================
   Bloom Mate — main.js
   =========================== */

/* ── DATA ── */
const products = [
  {
    id: 1,
    name: "Buket Boneka Wisuda Hitam",
    category: "boneka",
    categoryLabel: "Buket Boneka",
    image: "Assets/catalog/catalog-buket-boneka-50k.jpg",
    price: 50000,
    priceNote: "",
    badge: "50K",
    badgeType: "best",
    desc: "Boneka kecil bertoga dengan bunga biru dan wrapping hitam-putih.",
    tags: ["boneka", "wisuda"],
    customOptions: true
  },
  {
    id: 2,
    name: "Buket Coklat Mawar Merah",
    category: "coklat",
    categoryLabel: "Buket Coklat",
    image: "Assets/catalog/catalog-buket-coklat-50k.jpg",
    price: 50000,
    priceNote: "mulai dari",
    badge: "Mulai 50K",
    badgeType: "best",
    desc: "Buket coklat dengan mawar merah, snack coklat, dan wrapping hitam-pink.",
    tags: ["coklat", "hadiah"],
    customOptions: true
  },
  {
    id: 3,
    name: "Mini Buket Wisuda Pink",
    category: "mini",
    categoryLabel: "Mini Buket",
    image: "Assets/catalog/catalog-mini-buket-20k.jpg",
    price: 20000,
    priceNote: "",
    badge: "20K",
    badgeType: "new",
    desc: "Mini buket pink dengan bunga kecil, kartu ucapan, dan hiasan wisuda.",
    tags: ["mini", "wisuda"],
    customOptions: true
  },
  {
    id: 4,
    name: "Buket Bunga Peach Pastel",
    category: "bunga",
    categoryLabel: "Buket Bunga",
    image: "Assets/catalog/catalog-buket-bunga-30k.jpg",
    price: 30000,
    priceNote: "mulai dari",
    badge: "Mulai 30K",
    badgeType: "new",
    desc: "Rangkaian bunga warna soft peach-pink dengan wrapping pastel dan pita besar.",
    tags: ["bunga", "pastel"],
    customOptions: true
  },
  {
    id: 5,
    name: "Buket Snack Kuning Hitam",
    category: "snack",
    categoryLabel: "Buket Snack",
    image: "Assets/catalog/catalog-buket-snack-40k.jpg",
    price: 40000,
    priceNote: "mulai dari",
    badge: "Mulai 40K",
    badgeType: "new",
    desc: "Buket snack campur dengan aksen bunga kuning dan wrapping hitam.",
    tags: ["snack", "cemilan"],
    customOptions: true
  },
  {
    id: 6,
    name: "Buket Uang Ungu",
    category: "uang",
    categoryLabel: "Buket Uang",
    image: "Assets/catalog/catalog-buket-uang-30k.jpg",
    price: 30000,
    priceNote: "mulai dari",
    badge: "Mulai 30K",
    badgeType: "new",
    desc: "Buket uang dengan bunga ungu, snack kecil, wrapping ungu-pink, dan kartu ucapan.",
    tags: ["uang", "hadiah"],
    customOptions: true
  },
  {
    id: 7,
    name: "Buket Wisuda Pink",
    category: "wisuda",
    categoryLabel: "Buket Wisuda",
    image: "Assets/catalog/price-wisuda-pink-50k.jpg",
    price: 50000,
    priceNote: "",
    badge: "50K",
    badgeType: "new",
    desc: "Buket wisuda nuansa pink dengan boneka toga, bunga pink, dan kartu ucapan.",
    tags: ["wisuda", "pink"],
    customOptions: true
  },
  {
    id: 8,
    name: "Buket Bunga Premium Mix",
    category: "bunga",
    categoryLabel: "Buket Bunga",
    image: "Assets/catalog/price-bunga-premium-160k.jpg",
    price: 160000,
    priceNote: "",
    badge: "160K",
    badgeType: "best",
    desc: "Buket bunga ukuran besar dengan kombinasi bunga merah, pink, dan orange.",
    tags: ["bunga", "premium"],
    customOptions: true
  },
  {
    id: 9,
    name: "Buket Wisuda Biru",
    category: "wisuda",
    categoryLabel: "Buket Wisuda",
    image: "Assets/catalog/price-wisuda-biru-50k.jpg",
    price: 50000,
    priceNote: "",
    badge: "50K",
    badgeType: "new",
    desc: "Buket wisuda nuansa biru dengan boneka toga, bunga putih-biru, dan kartu ucapan.",
    tags: ["wisuda", "biru"],
    customOptions: true
  },
  {
    id: 10,
    name: "Buket Snack Pink Jumbo",
    category: "snack",
    categoryLabel: "Buket Snack",
    image: "Assets/catalog/price-snack-pink-125k.jpg",
    price: 125000,
    priceNote: "",
    badge: "125K",
    badgeType: "best",
    desc: "Buket snack warna pink dengan pilihan cemilan manis dan wrapping hitam-pink.",
    tags: ["snack", "pink"],
    customOptions: true
  },
  {
    id: 11,
    name: "Buket Bunga Pink Transparan",
    category: "bunga",
    categoryLabel: "Buket Bunga",
    image: "Assets/catalog/price-bunga-pink-110k.jpg",
    price: 110000,
    priceNote: "",
    badge: "110K",
    badgeType: "new",
    desc: "Buket bunga pink-merah dengan wrapping transparan lembut dan pita pink.",
    tags: ["bunga", "pink"],
    customOptions: true
  },
  {
    id: 12,
    name: "Buket Snack Biru Jumbo",
    category: "snack",
    categoryLabel: "Buket Snack",
    image: "Assets/catalog/price-snack-biru-125k.jpg",
    price: 125000,
    priceNote: "",
    badge: "125K",
    badgeType: "best",
    desc: "Buket snack ukuran besar dengan wrapping biru dan pita merah.",
    tags: ["snack", "biru"],
    customOptions: true
  },
  {
    id: 13,
    name: "Paket Mini Snack Duo",
    category: "snack",
    categoryLabel: "Buket Snack",
    image: "Assets/catalog/price-mini-snack-duo-65k.jpg",
    price: 65000,
    priceNote: "",
    badge: "65K",
    badgeType: "new",
    desc: "Dua buket snack mini dengan wrapping pink dan putih, cocok untuk hadiah berdua.",
    tags: ["snack", "mini"],
    customOptions: true
  },
  {
    id: 14,
    name: "Buket Snack Hitam Gold",
    category: "snack",
    categoryLabel: "Buket Snack",
    image: "Assets/catalog/price-snack-hitam-100k.jpg",
    price: 100000,
    priceNote: "",
    badge: "100K",
    badgeType: "new",
    desc: "Buket snack dengan wrapping hitam-gold dan pilihan snack coklat.",
    tags: ["snack", "coklat"],
    customOptions: true
  },
  {
    id: 15,
    name: "Buket Snack Coklat Pink",
    category: "snack",
    categoryLabel: "Buket Snack",
    image: "Assets/catalog/price-snack-coklat-pink-60k.jpg",
    price: 60000,
    priceNote: "",
    badge: "60K",
    badgeType: "new",
    desc: "Buket snack coklat dengan wrapping pink dan pita merah marun.",
    tags: ["snack", "coklat"],
    customOptions: true
  },
  {
    id: 16,
    name: "Mini Buket Wisuda",
    category: "mini",
    categoryLabel: "Mini Buket",
    image: "Assets/catalog/price-mini-wisuda-25k.jpg",
    price: 25000,
    priceNote: "",
    badge: "25K",
    badgeType: "new",
    desc: "Mini buket wisuda dengan boneka toga, bunga pink, dan kartu ucapan.",
    tags: ["mini", "wisuda"],
    customOptions: true
  },
];

const priceList = products.map(product => ({
  name: product.name,
  price: product.price,
  priceNote: product.priceNote,
  image: product.image,
  includes: product.desc,
  popular: product.price >= 100000
}));

const testimonials = [
  { name: "Alya R.", info: "Mahasiswi ITS, Wisuda Des 2024", stars: 5, text: "Buketnya cantik banget dan sesuai ekspektasi! Harganya juga ramah di kantong mahasiswa. Pesan H-1 wisuda kakak langsung jadi. Rekomendasiiiiin!!", avatar: "A" },
  { name: "Rizky M.", info: "Mahasiswa ITS, Sidang Jan 2025", stars: 5, text: "Pesan buket snack buat teman sidang, dikemas rapih dan snack-nya enak. Beli lagi deh kalau ada momen berikutnya! Fast response juga.", avatar: "R" },
  { name: "Sinta K.", info: "Mahasiswi ITS, Ulang Tahun", stars: 5, text: "Udah 3x order di Bloom Mate, selalu puas! Buket custom-nya bener-bener sesuai request, warna dan desainnya persis yang diminta. 100% worth it!", avatar: "S" },
  { name: "Dimas F.", info: "Mahasiswa ITS, Anniversary", stars: 4, text: "Kaget pas tau ada buket uang yang dikemas sebagus ini. Pacarku suka banget! Tinggal whatsapp langsung direspon cepat dan produknya jadi tepat waktu.", avatar: "D" },
  { name: "Nisa P.", info: "Mahasiswi ITS, Perpisahan", stars: 5, text: "Pesan buket perpisahan untuk teman departing ke luar negeri. Hasilnya sangat personal dan bermakna. Mbak Maretanya juga helpful banget pas konsultasi!", avatar: "N" },
  { name: "Bagas W.", info: "Mahasiswa ITS, Lomba", stars: 5, text: "Tim kami juara lomba dan langsung pesan buket untuk foto dokumentasi. Hasilnya instagramable parah! Langsung vibes-nya dapet.", avatar: "B" },
];

/* ── STATE ── */
let activeFilter = "all";
let activeModal = null;
let map = null;
let marker = null;
let selectedLocation = {
  lat: null,
  lng: null,
  address: "Belum memilih lokasi (Silakan tentukan pada peta)"
};

function formatPrice(product) {
  const prefix = product.priceNote ? `${product.priceNote} ` : "";
  return `${prefix}Rp ${product.price.toLocaleString("id-ID")}`;
}

/* ── RENDER PRODUCTS ── */
function renderProducts(filter = "all") {
  const grid = document.getElementById("productGrid");
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      ${p.badge ? `<div class="product-card__badge product-card__badge--${p.badgeType}">${p.badge}</div>` : ""}
      <button class="product-card__wishlist" onclick="toggleWishlist(event, this)" aria-label="Wishlist">🤍</button>
      <div class="product-card__img">
        <img class="product-card__photo" src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${p.categoryLabel}</div>
        <div class="product-card__meta">Gratis kartu ucapan</div>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        <div class="product-card__footer">
          <div class="product-card__price">${formatPrice(p)}</div>
          <button class="product-card__add" onclick="event.stopPropagation(); openModal(${p.id})">Pesan</button>
        </div>
      </div>
    </div>
  `).join("");
}

/* ── RENDER PRICE LIST ── */
function renderPriceList() {
  const grid = document.getElementById("priceGrid");
  grid.innerHTML = priceList.map(p => `
    <div class="price-card ${p.popular ? "price-card--popular" : ""}">
      ${p.popular ? '<div class="price-card__popular-tag">Premium</div>' : ""}
      <div class="price-card__image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="price-card__name">${p.name}</div>
      <div class="price-card__price">${formatPrice(p)}</div>
      <div class="price-card__includes">${p.includes}</div>
      <button class="price-card__order-btn" onclick="openWA('${p.name}')">Pesan Sekarang</button>
    </div>
  `).join("");
}

/* ── RENDER TESTIMONIALS ── */
function renderTestimonials() {
  const grid = document.getElementById("testiGrid");
  grid.innerHTML = testimonials.map(t => `
    <div class="testi-card">
      <div class="testi-card__stars">${"★".repeat(t.stars)}</div>
      <p class="testi-card__text">"${t.text}"</p>
      <div class="testi-card__user">
        <div class="testi-card__avatar">${t.avatar}</div>
        <div>
          <div class="testi-card__name">${t.name}</div>
          <div class="testi-card__info">${t.info}</div>
        </div>
      </div>
    </div>
  `).join("");
}

/* ── MODAL ── */
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  activeModal = productId;

  const overlay = document.getElementById("modalOverlay");
  const colorOptions = product.customOptions ? `
    <div class="modal__options">
      <label>Warna Tema</label>
      <select>
        <option>Pilih warna tema...</option>
        <option>Pink & Putih (Romantis)</option>
        <option>Ungu & Gold (Elegan)</option>
        <option>Merah & Hitam (Bold)</option>
        <option>Pastel (Soft)</option>
        <option>Custom (sebutkan di catatan)</option>
      </select>
    </div>
    <div class="modal__options">
      <label>Momen / Acara</label>
      <select>
        <option>Pilih momen...</option>
        <option>Wisuda</option>
        <option>Ulang Tahun</option>
        <option>Sidang / Ujian</option>
        <option>Anniversary</option>
        <option>Perpisahan</option>
        <option>Lomba / Prestasi</option>
        <option>Lainnya</option>
      </select>
    </div>
  ` : "";

  overlay.querySelector(".modal__title").textContent = product.name;
  overlay.querySelector(".modal__subtitle").textContent = product.categoryLabel + " · Gratis kartu ucapan";
  overlay.querySelector(".modal__product-row").innerHTML = `
    <div class="modal__product-photo">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal__product-info">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
    </div>
  `;
  overlay.querySelector(".modal__price").textContent = formatPrice(product);
  overlay.querySelector(".modal__custom-options").innerHTML = colorOptions;
  overlay.querySelector(".modal__wa-btn").onclick = () => {
    const note = overlay.querySelector(".modal__note")?.value || "";
    openWA(product.name, note);
  };

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  activeModal = null;
}

/* ── WHATSAPP ── */
function openWA(productName, note = "") {
  let locationMsg = "";
  if (selectedLocation.lat && selectedLocation.lng) {
    locationMsg = `\n\n📍 *Lokasi Pengiriman (Geomatika Integration):*\n- Koordinat: ${selectedLocation.lat}, ${selectedLocation.lng}\n- Alamat: ${selectedLocation.address}\n- Tautan Peta: https://www.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}`;
  }
  
  const msg = encodeURIComponent(`Halo Bloom Mate! 🌸\n\nSaya ingin memesan:\n*${productName}*\n${note ? "\nCatatan: " + note : ""}${locationMsg}\n\nBisa info lebih lanjut?`);
  window.open(`https://wa.me/6281229751246?text=${msg}`, "_blank");
  showToast("Membuka WhatsApp... 💬");
}

/* ── MAP FUNCTIONS ── */
function initMap() {
  const defaultCoords = [-7.2797, 112.7974]; // Kampus ITS Surabaya
  
  // Initialize map
  map = L.map('map').setView(defaultCoords, 15);
  
  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // Add draggable marker
  marker = L.marker(defaultCoords, {
    draggable: true
  }).addTo(map);
  
  // Set initial coordinates
  updateLocationDetails(defaultCoords[0], defaultCoords[1]);
  
  // Drag marker event
  marker.on('dragend', function (e) {
    const position = marker.getLatLng();
    updateLocationDetails(position.lat, position.lng);
  });
  
  // Click on map to move marker
  map.on('click', function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    marker.setLatLng([lat, lng]);
    updateLocationDetails(lat, lng);
  });
}

function updateLocationDetails(lat, lng) {
  selectedLocation.lat = lat.toFixed(6);
  selectedLocation.lng = lng.toFixed(6);
  
  document.getElementById('mapCoords').textContent = `${selectedLocation.lat}, ${selectedLocation.lng}`;
  document.getElementById('mapAddress').textContent = 'Mencari alamat...';
  
  // Reverse Geocoding with Nominatim API
  fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
    .then(response => response.json())
    .then(data => {
      const address = data.display_name || 'Alamat tidak ditemukan';
      selectedLocation.address = address;
      document.getElementById('mapAddress').textContent = address;
    })
    .catch(error => {
      console.error('Error reverse geocoding:', error);
      selectedLocation.address = 'Gagal memuat alamat. Koordinat tetap tercatat.';
      document.getElementById('mapAddress').textContent = selectedLocation.address;
    });
}

function locateUser() {
  if (!navigator.geolocation) {
    showToast("Fitur Geolocation tidak didukung oleh browser Anda ❌", "❌");
    return;
  }
  
  showToast("Mencari lokasi Anda... 🛰️", "🛰️");
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      map.setView([lat, lng], 17);
      marker.setLatLng([lat, lng]);
      updateLocationDetails(lat, lng);
      showToast("Lokasi berhasil didapatkan! 📍");
    },
    (error) => {
      console.error('Error getting location:', error);
      showToast("Gagal mendeteksi lokasi otomatis. Silakan pilih manual di peta ❌", "❌");
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function confirmLocation() {
  if (!selectedLocation.lat || !selectedLocation.lng) {
    showToast("Silakan tentukan lokasi terlebih dahulu! ❌", "❌");
    return;
  }
  showToast("Lokasi pengiriman berhasil dikonfirmasi! 📦");
}

/* ── WISHLIST ── */
function toggleWishlist(e, btn) {
  e.stopPropagation();
  const isLiked = btn.classList.toggle("liked");
  btn.textContent = isLiked ? "❤️" : "🤍";
  showToast(isLiked ? "Ditambahkan ke wishlist! ❤️" : "Dihapus dari wishlist");
}

/* ── TOAST ── */
function showToast(msg, icon = "✅") {
  const toast = document.getElementById("toast");
  toast.querySelector(".toast__icon").textContent = icon;
  toast.querySelector(".toast__text").textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

/* ── FILTER ── */
function setFilter(category, btn) {
  activeFilter = category;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts(category);
}

/* ── NAVBAR ── */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  renderPriceList();
  renderTestimonials();
  initMap();

  // Close modal on overlay click
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Keyboard escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Animate stats counter
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));

  // Scroll-reveal
  const reveals = document.querySelectorAll(".product-card, .price-card, .step-card, .testi-card");
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    revealObs.observe(el);
  });
});

function animateCount(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}
