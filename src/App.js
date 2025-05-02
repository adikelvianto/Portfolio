import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProjectsDataViz from "./components/ProjectsDataViz/Projects";
import ProjectsDataScience from "./components/ProjectsDataScience/Projects";
import ProjectsBackEnd from "./components/ProjectsBackEnd/Projects";
import ProjectDataVizDetails1 from "./components/ProjectDetails/ProjectDataVizDetails/Project1";
import ProjectDataVizDetails2 from "./components/ProjectDetails/ProjectDataVizDetails/Project2";
import ProjectDataVizDetails3 from "./components/ProjectDetails/ProjectDataVizDetails/Project3";
import ProjectDataVizDetails4 from "./components/ProjectDetails/ProjectDataVizDetails/Project4";
import ProjectDataSciDetails1 from "./components/ProjectDetails/ProjectDataSciDetails/Project1";
import ProjectDataSciDetails2 from "./components/ProjectDetails/ProjectDataSciDetails/Project2";
import ProjectDataSciDetails3 from "./components/ProjectDetails/ProjectDataSciDetails/Project3";
import ProjectDataSciDetails4 from "./components/ProjectDetails/ProjectDataSciDetails/Project4";
import ProjectBackEndDetails1 from "./components/ProjectDetails/ProjectBackEndDetails/Project1";
import ProjectBackEndDetails2 from "./components/ProjectDetails/ProjectBackEndDetails/Project2";
import ProjectBackEndDetails3 from "./components/ProjectDetails/ProjectBackEndDetails/Project3";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList/Projects";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project_dataviz" element={<ProjectsDataViz />} />
            <Route path="/project_datascience" element={<ProjectsDataScience />} />
            <Route path="/project_backend" element={<ProjectsBackEnd />} />
            <Route path="/projectlist" element={<ProjectList />} />
            <Route path="/about" element={<About />} />
            <Route path="/project_dataviz/details_1" element={<ProjectDataVizDetails1 />} />
            <Route path="/project_dataviz/details_2" element={<ProjectDataVizDetails2 />} />
            <Route path="/project_dataviz/details_3" element={<ProjectDataVizDetails3 />} />
            <Route path="/project_dataviz/details_4" element={<ProjectDataVizDetails4 />} />
            <Route path="/project_datasci/details_1" element={<ProjectDataSciDetails1 />} />
            <Route path="/project_datasci/details_2" element={<ProjectDataSciDetails2 />} />
            <Route path="/project_datasci/details_3" element={<ProjectDataSciDetails3 />} />
            <Route path="/project_datasci/details_4" element={<ProjectDataSciDetails4 />} />
            <Route path="/project_backend/details_1" element={<ProjectBackEndDetails1 />} />
            <Route path="/project_backend/details_2" element={<ProjectBackEndDetails2 />} />
            <Route path="/project_backend/details_3" element={<ProjectBackEndDetails3 />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;