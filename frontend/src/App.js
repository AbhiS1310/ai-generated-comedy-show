import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import GenerateScriptPage from './pages/GenerateScriptPage.jsx';
import VideoPage from './pages/VideoPage.jsx';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ActivationPage from './pages/ActivationPage.jsx';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/HomePage/NavBar.jsx';
import Footer from './components/HomePage/Footer.jsx';

import { AuthProvider } from './context/AuthContext';


const App = () => {
  
  return (
    <>
    <AuthProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate-script" element={<GenerateScriptPage />} />
        <Route path="/generate-video" element={<VideoPage videoUrl={"https://www.youtube.com/watch?v=BJCsW_or9Ks"} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
      </Routes>
      <Footer/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
    </AuthProvider>
    </>
  );
};

export default App;

