import React, { useState } from 'react';
import { Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeading from '../components/SectionHeading';
import SurfaceCard from '../components/SurfaceCard';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const copy = {
    en: {
      eyebrow: 'Contact',
      title: 'Start the conversation with the right entry point.',
      description: 'Use the direct inquiry form for product demos, platform discussions, or company-level partnership questions.',
      subjectLabel: 'Inquiry Type',
      send: 'Send Request',
      success: 'Your message has been routed to WhatsApp.',
      options: ['General Inquiry', 'Request Demo', 'Platform Discussion', 'Partnership'],
    },
    ms: {
      eyebrow: 'Hubungi',
      title: 'Mulakan perbualan melalui saluran yang tepat.',
      description: 'Gunakan borang ini untuk demo produk, perbincangan platform, atau pertanyaan kerjasama peringkat syarikat.',
      subjectLabel: 'Jenis Pertanyaan',
      send: 'Hantar Permintaan',
      success: 'Mesej anda telah dihantar ke WhatsApp.',
      options: ['Pertanyaan Umum', 'Minta Demo', 'Perbincangan Platform', 'Kerjasama'],
    },
  }[language];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const message = `*KOF Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/601159793168?text=${message}`, '_blank');

    window.setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: copy.options[0],
        message: '',
      });
    }, 500);
  };

  return (
    <div className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SurfaceCard strong className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-white/62">{language === 'ms' ? 'Nama' : 'Name'}</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-violet-300/50"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-white/62">{language === 'ms' ? 'E-mel' : 'Email'}</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-violet-300/50"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm text-white/62">{copy.subjectLabel}</span>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-violet-300/50"
                >
                  {copy.options.map((option) => (
                    <option key={option} value={option} className="bg-slate-950 text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-white/62">{language === 'ms' ? 'Mesej' : 'Message'}</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none focus:border-violet-300/50"
                />
              </label>

              <button type="submit" disabled={isSubmitting} className="primary-button w-full justify-center">
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                <span>{copy.send}</span>
              </button>

              {status === 'success' ? <p className="text-sm text-violet-200">{copy.success}</p> : null}
            </form>
          </SurfaceCard>

          <div className="space-y-6">
            <SurfaceCard className="p-8">
              <div className="space-y-6 text-white/70">
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-violet-200" />
                  <span>Wisma LMS, No. 6 Jalan Abd. Rahman Idris<br />Off Jalan Raja Muda Aziz, 50300 Kuala Lumpur, Malaysia.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-violet-200" />
                  <span>+60 3-9213 0688</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-violet-200" />
                  <span>koperasionefintech.manager@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0 text-violet-200" />
                  <span>{language === 'ms' ? 'Isnin - Jumaat, 9:00 pagi - 5:00 petang' : 'Mon - Fri, 9:00 AM - 5:00 PM'}</span>
                </div>
              </div>
            </SurfaceCard>
            <SurfaceCard className="overflow-hidden p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.736507663365!2d101.7088763!3d3.1641053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37f1d9b9a6b1%3A0x6a0a0a0a0a0a0a0a!2sWisma%20LMS!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy"
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: '24px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KOF Location"
              />
            </SurfaceCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
