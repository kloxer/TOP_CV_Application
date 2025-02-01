import { useState } from "react";
import AddEducation from "./education";
import "./index.css";
import EducationSection from "./education.jsx";
import WorkExperience from "./workexperience.jsx";
import DisplayResume from "./resume.jsx";
import PdfDownloadComponent from "./pdfDownload.jsx";
import AddSkills from "./skills.jsx"
function UserInput({ form, onChange }) {
  return (
    <>
      <div class="userInfo">
        <div className="labelInput">
          <label htmlFor="firstName">First Name</label>
          <input
            value={form.firstName}
            type="text"
            name="firstName"
            onChange={onChange}
          />
        </div>

        <div className="labelInput">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={onChange}
            value={form.lastName}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="city">City</label>
          <input
            value={form.city}
            type="text"
            name="city"
            onChange={onChange}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="state">State</label>
          <input
            value={form.state}
            type="text"
            name="state"
            onChange={onChange}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            value={form.postalCode}
            type="text"
            name="postalCode"
            onChange={onChange}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={form.phoneNumber}
            type="number"
            name="phoneNumber"
            onChange={onChange}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="email">Email</label>
          <input
            value={form.email}
            type="email"
            name="email"
            onChange={onChange}
          />
        </div>

          <label htmlFor="objective">Objective</label>
          <textarea
            value={form.description}
            type="text"
            name="description"
            onChange={onChange}
          />
      </div>
    </>
  );
}

function ShowInput() {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Doe",
    address: "",
    city: "Toronto",
    state: "ON",
    postalCode: "M9M 2K5",
    phoneNumber: "6477427521",
    email: "johnDoe@gmail.com",
    description:
      "Detail-oriented computer science graduate seeking an entry-level position to apply programming skills and contribute to innovative projects while gaining hands-on experience in a collaborative environment.",
  });

  const [educationState, setEducationState] = useState([{
    id: Date.now(), // Generate a unique id
        institution: "York University",
        program: "M.SC in Computer Science",
        city: "NY",
        state: "NY",
        startDate: "2014",
        endDate: "2018",
        description: "Courses: Advanced Algorithms, Databases",
  }]);
  const addEducations = () => {
    setEducationState((prevState) => [
      ...prevState,
      {
        id: Date.now(), // Generate a unique id
        institution: "Waterloo",
        program: "Bachelor of Arts, Dance",
        city: "CA",
        state: "LA",
        startDate: "2020",
        endDate: "2030",
        description: "Courses: Dance1, Dance2, Dance3",
      },
    ]);
  };

  // Handle changes to individual education fields
  const handleEducationChange = (id, name, value) => {
    setEducationState((prevState) =>
      prevState.map((education) =>
        education.id === id ? { ...education, [name]: value } : education
      )
    );
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  }
  function handleDeleteEducation(e) {
    const id = parseInt(e.target.id, 10); // Convert e.target.id to a number
    const filtered = educationState.filter((education) => education.id !== id);
    setEducationState(filtered);
  }

  //EXPERIENCE SECTION
  const [jobs, setJobs] = useState([
    {
      id: Date.now(),
      workplace: "Google",
      position: "Web Developer",
      city: "Toronto",
      state: "ON",
      startDate: "2020",
      endDate: "2024",
      description: "Handled Auth for youtube, increased efficiency by 200%",
    },
  ]);

  function changeJobInfo(e) {
    const changedJobInfo = jobs.map((job) => {
      if (job.id == e.target.id) {
        return {
          ...job,
          [e.target.name]: e.target.value,
        };
      } else {
        return job;
      }
    });
    setJobs(changedJobInfo);
  }
  function addWorkExperience() {
    setJobs([
      ...jobs,
      {
        id: Date.now(),
        workplace: "Microsoft",
        position: "Software Engineer",
        city: "Washington",
        state: "WA",
        startDate: "2014",
        endDate: "2020",
        description: "Increased sales by 100x",
      },
    ]);
  }
  function deleteExperience(e) {
    setJobs(jobs.filter((job) => job.id != e.target.id));
  }


  // skills
  const [skills, setSkills] = useState([{
    id: Date.now(),
    description: "Java",
},
])

function changeSkills(e){
    setSkills(skills.map(skill=> {
        if (e.target.id == skill.id){
            return {
                ...skill,
                [e.target.name]: e.target.value,
            }
        }
        else{
            return skill
        }
    }))
}

function deleteSkill(e){
    setSkills(skills.filter(skill => skill.id != e.target.id));
}

function addSkills(){
    setSkills(
        [...skills,
        {
        id:Date.now(),
        description:"Java",
    }
    ])
}

  return (
    <div id="wholePage">
      <div className="leftSide">
        <h1 className="formTitle">Personal Details</h1>

        <UserInput form={form} onChange={handleChange} />
        <h1 className="formTitle">Education</h1>
        <EducationSection
          educationState={educationState}
          addEducations={addEducations}
          handleEducationChange={handleEducationChange}
          deleteEducation={handleDeleteEducation}
        />
        <h1 className="formTitle">Experience</h1>

        <WorkExperience
          jobs={jobs}
          changeJobInfo={changeJobInfo}
          addWorkExperience={addWorkExperience}
          deleteExperience={deleteExperience}
        />
        <AddSkills
        skills={skills}
        changeSkills={changeSkills}
        deleteSkill={deleteSkill}
        addSkills={addSkills}/>
      </div>
      <div className="resume">
        <PdfDownloadComponent />
        <DisplayResume
          form={form}
          education={educationState}
          experience={jobs}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default ShowInput;
