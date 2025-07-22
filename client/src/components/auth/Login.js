import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { FaEnvelope, FaLock, FaSignInAlt, FaUserAstronaut } from "react-icons/fa";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      isLoaded: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 100);
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors, isLoaded } = this.state;
    return (
      <div style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a237e 0%, #4a148c 100%)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}>
        <div className="container">
          <div className="row" style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
            <div className="col s12">
              <Link to="/" className="btn-flat waves-effect" style={{ 
                position: "absolute", 
                top: "20px", 
                left: "20px", 
                color: "white",
                display: "flex",
                alignItems: "center",
                transition: "all 0.3s ease"
              }}>
                <i className="material-icons left">keyboard_backspace</i> Back to home
              </Link>
              <div 
                className="col s12" 
                style={{ 
                  background: "rgba(255, 255, 255, 0.1)", 
                  backdropFilter: "blur(20px)",
                  padding: "40px", 
                  borderRadius: "20px", 
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
                  opacity: isLoaded ? 1 : 0,
                  transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                  <FaUserAstronaut size={60} color="#ffffff" />
                  <h4 style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.2)", marginTop: "20px" }}>
                    <b>Login</b>
                  </h4>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-field col s12" style={{ position: "relative", marginBottom: "25px" }}>
                    <FaEnvelope style={{ position: "absolute", top: "12px", left: "10px", color: "rgba(255,255,255,0.7)" }} />
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email || errors.emailnotfound
                      })}
                      style={{ 
                        color: "#ffffff", 
                        borderBottom: "2px solid rgba(255,255,255,0.5)", 
                        paddingLeft: "35px",
                        boxShadow: "0 1px 0 0 rgba(255,255,255,0.1)",
                        transition: "all 0.3s ease"
                      }}
                    />
                    <label htmlFor="email" style={{ color: "rgba(255,255,255,0.7)", paddingLeft: "35px" }}>Email</label>
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>
                  <div className="input-field col s12" style={{ position: "relative", marginBottom: "25px" }}>
                    <FaLock style={{ position: "absolute", top: "12px", left: "10px", color: "rgba(255,255,255,0.7)" }} />
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                      style={{ 
                        color: "#ffffff", 
                        borderBottom: "2px solid rgba(255,255,255,0.5)", 
                        paddingLeft: "35px",
                        boxShadow: "0 1px 0 0 rgba(255,255,255,0.1)",
                        transition: "all 0.3s ease"
                      }}
                    />
                    <label htmlFor="password" style={{ color: "rgba(255,255,255,0.7)", paddingLeft: "35px" }}>Password</label>
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </div>
                  <div className="col s12" style={{ textAlign: "center" }}>
                    <button
                      style={{
                        width: "100%",
                        borderRadius: "30px",
                        letterSpacing: "1.5px",
                        marginTop: "2rem",
                        background: "linear-gradient(45deg, #ff6b6b, #feca57)",
                        border: "none",
                        color: "white",
                        padding: "15px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                        textTransform: "uppercase"
                      }}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable"
                    >
                      <FaSignInAlt style={{ marginRight: "10px" }} /> Login
                    </button>
                  </div>
                </form>
                <p className="white-text" style={{ textAlign: "center", marginTop: "30px", fontSize: "14px" }}>
                  Don't have an account? <Link to="/register" style={{ color: "#feca57", fontWeight: "bold", textDecoration: "underline" }}>Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);