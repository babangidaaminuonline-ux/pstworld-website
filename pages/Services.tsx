
import React from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Our Logistics Solutions</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From local last-mile delivery to complex global supply chain management, we have the expertise to move your world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {INITIAL_SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl shrink-0 shadow-lg shadow-blue-600/20">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description} Our specialized team ensures that your cargo is handled with the highest level of care and professional standards, utilizing state-of-the-art tracking and optimized routing.
                </p>
                <div className="flex items-center gap-4">
                  <Link to="/booking" className="bg-slate-900 text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Need a Custom Enterprise Solution?</h2>
            <p className="text-slate-600 text-lg mb-8">
              We provide tailored logistics for high-volume businesses, including warehousing, inventory management, and dedicated fleet services.
            </p>
            <ul className="space-y-4 mb-10">
              {['Dedicated Account Manager', 'API Integration for E-commerce', 'Custom Reporting & Analytics', 'Preferred Pricing Tiers'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-slate-800">
                  <i className="fas fa-check-circle text-blue-600"></i> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">
              Consult with an Expert
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800" alt="Warehouse logistics" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
