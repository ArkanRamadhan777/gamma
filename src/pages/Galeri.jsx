import { useState } from 'react';

const Galeri = () => {
  const [filter, setFilter] = useState('semua');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      title: 'Leadership Camp 2025',
      category: 'Event',
      date: 'Januari 2025',
      color: 'from-blue-500 to-purple-600',
      emoji: '🏕️',
    },
    {
      title: 'Bakti Sosial Panti Asuhan',
      category: 'Sosial',
      date: 'Desember 2024',
      color: 'from-green-500 to-teal-600',
      emoji: '🤝',
    },
    {
      title: 'Bimbingan Belajar Matematika',
      category: 'Akademik',
      date: 'Februari 2025',
      color: 'from-orange-500 to-red-600',
      emoji: '📚',
    },
    {
      title: 'Festival Seni & Budaya',
      category: 'Event',
      date: 'November 2024',
      color: 'from-pink-500 to-rose-600',
      emoji: '🎨',
    },
    {
      title: 'Program Bank Sampah',
      category: 'Sosial',
      date: 'Januari 2025',
      color: 'from-emerald-500 to-green-600',
      emoji: '♻️',
    },
    {
      title: 'Workshop Public Speaking',
      category: 'Akademik',
      date: 'Februari 2025',
      color: 'from-indigo-500 to-blue-600',
      emoji: '🎤',
    },
    {
      title: 'Turnamen Olahraga Antar Kelas',
      category: 'Event',
      date: 'Desember 2024',
      color: 'from-yellow-500 to-orange-600',
      emoji: '⚽',
    },
    {
      title: 'Donor Darah Bersama PMI',
      category: 'Sosial',
      date: 'November 2024',
      color: 'from-red-500 to-pink-600',
      emoji: '❤️',
    },
    {
      title: 'Pelatihan Digital Marketing',
      category: 'Akademik',
      date: 'Januari 2025',
      color: 'from-cyan-500 to-blue-600',
      emoji: '💻',
    },
    {
      title: 'Pentas Musik & Teater',
      category: 'Event',
      date: 'Oktober 2024',
      color: 'from-purple-500 to-indigo-600',
      emoji: '🎭',
    },
    {
      title: 'Kegiatan Bersih Lingkungan',
      category: 'Sosial',
      date: 'Februari 2025',
      color: 'from-lime-500 to-green-600',
      emoji: '🌱',
    },
    {
      title: 'Study Group Session',
      category: 'Akademik',
      date: 'Januari 2025',
      color: 'from-amber-500 to-orange-600',
      emoji: '📖',
    },
  ];

  const filteredItems = filter === 'semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-20 md:py-24 relative overflow-hidden">
        {/* Floating Shapes */}
        <div className="shape-float-1" style={{top: '15%', left: '8%'}}></div>
        <div className="shape-float-2" style={{bottom: '20%', right: '12%'}}></div>
        <div className="shape-float-3" style={{top: '50%', right: '5%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Galeri Kegiatan
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Dokumentasi perjalanan GAMMA dalam membangun generasi berkarya
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white/80 backdrop-blur-lg py-8 sticky top-16 md:top-20 z-40 shadow-soft border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter('semua')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === 'semua'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow-cyan scale-105'
                  : 'bg-neutral/50 text-gray-600 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:scale-105'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilter('Event')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === 'Event'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow-cyan scale-105'
                  : 'bg-neutral/50 text-gray-600 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:scale-105'
              }`}
            >
              Event
            </button>
            <button
              onClick={() => setFilter('Sosial')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === 'Sosial'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow-cyan scale-105'
                  : 'bg-neutral/50 text-gray-600 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:scale-105'
              }`}
            >
              Sosial
            </button>
            <button
              onClick={() => setFilter('Akademik')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === 'Akademik'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow-cyan scale-105'
                  : 'bg-neutral/50 text-gray-600 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:scale-105'
              }`}
            >
              Akademik
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gradient-to-br from-white via-neutral/20 to-white section-padding relative overflow-hidden">
        <div className="shape-float-1" style={{top: '10%', left: '5%'}}></div>
        <div className="shape-float-2" style={{bottom: '15%', right: '8%'}}></div>
        <div className="shape-float-4" style={{top: '50%', right: '15%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Placeholder with Gradient */}
                <div className={`h-64 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-7xl group-hover:scale-125 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600">Tidak ada dokumentasi untuk kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white section-padding relative overflow-hidden">
        <div className="shape-float-3" style={{top: '20%', left: '10%'}}></div>
        <div className="shape-float-2" style={{bottom: '15%', right: '8%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Dokumentasi <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Terstruktur</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-glow-cyan group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">120+</div>
                <div className="text-white/90">Total Dokumentasi</div>
              </div>
              <div className="bg-gradient-to-br from-accent to-secondary text-white rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-glow-purple group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24+</div>
                <div className="text-white/90">Event ter-Dokumentasi</div>
              </div>
              <div className="bg-gradient-to-br from-secondary to-primary text-white rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-glow-pink group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">3</div>
                <div className="text-white/90">Kategori</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent via-secondary to-primary text-white section-padding relative overflow-hidden">
        {/* Floating Shapes */}
        <div className="shape-float-1" style={{top: '20%', left: '10%'}}></div>
        <div className="shape-float-2" style={{bottom: '25%', right: '15%'}}></div>
        <div className="shape-float-4" style={{top: '40%', right: '5%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ikuti Kegiatan Kami!
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Jadilah bagian dari setiap momen berharga. Follow media sosial kami untuk update terbaru!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-block px-8 py-4 bg-white text-primary hover:text-accent font-semibold rounded-full transition-all duration-300 shadow-soft-lg hover:shadow-glow-cyan hover:scale-105 active:scale-95"
              >
                Follow Instagram
              </a>
              <a
                href="#"
                className="inline-block px-8 py-4 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-semibold rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:scale-105"
              >
                Subscribe YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Image Detail (optional enhancement) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-soft-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-96 bg-gradient-to-br ${selectedImage.color} flex items-center justify-center`}>
              <div className="text-9xl">{selectedImage.emoji}</div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-semibold rounded-full">
                  {selectedImage.category}
                </span>
                <span className="text-gray-500 text-sm">{selectedImage.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedImage.title}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeri;
