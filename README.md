# 🎓 Proctor - AI-Powered Online Exam Monitoring System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat&logo=TensorFlow&logoColor=white)](https://www.tensorflow.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## 🎯 Project Background

This project was developed during my Machine Learning internship at Enat College Shashemene. The system was designed to address the growing need for reliable remote examination proctoring, combining cutting-edge ML technologies with practical educational requirements.

## 🚀 Overview

Proctor is a state-of-the-art online examination proctoring system that leverages artificial intelligence and machine learning to ensure academic integrity during remote examinations. Built with the MERN stack and powered by TensorFlow.js, it provides real-time monitoring capabilities through advanced computer vision algorithms.

![Dashboard Preview](dashboard.png)

## 🤖 AI & ML Features

### 1. Real-time Object Detection
- Powered by TensorFlow.js and COCO-SSD model
- Detects unauthorized objects during exams (phones, books, additional persons)
- Real-time alerts for suspicious items
- Low-latency processing for immediate response

### 2. Pose Detection & Tracking
- Implements PoseNet for skeletal tracking
- Monitors student position and movements
- Detects suspicious head movements and postures
- Alerts for potential cheating behaviors

### 3. Automated Monitoring
- Real-time analysis of student behavior
- Automated logging of suspicious activities
- AI-powered risk assessment
- Instant notifications for instructors

## 🎯 Key Features

- 🔐 **Advanced Authentication System**
  - Role-based access control (Student/Professor)
  - JWT-based secure sessions
  - Protected examination routes

- 📊 **Comprehensive Dashboards**
  - Professor Dashboard
    - Real-time monitoring interface
    - Student activity logs
    - Exam management tools
    - Analytics and reports
  - Student Dashboard
    - Upcoming exam schedule
    - Exam instructions
    - Real-time feedback
    - Performance history

- 🛡️ **Security Features**
  - End-to-end encryption
  - Secure API endpoints
  - Protected exam environments
  - Data privacy compliance

## 🛠️ Technical Stack

### Frontend
- **React.js** - UI framework
- **Redux** - State management
- **TensorFlow.js** - ML models
- **Material-UI** - Component library
- **WebRTC** - Real-time video processing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Passport.js** - Authentication
- **JWT** - Token-based security

### ML Models
- **COCO-SSD** - Object detection
- **PoseNet** - Pose estimation
- **TensorFlow.js** - Model inference

## 🚀 Getting Started

### Prerequisites
- Node.js (v16.x recommended)
- MongoDB
- npm or yarn
- Webcam access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Misikirayu/proctor.git
   cd proctor
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install --legacy-peer-deps
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=3001
   ```

5. **Run the application**
   ```bash
   # In the root directory
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## 💻 Usage

### For Professors
1. **Exam Creation**
   - Create new exams
   - Set duration and rules
   - Configure monitoring settings
   - Assign to students

2. **Monitoring Dashboard**
   - View real-time student feeds
   - Monitor AI-detected events
   - Review automated logs
   - Generate reports

### For Students
1. **Exam Taking**
   - Join scheduled exams
   - View real-time warnings
   - Submit responses
   - Check results

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- TensorFlow.js team for the amazing ML models
- MongoDB team for the robust database solution
- React community for the powerful frontend tools
- All contributors who have helped shape this project

## 📞 Contact

For any queries or support, please open an issue in the repository.

---

Made with ❤️ by Misikir Ayu | Machine Learning Intern @ Enat College Shashemene 
