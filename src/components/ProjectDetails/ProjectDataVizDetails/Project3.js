import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { SiPalantir } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="Component Lifecycle & Tracking System"
      date="December 2022"
      content={`
        <p class="project-details-p">
          Developed a traceability dashboard to track each component’s lifecycle—from removal to reinstallation—by linking part number events with TFU and ISI documentation. Supported proactive reliability analysis and streamlined issue detection.
        </p>
      
        <br/>
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Mapped component journeys across removals and installations</li>
                <li>Correlated part numbers with TFU/ISI documents for insights</li>
                <li>Enabled traceability of recurring part issues per aircraft</li>
                <li>Used interactive filters for deep-dive diagnostics</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for timeline creation</li>
                <li>Cross-dataset relations between TFU/ISI and part events</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Datasets: component removal, installation, TFU, ISI</li>
                <li>Mapped part numbers to TFU/ISI documentation</li>
                <li>Cleansed and normalized multi-source inputs</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Data wrangling to align component transactions</li>
                <li>Built linkages between component transaction and supporting docs (ISI, TFU)</li>
                <li>Maintained live data pipeline for updated visibility</li>
                <li>Created full project documentation</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Track components using part & serial numbers</li>
                <li>Match events with TFU/ISI reliability records</li>
                <li>Dynamic filtering: by aircraft, part, document, ATA, and more</li>
                <li>Exclude noise data with reason-based filters</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>TFU/ISI format inconsistency – unified via custom mappings</li>
                <li>Missing part references – resolved with component correlation logic</li>
                <li>Complex document-part relations – used multi-index joins</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Mapped full lifecycle of parts for enhanced traceability</li>
                <li>Linked TFU/ISI directly with actual part removals</li>
                <li>Reduced tracing time for engineers</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Part traceability improves when documents are tightly linked</li>
                <li>Clear data relations help reduce ambiguity in root cause analysis</li>
                <li>Interactive filters enable scalable diagnosis of part issues</li>
                <li>Active data pipelines ensure up-to-date decision support</li>
              </ul>
            </td>
          </tr>
        </table>
      `}
      num_of_icon={1}
      icon1={() => <SiPalantir />}
      hasDemo={false}
      hasGithub={false}   
   />
   </Container>
  );
}

export default ProjectList;
