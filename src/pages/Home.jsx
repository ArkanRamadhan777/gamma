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
      <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white section-padding relative overflow-hidden">
        {/* Floating Shapes */}
        <div className="shape-float-1" style={{top: '10%', left: '5%'}}></div>
        <div className="shape-float-2" style={{bottom: '15%', right: '10%'}}></div>
        <div className="shape-float-3" style={{top: '50%', right: '20%'}}></div>
        <div className="shape-float-4" style={{bottom: '30%', left: '15%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 hover:scale-105 transition-transform duration-300">
                ✨ Platform Organisasi Modern
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                GAMMA – Bergerak Bersama, Membangun Generasi Berkarya
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Organisasi siswa yang menggerakkan potensi, membangun karakter, dan menciptakan dampak positif untuk sekolah dan masyarakat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/program"
                  className="px-8 py-4 bg-white text-primary hover:text-accent font-semibold rounded-full transition-all duration-300 text-center shadow-soft-lg hover:shadow-glow-cyan hover:scale-105 active:scale-95"
                >
                  Lihat Program Kami
                </Link>
                <Link
                  to="/tentang"
                  className="px-8 py-4 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-semibold rounded-full transition-all duration-300 text-center border-2 border-white/30 hover:border-white/50 hover:scale-105"
                >
                  Tentang GAMMA
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-white/10 backdrop-blur-sm rounded-3xl hover:scale-105 transition-transform duration-300 animate-float"></div>
                  <div className="h-64 bg-gradient-to-br from-white/20 to-secondary/30 rounded-3xl hover:scale-105 transition-transform duration-300 animate-float-delayed"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-64 bg-white/15 backdrop-blur-sm rounded-3xl hover:scale-105 transition-transform duration-300 animate-float-slow"></div>
                  <div className="h-48 bg-white/10 backdrop-blur-sm rounded-3xl hover:scale-105 transition-transform duration-300 animate-float"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white section-padding relative overflow-hidden">
        {/* Geometric background */}
        <div className="shape-float-2" style={{top: '20%', right: '5%'}}></div>
        <div className="shape-float-3" style={{bottom: '10%', left: '10%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-neutral rounded-3xl p-6 md:p-8 text-center shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-gradient-to-br from-neutral/30 to-white section-padding relative overflow-hidden">
        <div className="shape-float-1" style={{top: '15%', left: '8%'}}></div>
        <div className="shape-float-4" style={{bottom: '20%', right: '12%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Tentang <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GAMMA</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              GAMMA adalah platform organisasi modern yang berfokus pada pengembangan kepemimpinan, kreativitas, dan karakter anggotanya. Kami memiliki visi untuk menjadi wadah yang menginspirasi dan memberdayakan generasi muda untuk berkontribusi positif.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-cyan group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Terorganisir</h3>
                <p className="text-gray-600">Sistem kerja yang jelas dan terstruktur</p>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-purple group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Aktif</h3>
                <p className="text-gray-600">Program dan kegiatan yang konsisten</p>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-pink group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Terpercaya</h3>
                <p className="text-gray-600">Transparansi dan akuntabilitas penuh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="bg-white section-padding relative overflow-hidden">
        <div className="shape-float-2" style={{top: '10%', left: '5%'}}></div>
        <div className="shape-float-3" style={{bottom: '15%', right: '8%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Program <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Unggulan</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Program-program yang dirancang untuk membangun karakter, kreativitas, dan kepemimpinan siswa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {keyPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-neutral/50 rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color === 'bg-primary' ? 'from-primary to-primary-dark' : 'from-accent to-secondary'} rounded-3xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-soft`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-semibold rounded-full transition-all duration-300 shadow-soft-lg hover:shadow-glow-cyan hover:scale-105 active:scale-95"
            >
              Lihat Semua Program
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary via-accent to-secondary text-white section-padding relative overflow-hidden">
        {/* Floating Shapes */}
        <div className="shape-float-1" style={{top: '20%', left: '10%'}}></div>
        <div className="shape-float-2" style={{bottom: '25%', right: '15%'}}></div>
        <div className="shape-float-4" style={{top: '40%', right: '5%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sampaikan Aspirasimu!
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Suaramu penting untuk kami. GAMMA adalah jembatan antara siswa dan sekolah untuk menciptakan lingkungan belajar yang lebih baik.
            </p>
            <Link
              to="/aspirasi"
              className="inline-block px-8 py-4 bg-white text-primary hover:text-accent font-semibold rounded-full transition-all duration-300 shadow-soft-lg hover:shadow-glow-cyan hover:scale-105 active:scale-95"
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
