import React from 'react';
import { motion } from 'framer-motion';
import logo from './assets/entreCenas-logo.png'; // 🖼️ adicione sua logo aqui (ex: src/assets/entreCenas-logo.png)

export default function EntreCenasLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090a0e] to-[#0c0d11] text-gray-100 font-sans transition-colors duration-700">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="EntreCenas Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_8px_#22d3ee]"
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

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-24">
        {[
          {
            title: 'Fluxo Completo',
            text: 'Do roteiro à entrega final — entenda todas as etapas da produção audiovisual.'
          },
          {
            title: 'Ferramentas Práticas',
            text: 'Descubra softwares e métodos essenciais para elevar a qualidade do seu conteúdo.'
          },
          {
            title: 'Aplicação Real',
            text: 'Utilize templates e checklists práticos para aplicar o aprendizado imediatamente.'
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-[#111319] p-8 rounded-2xl border border-[#1a1c23] hover:border-cyan-400/40 transition-all shadow-lg shadow-black/10"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.text}</p>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 pb-24 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
          Por que o EntreCenas é diferente?
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          O EntreCenas foi criado para quem busca entendimento real, não apenas conceitos. Cada lição é construída sobre experiências práticas e exemplos concretos — com uma linguagem moderna e acessível.
        </p>
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
    </div>
  );
}
