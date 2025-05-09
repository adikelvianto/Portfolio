import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[9];
    
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
          Tracks monthly trends of engine-related reliability issues—such as PFRs, AMLs, delays, engine removals/installations, and CNRs—across the fleet. 
          Consolidates the last 3 months into a single view to identify recurring issues and support targeted engineering decisions.
        </p>

        <br/>

        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Developed a dashboard to summarize engine reliability trends using data from PFRs, AMLs, delays, engine removals/installations, and CNR reports</li>
                <li>Displayed 3-month aggregated views to facilitate pattern recognition and issue prioritization</li>
                <li>Enabled drill-through functionality to access detailed issue insights</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for dashboard development and visualization</li>
                <li>Palantir Notepad for composing insights and summaries</li>
                <li>Palantir Automate for scheduling and email distribution</li>
              </ul>
            </td>
          </tr>

          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Utilized PFR, AML, delay, CNR, component removal/installation, and aircraft utilization datasets</li>
                <li>Performed data transformation and cross-joining to synchronize summary and detail views</li>
                <li>Calculated monthly trend rates normalized per 100 flight cycles or flight hours</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Designed dynamic views with drill-throughs for detailed insights by category</li>
                <li>Developed logic to identify repetitive PFR issues and monitor affected aircraft</li>
                <li>Visualized top issues for each source (PFR, AML, delay, CNR) with trend charts</li>
                <li>Ensured fairness in comparison by normalizing issue rates</li>
                <li>Created an automated scheduling pipeline and customized report layout</li>
                <li>Documented and monitored dashboard performance and reliability</li>
              </ul>
            </td>
          </tr>

          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Normalized trend rates per 100 flight cycles or flight hours for objective analysis</li>
                <li>Interactive filters by aircraft registration, issue type, ATA chapter, and fleet size</li>
                <li>Drill-through capability connecting summary graphs to detailed issue records</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Transformed and standardized data from multiple sources including PFR, AML, delay, and CNR reports</li>
                <li>Synchronized summary and detail views to maintain data consistency</li>
                <li>Balanced high-level clarity with detailed traceability to support engineering decisions</li>
              </ul>
            </td>
          </tr>

          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Enhanced visibility into engine reliability trends across the fleet</li>
                <li>Supported data-driven decisions to improve fleet reliability</li>
                <li>Automated the monthly delivery of engine reliability reports</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Cross-linking summary and detail views significantly improves dashboard usability</li>
                <li>Separating engine and airframe dashboards provides clarity for targeted users</li>
                <li>Normalizing trends based on flight activity is essential for fair performance benchmarking</li>
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