import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[4];
    
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
          A comprehensive dashboard tracking monthly dispatch reliability and visualizing detailed breakdowns of technical delays and engine lease statuses. 
          Designed to help engineering and operational teams monitor disruption trends, classify delay impacts, follow up on mitigation programs, and ensure preventive actions are executed in a timely manner.
        </p>
      
        <br />
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Tracks key metrics such as Dispatch Reliability (DR), Contribution of Technical Delay (COTD), Revenue Take-Offs, and delay classifications</li>
                <li>Integrates engine lease monitoring to show monthly trends of accepted, installed, and rejected units</li>
                <li>Classifies delays by time bucket and root cause to prioritize high-impact issues</li>
                <li>Dedicated page for delay follow-up: tracks discussion status, unit-in-charge responsibilities, and program accomplishment vs. overdue status</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Power BI for visualization and dashboard interactivity</li>
                <li>Excel as the structured monthly data source</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Monthly Excel files from SharePoint folders, automatically loaded and refreshed</li>
                <li>Data from two perspectives: Operator-side and MRO-side, processed to compute metrics like tech delay impact and DR</li>
                <li>Delay events classified by duration buckets and mapped to ATA chapters to highlight recurring technical issues</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Developed the full ETL pipeline using SharePoint folder connections and Power BI transformations</li>
                <li>Built the dashboard UI with toggle views for YTD vs. last-12-months, and created drillthrough navigation to detailed delay cases</li>
                <li>Created delay program follow-up interface to show status, progress, and accountability</li>
                <li>Performed regular monthly updates by collecting, processing, and integrating data from multiple manual report sources</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Toggle between YTD metrics and rolling metrics using bookmarks and relative date filters</li>
                <li>Drillthrough insights from monthly KPIs to individual delay records, aircraft details, and event classifications</li>
                <li>Dedicated page for delay follow-up, showing program status, open vs. closed items, and unit-in-charge accountability</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Handled SharePoint folder connections to allow automatic monthly data loading</li>
                <li>Used bookmarks to simulate view switching and maintain a clean layout</li>
                <li>Cross-validated summary vs. detail data to ensure consistency between different data sources</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Improved visibility into technical delay trends and lease statuses across departments</li>
                <li>Accelerated engineering response to repeated disruptions via clear delay breakdown and classification</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Integrating SharePoint as a dynamic data source supports sustainable dashboard updates</li>
                <li>Clear navigation and toggling features improve user accessibility and data interpretation</li>
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
