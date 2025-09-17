import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const { name, email, phone, program, message } = formData;
    
    let whatsappMessage = `*Pesan dari Website SMK Arrahmah*\n\n`;
    whatsappMessage += `📝 *Nama:* ${name || 'Tidak diisi'}\n`;
    whatsappMessage += `📧 *Email:* ${email || 'Tidak diisi'}\n`;
    whatsappMessage += `📱 *Telepon:* ${phone || 'Tidak diisi'}\n`;
    whatsappMessage += `🎓 *Jurusan Diminati:* ${program || 'Tidak dipilih'}\n\n`;
    whatsappMessage += `💬 *Pesan:*\n${message || 'Tidak ada pesan'}\n\n`;
    whatsappMessage += `_Dikirim melalui website resmi SMK Arrahmah_`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6285890009991?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "JL. Kh. Hasim Asyári, Purwotengah, Kec. Papar, Kabupaten Kediri, Jawa Timur 64153",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "(0354) 2892670",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@smkarrahmahkediri.sch.id",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 07:00 - 16:00 WIB\nSabtu: 07:00 - 12:00 WIB",
      color: "text-orange-500"
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/SmkPlusArrahmah/",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      url: "https://www.instagram.com/smkarrahmah_kediri/",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://m.youtube.com/@smkarrahmahkediri",
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-50"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary-soft/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Hubungi Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontak & Informasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Butuh informasi lebih lanjut? Jangan ragu untuk menghubungi kami melalui berbagai cara di bawah ini
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="relative p-6 card-elevated hover-lift group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{info.title}</h4>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Social Media */}
                <Card className="relative p-6 card-elevated hover-lift group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                      Ikuti Kami
                    </h4>
                    <div className="flex gap-3">
                      {socialMedia.map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className={`w-12 h-12 p-0 border-2 border-transparent bg-gradient-to-br from-primary/10 to-secondary/10 hover:border-primary/30 ${social.color} transition-all duration-300 hover-lift`}
                          asChild
                        >
                          <a href={social.url} target="_blank" rel="noopener noreferrer">
                            <social.icon className="h-5 w-5" />
                          </a>
                        </Button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Dapatkan update terbaru tentang SMK Arrahmah
                    </p>
                  </div>
                </Card>
              </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="relative p-8 card-elevated hover-lift overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-primary/5"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  <h3 className="text-2xl font-bold gradient-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Kirim Pesan
                  </h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nama Lengkap *
                      </label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap Anda" 
                        className="w-full border-primary/20 focus:border-primary/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email *
                      </label>
                      <Input 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email" 
                        placeholder="nama@email.com" 
                        className="w-full border-primary/20 focus:border-primary/50 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nomor Telepon
                      </label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="08xxxxxxxxxx" 
                        className="w-full border-primary/20 focus:border-primary/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Jurusan yang Diminati
                      </label>
                      <select 
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-primary/20 bg-background rounded-md text-sm focus:border-primary/50 transition-colors duration-300"
                      >
                        <option value="">Pilih Jurusan</option>
                        <option value="TKR">TKR - Teknik Kendaraan Ringan</option>
                        <option value="TSM">TSM - Teknik Sepeda Motor</option>
                        <option value="TKJ">TKJ - Teknik Komputer dan Jaringan</option>
                        <option value="APHP">APHP - Agribisnis Pengolahan Hasil Pertanian</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Pesan *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda tanyakan..."
                      className="w-full min-h-[120px] border-primary/20 focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>

                  <Button 
                    type="button" 
                    size="lg" 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-medium hover-lift"
                  >
                    Kirim Pesan ✉️
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                  <p className="text-sm text-muted-foreground text-center">
                    Dengan mengirim pesan ini, Anda menyetujui bahwa data akan digunakan untuk keperluan komunikasi resmi SMK Arrahmah
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="overflow-hidden shadow-soft">
            <div className="p-6 bg-gradient-card">
              <h3 className="text-xl font-bold text-foreground mb-2">Lokasi SMK Arrahmah</h3>
              <p className="text-muted-foreground">
                JL. Kh. Hasim Asyári, Purwotengah, Kec. Papar, Kabupaten Kediri, Jawa Timur
              </p>
            </div>
            <div className="w-full h-64 md:h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5873112848644!2d112.02585670885618!3d-7.7273481765417005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785072ffffffff%3A0x3e13106ce24ae6b9!2sSMK%20Arrahmah!5e0!3m2!1sid!2sid!4v1757635858247!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-lg"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;