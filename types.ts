
export enum BookingStatus {
  NEW = 'NEW',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Booking {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  serviceId: string;
  pickupLocation: string;
  deliveryLocation: string;
  date: string;
  status: BookingStatus;
  notes?: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface SiteConfig {
  primaryColor: string;
  brandName: string;
  logo: string;
  contactEmail: string;
  phone: string;
  address: string;
}
