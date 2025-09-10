import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                SMK Arrahmah
                <span className="block text-secondary">Papar Kediri</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                Sekolah Menengah Kejuruan terkemuka yang menghasilkan lulusan berkualitas dan siap kerja
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" variant="secondary" className="text-lg font-semibold">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-semibold border-white text-white hover:bg-white hover:text-primary">
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(0354) 2892670</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@smkarrahmahkediri.sch.id</span>
              </div>
            </div>
          </div>

          {/* Right Content - School Info Card */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-strong">
              <div className="text-center mb-6">
                <img 
                  src="/lovable-uploads/fa7fdbca-b178-45ea-98d7-99940ba652b4.png" 
                  alt="Logo SMK Arrahmah"
                  className="h-24 w-24 mx-auto mb-4 object-contain"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">SMK Arrahmah Papar</h3>
                <p className="text-muted-foreground">Kabupaten Kediri, Jawa Timur</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Alamat</p>
                    <p className="text-sm text-muted-foreground">
                      JL. Kh. Hasim Asyári, Purwotengah, Kec. Papar, Kabupaten Kediri, Jawa Timur 64153
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Telepon</p>
                    <p className="text-sm text-muted-foreground">(0354) 2892670</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@smkarrahmahkediri.sch.id</p>
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