import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Room from "./view/Room";
import Checkin from "./view/Checkin";
import Checkout from "./view/Checkout";
import Edit from "./view/Edit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Room />} />
          <Route path="/checkin" element={<Checkin />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;