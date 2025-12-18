import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const Layout = ({ children }) => {
    return (
        <>
            <ScrollToTop />
            <div className="app-layout">
                <Navbar />
                <main className="main-content">
                    {children}
                </main>
                <Footer />
            </div>
            <style jsx>{`
        .app-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
          /* Navbar height compensation if simple sticky/fixed, 
             but our hero usually covers top. 
             However, since navbar is fixed and transparent initially, 
             we allow content to go under it for Hero. */
        }
      `}</style>
        </>
    );
};

export default Layout;
