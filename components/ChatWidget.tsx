import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Bot, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset chat when language changes or opened
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'model', text: language === 'ms'
            ? 'Accessing mainframe... Hello. I am the KOF AI Assistant. How can I help?'
            : 'Accessing mainframe... Hello. I am the KOF AI Assistant. How can I help?'
        }
      ]);
    }
  }, [language, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleQuestionClick = (questionId: string) => {
    const faq = FAQ_DATA.find(f => f.id === questionId);
    if (!faq) return;

    // Add user question
    setMessages(prev => [...prev, { role: 'user', text: faq.question[language] }]);

    // Simulate small delay for "thinking" feel
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'model', text: faq.answer[language] }]);
    }, 500);
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'model', text: 'Protocol Reset. System standing by...'
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-2xl rounded-xl shadow-lg overflow-hidden border border-sky-500/30 flex flex-col"
            style={{ height: '500px', maxHeight: '80vh' }}
          >
            {/* Header */}
            <div className="bg-slate-900/50 p-4 flex justify-between items-center text-white border-b border-sky-500/20">
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-sky-500" />
                <span className="font-bold text-sm tracking-wider uppercase text-sky-500">KOF Support Assistant</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleReset} className="hover:bg-sky-500/20 p-1.5 rounded-xl transition-colors text-sky-500" title="Reset Chat">
                  <RefreshCw size={14} />
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:bg-sky-500/20 p-1.5 rounded-xl transition-colors text-sky-500">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-transparent space-y-4 font-rajdhani">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-sm border ${msg.role === 'user'
                    ? 'bg-sky-500/10 text-white border-sky-500/30 shadow-sm '
                    : 'bg-slate-800/10 border-kof-purple/30 text-white shadow-sm'
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Options Area */}
            <div className="p-3 bg-slate-900/30 border-t border-sky-500/10 max-h-40 overflow-y-auto">
              <p className="text-[10px] text-sky-500/50 mb-3 font-bold uppercase tracking-wider">
                {language === 'ms' ? 'Query Database:' : 'Query Database:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {FAQ_DATA.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleQuestionClick(faq.id)}
                    className="text-[10px] bg-white/5 hover:bg-sky-600 hover:text-white text-white/90 px-3 py-2 rounded-xl transition-all text-left border border-white/10 uppercase tracking-tighter"
                  >
                    {faq.question[language]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-sky-600 text-white p-4 rounded-xl shadow-lg border border-sky-500/30 transition-all flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <div className="animate-pulse flex items-center justify-center"><MessageCircle size={24} /></div>}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
