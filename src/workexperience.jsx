import { useState } from "react";

function WorkExperience({
  jobs,
  changeJobInfo,
  addWorkExperience,
  deleteExperience,
}) {
  return (
    <>
      <button className="addMore work" onClick={addWorkExperience}>
        Add Experience
      </button>

      {jobs.map((job) => (
        <ExperienceForm
          key={job.id}
          id={job.id}
          changeJobInfo={changeJobInfo}
          deleteExperience={deleteExperience}
          job={job}
        />
      ))}
    </>
  );
}
function ExperienceForm({ id, changeJobInfo, deleteExperience, job }) {
  return (
    <div class="userInfo" id={id}>
      <h2 class="fieldTitle">{job.workplace}</h2>
      <div className="labelInput">
        <label htmlFor="location">Workplace</label>
        <input id={id} type="text" name="workplace" onChange={changeJobInfo} />
      </div>
      <div className="labelInput">
        <label htmlFor="jobTitle">Position</label>
        <input id={id} type="text" name="position" onChange={changeJobInfo} />
      </div>
      <div className="labelInput">
        <label htmlFor="jobTitle">City</label>
        <input id={id} type="text" name="city" onChange={changeJobInfo} />
      </div>
      <div className="labelInput">
        <label htmlFor="jobTitle">State</label>
        <input id={id} type="text" name="state" onChange={changeJobInfo} />
      </div>

      <div className="labelInput">
        <label htmlFor="jobTitle">Start Date</label>
        <input id={id} type="text" name="startDate" onChange={changeJobInfo} />
      </div>

      <div className="labelInput">
        <label htmlFor="jobTitle">End Date</label>
        <input id={id} type="text" name="endDate" onChange={changeJobInfo} />
      </div>

      <label htmlFor="description">Job Description</label>
      <textarea name="description" id={id} onChange={changeJobInfo}></textarea>
      <button className="deleteButton" id={id} onClick={deleteExperience}>
        Delete
      </button>
      <hr></hr>
    </div>
  );
}

export default WorkExperience;
