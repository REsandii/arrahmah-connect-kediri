import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Bike, Monitor, Wheat } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Car,
      code: "TKR",
      name: "Teknik Kendaraan Ringan",
      description: "Program keahlian yang mempelajari perawatan, perbaikan, dan modifikasi kendaraan ringan seperti mobil dan sejenisnya.",
      skills: ["Perawatan Mesin", "Sistem Kelistrikan", "Transmisi & Rem", "AC Mobil"],
      career: ["Teknisi Otomotif", "Service Advisor", "Quality Control", "Supervisor Bengkel"],
      color: "bg-blue-500"
    },
    {
      icon: Bike,
      code: "TSM", 
      name: "Teknik Sepeda Motor",
      description: "Program keahlian yang fokus pada perawatan, perbaikan, dan teknologi sepeda motor modern.",
      skills: ["Engine Motor", "Sistem Injeksi", "Kelistrikan Motor", "Transmisi CVT"],
      career: ["Teknisi Motor", "Service Manager", "Parts Specialist", "Workshop Owner"],
      color: "bg-orange-500"
    },
    {
      icon: Monitor,
      code: "TKJ",
      name: "Teknik Komputer dan Jaringan", 
      description: "Program keahlian yang mempelajari instalasi, konfigurasi, dan maintenance sistem komputer serta jaringan.",
      skills: ["Networking", "Hardware PC", "Server Administration", "Cyber Security"],
      career: ["Network Administrator", "IT Support", "System Administrator", "Web Developer"],
      color: "bg-green-500"
    },
    {
      icon: Wheat,
      code: "APHP",
      name: "Agribisnis Pengolahan Hasil Pertanian",
      description: "Program keahlian yang mempelajari pengolahan hasil pertanian menjadi produk bernilai tambah.",
      skills: ["Food Processing", "Quality Control", "Packaging Design", "Marketing"],
      career: ["Food Technologist", "Production Manager", "Quality Assurance", "Entrepreneur"],
      color: "bg-amber-500"
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Program Keahlian
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Jurusan di SMK Arrahmah
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pilih program keahlian yang sesuai dengan minat dan bakat Anda untuk masa depan yang cerah
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="relative p-8 card-elevated hover-lift group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Program Header */}
              <div className="relative flex items-start gap-4 mb-6">
                <div className={`relative w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  <program.icon className="relative h-8 w-8 drop-shadow-sm" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="text-xs font-mono border-primary/30 text-primary bg-primary/5">
                      {program.code}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {program.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="relative mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  Kompetensi yang Dipelajari:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {program.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3 p-2 bg-primary/5 rounded-lg border border-primary/10 group-hover:bg-primary/10 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Prospects */}
              <div className="relative mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-gradient-to-b from-secondary to-primary rounded-full"></div>
                  Prospek Karir:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {program.career.map((career, careerIndex) => (
                    <Badge key={careerIndex} variant="secondary" className="text-xs bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors duration-300">
                      {career}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button 
                variant="outline" 
                className="relative w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-medium transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Pelajari Lebih Lanjut</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="relative p-8 bg-gradient-primary text-white shadow-strong overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary opacity-90"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Siap Memulai Karir Impian Anda?
                </h3>
                <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Bergabunglah dengan <span className="font-semibold text-secondary">ribuan siswa</span> yang telah memilih SMK Arrahmah sebagai langkah awal menuju sukses
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="text-lg font-semibold shadow-medium hover-lift group" asChild>
                  <a href="https://daftar.smkarrahmahkediri.sch.id/" target="_blank" rel="noopener noreferrer">
                    <span>Daftar Sekarang</span>
                    <div className="ml-2 transition-transform group-hover:translate-x-1">✨</div>
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover-lift" asChild>
                  <a href="https://wa.me/6285890009991" target="_blank" rel="noopener noreferrer">
                    Konsultasi Gratis
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;