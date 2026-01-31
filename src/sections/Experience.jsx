import { EXPERIENCE_DATA } from '../configs/data/experience';
import FadeInSection from '../components/FadeInSection';
import { FaUserGraduate, FaHospital, FaClinicMedical, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  // Mapping Icons based on type
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'education': return <FaUserGraduate />;
      case 'work': return <FaHospital />;
      default: return <FaClinicMedical />;
    }
  };

  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header - Professionell & Linksbündig */}
        <div className="mb-20 border-l-4 border-emerald-500 pl-6">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-emerald-600 mb-2">
            Werdegang
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
            Berufserfahrung & <span className="text-emerald-600">Ausbildung.</span>
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 w-px h-full bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="relative pl-12 md:pl-20 group">
                  
                  {/* Timeline Dot / Icon */}
                  <div className="absolute left-0 md:left-4 top-0 w-8 h-8 md:w-10 md:h-10 bg-white dark:bg-slate-900 border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 z-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-lg">
                    {getIcon(exp.icon)}
                  </div>

                  {/* Content Card */}
                  <div className="bg-[#f8fafc] dark:bg-slate-800/50 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-md mb-2">
                          {exp.period}
                        </span>
                        <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                          {exp.role}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-emerald-500"></span>
                      {exp.company}
                    </p>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;