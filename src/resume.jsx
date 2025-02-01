import "./resume.css";
function TopResume({ form }) {
  return (
    <div id="resumeTop">
      <h2 className="fullName">
        {form.firstName} {form.lastName}
      </h2>
      <p className="personInfo">
        {form.city}, {form.state}, {form.postalCode} &#x2022; {form.phoneNumber}{" "}
        &#x2022; {form.email}
      </p>
      <hr />

      <p class="objective">{form.description}</p>
    </div>
  );
}
function MiddleResume({ education, jobs, skills }) {
  return (
    <div id="resumeMiddle">
      <div id="infoSection">
        <h2 className="titleSection">Education</h2>
        <hr></hr>

        {education.map((education) => (
          <div
            className="informationBlock"
            key={education.id}
            id={education.id}
          >
            <div className="topPart">
              <p>{education.institution}</p>
              <p>
                {education.city}, {education.state}
              </p>
              {/* <p>{education.program}</p> */}
            </div>
            <div className="topPart">
              <p className="programTitle">{education.program}</p>
              <p>
                {education.startDate} - {education.endDate}
              </p>
            </div>

            <p className="description">&#x2022; {education.description}</p>
          </div>
        ))}
      </div>
      <div id="infoSection">
        <h2 className="titleSection">Experience</h2>
        <hr></hr>
        {jobs.map((job) => (
          <div className="informationBlock" key={job.id} id={job.id}>
            <div className="informationTitle">
              <div className="topPart">
                <p>{job.workplace}</p>
                <p>
                  {job.city},{job.state}
                </p>
              </div>
              <div className="topPart">
                <p className="programTitle">{job.position}</p>

                <p>
                  {job.startDate}-{job.endDate}
                </p>
              </div>
            </div>
            <p className="description">&#x2022; {job.description}</p>
          </div>
        ))}
      </div>

      <Skills skills={skills} />
    </div>
  );
}
function DisplayResume({ form, education, experience , skills}) {
  return (
    <div id="resume">
      <TopResume form={form} />
      <MiddleResume education={education} jobs={experience} skills={skills} />
      
    </div>
  );
}
export default DisplayResume;

function Skills({skills}){

  return <div>   

            <h2 className="titleSection">Skills</h2>
                <hr></hr>
            <div className="informationBlock">
            <p className="programTitle">Skills: {} 
            {skills.map((skill,index) => (
            <span key={skill.id}>
              {skill.description}
               {index < skills.length - 1 && ', '}
              </span>
        ))}
            </p>
            </div>
           



</div>
}