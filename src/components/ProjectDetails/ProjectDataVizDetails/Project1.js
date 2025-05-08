import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function ProjectList() {
  return (
    <Container fluid class="project-details-section">
    <ProjectCard
      title="Cyclistic Membership Strategy Using R and Divvy 2021 Data"
      date="October 2022"
      content={`
      <p class="project-details-p">
        Conducted in-depth analysis on Divvy's 2021 ride data to identify behavioral patterns between casual and member riders, aiming to support Cyclistic's goal of increasing membership conversion through data-driven marketing strategies.
      </p>

      <br />

      <table class="two-column-table">
        <tr>
          <td class="column">
            <h2>🔍 Overview</h2>
            <ul>
              <li>Analyzed ride behavior differences between casual and member riders</li>
              <li>Generated marketing insights to convert casual users into members</li>
              <li>Utilized R for data cleaning, transformation, and visualization</li>
            </ul>
          </td>
          <td class="column">
            <h2>🛠️ Tools & Technologies</h2>
            <ul>
              <li>R and RStudio for data analysis</li>
              <li>ggplot2 and dplyr for visualization and wrangling</li>
              <li>Divvy 2021 dataset</li>
            </ul>
          </td>
        </tr>

        <tr>
          <td class="column">
            <h2>🧱 Dataset & Preprocessing</h2>
            <ul>
              <li>Combined 12 months of ride data into a single cleaned dataset</li>
              <li>Removed nulls, duplicates, and irrelevant columns</li>
              <li>Derived new time-based columns for deeper analysis (hour, day, season)</li>
            </ul>
          </td>
          <td class="column">
            <h2>👨‍💻 My Responsibilities</h2>
            <ul>
              <li>Cleaned and prepared data for analysis using R</li>
              <li>Performed EDA to uncover trends in ride behavior</li>
              <li>Developed recommendations based on seasonal and behavioral patterns</li>
            </ul>
          </td>
        </tr>

        <tr>
          <td class="column">
            <h2>📌 Key Insights</h2>
            <ul>
              <li>Casual riders ride more on weekends, especially Saturday</li>
              <li>Members are active during weekdays and commute hours</li>
              <li>Casual riders have longer average trip durations</li>
              <li>Trips longer than 1 hour are mostly taken by casual riders</li>
              <li>Busiest station: "Streeter Dr & Grand Ave", dominated by casual weekend riders</li>
            </ul>
          </td>
          <td class="column">
            <h2>📊 Visualizations</h2>
            <ul>
              <li>Weekly ride distribution by rider type</li>
              <li>Trip duration comparison (weekends vs weekdays)</li>
              <li>Ride count per station with thresholds</li>
              <li>Seasonal and hourly ride trends</li>
            </ul>
          </td>
        </tr>

        <tr>
          <td class="column">
            <h2>💡 Recommendations</h2>
            <ul>
              <li>Run summer campaigns at busiest stations like "Streeter Dr & Grand Ave"</li>
              <li>Launch point multipliers and weekend missions to attract long-ride casual users</li>
              <li>Offer 60-minute docked bike rides to accommodate longer trips</li>
              <li>Provide night-time ride discounts for members to boost off-peak utilization</li>
            </ul>
          </td>
          <td class="column">
            <h2>📚 Lessons Learned</h2>
            <ul>
              <li>Data-driven insights are crucial for targeted marketing strategies</li>
              <li>Combining behavioral and seasonal data provides deeper context</li>
              <li>Segmented user behavior helps in designing effective membership incentives</li>
            </ul>
          </td>
        </tr>

        <tr>
          <td class="column">
            <h2>📈 Outcome</h2>
            <ul>
              <li>Generated actionable insights to increase membership adoption</li>
              <li>Delivered clean, visual summary for marketing strategy planning</li>
              <li>Validated trends across seasons, time, station usage, and rider types</li>
            </ul>
          </td>
          <td class="column">
            <h2>🗂️ Data Summary</h2>
            <ul>
              <li>12-month period: Jan - Dec 2021</li>
              <li>First-party data from Divvy (via city of Chicago)</li>
              <li>ROCCC principles: Reliable, Original, Comprehensive, Current, Cited</li>
            </ul>
          </td>
        </tr>
      </table>
      `}
      num_of_icon={1}
      icon1="cib:r"
      hasDemo={true}
      hasGithub={false}
      demoLink="https://www.kaggle.com/code/adikelvianto29/analysis-of-divvy-2021-dataset-using-r"
   />
   </Container>
  );
}

export default ProjectList;
