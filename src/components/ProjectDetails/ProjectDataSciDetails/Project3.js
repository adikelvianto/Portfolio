import React from "react";
import ProjectCard from "./ProjectCards";
import { Container } from "react-bootstrap";
import { projects } from "../../ProjectsDataScience/Projects";
import { iconMap } from "../../ProjectList/iconMap";

function ProjectList() {

  const project  = projects[2];
    
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
            Built a deep learning-based neural style transfer system using AdaIN (Adaptive Instance Normalization) architecture. Combined multiple public datasets for content and style, preprocessed them into TFRecord format, and trained the model locally with GPU optimization to generate artistic images that blend content and style features effectively.
          </p>

          <br/>

          <table class="two-column-table">
            <!-- Row 1 -->
            <tr>
              <td class="column">
                <h2>🔍 Overview</h2>
                <ul>
                  <li>Implemented AdaIN-based neural style transfer model</li>
                  <li>Combined content and style datasets from multiple sources</li>
                  <li>Trained model using TensorFlow on GPU</li>
                  <li>Optimized for efficient I/O using TFRecord and tf.data pipeline</li>
                </ul>
              </td>
              <td class="column">
                <h2>🛠️ Tools & Technologies</h2>
                <ul>
                  <li>TensorFlow for model training and deployment</li>
                  <li>Python with NumPy, Pandas, and Matplotlib</li>
                  <li>Google Colab (initially), then local GPU via CUDA/cuDNN</li>
                  <li>TFRecord format and <code>tf.data</code> API for preprocessing</li>
                </ul>
              </td>
            </tr>

            <!-- Row 2 -->
            <tr>
              <td class="column">
                <h2>🧱 Dataset & Preprocessing</h2>
                <ul>
                  <li>Content: MS-COCO validation set & PASCAL VOC (~8,000 images)</li>
                  <li>Style: WikiArt & Kaggle's “Best Artworks of All Time” (~10,000 images)</li>
                  <li>Images resized to 224×224 and normalized</li>
                  <li>Saved as TFRecords (1,000 images per shard)</li>
                </ul>
              </td>
              <td class="column">
                <h2>👨‍💻 My Responsibilities</h2>
                <ul>
                  <li>Designed and implemented end-to-end style transfer pipeline</li>
                  <li>Processed and converted datasets into TFRecords</li>
                  <li>Trained and validated models using GPU</li>
                  <li>Visualized training metrics and interpreted results</li>
                </ul>
              </td>
            </tr>

            <!-- Row 3 -->
            <tr>
              <td class="column">
                <h2>📌 Key Features</h2>
                <ul>
                  <li>AdaIN architecture for adaptive blending of content and style</li>
                  <li>Efficient training pipeline with parallel data loading</li>
                  <li>Support for both artistic style and object-based content input</li>
                  <li>Prefetching to maximize GPU utilization</li>
                </ul>
              </td>
              <td class="column">
                <h2>⚙️ Challenges & Solutions</h2>
                <ul>
                  <li>Large dataset volume – solved with TFRecords and batching</li>
                  <li>Limited Google Colab performance – switched to local GPU</li>
                  <li>Training time – minimized using prefetching and data pipelines</li>
                </ul>
              </td>
            </tr>

            <!-- Row 4 -->
            <tr>
              <td class="column">
                <h2>📈 Results</h2>
                <ul>
                  <li>Model converged after ~50 epochs with stable loss values</li>
                  <li>Content loss > style loss (style weight factor: 0.6)</li>
                  <li>Generated stylized images that preserve structure while applying texture</li>
                  <li>Validation loss remained higher but stable → no overfitting</li>
                </ul>
              </td>
              <td class="column">
                <h2>📚 Lessons Learned</h2>
                <ul>
                  <li>Efficient handling of large image datasets</li>
                  <li>Data pipeline optimization with tf.data and TFRecords</li>
                  <li>Practical tuning of loss balance in style transfer models</li>
                  <li>Training deep networks locally with custom GPU setups</li>
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
