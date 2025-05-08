import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { SiPalantir } from "react-icons/si";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="APU Trend Insight"
      date="April 2025"
      content={`
        <p class="project-details-p">
          Visualizes trends from APU idle and auto shutdown ACMS reports by plotting key parameters to help identify early signs of system degradation or anomalies. 
          Simplifies trend interpretation for engineering teams through clear parameter-based insights.
        </p>

        <br />

        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Plots EGT and other APU parameters during idle and auto shutdown events to assess performance trends</li>
                <li>Highlights which APU serials experience auto shutdown, categorized by shutdown reason</li>
                <li>Supports trend filtering by report date and APU serial number to assist early anomaly detection</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Palantir Contour for interactive trend visualization</li>
                <li>Palantir Fusion Sheets for manually validated APU metadata</li>
                <li>Skywise ACMS data processing pipelines</li>
              </ul>
            </td>
          </tr>

          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Filtered ACMS data to only include APU idle and auto shutdown reports</li>
                <li>Converted 4 types of APU control words from 5-digit decimal to binary, then decoded per AMM logic into shutdown categories</li>
                <li>Aligned time series data by offsetting "+n seconds" parameters to create a trend window after the ACMS report</li>
                <li>Cross-joined shared Airbus datasets and created a unified, scheduled-refresh dataset for consistent use across dashboards</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Developed logic to decode control word values and classify shutdown reasons automatically</li>
                <li>Designed dataset pipelines to normalize and align time-offset parameters</li>
                <li>Created Contour dashboards with dynamic parameter selection, filtering, and graph plotting</li>
                <li>Maintained the backend dataset pipeline with automated refresh for near real-time monitoring</li>
              </ul>
            </td>
          </tr>

          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Dynamic filters for APU serial number, date range, and parameter selection</li>
                <li>Trend plot showing 10-second EGT behavior post auto shutdown</li>
                <li>Scatter plots for multiple parameters including EGT Peak, Rotation Speed, Bleed Air Pressure, etc.</li>
                <li>Category chart summarizing auto shutdown reports by reason</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Converted decimal control words to binary and mapped each bit per AMM to enable automated shutdown categorization</li>
                <li>ACMS parameter timestamps were relative, requiring calculation logic to shift them to actual event time</li>
                <li>Balanced manual and automated inputs to ensure reliable shutdown classification</li>
              </ul>
            </td>
          </tr>

          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Increased awareness of APU performance degradation patterns through visual insights</li>
                <li>Improved root cause traceability of shutdown events for engineering follow-up</li>
                <li>Streamlined report-based analysis of APU anomalies for fleet reliability monitoring</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Binary-level control word decoding reveals operational logic embedded in raw data</li>
                <li>Parameter offset alignment is critical for building accurate time-based trend insights</li>
                <li>Consistent preprocessing across data sources is key to building scalable visualizations</li>
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
