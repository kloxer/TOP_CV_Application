import { useState } from "react";

function EducationSection({
  educationState,
  addEducations,
  handleEducationChange,
  deleteEducation,
}) {
  return (
    <div>
      <button onClick={addEducations}>Add Education</button>
      <p>Total Education Fields: {educationState.length}</p>
      {educationState.map((education) => (
        <EducationForm
          key={education.id}
          id={education.id}
          education={education}
          onChange={handleEducationChange}
          deleteEducation={deleteEducation}
        />
      ))}
    </div>
  );
}

function EducationForm({ id, education, onChange, deleteEducation }) {
  // Local handler to pass changes up to the parent
  const handleChange = (e) => {
    onChange(id, e.target.name, e.target.value);
  };

  return (
    <div id={`education`}>
      <CreateField
        id={id}
        type="text"
        name="institution"
        text="Institution"
        education={education}
        onChange={handleChange}
      />
      <CreateField
        id={id}
        type="text"
        name="program"
        text="Program"
        education={education}
        onChange={handleChange}
      />

      <CreateField
        id={id}
        type="text"
        name="city"
        text="City"
        education={education}
        onChange={handleChange}
      />
      <CreateField
        id={id}
        type="text"
        name="state"
        text="State"
        education={education}
        onChange={handleChange}
      />
      <CreateField
        id={id}
        type="text"
        name="startDate"
        text="Start Date"
        education={education}
        onChange={handleChange}
      />
      <CreateField
        id={id}
        type="text"
        name="endDate"
        text="End Date"
        education={education}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <textarea id={id} name="description" onChange={handleChange}></textarea>
      <button id={id} onClick={deleteEducation} className="deleteEducation">
        Delete Educations
      </button>
      <br />
    </div>
  );
}

function CreateField({ id, type, name, text, education, onChange }) {
  return (
    <>
      <label htmlFor={`${name}-${id}`}>{text}:</label>
      <input id={`${name}-${id}`} type={type} name={name} onChange={onChange} />
    </>
  );
}
export default EducationSection;
