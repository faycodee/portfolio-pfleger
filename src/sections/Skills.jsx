import { SKILLS_DATA } from '../configs/data/skills';
import FadeInSection from '../components/FadeInSection';
import { FaCheckDouble, FaBriefcaseMedical, FaGlobeAmericas, FaStar } from 'react-icons/fa';

const Skills = () => {
  const { hardSkills, softSkills, languages } = SKILLS_DATA;

  return (
    <section id="skills" className="py-24 px-6 bg-[#fbfcfd] dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <header className="mb-20 text-left lg:flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/30">
                03
              </span>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600/80">
                Qualifikationen
              </h2>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.1]">
              Technisches Know-how & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Kommunikationsstärke.
              </span>
            </h3>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">Expertise & Softskills</p>
            <div className="flex justify-end gap-1 mt-2">
               {[...Array(5)].map((_, i) => <FaStar key={i} className="text-emerald-500 text-[10px]" />)}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Hard Skills - Grid System */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-8 group">
              <FaBriefcaseMedical className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-widest">Fachliche Qualifikationen</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {hardSkills?.map((skill, i) => (
                <FadeInSection key={i} delay={i * 0.1}>
                  <div className="group relative p-8 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-200/60 dark:border-slate-700/50 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
                    {/* Hover Border Accent */}
                    <div className="absolute inset-0 border-2 border-emerald-500 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex p-3 rounded-2xl bg-slate-50 dark:bg-slate-700/50 text-emerald-600 dark:text-emerald-400 mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                        <skill.icon size={24} />
                      </div>
                      <h5 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{skill.name}</h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* RIGHT: Languages & Soft Skills Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* Languages - Neumorphic Style */}
            <div className="bg-white dark:bg-slate-800/80 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-8">
                <FaGlobeAmericas className="text-emerald-500" />
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-widest">Sprachkenntnisse</h4>
              </div>
              
              <div className="space-y-8">
                {languages?.map((lang, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase tracking-tighter">{lang.lang}</span>
                      <span className="px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-900/30 text-[10px] font-black text-emerald-600">{lang.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills - Professional Badge Style */}
            <div className="relative overflow-hidden bg-slate-900 dark:bg-emerald-950 p-8 rounded-[2.5rem] text-white shadow-2xl">
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
              
              <h4 className="relative z-10 text-xs font-bold uppercase text-emerald-500 tracking-widest mb-6">Soft Skills</h4>
              <div className="relative z-10 flex flex-wrap gap-2">
                {softSkills?.map((soft, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[13px] font-medium transition-colors">
                    {soft}
                  </span>
                ))}
              </div>
              
              <div className="relative z-10 mt-8 flex items-start gap-3 p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <FaCheckDouble className="text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-[11px] text-emerald-100/70 italic leading-relaxed">
                  Bereit für eine verantwortungsvolle Tätigkeit im Schichtdienst und Teamarbeit.
                </p>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
};

export default Skills;