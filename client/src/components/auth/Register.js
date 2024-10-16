import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { FaUser, FaEnvelope, FaLock, FaUserGraduate, FaUserPlus, FaRocket } from "react-icons/fa";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      userType: false,
      errors: {},
      isLoaded: false
    };
  }

  componentWillReceiveProps(nextProps) {
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

  onToggle = e => {
    this.setState({ [e.target.id]: !this.state.userType });
  }

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      userType: this.state.userType,
    };
    this.props.registerUser(newUser, this.props.history); 
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
        backgroundAttachment: "fixed"
      }}>
        <div className="container">
          <div className="row" style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
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
                <h4 style={{ textAlign: "center", marginBottom: "30px", color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
                  <FaRocket style={{ marginRight: "10px" }} />
                  <b>Join Enat College</b>
                </h4>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-field col s12" style={{ position: "relative", marginBottom: "25px" }}>
                    <FaUser style={{ position: "absolute", top: "12px", left: "10px", color: "rgba(255,255,255,0.7)" }} />
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("", { invalid: errors.name })}
                      style={{ 
                        color: "#ffffff", 
                        borderBottom: "2px solid rgba(255,255,255,0.5)", 
                        paddingLeft: "35px",
                        boxShadow: "0 1px 0 0 rgba(255,255,255,0.1)",
                        transition: "all 0.3s ease"
                      }}
                    />
                    <label htmlFor="name" style={{ color: "rgba(255,255,255,0.7)", paddingLeft: "35px" }}>Name</label>
                    <span className="red-text">{errors.name}</span>
                  </div>
                  <div className="input-field col s12" style={{ position: "relative", marginBottom: "25px" }}>
                    <FaEnvelope style={{ position: "absolute", top: "12px", left: "10px", color: "rgba(255,255,255,0.7)" }} />
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", { invalid: errors.email })}
                      style={{ 
                        color: "#ffffff", 
                        borderBottom: "2px solid rgba(255,255,255,0.5)", 
                        paddingLeft: "35px",
                        boxShadow: "0 1px 0 0 rgba(255,255,255,0.1)",
                        transition: "all 0.3s ease"
                      }}
                    />
                    <label htmlFor="email" style={{ color: "rgba(255,255,255,0.7)", paddingLeft: "35px" }}>Email</label>
                    <span className="red-text">{errors.email}</span>
                  </div>
                  <div className="input-field col s12" style={{ position: "relative", marginBottom: "25px" }}>
                    <FaLock style={{ position: "absolute", top: "12px", left: "10px", color: "rgba(255,255,255,0.7)" }} />
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", { invalid: errors.password })}
                      style={{ 
                        color: "#ffffff", 
                        borderBottom: "2px solid rgba(255,255,255,0.5)", 
                        paddingLeft: "35px",
                        boxShadow: "0 1px 0 0 rgba(255,255,255,0.1)",
                        transition: "all 0.3s ease"
                      }}
                    />
                    <label htmlFor="password" style={{ color: "rgba(255,255,255,0.7)", paddingLeft: "35px" }}>Password</label>
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <div className="input-field col s12" style={{ position: "relative", marginBottom: "25px" }}>
                    <FaLock style={{ position: "absolute", top: "12px", left: "10px", color: "rgba(255,255,255,0.7)" }} />
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("", { invalid: errors.password2 })}
                      style={{ 
                        color: "#ffffff", 
                        borderBottom: "2px solid rgba(255,255,255,0.5)", 
                        paddingLeft: "35px",
                        boxShadow: "0 1px 0 0 rgba(255,255,255,0.1)",
                        transition: "all 0.3s ease"
                      }}
                    />
                    <label htmlFor="password2" style={{ color: "rgba(255,255,255,0.7)", paddingLeft: "35px" }}>Confirm Password</label>
                    <span className="red-text">{errors.password2}</span>
                  </div>
                  <div className="switch col s12" style={{ marginBottom: "30px" }}>
                    <label style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff" }}>
                      Student
                      <input type="checkbox" id="userType" checked={this.state.userType} onChange={this.onToggle} />
                      <span className="lever" style={{ margin: "0 10px", background: "rgba(255,255,255,0.3)" }}></span>
                      Instructor <FaUserGraduate style={{ marginLeft: "10px" }} />
                    </label>
                  </div>
                  <div className="col s12" style={{ textAlign: "center" }}>
                    <button
                      style={{
                        width: "100%",
                        borderRadius: "30px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem",
                        background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
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
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                      }}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable"
                    >
                      <FaUserPlus style={{ marginRight: "10px" }} /> Launch Your Journey
                    </button>
                  </div>
                </form>
                <p className="white-text" style={{ textAlign: "center", marginTop: "30px" }}>
                  Already on board? <Link to="/login" style={{ color: "#4ECDC4", fontWeight: "bold", textDecoration: "underline" }}>Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));