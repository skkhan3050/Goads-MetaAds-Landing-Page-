import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/contentData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('1');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Budget', 'Results', 'Services', 'Technical'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Got Questions About <span className="text-gradient-blue">Meta Ads in Dubai</span>?
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Everything you need to know about working with GoAdsLive and scaling your Facebook &amp; Instagram campaigns.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 mb-8">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. Budget, Conversion API, Lead Quality)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-1.5 px-3.5 rounded-xl text-xs font-bold transition-all border ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F8FAFC] rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-gray-900 text-sm sm:text-base hover:text-blue-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-lg shrink-0">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-gray-500 text-sm">
              No matching questions found. Contact our team via WhatsApp for instant answers!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
