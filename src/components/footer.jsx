import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#fff',
      padding: '40px 20px',
      fontSize: '14px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>Narasi Bangsa</h3>
          <p>Portal berita independen yang menyajikan informasi terpercaya, tajam, dan mendalam.</p>
        </div>

        <div style={{ flex: '1 1 150px', marginBottom: '20px' }}>
          <h4>Menu</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/tentang" style={{ color: '#fff', textDecoration: 'none' }}>Tentang Kami</a></li>
            <li><a href="/kontak" style={{ color: '#fff', textDecoration: 'none' }}>Kontak</a></li>
            <li><a href="/kebijakan" style={{ color: '#fff', textDecoration: 'none' }}>Kebijakan Privasi</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 150px', marginBottom: '20px' }}>
          <h4>Ikuti Kami</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #444', marginTop: '20px', paddingTop: '10px', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} Narasi Bangsa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
