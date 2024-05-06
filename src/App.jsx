import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/global.scss"
import Home from "./screens/home/Home";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
