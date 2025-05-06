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
import ProjectDataVizDetails5 from "./components/ProjectDetails/ProjectDataVizDetails/Project5";
import ProjectDataVizDetails6 from "./components/ProjectDetails/ProjectDataVizDetails/Project6";
import ProjectDataVizDetails7 from "./components/ProjectDetails/ProjectDataVizDetails/Project7";
import ProjectDataVizDetails8 from "./components/ProjectDetails/ProjectDataVizDetails/Project8";
import ProjectDataVizDetails9 from "./components/ProjectDetails/ProjectDataVizDetails/Project9";
import ProjectDataVizDetails10 from "./components/ProjectDetails/ProjectDataVizDetails/Project10";
import ProjectDataVizDetails11 from "./components/ProjectDetails/ProjectDataVizDetails/Project11";
import ProjectDataVizDetails12 from "./components/ProjectDetails/ProjectDataVizDetails/Project12";
import ProjectDataVizDetails13 from "./components/ProjectDetails/ProjectDataVizDetails/Project13";
import ProjectDataVizDetails14 from "./components/ProjectDetails/ProjectDataVizDetails/Project14";
import ProjectDataVizDetails15 from "./components/ProjectDetails/ProjectDataVizDetails/Project15";
import ProjectDataVizDetails16 from "./components/ProjectDetails/ProjectDataVizDetails/Project16";
import ProjectDataVizDetails17 from "./components/ProjectDetails/ProjectDataVizDetails/Project17";
import ProjectDataVizDetails18 from "./components/ProjectDetails/ProjectDataVizDetails/Project18";
import ProjectDataVizDetails19 from "./components/ProjectDetails/ProjectDataVizDetails/Project19";
import ProjectDataVizDetails20 from "./components/ProjectDetails/ProjectDataVizDetails/Project20";
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
            <Route path="/project_dataviz/details_5" element={<ProjectDataVizDetails5 />} />
            <Route path="/project_dataviz/details_6" element={<ProjectDataVizDetails6 />} />
            <Route path="/project_dataviz/details_7" element={<ProjectDataVizDetails7 />} />
            <Route path="/project_dataviz/details_8" element={<ProjectDataVizDetails8 />} />
            <Route path="/project_dataviz/details_9" element={<ProjectDataVizDetails9 />} />
            <Route path="/project_dataviz/details_10" element={<ProjectDataVizDetails10 />} />
            <Route path="/project_dataviz/details_11" element={<ProjectDataVizDetails11 />} />
            <Route path="/project_dataviz/details_12" element={<ProjectDataVizDetails12 />} />
            <Route path="/project_dataviz/details_13" element={<ProjectDataVizDetails13 />} />
            <Route path="/project_dataviz/details_14" element={<ProjectDataVizDetails14 />} />
            <Route path="/project_dataviz/details_15" element={<ProjectDataVizDetails15 />} />
            <Route path="/project_dataviz/details_16" element={<ProjectDataVizDetails16 />} />
            <Route path="/project_dataviz/details_17" element={<ProjectDataVizDetails17 />} />
            <Route path="/project_dataviz/details_18" element={<ProjectDataVizDetails18 />} />
            <Route path="/project_dataviz/details_19" element={<ProjectDataVizDetails19 />} />
            <Route path="/project_dataviz/details_20" element={<ProjectDataVizDetails20 />} />
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