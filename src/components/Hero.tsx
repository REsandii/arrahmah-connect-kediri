import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-lg floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/15 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/10 rounded-lg floating-animation" style={{animationDelay: '1s'}}></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/30">
                ✨ Sekolah Kejuruan Terdepan di Kediri
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                SMK Arrahmah
                <span className="block gradient-text bg-gradient-to-r from-secondary to-yellow-300 bg-clip-text text-transparent">
                  Papar Kediri
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Sekolah Menengah Kejuruan <span className="font-semibold text-secondary">terkemuka</span> yang menghasilkan lulusan berkualitas dan siap kerja
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow hover-lift group" asChild>
                <a href="https://daftar.smkarrahmahkediri.sch.id/" target="_blank" rel="noopener noreferrer">
                  <span>Daftar Sekarang</span>
                  <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover-lift">
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Enhanced Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Telepon</p>
                  <p className="font-medium">(0354) 2892670</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Email</p>
                  <p className="font-medium text-sm">info@smkarrahmahkediri.sch.id</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced School Info Card */}
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl scale-110"></div>
            
            <Card className="relative card-glass shadow-strong border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              
              <div className="relative p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 scale-110"></div>
                    <img 
                      src="/lovable-uploads/fa7fdbca-b178-45ea-98d7-99940ba652b4.png" 
                      alt="Logo SMK Arrahmah"
                      className="relative h-28 w-28 mx-auto object-contain drop-shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">SMK Arrahmah Papar</h3>
                    <p className="text-muted-foreground font-medium">Kabupaten Kediri, Jawa Timur</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-white/20">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground mb-1">Alamat</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        JL. Kh. Hasim Asyári, Purwotengah, Kec. Papar, Kabupaten Kediri, Jawa Timur 64153
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/20">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <Phone className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">Telepon</p>
                        <p className="text-sm font-semibold text-foreground">(0354) 2892670</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-white/20">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">Email</p>
                        <p className="text-xs font-semibold text-foreground">info@smkarrahmah...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;