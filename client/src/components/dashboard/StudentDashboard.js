import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { useHistory } from "react-router-dom";
import { FaPlay, FaSignOutAlt } from "react-icons/fa";

function StudentDashboard(props) {
    const [exam_code, setExamCode] = useState("");
    const [error, setError] = useState("");
    const [cardPosition, setCardPosition] = useState(-100);

    const axios = require("axios");
    const moment = require("moment");
    const history = useHistory();

    useEffect(() => {
        const animationDuration = 500; // Duration in milliseconds
        const framesPerSecond = 60;
        const totalFrames = (animationDuration / 1000) * framesPerSecond;
        let frame = 0;

        const animateCard = () => {
            if (frame < totalFrames) {
                const progress = frame / totalFrames;
                const newPosition = -100 + progress * 100;
                setCardPosition(newPosition);
                frame++;
                requestAnimationFrame(animateCard);
            }
        };

        requestAnimationFrame(animateCard);
    }, []);

    function checkExamCode(){
        axios.get('/api/exams/examByCode?exam_code='+exam_code)
        .then(function (response) {
            console.log(response);
            let date_string = response.data.date_time_start;
            const exam_date_time_start = new Date(date_string);
            const exam_date_time_end = moment(exam_date_time_start).add(response.data.duration, 'm').toDate();
            const curr_date_time = new Date();

            if(curr_date_time >= exam_date_time_start && curr_date_time < exam_date_time_end){
                var diff = Math.abs(exam_date_time_end - curr_date_time);
                var diff_mins = Math.floor((diff/1000)/60);
                var diff_secs = Math.floor(diff/1000)%60;
                console.log(diff, diff_mins, diff_secs);
                setError("Starting exam");
                let data={
                    exam_code: exam_code,
                    student_name: props.name,
                    student_email: props.student_email,
                    exam_link: response.data.exam_link,
                    prof_email: response.data.prof_email,
                    mins_left: diff_mins,
                    secs_left: diff_secs,
                };
                history.push({ 
                    pathname: '/test',
                    state: data
                })
            }
            else if(curr_date_time >= exam_date_time_end){
                setError("Exam has already ended");
            }
            else {
                setError("Exam has not started now");
            }
        })
        .catch(function (error) {
            console.log(error);
            setError("Exam code is invalid");
        });
    }

    return (
        <div style={{ 
            minHeight: "100vh",
            background: "linear-gradient(135deg, #1a237e 0%, #4a148c 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px 20px",
        }}>
          <div className="row" style={{
              transform: `translateY(${cardPosition}%)`,
              transition: "transform 0.5s ease-out"
          }}>
            <div className="col s12 center-align" style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
            }}>
              <h4 style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
                <b>Hey there,</b> {props.name.split(" ")[0]}
                <p className="flow-text" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Please enter the Exam Code to start the exam
                </p>
              </h4>
                <TextField
                autoFocus
                padding="10px"
                margin="20px"
                variant="standard"
                id="exam_code"
                label="Exam Code"
                type="text"
                required={true}
                value={exam_code}
                onChange={(e)=>setExamCode(e.target.value)}
                InputProps={{
                    style: { color: "#ffffff", borderBottom: "1px solid rgba(255,255,255,0.5)" }
                }}
                InputLabelProps={{
                    style: { color: "rgba(255,255,255,0.7)" }
                }}
                />
              <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "1rem" }}>
                <button
                  style={{
                    width: "200px",
                    borderRadius: "25px",
                    letterSpacing: "1.5px",
                    background: "linear-gradient(45deg, #667eea, #764ba2)",
                    border: "none",
                    color: "white",
                    padding: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onClick={checkExamCode}
                  className="btn btn-large waves-effect waves-light hoverable"
                >
                  <FaPlay style={{marginRight: "10px"}} /> Start Exam
                </button>
                <button
                  style={{
                    width: "200px",
                    borderRadius: "25px",
                    letterSpacing: "1.5px",
                    background: "linear-gradient(45deg, #FF512F, #DD2476)",
                    border: "none",
                    color: "white",
                    padding: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onClick={props.logoutUser}
                  className="btn btn-large waves-effect waves-light hoverable"
                >
                  <FaSignOutAlt style={{marginRight: "10px"}} /> Logout
                </button>
              </div>
              <br/>
              <p style={{ color: "#FF6B6B" }}>{error}</p>
            </div>
        </div>
        </div>
    )
}

StudentDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(StudentDashboard);