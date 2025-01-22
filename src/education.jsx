function AddEducation({ educationData, onChange }) {
  return (
    <div id="education">
      <label htmlFor="institution">Institution</label>
      <input
        type="text"
        name="university"
        onChange={onChange}
        value={educationData.institution}
      />
      <label htmlFor="program">Program</label>
      <input type="text" name="program" onChange={onChange} />

      <label htmlFor="city">City</label>
      <input type="text" name="city" onChange={onChange} />
      <label htmlFor="state">State</label>
      <input type="text" name="state" onChange={onChange} />

      <label htmlFor="startDate">Start Date</label>
      <input type="text" name="startDate" onChange={onChange} />

      <label htmlFor="endDate">End Date</label>
      <input type="text" name="endDate" onChange={onChange} />
    </div>
  );
}

export default AddEducation;
