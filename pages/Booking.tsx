import React, { useState } from 'react';
import { INITIAL_SERVICES } from '../constants';
import { BookingStatus } from '../types';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceId: INITIAL_SERVICES[0].id,
    pickupLocation: '',
    deliveryLocation: '',
    date: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Submit to Formspree
      const response = await fetch('https://formspree.io/f/mzddanly', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Delivery Booking from ${formData.customerName}`,
          serviceName: INITIAL_SERVICES.find(s => s.id === formData.serviceId)?.title || formData.serviceId
        })
      });

      if (response.ok) {
        // 2. Persist locally for Admin Dashboard visibility
        const bookings = JSON.parse(localStorage.getItem('pst_bookings') || '[]');
        const newBooking = {
          ...formData,
          id: Math.random().toString(36).substr(2, 9),
          status: BookingStatus.NEW,
          createdAt: new Date().toISOString()
        };
        localStorage.setItem('pst_bookings', JSON.stringify([...bookings, newBooking]));
        
        setSubmitted(true);
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6">
          <i className="fas fa-check"></i>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Booking Received!</h2>
        <p className="text-slate-600 text-center max-w-md mb-8">
          Thank you for choosing PST WORLD. Your delivery request has been logged and sent to our team. We will contact you shortly to confirm details.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-blue-600 p-8 text-white">
            <h1 className="text-3xl font-bold">Request a Delivery</h1>
            <p className="opacity-90 mt-2">Fill in the details below to get started with your shipment.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Customer Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  value={formData.customerName}
                  onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-4">Select Service Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {INITIAL_SERVICES.map(service => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setFormData({...formData, serviceId: service.id})}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      formData.serviceId === service.id 
                      ? 'border-blue-600 bg-blue-50 text-blue-600' 
                      : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                    }`}
                  >
                    <i className={`fas ${service.icon} text-xl mb-2 block`}></i>
                    <span className="text-xs font-bold uppercase tracking-tighter">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pickup/Delivery */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Pickup Address</label>
                <textarea 
                  required
                  name="pickup"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-24"
                  placeholder="Street address, City, State..."
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Delivery Address</label>
                <textarea 
                  required
                  name="delivery"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-24"
                  placeholder="Recipient address..."
                  value={formData.deliveryLocation}
                  onChange={(e) => setFormData({...formData, deliveryLocation: e.target.value})}
                ></textarea>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                <input 
                  required
                  name="date"
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input 
                  required
                  name="phone"
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Additional Notes (Optional)</label>
              <textarea 
                name="message"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none h-24"
                placeholder="Package weight, fragile items, gate codes..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Processing...
                </>
              ) : (
                'Confirm Booking Request'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;