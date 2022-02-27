import './App.css';
import TopBar from './components/topbar';
import Connection from './pages/connection';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Searchpage from './pages/search';
import Gameid from './pages/gameid.js'
import Signup from './pages/signup';
import Favorite from './pages/favorite';
import Remark from './pages/remark.js'

function App() {
    return (
      <div>
        <TopBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search/game/:gamename" element={<Searchpage />} />
          <Route path="/game/:gameid" element={<Gameid />} />
          <Route path="/signin" element={<Connection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/remark" element={<Remark />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
