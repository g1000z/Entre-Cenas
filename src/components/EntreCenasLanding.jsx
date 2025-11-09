import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EntreCenasLanding() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090a0e] to-[#0c0d11] text-gray-100 font-sans transition-colors duration-700">

      {/* Tela de carregamento */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-[#0c0d11] z-50"
          >
            {/* Logo animada */}
            <motion.img
              src="/entreCenas-logo.png"
              alt="EntreCenas logo"
              className="w-20 h-20 mb-6 object-contain"
              initial={{ scale: 0.9, opacity: 0.7 }}
              animate={{ scale: [0.9, 1.1, 1], opacity: [0.7, 1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Spinner */}
            <motion.div
              className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full mb-4"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear",
              }}
            />

            {/* Texto */}
            <motion.p
              className="text-cyan-400 text-lg font-medium"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
              }}
            >
              Carregando o servidor...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo principal */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <img
                src="/entreCenas-logo.png"
                alt="EntreCenas logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <h1 className="text-xl font-bold text-cyan-400 tracking-tight">
                EntreCenas
              </h1>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              href="https://youtu.be/lcEkS9tcIjg?list=RDlcEkS9tcIjg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition-colors"
            >
              Acessar Guia
            </motion.a>
          </header>

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto px-6 pt-12 pb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
              Descubra o que acontece por trás das câmeras
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Um guia completo sobre bastidores, técnicas e estratégias de produção audiovisual — direto, prático e feito para quem quer aprender de verdade.
            </p>
            <a
              href="https://youtu.be/Za7j-pDnh2I?list=RDlcEkS9tcIjg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors"
            >
              Acessar o Guia Agora
            </a>
          </motion.section>

          {/* Footer */}
          <footer className="border-t border-[#1a1c23] py-8 text-center text-gray-500 text-sm">
            <p>
              © 2025 EntreCenas — Criado com propósito e simplicidade.{" "}
              <a
                href="https://youtu.be/0LwcvjNJTuM?list=RDlcEkS9tcIjg&t=289"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Ver guia
              </a>
            </p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
