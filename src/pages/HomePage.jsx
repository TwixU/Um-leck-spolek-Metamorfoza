import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Music, Frame, ArrowRight } from 'lucide-react';

const HomePage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg"></div>
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text-box"
                    >
                        <h1 className="hero-title">Healing Through <span className="highlight">Creativity</span></h1>
                        <p className="hero-subtitle">
                            We use art to support mental well-being, reduce stigma, and build an inclusive community in Prague.
                        </p>
                        <div className="hero-cta">
                            <Link to="/programs" className="btn btn-primary">Explore Programs</Link>
                            <Link to="/about" className="btn btn-outline">Our Story</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section mission-section">
                <div className="container">
                    <motion.div
                        className="mission-grid"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="mission-content">
                            <h2 className="section-title">A Safe Space for Expression</h2>
                            <p className="lead-text">
                                Umělecké spolek Metamorfoza provides a path to mental well-being through art therapy, fostering a community of support and understanding.
                            </p>
                            <p>
                                Since 2014, we have been dedicated to creating inclusive cultural programs where everyone—regardless of background or ability—can discover the healing power of art.
                            </p>
                            <Link to="/about" className="learn-more-link">
                                Learn more about our mission <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="mission-visual">
                            <div className="art-abstract-shape"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="section pillars-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our Core Programs</h2>
                        <p className="section-subtitle">Diverse ways to engage, create, and heal.</p>
                    </div>

                    <div className="pillars-grid">
                        <motion.div
                            className="pillar-card"
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="icon-wrapper">
                                <Palette size={32} />
                            </div>
                            <h3>Art Therapy Workshops</h3>
                            <p>Guided creative sessions including painting, collage, and clay, providing a safe space for expression and emotional healing.</p>
                        </motion.div>

                        <motion.div
                            className="pillar-card"
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="icon-wrapper secondary">
                                <Music size={32} />
                            </div>
                            <h3>Community Performance</h3>
                            <p>Small-scale performances on a cozy stage to build confidence, promote inclusion, and engage the community.</p>
                        </motion.div>

                        <motion.div
                            className="pillar-card"
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="icon-wrapper accent">
                                <Frame size={32} />
                            </div>
                            <h3>Art Exhibitions</h3>
                            <p>Community exhibitions showcasing members’ artwork to the public, helping to popularize creative expression.</p>
                        </motion.div>
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/programs" className="btn btn-secondary">View All Programs</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to start your creative journey?</h2>
                        <p>Join our workshops, attend an event, or support our cause today.</p>
                        <Link to="/contact" className="btn btn-primary">Get Involved</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          background-color: var(--color-bg);
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 20%, rgba(15, 76, 92, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, rgba(251, 139, 36, 0.1) 0%, transparent 50%);
          z-index: 1;
        }
        
        /* Abstract decorative shapes */
        .hero-bg::before {
          content: '';
          position: absolute;
          top: -10%;
          right: -10%;
          width: 50vw;
          height: 50vw;
          background: var(--color-primary-light);
          opacity: 0.05;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          z-index: 1;
          animation: morph 20s infinite alternate;
        }

        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-text-box {
          max-width: 650px;
        }

        .hero-title {
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }

        .highlight {
          color: var(--color-secondary);
          position: relative;
          display: inline-block;
        }
        
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          height: 15px;
          background-color: rgba(251, 139, 36, 0.2);
          z-index: -1;
          transform: rotate(-2deg);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-light);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }

        .lead-text {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--color-text);
          margin-bottom: 1.5rem;
        }

        .learn-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-secondary);
          font-weight: 600;
          margin-top: 1.5rem;
        }

        .art-abstract-shape {
          width: 100%;
          height: 400px;
          background: url('https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80') center/cover;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          box-shadow: var(--shadow-hover);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pillar-card {
          background: var(--color-surface);
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(0,0,0,0.05);
          text-align: center;
          height: 100%;
        }

        .icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(15, 76, 92, 0.1);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .icon-wrapper.secondary {
          background: rgba(251, 139, 36, 0.1);
          color: var(--color-secondary);
        }
        
        .icon-wrapper.accent {
          background: rgba(154, 3, 30, 0.1);
          color: var(--color-accent);
        }

        .pillar-card h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .cta-section {
          padding: 6rem 0;
        }

        .cta-box {
          background: var(--color-primary);
          color: var(--color-text-inverted);
          padding: 4rem 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          background-image: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
        }

        .cta-box h2 {
          color: var(--color-text-inverted);
          margin-bottom: 1rem;
        }
        
        .cta-box p {
          color: rgba(255,255,255,0.9);
          margin-bottom: 2rem;
          font-size: 1.2rem;
        }

        .mb-5 { margin-bottom: 3rem; }
        .mt-5 { margin-top: 3rem; }

        @media (max-width: 968px) {
          .mission-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default HomePage;
