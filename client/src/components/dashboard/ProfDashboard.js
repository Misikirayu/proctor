import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import swal from 'sweetalert';
import { logoutUser } from "../../actions/authActions";
import LogsTable from "./LogsTable.js"
import { connect } from "react-redux";
import { FaPlus, FaSignOutAlt, FaRegSave, FaTimes, FaRandom, FaPlay } from 'react-icons/fa';

function ProfDashboard(props){
  const [examDialogOpen, setExamDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [exam_link, setExamLink] = useState("");
  const [date_time_start, setDateTimeStart] = useState(new Date().toISOString().slice(0, 16));
  const [duration, setDuration] = useState(0);
  const [exam_code, setExamCode] = useState("");
  const [errorText, setErrorText] = useState("");
  const [exam_code_search, setExamCodeSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false); // New state for animation
  const axios = require("axios");

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Trigger animation
  }, []);

  function openExamDialog(){
      setExamDialogOpen(true);
  }

  function closeExamDialog(){
      setName("");
      setExamLink("");
      setDateTimeStart(new Date().toISOString().slice(0, 16));
      setDuration(0);
      setExamCode("");
      setErrorText("");
      setExamDialogOpen(false);
  }

  function isUrl(s) {
      var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      return regexp.test(s);
  }
  
  function createExam(){
      if(name===""){
          setErrorText("Name of Exam cannot be empty");
          return;
      }
      if(exam_link===""){
          setErrorText("Exam Link cannot be empty");
          return;
      }
      if(!isUrl(exam_link)){
          setErrorText("Exam Link must be a valid url");
          return;
      }
      if(duration === 0){
          setErrorText("Duration cannot be 0");
          return;
      }
      if(exam_code===""){
          setErrorText("Click Generate exam code to get an exam code first");
          return;
      }
      var current_date_time = new Date();
      if(new Date(date_time_start) < current_date_time){
        setErrorText("Please select a date and time of the future");
        return;
      }
      axios.post('/api/exams/createExam', {
          name: name,
          exam_link: exam_link,
          date_time_start: date_time_start,
          duration: duration,
          exam_code: exam_code,
          prof_email: props.prof_email,
        })
        .then(function (response) {
          console.log(response);
          swal("Exam has been created. Your exam code has been copied to your clipboard, please share it with the students.");
        })
        .catch(function (error) {
          console.log(error);
          swal("Some error occoured in creating the exam");
        });
      
      closeExamDialog();
      
  }

  function generateCode(){
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      var length = 5;
      for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
          charactersLength));
      }
      setExamCode(result);
      navigator.clipboard.writeText(result);
  }
  

  return (
      <div style={{ 
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1a237e 0%, #4a148c 100%)", // Changed background
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 20px",
          width: "100%",
          opacity: isVisible ? 1 : 0, // Apply animation
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Apply animation
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out', // Apply animation
      }}>
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                <b>Welcome,</b> {props.name.split(" ")[0]}
              </h2>
              <p className="flow-text" style={{ color: "white" }}>
                Create a new exam or view results of previous exams.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "2rem" }}>
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
                  onClick={openExamDialog}
                >
                  <FaPlus style={{marginRight: "10px"}} /> Create Exam
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
                >
                  <FaSignOutAlt style={{marginRight: "10px"}} /> Logout
                </button>
              </div>
              <div style={{ 
                marginTop: "2rem", 
                backgroundColor: "white", 
                borderRadius: "10px", 
                padding: "20px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}>
                <LogsTable exam_code={exam_code_search} prof_email={props.prof_email}/>
              </div>

              <Dialog 
                open={examDialogOpen} 
                onClose={closeExamDialog} 
                aria-labelledby="form-dialog-title"
                PaperProps={{
                  style: {
                    background: 'linear-gradient(135deg, #8e9efc 0%, #9d7bc2 100%)',
                    borderRadius: '15px',
                    padding: '20px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                  },
                }}
              >
                <DialogTitle id="form-dialog-title" style={{ color: '#fff', fontWeight: 'bold' }}>Create Exam</DialogTitle>
                <DialogContent>
                  <DialogContentText style={{ color: '#fff', marginBottom: '20px' }}>
                    Enter details for the exam. Press Generate to generate the exam code and share it with the students.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Exam Name"
                    type="text"
                    fullWidth
                    required={true}
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    variant="outlined"
                    style={{ marginBottom: '15px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '5px' }}
                  />
                  <TextField
                    id="examLink"
                    name="examLink"
                    label="Exam Link"
                    margin="dense"
                    variant="outlined"
                    value={exam_link}
                    onChange={(e)=> setExamLink(e.target.value)}
                    required={true}
                    fullWidth
                    style={{ marginBottom: '15px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '5px' }}
                  />
                  <TextField
                    id="dateTimeStart"
                    name="dateTimeStart"
                    label="Exam Start Date and Time"
                    type="datetime-local"
                    margin="dense"
                    variant="outlined"
                    value={date_time_start}
                    onChange={(e) => setDateTimeStart(e.target.value)}
                    required={true}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ marginBottom: '15px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '5px' }}
                  />
                  <TextField
                    id="duration"
                    name="duration"
                    label="Exam duration (minutes)"
                    margin="dense"
                    variant="outlined"
                    value={duration}
                    onChange={(e)=> setDuration(e.target.value)}
                    required={true}
                    fullWidth
                    type="number"
                    style={{ marginBottom: '15px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '5px' }}
                  />
                  <TextField
                    id="exam_code"
                    name="exam_code"
                    label="Exam Code"
                    margin="dense"
                    variant="outlined"
                    value={exam_code}
                    disabled={true}
                    onChange={(e)=> setExamCode(e.target.value)}
                    required={true}
                    fullWidth
                    style={{ marginBottom: '15px', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '5px' }}
                  />
                  <p style={{ color: "red" }}> {errorText}</p>
                  <Button 
                    onClick={generateCode}
                    variant="contained"
                    style={{ 
                      background: "linear-gradient(45deg, #667eea, #764ba2)",
                      color: 'white',
                      marginTop: '10px',
                      marginBottom: '20px',
                      borderRadius: '20px',
                      padding: '10px 20px',
                    }}
                  >
                    <FaRandom style={{ marginRight: '10px' }} /> Generate Exam Code
                  </Button>
                </DialogContent>
                <DialogActions>
                  <Button 
                    onClick={closeExamDialog} 
                    style={{ 
                      background: "linear-gradient(45deg, #FF512F, #DD2476)",
                      color: '#fff',
                      borderRadius: '20px',
                      padding: '10px 20px',
                    }}
                  >
                    <FaTimes style={{ marginRight: '10px' }} /> Close
                  </Button>
                  <Button 
                    onClick={createExam} 
                    style={{ 
                      background: "linear-gradient(45deg, #667eea, #764ba2)",
                      color: 'white',
                      borderRadius: '20px',
                      padding: '10px 20px',
                    }}
                  >
                    <FaRegSave style={{ marginRight: '10px' }} /> Save
                  </Button>
                </DialogActions>
              </Dialog>
              
            </div>
          </div>
        </div>
      </div>
    );
};
ProfDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(ProfDashboard);