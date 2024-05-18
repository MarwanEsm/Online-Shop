import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import SignUp from "./screens/signUp/SignUp";
import "./style/global.scss"

const App = () =>
    <Provider store={store}>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/login" element={<SignUp />} />
            </Routes>
        </Router>
    </Provider>




export default App;
