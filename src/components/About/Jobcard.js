import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Badge from '../../Assets/Linkedin_Badge_2.png'
import './Jobcard.css'

function Jobcard() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    function ClickonBtn(idpils, idbtn) {
      console.log("!@22222")
      document.getElementById("professional").style.display = "none";
      document.getElementById("experience").style.display = "none";
      document.getElementById("education").style.display = "none";

  
      document
        .getElementById("experience-tab")
        .classList.remove("active");
      document
        .getElementById("professional-tab")
        .classList.remove("active");
      document
        .getElementById("education-tab")
        .classList.remove("active");

  
      console.log(idpils);
      document.getElementById(idpils).style.display = "block";
      document.getElementById(idpils).classList.add("show")
      document.getElementById(idpils).classList.add("active")
      document.getElementById(idbtn).classList.add("active");
    }
    return (
<div className="col-lg-12">
  
                <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                    <li className="nav-item" >
                        <a className="nav-link active" id="experience-tab" onClick={()=>{ClickonBtn("experience","experience-tab")}} data-bs-toggle="tab"  role="tab" aria-controls="experience" >Experience</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" id="professional-tab"  data-bs-toggle="tab" onClick={()=>ClickonBtn("professional","professional-tab")} role="tab" aria-controls="professional" aria-selected="false">professional
                            Skills</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link " id="education-tab"  data-bs-toggle="tab" onClick={()=>ClickonBtn("education","education-tab")} role="tab" aria-controls="education" aria-selected="true">Education</a>
                    </li>
                    
                </ul>
                <div className="rn-nav-content tab-content" id="myTabContents">
                  
                    <div className="tab-pane fade single-tab-area active show" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                        <div className="personal-experience-inner mt--40">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12 mt_md--60 mt_sm--60">
                                    <div className="content">
                                        {/* <span className="subtitle">May 2020 - Present</span> */}
                                        <h4 className="maintitle">Job Experience</h4>
                                        <div className="experience-list">

                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Arkamond (Remote)</h4>
                                                            <span>Frontend Developer (May 2020 - Present)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            {/* <img style="width:64px;height:64px;border-radius:20px;" src="assets/images/logo/Arkamond.jpeg" alt="Arkamond Logo"> */}
                                                        </div>
                                                    </div>
                                                    <p className="description">
                                                        •Collaborated with design, product, and back-end teams to create 10+ international fully responsive super
                                                        web-application products with different panels, about 500+ pages with UI/UX designs.
                                                        <br/>
                                                        •Built modular-based components and utilities and 100% reusable code for future usage.
                                                        <br/>
                                                        •Used OAuth protocol and Microservice Architecture for multi-panel projects and implemented the management panels using
                                                        React.JS. Used SCSS, jQuery, and Django template for other panels, which need better SEO that makes driving acquisition
                                                        up by an average of 250% each month.
                                                        <br/>
                                                        •Developed Mobile and Desktop Applications with the same code as web applications due to Responsiveness, Cross-Browser
                                                        Compatibility, and Accessibility-Compliant websites that improved the number of total members by 40%.
                                                        <br/>
                                                        •Created a Solar Hijri (Iranian) Calendar with High-Tech Features similar to Google Calendar in tandem with a Great
                                                        Music Platform
                                                        like Spotify for Kurdish People, which Led to an Increase in Client’s Average Time Using the Application by 32%.
                                                        <br/>
                                                        •Proficient in Scrum Methodology. Participated in Product Release Presentations and Code Reviews with 3 Senior
                                                        Developers. Had
                                                        the Leadership, Supervision, and Mentoring of a Team with 5 Juniors to Achieve High-Performance.
                                                        <br/>
                                                        •Test the products before releasing them to the market and get the +95% coverage with the Jest framework.
                                                        <br/>
                                                        •Delivered Engaging User Experience by Optimizing images and code. Created Custom Webpack.JS, achieving 24% faster load
                                                        time than the industry average.
                                                        <br/>
                                                        •Technology Stack: HTML5, SCSS, JQuery, Bootstrap4, Material UI, TypeScript, React.JS, React Native, Electron JS, Django
                                                        Template, Django, Docker, PostgreSQL, MongoDB, NginX, WebSocket, Git, Trello, Figma, Zeplin
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Medrick FZE (Tehran-Iran)</h4>
                                                            <span>Unity Developer (Aug 2021 - May 2022)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            {/* <img style="width:64px;height:64px;border-radius:20px;" src="assets/images/logo/MedrickLogo.jpeg" alt="Medrick Logo"> */}
                                                        </div>
                                                    </div>
                                                    <p className="description">
                                                        Develop an online (PVP) match three mobile game project where players compete against each other.
                                                    </p>
                                                </div>
                                            </div>


                                        <div className="resume-single-list">
                                            <div className="inner">
                                                <div className="heading">
                                                    <div className="title">
                                                        <h4>ViralTech.co (Tehran-Iran)</h4>
                                                        <span>Frontend development lead (Oct 2020 - Mar 2021)</span>
                                                    </div>
                                                    <div className="date-of-time">
                                                        {/* <img style="width:64px;height:64px;border-radius:20px;" src="assets/images/logo/viraltech.jpeg" alt="Viraltech Logo"> */}
                                                    </div>
                                                </div>
                                                <p className="description">
                                                    •Developed the mobile-friendly project about Cryptocurrencies including the admin panel, User Panel, and a SPA
                                                    compatible with
                                                    100% device sizes.
                                                    <br/>
                                                    •Recreated a custom client dashboard that reduced support tickets by 50%.
                                                    <br/>
                                                    •Implemented the system with Full Compatibility with a High-Security backend for payment and connecting to the client’s
                                                    wallet
                                                    page, decreasing the security concerns to 0.
                                                    <br/>
                                                    •Led and mentored 3 members and apply Material-UI, antd, and bootstrap4, to increase the speed of development by about
                                                    45%.
                                                    <br/>
                                                    •Technology Stack: JSX, SCSS, Bootstrap4, Material UI, Antd, React.JS, ASP .Net Core, C#, MySQL, SQL Server, Azure
                                                    DevOps, NginX, Git, Figma
                                                </p>
                                            </div>
                                        </div>

                                           

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="tab-pane fade" id="professional" role="tabpanel" aria-labelledby="professional-tab">
                        <div className="personal-experience-inner mt--40">
                            <div className="row row--40">

                                <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                                    <div className="progress-wrapper">
                                        <div className="content">
                                            {/* <span className="subtitle">Features</span> */}
                                            <h4 className="maintitle">Development Skill</h4>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">HTML <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress90" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">90%</span></div>
                                                </div>
                                            </div>
                                  
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">CSS <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress90" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">90%</span>
                                                    </div>
                                                </div>
                                            </div>
                                         
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">javascript <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress90" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">90%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">TypeScript</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress85" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">85%</span>
                                                    </div>
                                                </div>
                                            </div>
                                     
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">React.JS <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">80%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">ReactNative</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">80%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Android</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress70" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">70%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Ionic (PWA)</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">80%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Front-end Development <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">80%</span>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Scrum</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress95" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">95%</span>
                                                    </div>
                                                </div>
                                            </div>
                                  
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Jquery</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">80%</span>
                                                    </div>
                                                </div>
                                            </div>
                         
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Unity <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress75" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">75%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">SpringBoot</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress85" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">85%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Kotlin</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress75" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="percent-label">75%</span>
                                                    </div>
                                                </div>
                                            </div>
                                
                                        </div>
                                    </div>
                                </div>
                             
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="progress-wrapper">
                                        <div className="content">
                                            {/* <span className="subtitle">Features</span> */}
                                            <h4 className="maintitle">Programming and others</h4>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">C (Programming language) <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress90" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">90%</span></div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">MySQL <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">80%</span></div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6"> Agile Methodologies<img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress95" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">95%</span></div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">C++ <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress90" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">90%</span></div>
                                                </div>
                                            </div>
                                       
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">C#</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">80%</span></div>
                                                </div>
                                            </div>
                                        
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Java</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">80%</span></div>
                                                </div>
                                            </div>
                                  
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Python <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">80%</span></div>
                                                </div>
                                            </div>
                                  
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Git  <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress90" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">90%</span></div>
                                                </div>
                                            </div>
                               
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Linux  <img style={{height:"30px"}} src={Badge} alt="linkedin_badge"/></h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress75" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">75%</span></div>
                                                </div>
                                            </div>
                                     
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Clickup</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress80" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">80%</span></div>
                                                </div>
                                            </div>
                                  
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Trello</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress85" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">85%</span></div>
                                                </div>
                                            </div>
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Jira</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress85" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">85%</span></div>
                                                </div>
                                            </div>
        
                                            <div className="progress-charts">
                                                <h6 className="heading heading-h6">Docker</h6>
                                                <div className="progress">
                                                    <div className="progress-bar wow fadeInLeft skillprogress70" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">70%</span></div>
                                                </div>
                                            </div>
                                          

                                        </div>
                                    </div>
                                </div>

                                

                            </div>
                        </div>
                    </div>
               
                    <div className="tab-pane fade  " id="education" role="tabpanel" aria-labelledby="education-tab">
                        <div className="personal-experience-inner mt--40">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="content">
                                        <h4 className="maintitle">Education</h4>
                                        <div className="experience-list">

                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Bachelors’ Degree in Computer Engineering</h4>
                                                            <span>Iran University of Science and Technology (Sep 2018 - Now)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            <span>3.21/4</span>
                                                        </div>
                                                    </div>
                                                    <br className="description-edu"/>
                                                    <h1 className="h1-description-edu">• Tehran-Iran</h1>
                                                    {/* <br/> */}
                                                     <h1 className="h1-description-edu">   • Supervisor: Dr. Reza Entezari</h1>
                                                        <br/>
                                                    <p></p>
                                                </div>
                                            </div>
                                  
                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>High School Diploma in Mathematics and Physics</h4>
                                                            <span>AE High School (Sep 2011 - June 2018)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            <span>3.91/4</span>
                                                        </div>
                                                    </div>
                                                    <br className="description-edu"/>
                                               <h1 className="h1-description-edu">     • Tehran-Iran</h1>
                                                    {/* <br/> */}
                                                 <h1 className="h1-description-edu">   •Middle-school and High-school</h1>
                                                    {/* <br/> */}
                                                  <h1 className="h1-description-edu">  •Top student at High school</h1>
                                                    <p></p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                             
                            </div>
                        </div>
                    </div>

                 
                </div>
            </div>
                                 )
                                 }
                                        export default Jobcard