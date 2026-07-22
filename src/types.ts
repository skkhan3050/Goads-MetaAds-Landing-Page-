export interface MetricItem {
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  clientName: string;
  location: string;
  challenge: string;
  strategy: string;
  results: {
    roas: string;
    cpl: string;
    revenue: string;
  };
  chartData: {
    month: string;
    beforeRoas: number;
    afterRoas: number;
    beforeCpl: number;
    afterCpl: number;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface LeadFormData {
  firstName: string;
  businessName: string;
  phoneWhatsApp: string;
  email: string;
  website?: string;
  industry: string;
  monthlyBudget: string;
  businessGoal: string;
  message?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  image: string;
  rating: number;
  content: string;
  verified: boolean;
  resultsBadge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Budget' | 'Results' | 'Services' | 'Technical';
}
