import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[15];
    
      // Build dynamic icon props
      const iconProps = {};
      for (let i = 1; i <= project.num_of_icon; i++) {
        const iconName = project[`icon${i}`];
        if (iconName && iconMap[iconName]) {
          iconProps[`icon${i}`] = iconMap[iconName];
        }
      }

  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title={project.title}
      date={project.date}
      num_of_icon={project.num_of_icon}
      {...iconProps}
      hasDemo={project.hasDemo}
      hasGithub={project.hasGithub}
      ghLink={project.ghLink}
      content={`
        <p class="project-details-p">
          Built an automated ranking dashboard for aircraft engines based on issue severity, combining weighted indicators from PFR, AML, HIL, delays, and manual input datasets (CNRs, powerplant monitoring data).
          Delivered scheduled health reports to engineering teams for targeted maintenance planning.
        </p>
      
        <br/>
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Created a weighted engine sick index using PFRs, AMLs, HILs, delays, CNRs, and engine-on-watch data</li>
                <li>Generated automated health snapshots via email</li>
                <li>Enabled detailed drill-through on scoring factors</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for dashboard creation</li>
                <li>Palantir Notepad for structuring report documents</li>
                <li>Palantir Automate for email scheduling</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Created logic to weigh each factor’s contribution</li>
                <li>Linked engine serial numbers with aircraft registration</li>
                <li>Restricted PFR data to the last 20 flight cycles</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Defined weighing logic through cross-team collaboration</li>
                <li>Engineered a dynamic engine-to-aircraft linking model</li>
                <li>Built an auto-scheduling pipeline and customized the report layout</li>
                <li>Documented and monitored dashboard performance</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Engine sick ranking with factor breakdown</li>
                <li>Aircraft data transmission rate for each registration to judge PFR contribution</li>
                <li>Filter by aircraft type, aircraft status, and more</li>
                <li>Drill-through to explore contributing issues</li>
                <li>Configurable thresholds for healthiness categories</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Multi-source parent mapping (aircraft vs ESN) – handled via conditional join rules</li>
                <li>Weighing determination – established cross-team collaboration for insights and recommendations</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Automated delivery of biweekly engine health ranking reports</li>
                <li>Provided a consistent and up-to-date decision basis for maintenance actions</li>
                <li>Increased visibility of top-priority engines</li>
                <li>Significantly reduced manual monitoring workload</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Clear weighing logic is crucial for trustworthy rankings</li>
                <li>Combining automated and manual inputs brings full visibility</li>
                <li>Dynamic thresholding helps teams focus on critical engines</li>
                <li>Preprocessing and filtering ensure stable performance</li>
              </ul>
            </td>
          </tr>
        </table>
      `}
   />
   </Container>
  );
}

export default ProjectList;