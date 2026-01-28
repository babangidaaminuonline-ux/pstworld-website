import { Service, Testimonial, BlogPost, BookingStatus } from './types';

export const INITIAL_SERVICES: Service[] = [
  { 
    id: '1', 
    title: 'Same-Day Delivery', 
    description: 'Hyper-local express delivery within the same business day for urgent packages and documents.', 
    icon: 'fa-bolt' 
  },
  { 
    id: '2', 
    title: 'Interstate Freight', 
    description: 'Reliable road and rail logistics connecting cities with guaranteed delivery windows and cargo safety.', 
    icon: 'fa-truck-fast' 
  },
  { 
    id: '3', 
    title: 'Global Shipping', 
    description: 'Comprehensive air and sea freight solutions for international commerce and large-scale personal needs.', 
    icon: 'fa-plane-departure' 
  },
  { 
    id: '4', 
    title: 'Business Logistics', 
    description: 'End-to-end supply chain management for enterprises, including warehousing and fulfillment solutions.', 
    icon: 'fa-warehouse' 
  },
  { 
    id: '5', 
    title: 'Home/Office Shifting', 
    description: 'Professional relocation services. We handle packing, secure transport, and setup for homes and offices.', 
    icon: 'fa-truck-ramp-box' 
  },
  { 
    id: '6', 
    title: 'Custom Clearance', 
    description: 'Expert brokerage services to ensure your goods clear international customs smoothly and legally.', 
    icon: 'fa-file-shield' 
  },
  { 
    id: '7', 
    title: 'Crane Rental', 
    description: 'Heavy-duty lifting solutions with a fleet of modern cranes for construction and industrial projects.', 
    icon: 'fa-tower-observation' 
  },
  { 
    id: '8', 
    title: 'House/Estate Road Construction', 
    description: 'Full-scale infrastructure development specializing in estate roads and private road paving projects.', 
    icon: 'fa-road' 
  },
  { 
    id: '9', 
    title: 'Cleaning & Fumigation', 
    description: 'Professional hygiene and pest control services. We offer deep cleaning and eco-friendly fumigation for homes, offices, and industrial sites.', 
    icon: 'fa-spray-can-sparkles' 
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'John Doe', role: 'CEO, TechFlow', content: 'PST WORLD transformed our delivery chain. Their reliability is simply 10/10.', rating: 5 },
  { id: '2', name: 'Sarah Miller', role: 'Store Owner', content: 'Fastest same-day service I have ever used. The tracking is incredibly accurate!', rating: 5 },
  { 
    id: '3', 
    name: 'Jamilu Sani', 
    role: 'Homeowner', 
    content: 'The home shifting service was seamless. They handled my fragile furniture with extreme care and arrived exactly on time.', 
    rating: 5 
  },
  { 
    id: '4', 
    name: 'Khadija Abubakar', 
    role: 'Import/Export Director', 
    content: 'Exceptional global shipping. Their custom clearance team is the best I have worked with in over a decade of business.', 
    rating: 5 
  },
  { 
    id: '5', 
    name: 'Samuel Victor', 
    role: 'Project Manager', 
    content: 'PST WORLD is our go-to for estate road construction. Their attention to structural integrity and timeline is unmatched.', 
    rating: 5 
  }
];

export const INITIAL_POSTS: BlogPost[] = [
  { 
    id: '1', 
    title: '5 Tips for Efficient Supply Chain Management', 
    excerpt: 'Optimize your logistics flow with these expert industry tips to save time and costs.', 
    content: 'In today\'s fast-paced market, efficiency is the key to scaling your business...', 
    author: 'Alex Reed', 
    date: '2024-05-20', 
    image: 'https://picsum.photos/800/400?random=1',
    category: 'Logistics'
  },
  { 
    id: '2', 
    title: 'Future of Drone Delivery in 2025', 
    excerpt: 'How automation and drone technology are reshaping the last-mile delivery landscape.', 
    content: 'The sky is literally the limit when it comes to the future of logistics...', 
    author: 'Jane Doe', 
    date: '2024-05-18', 
    image: 'https://picsum.photos/800/400?random=2',
    category: 'Technology'
  },
];