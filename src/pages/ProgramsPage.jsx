import React from 'react';
import { motion } from 'framer-motion';

const programs = [
    {
        title: "Art Therapy Workshops",
        description: "Guided creative sessions (painting, collage, clay, etc.) providing a safe space for expression and emotional healing.",
        target: "Individuals seeking mental health support",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Community Performance Events",
        description: "Small-scale performances on a cozy stage to build confidence, promote inclusion, and engage the community.",
        target: "Children, youth, and local community",
        image: "https://images.unsplash.com/photo-1514525253440-b3934520866b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Art Exhibitions",
        description: "Community art exhibitions showcasing members’ artwork to the public, helping to popularize creative expression and cultural heritage.",
        target: "Local community and art lovers",
        image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const ProgramsPage = () => {
    return (
        <div className="page-wrapper">
            <div className="container">
                <header className="page-header text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Programs
                    </motion.h1>
                    <p className="page-subtitle">Exploring creativity in all its forms.</p>
                </header>

                <div className="programs-list">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            className="program-card-horiz"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="program-img" style={{ backgroundImage: `url(${program.image})` }}></div>
                            <div className="program-content">
                                <h2>{program.title}</h2>
                                <p className="program-desc">{program.description}</p>
                                <div className="program-target">
                                    <strong>Target Audience:</strong> {program.target}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .page-wrapper {
          padding-top: 100px;
          padding-bottom: 4rem;
        }

        .page-header {
          margin-bottom: 4rem;
        }

        .programs-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .program-card-horiz {
          display: flex;
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          min-height: 300px;
        }
        
        .program-card-horiz:nth-child(even) {
          flex-direction: row-reverse;
        }

        .program-img {
          flex: 1;
          background-size: cover;
          background-position: center;
          min-height: 250px;
        }

        .program-content {
          flex: 1;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .program-content h2 {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .program-desc {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }

        .program-target {
          font-size: 0.9rem;
          color: var(--color-text-light);
          border-top: 1px solid #eee;
          padding-top: 1rem;
        }

        @media (max-width: 768px) {
          .program-card-horiz, .program-card-horiz:nth-child(even) {
            flex-direction: column;
          }
           .program-img {
             height: 200px;
             flex: none;
           }
        }
      `}</style>
        </div>
    );
};

export default ProgramsPage;
