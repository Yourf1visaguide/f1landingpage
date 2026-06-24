"use client"
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, PlaneTakeoff, Laptop, GraduationCap, MapPin, 
  Euro, FileText, Calendar, Wallet, ShieldCheck, ArrowRight, 
  Star, Clock, Globe, Briefcase, Award, AlertCircle
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      
      {/* Navigation (Sticky) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className={`w-8 h-8 ${scrolled ? 'text-orange-600' : 'text-white'}`} />
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-blue-950' : 'text-white'}`}>Edu<span className="text-orange-500">Netherlands</span></span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg">
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-blue-950 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4 text-orange-400" />
            Visa Ratios Dropping Elsewhere? Choose Netherlands!
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Study in <span className="text-orange-500">Netherlands</span> & <br className="hidden md:block"/>
            Unlock All of Europe.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 font-light">
            Guaranteed Visa Support. No Old Funds Required. Settle in Europe within 90 Days. Total budget under 13-15 Lakhs!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] flex items-center justify-center gap-2">
              Start Application <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-lg px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              Check Eligibility
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { text: "5 Years Gap Accepted", icon: Calendar },
              { text: "Low IELTS/PTE Fine", icon: FileText },
              { text: "Installment Payments", icon: Wallet },
              { text: "Easy Uni Interview", icon: CheckCircle }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <stat.icon className="w-6 h-6 text-orange-400 mb-2" />
                <span className="text-sm font-medium text-blue-50">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Hook / Irresistible Offer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-orange-500 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-950 mb-2">Exclusive Enrollment Offer! 🎉</h2>
            <p className="text-slate-600 text-lg">Apply this month and choose your complimentary gift upon successful enrollment.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 bg-orange-50 px-6 py-4 rounded-xl border border-orange-200">
              <PlaneTakeoff className="w-8 h-8 text-orange-500" />
              <div className="text-left">
                <span className="block text-sm font-semibold text-orange-900">Option 1</span>
                <span className="block font-bold text-orange-600">Free Air Ticket</span>
              </div>
            </div>
            <div className="flex items-center justify-center font-bold text-slate-400">OR</div>
            <div className="flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-xl border border-blue-200">
              <Laptop className="w-8 h-8 text-blue-600" />
              <div className="text-left">
                <span className="block text-sm font-semibold text-blue-900">Option 2</span>
                <span className="block font-bold text-blue-600">Free Brand New Laptop</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
            <ShieldCheck className="w-24 h-24 text-orange-500 absolute -right-4 -top-4 opacity-20" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Iron-Clad Guarantee 🛡️</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              We are so confident in our visa success rate for the Netherlands that we offer a strict refund policy.
            </p>
            <div className="inline-block bg-orange-500 text-white font-bold text-2xl px-8 py-4 rounded-xl shadow-lg border-2 border-orange-400">
              ₹50,000 Refund on Visa Refusal
            </div>
          </div>
        </div>
      </div>

      {/* Why Netherlands */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Why Study in the Netherlands?</h2>
            <p className="text-lg text-slate-600">A top-tier European destination offering unmatched career and lifestyle benefits.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Schengen Visa Power", desc: "Access 27 European countries seamlessly. Move to any other Schengen country after 90 days.", icon: Globe },
              { title: "Europe TRC in 90 Days", desc: "Get your Temporary Residence Card (TRC) within just 90 days of arrival.", icon: Award },
              { title: "Study & Earn Huge", desc: "Work 16-20 hrs/week. Earn up to ₹2 Lakhs/month to comfortably support yourself.", icon: Wallet },
              { title: "Low Living Cost", desc: "Manage your monthly living expenses easily within just €600-€700.", icon: Euro },
              { title: "No Old Funds Trap", desc: "Don't have old funds? No problem! We provide full assistance if you lack required funds.", icon: ShieldCheck },
              { title: "Top-Tier Education", desc: "Study in world-renowned cities like Amsterdam with high visa approval ratios.", icon: GraduationCap }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transparent Process Section */}
      <div className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">A Transparent, Stress-Free Process</h2>
            <p className="text-lg text-slate-600">No hidden costs. No confusing steps. Just a straight path to Europe.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {[
              { step: 1, title: "Start Your Application", cost: "Agency Fee: ₹36,000 | App Fee: ₹11,000", desc: "Begin your journey by locking in your profile with our expert counselors." },
              { step: 2, title: "Offer Letter & Interview", cost: "Easy Process", desc: "Receive your university offer letter and clear a very basic, simple university interview." },
              { step: 3, title: "Initial Tuition Deposit", cost: "Deposit: €6,000 only", desc: "Pay your initial deposit. The rest of your university fees can easily be paid in installments!" },
              { step: 4, title: "Financial Check", cost: "No Old Funds Required!", desc: "If you don't have old funds, don't worry. We provide dedicated help and solutions for this." },
              { step: 5, title: "Visa Approval & Balance", cost: "Agency Balance: ₹50,000", desc: "Pay our remaining fee ONLY after your visa is successfully approved. 100% risk-free for you." },
              { step: 6, title: "Fly to Europe!", cost: "Free Laptop or Flight Ticket", desc: "Claim your bonus gift from us and start your new life in the Netherlands!" }
            ].map((item, i) => (
              <div key={i} className={`relative z-10 flex flex-col md:flex-row items-center mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
                  <div className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 w-full max-w-md ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-blue-950">{item.title}</h3>
                    </div>
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-semibold mb-3 border border-blue-100">
                      {item.cost}
                    </div>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
                {/* Center dot for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 border-4 border-white rounded-full z-20 shadow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Clear Eligibility Criteria</h2>
            <p className="text-lg text-slate-600">We make it easy to know where you stand. Gap years? Low scores? We have options.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Bachelors Card */}
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-xl font-semibold text-sm">Undergraduate</div>
              <GraduationCap className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-blue-950 mb-6">For Bachelor's Program</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Academics:</strong> 12th Score must be 60% and above.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700"><strong>English Test:</strong> IELTS 7.0 or PTE 65 and above.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Study Gap:</strong> Up to 5 years of gap is acceptable!</span>
                </li>
              </ul>
              <button className="w-full mt-8 bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-3 rounded-xl transition-colors">
                Evaluate My Profile
              </button>
            </div>

            {/* Masters Card */}
            <div className="bg-gradient-to-b from-orange-50 to-white rounded-3xl p-8 border border-orange-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-xl font-semibold text-sm">Postgraduate</div>
              <Briefcase className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-blue-950 mb-6">For Master's Program</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Academics:</strong> Bachelor's Score must be 70% and above.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">
                    <strong>English Test:</strong> IELTS 5 Bands OR PTE 40 will work! <br/>
                    <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded inline-block mt-1">Visa Guarantee on these scores too!</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Study Gap:</strong> Up to 5 years of gap is acceptable!</span>
                </li>
              </ul>
              <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg">
                Evaluate My Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-blue-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't Miss the Upcoming Intake</h2>
          <p className="text-xl text-blue-200 mb-10">
            Join hundreds of successful Indian students studying in the Netherlands. Total budget under 13-15 Lakhs. Secure your spot today!
          </p>
          
          <form className="bg-white p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row shadow-2xl max-w-3xl mx-auto">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="px-6 py-4 rounded-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-500/50 bg-transparent"
              required
            />
            <div className="hidden md:block w-px bg-slate-200 my-2"></div>
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              className="px-6 py-4 rounded-full md:w-1/3 border-t md:border-t-0 focus:outline-none focus:ring-2 focus:ring-orange-500/50 bg-transparent"
              required
            />
            <button 
              type="button"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl md:rounded-full md:w-1/3 transition-all mt-2 md:mt-0"
            >
              Get Free Consultation
            </button>
          </form>
          <p className="text-sm text-blue-300 mt-4 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" /> 100% Privacy Guaranteed. No spam calls.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe className="w-6 h-6 text-orange-500" />
            <span className="font-bold text-xl tracking-tight text-white">Edu<span className="text-orange-500">Netherlands</span></span>
          </div>
          <p className="mb-4">Your trusted partner for European Education. Fast-track your career in the Netherlands.</p>
          <div className="space-x-4 mb-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <p>&copy; {new Date().getFullYear()} EduNetherlands. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}