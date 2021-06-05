import React, { Component } from 'react';
import '../css/product.scoped.css';
class AboutUs extends Component {
    render() {
        return (
            <div style={{marginLeft:"auto", marginRight:"auto"}} class="col-md-10 col-sm-12">
              
              <div className="about-section">
                <h1>About Us</h1>
                <p>
                  For more than 130 years, companies around the world have depended on Intertek to help ensure the quality and safety of their products, processes and systems.

                  We go beyond testing, inspecting and certifying products; we are a Total Quality Assurance provider to industries worldwide. Through our global network of state-of-the-art facilities and industry-leading technical expertise we provide innovative and bespoke Assurance, Testing, Inspection and Certification services to customers. We provide a systemic approach to supporting our customers’ Quality Assurance efforts in each of the areas of their operations including R&D, raw materials sourcing, components suppliers, manufacturing, transportation, distribution and retail channels, and consumer management.

                  Intertek is an industry leader with more than 43,800 employees in 1,000 locations in over 100 countries. We deliver Total Quality Assurance expertise 24 hours a day, 7 days a week with our industry-winning processes and customer-centric culture. Whether your business is local or global, we can help to ensure that your products meet quality, health, environmental, safety, and social accountability standards for virtually any market around the world. We hold extensive global accreditations, recognitions, and agreements, and our knowledge of and expertise in overcoming regulatory, market, and supply chain hurdles is unrivalled.</p>
                
              </div>
              <h2 style={{textAlign: 'center'}}>Our Team</h2>
              <div className="row">
                <div className="column">
                  <div className="card">
                    <img src="./images/trung.png" alt="Jane" style={{width: '100%'}} />
                    <div className="container">
                      <h2>Thục Trưng</h2>
                      <p className="title">CEO &amp; Founder</p>
                      <p>I am CEO, study at Passerllesnumeriques Vietnam
                      </p>
                      <p>thuctrung@emal.com</p>
                      <br/>
                      <br/>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <img src="./images/sy.png" alt="Mike" style={{width: '100%'}} />
                    <div className="container">
                      <h2>Sy</h2>
                      <p className="title">Art Director</p>
                      <p>I am Art Director, study at Passerllesnumeriques Vietnam</p>
                      <p>synguyen@emal.com</p>
                      <br/>
                      <br/>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <img src="./images/huou.png" alt="John" style={{width: '100%'}} />
                    <div className="container">
                      <h2>Huou</h2>
                      <p className="title">Designer</p>
                      <p>I am Designer, study at Passerllesnumeriques Vietnam</p>
                      <p>thihuou@emal.com</p>
                      <br/>
                      <br/>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <img src="./images/hau.png" alt="John" style={{width: '100%', height: '80%'}} />
                    <div className="container">
                      <h2>Ngoc Hau</h2>
                      <p className="title">Designer</p>
                      <p>I am Designer, study at Passerllesnumeriques Vietnam</p>
                      <p>thihuou@emal.com</p>
                      <br/>
                      <br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

export default AboutUs;