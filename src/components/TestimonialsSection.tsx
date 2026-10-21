import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star, 
  Building2, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#071426] relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#36D6F5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Perspectives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Trusted by CFOs & <span className="cyan-gradient-text">Global Business Leaders</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-xl">
              Discover how mid-market manufacturers, importers, and tech enterprises streamline treasury operations and unlock working capital.
            </p>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 mr-2">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-xl bg-[#0B1F3A] hover:bg-[#071426] border border-slate-700 hover:border-[#36D6F5]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-xl bg-[#0B1F3A] hover:bg-[#071426] border border-slate-700 hover:border-[#36D6F5]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#36D6F5]/25 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Quote details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1 text-[#36D6F5]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#36D6F5]" />
                ))}
                <span className="text-xs font-mono text-slate-400 ml-2">Verified Enterprise Partner</span>
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed">
                "{current.quote}"
              </blockquote>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#36D6F5]/40"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{current.author}</h4>
                  <p className="text-xs text-[#36D6F5] font-medium">{current.title}</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{current.company} • {current.location}</p>
                </div>
              </div>
            </div>

            {/* Impact Metric Card */}
            <div className="lg:col-span-4 bg-[#071426] p-6 sm:p-8 rounded-2xl border border-[#36D6F5]/30 text-center space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                Commercial Impact
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#36D6F5] font-mono">
                {current.metric}
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {current.metricLabel}
              </p>
              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-emerald-400 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Client Performance Case
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-8 bg-[#36D6F5]' 
                    : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          <div className="mt-6 text-center text-[10px] text-slate-500 font-mono">
            * Authorized case studies with client consent. Individual results vary depending on company payment corridors and receivable volume.
          </div>

        </div>

      </div>
    </section>
  );
};
