import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { SiPalantir } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="Aircraft Health Index – Sick Aircraft Monitoring Tool"
      date="September 2023"
      content={`
        <p class="project-details-p">
          Developed an automated aircraft health index dashboard to highlight problematic aircraft using weighted indicators from PFRs, AMLs, HILs, delays, and manual CNR inputs. 
          Delivered regular fleet-level insights to support proactive maintenance scheduling and fleet reliability management.
        </p>
      
        <br/>
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Created a weighted aircraft sick index using PFRs, AMLs, HILs, delays, and CNRs</li>
                <li>Generated automated health snapshots via email</li>
                <li>Enabled detailed drill-through on scoring factors</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for building the dashboard</li>
                <li>Palantir Notepad for writing insights and summaries</li>
                <li>Palantir Automate for scheduling email distribution</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Standardized aircraft-level data across multiple sources</li>
                <li>Applied custom logic to weigh the contribution of each fault source</li>
                <li>Filtered PFRs to the last 20 flight cycles for relevancy</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Defined aircraft-level health index metrics and thresholds</li>
                <li>Built and visualized the aircraft scoring system in Contour</li>
                <li>Created the automated pipeline for report generation</li>
                <li>Monitored report accuracy and dashboard performance</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Aircraft sick index with with factor breakdown</li>
                <li>ACARS Transmission rate tracking to weigh PFR reliability</li>
                <li>Interactive filters by fleet, aircraft status, and aircraft type</li>
                <li>Drill-through to view historical fault data</li>
                <li>Customizable category thresholds for health status</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Data inconsistency across sources – solved via unified transformation logic</li>
                <li>Weighing determination – established cross-team collaboration for insights and recommendations</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Automated delivery of biweekly aircraft health ranking reports</li>
                <li>Provided a consistent and up-to-date decision basis for maintenance actions</li>
                <li>Increased visibility of top-priority aircrafts</li>
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
      num_of_icon={1}
      icon1={() => <SiPalantir />}
      hasDemo={false}
      hasGithub={false}   
   />
   </Container>
  );
}

export default ProjectList;
