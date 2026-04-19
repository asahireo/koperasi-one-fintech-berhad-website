import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { publicAsset } from '../utils/assets';

const Gallery: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].gallery;
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Futuristic Grid / Noise Overlay (Optional - kept simple for now) */}

                {/* Main Gradient Mesh */}
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_0%,_#0a0a1f_0%,_#000000_60%)] opacity-80"></div>

                {/* Dynamic Cyan Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-kof-accent/10 via-kof-purple/5 to-transparent blur-[120px]"></div>

                {/* Animated Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] animate-blob mix-blend-screen will-change-transform"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-slate-800/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen will-change-transform"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[150px] animate-pulse will-change-transform"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-kof-accent to-white drop-shadow-lg tracking-wider"
                    >
                        {t.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/70 max-w-3xl mx-auto"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                {/* Section 2: On the Ground */}
                <section className="mb-24">
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-4 tracking-wider">
                            <span className="w-12 h-[2px] bg-sky-600 shadow-lg"></span>
                            {t.sections.onTheGround.title}
                        </h2>
                        <p className="text-white/70 max-w-2xl text-lg">{t.sections.onTheGround.desc}</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {/* Photo 6 - Pamphlet */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-[4/3]">
                            <img src={publicAsset('/images/gallery/6.jpg')} alt="Pamphlet Demo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium">{t.captions.demo}</p>
                            </div>
                        </motion.div>

                        {/* Photo 5 - Screen Demo */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-[4/3] md:col-span-2">
                            <img src={publicAsset('/images/gallery/5.jpg')} alt="Screen Demo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium mb-4">{t.captions.screen}</p>
                                <button
                                    onClick={() => navigate('/contact?type=demo')}
                                    className="w-fit bg-sky-600 text-white hover:bg-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg uppercase tracking-wider"
                                >
                                    {t.btnDemo} <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>

                        {/* Photo 4 - Interaction */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-[4/3]">
                            <img src={publicAsset('/images/gallery/4.jpg')} alt="Booth Interaction" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium">{t.captions.demo}</p>
                            </div>
                        </motion.div>

                        {/* Photo 7 - VIP */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-[4/3]">
                            <img src={publicAsset('/images/gallery/7.jpg')} alt="VIP Visit" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium">{t.captions.vip}</p>
                            </div>
                        </motion.div>

                        {/* Photo 12 - Group */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-[4/3]">
                            <img src={publicAsset('/images/gallery/12.jpg')} alt="Team Group" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium">{t.captions.team}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Section 3: Behind the Scenes */}
                <section className="mb-24">
                    <div className="mb-10 text-center md:text-right">
                        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center md:justify-end gap-4 tracking-wider">
                            {t.sections.behindTheScenes.title}
                            <span className="w-12 h-[2px] bg-sky-600 shadow-lg"></span>
                        </h2>
                        <p className="text-white/70 max-w-2xl ml-auto text-lg">{t.sections.behindTheScenes.desc}</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {/* Photo 9 - Presentation */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-video">
                            <img src={publicAsset('/images/gallery/9.jpg')} alt="Presentation" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium mb-4">{t.captions.presentation}</p>
                                <button
                                    onClick={() => navigate('/contact?type=demo')}
                                    className="w-fit bg-sky-600 text-white hover:bg-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg uppercase tracking-wider"
                                >
                                    {t.btnDemo} <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>

                        {/* Photo 11 - Meeting Table */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-video">
                            <img src={publicAsset('/images/gallery/11.jpg')} alt="Meeting Table" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium">{t.captions.meeting}</p>
                            </div>
                        </motion.div>

                        {/* Photo 10 - Large Group */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-video md:col-span-2">
                            <img src={publicAsset('/images/gallery/10.jpg')} alt="Large Group Meeting" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium">{t.captions.briefing}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Section 4: Network & Alliances */}
                <section>
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-4 tracking-wider">
                            <span className="w-8 h-[2px] bg-sky-600 shadow-lg"></span>
                            {t.sections.network.title}
                            <span className="w-8 h-[2px] bg-sky-600 shadow-lg"></span>
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg">{t.sections.network.desc}</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                    >
                        {/* Photo 8 - Selfie */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-[4/3]">
                            <img src={publicAsset('/images/gallery/8.jpg')} alt="Selfie" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium">{t.captions.selfie}</p>
                            </div>
                        </motion.div>

                        {/* Photo 3 - Group */}
                        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-xl border border-sky-500/20 shadow-lg hover:border-sky-500/60 hover:shadow-lg aspect-[4/3]">
                            <img src={publicAsset('/images/gallery/3.jpg')} alt="Group Network" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium">{t.captions.vip}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

            </div>
        </div>
    );
};

export default Gallery;
