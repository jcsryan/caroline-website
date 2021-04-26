import React from "react";
import Photo1 from '../Assets/photo 1.jpg';

function About() {
    return(
      <div className="about-wrapper">
      <img className="Photo1" src={Photo1}></img>
      <h1>Caroline Ryan, LMHC</h1>
      <div className="about-text">
          <p>
          I have been a therapist for over ten years, working with adults in various outpatient settings. 
          My primary areas of expertise are anxiety, depression, post-traumatic stress and substance use 
          disorders. I am adept at working with various mental health issues and find that my clients’ 
          struggles often correlate with one another and are rooted in underlying causes that can be uncovered 
          and addressed. 
            <br></br>
            <br></br>
          I truly believe in the transformative power of therapy, and that people are capable of living their 
          best lives when they practice honest self-reflection and commit to strengthening their mental and 
          emotional health. I finds work deeply fulfilling and feel privileged to assist my clients make 
          changes that lead to their personal growth.
            <br></br>
            <br></br>
          I have been independently licensed since 2015. Prior to opening my telehealth practice, I worked 
          as a counselor in Boston, Cambridge and Haverhill, Massachusetts. I live on Cape Ann with my husband 
          and our two children.

          </p>
      </div>
      <div className="education-text">
          <p>
          Education and Licensing
            <br></br>
            <br></br>
        ⦁	2015: Licensed Mental Health Counselor certification in Massachusetts <br></br>
        ⦁	2013: Certificate of Advanced Graduate Studies in Mental Health from Suffolk University<br></br>
        ⦁	2012: Masters of Science in Mental Health Counseling from Suffolk University<br></br>
        ⦁	2005: Bachelors of Science in Political Science from Brown University <br></br>

          </p>
      </div>
      </div>

    )
}

export default About;