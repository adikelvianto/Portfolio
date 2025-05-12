import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[2];
    
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
          A Power BI-based executive dashboard providing end-to-end visibility into maintenance execution timelines and cost tracking for engines, APUs, airframes, and landing gears. 
          The tool tracks actual shop visits against monthly plans, incorporates plan revisions, and visualizes budget versus actual payments—enhancing transparency and accountability across departments.
        </p>
      
        <br />
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Designed and developed a centralized dashboard to monitor shop visit progress and cost performance in near real-time</li>
                <li>Converted Excel-based reports into an interactive and responsive Power BI environment</li>
                <li>Implemented dynamic filtering and dual Gantt chart views to compare planned versus actual timelines</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Power BI for building dynamic dashboards with restricted access and drill-through capabilities</li>
                <li>Microsoft Excel as the editable data source for PICs (Persons in Charge)</li>
                <li>Power Query to ensure all Excel changes trigger automatic Power BI report refreshes</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Processed raw Excel data using Power Query to replicate legacy report logic</li>
                <li>Created logic to shift planned cost timelines and track progress against actuals</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Modeled dynamic logic to monitor progress against the end date of each event monthly</li>
                <li>Built drill-through functionality to access MRO details, budget data, and notes</li>
                <li>Designed layered Gantt charts to compare planned and actual timelines</li>
                <li>Implemented Power Automate triggers for automatic updates when PICs edit source data</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Monthly shop visit progress tracker</li>
                <li>Planned vs actual Gantt chart with parent-child event structures</li>
                <li>Drill-through detail view for each maintenance project and category</li>
                <li>Category and time-frame filtering for tailored analysis</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Replicating complex Excel logic – resolved through iterative Power Query transformations</li>
                <li>Tracking plan revisions – solved with layered Gantt timeline visualization</li>
                <li>Making complex data executive-friendly – achieved with drill-through and intuitive visuals</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Delivered faster insights into cost deviations and schedule changes</li>
                <li>Improved transparency and coordination across departments</li>
                <li>Enabled more accurate forecasting through planning vs actual comparisons</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Translating Excel logic into Power BI requires attention to accuracy and consistency</li>
                <li>Visual comparisons are key to identifying discrepancies and adjusting future plans effectively</li>
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
