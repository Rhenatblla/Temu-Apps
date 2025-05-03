import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f5f5f5',
      padding: '20px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#555',
      borderTop: '1px solid #ddd'
    }}>
      <p>&copy; {new Date().getFullYear()} Nama Perusahaan Anda. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
