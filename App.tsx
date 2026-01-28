import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./Components/navbar";
import Home from './pages/Home';
import Booking from './pages/Booking';
import AdminDashboard from './pages/AdminDashboard';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';

const ContactPage: React.FC<{ settings: any }> = ({ settings }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/mzddanly', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) setSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-20 text-center px-4">
        <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">
          <i className="fas fa-paper-plane"></i>
        </div>
        <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
        <p className="text-slate-600 max-w-md mx-auto mb-8">We've received your inquiry and will get back to you within 24 hours.</p>
        <Link to="/" className="text-blue-600 font-bold hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-6">Contact Us</h1>
          <p className="text-slate-600 text-lg mb-10">Have questions about our logistics solutions or need a custom quote? Reach out to our dedicated support team.</p>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><i className="fas fa-phone"></i></div>
              <div><div className="font-bold">Phone</div><div className="text-slate-500">{settings.primaryPhone}</div></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><i className="fas fa-envelope"></i></div>
              <div><div className="font-bold">Email</div><div className="text-slate-500">{settings.supportEmail}</div></div>
            </div>
            
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Our Locations</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center shrink-0"><i className="fas fa-location-dot"></i></div>
                  <div>
                    <div className="font-bold text-slate-900">Kano Office (HQ)</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{settings.kanoAddress}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center shrink-0"><i className="fas fa-anchor"></i></div>
                  <div>
                    <div className="font-bold text-slate-900">Lagos Branch</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{settings.lagosAddress}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center shrink-0"><i className="fas fa-mountain-city"></i></div>
                  <div>
                    <div className="font-bold text-slate-900">Jos Branch</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{settings.josAddress}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input type="hidden" name="_subject" value="New Contact Inquiry - PST WORLD" />
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea required name="message" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none h-32" placeholder="How can we help you?"></textarea>
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [settings, setSettings] = useState({
    kanoAddress: "No.19 Ibrahim Taiwo Road Kano, Opposite AY SHAFA FILLING STATION",
    lagosAddress: "Tincan Port Apapa Costum House",
    josAddress: "No. 878 Duwala Road Nasarawa Gwam Jos/Jos North",
    primaryPhone: "+234 803 098 1105",
    supportEmail: "pstworld2@gmail.com"
  });

  useEffect(() => {
    const saved = localStorage.getItem('pst_settings');
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Floating WhatsApp Widget */}
        <a 
          href={`https://wa.me/${settings.primaryPhone.replace(/\D/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>

        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/contact" element={<ContactPage settings={settings} />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                </Routes>
              </main>
              <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="bg-blue-600 p-2 rounded-lg">
                        <i className="fas fa-shipping-fast text-white text-xl"></i>
                      </div>
                      <span className="text-2xl font-bold tracking-tight">PST WORLD</span>
                    </div>
                    <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                      Empowering global trade through reliable, technology-driven logistics. 
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                       <a href={`mailto:${settings.supportEmail}`} className="w-12 h-12 bg-slate-800 flex items-center justify-center rounded-xl hover:bg-blue-600 transition-all"><i className="fas fa-envelope"></i></a>
                       <a href="#" className="w-12 h-12 bg-slate-800 flex items-center justify-center rounded-xl hover:bg-blue-600 transition-all"><i className="fab fa-instagram"></i></a>
                       <a href="#" className="w-12 h-12 bg-slate-800 flex items-center justify-center rounded-xl hover:bg-blue-600 transition-all"><i className="fab fa-facebook-f"></i></a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-6 border-b border-slate-800 pb-2">Our Offices</h4>
                    <div className="space-y-6 text-slate-400">
                      <div>
                        <h5 className="text-white font-bold text-sm mb-1">Kano Office (HQ)</h5>
                        <p className="text-xs leading-relaxed">{settings.kanoAddress}</p>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm mb-1">Lagos Branch</h5>
                        <p className="text-xs leading-relaxed">{settings.lagosAddress}</p>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm mb-1">Jos Branch</h5>
                        <p className="text-xs leading-relaxed">{settings.josAddress}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-6 border-b border-slate-800 pb-2">Legal & Trust</h4>
                    <ul className="space-y-4 text-slate-400">
                      <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Privacy Policy</a></li>
                      <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Terms of Service</a></li>
                    </ul>
                  </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                  <p>&copy; {new Date().getFullYear()} PST WORLD Logistics. All Rights Reserved.</p>
                </div>
              </footer>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
