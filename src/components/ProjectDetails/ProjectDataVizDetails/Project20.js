import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[0];
    
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
          A collaborative project with the IT division to digitize operational maintenance workflows within the Aircraft Maintenance Management division. 
          The initiative integrates daily aircraft updates, operational interruptions, maintenance planning, and fleet status into a centralized web system, complete with Gantt chart visualizations and automated email reporting to boost transparency and real-time situational awareness.
        </p>
      
        <br />
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Collaborated with the IT team to develop a centralized, web-based operational maintenance dashboard</li>
                <li>Transitioned from manual reporting to real-time data input and visualization</li>
                <li>Enabled automated email reporting and aircraft monitoring to support better decision-making and accountability</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Yii Framework (PHP)</li>
                <li>Microsoft SQL Server</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Mapped manual workflows and data formats to structured database columns</li>
                <li>Defined role-based access and data entry flows to suit operational requirements</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Analyzed existing manual workflows to identify opportunities for automation</li>
                <li>Created UI/UX prototypes, system architecture, and metadata definitions</li>
                <li>Tested new features, reported bugs, and served as a bridge for user feedback</li>
                <li>Developed manuals and conducted periodic user training sessions</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
          <td class="column">
            <h2>📌 Key Features</h2>
            <ul>
              <li>Live aircraft status monitoring through intuitive dashboards, with each aircraft registration displayed as a detailed card</li>
              <li>Input for line maintenance issues and operational interruptions</li>
              <li>Maintenance planning input with Gantt charts for each aircraft</li>
              <li>Aircraft availability summaries and dashboards that highlight days where availability did not meet the planned target</li>
              <li>Input for asset information, including aircraft and major components such as engines, APU, and landing gear</li>
              <li>Role-based menus and access control</li>
              <li>Automated, scheduled email reporting to all stakeholders</li>
            </ul>
          </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Resistance to habit change – mitigated by clear user guidance and socialization</li>
                <li>Complex workflows – simplified through structured guidelines and prototyping</li>
                <li>Data integration – solved by designing a flexible database and dashboard architecture</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Reduced workload from manual data reporting</li>
                <li>Increased visibility and transparency across divisions</li>
                <li>Faster and more reliable decision-making through real-time dashboards</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Digital transformation is not just technical — it's behavioral and collaborative</li>
                <li>Data consistency and cross-functional alignment are key to success</li>
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
