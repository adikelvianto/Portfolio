import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { SiPalantir } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="Airframe Reliability Trend Dashboard"
      date="October 2024"
      content={`
        <p class="project-details-p">
          Tracks monthly trends of airframe-related reliability issues—such as PFRs, AMLs, and delays—across the fleet. 
          Consolidates the last 3 months into a single view to identify recurring issues and support targeted engineering decisions.
        </p>
      
        <br/>
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Built a dashboard summarizing airframe reliability trends using data from PFRs, AMLs, and delay reports</li>
                <li>Displayed 3-month aggregated views for easier pattern recognition and issue prioritization</li>
                <li>Provided drill-through capability for details of the problem</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for dashboard development and visualization</li>
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
                <li>Utilized PFR, AML, delay, and aircraft utilization datasets</li>
                <li>Performed data transformation and cross-joining to align summary and detail views</li>
                <li>Calculated monthly trend rates normalized per 100 flight cycles or flight hours</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Designed dynamic views with drill-throughs for detailed insights by category</li>
                <li>Implemented logic to identify repetitive PFR issues and monitor affected aircraft</li>
                <li>Visualized top problems for each source (PFR, AML, delay) with trend plotting</li>
                <li>Built fairness-based trend comparison through issue rate normalization</li>
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
                <li>Normalized trend rates per 100 flight cycles or flight hours for objective analysis</li>
                <li>Interactive filters by aircraft registration, problem type, ATA chapter, and fleet size</li>
                <li>Drill-through capability linking summarized graphs to issue-level detail</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Custom transformation of PFR, AML, and delay data to ensure consistency</li>
                <li>Synchronized summary and detail views across multiple data sources</li>
                <li>Balanced high-level clarity with detailed traceability for engineering actions</li>
              </ul>
            </td>
          </tr>

          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Improved visibility into airframe reliability trends across the fleet</li>
                <li>Facilitated informed decision-making to maintain fleet reliability</li>
                <li>Automated delivery of monthly aircraft reliability trend</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Cross-linking summary and detail views significantly improves dashboard usability</li>
                <li>Normalization by flight activity is essential for fair reliability benchmarking</li>
              </ul>
            </td>
          </tr>
        </table>
      `}      
      icon1={() => <SiPalantir />}
      hasDemo={false}
      hasGithub={false}   
   />
   </Container>
  );
}

export default ProjectList;
