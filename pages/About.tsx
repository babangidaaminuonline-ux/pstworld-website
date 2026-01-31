import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1473445733995-882ed51bc7af?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Logistics Network" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl font-black mb-6">Moving the World, <br /><span className="text-blue-500">One Delivery at a Time.</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Founded on the principles of speed and integrity, PST WORLD is a global leader in logistics technology.</p>
        </div>
      </section>

      {/* Vision/Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="w-12 h-1.5 bg-blue-600"></div>
          <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            To provide seamless, tech-enabled logistics solutions that empower businesses to scale and individuals to connect across borders. We leverage cutting-edge AI and a vast global network to ensure every package arrives safely and on time.
          </p>
        </div>
        <div className="space-y-6">
          <div className="w-12 h-1.5 bg-blue-600"></div>
          <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            To become the most reliable and innovative logistics partner in the world, setting new benchmarks for transparency, speed, and sustainability in the transportation industry.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Values That Drive Us</h2>
            <p className="text-slate-500">Built on trust, fueled by innovation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-shield-heart', title: 'Unwavering Integrity', desc: 'We handle every shipment as if it were our own, with transparency at every step.' },
              { icon: 'fa-microchip', title: 'Smart Innovation', desc: 'Continuous investment in technology to optimize routes and reduce delivery times.' },
              { icon: 'fa-earth-americas', title: 'Global Responsibility', desc: 'Committed to sustainable practices and carbon-neutral delivery initiatives.' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Stats CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Ready to join our global network?</h2>
            <p className="text-xl opacity-90 mb-8">We are always looking for partners and talent to help us redefine logistics for the next generation.</p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">Work with Us</button>
              <button className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition-colors">Learn More</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 shrink-0">
            <div className="text-center">
              <div className="text-4xl font-black">25+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black">500+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Global Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;