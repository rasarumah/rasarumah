'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  const menuItems = [
    { id: 1, name: "Ayam Ungkep Kuning", weight: "1 Ekor", tagline: "Sahabat Nasi Panas", price: "Rp 80.000", image: "/menu1.png", desc: "Ayam ungkep kuning dengan bumbu rempah tradisional yang gurih dan lezat" },
    { id: 2, name: "Sambal Cumi Baby", weight: "250g", tagline: "Sahabat Nasi Panas", price: "Rp 55.000", image: "/menu2.png", desc: "Cumi baby segar dengan sambal pedas yang menggigit lidah" },
    { id: 3, name: "Ikan Gabus Oseng Pedas", weight: "300g", tagline: "Indak pernah cukui", price: "Rp 70.000", image: "/menu3.png", desc: "Ikan gabus segar dengan bumbu pedas khas Minang yang menggoda" },
    { id: 4, name: "Sambal Goreng Kentang Ati", weight: "400g", tagline: "Teman Makan Setiap Saat", price: "Rp 55.000", image: "/menu4.png", desc: "Sambal goreng kentang ati dengan cita rasa gurih dan pedas" },
    { id: 5, name: "Dendeng Batokok Lado Hijau", weight: "500g", tagline: "Indah pernah cukuiak", price: "Rp 160.000", image: "/menu5.png", desc: "Dendeng batokok dengan lado hijau khas Minang yang autentik" },
    { id: 6, name: "Rendang Daging", weight: "500g", tagline: "Indak pernah cukuik", price: "Rp 170.000", image: "/menu6.png", desc: "Rendang daging sapi empuk dengan bumbu rempah tradisional Minang" },
  ];

  const galleryImages = [
    "/galery1.png",
    "/galery2.png", 
    "/galery3.png"
  ];

  const testimonials = [
    {
      name: "Bu Sari, Jakarta Selatan",
      text: "Rendang dagingnya empuk banget! Anak-anak sampai nambah terus. Praktis banget buat ibu bekerja seperti saya.",
      rating: 5,
      avatar: "👩🏻‍💼"
    },
    {
      name: "Pak Budi, Bekasi", 
      text: "Ayam ungkep kuningnya juara! Rasanya persis kayak masakan mama. Hemat waktu masak setelah pulang kerja.",
      rating: 5,
      avatar: "👨🏻‍💻"
    },
    {
      name: "Mbak Dina, Tangerang",
      text: "Sambal cumi babynya enak pol! Suami dan anak-anak doyan semua. Gak perlu repot masak lagi.",
      rating: 5,
      avatar: "👩🏻‍🍳"
    }
  ];

  const whatsappNumber = "6281944375070";
  const createWhatsAppLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white overflow-x-hidden">
      {/* Mobile-First Navigation */}
      <nav className="fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-lg shadow-xl rounded-full z-[60] transition-all duration-500 border border-amber-200 w-[95vw] max-w-6xl">
        <div className="px-3 md:px-8 py-2 md:py-4">
          <div className="flex items-center justify-between gap-2 md:gap-8">
            <div className="text-base md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Rasa Rumah
            </div>
            
            {/* Mobile Navigation - Show on all screens */}
            <div className="flex items-center gap-3 md:gap-6 text-xs md:text-base">
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors font-medium px-2 py-1 rounded-full hover:bg-orange-50">Menu</a>
              <a href="#galeri" className="text-gray-700 hover:text-orange-600 transition-colors font-medium px-2 py-1 rounded-full hover:bg-orange-50">Galeri</a>
              <a href="#testimoni" className="text-gray-700 hover:text-orange-600 transition-colors font-medium px-2 py-1 rounded-full hover:bg-orange-50">Testimoni</a>
            </div>
            
            <a 
              href={createWhatsAppLink("Halo Rasa Rumah! Saya tertarik dengan produk Heat n Eat. Bisa bantu saya untuk pemesanan?")}
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-2 md:px-6 py-2 md:py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs md:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">Pesan Sekarang</span>
              <span className="sm:hidden">Pesan</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-amber-200/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-red-200/50 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#f6e8c5] via-amber-100 to-orange-100"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
            <div 
              className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1 relative z-20"
              data-animate
              id="hero-text"
            >
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-green-700 font-bold mb-4 md:mb-6 shadow-lg">
                <span className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full mr-2 md:mr-3 animate-pulse"></span>
                <span className="text-xs md:text-base">🔥 Brand Terpercaya Heat n Eat</span>
              </div>
              
              <h2 className="text-xl md:text-3xl lg:text-5xl text-gray-700 mb-4 md:mb-6 font-bold leading-tight">
                Masakan Rumahan Premium
                <span className="block text-red-600 mt-2">
                  Siap Saji dalam 5 Menit ⚡
                </span>
              </h2>
              
              <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed font-medium">
                Rendang, Ayam Ungkep, Sambal Cumi, dan menu istimewa lainnya.
                <br />
                <span className="font-bold text-green-700 bg-green-100 px-2 md:px-3 py-1 rounded-full inline-block mt-2 text-sm md:text-base">
                  ✨ Nikmat • Praktis • Tanpa Pengawet ✨
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start relative z-30">
                <a 
                  href={createWhatsAppLink("Halo! Saya tertarik dengan produk Heat n Eat dari Rasa Rumah. Bisa bantu saya untuk pemesanan?")}
                  className="group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-base md:text-xl transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                    🛒 Pesan Sekarang
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
                
                <a 
                  href="#menu"
                  className="group border-2 md:border-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-base md:text-xl transition-all duration-500 transform hover:scale-110 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                    📋 Lihat Menu
                    <span className="group-hover:rotate-12 transition-transform duration-300">📖</span>
                  </span>
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8 pt-6 md:pt-8">
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-black text-red-600">500+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-black text-orange-600">5⭐</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Rating Tertinggi</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-3xl font-black text-green-600">24/7</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Siap Melayani</div>
                </div>
              </div>
            </div>
            
            <div 
              className="flex justify-center order-1 lg:order-2 relative z-10"
              data-animate
              id="hero-image"
            >
              <div className="relative group">
                {/* Floating elements */}
                <div className="absolute -top-3 md:-top-6 -left-3 md:-left-6 w-12 md:w-24 h-12 md:h-24 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-8 md:w-16 h-8 md:h-16 bg-red-400 rounded-full opacity-70"></div>
                
                {/* Main logo container */}
                <div className="relative flex items-center justify-center">
                  <div className="w-64 md:w-80 h-32 md:h-40 relative">
                    <Image 
                      src="/logo.png" 
                      alt="Rasa Rumah Logo" 
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 md:w-8 h-10 md:h-14 border-2 md:border-3 border-gray-400 rounded-full flex justify-center p-1 md:p-2">
            <div className="w-1 md:w-2 h-4 md:h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="text-center mt-2 text-gray-600 font-medium text-sm md:text-base">Scroll</div>
        </div> */}
      </section>

      {/* Video Section */}
      <section 
        className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
        data-animate
        id="video"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4"
            style={{
              opacity: isVisible['video'] ? 1 : 0,
              transform: isVisible['video'] ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Lihat Kenikmatannya! 🎬
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
            Saksikan sendiri kelezatan masakan rumahan kami yang siap menggoyang lidah Anda
          </p>
          <div 
            className="max-w-4xl mx-auto relative group"
            style={{
              opacity: isVisible['video'] ? 1 : 0,
              transform: isVisible['video'] ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 1s ease-out 0.3s'
            }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-red-400 rounded-3xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <video 
              controls 
              className="relative w-full rounded-2xl shadow-2xl border-4 border-white/20"
            >
              <source src="/video.mp4" type="video/mp4" />
              <source src="/video.webm" type="video/webm" />
              <source src="/video.MOV" type="video/quicktime" />
              Browser Anda tidak mendukung video.
            </video>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section 
        className="py-20 bg-gradient-to-br from-[#f6e8c5] to-amber-100 relative"
        data-animate
        id="usp"
      >
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-gray-800 mb-12 md:mb-16"
            style={{
              opacity: isVisible['usp'] ? 1 : 0,
              transform: isVisible['usp'] ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            Mengapa Memilih <span className="text-red-600">Heat n Eat?</span> 🤔
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "✅", title: "100% Masakan Asli Rumahan", desc: "Dibuat dengan resep turun temurun keluarga yang autentik", color: "from-green-400 to-green-600" },
              { icon: "⚡", title: "Siap Saji Dalam 5 Menit", desc: "Panaskan sebentar di microwave, langsung nikmat", color: "from-yellow-400 to-orange-500" },
              { icon: "❄️", title: "Tahan Lama di Kulkas", desc: "Bisa disimpan hingga 1 minggu dalam kondisi fresh", color: "from-blue-400 to-cyan-500" },
              { icon: "🌿", title: "100% Tanpa Pengawet", desc: "Bahan alami berkualitas, sehat untuk keluarga", color: "from-green-500 to-emerald-600" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative"
                style={{
                  opacity: isVisible['usp'] ? 1 : 0,
                  transform: isVisible['usp'] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                  transition: `all 0.8s ease-out ${index * 0.2}s`
                }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl blur"></div>
                <div className={`relative bg-white p-6 md:p-8 rounded-2xl shadow-xl text-center transform group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-500 border-2 border-transparent group-hover:border-gradient-to-r ${item.color} h-full flex flex-col justify-between min-h-[280px]`}>
                  <div>
                    <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 leading-tight">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section 
        className="py-20 bg-gradient-to-b from-white to-gray-50"
        data-animate
        id="menu"
      >
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-gray-800 mb-12 md:mb-16"
            style={{
              opacity: isVisible['menu'] ? 1 : 0,
              transform: isVisible['menu'] ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            Menu Pilihan <span className="text-red-600">Terbaik</span> Kami 🍽️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {menuItems.map((item, index) => (
              <div 
                key={item.id}
                className="group relative"
                style={{
                  opacity: isVisible['menu'] ? 1 : 0,
                  transform: isVisible['menu'] ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.8)',
                  transition: `all 1s ease-out ${index * 0.15}s`
                }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform group-hover:scale-105 group-hover:-translate-y-6 transition-all duration-700 border-4 border-transparent group-hover:border-white">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full font-bold text-xs shadow-lg">
                      {item.weight}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-sm font-medium italic">&ldquo;{item.tagline}&rdquo;</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">{item.name}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                    <div className="text-2xl md:text-3xl font-black text-red-600 mb-6">{item.price}</div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={createWhatsAppLink(`Halo! Saya ingin pesan ${item.name} (${item.weight}) seharga ${item.price}. Bisa dibantu untuk pemesanan?`)}
                        className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-center py-3 md:py-4 px-4 md:px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        🛒 Pesan Sekarang
                      </a>
                      <a
                        href={createWhatsAppLink(`Halo! Saya ingin tahu lebih detail tentang ${item.name}. Bisa dijelaskan kandungan dan cara penyajiannya?`)}
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-center py-3 md:py-4 px-4 md:px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        📋 Info Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        className="py-20 bg-gradient-to-br from-[#f6e8c5] to-amber-100"
        data-animate
        id="galeri"
      >
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-16"
            style={{
              opacity: isVisible['galeri'] ? 1 : 0,
              transform: isVisible['galeri'] ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            Galeri <span className="text-orange-600">Kenikmatan</span> Kami 📸
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative"
                style={{
                  opacity: isVisible['galeri'] ? 1 : 0,
                  transform: isVisible['galeri'] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                  transition: `all 1s ease-out ${index * 0.2}s`
                }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-red-400 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700">
                  <Image
                    src={image}
                    alt={`Galeri ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Galeri {index + 1}</h3>
                    <p className="text-sm">Kenikmatan yang terlihat nyata</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-20 bg-gradient-to-b from-white to-gray-50"
        data-animate
        id="testimoni"
      >
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-16"
            style={{
              opacity: isVisible['testimoni'] ? 1 : 0,
              transform: isVisible['testimoni'] ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            Kata <span className="text-green-600">Pelanggan</span> Kami 💬
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative"
                style={{
                  opacity: isVisible['testimoni'] ? 1 : 0,
                  transform: isVisible['testimoni'] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                  transition: `all 1s ease-out ${index * 0.2}s`
                }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-xl transform group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-500 border-l-4 border-green-500">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="text-3xl md:text-4xl mr-3 md:mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm md:text-base">{testimonial.name}</h4>
                      <div className="flex text-yellow-400 text-base md:text-lg">
                        {"⭐".repeat(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="text-4xl md:text-6xl text-green-500 mb-3 md:mb-4 opacity-20">&ldquo;</div>
                  <p className="text-gray-700 mb-3 md:mb-4 italic leading-relaxed font-medium text-sm md:text-base">{testimonial.text}</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section 
        className="py-20 bg-gradient-to-br from-[#f6e8c5] to-amber-100"
        data-animate
        id="cara-pesan"
      >
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-16"
            style={{
              opacity: isVisible['cara-pesan'] ? 1 : 0,
              transform: isVisible['cara-pesan'] ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            Cara <span className="text-blue-600">Pemesanan</span> 📝
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "1", title: "Pilih Produk", desc: "Pilih menu favorit dari katalog lengkap kami", icon: "🛍️", color: "from-blue-400 to-purple-500" },
              { step: "2", title: "Klik Pesan", desc: "Klik tombol 'Pesan Sekarang' untuk WhatsApp", icon: "📱", color: "from-green-400 to-green-600" },
              { step: "3", title: "Bayar Transfer", desc: "Transfer pembayaran dan kirim bukti", icon: "💳", color: "from-yellow-400 to-orange-500" },
              { step: "4", title: "Terima Pesanan", desc: "Pesanan dikirim fresh ke alamat Anda", icon: "🚚", color: "from-red-400 to-pink-500" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group text-center relative"
                style={{
                  opacity: isVisible['cara-pesan'] ? 1 : 0,
                  transform: isVisible['cara-pesan'] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                  transition: `all 1s ease-out ${index * 0.2}s`
                }}
              >
                <div className="relative">
                  <div className={`bg-gradient-to-r ${item.color} w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <span className="text-2xl md:text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base px-2">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 md:top-10 -right-4 md:-right-8 text-2xl md:text-3xl text-gray-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section 
        className="py-20 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 relative overflow-hidden"
        data-animate
        id="promo"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div 
            className="max-w-4xl mx-auto"
            style={{
              opacity: isVisible['promo'] ? 1 : 0,
              transform: isVisible['promo'] ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 1s ease-out'
            }}
          >
            <div className="text-8xl mb-8 animate-bounce">🎁</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Penawaran <span className="text-yellow-300">Spesial!</span>
            </h2>
            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl mb-8 border border-white/30">
              <h3 className="text-3xl font-bold text-white mb-6">
                🚚 GRATIS ONGKIR untuk Pembelian Pertama!
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Khusus untuk pelanggan baru, dapatkan gratis ongkir ke seluruh Jakarta
              </p>
              <div className="text-lg text-yellow-300 font-bold">
                ⏰ Terbatas! Hanya untuk 100 pelanggan pertama
              </div>
            </div>
            <a
              href={createWhatsAppLink("Halo! Saya pelanggan baru dan ingin memanfaatkan promo gratis ongkir. Bisa bantu saya?")}
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-6 px-12 rounded-full text-xl transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl animate-pulse"
            >
              🎉 Klaim Promo Sekarang!
            </a>
          </div>
        </div>
      </section>

      {/* About Brand */}
      <section 
        className="py-20 bg-gradient-to-b from-white to-gray-50"
        data-animate
        id="tentang"
      >
        <div className="container mx-auto px-4">
          <div 
            className="max-w-4xl mx-auto text-center"
            style={{
              opacity: isVisible['tentang'] ? 1 : 0,
              transform: isVisible['tentang'] ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 1s ease-out'
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-12">
              Tentang <span className="text-orange-600">Rasa Rumah</span> 🏠
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-xl border-l-8 border-orange-500 mb-12">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Rasa Rumah hadir dengan misi membawa kehangatan masakan rumahan ke meja makan Anda. 
                Dengan brand <span className="font-bold text-red-600">&ldquo;Heat n Eat&rdquo;</span>, kami menyajikan makanan berkualitas tinggi yang dibuat dengan 
                resep turun temurun keluarga, tanpa pengawet buatan.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Setiap produk kami dibuat dengan penuh cinta dan perhatian, menggunakan bahan-bahan 
                segar dan berkualitas. Kami percaya bahwa makanan yang baik adalah investasi terbaik 
                untuk kesehatan keluarga Anda.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍🍳</div>
                  <h4 className="font-bold text-gray-800 mb-2">Chef Berpengalaman</h4>
                  <p className="text-gray-600">15+ tahun pengalaman masak</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌿</div>
                  <h4 className="font-bold text-gray-800 mb-2">Bahan Organik</h4>
                  <p className="text-gray-600">Menggunakan bahan segar pilihan</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">❤️</div>
                  <h4 className="font-bold text-gray-800 mb-2">Dibuat dengan Cinta</h4>
                  <p className="text-gray-600">Setiap porsi penuh perhatian</p>
                </div>
              </div>
            </div>
            <a
              href={createWhatsAppLink("Halo! Saya ingin tahu lebih banyak tentang Rasa Rumah dan produk Heat n Eat. Bisa dijelaskan?")}
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              💬 Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Rasa Rumah
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Heat n Eat - Masakan Rumahan Siap Saji dalam 5 Menit.
                Nikmat, Praktis, Tanpa Pengawet. Bawa kehangatan rasa rumah ke meja makan Anda.
              </p>
              <div className="flex gap-4">
                <a
                  href={createWhatsAppLink("Halo! Saya ingin mengetahui produk terbaru dari Rasa Rumah")}
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📱 WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/rasa.rumah.group?igsh=Znh5dms5aHJub2Zz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📷 Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@rasa.rumah.group?_t=ZS-8xRKkgJoMzM&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🎵 TikTok
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 text-orange-400">Kontak</h4>
              <div className="space-y-4">
                <p className="text-gray-300 flex items-center gap-3">
                  <span className="text-green-400">📱</span>
                  +62 812-8888-5605
                </p>
                <p className="text-gray-300 flex items-center gap-3">
                  <span className="text-blue-400">📧</span>
                  info@rasarumah.id
                </p>
                <p className="text-gray-300 flex items-center gap-3">
                  <span className="text-red-400">📍</span>
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 text-orange-400">Menu Populer</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">🍖 Rendang Sapi</a>
                <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">🍗 Ayam Ungkep</a>
                <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">🦑 Sambal Cumi</a>
                <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">🍛 Gulai Kambing</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 text-lg">
              © 2025 Rasa Rumah. Semua hak dilindungi. 
              <span className="font-bold text-orange-400"> Heat n Eat</span> adalah brand terdaftar.
            </p>
            <p className="text-gray-400 mt-2">
              Dibuat dengan ❤️ untuk membawa rasa rumah ke setiap keluarga Indonesia
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={createWhatsAppLink("Halo Rasa Rumah! Saya tertarik dengan produk Heat n Eat. Bisa bantu saya?")}
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-[70] animate-pulse"
      >
        <svg className="w-6 md:w-8 h-6 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.148"/>
        </svg>
      </a>
    </div>
  );
}
