import { useState } from 'react';

const Aspirasi = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        message: '',
      });
    }, 3000);
  };

  const categories = [
    'Saran Program',
    'Kritik Kegiatan',
    'Usulan Kebijakan',
    'Keluhan Fasilitas',
    'Apresiasi',
    'Lainnya',
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Alamat',
      content: 'SMA/SMK Indonesia\nJl. Pendidikan No. 123, Jakarta',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'contact@ganexa.team',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'WhatsApp',
      content: '087760769086\n(Setiap Hari, 08:00 - 20:00)',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      title: 'Instagram & TikTok',
      content: '@ganexa.team',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const aspirationProcess = [
    {
      step: '1',
      title: 'Sampaikan Aspirasi',
      description: 'Isi form dengan lengkap dan jelas',
      icon: '✍️',
    },
    {
      step: '2',
      title: 'Review Tim',
      description: 'Aspirasi akan di-review dalam 1x24 jam',
      icon: '🔍',
    },
    {
      step: '3',
      title: 'Tindak Lanjut',
      description: 'Kami akan koordinasikan dengan pihak terkait',
      icon: '⚡',
    },
    {
      step: '4',
      title: 'Feedback',
      description: 'Kamu akan mendapat update via email',
      icon: '✅',
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
              Aspirasi & Kontak
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Suaramu penting untuk kami. GAMMA adalah jembatan aspirasi untuk sekolah yang lebih baik.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white section-padding relative overflow-hidden">
        <div className="shape-float-2" style={{top: '20%', right: '5%'}}></div>
        <div className="shape-float-4" style={{bottom: '10%', left: '8%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cara Kerja <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aspirasi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami memiliki sistem yang jelas untuk menindaklanjuti setiap aspirasi
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aspirationProcess.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-primary via-accent to-secondary w-16 h-16 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-soft group-hover:shadow-glow-cyan">
                  {process.icon}
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Contact Section */}
      <section className="bg-gradient-to-br from-white via-neutral/20 to-white section-padding relative overflow-hidden">
        <div className="shape-float-1" style={{top: '15%', left: '5%'}}></div>
        <div className="shape-float-3" style={{bottom: '20%', right: '8%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Sampaikan <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aspirasimu</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Isi form di bawah dengan lengkap dan jelas
              </p>

              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-500 rounded-3xl p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    Aspirasi Terkirim!
                  </h3>
                  <p className="text-green-600">
                    Terima kasih atas aspirasi kamu. Kami akan menindaklanjuti dalam 1x24 jam.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      No. WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Kategori Aspirasi *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    >
                      <option value="">Pilih kategori</option>
                      {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Pesan / Aspirasi *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                      placeholder="Sampaikan aspirasi kamu dengan jelas..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:from-primary-dark hover:to-accent-dark shadow-soft-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Kirim Aspirasi
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Dengan mengirim form ini, kamu setuju bahwa data akan diproses oleh tim GAMMA
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-soft-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Informasi <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Kontak</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Hubungi kami melalui saluran berikut
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start group">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.color} text-white rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-soft`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary via-accent to-secondary text-white rounded-3xl p-8 shadow-soft-lg relative overflow-hidden">
                <div className="shape-float-2" style={{top: '10%', right: '5%', opacity: 0.15}}></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  Jam Operasional
                </h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex justify-between items-center">
                    <span>Senin - Jumat</span>
                    <span className="font-semibold">08:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sabtu</span>
                    <span className="font-semibold">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Minggu & Libur</span>
                    <span className="font-semibold">Tutup</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-neutral/50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  💡 Tips Aspirasi Efektif
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sampaikan dengan jelas dan spesifik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Berikan konteks dan latar belakang</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sertakan solusi jika memungkinkan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Gunakan bahasa yang sopan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white section-padding relative overflow-hidden">
        <div className="shape-float-1" style={{top: '15%', right: '10%'}}></div>
        <div className="shape-float-3" style={{bottom: '20%', left: '8%'}}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Pertanyaan <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Umum</span>
            </h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-white to-neutral/50 rounded-3xl p-6 border border-gray-100 hover:shadow-soft transition-all duration-300">
                <h3 className="font-bold text-gray-800 mb-2">
                  Apakah aspirasi saya akan ditindaklanjuti?
                </h3>
                <p className="text-gray-600">
                  Ya, setiap aspirasi yang masuk akan di-review dan ditindaklanjuti sesuai dengan kewenangan dan prosedur yang berlaku.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-neutral/50 rounded-3xl p-6 border border-gray-100 hover:shadow-soft transition-all duration-300">
                <h3 className="font-bold text-gray-800 mb-2">
                  Berapa lama waktu respon aspirasi?
                </h3>
                <p className="text-gray-600">
                  Tim kami akan merespon dalam waktu maksimal 1x24 jam pada hari kerja.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-neutral/50 rounded-3xl p-6 border border-gray-100 hover:shadow-soft transition-all duration-300">
                <h3 className="font-bold text-gray-800 mb-2">
                  Apakah identitas saya akan dirahasiakan?
                </h3>
                <p className="text-gray-600">
                  Data pribadi kamu akan dijaga kerahasiaannya dan hanya digunakan untuk keperluan koordinasi aspirasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aspirasi;
