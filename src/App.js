import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Student from "./pages/Student/Student";
import Volunteer from "./pages/Volunteer/Volunteer";
import Mentor from "./pages/Mentor/Mentor";
import Sessions from "./pages/Sessions/Sessions";
import AddMentor from "./components/AddMentor";
import AddDonor from "./components/AddDonor";
import TrackDonation from "./components/TrackDonation";
import Home from "./pages/home";
import Donor from "./pages/Donor/Donor";
import Review from "./pages/Review/Review";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Home />} />*/}
          <Route exact path="/dashboard" element={<Home />} /> 
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/volunteer" element={<Volunteer />} />
          <Route exact path="/mentor" element={<Mentor />} />
          <Route exact path="/sessions" element={<Sessions />} />
          <Route exact path="/addmentor" element={<AddMentor/>} />
            <Route exact path="/adddonor" element={<AddDonor/>} />
            <Route exact path="/trackdonation" element={<TrackDonation/>} />
          <Route exact path="/donors" element={<Donor />} />
          <Route exact path=":id/sessionreview" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
