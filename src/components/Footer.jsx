import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col">
                        <h3 className="footer-logo">Metamorfoza</h3>
                        <p className="footer-mission">
                            Healing through creativity. We support mental well-being and build an inclusive community in Prague through art therapy and cultural events.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <div className="contact-item">
                            <MapPin size={18} />
                            <span>Hošťálkova 861/73, 169 00 Prague 6</span>
                        </div>
                        <div className="contact-item">
                            <Link to="mailto:contact@uspolekmetamorfoza.org" className="contact-link">
                                <Mail size={18} />
                                <span>contact@uspolekmetamorfoza.org</span>
                            </Link>
                        </div>
                        <div className="contact-item">
                            <Link to="tel:+420774085199" className="contact-link">
                                <Phone size={18} />
                                <span>+420 774 085 199</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/programs">Our Programs</Link></li>
                            <li><Link to="/contact">Get Involved</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Umělecké spolek Metamorfoza. All rights reserved.</p>
                    <p className="legal-info">IČO: 26664844 | Registered under file L 14687 at the Municipal Court in Prague.</p>
                    <p className="made-with">
                        Made with <Heart size={14} fill="currentColor" /> in Prague
                    </p>
                </div>
            </div>

            <style jsx>{`
        .footer-section {
          background-color: var(--color-primary);
          color: var(--color-text-inverted);
          padding: 4rem 0 2rem;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--color-secondary);
        }

        .footer-mission {
          opacity: 0.9;
          line-height: 1.6;
        }

        .footer-col h4 {
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }
        
        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .contact-link:hover {
          color: var(--color-secondary);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          opacity: 0.9;
          transition: var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--color-secondary);
          padding-left: 5px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.8;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .made-with {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          margin-top: 0.5rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
