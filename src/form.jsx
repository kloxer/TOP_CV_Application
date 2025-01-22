import { useState } from "react";
import AddEducation from "./education";
import "./index.css";

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
      <h2 class="fullName">
        {form.firstName} {form.lastName}
      </h2>
      <p class="personInfo">
        {form.city}, {form.state}, {form.postalCode} &#x2022; {form.phoneNumber}{" "}
        &#x2022; {form.email}
      </p>
      <hr />
      <hr />
    </div>
  );
}

function MiddleResume({ form }) {
  return <></>;
}
function DisplayResume({ form }) {
  return (
    <div id="resume">
      <TopResume form={form} />
      <MiddleResume form={form} />
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

  const [educationData, setEducationData] = useState({
    institution: "York University",
    program: "Arts",
    city: "Toronto",
    state: "ON",
    startDate: "2022",
    endDate: "TBD",
  });

  const [showEducation, setEducationState] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  }
  function handleEducationChange(e) {
    const { name, value } = e.target;

    setEducationData((educationData) => ({
      ...educationData,
      [name]: value,
    }));
  }

  function showEducationForm() {
    setEducationState(true);
  }
  function Test() {
    return (
      <>
        <h1>test</h1>
      </>
    );
  }

  return (
    <div id="wholePage">
      <UserInput form={form} onChange={handleChange} />
      <DisplayResume form={form} />
      <button onClick={showEducationForm}>Add Education</button>
      {showEducation && (
        <AddEducation
          educationData={educationData}
          onChange={handleEducationChange}
        />
      )}

      <button onClick={Test}>sdsff4</button>
    </div>
  );
}

export default ShowInput;
