import { useState } from 'react';

const Program = () => {
  const [filter, setFilter] = useState('semua');

  const programs = [
    {
      title: 'Leadership Camp',
      category: 'Tahunan',
      description: 'Program pelatihan kepemimpinan intensif yang dirancang untuk mengembangkan soft skills, karakter, dan jiwa kepemimpinan siswa melalui berbagai kegiatan outdoor dan indoor.',
      icon: '🎯',
      color: 'bg-primary',
      highlights: [
        'Team building activities',
        'Public speaking workshop',
        'Problem solving training',
        'Character building session',
      ],
      status: 'Tahunan',
      statusColor: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Social Project',
      category: 'Aktif',
      description: 'Kegiatan sosial berkelanjutan untuk membangun empati dan memberikan kontribusi nyata kepada masyarakat sekitar melalui berbagai program sosial dan lingkungan.',
      icon: '🤝',
      color: 'bg-accent',
      highlights: [
        'Bakti sosial ke panti asuhan',
        'Program donasi buku',
        'Kegiatan bersih lingkungan',
        'Kunjungan ke panti jompo',
      ],
      status: 'Aktif',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      title: 'School Festival',
      category: 'Tahunan',
      description: 'Festival sekolah tahunan yang menjadi wadah bagi siswa untuk menampilkan kreativitas, talenta, dan prestasi di berbagai bidang seni, olahraga, dan akademik.',
      icon: '🎪',
      color: 'bg-primary',
      highlights: [
        'Pentas seni & musik',
        'Kompetisi olahraga',
        'Pameran karya siswa',
        'Bazaar & food festival',
      ],
      status: 'Tahunan',
      statusColor: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Academic Support',
      category: 'Aktif',
      description: 'Program bimbingan belajar dan mentoring untuk membantu siswa meningkatkan prestasi akademik melalui pendampingan dari kakak kelas dan tutor yang kompeten.',
      icon: '📚',
      color: 'bg-accent',
      highlights: [
        'Bimbingan belajar gratis',
        'Peer tutoring program',
        'Study group sessions',
        'Persiapan ujian',
      ],
      status: 'Aktif',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      title: 'Eco School Initiative',
      category: 'Kolaborasi',
      description: 'Program kolaborasi dengan pihak eksternal untuk mewujudkan sekolah yang peduli lingkungan melalui berbagai kegiatan ramah lingkungan dan edukasi sustainability.',
      icon: '🌱',
      color: 'bg-primary',
      highlights: [
        'Program bank sampah',
        'Edukasi zero waste',
        'Urban farming',
        'Green campaign',
      ],
      status: 'Kolaborasi',
      statusColor: 'bg-purple-100 text-purple-700',
    },
    {
      title: 'Digital Literacy',
      category: 'Aktif',
      description: 'Workshop dan pelatihan untuk meningkatkan literasi digital siswa dalam menghadapi era digital, termasuk media sosial yang bijak dan keamanan siber.',
      icon: '💻',
      color: 'bg-accent',
      highlights: [
        'Workshop media sosial',
        'Cybersecurity awareness',
        'Content creation training',
        'Digital marketing basics',
      ],
      status: 'Aktif',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      title: 'Student Mentorship',
      category: 'Aktif',
      description: 'Program mentoring dari kakak kelas untuk membantu siswa baru beradaptasi dengan lingkungan sekolah dan mengembangkan potensi mereka secara maksimal.',
      icon: '👥',
      color: 'bg-primary',
      highlights: [
        'Orientasi siswa baru',
        'Career guidance',
        'Personal development',
        'Goal setting workshop',
      ],
      status: 'Aktif',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      title: 'Health & Wellness',
      category: 'Kolaborasi',
      description: 'Program kesehatan mental dan fisik bekerjasama dengan psikolog dan tenaga kesehatan untuk mendukung kesejahteraan siswa secara menyeluruh.',
      icon: '❤️',
      color: 'bg-accent',
      highlights: [
        'Mental health awareness',
        'Konseling gratis',
        'Sport & fitness program',
        'Nutrition education',
      ],
      status: 'Kolaborasi',
      statusColor: 'bg-purple-100 text-purple-700',
    },
  ];

  const filteredPrograms = filter === 'semua' 
    ? programs 
    : programs.filter(program => program.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-20 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Program & Kegiatan
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Program-program terstruktur yang dirancang untuk mengembangkan potensi, kreativitas, dan karakter siswa
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter('semua')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                filter === 'semua'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral text-gray-600 hover:bg-neutral-dark'
              }`}
            >
              Semua Program
            </button>
            <button
              onClick={() => setFilter('Aktif')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                filter === 'Aktif'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral text-gray-600 hover:bg-neutral-dark'
              }`}
            >
              Aktif
            </button>
            <button
              onClick={() => setFilter('Tahunan')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                filter === 'Tahunan'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral text-gray-600 hover:bg-neutral-dark'
              }`}
            >
              Tahunan
            </button>
            <button
              onClick={() => setFilter('Kolaborasi')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                filter === 'Kolaborasi'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral text-gray-600 hover:bg-neutral-dark'
              }`}
            >
              Kolaborasi
            </button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-gradient-to-br from-gray-50 to-neutral section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`h-3 ${program.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0`}>
                      {program.icon}
                    </div>
                    <span className={`px-4 py-2 ${program.statusColor} rounded-full text-sm font-semibold`}>
                      {program.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">Highlight Program:</h4>
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600">Tidak ada program untuk kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Dampak Program Kami
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">8</div>
                <div className="text-blue-100">Program Aktif</div>
              </div>
              <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-orange-100">Siswa Terlibat</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24+</div>
                <div className="text-blue-100">Event per Tahun</div>
              </div>
              <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-orange-100">Kepuasan Siswa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ingin Berpartisipasi?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Semua program GAMMA terbuka untuk seluruh siswa. Mari bergabung dan berkontribusi untuk sekolah kita!
            </p>
            <a
              href="mailto:contact@gamma.team"
              className="inline-block px-8 py-4 bg-white text-primary hover:bg-neutral font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
