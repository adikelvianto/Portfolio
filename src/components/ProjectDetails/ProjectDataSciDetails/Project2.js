import React from "react";
import ProjectCard from "./ProjectCards";
import { DiPython } from "react-icons/di";
import { Container } from "react-bootstrap";

function ProjectList() {
  return (
    <Container fluid className="project-details-section">
      <ProjectCard
        title="Deep Learning-Based Fly-Over Waypoints Control System for Business Jet Aircraft"
        date="August 2022"
        content={`
          <p class="project-details-p">
          Developed a deep learning-based waypoint-following controller focused on *fly-over waypoints* for the Cirrus Vision SF50 business jet. This project compared Deep Learning against PID control and investigated how training data characteristics — especially aircraft roll angle — affect model performance.
          </p>

          <br/>

          <table class="two-column-table">
            <!-- Row 1 -->
            <tr>
              <td class="column">
                <h2>🔍 Overview</h2>
                <ul>
                  <li>Created a DL-based controller for fly-over waypoint tracking</li>
                  <li>Used PID-based flight mission data as training dataset</li>
                  <li>Split data based on roll angle to analyze performance impact</li>
                  <li>Evaluated model's performance on X-Plane flight simulation</li>
                </ul>
              </td>
              <td class="column">
                <h2>🛠️ Tools & Technologies</h2>
                <ul>
                  <li>Python with TensorFlow, Pandas, NumPy</li>
                  <li>MATLAB & Simulink for control system simulation</li>
                  <li>X-Plane 11 as flight simulator for real-time testing</li>
                  <li>Bayesian optimization for model tuning</li>
                  <li>GUI-based monitoring system during simulation</li>
                </ul>
              </td>
            </tr>

            <!-- Row 2 -->
            <tr>
              <td class="column">
                <h2>🧱 Dataset & Preprocessing</h2>
                <ul>
                  <li>Collected X-Plane flight data under PID-based control <a href="https://github.com/adikelvianto/Fly-Over_Waypoints_ANN/blob/main/Prepare%20Dataset.ipynb" target="_blank">🔗</a></li>
                  <li>Preprocessing includes resampling, smoothing, and cleaning <a href="https://github.com/adikelvianto/Fly-Over_Waypoints_ANN/blob/main/Prepare%20Dataset.ipynb" target="_blank">🔗</a></li>
                  <li>Datasets categorized based on roll angle criteria <a href="https://github.com/adikelvianto/Fly-Over_Waypoints_ANN/blob/main/Split%20Dataset.ipynb" target="_blank">🔗</a></li>
                  <li>Focused on slicing vs. generalization performance study <a href="https://github.com/adikelvianto/Fly-Over_Waypoints_ANN/blob/main/Evalute%20ANN%20Result.ipynb" target="_blank">🔗</a></li>
                </ul>
              </td>
              <td class="column">
                <h2>👨‍💻 My Responsibilities</h2>
                <ul>
                  <li>Collected simulation data from X-Plane using PID-controlled missions</li>
                  <li>Designed and trained the deep learning model using TensorFlow</li>
                  <li>Integrated the trained model into MATLAB for real-time control in Simulink</li>
                  <li>Established communication pipeline between X-Plane and the DL model</li>
                  <li>Evaluated how the DL model improves roll maneuver control over PID, especially near waypoints</li>
                  <li>Conducted visual and quantitative analysis to assess model performance</li>
                </ul>
              </td>
            </tr>

            <!-- Row 3 -->
            <tr>
              <td class="column">
                <h2>📌 Key Features</h2>
                <ul>
                  <li>Real-time control system for business jet simulation</li>
                  <li>Roll-based dataset categorization for detailed study</li>
                  <li>Model showed improvement over PID in waypoint closeness</li>
                  <li>Custom GUI for live monitoring during simulation</li>
                </ul>
              </td>
              <td class="column">
                <h2>⚙️ Challenges & Solutions</h2>
                <ul>
                  <li>Data sparsity – handled with strategic smoothing & slicing</li>
                  <li>Model generalization vs. specialization trade-off</li>
                  <li>Real-time simulation sync using X-Plane plugins</li>
                  <li>Ensuring TensorFlow model runs within MATLAB pipeline</li>
                </ul>
              </td>
            </tr>

            <!-- Row 4 -->
            <tr>
              <td class="column">
              <h2>📈 Results</h2>
              <ul>
                <li>DL model reduced deviation from waypoint vs PID method</li>
                <li>Sliced datasets outperformed broader datasets in some cases</li>
                <li>Successfully completed two flight missions:
                  <ul>
                    <li><a href="https://user-images.githubusercontent.com/92104520/196455030-7f6f501a-0fa0-4f09-a6af-14ac8921d28c.mp4" target="_blank">Mission A (4 waypoints) – Demo Video</a></li>
                    <li><a href="https://user-images.githubusercontent.com/92104520/196455059-49da6a68-7dc4-442a-bf2d-cf279a6bc297.mp4" target="_blank">Mission B (10 waypoints) – Demo Video</a></li>
                  </ul>
                </li>
                </br>
                <li>
                  Full thesis available at 
                  <a href="https://digilib.itb.ac.id/gdl/view/69001/13618043?rows=1&per_page=2" target="_blank">ITB Digital Library</a>
                </li>
              </ul>
              </td>
              <td class="column">
                <h2>📚 Lessons Learned</h2>
                <ul>
                  <li>Importance of dataset design in supervised learning</li>
                  <li>Trade-offs between accuracy and generalization</li>
                  <li>Combining control theory with modern ML tools</li>
                  <li>Bridging systems: From simulation to real-time control</li>
                </ul>
              </td>
            </tr>
          </table>
          `}
        num_of_icon={3}
        icon1={() => <DiPython />}
        icon2="cib:tensorflow"
        icon3="file-icons:matlab"
        hasDemo={false}
        hasGithub={true}
        ghLink="https://github.com/adikelvianto/Fly-Over_Waypoints_DL"
      />
    </Container>
  );
}

export default ProjectList;
