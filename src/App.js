import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Student from "./pages/Student/Student";
import Volunteer from "./pages/Volunteer/Volunteer";
import Mentor from "./pages/Mentor/Mentor";
import Sessions from "./pages/Sessions/Sessions";
import Donor from "./pages/Donor/Donor";
import Review from "./pages/Review/Review";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Home />} /> */}
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/volunteer" element={<Volunteer />} />
          <Route exact path="/mentor" element={<Mentor />} />
          <Route exact path="/sessions" element={<Sessions />} />
          <Route exact path="/donors" element={<Donor />} />
          <Route exact path=":id/sessionreview" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
