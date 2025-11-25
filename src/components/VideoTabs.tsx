// src/components/VideoTabs.tsx
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer'; // Importe o componente que você criou

// 1. Defina o tipo para as abas
type TabKey = 'destaques' | 'recentes' | 'playlists';

const mockVideoData = {
  destaques: [
    { id: 1, url: "video-url-1.mp4", title: "Destaque da Semana" },
    { id: 2, url: "video-url-2.mp4", title: "Tutorial Essencial" },
  ],
  recentes: [
    { id: 3, url: "video-url-3.mp4", title: "Lançamento Novo" },
  ],
  // ... mais dados
};

const VideoTabs: React.FC = () => {
  // 2. Use useState com o tipo definido para gerenciar a aba ativa
  const [activeTab, setActiveTab] = useState<TabKey>('destaques');

  // 3. Função para renderizar o conteúdo da aba ativa
  const renderContent = () => {
    switch (activeTab) {
      case 'destaques':
        return (
          <div className="tab-content">
            <h2>Vídeos em Destaque</h2>
            {mockVideoData.destaques.map(video => (
              <VideoPlayer key={video.id} videoUrl={video.url} title={video.title} />
            ))}
          </div>
        );
      case 'recentes':
        return (
          <div className="tab-content">
            <h2>Vídeos Mais Recentes</h2>
            {mockVideoData.recentes.map(video => (
              <VideoPlayer key={video.id} videoUrl={video.url} title={video.title} />
            ))}
          </div>
        );
      case 'playlists':
        return <div className="tab-content">Conteúdo das Playlists.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="video-tabs-container">
      {/* 4. Botões para mudar a aba */}
      <div className="tab-list">
        {/* Adicione um seletor de classes para estilizar a aba ativa */}
        <button 
          className={activeTab === 'destaques' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('destaques')}
        >
          Destaques
        </button>
        <button 
          className={activeTab === 'recentes' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('recentes')}
        >
          Recentes
        </button>
        <button 
          className={activeTab === 'playlists' ? 'active-tab' : ''} 
          onClick={() => setActiveTab('playlists')}
        >
          Playlists
        </button>
      </div>
      
      {/* 5. Renderização do Conteúdo da Aba */}
      <div className="tab-panel">
        {renderContent()}
      </div>
    </div>
  );
};

export default VideoTabs;
