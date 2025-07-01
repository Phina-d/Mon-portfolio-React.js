import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/TON_UTILISATEUR',
      icon: <FaGithub />,
      label: 'GitHub'
    },
    {
      href: 'https://linkedin.com/in/TON_PROFIL',
      icon: <FaLinkedin />,
      label: 'LinkedIn'
    },
    {
      href: 'mailto:tonemail@example.com',
      icon: <FaEnvelope />,
      label: 'Email'
    },
    {
      href: 'https://facebook.com/TON_PROFIL',
      icon: <FaFacebook />,
      label: 'Facebook'
    },
    {
      href: 'https://twitter.com/TON_PROFIL',
      icon: <FaTwitter />,
      label: 'Twitter'
    },
    {
      href: 'https://instagram.com/TON_PROFIL',
      icon: <FaInstagram />,
      label: 'Instagram'
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {year} Mon Portfolio. Tous droits réservés.</p>
        <div className="footer-socials">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="footer-icon"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
