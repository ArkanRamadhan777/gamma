import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang', label: 'Tentang Kami' },
    { path: '/program', label: 'Program' },
    { path: '/galeri', label: 'Galeri' },
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/ganexa.team', icon: 'instagram' },
    { name: 'TikTok', url: 'https://tiktok.com/@ganexa.team', icon: 'tiktok' },
    { name: 'Email', url: 'mailto:contact@ganexa.team', icon: 'email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Floating Shapes */}
      <div className="shape-float-1" style={{top: '10%', right: '15%'}}></div>
      <div className="shape-float-2" style={{bottom: '20%', left: '10%'}}></div>
      <div className="shape-float-3" style={{top: '40%', right: '5%'}}></div>
      
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow-cyan">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GAMMA</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Platform organisasi modern yang bergerak bersama untuk membangun generasi berkarya, berprestasi, dan berdedikasi.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-primary hover:to-accent rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-cyan"
                  aria-label={social.name}
                >
                  {social.icon === 'instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {social.icon === 'tiktok' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-2.3 1.6-4.41 3.68-5.41 1.09-.58 2.33-.85 3.57-.77v4.02c-.91-.17-1.91.11-2.61.7-.71.55-1.13 1.44-1.17 2.34-.02.5.06 1.02.24 1.5.37.94 1.25 1.67 2.22 1.83.65.11 1.33.05 1.92-.24 1.1-.48 1.88-1.56 1.94-2.76.01-6.52-.01-13.04.01-19.56z"/>
                    </svg>
                  )}
                  {social.icon === 'email' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              <span className="relative z-10">Link Cepat</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              <span className="relative z-10">Kontak</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent to-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Indonesia</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@ganexa.team</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>087760769086</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800/50 backdrop-blur-sm relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} GAMMA. Bergerak Bersama, Membangun Generasi Berkarya.
            </p>
            <p className="text-gray-400 text-sm">
              made by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">ganexa</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
