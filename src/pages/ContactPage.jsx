import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            navigate('/thank-you');
        }, 1000);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="page-wrapper">
            <div className="container">
                <header className="page-header text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Get In Touch
                    </motion.h1>
                    <p className="page-subtitle">We'd love to verify from you.</p>
                </header>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Contact Information</h2>
                        <p className="mb-4">
                            Whether you want to join a workshop, volunteer, or just say hello, we are here for you.
                        </p>

                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>Address</h3>
                                <p>Hošťálkova 861/73, 169 00 Prague 6 – Břevnov</p>
                                <p>Czech Republic</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h3>Phone</h3>
                                <p>+420 774 085 199</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h3>Email</h3>
                                <p>contact@uspolekmetamorfoza.org</p>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.123456789!2d14.363!3d50.083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNWTၼ!5e0!3m2!1sen!2scz!4v1600000000000!5m2!1sen!2scz"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                            {/* Note: Map coordinates are approximate placeholders. In a real scenario, would geocode the specific address. */}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {isSubmitted ? (
                            <div className="success-message text-center">
                                <h3>Thank You!</h3>
                                <p>Your message has been sent. We will get back to you soon.</p>
                                <button onClick={() => setIsSubmitted(false)} className="btn btn-outline mt-4">Send another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <h2>Send a Message</h2>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        value={formState.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Send Message <Send size={16} style={{ marginLeft: '8px' }} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        .page-wrapper {
          padding-top: 100px;
          padding-bottom: 4rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-info {
          padding: 2rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .info-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .info-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .map-container {
          width: 100%;
          height: 300px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-top: 2rem;
          background: #eee;
        }

        .contact-form-wrapper {
          background: var(--color-surface);
          padding: 3rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .w-100 { width: 100%; }
        .mt-4 { margin-top: 1.5rem; }
        .mb-4 { margin-bottom: 2rem; }

        .success-message {
          padding: 2rem;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default ContactPage;
