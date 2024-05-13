import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/global.scss"
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

const App = () =>
    <Provider store={store}>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </Provider>




export default App;
