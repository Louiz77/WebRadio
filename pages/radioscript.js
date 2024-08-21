import { useEffect, useState, useRef } from 'react';

export default function useWebradioPlayer() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playPauseButtonRef = useRef(null);
  const playIconRef = useRef(null);
  const pauseIconRef = useRef(null);

  useEffect(() => {
    const audioElement = new Audio('https://stream.cades.pro.br:8443/stream');
    setAudio(audioElement);

    const handlePlayPause = () => {
      if (audioElement.paused) {
        audioElement.play();
        setIsPlaying(true);
        playIconRef.current.style.display = 'none';
        pauseIconRef.current.style.display = 'inline';
      } else {
        audioElement.pause();
        setIsPlaying(false);
        playIconRef.current.style.display = 'inline';
        pauseIconRef.current.style.display = 'none';
      }
    };

    if (typeof window !== 'undefined') {
      const playPauseButton = document.getElementById('playPauseBtn');
      if (playPauseButton) {
        playPauseButtonRef.current = playPauseButton;
        playIconRef.current = document.getElementById('playIcon');
        pauseIconRef.current = document.getElementById('pauseIcon');

        playPauseButtonRef.current.addEventListener('click', handlePlayPause);
      }
    }

    return () => {
      if (playPauseButtonRef.current) {
        playPauseButtonRef.current.removeEventListener('click', handlePlayPause);
      }
      if (audioElement) {
        audioElement.pause(); // Pausa o áudio antes de desmontar
        setAudio(null); // Limpa a instância do áudio
      }
    };
  }, []);

  return [isPlaying, audio, playIconRef, pauseIconRef];
}
