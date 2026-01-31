import React from 'react';
import { INITIAL_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Insights & Updates</span>
          <h1 className="text-4xl font-black text-slate-900 mt-4 mb-6">Logistics Excellence Blog</h1>
          <p className="text-slate-500 max-w-xl mx-auto">Stay ahead with the latest industry trends, delivery tips, and company announcements from the PST WORLD team.</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="h-64 lg:h-auto">
            <img src={INITIAL_POSTS[0].image} className="w-full h-full object-cover" alt="Featured Post" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">{INITIAL_POSTS[0].category}</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{INITIAL_POSTS[0].title}</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">{INITIAL_POSTS[0].excerpt}</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                <div>
                  <div className="text-sm font-bold">{INITIAL_POSTS[0].author}</div>
                  <div className="text-xs text-slate-400">{INITIAL_POSTS[0].date}</div>
                </div>
              </div>
              <button className="text-blue-600 font-bold hover:underline">Read Article <i className="fas fa-arrow-right ml-2 text-xs"></i></button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900">Latest Articles</h3>
          <div className="flex gap-4">
            {['All', 'Logistics', 'Technology', 'Business'].map(cat => (
              <button key={cat} className="px-4 py-2 rounded-full text-sm font-bold bg-white border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIAL_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={post.title} />
              </div>
              <div className="p-8">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{post.category}</span>
                <h4 className="text-xl font-bold text-slate-900 mt-2 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h4>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                  <button className="text-slate-900 font-bold text-sm">Read More</button>
                </div>
              </div>
            </div>
          ))}
          {/* Mock additional cards to show grid potential */}
          {[3,4].map(i => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                <i className="fas fa-lock text-xl"></i>
              </div>
              <h4 className="font-bold text-slate-400">Exclusive Content</h4>
              <p className="text-xs text-slate-400 mt-2">Sign up for our newsletter to unlock more logistics insights.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-lg opacity-90 mb-10 max-w-lg mx-auto">Get monthly digests of the best logistics strategies and company news directly in your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-2xl text-slate-900 outline-none focus:ring-4 focus:ring-white/20" />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors">Subscribe</button>
            </form>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
        </div>
      </section>
    </div>
  );
};

export default Blog;