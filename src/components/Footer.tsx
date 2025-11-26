import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Program Keahlian", href: "#programs" },
    { label: "Kontak", href: "#contact" },
  ];

  const programs = [
    { label: "TKR - Teknik Kendaraan Ringan", href: "#programs" },
    { label: "TSM - Teknik Sepeda Motor", href: "#programs" },
    { label: "TKJ - Teknik Komputer & Jaringan", href: "#programs" },
    { label: "APHP - Agribisnis Pengolahan", href: "#programs" },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/SmkPlusArrahmah/",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      url: "https://www.instagram.com/smkarrahmah_kediri/",
      color: "hover:text-pink-600"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://m.youtube.com/@smkarrahmahkediri",
      color: "hover:text-red-600"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary/20 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/uploads/fa7fdbca-b178-45ea-98d7-99940ba652b4.png" 
                  alt="Logo SMK Arrahmah"
                  className="relative h-12 w-12 object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                  SMK Arrahmah
                </h3>
                <p className="text-sm text-primary-foreground/80">Papar Kediri</p>
              </div>
            </div>
            
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Sekolah Menengah Kejuruan yang berkomitmen menghasilkan lulusan berkualitas, 
              berakhlak mulia, dan siap bersaing di dunia kerja.
            </p>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-secondary to-white rounded-full"></div>
                Ikuti Kami
              </h4>
              <div className="flex gap-3">
                {socialMedia.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 hover-lift"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-secondary to-white rounded-full"></div>
              Menu Utama
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-all duration-300 flex items-center gap-2 hover:translate-x-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-secondary to-white rounded-full"></div>
              Program Keahlian
            </h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-secondary to-white rounded-full"></div>
              Kontak Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                    JL. Kh. Hasim Asyári, Purwotengah, Kec. Papar, Kabupaten Kediri, Jawa Timur 64153
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Phone className="h-4 w-4 text-secondary" />
                <p className="text-sm text-primary-foreground/80">(0354) 2892670</p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <Mail className="h-4 w-4 text-secondary" />
                <p className="text-sm text-primary-foreground/80">info@smkarrahmahkediri.sch.id</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Button 
                variant="secondary" 
                size="sm" 
                className="w-full font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-medium hover-lift"
                asChild
              >
                <a href="https://daftar.smkarrahmahkediri.sch.id/" target="_blank" rel="noopener noreferrer">
                  Daftar Sekarang 🎓
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70 text-center md:text-left">
              © 2024 SMK Arrahmah Papar Kediri. Seluruh hak cipta dilindungi undang-undang.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-white transition-colors duration-300">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-white transition-colors duration-300">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;