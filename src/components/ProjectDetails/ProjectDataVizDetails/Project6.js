import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataViz/Projects";
import { iconMap } from "../../ProjectList/iconMap";


function ProjectList() {

  const project  = projects[14];
    
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
          Conducted a full-cycle data analysis on the Brazilian Olist E-commerce dataset using Python, culminating in an interactive Streamlit dashboard.
           The project involved defining 9 key business questions, performing data wrangling, merging datasets, and creating insightful visualizations to extract trends and improve understanding of marketplace dynamics.
        </p>
      
        <br />
      
        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Analyzed Olist’s Brazilian E-commerce dataset to extract actionable business insights</li>
                <li>Defined 9 specific business problems to guide the analysis process</li>
                <li>Built a full-featured Streamlit dashboard for stakeholders to explore and interact with the data</li>
                <li>Part of Dicoding’s "Belajar Analisis Data dengan Python" final submission</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Python (Pandas, Matplotlib, Seaborn)</li>
                <li>Jupyter Notebook for analysis</li>
                <li>Streamlit for dashboard development</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Cleaned multiple datasets containing orders, products, customers, payments, reviews, etc.</li>
                <li>Handled missing values and duplicates systematically</li>
                <li>Performed dataset merging and integration for comprehensive analysis</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Defined analysis scope and formulated key business questions</li>
                <li>Performed end-to-end data wrangling, EDA, and visualization in Jupyter</li>
                <li>Developed the Streamlit dashboard with dynamic filters for region, category, and time</li>
                <li>Published and documented the project on GitHub and Streamlit Cloud</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>9-filterable business questions for targeted exploration</li>
                <li>Dynamic visuals: sales trends, product performance, shipping delays, review scores, etc.</li>
                <li>Publicly accessible Streamlit dashboard: <a href="https://brazilian-e-commerce.streamlit.app/" target="_blank">View Demo</a></li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Consolidating multiple related datasets with varying dimensions and keys</li>
                <li>Maintaining performance while enabling interactive filtering in Streamlit</li>
              </ul>
            </td>
          </tr>
      
          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Delivered a functioning dashboard useful for business-level decision making</li>
                <li>Completed all analysis objectives defined at the start of the project</li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>Effective analysis starts with well-scoped questions and clean data</li>
                <li>Combining storytelling with interactivity (Streamlit) enhances data communication</li>
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
