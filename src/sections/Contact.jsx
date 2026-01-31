import { FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { SITE_DATA } from '../configs/data/site';

const Contact = () => {
  // Direkte Daten aus der SITE_DATA
  const { email, social, location } = SITE_DATA;

  const contactMethods = [
    {
      id: 1,
      title: "E-Mail",
      value: email || "y.elamrani@email.ma",
      icon: <FaEnvelope />,
      link: `mailto:${email}`,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20",
    },
    {
      id: 2,
      title: "WhatsApp",
      value: "Direktnachricht senden",
      icon: <FaWhatsapp />,
      link: social.whatsapp || "#",
      color: "bg-green-50 text-green-600 dark:bg-green-900/20",
    },
    {
      id: 3,
      title: "LinkedIn",
      value: "Berufliches Profil",
      icon: <FaLinkedin />,
      link: social.linkedin || "#",
      color: "bg-slate-50 text-slate-700 dark:bg-slate-900/20 dark:text-slate-300",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">
            Kontakt
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Lassen Sie uns <span className="text-emerald-600">verbinden.</span>
          </h3>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ich bin bereit für neue Herausforderungen in Deutschland. Kontaktieren Sie mich direkt über einen der folgenden Kanäle für ein Erstgespräch.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-transparent hover:border-emerald-500/30 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 shadow-sm hover:shadow-2xl text-center"
            >
              <div className={`inline-flex p-4 rounded-2xl ${method.color} text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{method.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{method.value}</p>
            </a>
          ))}
        </div>

        {/* Location & Status Footer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-emerald-600 rounded-[2.5rem] text-white shadow-xl shadow-emerald-900/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
          </div>
          
          <div className="relative z-10 flex items-center gap-3">
            <FaMapMarkerAlt className="text-emerald-200" />
            <span className="font-bold tracking-wide uppercase text-sm">Standort: Fes, Marokko</span>
          </div>
          <div className="hidden md:block h-8 w-[1px] bg-emerald-400/50 relative z-10"></div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </div>
            <span className="font-bold tracking-wide uppercase text-sm italic">Bereit für Visum & Umzug</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;