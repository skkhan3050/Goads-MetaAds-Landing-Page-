import React from 'react';

const REVIEWS = [
  {
    name: 'KATHLEEN SMITH',
    role: 'Jodie Comer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    quote: 'Over the years we have relied heavily onto them for creative design and the marketing services in business.'
  },
  {
    name: 'CAROLYN SMITH',
    role: 'Leadership Group',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    quote: 'Over the years we have relied heavily onto them for creative design and the marketing services in business.'
  },
  {
    name: 'ABBIE LLOYD',
    role: 'Digital Marketing',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    quote: 'Over the years we have relied heavily onto them for creative design and the marketing services in business.'
  }
];

export const TestimonialsSection: React.FC = () => {
  // Duplicate array 4 times for seamless 100% infinite slider loop
  const sliderReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section className="py-20 bg-[#000000] border-t border-[#1F1F1F] relative overflow-hidden">
      {/* CSS Keyframes for Smooth Infinite Slider Effect */}
      <style>{`
        @keyframes autoSlideMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-reviews-slider {
          display: flex;
          width: max-content;
          animation: autoSlideMarquee 30s linear infinite;
        }

        .animate-reviews-slider:hover {
          animation-play-state: paused;
        }

        #reviews-slider-track::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4AF37] font-extrabold text-xs tracking-widest uppercase mb-2 block">
            CLIENT REVIEWS &amp; FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Our Clients Say About <span className="text-[#FFC000]">GoAdsLive</span>
          </h2>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Reviews Slider Track */}
      <div id="reviews-slider-track" className="w-full overflow-hidden pt-12 pb-6">
        <div className="animate-reviews-slider gap-8 pl-4">
          {sliderReviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#080808] border border-[#1a1a1a] p-8 md:p-10 relative pt-16 hover:border-[#333] transition-colors duration-300 w-[320px] md:w-[400px] flex-shrink-0 rounded-2xl"
            >
              {/* Overlapping Round Avatar */}
              <div className="absolute -top-10 left-10 w-20 h-20 rounded-full overflow-hidden border-4 border-[#080808] shadow-lg">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                {item.quote}
              </p>

              {/* Divider Line */}
              <div className="w-full h-[1px] bg-[#222] mb-6" />

              {/* Footer Author & 5-Star Rating */}
              <div className="flex items-end justify-between">
                <div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-1">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, starIdx) => (
                    <svg key={starIdx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
