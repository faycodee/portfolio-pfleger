import { EDUCATION_DATA } from '../configs/data/education';
import FadeInSection from '../components/FadeInSection';
import { FaAward } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header - Professionell linksbündig */}
        <header className="mb-20 border-l-4 border-emerald-500 pl-6">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-emerald-600 mb-2">
            Bildungsweg
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
            Akademische <span className="text-emerald-600">Qualifikationen.</span>
          </h3>
        </header>

        <div className="relative">
          {/* Vertikale Linie */}
          <div className="absolute left-6 md:left-10 top-0 w-[2px] h-full bg-slate-100 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {EDUCATION_DATA.map((edu, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="relative pl-16 md:pl-24">
                  
                  {/* Timeline-Punkt (Icon) */}
                  <div className="absolute left-0 md:left-4 top-0 w-12 h-12 bg-white dark:bg-slate-900 border-2 border-emerald-500 rounded-2xl flex items-center justify-center z-10 shadow-lg shadow-emerald-500/10 transition-transform hover:rotate-6">
                    <edu.icon className="text-emerald-600 text-xl" />
                  </div>

                  {/* Education Card */}
                  <div className="group relative bg-slate-50 dark:bg-slate-800/40 p-8 rounded-[2rem] border border-transparent hover:border-emerald-500/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500">
                    
                    {/* Jahr als Badge */}
                    <span className="inline-block px-4 py-1 mb-4 text-[10px] font-black tracking-widest text-emerald-700 uppercase bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                      {edu.year}
                    </span>

                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                      {edu.degree}
                    </h4>
                    
                    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mb-4 italic">
                      {edu.school}
                    </p>
                    
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                      {edu.description}
                    </p>

                    {/* Deko-Element für "Zertifiziert" Look */}
                    <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-30 transition-opacity hidden md:block">
                       <FaAward size={60} className="text-emerald-600" />
                    </div>
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

export default Education;