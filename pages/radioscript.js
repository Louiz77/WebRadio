import { useEffect, useState, useRef } from 'react';

export default function useWebradioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const playIconRef = useRef(null);
  const pauseIconRef = useRef(null);

  useEffect(() => {
    // Cria uma nova instância de áudio
    audioRef.current = new Audio('https://stream.cades.pro.br:8443/stream');

    const handlePlayPause = () => {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
        if (playIconRef.current) playIconRef.current.style.display = 'none';
        if (pauseIconRef.current) pauseIconRef.current.style.display = 'inline';
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        if (playIconRef.current) playIconRef.current.style.display = 'inline';
        if (pauseIconRef.current) pauseIconRef.current.style.display = 'none';
      }
    };

    const playPauseButton = document.getElementById('playPauseBtn');
    if (playPauseButton) {
      playPauseButton.addEventListener('click', handlePlayPause);
    }

    return () => {
      if (playPauseButton) {
        playPauseButton.removeEventListener('click', handlePlayPause);
      }
      if (audioRef.current) {
        audioRef.current.pause(); // Pausa o áudio antes de desmontar
        audioRef.current = null; // Limpa a referência do áudio
      }
    };
  }, []);

  return [isPlaying, playIconRef, pauseIconRef];
}
