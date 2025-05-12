import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[3];
    
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
          Provides oversight of newly issued and revised Service Bulletins (SB) by identifying which bulletins are effective for CTV’s fleet, ensuring that compliance tasks are not overlooked. 
          This dashboard supports engineering teams in tracking open SB items, recognizing new or revised documents, and maintaining airworthiness visibility.
        </p>
      
        <br />
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Identifies which SBs are applicable to CTV's fleet by matching aircraft MSN against each SB’s affected MSN range</li>
                <li>Classifies whether the SB is newly issued or a revised version, keeping only the latest revision in view</li>
                <li>Displays SBs that have not yet been reported as accomplished, helping highlight pending compliance items</li>
                <li>Supports airworthiness tracking and improves visibility of overlooked service bulletins</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for data processing and visualization</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Processed large SB dataset from Airbus to filter only those applicable to CTV fleet</li>
                <li>Crosschecked CTV MSNs against affected MSN ranges in each SB row using array intersection logic</li>
                <li>Detected and separated newly issued SBs (only one version exists) from revised ones (multiple rows, keep latest)</li>
                <li>Linked with accomplishment data to identify uncompleted SBs across both new and revised groups</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Created the logic to check MSN overlaps using array matching in Palantir Contour</li>
                <li>Built classification logic to differentiate new vs. revised SBs and isolate the latest revision</li>
                <li>Designed the dashboard to allow users to filter SBs by aircraft registration, ATA chapter, date, and accomplishment status</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Dynamic filter options by aircraft, ATA chapter, date range, and SB type (new or revised)</li>
                <li>View that highlights SBs with no accomplishment record for easy tracking</li>
                <li>Accurate fleet matching to prevent overlooked SB actions</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Developed method to match each SB’s MSN range against CTV’s aircraft MSNs in Palantir Contour, which lacks native support for array intersection</li>
                <li>Classifying revised SBs correctly while handling multiple versions for the same reference</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Improved engineering visibility on service bulletins requiring follow-up or reporting</li>
                <li>Helped reduce risk of overlooked airworthiness tasks by automatically surfacing effective and unaccomplished SBs</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Array matching logic can be custom-implemented to compensate for unavailable native functions</li>
                <li>Clear categorization of SB status (new vs. revised) is essential to avoid duplication and confusion in compliance tracking</li>
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
