import React, { useState } from "react";
import PropTypes from "prop-types";

async function addGiftee(credentials) {
  return fetch("http://localhost:4000/addgiftee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
function MyAccountForm({ setGifteeList }) {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const username = token.username;
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [wishCount, setWishCount] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const giftees = await addGiftee({
      name,
      surname,
      wishCount,
      username,
    });
    setGifteeList(giftees);
  };
  return (
    <div className='addForm'>
      <h1>Ho,Ho,Ho </h1>
      <h2>Welcome to Santa's List!</h2>
      <br />
      <h2>Add new Giftee</h2>
      <form onSubmit={handleSubmit} className='gifteeForm'>
        <p>
          Name:
          <span>
            <input
              onChange={(e) => setName(e.target.value)}
              className='inputStyle'></input>
          </span>
        </p>
        <p>
          Surname:
          <span>
            <input
              onChange={(e) => setSurname(e.target.value)}
              className='inputStyle'></input>
          </span>
        </p>
        <p>
          How many Wishes?
          <span>
            <input
              onChange={(e) => setWishCount(e.target.value)}
              type='number'
              className='inputStyle'></input>
          </span>
        </p>
        <br />
        <button type='submit' className='buttonStyle'>
          Login
        </button>
      </form>
    </div>
  );
}
MyAccountForm.propTypes = {
  setGifteeList: PropTypes.func.isRequired,
};
export default MyAccountForm;
