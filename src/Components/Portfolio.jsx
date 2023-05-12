/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/close-up-hand-holding-futuristic-screen.jpg";

const imageAltText = "A hand looking at a dashboard";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Drone-Fault-Tester",
    description:
      "A classification model to identify a device has an off set fault or not, regardless of the device. The model can be used by AirQo to automatically flag a device that is returning faulty data.",
    url: "https://github.com/Olamilekan002/Drone-Fault-Tester",
  },
  {
    title: "Ford_Gobike-trip-Exploration",
    description:
      "In depth data analysis on Ford Gobike trip in San Francisco with key findings and recommendations.",
    url: "https://github.com/Olamilekan002/Ford_Gobike-trip-Exploration",
  },
  {
    title: "DataFest 2022 Hackaton",
    description: "A detailed performace report of a service provider using PowerBI",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNGNiNGNlZWYtNzRlOS00Y2M2LWI4NzQtZjYzNjE2ZmI4ODUxIiwidCI6IjE1NzRhOGM4LTcwZDgtNGFmZi04ZjVhLWJjNWI4ZTNiOGE1ZiJ9",
  },
  {
    title: "Research-Paper-Management-System-using-Python",
    description:
      "A simple research database management system using Python and various libraries such as tkinter, pandas, and nltk. The program allows users to submit new research papers, search the database for papers based on keywords, and export search results to a CSV file.",
    url: "https://github.com/Olamilekan002/Research-Paper-Management-System-using-Python",
  },
  {
    title: "Deep Learning",
    description:
      "This contains various deep learning projects and algorithm",
    url: "https://github.com/Olamilekan002/Deep-Learning-NN",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
