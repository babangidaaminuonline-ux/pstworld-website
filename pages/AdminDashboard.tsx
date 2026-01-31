import React, { useState, useEffect } from 'react';
import { Booking, BookingStatus, Service, Testimonial, BlogPost } from '../types';
import { INITIAL_SERVICES, INITIAL_TESTIMONIALS, INITIAL_POSTS } from '../constants';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'services' | 'blog' | 'testimonials' | 'settings' | 'media'>('bookings');
  
  // State for data management
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [siteSettings, setSiteSettings] = useState({
    kanoAddress: "No.19 Ibrahim Taiwo Road Kano, Opposite AY SHAFA FILLING STATION",
    lagosAddress: "Tincan Port Apapa Costum House",
    josAddress: "No. 878 Duwala Road Nasarawa Gwam Jos/Jos North",
    primaryPhone: "+234 803 098 1105",
    supportEmail: "pstworld2@gmail.com"
  });

  useEffect(() => {
    // Load all data from localStorage
    const savedBookings = localStorage.getItem('pst_bookings');
    if (savedBookings) setBookings(JSON.parse(savedBookings));
    
    const savedServices = localStorage.getItem('pst_services');
    if (savedServices) setServices(JSON.parse(savedServices));

    const savedTestimonials = localStorage.getItem('pst_testimonials');
    if (savedTestimonials) setTestimonials(JSON.parse(savedTestimonials));

    const savedPosts = localStorage.getItem('pst_posts');
    if (savedPosts) setPosts(JSON.parse(savedPosts));

    const savedSettings = localStorage.getItem('pst_settings');
    if (savedSettings) setSiteSettings(JSON.parse(savedSettings));
  }, []);

  const saveSettings = () => {
    localStorage.setItem('pst_settings', JSON.stringify(siteSettings));
    alert("System settings updated successfully!");
  };

  const updateBookingStatus = (id: string, status: BookingStatus) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    setBookings(updated);
    localStorage.setItem('pst_bookings', JSON.stringify(updated));
  };

  const deleteItem = (type: 'booking' | 'testimonial' | 'post' | 'service', id: string) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;
    
    let updated;
    switch(type) {
      case 'booking':
        updated = bookings.filter(b => b.id !== id);
        setBookings(updated);
        localStorage.setItem('pst_bookings', JSON.stringify(updated));
        break;
      case 'testimonial':
        updated = testimonials.filter(t => t.id !== id);
        setTestimonials(updated);
        localStorage.setItem('pst_testimonials', JSON.stringify(updated));
        break;
      case 'post':
        updated = posts.filter(p => p.id !== id);
        setPosts(updated);
        localStorage.setItem('pst_posts', JSON.stringify(updated));
        break;
      case 'service':
        updated = services.filter(s => s.id !== id);
        setServices(updated);
        localStorage.setItem('pst_services', JSON.stringify(updated));
        break;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Enhanced Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:flex flex-col border-r border-slate-800">
        <div className="flex items-center space-x-3 mb-10 px-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <i className="fas fa-shield-alt text-white"></i>
          </div>
          <span className="font-black text-xl tracking-tight">PST ADMIN</span>
        </div>
        
        <nav className="space-y-1 flex-1">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-2">Operations</p>
          <NavItem icon="fa-calendar-check" label="Bookings" active={activeTab === 'bookings'} onClick={() => setActiveTab('bookings')} count={bookings.length} />
          
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-6 mb-2 px-2">Content Management</p>
          <NavItem icon="fa-concierge-bell" label="Services" active={activeTab === 'services'} onClick={() => setActiveTab('services')} />
          <NavItem icon="fa-newspaper" label="Blog Posts" active={activeTab === 'blog'} onClick={() => setActiveTab('blog')} count={posts.length} />
          <NavItem icon="fa-comment-dots" label="Testimonials" active={activeTab === 'testimonials'} onClick={() => setActiveTab('testimonials')} count={testimonials.length} />
          <NavItem icon="fa-images" label="Media Library" active={activeTab === 'media'} onClick={() => setActiveTab('media')} />
          
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-6 mb-2 px-2">System</p>
          <NavItem icon="fa-sliders-h" label="Site Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </nav>

        <div className="pt-6 border-t border-slate-800">
          <button className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors px-2">
            <i className="fas fa-sign-out-alt"></i>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-screen">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-slate-900 capitalize">{activeTab}</h1>
            <p className="text-xs text-slate-500">Managing PST WORLD logistics platform</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm font-bold text-slate-900">Alex Administrator</div>
              <div className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter">Super Admin</div>
            </div>
            <img src="https://ui-avatars.com/api/?name=Admin&background=2563eb&color=fff" className="w-10 h-10 rounded-full border-2 border-slate-100" alt="Avatar" />
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'bookings' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Customer</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Route</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {bookings.length === 0 ? (
                    <tr><td colSpan={4} className="p-20 text-center text-slate-400">No bookings yet.</td></tr>
                  ) : bookings.map(b => (
                    <tr key={b.id}>
                      <td className="px-6 py-4">
                        <div className="font-bold">{b.customerName}</div>
                        <div className="text-xs text-slate-400">{b.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs"><span className="text-slate-400">From:</span> {b.pickupLocation}</div>
                        <div className="text-xs"><span className="text-slate-400">To:</span> {b.deliveryLocation}</div>
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          value={b.status} 
                          onChange={(e) => updateBookingStatus(b.id, e.target.value as BookingStatus)}
                          className="text-xs font-bold bg-slate-100 border-none rounded-lg px-2 py-1 outline-none"
                        >
                          {Object.values(BookingStatus).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => deleteItem('booking', b.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'blog' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-slate-900">Manage Articles</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                  <i className="fas fa-plus"></i> New Post
                </button>
              </div>
              <div className="grid gap-4">
                {posts.map(post => (
                  <div key={post.id} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-6 group">
                    <img src={post.image} className="w-24 h-16 rounded-lg object-cover" alt="" />
                    <div className="flex-1">
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">{post.category}</div>
                      <h3 className="font-bold text-slate-900">{post.title}</h3>
                      <p className="text-xs text-slate-400">{post.date} • By {post.author}</p>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><i className="fas fa-edit"></i></button>
                      <button onClick={() => deleteItem('post', post.id)} className="p-2 text-slate-400 hover:text-red-600 transition-colors"><i className="fas fa-trash"></i></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-slate-900">Client Reviews</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                  <i className="fas fa-plus"></i> Add Testimonial
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {testimonials.map(t => (
                  <div key={t.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex text-yellow-400 text-xs mb-3">
                        {[...Array(t.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                      </div>
                      <p className="text-sm text-slate-600 italic mb-4">"{t.content}"</p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs">{t.name[0]}</div>
                         <div>
                           <div className="text-sm font-bold">{t.name}</div>
                           <div className="text-[10px] text-slate-400">{t.role}</div>
                         </div>
                      </div>
                      <button onClick={() => deleteItem('testimonial', t.id)} className="text-slate-300 hover:text-red-500"><i className="fas fa-trash"></i></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-4xl space-y-8">
              <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-6 border-b pb-4">Global Contact Configuration</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Support Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" 
                      value={siteSettings.supportEmail}
                      onChange={(e) => setSiteSettings({...siteSettings, supportEmail: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Primary Phone Number</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" 
                      value={siteSettings.primaryPhone}
                      onChange={(e) => setSiteSettings({...siteSettings, primaryPhone: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2 pt-4 border-t border-slate-100 mt-2">
                    <h4 className="text-sm font-bold text-slate-900 mb-4">Branch Office Addresses</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Kano Office (HQ)</label>
                        <textarea 
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none h-20 text-sm" 
                          value={siteSettings.kanoAddress}
                          onChange={(e) => setSiteSettings({...siteSettings, kanoAddress: e.target.value})}
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Lagos Branch</label>
                        <textarea 
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none h-20 text-sm" 
                          value={siteSettings.lagosAddress}
                          onChange={(e) => setSiteSettings({...siteSettings, lagosAddress: e.target.value})}
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Jos Branch</label>
                        <textarea 
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 outline-none h-20 text-sm" 
                          value={siteSettings.josAddress}
                          onChange={(e) => setSiteSettings({...siteSettings, josAddress: e.target.value})}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={saveSettings}
                  className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                >
                  Save System Changes
                </button>
              </section>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="bg-white p-8 rounded-xl border border-slate-200">
               <div className="flex justify-between items-center mb-8">
                 <h3 className="font-bold text-lg">Asset Library</h3>
                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                   Upload New
                 </button>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                 {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                   <div key={i} className="group relative aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                      <img src={`https://picsum.photos/300/300?random=${i + 20}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Media" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center text-xs hover:bg-blue-600 hover:text-white transition-colors"><i className="fas fa-eye"></i></button>
                        <button className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center text-xs hover:bg-red-600 hover:text-white transition-colors"><i className="fas fa-trash"></i></button>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Helper Component for Sidebar Items
const NavItem: React.FC<{ 
  icon: string, 
  label: string, 
  active?: boolean, 
  onClick: () => void,
  count?: number 
}> = ({ icon, label, active, onClick, count }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
      active ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`}
  >
    <div className="flex items-center gap-3">
      <i className={`fas ${icon} w-5 text-center`}></i>
      <span className="font-semibold text-sm">{label}</span>
    </div>
    {count !== undefined && count > 0 && (
      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${active ? 'bg-white text-blue-600' : 'bg-slate-700 text-slate-300'}`}>
        {count}
      </span>
    )}
  </button>
);

export default AdminDashboard;