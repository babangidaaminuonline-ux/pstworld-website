import React from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_SERVICES, INITIAL_TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Logistics background"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Global Logistics <span className="text-blue-500">Simplified.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Fast, secure, and smart delivery solutions for businesses and individuals worldwide. 
              Real-time tracking, global reach, and unparalleled reliability with PST WORLD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-center text-lg transition-all shadow-lg shadow-blue-600/20">
                Book a Delivery
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-center text-lg transition-all border border-white/20">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Deliveries Made', val: '2M+' },
            { label: 'Happy Clients', val: '500k+' },
            { label: 'Global Cities', val: '150+' },
            { label: 'On-Time Rate', val: '99.9%' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-blue-600">{stat.val}</div>
              <div className="text-slate-500 font-medium uppercase text-sm tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Expertise you can trust, delivery you can depend on. We handle every parcel with precision.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INITIAL_SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
              <Link to="/services" className="text-blue-600 font-bold text-sm flex items-center hover:underline">
                Learn More <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">How it works</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-8">Simple 4-Step Process</h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Place Your Order', desc: 'Use our simple portal to provide pickup and delivery details.' },
                { step: '02', title: 'Swift Pickup', desc: 'Our professional courier arrives at your location within minutes.' },
                { step: '03', title: 'Real-Time Tracking', desc: 'Watch your package move across the map in high-definition.' },
                { step: '04', title: 'Safe Delivery', desc: 'Recipient receives the package with digital proof of delivery.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-3xl font-black text-slate-100 flex-shrink-0">{item.step}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl" alt="Logistics flow" />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 p-8 rounded-2xl text-white shadow-xl hidden sm:block">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
          <div className="flex justify-center space-x-1 text-yellow-400 mb-2">
            {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star"></i>)}
          </div>
          <p className="text-slate-400">Join our growing list of satisfied customers.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {INITIAL_TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
              <p className="text-lg italic text-slate-300 mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to move your business forward?</h2>
          <p className="text-xl opacity-90 mb-10">Start your first shipment today and experience the PST WORLD difference.</p>
          <Link to="/booking" className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform inline-block">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;