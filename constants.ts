import { SolutionData, NavItem } from './types';
import { FileSpreadsheet, Users, BarChart2, Database, ShieldAlert, DollarSign } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: { en: 'Home', ms: 'Utama' }, path: '/' },
  { label: { en: 'Platform', ms: 'Platform' }, path: '/platform' },
  { label: { en: 'Products', ms: 'Produk' }, path: '/products' },
  { label: { en: 'Company', ms: 'Syarikat' }, path: '/company' },
  { label: { en: 'Resources', ms: 'Sumber' }, path: '/resources' },
  { label: { en: 'Contact', ms: 'Hubungi' }, path: '/contact' },
];

export const SOLUTIONS_DATA: Record<string, SolutionData> = {
  icmis: {
    id: 'icmis',
    title: 'ICMIS',
    description: {
      ms: 'Sistem Pengurusan Maklumat Koperasi Bersepadu untuk koperasi sederhana & besar.',
      en: 'Integrated Cooperative Management Information System for medium & large coops.'
    },
    features: {
      ms: ['Perakaunan (GP23)', 'Keanggotaan', 'Pinjaman', 'HR & Payroll'],
      en: ['Accounting (GP23)', 'Membership', 'Loans', 'HR & Payroll']
    },
    link: '/solutions/icmis',
    detailTitle: {
      ms: 'ICMIS: Sistem Digital Bersepadu Koperasi',
      en: 'ICMIS: Integrated Cooperative Management Information System'
    },
    detailDescription: {
      ms: 'ICMIS ialah satu platform holistik yang menyatukan semua modul pengurusan koperasi dalam satu sistem awan—perakaunan, keanggotaan, pinjaman, HR dan e-invoice.',
      en: 'ICMIS is a holistic platform that integrates all cooperative management modules into one cloud system—accounting, membership, loans, HR, and e-invoice.'
    },
    detailModules: {
      ms: ['Perakaunan (GP23 SKM)', 'Keanggotaan', 'Pinjaman', 'HR & Payroll', 'Dividen', 'e-Invoice'],
      en: ['Accounting (GP23 SKM)', 'Membership', 'Loans', 'HR & Payroll', 'Dividends', 'e-Invoice']
    },
    detailBenefits: {
      ms: ['Kurangkan kesilapan manual', 'Laporan automatik', 'Tadbir urus lebih telus', 'Mudah digunakan', 'Sesuai untuk koperasi sederhana & besar'],
      en: ['Reduce manual errors', 'Automated reporting', 'More transparent governance', 'Easy to use', 'Suitable for medium & large coops']
    },
    architecture: true,
    brochureFile: 'icmis_brochure.pdf'
  },
  kosmart: {
    id: 'kosmart',
    title: 'KoSMART',
    description: {
      ms: 'Sistem Untuk Koperasi Mikro & Kecil. Ringkas, mampu milik dan automatik.',
      en: 'System for Micro & Small Cooperatives. Simple, affordable, and automated.'
    },
    features: {
      ms: ['Rekod akaun automatik', 'Pengurusan ahli', 'Dividen & yuran', 'Laporan masa nyata'],
      en: ['Automated accounting records', 'Member management', 'Dividends & fees', 'Real-time reports']
    },
    link: '/solutions/kosmart',
    detailTitle: {
      ms: 'KoSMART',
      en: 'KoSMART'
    },
    detailDescription: {
      ms: 'KoSMART adalah sistem khusus untuk koperasi mikro dan kecil yang memerlukan platform ringkas, automatik dan mampu milik.',
      en: 'KoSMART is a specialized system for micro and small cooperatives that need a simple, automated, and affordable platform.'
    },
    detailModules: {
      ms: ['Rekod akaun automatik', 'Penyata P&L, Balance Sheet (GP23 SKM)', 'Pengurusan ahli', 'Dividen & yuran', 'Laporan masa nyata'],
      en: ['Automated accounting records', 'P&L, Balance Sheet (GP23 SKM)', 'Member management', 'Dividends & fees', 'Real-time reports']
    },
    pricing: true,
    brochureFile: 'kosmart_brochure.pdf'
  },
  iaccount: {
    id: 'iaccount',
    title: 'iAccount',
    description: {
      ms: 'Sistem Perakaunan Patuh GP23 SKM.',
      en: 'GP23 SKM Compliant Accounting System.'
    },
    features: {
      ms: ['P&L, Balance Sheet (GP23 SKM)', 'Trial Balance', 'e-Invoice LHDN', 'Pengurusan Dokumen'],
      en: ['P&L, Balance Sheet (GP23 SKM)', 'Trial Balance', 'LHDN e-Invoice', 'Document Management']
    },
    link: '/solutions/iaccount',
    detailTitle: {
      ms: 'iAccount: Sistem Perakaunan Koperasi',
      en: 'iAccount: Cooperative Accounting System'
    },
    detailDescription: {
      ms: 'iAccount ialah sistem perakaunan koperasi yang patuh GP23 SKM dan selaras dengan standard pelaporan SKM.',
      en: 'iAccount is a cooperative accounting system compliant with GP23 SKM and aligned with SKM reporting standards.'
    },
    detailModules: {
      ms: ['Penyata Untung Rugi (GP23 SKM)', 'Kunci Kira-Kira (GP23 SKM)', 'Lejar', 'Trial Balance', 'e-Invoice LHDN', 'Data Migration'],
      en: ['Profit & Loss Statement (GP23 SKM)', 'Balance Sheet (GP23 SKM)', 'Ledger', 'Trial Balance', 'LHDN e-Invoice', 'Data Migration']
    },
    brochureFile: 'iaccount_brochure.pdf'
  },
  imembership: {
    id: 'imembership',
    title: 'iMembership',
    description: {
      ms: 'Sistem Keanggotaan Bersepadu: Portal Ahli + Aplikasi Mudah Alih.',
      en: 'Integrated Membership System: Member Portal + Mobile App.'
    },
    features: {
      ms: ['Kemas kini profil', 'Semak dividen', 'Yuran & penyata', 'Aplikasi Mobile'],
      en: ['Profile updates', 'Check dividends', 'Fees & statements', 'Mobile App']
    },
    link: '/solutions/imembership',
    detailTitle: {
      ms: 'iMembership',
      en: 'iMembership'
    },
    detailDescription: {
      ms: 'Sistem keanggotaan bersepadu yang menyediakan portal dan aplikasi mudah alih untuk memudahkan ahli mengurus maklumat mereka.',
      en: 'Integrated membership system providing a portal and mobile app to simplify member information management.'
    },
    detailModules: {
      ms: ['Kemas kini profil', 'Semak dividen', 'Semak penyata pinjaman', 'Muat naik dokumen'],
      en: ['Profile updates', 'Check dividends', 'Check loan statements', 'Document upload']
    },
    brochureFile: 'imembership_brochure.pdf'
  },
  ilms: {
    id: 'ilms',
    title: 'iLMS',
    description: {
      ms: 'Loan Management System dengan integrasi automatik SPGA.',
      en: 'Loan Management System with automated SPGA integration.'
    },
    features: {
      ms: ['Auto-import SPGA (TXT)', 'Real-time sync', 'Pengurusan pinjaman', 'Penyelarasan potongan gaji'],
      en: ['Auto-import SPGA (TXT)', 'Real-time sync', 'Loan management', 'Salary deduction reconciliation']
    },
    link: '/solutions/ilms',
    detailTitle: {
      ms: 'iLMS: Loan Management System',
      en: 'iLMS: Loan Management System'
    },
    detailDescription: {
      ms: 'iLMS adalah sistem pinjaman koperasi dengan keupayaan integrasi SPGA/SOLA.',
      en: 'iLMS is a cooperative loan system with SPGA/SOLA integration capabilities.'
    },
    detailModules: {
      ms: ['Import automatik .TXT SOLA', 'Auto-sync dengan iAccount', 'Pengurusan pinjaman lengkap', 'Laporan baki pinjaman masa nyata'],
      en: ['Automated .TXT SOLA import', 'Auto-sync with iAccount', 'Complete loan management', 'Real-time loan balance reports']
    },
    brochureFile: 'ilms_brochure.pdf'
  }
};

export const PAIN_POINTS = [
  {
    icon: FileSpreadsheet,
    title: { ms: "Rekod Kewangan Tidak Sistematik", en: "Unsystematic Financial Records" },
    desc: { ms: "Masih bergantung kepada buku tulis dan rekod manual.", en: "Still relying on notebooks and manual records." }
  },
  {
    icon: Users,
    title: { ms: "Kekurangan Tenaga Mahir", en: "Lack of Skilled Manpower" },
    desc: { ms: "Koperasi kecil tiada staf terlatih dalam perakaunan & ICT.", en: "Small coops lack staff trained in accounting & ICT." }
  },
  {
    icon: BarChart2,
    title: { ms: "Keputusan Tanpa Data", en: "Decisions Without Data" },
    desc: { ms: "Tadbir urus sukar apabila laporan lewat atau tidak lengkap.", en: "Governance is difficult when reports are late or incomplete." }
  },
  {
    icon: Database,
    title: { ms: "Data Ahli Bersepah", en: "Scattered Member Data" },
    desc: { ms: "Sukar menjejak yuran, dividen, dan status keanggotaan.", en: "Difficult to track fees, dividends, and membership status." }
  },
  {
    icon: ShieldAlert,
    title: { ms: "Pematuhan SKM Rumit", en: "Complex SKM Compliance" },
    desc: { ms: "Risiko kelewatan audit dan penalti pelaporan.", en: "Risk of audit delays and reporting penalties." }
  },
  {
    icon: DollarSign,
    title: { ms: "Kos Teknologi Tinggi", en: "High Technology Costs" },
    desc: { ms: "Ramai koperasi tidak mampu melabur sistem moden.", en: "Many coops cannot afford to invest in modern systems." }
  }
];

export const PRICING_TIERS = [
  { label: { ms: "Yuran Permulaan", en: "Setup Fee" }, value: "RM1,500" },
  { label: { ms: "Penyelenggaraan Tahunan", en: "Annual Maintenance" }, value: "RM800" },
  { label: { ms: "Caj Transaksi", en: "Transaction Fee" }, value: "0.5%" },
  { label: { ms: "Data Entry Service", en: "Data Entry Service" }, value: "RM100 - RM400/mo" }
];

export const FAQ_DATA = [
  {
    id: 'what_is_kof',
    question: { en: "What is KOF?", ms: "Apa itu KOF?" },
    answer: {
      en: "Koperasi One Fintech Berhad (KOF) is a cooperative established to support the Cooperative Digitalization Action Plan 2030, helping coops digitalize their operations.",
      ms: "Koperasi One Fintech Berhad (KOF) adalah koperasi yang ditubuhkan untuk menyokong Pelan Tindakan Digitalisasi Koperasi 2030, membantu koperasi mendigitalkan operasi mereka."
    }
  },
  {
    id: 'solutions',
    question: { en: "What solutions do you offer?", ms: "Apakah solusi yang ditawarkan?" },
    answer: {
      en: "We offer ICMIS (for medium/large coops), KoSMART (for micro/small coops), iAccount (accounting), iMembership (member portal), and iLMS (loan management).",
      ms: "Kami menawarkan ICMIS (untuk koperasi sederhana/besar), KoSMART (untuk mikro/kecil), iAccount (perakaunan), iMembership (portal ahli), dan iLMS (pengurusan pinjaman)."
    }
  },
  {
    id: 'pricing',
    question: { en: "How much does it cost?", ms: "Berapakah harganya?" },
    answer: {
      en: "Pricing starts with a setup fee of RM1,500 and annual maintenance of RM800. Transaction fees are 0.5%.",
      ms: "Harga bermula dengan yuran permulaan RM1,500 dan penyelenggaraan tahunan RM800. Caj transaksi adalah 0.5%."
    }
  },
  {
    id: 'contact',
    question: { en: "How can I contact support?", ms: "Bagaimana untuk hubungi sokongan?" },
    answer: {
      en: "You can reach us via the Contact page form, email, or WhatsApp. We are here to help!",
      ms: "Anda boleh hubungi kami melalui borang di laman Hubungi, emel, atau WhatsApp. Kami sedia membantu!"
    }
  },
  {
    id: 'demo',
    question: { en: "Can I request a demo?", ms: "Boleh saya minta demo?" },
    answer: {
      en: "Yes! You can request a free demo for any of our solutions by visiting the Contact page or clicking 'Request Demo' on the solution page.",
      ms: "Ya! Anda boleh minta demo percuma untuk mana-mana solusi kami dengan melawat laman Hubungi atau klik 'Minta Demo' di laman solusi."
    }
  },
  {
    id: 'security',
    question: { en: "Is my data secure?", ms: "Adakah data saya selamat?" },
    answer: {
      en: "Absolutely. We use enterprise-grade cloud security with regular backups and strict access controls to ensure your cooperative's data is safe.",
      ms: "Semestinya. Kami menggunakan keselamatan awan gred perusahaan dengan sandaran berkala dan kawalan akses ketat untuk memastikan data koperasi anda selamat."
    }
  },
  {
    id: 'training',
    question: { en: "Do you provide training?", ms: "Adakah latihan disediakan?" },
    answer: {
      en: "Yes, we provide comprehensive training for your staff during the onboarding process to ensure they are comfortable using the system.",
      ms: "Ya, kami menyediakan latihan komprehensif untuk kakitangan anda semasa proses onboarding untuk memastikan mereka selesa menggunakan sistem."
    }
  },
  {
    id: 'difference',
    question: { en: "KoSMART vs ICMIS?", ms: "KoSMART vs ICMIS?" },
    answer: {
      en: "KoSMART is for micro/small coops (simple, automated). ICMIS is for medium/large coops (comprehensive, customizable modules).",
      ms: "KoSMART untuk koperasi mikro/kecil (ringkas, automatik). ICMIS untuk koperasi sederhana/besar (modul komprehensif, boleh disesuaikan)."
    }
  }
];
