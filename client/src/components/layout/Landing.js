import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaLaptop, FaShieldAlt, FaGraduationCap, FaUserPlus, FaSignInAlt } from "react-icons/fa";

/**
 * Creates a cool landing page with Register and Login buttons and info cards
 */
const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const buttonStyle = {
    width: "100%",
    borderRadius: "30px",
    letterSpacing: "1.5px",
    padding: "15px",
    fontSize: "18px",
    transition: "all 0.3s ease",
    fontWeight: 'bold',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    color: 'white',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a237e 0%, #4a148c 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
      }}
    >
      <div 
        className={`container ${isVisible ? 'fade-in' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <div className="row">
          <div className="col s12 center-align">
            <h1 className="white-text" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', fontSize: 'calc(24px + 2vw)' }}>
              Welcome to <span style={{ fontFamily: "monospace", color: "#FFD700" }}>Enat College</span>
            </h1>
            <h3 className="white-text" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)', fontSize: 'calc(16px + 1vw)' }}>
              AI-Based Online Examination Proctoring System
            </h3>
            <p className="flow-text white-text" style={{ maxWidth: '800px', margin: '20px auto', fontSize: 'calc(14px + 0.5vw)' }}>
              Empowering Education, Ensuring Integrity: Your Future, Our Priority
            </p>
            <br />
            <div className="row" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {[
                { icon: FaRobot, title: "AI-Powered", description: "Advanced AI algorithms for accurate proctoring" },
                { icon: FaLaptop, title: "Remote Exams", description: "Take exams from anywhere, anytime" },
                { icon: FaShieldAlt, title: "Secure Platform", description: "Ensuring exam integrity and data protection" },
                { icon: FaGraduationCap, title: "Fair Assessment", description: "Promoting academic honesty and equal opportunities" }
              ].map((card, index) => (
                <div className="col s12 m6 l3" key={index}>
                  <div 
                    style={cardStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(31, 38, 135, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
                    }}
                  >
                    <card.icon size={50} color="#FFD700" />
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row" style={{ maxWidth: '500px', margin: '40px auto 0' }}>
              <div className="col s12 m6" style={{ marginBottom: '20px' }}>
                <Link
                  to="/register"
                  style={{
                    ...buttonStyle,
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    color: '#000',
                    boxShadow: '0 8px 15px rgba(255, 215, 0, 0.3)',
                  }}
                  className="waves-effect waves-light hoverable"
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 12px 20px rgba(255, 215, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 8px 15px rgba(255, 215, 0, 0.3)';
                  }}
                >
                  <FaUserPlus style={{ marginRight: '10px' }} /> Get Started
                </Link>
              </div>
              <div className="col s12 m6">
                <Link
                  to="/login"
                  style={{
                    ...buttonStyle,
                    background: 'linear-gradient(45deg, #FFFFFF, #F0F0F0)',
                    color: '#000',
                    boxShadow: '0 8px 15px rgba(255, 255, 255, 0.2)',
                  }}
                  className="waves-effect waves-light hoverable"
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 12px 20px rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 8px 15px rgba(255, 255, 255, 0.2)';
                  }}
                >
                  <FaSignInAlt style={{ marginRight: '10px' }} /> Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;