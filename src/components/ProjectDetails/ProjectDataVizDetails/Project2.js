import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[18];
    
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
          Built an integrated timeline dashboard combining five aircraft problem datasets—PFRs, AML entries, component removals, delays, and CNRs—using Palantir Contour. Enabled detailed trend and rate analysis to uncover recurring reliability patterns across fleet operations.
        </p>
      
        <br/>
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Unified disparate datasets into a cohesive aircraft timeline</li>
                <li>Tracked PFRs, AML entries, component removals, delays, and CNRs</li>
                <li>Enabled monthly occurrence rates and pattern recognition</li>
                <li>Dynamic filtering supports deep investigations by engineers</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for dashboard development</li>
                <li>Dynamic filter logic implementation</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Five distinct datasets: PFRs, AML, removals, delays, and CNRs</li>
                <li>Data cleansing & unifying metadata formats</li>
                <li>Linked to aircraft utilization data for calculating occurrence rate metrics</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Performed end-to-end data cleansing & transformation</li>
                <li>Developed dashboard UI with dynamic filters</li>
                <li>Maintained dataset streaming and documentation</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Dynamic filtering by aircraft type, regis, document, ATA, date, etc.</li>
                <li>Combined occurrence rate logic with flight cycles</li>
                <li>Cross-dataset linking</li>
                <li>Visual trendline by document type for quick diagnostics</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Multi-dataset correlation – established cross-referencing keys</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Successfully merged five complex datasets into one timeline</li>
                <li>Enabled engineers to trace event patterns per aircraft</li>
                <li>Improved detection of recurring or chronic technical issues</li>
                <li>Enhanced reliability decision-making through visual analytics</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Efficient data merging and cleaning strategies are critical</li>
                <li>Cross-matching metadata enables new layers of insight</li>
                <li>Dynamic filters significantly enhance user exploration power</li>
                <li>Clear data documentation ensures project scalability</li>
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