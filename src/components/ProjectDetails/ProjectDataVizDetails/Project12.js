import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { SiMicrosoftexcel } from "react-icons/si";


function ProjectList() {
  return (
    <Container fluid className="project-details-section">
    <ProjectCard
      title="Reliability Project Tracking & Accomplishment Dashboard"
      date="November 2024"
      content={`
        <p class="project-details-p">
          A centralized system providing fleet-wide and project-specific views of reliability initiatives. Displays near real-time material readiness, maintenance status (Last Done – Next Due), and document references, streamlining project monitoring.
        </p>
      
        <br />
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Built a centralized Power BI dashboard to monitor reliability initiatives across the fleet</li>
                <li>Displayed real-time material status, Last Done–Next Due maintenance items, and technical documentation</li>
                <li>Provided dual views: project-based and aircraft-based perspectives for a holistic overview</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Power BI for dashboard development and visualization</li>
                <li>Power Automate for auto-refresh triggers and workflow automation</li>
                <li>Excel and SharePoint as data sources with varied formatting</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Standardized and consolidated ~20 Excel sheets with inconsistent formatting</li>
                <li>Aligned headers and merged aircraft status with project data</li>
                <li>Prepared a unified dataset for seamless visualization</li>
                <li>Validated data integrity and consistency to achieve reliable model relation</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Designed the data model and UI/UX to support intuitive navigation and filtering</li>
                <li>Implemented drill-throughs linking project summaries to detailed records with document hyperlinks</li>
                <li>Automated dataset refresh using Power Automate when source files were updated</li>
                <li>Maintained transformation pipelines and monitored refresh status for data reliability</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Near real-time display of material readiness and project progress</li>
                <li>Drill-throughs to individual project statuses</li>
                <li>Interactive matrix showing open items per aircraft, color-coded by status</li>
                <li>Live count of open reliability projects for each aircraft</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Transformed ~20 Excel sheets with different headers while ensuring data consistency</li>
                <li>Generated two analytical views—project-based and aircraft-based—from a single dataset</li>
                <li>Performed row-by-row transformations to summarize open issues: split Engine #1 and #2 CNR data, concatenated distinct problems, and grouped ASDCS issues per aircraft into summary columns</li>
                <li>Mapped installed engine serial numbers per aircraft for better traceability and reference</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Provided a centralized dashboard enabling all teams to monitor and track ongoing reliability projects</li>
                <li>Facilitated collaborative data analysis, project comparison, and issue resolution</li>
                <li>Ensured timely visibility of updates through automated refreshes</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Automating updates with Power Automate significantly reduced manual monitoring efforts</li>
                <li>Standardizing diverse Excel sources is key to reliable cross-project analytics</li>
                <li>Providing multiple views (project and aircraft) enhances accessibility for different user needs</li>
              </ul>
            </td>
          </tr>
        </table>
      `}      
      num_of_icon={2}
      icon1="simple-icons:powerbi"
      icon2={() => <SiMicrosoftexcel />}
      hasDemo={false}
      hasGithub={false}   
   />
   </Container>
  );
}

export default ProjectList;
