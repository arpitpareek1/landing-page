import React from "react";
import "./projects.css"; // Import the custom CSS below or place it in your global stylesheet

export const Projects = (props) => {
  return (
    <div id="Projects">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Projects</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="portfolio-card">
                    <div className="card-img">
                      <img src={d.img} alt={d.heaading} />
                    </div>
                    <div className="card-content">
                      <div className="content-top">
                        <h2>{d.heading}</h2>
                      </div>
                      <div className="card-content-inner">
                        <ul>
                          {d.points &&
                            d.points.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
