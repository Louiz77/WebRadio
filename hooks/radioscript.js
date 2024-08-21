import { useEffect, useState, useRef } from 'react';

export default function useWebradioPlayer() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playPauseButtonRef = useRef(null);
  const playIconRef = useRef(null);
  const pauseIconRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') { // Certifica que o código só é executado no cliente
      const audioElement = new Audio('https://stream.cades.pro.br:8443/stream');
      setAudio(audioElement);

      const playPauseButton = document.getElementById('playPauseBtn');
      if (playPauseButton) {
        playPauseButtonRef.current = playPauseButton;
        playIconRef.current = document.getElementById('playIcon');
        pauseIconRef.current = document.getElementById('pauseIcon');

        const handlePlayPause = () => {
          if (audioElement.paused) {
            audioElement.src = 'https://stream.cades.pro.br:8443/stream';
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

        playPauseButtonRef.current.addEventListener('click', handlePlayPause);
      }

      return () => {
        if (playPauseButtonRef.current) {
          playPauseButtonRef.current.removeEventListener('click', handlePlayPause);
        }
      };
    }
  }, []);

  return [isPlaying, audio, playIconRef, pauseIconRef];
}
