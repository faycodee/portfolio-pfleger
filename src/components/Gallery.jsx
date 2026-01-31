import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery = () => {
  // Daten direkt hier definieren (Kein t mehr nötig)
  const galleryItems = [
    { 
      title: "Im Pflegeheim", 
      category: "Erfahrung", 
      img: "/gallery/1.png" 
    },
    { 
      title: "In Bildungseinrichtung", 
      category: "Bildung", 
      img: "/gallery/6.jfif"     },
    { 
      title: "In  Krankenhaus", 
      category: "Erfahrung", 
      img: "/gallery/2.jpg"     },
      { 
        title: "In  Krankenhaus", 
        category: "Erfahrung", 
        img: "/gallery/8.jfif"     },
    { 
      title: "In  Krankenhaus", 
      category: "Erfahrung", 
      img: "/gallery/3.png"     },
      { 
        title: " Krankenhaus", 
        category: "Erfahrung", 
        img: "/gallery/7.jpg"     },
    { 
      title: " Bildungseinrichtung", 
      category: "Bildung", 
      img: "/gallery/4.jpg"     },
    { 
      title: "In  Krankenhaus", 
      category: "Erfahrung", 
      img: "/gallery/5.jpg"     },
      { 
        title: "In  Krankenhaus", 
        category: "Bildung", 
        img: "/gallery/9.jpg"     },
     
 

 
   
  ];

  return (
    <section id="nachweise" className="py-24 bg-[#f8fafc] dark:bg-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-left mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/30">
                02
              </span>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-emerald-600/80">
              Erfahrungen
              </h2>
            </div>
          </div>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Nachweise & <span className="text-emerald-600">Erfahrungen.</span>
          </h3>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="certificate-swiper !pb-20"
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index} className="max-w-[380px]">
              <div className="group relative bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                
                {/* Bild Bereich */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="inline-block px-3 py-1 bg-emerald-500 text-[10px] font-black text-white uppercase tracking-widest rounded-md mb-3">
                    {item.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExternalLinkAlt /> Dokument öffnen
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx="true">{`
        .certificate-swiper .swiper-pagination-bullet {
          background: #10b981;
          opacity: 0.3;
        }
        .certificate-swiper .swiper-pagination-bullet-active {
          width: 25px;
          border-radius: 4px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Gallery;