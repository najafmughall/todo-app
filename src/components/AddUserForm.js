import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const initialFormState = { id: null, name: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name) return;

        addUser(user);
        console.log(user);
        setUser(initialFormState);
        console.log("aaa", user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />

      <button className="btn btn-primary">Add new user</button>
    </form>
  );
};

export default AddUserForm;
