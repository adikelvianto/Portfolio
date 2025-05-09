import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dataviz_icon from "../../Assets/Projects/Data Viz Icon.png";
import divvy from "../../Assets/Projects/divvy.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import acfaulttracker from  "../../Assets/Projects/AC_FaultTracker.png";
import comp_life_cycle from "../../Assets/Projects/ComponentLifecycle.png";

export const projects = [
  {
    hasDemo: false,
    hasGithub: false,
    title: "Maintenance Ops Digitalization",
    date: "Ongoing",
    description:
      "A collaborative with the IT division to digitize operational maintenance workflows. Integrates daily aircraft updates, maintenance plans, operational interruptions, and fleet status, complete with Gantt charts and automated email reporting to enhance situational awareness and decision-making.",
    link: "/project_dataviz/details_20",
    projectType: "airline",
    num_of_icon:2,
    icon1:"php",
    icon2:"sqlserver",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "APU Trend Insight",
    date: "April 2025",
    description:
      "Visualizes trends from APU idle and auto shutdown ACMS reports by plotting key parameters to help identify early signs of system degradation or anomalies. Simplifies trend interpretation for engineering teams through clear parameter-based insights.",
    link: "/project_dataviz/details_19",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Fleet Maintenance Program Executive Dashboard",
    date: "March 2025",
    description:
      "Provides high-level visibility into the overall maintenance execution timeline and cost tracking for engines, APUs, airframes, and landing gears. Features monthly shop visit progress against ideal plans, revision history, event summaries, and a financial view comparing planned budgets versus actual payments — all tailored for executive decision-making.",
    link: "/project_dataviz/details_18",
    projectType: "airline",
    num_of_icon:2,
    icon1:"powerbi",
    icon2:"microsoftexcel",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Service Bulletin Compliance Monitoring Dashboard",
    date: "January 2025",
    description:
      "Provides oversight of newly issued or revised Service Bulletins (SB), ensuring visibility of pending actions and preventing overlooked compliance tasks. Supports ongoing airworthiness and maintenance planning.",
    link: "/project_dataviz/details_17",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Airline Dispatch Reliability & Delay Monitoring Dashboard",
    date: "January 2025",
    description:
      "A comprehensive dashboard tracking monthly dispatch reliability with detailed breakdowns of technical delay contributions and engine lease status. Designed to enhance visibility of operational disruptions and support targeted delay reduction strategies.",
    link: "/project_dataviz/details_16",
    projectType: "airline",
    num_of_icon:2,
    icon1:"powerbi",
    icon2:"microsoftexcel",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Daily Engine Oil Consumption Monitoring Tool",
    date: "December 2024",
    description:
      "Processes QAR data to calculate and visualize daily oil consumption per engine, enabling detection of unusual trends and early maintenance action.",
    link: "/project_dataviz/details_15",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "RIL (Retrofit Information Letter) Compliance Tracker",
    date: "November 2024",
    description:
      "Monitors all issued and upcoming Retrofit Information Letters (RILs), comparing SB accomplishment data with manual status entries by integrating static inputs into dynamic datasets using Palantir Fusion Sheets",
    link: "/project_dataviz/details_14",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "LPSOV Valve Response Time Monitoring",
    date: "November 2024",
    description:
      "Fleet-level monitoring of LPSOV (Low Pressure Shutoff Valve) opening times derived from flight data, supporting early detection of system performance degradation.",
    link: "/project_dataviz/details_13",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Reliability Project Tracking & Accomplishment Dashboard",
    date: "November 2024",
    description:
      "A centralized system providing fleet-wide and project-specific views of reliability initiatives. Displays real-time material readiness, maintenance status (Last Done – Next Due), and document references, streamlining project monitoring.",
    link: "/project_dataviz/details_12",
    projectType: "airline",
    num_of_icon:2,
    icon1:"powerbi",
    icon2:"microsoftexcel",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Engine Reliability Trend Dashboard",
    date: "October 2024",
    description:
      "Tracks monthly trends of engine-related reliability issues including PFRs, AMLs, delays, and CNRs. Offers a consolidated 3-month snapshot to highlight recurring problems and support engineering decision-making.",
    link: "/project_dataviz/details_11",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir"
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Airframe Reliability Trend Dashboard",
    date: "October 2024",
    description:
      "Tracks monthly trends of airframe-related reliability issues including PFRs, AMLs, and delays. Consolidates the last 3 months into a single view to highlight recurring issues and support engineering assessments.",
    link: "/project_dataviz/details_10",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir"
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "ACMS Mechanical Advisory Summary Board",
    date: "May 2024",
    description:
      "Summarizes vibration-triggered ACMS advisories (N1/N2-based) across the fleet, helping engineering teams monitor and act on potential engine imbalance or mechanical deterioration.",
    link: "/project_dataviz/details_9",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir"
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Quick Analysis Template for Engine Time Series Data",
    date: "May 2024",
    description:
      "Provides two versions of preprocessing templates for aircraft equipped with QAR or DAR systems. Includes preselected engine parameters (e.g., vibration levels, rotational speeds, flight phases) to accelerate engine data analysis and enable fast anomaly detection",
    link: "/project_dataviz/details_8",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir"
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Technical Repair Request Status Tracker",
    date: "February 2024",
    description:
      "Monitors repair-related technical requests submitted to manufacturers (e.g., Airbus), with clear status tracking and topic categorization. Minimizing the risk of missed or unanswered events.",
    link: "/project_dataviz/details_7",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir"
  },
  {
    imgPath: ecommerce,
    hasDemo: true,
    hasGithub: true,
    title: "Interactive Analysis of Brazilian E-Commerce with Streamlit Dashboard",
    date: "November 2023",
    description:
      "Conducted a full-cycle data analysis on the Brazilian Olist E-commerce dataset using Python, culminating in an interactive Streamlit dashboard. The project involved defining 9 key business questions, performing data wrangling, merging datasets, and creating insightful visualizations to extract trends and improve understanding of marketplace dynamics.",
    demoLink: "https://brazillian-e-commerce.streamlit.app/",
    link: "/project_dataviz/details_6",
    ghLink: "https://github.com/adikelvianto/Brazilian_E-commerce_Dashboard",
    projectType: "personal",
    num_of_icon:3,
    icon1:"python",
    icon2:"streamlit",
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Engine Health Index – Sick Engine Monitoring Tool",
    date: "October 2023",
    description:
      "Ranks engines based on issue severity using a weighted index combining Skywise data (PFR, AML, HIL, delays) and manual inputs (CNRs, powerplant monitoring data). Automatic report generation provides engineering teams with targeted engine health insights.",
    link: "/project_dataviz/details_5",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir"
  },
  {
    hasDemo: false,
    hasGithub: false,
    title: "Aircraft Health Index – Sick Aircraft Monitoring Tool",
    date: "September 2023",
    description:
      "Ranks aircraft based on issue severity using a weighted index derived from Skywise core data (PFR, AML, HIL, delays) and manual inputs (CNR). Automatic report generation delivers engineering insights for prioritized aircraft health management.",
    link: "/project_dataviz/details_4",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir"
  },
  {
    imgPath: comp_life_cycle,
    hasDemo: false,
    hasGithub: false,
    title: "Component Lifecycle & Tracking System",
    date: "December 2022",
    description:
      "Maps each component’s journey—from removal to reinstallation—along with part number associations, TFU/ISI documentation, and related maintenance activity to support traceability and reliability evaluation",
    link: "/project_dataviz/details_3",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir"
  },
  {
    imgPath: acfaulttracker,
    hasDemo: false,
    hasGithub: false,
    title: "Aircraft Fault & Event Correlation Tracker",
    date: "December 2022",
    description:
      "Combines historical PFRs, AML entries, component removals, delays, and CNRs into a synchronized timeline per aircraft. Features monthly trend analysis and occurrence rates to identify reliability patterns.",
    link: "/project_dataviz/details_2",
    projectType: "airline",
    num_of_icon:1,
    icon1:"palantir"
  },
  {
    imgPath: divvy,
    hasDemo: true,
    hasGithub: false,
    title: "Cyclistic Membership Strategy Using R and Divvy 2021 Data",
    date: "October 2022",
    description:
      "A comprehensive case study utilizing the 2021 Divvy bike-share dataset was conducted using R to support Cyclistic’s marketing strategy. The goal was to analyze usage patterns between casual and annual riders to identify actionable insights that could help convert casual users into members.",
    demoLink: "https://www.kaggle.com/code/adikelvianto29/analysis-of-divvy-2021-dataset-using-r",
    link: "/project_dataviz/details_1",
    projectType: "personal",
    num_of_icon:1,
    icon1:"r",
  },
];

function ProjectsDataViz() {

  const location = useLocation();
  const navigate = useNavigate();

  
  
  // Read page query from URL
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;

  // Pagination state
  const [currentPage, setCurrentPage] = useState(initialPage);
  const projectsPerPage = 4;

  useEffect(() => {
    const newPage = parseInt(new URLSearchParams(location.search).get("page")) || 1;
    setCurrentPage(newPage);
  }, [location.search]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    navigate(`?page=${pageNumber}`);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container fluid className="project-sub-section">
        <h1 className="image-with-text">
          <strong className="purple">Data Processing and Visualization</strong>
          <img src={dataviz_icon} alt="" className="aligned-image" />
        </h1>
        <br />
        <h5 style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </h5>

        {/* Pagination Controls */}
        <div style={{ textAlign: "center", marginTop: "20px", position: "relative", zIndex: 2 }}>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <Button
                key={index}
                variant={pageNumber === currentPage ? "primary" : "outline-primary"}
                onClick={() => handlePageChange(pageNumber)}
                style={{ margin: "0 5px" }}
              >
                {pageNumber}
              </Button>
            );
          })}
        </div>
    
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "20px" }}>
          {/* Map through the current projects based on pagination */}
          {currentProjects.map((project, index) => (
            <Col md={3} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                hasDemo={project.hasDemo}
                hasGithub={project.hasGithub}
                title={project.title}
                date={project.date}
                description={project.description}
                link={`${project.link}?page=${currentPage}`}
                demoLink={project.demoLink || ""}
                ghLink={project.ghLink || ""}
                projectType={project.projectType}
                num_of_icon={project.num_of_icon}
                icon1={project.icon1}
                icon2={project.icon2}
                icon3={project.icon3}
                icon4={project.icon4}
                icon5={project.icon5} 
              />
            </Col>
          ))}
        </Row>
        

        <div style={{ textAlign: "center"}}>
          <Link to="/projectlist" className="back-button">
            <Button variant="primary">Back to My Projects</Button>
          </Link>
        </div>
      </Container>
    </Container>
  );
}

export default ProjectsDataViz;