import React from "react";
import ProjectCard from "./ProjectCards";
import { DiPython, DiJavascript1 } from "react-icons/di";
import { SiStreamlit } from "react-icons/si";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Web-Based Avionic Subcomponent Failure Prediction Using Machine Learning"
        date="January 2022"
        content={`
          <p class="project-details-p">
          Developed a prototype website to predict the failure of avionic components—VOR and Multimode Control Panel—during a 4-month internship at PT. GMF Aeroasia Tbk. The project combines machine learning models trained with scikit-learn and a Flask-based frontend hosted on PythonAnywhere and Streamlit Cloud.
        </p>

        <br/>

        <table class="two-column-table">
          <!-- Row 1 -->
          <tr>
            <td class="column">
              <h2>🔍 Overview</h2>
              <ul>
                <li>Developed a web-based ML application to predict component failures</li>
                <li>Targeted VOR and Multimode Control Panel avionics</li>
                <li>Built datasets from real internal maintenance documents</li>
                <li>Designed web interface using HTML, CSS, and Flask</li>
              </ul>
            </td>
            <td class="column">
              <h2>🛠️ Tools & Technologies</h2>
              <ul>
                <li>Python with scikit-learn for machine learning</li>
                <li>Flask framework for web development</li>
                <li>HTML, CSS, and JavaScript for frontend</li>
                <li>PythonAnywhere & Streamlit Cloud for hosting</li>
                <li>GitHub for version control and dataset storage</li>
              </ul>
            </td>
          </tr>

          <!-- Row 2 -->
          <tr>
            <td class="column">
              <h2>🧱 Dataset & Preprocessing</h2>
              <ul>
                <li>Extracted data from internal refurbishment records</li>
                <li>VOR: 19 sub-tests; Multimode: 23 sub-tests</li>
                <li>Created and cleaned two datasets:</li>
                <li><a href="https://github.com/adikelvianto/Avionic-Components-Failure-Prediction/blob/main/VOR%20Train%20Test.csv" target="_blank">VOR Dataset</a></li>
                <li><a href="https://github.com/adikelvianto/Avionic-Components-Failure-Prediction/blob/main/Multimode%20Train%20Test.csv" target="_blank">Multimode Dataset</a></li>
                <li>Performed data splitting: train, validation, and test</li>
              </ul>
            </td>
            <td class="column">
              <h2>👨‍💻 My Responsibilities</h2>
              <ul>
                <li>Collected and prepared datasets from physical documents</li>
                <li>Trained and evaluated ML models using cross-validation</li>
                <li>Designed and implemented Flask-based UI</li>
                <li>Handled deployment and migration to new platforms</li>
              </ul>
            </td>
          </tr>

          <!-- Row 3 -->
          <tr>
            <td class="column">
              <h2>📌 Key Features</h2>
              <ul>
                <li>Top 3 ML models selected per component based on accuracy</li>
                <li>Interactive UI with toggles and result output</li>
                <li>Multi-page web structure for usability</li>
                <li>Real-time failure prediction through Flask API</li>
              </ul>
            </td>
            <td class="column">
              <h2>⚙️ Challenges & Solutions</h2>
              <ul>
                <li>Hyperparameter tuning – solved with nested cross-validation</li>
                <li>Deployment limitations on Heroku – moved to PythonAnywhere</li>
                <li>Multi-model deployment – built Flask endpoints for each</li>
              </ul>
            </td>
          </tr>

          <!-- Row 4 -->
          <tr>
            <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>Model accuracy evaluated with test set results</li>
                <li>Top 3 models deployed for both VOR and Multimode</li>
                <li>Website hosted on <a href="https://www.pythonanywhere.com/" target="_blank">PythonAnywhere</a></li>
                <li>Streamlit version available on <a href="https://streamlit.io/cloud" target="_blank">Streamlit Cloud</a></li>
              </ul>
            </td>
            <td class="column">
              <h2>📚 Lessons Learned</h2>
              <ul>
                <li>End-to-end ML pipeline: data → model → deployment</li>
                <li>Web development with Flask and hosting platforms</li>
                <li>Cross-validation techniques for robust evaluation</li>
                <li>Balancing UI/UX with technical backend models</li>
              </ul>
            </td>
          </tr>
        </table>
        `}
        num_of_icon={5}
        icon1={() => <DiPython />}
        icon2="devicon-plain:scikitlearn"
        icon3="bxl:flask"
        icon4={() => <DiJavascript1 />}
        icon5={() => <SiStreamlit />}
        hasDemo={true}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/Avionic-Components-Failure-Prediction"
        demoLink="https://adikelvianto00.pythonanywhere.com/"
      />
    </Container>
  );
}

export default ProjectList;
