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
            <Card key={index} className="p-8 bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group">
              {/* Program Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 ${program.color} rounded-lg flex items-center justify-center text-white shadow-medium`}>
                  <program.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="text-xs font-mono">
                      {program.code}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {program.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Kompetensi yang Dipelajari:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {program.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Prospects */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Prospek Karir:</h4>
                <div className="flex flex-wrap gap-2">
                  {program.career.map((career, careerIndex) => (
                    <Badge key={careerIndex} variant="secondary" className="text-xs">
                      {career}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-primary text-white shadow-strong">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Memulai Karir Impian Anda?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Bergabunglah dengan ribuan siswa yang telah memilih SMK Arrahmah sebagai langkah awal menuju sukses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg font-semibold">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-semibold border-white text-white hover:bg-white hover:text-primary">
                Konsultasi Gratis
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;