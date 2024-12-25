import React from "react";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import { Route, Routes } from "react-router-dom";
import List from "./components/context/List";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import Help from "./components/Help";

function App() {
  return (
    <>
      <div className="bg-white text-black dark:bg-black dark:text-white ">
        <List>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </List>
      </div>
    </>
  );
}

export default App;
