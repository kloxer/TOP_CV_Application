import { useState } from "react";

function WorkExperience() {
  const [jobs, setJobs] = useState([
    {
      id: Date.now(),
      workplace: "Google",
      position: "Web Developer",
      city: "Toronto",
      state: "ON",
      startDate: "2020",
      endDate: "2024",
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
        workplace: "e",
        position: "e",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }
  function deleteExperience(e) {
    alert(e.target.id);
    setJobs(jobs.filter((job) => job.id != e.target.id));
  }
  return (
    <div class="workExperience">
      {jobs.map((job) => (
        <div>
          <p id={job.id}>{job.workplace}</p>
          <p>{job.position}</p>
        </div>
      ))}
      <h2>Experience </h2>
      <button onClick={addWorkExperience}>Add work experience</button>

      {jobs.map((job) => (
        <ExperienceForm
          key={job.id}
          id={job.id}
          changeJobInfo={changeJobInfo}
          deleteExperience={deleteExperience}
        />
      ))}
    </div>
  );
}
function ExperienceForm({ id, changeJobInfo, deleteExperience }) {
  return (
    <div class="workExperience" id={id}>
      <label htmlFor="location">Workplace</label>
      <input id={id} type="text" name="workplace" onChange={changeJobInfo} />
      <label htmlFor="jobTitle">Position</label>
      <input id={id} type="text" name="position" onChange={changeJobInfo} />
      <label htmlFor="jobTitle">City</label>
      <input type="text" name="city" />
      <label htmlFor="jobTitle">State</label>
      <input type="text" name="state" />

      <label htmlFor="jobTitle">Start Date</label>
      <input type="text" name="startDate" />

      <label htmlFor="jobTitle">End Date</label>
      <input type="text" name="endDate" />

      <label htmlFor="description">Job Description</label>
      <textarea name="description" id=""></textarea>
      <button id={id} onClick={deleteExperience}>
        delete info
      </button>
      <hr></hr>
    </div>
  );
}

export default WorkExperience;
