import React, { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Loader2, Send, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type') || 'general';
  const { language } = useLanguage();
  const t = translations[language];
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    coop: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct WhatsApp message
    const message = `*New Contact Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/601159793168?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
      setFormData({
        name: '',
        coop: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      setTimeout(() => setSubmissionStatus('idle'), 3000);
    }, 1000);
  };

  const inputClasses = "w-full px-4 py-2 bg-white text-slate-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kof-red focus:border-transparent outline-none";

  return (
    <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      {/* Background Blobs Removed */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white">{t.contact.pageTitle}</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            {t.contact.pageSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">{t.contact.formTitle}</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">{t.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">{t.contact.subject}</label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="General Inquiry" className="text-slate-900 bg-white">General Inquiry</option>
                    <option value="Request Demo" className="text-slate-900 bg-white">Request Demo</option>
                    <option value="Smart Partner Program" className="text-slate-900 bg-white">Smart Partner Program</option>
                    <option value="Technical Support" className="text-slate-900 bg-white">Technical Support</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-700">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">{t.contact.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-red-900 font-bold py-4 rounded-lg hover:bg-red-50 transition-all shadow-lg shadow-black/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-red-900" />
                    {t.contact.sending} {/* New translation key */}
                  </span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> {/* Added Send icon */}
                    {t.contact.send}
                  </>
                )}
              </button>

              {submissionStatus === 'success' && (
                <p className="text-green-400 text-center mt-4">{t.contact.successMessage}</p>
              )}
              {submissionStatus === 'error' && (
                <p className="text-red-400 text-center mt-4">{t.contact.errorMessage}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mr-4 flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{t.contact.info.addressTitle}</h4>
                <p className="text-white/70">Wisma LMS, No. 6 Jalan Abd. Rahman Idris<br />Off Jalan Raja Muda Aziz, 50300<br />Kuala Lumpur, Malaysia.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mr-4 flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{t.contact.info.phoneTitle}</h4>
                <p className="text-white/70">+60 3-9213 0688</p>
                <p className="text-white/70">koperasionefintech.manager@gmail.com</p>
                <div className="mt-2 text-sm text-white/50">
                  <p>WhatsApp:</p>
                  <p><a href="https://wa.me/601159793168" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-dotted">+60 11-5979 3168 (Primary)</a></p>
                  <p><a href="https://wa.me/60193742440" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-dotted">+60 19-374 2440 (Secondary)</a></p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mr-4 flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{t.contact.info.hoursTitle}</h4>
                <p className="text-white/70">Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p className="text-white/70">Sat - Sun: Closed</p>
              </div>
            </div>

            {/* Map */}
            <div className="glass-card p-2 rounded-2xl border border-white/10 h-[300px] overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.736507663365!2d101.7088763!3d3.1641053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37f1d9b9a6b1%3A0x6a0a0a0a0a0a0a0a!2sWisma%20LMS!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KOF Location"
              ></iframe>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://maps.app.goo.gl/rtcVcFACmHJjUU4z8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all group"
            >
              <MapPin size={18} className="text-red-400 group-hover:text-red-300" />
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
