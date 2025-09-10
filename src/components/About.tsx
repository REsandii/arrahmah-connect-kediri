import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Target } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "500+", label: "Siswa Aktif" },
    { number: "95%", label: "Tingkat Kelulusan" },
    { number: "85%", label: "Siswa Bekerja" },
    { number: "15+", label: "Tahun Pengalaman" },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Pendidikan Berkualitas", 
      description: "Kurikulum yang sesuai dengan kebutuhan industri dan perkembangan teknologi terkini"
    },
    {
      icon: Users,
      title: "Tenaga Pengajar Profesional",
      description: "Guru dan instruktur berpengalaman dengan latar belakang industri yang kompeten"
    },
    {
      icon: Award,
      title: "Fasilitas Lengkap",
      description: "Laboratorium dan workshop modern untuk mendukung proses pembelajaran praktik"
    },
    {
      icon: Target,
      title: "Siap Kerja",
      description: "Lulusan yang kompeten dan siap memasuki dunia kerja sesuai bidang keahliannya"
    },
  ];

  return (
    <section id="about" className="py-20 bg-primary-soft/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Tentang Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SMK Arrahmah Papar Kediri
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sekolah Menengah Kejuruan yang berkomitmen menghasilkan lulusan berkualitas, 
            berakhlak mulia, dan siap bersaing di dunia kerja
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card shadow-soft">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-gradient-card shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-4">Visi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi Sekolah Menengah Kejuruan yang unggul dalam menghasilkan lulusan 
              yang beriman, bertaqwa, berilmu, terampil, mandiri, dan berakhlak mulia 
              serta mampu bersaing di era global.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-4">Misi</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Menyelenggarakan pendidikan kejuruan yang berkualitas</li>
              <li>• Mengembangkan kompetensi siswa sesuai kebutuhan industri</li>
              <li>• Membentuk karakter siswa yang berakhlak mulia</li>
              <li>• Mempersiapkan lulusan yang siap kerja dan berwirausaha</li>
            </ul>
          </Card>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;