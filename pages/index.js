import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import useWebradioPlayer from '../hooks/radioscript';
import '../static/globals.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Navbar, Nav, Container, Button  } from 'react-bootstrap';

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
      <Head>
        <title>Projeto Cades</title>
      </Head>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: 'black' }}>
        <Container>
          <Link href="/" legacyBehavior passHref>
            <Navbar.Brand>
              <Image
                src="/logo.png"
                width={100}
                height={40}
                alt="Logo"
                
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="m-auto">
              <Nav.Link href="https://forms.gle/Cmja3W4y1cacu4AB7">AcampaCades</Nav.Link>
              <Nav.Link href="#webradio">Webradio</Nav.Link>
              <Nav.Link href="#programacao">Programação</Nav.Link>
              <Nav.Link href="#sobre">Sobre</Nav.Link>
              <Button
                variant="outline-light"
                className="ml-2"
                href="#"
              >
                Contato
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section
        className="section hero d-flex align-items-center justify-content-center text-center"
        style={{
          background: `url('/hero-image.jpg') no-repeat center center/cover`,
          paddingTop: '10%',
          paddingBottom: '12%',
          
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

      <section id='webradio' className="section radio-section py-5 bg-black text-white">
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

      <section 
      id="programacao" 
      className="section py-5 text-center second-section"
      style={{
        background: 'linear-gradient(180deg, rgba(226,147,10,1) 0%, rgba(255,255,255,1) 15%)',
      }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-left">
              <h2 className="display-4 fw-bold">Veja nossa programação!</h2>
            </div>
            <div className="col-md-6 text-md-right">
              <h3 className="mb-3 fst-italic">Programação</h3>
              <p className='fst-italic'>
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
        id='sobre'
        className="section text-white py-5"
        style={{ backgroundColor: 'black' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Sobre nós</h2>
              <p>     
              O Projeto Cades surgiu de forma natural, como um espaço de encontro para compartilhar amor e esperança através da mensagem de Cristo. 
              Nossos cultos são momentos de comunhão, onde buscamos fortalecer uns aos outros, refletindo sobre a vida e crescendo juntos como comunidade.
              </p>
              <p>
              Com a música como um dos pilares, cada culto proporciona uma experiência tocante e inspiradora. A musicalização nos conecta de forma íntima à mensagem de Cristo, transformando nossos encontros em oportunidades para renovar a fé e encontrar consolo.
              </p>
              <p>
              Nosso propósito é unir a comunidade, vivenciando o amor de Cristo de maneira prática, inspirando mudanças positivas na sociedade. No Cades, acreditamos que cada encontro é uma chance de transformar vidas e semear esperança ao nosso redor.
              </p>
            </div>
            <div className="col-md-6">
            <Image src="/image.png" width={500} height={300} className="img-nos" alt="Sobre nós" />
            </div>
          </div>
        </div>
      </section>

      <section 
      className="section py-5"
      >
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

      <section css={sectionStyle}
      style={{ background: 'radial-gradient(circle, rgba(226,147,10,0.9920343137254902) 0%, rgba(255,255,255,1) 70%)' }}
      >
        <div className='acampText' css={containerStyle}>
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