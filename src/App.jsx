import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/global.scss"
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more Route components for other routes */}
      </Routes>
    </Router>
  );
}

export default App;
