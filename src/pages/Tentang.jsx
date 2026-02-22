const Tentang = () => {
  const visiMisi = {
    visi: 'Menjadi organisasi modern yang inspiratif, inovatif, dan berdampak dalam membangun generasi berkarakter, berprestasi, dan berdedikasi untuk kemajuan bersama.',
    misi: [
      'Mengembangkan potensi kepemimpinan dan kreativitas melalui program-program yang terstruktur dan berkelanjutan',
      'Menjadi jembatan aspirasi untuk menciptakan lingkungan yang kondusif',
      'Menyelenggarakan kegiatan yang menumbuhkan karakter, empati, dan tanggung jawab sosial',
      'Membangun sistem organisasi yang transparan, akuntabel, dan profesional',
      'Mendorong partisipasi aktif dalam berbagai bidang strategis',
    ],
  };

  const values = [
    {
      icon: '🎯',
      title: 'Integritas',
      description: 'Berkomitmen pada kejujuran, transparansi, dan akuntabilitas dalam setiap tindakan',
      color: 'bg-primary',
    },
    {
      icon: '⚡',
      title: 'Inovasi',
      description: 'Mendorong kreativitas dan ide-ide baru untuk kemajuan organisasi dan sekolah',
      color: 'bg-accent',
    },
    {
      icon: '🤝',
      title: 'Kolaborasi',
      description: 'Membangun kerjasama solid antar anggota, siswa, guru, dan pihak eksternal',
      color: 'bg-primary',
    },
    {
      icon: '💪',
      title: 'Dedikasi',
      description: 'Berkomitmen penuh untuk memberikan yang terbaik bagi sekolah dan siswa',
      color: 'bg-accent',
    },
    {
      icon: '🌟',
      title: 'Empati',
      description: 'Memahami dan peduli terhadap kebutuhan serta aspirasi seluruh siswa',
      color: 'bg-primary',
    },
    {
      icon: '📈',
      title: 'Prestasi',
      description: 'Mendorong pencapaian excellence dalam setiap program dan kegiatan',
      color: 'bg-accent',
    },
  ];

  const structure = [
    {
      position: 'Ketua Organisasi',
      name: 'Ahmad Rizki Firmansyah',
      photo: '👨‍💼',
      color: 'from-primary to-primary-dark',
    },
    {
      position: 'Wakil Ketua',
      name: 'Siti Nurhaliza',
      photo: '👩‍💼',
      color: 'from-primary to-primary-dark',
    },
    {
      position: 'Sekretaris',
      name: 'Dinda Permata Sari',
      photo: '👩‍💼',
      color: 'from-accent to-accent-dark',
    },
    {
      position: 'Bendahara',
      name: 'Muhammad Farhan',
      photo: '👨‍💼',
      color: 'from-accent to-accent-dark',
    },
    {
      position: 'Ketua Bidang 1',
      name: 'Aisyah Ramadhani',
      photo: '👩‍💼',
      color: 'from-primary-light to-primary',
    },
    {
      position: 'Ketua Bidang 2',
      name: 'Budi Santoso',
      photo: '👨‍💼',
      color: 'from-primary-light to-primary',
    },
    {
      position: 'Ketua Bidang 3',
      name: 'Cantika Putri',
      photo: '👩‍💼',
      color: 'from-accent-light to-accent',
    },
    {
      position: 'Ketua Bidang 4',
      name: 'Dedi Setiawan',
      photo: '👨‍💼',
      color: 'from-accent-light to-accent',
    },
  ];

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
              Tentang GAMMA
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Mengenal lebih dekat organisasi yang bergerak bersama untuk membangun generasi berkarya
            </p>
          </div>
        </div>
      </section>

      {/* Visi Section */}
      <section className="bg-white section-padding relative overflow-hidden">
        <div className="shape-float-4" style={{top: '10%', right: '5%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary via-accent to-secondary text-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-soft-lg relative overflow-hidden">
              {/* Internal floating shapes */}
              <div className="shape-float-2" style={{top: '10%', right: '5%', opacity: 0.15}}></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Visi Kami</h2>
              </div>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed relative z-10">
                {visiMisi.visi}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="bg-gradient-to-br from-neutral/30 to-white section-padding relative overflow-hidden">
        <div className="shape-float-1" style={{top: '20%', left: '8%'}}></div>
        <div className="shape-float-3" style={{bottom: '15%', right: '10%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Misi <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Kami</span>
              </h2>
              <p className="text-lg text-gray-600">
                Langkah konkret untuk mewujudkan visi organisasi
              </p>
            </div>

            <div className="grid gap-4 md:gap-6">
              {visiMisi.misi.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-soft">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-2">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white section-padding relative overflow-hidden">
        <div className="shape-float-2" style={{top: '10%', right: '8%'}}></div>
        <div className="shape-float-4" style={{bottom: '15%', left: '12%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Nilai <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Organisasi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap langkah dan keputusan GAMMA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-neutral/50 rounded-3xl p-8 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color === 'bg-primary' ? 'from-primary to-primary-dark' : 'from-accent to-secondary'} rounded-3xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-soft`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="bg-gradient-to-br from-neutral/30 to-white section-padding relative overflow-hidden">
        <div className="shape-float-1" style={{top: '15%', right: '10%'}}></div>
        <div className="shape-float-3" style={{bottom: '20%', left: '8%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Struktur <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Kepengurusan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tim solid yang berkomitmen untuk memberikan yang terbaik
            </p>
            <div className="mt-4 inline-block px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">
              Periode 2025/2026
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {structure.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                <div className={`h-48 bg-gradient-to-br ${member.color} flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300`}>
                  {member.photo}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-white to-neutral/50 rounded-3xl p-8 md:p-12 text-center shadow-soft-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Dan <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">37+ Anggota</span> Lainnya
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Didukung oleh tim solid di berbagai bidang: Ketaqwaan, Budi Pekerti, Seni & Olahraga, Kewirausahaan, dan masih banyak lagi.
            </p>
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
              Mari Bergabung Bersama Kami
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Jadilah bagian dari gerakan positif untuk membangun lingkungan dan masyarakat yang lebih baik.
            </p>
            <a
              href="mailto:contact@gamma.team"
              className="inline-block px-8 py-4 bg-white text-primary hover:text-accent font-semibold rounded-full transition-all duration-300 shadow-soft-lg hover:shadow-glow-cyan hover:scale-105 active:scale-95"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
