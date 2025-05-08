import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { SiPalantir } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="RIL (Retrofit Information Letter) Compliance Tracker"
      date="November 2024"
      content=
      {`
        <p class="project-details-p">
          Monitors all issued and upcoming Retrofit Information Letters (RILs), comparing SB accomplishment data with manual status entries by integrating static inputs into dynamic datasets using Palantir Fusion Sheets.
        </p>
      
        <br />
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Developed a dynamic dashboard to monitor all issued and upcoming RILs across the fleet</li>
                <li>Automatically tracked RIL revision updates, ensuring only the latest versions are used</li>
                <li>Incorporated SB (Service Bulletin) accomplishment data to provide context on RIL completion progress and alignment</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for dashboard development and data visualization</li>
                <li>Palantir Fusion Sheets for integrating external data into live datasets beyond Skywise sources</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Created a unified dataset by cross joining multiple shared Airbus data sources, with schedule refresh logic for automated updates</li>
                <li>Filtered RIL records to retain only the latest revision for each document</li>
                <li>Linked related document references (originally nested in single rows) using array structures for accurate mapping</li>
                <li>Merged live Skywise data with manually curated inputs from Fusion Sheets to ensure data completeness</li>
                <li>Integrated SB accomplishment data for enriched insight into RIL compliance and relevance</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Designed and implemented preprocessing pipelines for RIL revision tracking and document mapping</li>
                <li>Developed the dashboard layout and filter logic for intuitive navigation</li>
                <li>Managed the integration of Palantir Fusion Sheets with Palantir Contour dashboards</li>
                <li>Periodically monitored data trends and ensured the health of data pipelines for real-time RIL compliance updates</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Live tracking of RIL issuance and accomplishment status across all aircraft</li>
                <li>Cross-referenced SB accomplishment data with RIL targets to identify gaps and completion accuracy</li>
                <li>Interactive filters to search by RIL number, ATA chapter, aircraft type, required material or man-hours, and RIL status</li>
                <li>Automatic data appending and revision validation using Skywise pipelines</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Ensured only the most recent revision of each RIL was used by applying advanced filtering logic</li>
                <li>Mapped multiple document references into RIL rows using array-based transformations</li>
                <li>Handled integration of static manual inputs through Fusion Sheets with dynamic Skywise data — successfully managed a hybrid dataset</li>
                <li>Aligned SB accomplishment information against RIL completion metrics for consistency</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Consolidated RIL tracking into a unified, interactive dashboard accessible across departments</li>
                <li>Enabled real-time analysis and traceability of all RILs, categorized by issuance, progress, and completion status</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Gained experience combining dynamic Palantir datasets with static manual inputs without disrupting automation</li>
                <li>Discovered that mismatches between Airbus data and external manual records can cause RILs to be overlooked—highlighting the need for alignment checks</li>
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
