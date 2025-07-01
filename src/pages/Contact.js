import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">Contactez-moi</h2>
        <p className="contact-subtitle">
          Vous avez un projet ou une question ? Envoyez-moi un message !
        </p>

        {submitted ? (
          <p className="contact-success">
            ✅ Merci pour votre message ! Je vous répondrai bientôt.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" required placeholder="Votre nom" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Votre email" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ex: +221 77 123 45 67"
                pattern="^\+?\d{6,15}$"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Objet</label>
              <input type="text" id="subject" name="subject" required placeholder="Sujet du message" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Votre message"
              />
            </div>

            <button type="submit" className="btn-submit">
              Envoyer
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

export default Contact;
