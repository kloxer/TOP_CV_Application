import { useState } from "react";

function UserInput() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
  });

  function handleFormDataChange(e) {
    console.log(e);
  }

  return (
    <>
      <div id="userInfo">
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" />
          {formData.firstName}
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" />

          <label htmlFor="address">Address</label>
          <input type="text" name="address" />

          <label htmlFor="address">State</label>
          <input type="text" name="address" />

          <label htmlFor="postalCode">Postal Code</label>
          <input type="text" name="postalCode" />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" name="phoneNumber" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </form>
      </div>
    </>
  );
}

export default UserInput;
