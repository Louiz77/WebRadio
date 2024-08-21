import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import useWebradioPlayer from '../hooks/radioscript';
import '../static/globals.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const sectionStyle = css`
  padding: 5rem 0;
  text-align: center;
  background-color: #343a40;
  color: #ffffff;
`;

const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const videoWrapperStyle = css`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`;

const videoStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

export default function Home() {
  const [isPlaying, playIconRef, pauseIconRef] = useWebradioPlayer();
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
          <Image src="/logo.png" 
          width={100} height={40} 
          alt="Logo"
          style={{
            marginLeft: '50%',
          }}
          />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://forms.gle/Cmja3W4y1cacu4AB7" legacyBehavior>
                AcampaCades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Webradio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Programação
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre
              </a>
            </li>
            
            <li className="nav-item">
              <a className="btn btn-outline-light ml-2" 
              href="#"
              style={{
                marginLeft: '15%',
              }}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        className="section hero d-flex align-items-center justify-content-center text-center"
        style={{
          background: `url('/hero-image.jpg') no-repeat center center/cover`,
          paddingTop: '5%',
          paddingBottom: '15%',
          
        }}
      >
        <div className="container">
          <h1 className="display-4 text-white">
            Esquecendo-me das coisas que ficaram para trás, prossigo para o alvo.
          </h1>
          <Link href="#" legacyBehavior>
            <a className="btn btn-light btn-lg mt-3">Visite-nos</a>
          </Link>
        </div>
      </section>

      <section className="section py-5 text-center second-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-left">
              <h2 className="display-4">Veja nossa programação!</h2>
            </div>
            <div className="col-md-6 text-md-right">
              <h3 className="mb-3">Programação</h3>
              <p>
                Domingo | 09h00 - Culto
                <br />
                Quinta | 20h00- Culto de oração
              </p>
              <Link href="#" legacyBehavior>
                <a className="btn btn-dark">Veja mais informações</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section text-white py-5"
        style={{ backgroundColor: 'black' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Sobre nós</h2>
              <p>
                Nossa igreja atende a comunidade há mais de x anos. Acreditamos
                em espalhar amor, esperança e fé através de nossos serviços e
                atividades comunitárias.
              </p>
              <p>
                Nossa igreja atende a comunidade há mais de x anos. Acreditamos
                em espalhar amor, esperança e fé através de nossos serviços e
                atividades comunitárias.
              </p>
              <p>
                Nossa igreja atende a comunidade há mais de x anos. Acreditamos
                em espalhar amor, esperança e fé através de nossos serviços e
                atividades comunitárias.
              </p>
            </div>
            <div className="col-md-6">
            <Image src="/image.png" width={500} height={300} className="img-nos" alt="Sobre nós" />
            </div>
          </div>
        </div>
      </section>

      <section className="section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Manhã de Culto</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <Image src="/ser1.png" width={1200} height={900} alt="Café" />
                <div className="card-body">
                  <h5 className="card-title">Café</h5>
                  <p className="card-text">Momento do café e conversa.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <Image src="/ser2.png" width={1200} height={900} alt="Adoração" />
                <div className="card-body">
                  <h5 className="card-title">Adoração</h5>
                  <p className="card-text">Momento de adoração.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <Image src="/ser3.png" width={1200} height={900} alt="Pós Culto" />
                <div className="card-body">
                  <h5 className="card-title">Pós Culto</h5>
                  <p className="card-text">Momento especial pós culto.</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-center mb-4">Estudo Bíblico</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <Image src="/bibli1.png" 
                width={1200} 
                height={900} 
                alt="Nada Além da Biblia" 
                
                />
                <div className="card-body">
                  <h5 className="card-title">Nada Além da Biblia</h5>
                  <p className="card-text">Estudo biblico.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <Image src="/bibli2.png" width={1200} height={900} alt="Oração" />
                <div className="card-body">
                  <h5 className="card-title">Oração</h5>
                  <p className="card-text">Grupo de oração.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <Image src="/bibli3.png" width={1200} height={900} alt="Cades em casa" />
                <div className="card-body">
                  <h5 className="card-title">Cades em casa</h5>
                  <p className="card-text">Oração em casa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section radio-section py-5 bg-black text-white">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">WEBRADIO CADES</h1>
          <div className="custom-player mb-4">
            <button id="playPauseBtn" className="play-pause-btn">
            <img
              id="playIcon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABj0lEQVR4nO2ZPUsDQRCGHyNRiAgJKJjGxiY2amE6u1Qi+QWCf8EqvY0/wNJSS1srsVEbsbGziDYWWihYGATFj6wszMJyaOVddMZ94Dj27vaOl73deXcGEolEIkMHGMEADugCyxgQ4uQ4BGZRipOjJ+cXYBMYQ6mQOrANfEj7FlgDhlAmJLAInEbXj4F5FArxlGQ07uSeH6VdYBJlQgJVYAt4k2cegHVgGGVCAg3gIHr2HFhCoZBAG7iO+uwD0ygU4qkAG8Cz9HuS9ijKhARmgL2o/xWwgkIhgRZw8RfcgfuhEE9ZVrNHederrHbjKBMSqEu86f+GO3A5Cgk0gbOMO5hDoZDYHdxn3MEEyoQEajJf3ot2B0ULCSwAJ0W6g0EJQSb9KnAj3/SLwg4wRQ4kIf/t16ppn+wmlt9mJiAeaQuI6i1K2YJpbH1h4/3WWO3G6lLbxqpiYavbjpIPfRkRVcmHhvZ0UFV7gq70Tcq0sKg8qCR24VE5D8yVFXpWCj3OQumta6EY2rFSnk4kEujlE4Rx1mgQiGC0AAAAAElFTkSuQmCC"
              alt="Play"
              style={{ display: isPlaying ? 'none' : 'inline' }}
              ref={playIconRef}
            />
            <img
              id="pauseIcon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZUlEQVR4nO3ZsQ3AIBAEQfpv+p1cAQ7O2EYzEhH64MVmrAUAe83N89R8zXGLvHVfY5HwIm3SCmm1SSuk1SatkFabtEJabdIKabVJK6TVJq2QVpu0Qlpt0vpqWnPKt8L8fREAWHEBbnI+0BRFWvcAAAAASUVORK5CYII="
              alt="Pause"
              style={{ display: isPlaying ? 'inline' : 'none' }}
              ref={pauseIconRef}
            />
            </button>
            <div className="live-indicator">
              <span className="live-dot"></span> AO VIVO
            </div>
            <button className="volume-btn">
              <i className="bi bi-volume-up-fill"></i>
            </button>
          </div>
          <Link href="https://www.instagram.com/projeto.cades/" legacyBehavior target="_blank">
            <a className="btn btn-outline-light instagram-link">Siga-nos no Instagram</a>
          </Link>
        </div>
      </section>

      <section css={sectionStyle}>
        <div css={containerStyle}>
          <h1>AcampaCades</h1>
          <p>Conheça o nosso AcampaCades.</p>
          <div css={videoWrapperStyle}>
            <video css={videoStyle} controls>
              <source src="/VideoAcampacades.mp4" type="video/mp4" />
              Seu navegador não suporta o vídeo.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}