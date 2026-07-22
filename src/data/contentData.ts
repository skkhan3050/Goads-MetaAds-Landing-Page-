import { CaseStudy, Testimonial, FAQItem } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'real-estate-dubai',
    industry: 'Dubai Real Estate',
    clientName: 'Emaar Luxury Partner Network',
    location: 'Downtown Dubai',
    challenge: 'Struggling with high CPL (>AED 450) and invalid phone numbers on Meta Lead Forms for off-plan property investors.',
    strategy: 'Implemented 2-Step WhatsApp qualified funnels, multi-currency audience targeting (GCC & UK HNWIs), and server-side Conversion API.',
    results: {
      roas: '4.8x ROAS',
      cpl: '62% Lower CPL',
      revenue: 'AED 18.5M+ Property Sales'
    },
    chartData: [
      { month: 'Month 1', beforeRoas: 1.2, afterRoas: 1.8, beforeCpl: 450, afterCpl: 320 },
      { month: 'Month 2', beforeRoas: 1.5, afterRoas: 3.1, beforeCpl: 420, afterCpl: 230 },
      { month: 'Month 3', beforeRoas: 1.4, afterRoas: 4.2, beforeCpl: 460, afterCpl: 180 },
      { month: 'Month 4', beforeRoas: 1.6, afterRoas: 4.8, beforeCpl: 440, afterCpl: 170 },
    ],
    testimonial: {
      quote: 'GoAdsLive transformed our off-plan campaign completely. The lead quality jumped from 15% valid to over 82% qualified buyers.',
      author: 'Tariq Al-Mansoor',
      role: 'Director of Marketing',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'healthcare-dubai',
    industry: 'Luxury Dental & Aesthetics Clinic',
    clientName: 'Dermatology & Smile Studio',
    location: 'Jumeirah, Dubai',
    challenge: 'High ad rejection rates on Instagram due to Meta health policy violations and low patient show-up rates.',
    strategy: 'Crafted Meta-compliant UGC video ads, dynamic Instagram DM booking automation, and lookalike audiences based on high-value patients.',
    results: {
      roas: '5.2x ROAS',
      cpl: '48% CPL Reduction',
      revenue: '140+ High-Ticket Treatments'
    },
    chartData: [
      { month: 'Month 1', beforeRoas: 1.8, afterRoas: 2.4, beforeCpl: 280, afterCpl: 210 },
      { month: 'Month 2', beforeRoas: 2.1, afterRoas: 3.8, beforeCpl: 290, afterCpl: 165 },
      { month: 'Month 3', beforeRoas: 1.9, afterRoas: 4.6, beforeCpl: 275, afterCpl: 145 },
      { month: 'Month 4', beforeRoas: 2.0, afterRoas: 5.2, beforeCpl: 285, afterCpl: 135 },
    ],
    testimonial: {
      quote: 'Our clinic schedule in Jumeirah is fully booked 3 weeks in advance. GoAdsLive handles every piece of creative and pixel setup seamlessly.',
      author: 'Dr. Sarah Al-Hashimi',
      role: 'Founder & Medical Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'ecommerce-dubai',
    industry: 'Premium Fashion & Fragrances',
    clientName: 'Oud & Luxe Arabia',
    location: 'Dubai Design District',
    challenge: 'iOS 14+ tracking loss caused ROAS to drop to 1.1x during Q4 holiday sales.',
    strategy: 'Deployed Meta Server-Side Conversion API with First-Party Cookies, Advantage+ Catalog campaigns, and automated retargeting sequences.',
    results: {
      roas: '6.4x ROAS',
      cpl: '38% Lower CAC',
      revenue: 'AED 3.4M Online Sales'
    },
    chartData: [
      { month: 'Month 1', beforeRoas: 1.1, afterRoas: 2.2, beforeCpl: 110, afterCpl: 85 },
      { month: 'Month 2', beforeRoas: 1.3, afterRoas: 3.9, beforeCpl: 115, afterCpl: 72 },
      { month: 'Month 3', beforeRoas: 1.2, afterRoas: 5.4, beforeCpl: 108, afterCpl: 64 },
      { month: 'Month 4', beforeRoas: 1.4, afterRoas: 6.4, beforeCpl: 112, afterCpl: 58 },
    ],
    testimonial: {
      quote: 'GoAdsLive rebuilt our Meta Pixel and server CAPI tracking. Our holiday campaign smashed all sales targets in the UAE & Saudi markets.',
      author: 'Rashid K.',
      role: 'Head of E-Commerce',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Faisal Al-Zaabi',
    role: 'Managing Director',
    company: 'Prime Horizon Properties Dubai',
    industry: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Working with GoAdsLive was the best decision for our luxury real estate agency in Dubai. They lowered our cost per lead from AED 380 to AED 140 while increasing investor lead quality significantly.',
    verified: true,
    resultsBadge: '4.8x ROAS • AED 12M+ Sales'
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Co-Founder',
    company: 'Glow Medical Spa Marina',
    industry: 'Healthcare & Aesthetics',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'The team knows Dubai advertising laws inside out. No ad rejections, beautiful UGC video creatives, and our WhatsApp is constantly buzzing with patient appointments.',
    verified: true,
    resultsBadge: '5.1x ROAS • 300+ New Patients'
  },
  {
    id: '3',
    name: 'Karim Bennani',
    role: 'E-Commerce Director',
    company: 'Silk & Amber Fashion UAE',
    industry: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Their Meta Conversion API setup saved our business after iOS updates. We scaled our monthly ad spend 4x while keeping ROAS above 5.8x consistently.',
    verified: true,
    resultsBadge: '6.2x ROAS • AED 2.8M Revenue'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    category: 'Budget',
    question: 'How much advertising budget do I need for Meta Ads in Dubai?',
    answer: 'We recommend starting with a minimum ad spend budget of AED 3,000 to AED 5,000 per month (paid directly to Meta) to allow sufficient data collection, A/B creative testing, and algorithm optimization in the Dubai market.'
  },
  {
    id: '2',
    category: 'Results',
    question: 'How long until I start seeing results from my Meta Ads campaigns?',
    answer: 'Initial lead flow and traffic start within 24 to 48 hours of campaign launch. Full algorithm calibration, audience refinement, and optimal ROAS scaling typically materialize within 14 to 21 days.'
  },
  {
    id: '3',
    category: 'Services',
    question: 'Do you work with E-Commerce brands in Dubai & GCC?',
    answer: 'Yes! We specialize in both High-Ticket Lead Generation (Real Estate, Healthcare, B2B, Services) and GCC E-Commerce Scaling (Shopify, WooCommerce, Custom stores) utilizing dynamic catalog ads and server-side tracking.'
  },
  {
    id: '4',
    category: 'Results',
    question: 'Can you reduce my Cost Per Lead (CPL) and improve lead quality?',
    answer: 'Absolutely. We filter out junk leads by implementing custom qualifying questions in Meta Instant Forms, direct WhatsApp automation flows, and high-intent landing page funnels tailored specifically to GCC buyers.'
  },
  {
    id: '5',
    category: 'Services',
    question: 'Do you guarantee leads or ROAS?',
    answer: 'While Meta policies prohibit guaranteeing exact numbers, our performance-driven contract includes KPI targets, dedicated media buyers, and a free trial optimization period if performance targets are missed in Month 1.'
  },
  {
    id: '6',
    category: 'Services',
    question: 'Do you manage ad creative design and video production?',
    answer: 'Yes! Our full-service package includes custom ad creatives, bilingual Arabic & English ad copy, Motion Graphics, UGC video scripting, and high-converting graphic design formatted for Instagram Reels and Facebook Feeds.'
  },
  {
    id: '7',
    category: 'Technical',
    question: 'Is Meta Conversion API (CAPI) and Pixel setup included?',
    answer: 'Yes! We implement server-side Meta Conversion API (CAPI), Google Tag Manager event parameters, and Custom Conversions to bypass browser ad blockers and iOS 14+ tracking limitations.'
  }
];
