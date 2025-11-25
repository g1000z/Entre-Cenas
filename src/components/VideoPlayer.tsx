// src/components/VideoPlayer.tsx
import React from 'react';

// 1. Defina a Interface para tipar as props
interface VideoPlayerProps {
  videoUrl: string; // URL do arquivo de vídeo (ex: .mp4)
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  return (
    <div className="video-player-container">
      <h3>{title}</h3>
      <video width="100%" controls>
        {/* A tag <source> especifica o arquivo de vídeo */}
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback para navegadores que não suportam a tag video */}
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  );
};

export default VideoPlayer;
