import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//components
import Home from "./pages/Home";

const App = () => {

  return (
    <Router>
      <ToastContainer />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;