import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
    return (
        <div className="page-wrapper">
            <div className="container">
                <motion.div
                    className="thank-you-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="icon-wrapper">
                        <CheckCircle size={64} />
                    </div>
                    <h1>Thank You!</h1>
                    <p className="message">
                        Your message has been received successfully. We appreciate you reaching out to Umělecké spolek Metamorfoza and will get back to you shortly.
                    </p>
                    <Link to="/" className="btn btn-primary">
                        <ArrowLeft size={18} style={{ marginRight: '8px' }} /> Back to Home
                    </Link>
                </motion.div>
            </div>

            <style jsx>{`
        .page-wrapper {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
        }

        .thank-you-card {
          background: var(--color-surface);
          padding: 4rem 2rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .icon-wrapper {
          color: var(--color-secondary);
          margin-bottom: 2rem;
          display: inline-block;
          animation: pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes pop {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }

        .message {
          font-size: 1.2rem;
          color: var(--color-text-light);
          margin-bottom: 3rem;
        }
      `}</style>
        </div>
    );
};

export default ThankYouPage;
