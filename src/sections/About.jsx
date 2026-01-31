import FadeInSection from '../components/FadeInSection';
import { useTranslation } from '../contexts/translationContext';
import { FaPlayCircle, FaCheckDouble, FaMapMarkerAlt, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();
  const videoId = "gSZIBt1dpXY"; // Example YouTube video ID; 

  // Fake Data for a Moroccan Pfleger
  const stats = [
    { icon: <FaGraduationCap />, label: "Abschluss", value: "Staatliches Diplom" },
    { icon: <FaMapMarkerAlt />, label: "Wohnort", value: "Fes, Marokko" },
    { icon: <FaCalendarAlt />, label: "Bereit ab", value: "März 2026" },
    { icon: <FaCheckDouble />, label: "Deutsch", value: "B2 Zertifiziert" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6  dark:bg-[#0f172a] transition-colors duration-500 flex items-center"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Column 1: Bio & Trust Grid (STRICT LEFT ALIGN) */}
          <div className="text-left order-2 lg:order-1">
            <FadeInSection>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/30">
                01
              </span>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600/80">
              Über mich
              </h2>
            </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Engagierte Fachkraft für <br/> 
                <span className="text-emerald-600">Ihre Einrichtung.</span>
              </h3>

              <div className="text-lg text-slate-600 dark:text-slate-400 space-y-6 mb-12 max-w-xl border-l-4 border-emerald-500/20 pl-6">
                {t.about.bio.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Pro Statistics Grid */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-emerald-500 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-lg">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{stat.label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>

          {/* Column 2: Video Presentation (PRO ASPECT) */}
          <div className="order-1 lg:order-2 sticky top-32">
            <FadeInSection delay={0.3}>
              <div className="relative">
                {/* Floating Badge above video */}
                <div className="absolute -top-4 -right-4 z-20 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg rotate-3">
                  Jetzt Ansehen
                </div>

                <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_64px_-15px_rgba(0,0,0,0.6)]">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
                    title="Video Vorstellung"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info Footer */}
                <div className="mt-6 flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                  <FaPlayCircle className="text-slate-400 mt-1 flex-shrink-0" />
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
                    In diesem Video stelle ich mich persönlich auf Deutsch vor und erläutere meine Motivation für die Pflegearbeit in Deutschland.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;