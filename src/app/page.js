"use client";
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: '0 2rem', background: 'linear-gradient(to bottom, #0A192F, #172A45)', color: '#FFF' }}>
      <Head>
        <title>Exito Software House</title>
        <meta name="description" content="Welcome to Exito - Your Partner in Software Development" />
        <link rel="icon" href="/img/exito.ico" />
      </Head>

      <main style={{ minHeight: '100vh', padding: '4rem 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src="/img/exito.png" alt="Exito Logo" style={{ maxWidth: '60%', marginBottom: '2rem', borderRadius: '10px', animation: 'spin 4s linear infinite' }} />
        <h1 style={{ margin: 0, lineHeight: 1.15, fontSize: '4rem', textAlign: 'center' }}>Welcome to Exito</h1>
        <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>Your Partner in Software Development</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '800px', marginTop: '3rem' }}>
          <a href="#services" style={{ margin: '1rem', padding: '1.5rem', textAlign: 'left', color: 'inherit', textDecoration: 'none', border: '1px solid #eaeaea', borderRadius: '10px', transition: 'color 0.15s ease, border-color 0.15s ease', maxWidth: '300px', background: '#172A45' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Our Services &rarr;</h3>
            <p style={{ margin: 0, fontSize: '1.25rem', lineHeight: 1.5 }}>Discover the variety of services we offer to help you achieve your goals.</p>
          </a>

          <a href="#about" style={{ margin: '1rem', padding: '1.5rem', textAlign: 'left', color: 'inherit', textDecoration: 'none', border: '1px solid #eaeaea', borderRadius: '10px', transition: 'color 0.15s ease, border-color 0.15s ease', maxWidth: '300px', background: '#172A45' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>About Us &rarr;</h3>
            <p style={{ margin: 0, fontSize: '1.25rem', lineHeight: 1.5 }}>Learn more about our mission and the team behind Exito.</p>
          </a>

          <a href="#contact" style={{ margin: '1rem', padding: '1.5rem', textAlign: 'left', color: 'inherit', textDecoration: 'none', border: '1px solid #eaeaea', borderRadius: '10px', transition: 'color 0.15s ease, border-color 0.15s ease', maxWidth: '300px', background: '#172A45' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Contact Us &rarr;</h3>
            <p style={{ margin: 0, fontSize: '1.25rem', lineHeight: 1.5 }}>Get in touch with us for any inquiries or project discussions.</p>
          </a>
        </div>
      </main>

      <footer style={{ display: 'flex', flex: 1, padding: '2rem 0', borderTop: '1px solid #eaeaea', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom, #0A192F, #172A45)' }}>
        <p style={{ color: '#FFF' }}>&copy; {new Date().getFullYear()} Exito. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
