import React from 'react';
import { INSIGHTS_ARTICLES } from '../data/mockData';
import { Article } from '../types';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles,
  Calendar,
  UserCheck
} from 'lucide-react';

interface InsightsSectionProps {
  onReadArticle: (article: Article) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onReadArticle }) => {
  const images = [
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80', // Currency & charts
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80', // Calculator & invoices
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', // Cargo & trade logistics
  ];

  return (
    <section id="insights" className="py-24 bg-[#0B1F3A]/30 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#36D6F5]/30 text-xs font-semibold text-[#36D6F5] mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Thought Leadership & Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Insights & <span className="cyan-gradient-text">Financial Intelligence</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-xl">
              Practical guides on global treasury management, accounts receivable liquidity, and FX risk mitigation authored by financial practitioners.
            </p>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="glass-card-interactive rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer border border-slate-800/80 hover:border-[#36D6F5]/40"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <img
                    src={images[idx]}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-[#071426]/90 backdrop-blur-md border border-[#36D6F5]/30 px-3 py-1 rounded-full text-[10px] font-mono font-semibold text-[#36D6F5]">
                    {article.category}
                  </span>

                  <span className="absolute bottom-3 right-4 text-[11px] font-mono text-slate-300 flex items-center gap-1 bg-[#071426]/80 px-2 py-0.5 rounded">
                    <Clock className="w-3 h-3 text-[#36D6F5]" />
                    {article.readTime}
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#36D6F5] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Author & Read Link Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#36D6F5]/40"
                  />
                  <span className="text-xs font-semibold text-slate-300">{article.author.name}</span>
                </div>

                <span className="text-xs font-bold text-[#36D6F5] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
