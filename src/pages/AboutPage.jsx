import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, MapPin } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="page-wrapper">
            <div className="container">
                <header className="page-header text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        className="page-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Dedicated to healing and community since 2014.
                    </motion.p>
                </header>

                <section className="section about-content">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>Our Mission</h2>
                            <p className="lead">
                                Healing through creativity – We use art to support mental well-being, reduce stigma, and build an inclusive community in Prague.
                            </p>
                            <p>
                                Umělecké spolek Metamorfoza operates on the belief that creative expression is a fundamental human need that can facilitate emotional healing and personal growth. Our organization provides a path to mental well-being through art therapy, fostering a community of support and understanding.
                            </p>

                            <h3>Our History</h3>
                            <p>
                                Founded in 2014, we have spent over a decade working with individuals, children, and the local community. We started as a small initiative and have grown into a registered nonprofit association (Spolek) recognized for our commitment to inclusive cultural programs.
                            </p>
                        </div>
                        <div className="about-image">
                            <div className="image-placeholder"></div>
                        </div>
                    </div>
                </section>

                <section className="section legal-section">
                    <h2 className="text-center mb-4">Organizational Transparency</h2>
                    <div className="legal-grid">
                        <div className="legal-card">
                            <ShieldCheck size={32} className="legal-icon" />
                            <h3>Legal Status</h3>
                            <p>Registered Nonprofit Association (Spolek)</p>
                            <p><strong>ID (IČO):</strong> 26664844</p>
                            <p>Registered on 1 January 2014 under file L 14687 at the Municipal Court in Prague.</p>
                        </div>

                        <div className="legal-card">
                            <MapPin size={32} className="legal-icon" />
                            <h3>Location</h3>
                            <p><strong>Headquarters:</strong><br />Hošťálkova 861/73<br />169 00 Prague 6 – Břevnov<br />Czech Republic</p>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .page-wrapper {
          padding-top: 100px; /* Spacer for fixed navbar */
          min-height: 100vh;
        }

        .page-header {
          padding: 4rem 0 2rem;
        }

        .page-header h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-light);
          max-width: 600px;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .lead {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          border-left: 4px solid var(--color-secondary);
          padding-left: 1.5rem;
        }

        .image-placeholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
          border-radius: var(--radius-lg);
          background-image: url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
          background-size: cover;
          background-position: center;
        }

        .legal-section {
          background-color: var(--color-bg-alt);
          padding: 4rem 2rem;
          border-radius: var(--radius-lg);
          margin-bottom: 4rem;
        }

        .legal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .legal-card {
          background: var(--color-surface);
          padding: 2rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }

        .legal-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .mb-4 { margin-bottom: 2rem; }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default AboutPage;
