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
            <Card key={index} className="relative p-6 text-center card-elevated hover-lift group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="relative p-8 card-elevated hover-lift group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Visi</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi Sekolah Menengah Kejuruan yang unggul dalam menghasilkan lulusan 
                yang beriman, bertaqwa, berilmu, terampil, mandiri, dan berakhlak mulia 
                serta mampu bersaing di era global.
              </p>
            </div>
          </Card>

          <Card className="relative p-8 card-elevated hover-lift group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Misi</h3>
              </div>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Menyelenggarakan pendidikan kejuruan yang berkualitas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mengembangkan kompetensi siswa sesuai kebutuhan industri</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Membentuk karakter siswa yang berakhlak mulia</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mempersiapkan lulusan yang siap kerja dan berwirausaha</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="relative p-6 text-center card-elevated hover-lift group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <value.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;