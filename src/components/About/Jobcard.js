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
                                                            <h4>Bourna</h4>
                                                            <span>Frontend Developer (Jan 2023 - Present)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            {/* <img style="width:64px;height:64px;border-radius:20px;" src="assets/images/logo/Arkamond.jpeg" alt="Arkamond Logo"> */}
                                                        </div>
                                                    </div>
                                                    <p className="description">
                                                        •I was working as a front-end developer at Bourna company. During this time I have implemented the web applications as well as the pwa.
                                                        •My main work at Bourna company is the development of Shoping sites.
                                                        
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Noyan</h4>
                                                            <span>Unity Developer (Sep 2022 - Jan 2023)</span>
                                                        </div>
                                                        <div className="date-of-time">
                                                            {/* <img style="width:64px;height:64px;border-radius:20px;" src="assets/images/logo/Arkamond.jpeg" alt="Arkamond Logo"> */}
                                                        </div>
                                                    </div>
                                                    <p className="description">
                                                        •Developing a MetaVerse game based on a design in the WEBGL platform
                                                        
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="resume-single-list">
                                                <div className="inner">
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>Quiz of Kings Game Studio(Tehran-Iran)</h4>
                                                            <span>Game Manager (Jan 2022 - Jun 2022)</span>
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
                                                            <h4>Medrick FZE (Tehran-Iran)</h4>
                                                            <span>Game Manager (Sep 2021 - Mar 2022)</span>
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
                                                        <h4>Dadeh Gostar Adak (Tehran-Iran)</h4>
                                                        <span>Frontend Developer (Aug 2020 - Jan 2022)</span>
                                                    </div>
                                                    <div className="date-of-time">
                                                        {/* <img style="width:64px;height:64px;border-radius:20px;" src="assets/images/logo/viraltech.jpeg" alt="Viraltech Logo"> */}
                                                    </div>
                                                </div>
                                                <p className="description">
                                                    •I was working as a front-end developer at adak company. During this time I have implemented the web applications as well as the pwa, and also i’ve gained experience on the server side
                                                   
                                                </p>
                                            </div>
                                        </div>
                                        <div className="resume-single-list">
                                            <div className="inner">
                                                <div className="heading">
                                                    <div className="title">
                                                        <h4>Awans (Tehran-Iran)</h4>
                                                        <span>Internship (May 2019 - Aug 2019)</span>
                                                    </div>
                                                    <div className="date-of-time">
                                                        {/* <img style="width:64px;height:64px;border-radius:20px;" src="assets/images/logo/viraltech.jpeg" alt="Viraltech Logo"> */}
                                                    </div>
                                                </div>
                                                <p className="description">
                                                    •Awans was an insurance startup that i implemented the android application for them
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