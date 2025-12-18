import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <div className="page-wrapper">
            <div className="container">
                <header className="page-header">
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last Updated: December 12, 2025</p>
                </header>

                <div className="policy-content">
                    <section>
                        <h2>Introduction</h2>
                        <p>
                            Umělecké spolek Metamorfoza ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website <strong>uspolekmetamorfoza.org</strong>.
                        </p>
                    </section>

                    <section>
                        <h2>Collection of Your Information</h2>
                        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>

                        <h3>Personal Data</h3>
                        <p>
                            Personal data we may collect includes names, email addresses, phone numbers, and any other information you provide through our contact forms or registration forms (e.g. when you reach out or sign up for events).
                        </p>

                        <h3>Derivative Data</h3>
                        <p>
                            Derivative data includes technical and usage information collected when you interact with our website, such as cookies, IP addresses, browser details, and analytics data about how you use the site.
                        </p>
                    </section>

                    <section>
                        <h2>Use of Your Information</h2>
                        <p>
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                        <ul>
                            <li>Process registration for workshops and events.</li>
                            <li>Respond to your inquiries and support needs.</li>
                            <li>Compile anonymous statistical data and analysis for use internally.</li>
                            <li>Send you a newsletter or updates regarding the Organization (if opted in).</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Contact Us</h2>
                        <p>
                            If you have questions or comments about this Privacy Policy, please contact us at:<br />
                            <strong>Umělecké spolek Metamorfoza</strong><br />
                            Hošťálkova 861/73, 169 00 Prague 6 – Břevnov<br />
                            Email: contact@uspolekmetamorfoza.org<br />
                            Phone: +420 774 085 199
                        </p>
                    </section>
                </div>
            </div>

            <style jsx>{`
        .page-wrapper {
          padding-top: 100px;
          padding-bottom: 4rem;
          min-height: 80vh;
        }

        .page-header {
          margin-bottom: 3rem;
          border-bottom: 2px solid var(--color-bg-alt);
          padding-bottom: 2rem;
        }

        .last-updated {
          color: var(--color-text-light);
          font-style: italic;
          margin-top: 0.5rem;
        }

        .policy-content {
          max-width: 800px;
          margin: 0 auto;
        }

        section {
          margin-bottom: 2.5rem;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        h3 {
          font-size: 1.3rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--color-secondary);
        }

        p, li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }

        ul {
          padding-left: 1.5rem;
        }
      `}</style>
        </div>
    );
};

export default PrivacyPolicyPage;
