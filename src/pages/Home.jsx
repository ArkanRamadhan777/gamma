import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { number: '45+', label: 'Anggota Aktif' },
    { number: '12+', label: 'Event Tahunan' },
    { number: '8', label: 'Program Aktif' },
    { number: '500+', label: 'Siswa Terlibat' },
  ];

  const keyPrograms = [
    {
      title: 'Leadership Camp',
      description: 'Program pelatihan kepemimpinan intensif untuk mengembangkan soft skills dan karakter siswa.',
      icon: '🎯',
      color: 'bg-primary',
    },
    {
      title: 'Social Project',
      description: 'Kegiatan sosial untuk membangun empati dan kontribusi kepada masyarakat sekitar.',
      icon: '🤝',
      color: 'bg-accent',
    },
    {
      title: 'School Festival',
      description: 'Festival sekolah tahunan yang menampilkan kreativitas dan talenta siswa.',
      icon: '🎪',
      color: 'bg-primary',
    },
    {
      title: 'Academic Support',
      description: 'Program bimbingan belajar dan mentoring untuk meningkatkan prestasi akademik.',
      icon: '📚',
      color: 'bg-accent',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                ✨ Platform Organisasi Modern
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                GAMMA – Bergerak Bersama, Membangun Generasi Berkarya
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Organisasi siswa yang menggerakkan potensi, membangun karakter, dan menciptakan dampak positif untuk sekolah dan masyarakat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/program"
                  className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 text-center shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Lihat Program Kami
                </Link>
                <Link
                  to="/tentang"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 text-center border-2 border-white/20"
                >
                  Tentang GAMMA
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                  <div className="h-64 bg-accent/80 rounded-2xl"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-64 bg-white/20 backdrop-blur-sm rounded-2xl"></div>
                  <div className="h-48 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-light section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Tentang GAMMA
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              GAMMA adalah platform organisasi modern yang berfokus pada pengembangan kepemimpinan, kreativitas, dan karakter anggotanya. Kami memiliki visi untuk menjadi wadah yang menginspirasi dan memberdayakan generasi muda untuk berkontribusi positif.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-xl bg-neutral">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Terorganisir</h3>
                <p className="text-gray-600">Sistem kerja yang jelas dan terstruktur</p>
              </div>
              <div className="p-6 rounded-xl bg-neutral">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Aktif</h3>
                <p className="text-gray-600">Program dan kegiatan yang konsisten</p>
              </div>
              <div className="p-6 rounded-xl bg-neutral">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Terpercaya</h3>
                <p className="text-gray-600">Transparansi dan akuntabilitas penuh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="bg-gradient-to-br from-gray-50 to-neutral section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Program Unggulan
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Program-program yang dirancang untuk membangun karakter, kreativitas, dan kepemimpinan siswa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {keyPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/program"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Lihat Semua Program
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sampaikan Aspirasimu!
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Suaramu penting untuk kami. GAMMA adalah jembatan antara siswa dan sekolah untuk menciptakan lingkungan belajar yang lebih baik.
            </p>
            <Link
              to="/aspirasi"
              className="inline-block px-8 py-4 bg-white text-primary hover:bg-neutral font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Kirim Aspirasi Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
