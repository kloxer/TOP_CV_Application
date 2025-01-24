import { useState } from "react";
import AddEducation from "./education";
import "./index.css";
import EducationSection from "./education.jsx";

function UserInput({ form, onChange }) {
  return (
    <>
      <div id="userInfo">
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            value={form.firstName}
            type="text"
            name="firstName"
            onChange={onChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={onChange}
            value={form.lastName}
          />
          <label htmlFor="city">City</label>
          <input
            value={form.city}
            type="text"
            name="city"
            onChange={onChange}
          />
          <label htmlFor="state">State</label>
          <input
            value={form.state}
            type="text"
            name="state"
            onChange={onChange}
          />
          <label htmlFor="postalCode">Postal Code</label>
          <input
            value={form.postalCode}
            type="text"
            name="postalCode"
            onChange={onChange}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={form.phoneNumber}
            type="number"
            name="phoneNumber"
            onChange={onChange}
          />
          <label htmlFor="email">Email</label>
          <input
            value={form.email}
            type="email"
            name="email"
            onChange={onChange}
          />
        </form>
      </div>
    </>
  );
}

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
      <hr />
    </div>
  );
}

function MiddleResume({ education }) {
  return (
    <div id="resumeMiddle">
      <div id="educations">
        <h2>Education</h2>
        {education.map((education) => (
          <div class="singleEducation">
            <p>
              <span class="left">{education.institution}</span>
              <span class="right">
                {education.city},{education.state}
              </span>
            </p>
            <p>
              <span class="left">{education.program}</span>
              <span class="right">
                {education.startDate} - {education.endDate}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
function DisplayResume({ form, education }) {
  return (
    <div id="resume">
      <TopResume form={form} />
      <MiddleResume education={education} />
    </div>
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
    phoneNumber: "647 742 7521",
    email: "johnDoe@gmail.com",
  });

  const [educationState, setEducationState] = useState([]);
  const addEducations = () => {
    setEducationState((prevState) => [
      ...prevState,
      {
        id: Date.now(), // Generate a unique id
        institution: "Waterloo",
        program: "Dance",
        city: "CA",
        state: "LA",
        startDate: "2020",
        endDate: "2030",
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

  return (
    <div id="wholePage">
      <div className="leftSide">
        <UserInput form={form} onChange={handleChange} />
        <p>sdds</p>
        <EducationSection
          educationState={educationState}
          addEducations={addEducations}
          handleEducationChange={handleEducationChange}
        />
      </div>
      <div className="resume">
        <DisplayResume form={form} education={educationState} />
      </div>
    </div>
  );
}

export default ShowInput;
