import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Sign_In_Up from "./screens/sign_in_up/Sign_In_Up"
import "./style/global.scss"

const App = () =>
    <Provider store={store}>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Sign_In_Up />} />
            </Routes>
        </Router>
    </Provider>




export default App;
