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
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-20 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tentang GAMMA
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Mengenal lebih dekat organisasi yang bergerak bersama untuk membangun generasi berkarya
            </p>
          </div>
        </div>
      </section>

      {/* Visi Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Visi Kami</h2>
              </div>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                {visiMisi.visi}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="bg-neutral-light section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Misi Kami
              </h2>
              <p className="text-lg text-gray-600">
                Langkah konkret untuk mewujudkan visi organisasi
              </p>
            </div>

            <div className="grid gap-4 md:gap-6">
              {visiMisi.misi.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold mr-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1">
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
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Nilai Organisasi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap langkah dan keputusan GAMMA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-neutral rounded-2xl p-8 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
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
      <section className="bg-gradient-to-br from-gray-50 to-neutral section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Struktur Kepengurusan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tim solid yang berkomitmen untuk memberikan yang terbaik
            </p>
            <div className="mt-4 inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Periode 2025/2026
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {structure.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${member.color} flex items-center justify-center text-7xl`}>
                  {member.photo}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Dan 37+ Anggota Lainnya
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Didukung oleh tim solid di berbagai bidang: Ketaqwaan, Budi Pekerti, Seni & Olahraga, Kewirausahaan, dan masih banyak lagi.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent to-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Mari Bergabung Bersama Kami
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-8 leading-relaxed">
              Jadilah bagian dari gerakan positif untuk membangun lingkungan dan masyarakat yang lebih baik.
            </p>
            <a
              href="mailto:contact@gamma.team"
              className="inline-block px-8 py-4 bg-white text-primary hover:bg-neutral font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
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
