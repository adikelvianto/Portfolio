import React from "react";
import ProjectCard from "./ProjectCards";
import { DiPython } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Deep Learning-Based Elevator & Throttle Modeling for Boeing 747 Landings"
        date="October 2022"
        content={`<p class="project-details-p">
          Developed a deep learning-based auto-landing system for Boeing 747 aircraft using real-world flight data. Created two models to control elevator and throttle inputs during the landing phase, trained using TensorFlow on FDR (Flight Data Recorder) datasets.
          </p>
          
          <br/>
          
          <table class="two-column-table">
            <!-- Row 1 -->
            <tr>
              <td class="column">
                <h2>🔍 Overview</h2>
                <ul>
                  <li>Built two separate deep learning models: elevator and throttle</li>
                  <li>Processed and cleaned real-world FDR data</li>
                  <li>Used time-series data for regression-based predictions</li>
                  <li>Visualized model predictions against actual flight control inputs</li>
                </ul>
              </td>
              <td class="column">
                <h2>🛠️ Tools & Technologies</h2>
                <ul>
                  <li>TensorFlow for deep learning model development</li>
                  <li>Python with Pandas and NumPy for data preprocessing</li>
                  <li>Jupyter Notebook for experimentation and documentation</li>
                  <li>Matplotlib for plotting prediction results</li>
                  <li>CSV data format from flight data recorder</li>
                </ul>
              </td>
            </tr>
          
            <!-- Row 2 -->
            <tr>
              <td class="column">
                <h2>🧱 Dataset & Preprocessing</h2>
                <ul>
                  <li>Used 300 flight data CSV files with ~200 parameters each</li>
                  <li>Filtered flights that land at Memphis International Airport (MEM)</li>
                  <li>Selected data limited to Boeing 747 with aircraft</li>
                  <li>Performed denoising, normalization, and time-series formatting</li>
                </ul>
              </td>
              <td class="column">
                <h2>👨‍💻 My Responsibilities</h2>
                <ul>
                  <li>Preprocessed large raw datasets into trainable format</li>
                  <li>Designed and trained deep learning models</li>
                  <li>Visualized and interpreted results with plots</li>
                  <li>Documented the full process using Jupyter Notebook</li>
                </ul>
              </td>
            </tr>
          
            <!-- Row 3 -->
            <tr>
              <td class="column">
                <h2>📌 Key Features</h2>
                <ul>
                  <li>Separate models for elevator and throttle control</li>
                  <li>Model outputs mirror real pilot control trends</li>
                  <li>Prediction accuracy visualized and validated with charts</li>
                  <li>Used real flight conditions and variables from FDR</li>
                </ul>
              </td>
              <td class="column">
                <h2>⚙️ Challenges & Solutions</h2>
                <ul>
                  <li>Noisy raw data – solved with smoothing and scaling techniques</li>
                  <li>Throttle model fluctuated – identified need for output stabilization</li>
                  <li>Large data volume – optimized data loading and batching</li>
                </ul>
              </td>
            </tr>
          
            <!-- Row 4 -->
            <tr>
              <td class="column">
                <h2>📈 Results</h2>
                <ul>
                  <li>Elevator model stayed within ±4° of actual deflection</li>
                  <li>Throttle model mimicked multi-engine power lever behavior</li>
                  <li>Model outputs aligned closely with actual pilot inputs</li>
                  <li>Visual comparison confirmed model performance consistency</li>
                </ul>
              </td>
              <td class="column">
                <h2>📚 Lessons Learned</h2>
                <ul>
                  <li>Handling complex flight data with many variables</li>
                  <li>Building and tuning regression models for control systems</li>
                  <li>Time-series modeling and sequence preparation</li>
                  <li>Visualizing deep learning results for interpretability</li>
                </ul>
              </td>
            </tr>
          </table>
          `}
        num_of_icon={2}
        icon1={() => <DiPython />}
        icon2="cib:tensorflow"
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/Auto_Landing_DL"
      />
    </Container>
  );
}

export default ProjectList;
