import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { Smartphone, CreditCard, Banknote, Download, CheckCircle2, ArrowRight } from 'lucide-react';

const MiPay: React.FC = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const t = translations[language].mipay;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen pt-24 relative overflow-hidden bg-gradient-to-br from-[#7f1d1d] via-[#991b1b] to-[#dc2626]">
            {/* Animated Background Blobs - Adjusted for Red Theme */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-screen"></div>
                <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-red-900/40 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md">
                                {t.hero.title}
                            </h1>
                            <p className="text-xl text-white/90 mb-8 max-w-lg font-medium drop-shadow-sm">
                                {t.hero.subtitle}
                            </p>
                            <div className="flex flex-wrap gap-4 items-center">
                                <button
                                    onClick={() => navigate('/solutions')}
                                    className="flex items-center text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all border-2 border-transparent hover:border-white/30"
                                >
                                    {translations[language].hero.btnSolution}
                                    <ArrowRight className="ml-2" size={20} />
                                </button>
                                <button
                                    onClick={() => navigate('/smart-partner')}
                                    className="flex items-center bg-white text-red-900 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition-all"
                                >
                                    {translations[language].hero.btnPartner}
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            {/* Phone Mockup Placeholder */}
                            <div className="relative mx-auto border-slate-900 bg-slate-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl shadow-black/40">
                                <div className="w-[148px] h-[18px] bg-slate-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                <div className="h-[32px] w-[3px] bg-slate-900 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-slate-900 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-slate-900 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                                <div className="h-[64px] w-[3px] bg-slate-900 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gradient-to-b from-red-50 to-white p-5 text-red-950">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-red-500">MiPAY</p>
                                            <p className="text-xl font-black">Wallet</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center">
                                            <Smartphone size={18} />
                                        </div>
                                    </div>
                                    <div className="rounded-2xl bg-gradient-to-br from-red-700 to-red-950 text-white p-5 shadow-xl mb-6">
                                        <p className="text-xs opacity-70 mb-8">Available Balance</p>
                                        <p className="text-3xl font-black">RM 1,280.00</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[Banknote, Download, CreditCard].map((Icon, idx) => (
                                            <div key={idx} className="aspect-square rounded-2xl bg-red-100 flex items-center justify-center text-red-700">
                                                <Icon size={22} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 space-y-3">
                                        <div className="h-4 rounded bg-red-100 w-3/4"></div>
                                        <div className="h-4 rounded bg-red-100 w-full"></div>
                                        <div className="h-4 rounded bg-red-100 w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: Banknote, title: t.features.withdrawal, desc: t.features.withdrawalDesc },
                            { icon: Smartphone, title: t.features.topup, desc: t.features.topupDesc },
                            { icon: CreditCard, title: t.features.bills, desc: t.features.billsDesc }
                        ].map((feature, idx) => (
                            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -5 }} className="bg-black/20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10 hover:bg-black/30">
                                <div className={`w-14 h-14 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-white/10`}>
                                    <feature.icon size={28} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-white/80 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* How to Apply */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white drop-shadow-md">{t.apply.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/20 -z-10"></div>

                        {[
                            { step: "01", title: t.apply.step1, icon: Download },
                            { step: "02", title: t.apply.step2, icon: Smartphone },
                            { step: "03", title: t.apply.step3, icon: CheckCircle2 }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
                                <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 border-4 border-white/20 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 backdrop-blur-md">
                                    <span className="text-3xl font-bold text-white">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a
                            href="https://wa.me/601159793168?text=Hi,%20I%20would%20like%20to%20open%20a%20MiPay%20account."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all shadow-lg shadow-black/20 hover:scale-105"
                        >
                            {t.apply.btn}
                        </a>
                    </div>
                </div>
            </section>

            {/* Mastercard Features */}
            <section className="py-20 bg-black/20 text-white relative overflow-hidden border-t border-white/10">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white drop-shadow-md">{t.mastercard.title}</h2>
                            <ul className="space-y-4">
                                {t.mastercard.list.map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-center text-lg text-white/90">
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                                            <CheckCircle2 size={14} className="text-white" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Card Visual - Static Image */}
                            <div className="relative group hover:scale-105 transition-transform duration-500">
                                <div className="w-full aspect-[1.585] rounded-xl shadow-2xl ring-1 ring-white/10 bg-gradient-to-br from-red-950 via-red-700 to-red-500 p-8 flex flex-col justify-between overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.28),transparent_28%)]"></div>
                                    <div className="relative flex justify-between items-start">
                                        <div>
                                            <p className="text-white/70 text-xs font-bold tracking-widest uppercase">MiPAY</p>
                                            <p className="text-white text-2xl font-black">Prepaid Mastercard</p>
                                        </div>
                                        <CreditCard className="text-white" size={34} />
                                    </div>
                                    <div className="relative">
                                        <div className="w-14 h-10 rounded-lg bg-yellow-300/80 mb-8"></div>
                                        <p className="text-white/90 tracking-[0.35em] text-lg">5258  ****  ****  2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MiPay;
