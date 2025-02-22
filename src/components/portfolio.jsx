import { CheckCircle } from "lucide-react";
import "./portfolio.css";
import React from "react";

function ProjectPage() {
    React.useEffect(()=>{
        document.getElementById('portfolio')?.scrollIntoView({
            behavior: "smooth",
            inline:"start"
        })
    },[])
  return (
    <div className="app" id="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                An Extraordinary IoT-Based Touch Lamp App with 600,000 Users
              </h1>
              <div className="cta-buttons">
                <button className="btn btn-secondary">Visit Website</button>
                <button className="btn btn-outline">Web App</button>
              </div>
            </div>
            {/* <div className="hero-image">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5nAOIzxWoPwu0cgxzyt15MZFJuYISz.png"
                alt="App Interface"
                className="app-preview"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach">
        <div className="container">
          <h2 className="section-title">
            OUR SMART, EFFICIENT & PRODUCTIVE APPROACH
          </h2>
          <div className="approach-grid">
            <div className="challenge">
              <h3>The Challenge</h3>
              <p>
                Recently, the market has seen a surge in IoT-based touch lamps.
                Despite new brands entering the market, users were struggling
                with setup and operation due to issues with the App and
                firmware. Our IoT experts quickly fixed these problems and added
                new features, improving the user experience and helping the
                company stay ahead of its competitors.
              </p>
            </div>
            <div className="highlights">
              <h3>Project Highlights</h3>
              <ul className="highlights-list">
                {[
                  "Multiple Options for Device Setup",
                  "Biometric Scanning feature for seamless Wi-Fi setup process",
                  "Personalized colors out of an available set of 256 colors",
                  "Easy Group Creation and Fast Time Setup",
                  "Image Upload for Friends",
                  "Facebook SDK Integration to reseller App installs through Facebook Ads",
                  "Remote Touch feature allowing users to send Lamp Tap from the app",
                  "Push Notifications with appropriate colors and lamp types",
                ].map((highlight) => (
                  <li key={highlight}>
                    <CheckCircle className="check-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="insights">
        <div className="container">
          <div className="insights-card">
            <h3>Insights</h3>
            <p>
              Building a new platform from scratch is undoubtedly the preferred
              choice for most software development companies. However, we at
              BizGurukul do not hesitate to take up homegrown tasks like
              debugging existing platforms with around two hundred thousand
              active users.
            </p>
            <p>
              Our developer solution has enhanced the firmware and the overall
              device setup and offered numerous exciting features like Remote
              Touch, Customized Push Notifications, Easy Groups and Circle
              creation, and many more. The company is now enjoying an annual
              revenue of 30+ million.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Designs Section */}
      <section className="designs">
        <div className="container">
          <h2 className="section-title">Creative Designs</h2>
          <div className="designs-showcase">
            <img
              src="https://d1fxfakb0fcon3.cloudfront.net/images/portfolio/friendship-lamps/friendship-lamps-xd.webp"
              alt="App Screens"
              className="designs-image"
            />
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="benefits-grid mb-10">
            <img
              src="https://d1fxfakb0fcon3.cloudfront.net/images/portfolio/subsciety-business-benefits.webp"
              alt="Business Meeting"
              className="benefits-image"
            />
            <div className="benefits-content">
              <h3>Business Benefits</h3>
              <ul className="benefits-list">
                {[
                  "Improved overall user experience, thereby giving an edge to the app over its rivals",
                  "New attractive features to prompt users to buy subscriptions and increase overall App revenue",
                  "Helped improve company's core product line, allowing it to accomplish its overall business goals",
                ].map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle className="check-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="benefits-grid mb-10">
        
            <div className="benefits-content">
              <h3>Business Benefits</h3>
              <ul className="benefits-list">
                {[
                  "Improved overall user experience, thereby giving an edge to the app over its rivals",
                  "New attractive features to prompt users to buy subscriptions and increase overall App revenue",
                  "Helped improve company's core product line, allowing it to accomplish its overall business goals",
                ].map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle className="check-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="https://d1fxfakb0fcon3.cloudfront.net/images/portfolio/subsciety-business-benefits.webp"
              alt="Business Meeting"
              className="benefits-image"
            />
          </div>
          <div className="benefits-grid mb-10">
            <img
              src="https://d1fxfakb0fcon3.cloudfront.net/images/portfolio/subsciety-business-benefits.webp"
              alt="Business Meeting"
              className="benefits-image"
            />
            <div className="benefits-content">
              <h3>Business Benefits</h3>
              <ul className="benefits-list">
                {[
                  "Improved overall user experience, thereby giving an edge to the app over its rivals",
                  "New attractive features to prompt users to buy subscriptions and increase overall App revenue",
                  "Helped improve company's core product line, allowing it to accomplish its overall business goals",
                ].map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle className="check-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectPage;
