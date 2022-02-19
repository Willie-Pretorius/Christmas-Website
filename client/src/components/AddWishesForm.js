import React, { useState } from "react";
import "./Gifthub.css";
import PropTypes from "prop-types";

async function addWish(object) {
  return fetch("http://localhost:4000/addWish", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  }).then((data) => data.json());
}
function AddWishesForm({ setWishlist, id }) {
  const [wish, setWish] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const new_wish = JSON.stringify(wish);

    const object = await addWish({
      id,
      wish,
    });
    setWishlist(object);
  };
  return (
    <div className='addForm'>
      <h1>Ho,Ho,Ho </h1>
      <h2>Welcome</h2>
      <br />
      <h2>What do you want for Christmas?</h2>
      <br />
      <form onSubmit={handleSubmit} className='gifteeForm'>
        <p>
          <span>
            <input
              onChange={(e) => setWish(e.target.value)}
              className='inputStyle'></input>
          </span>
        </p>
        <br />
        <button type='submit' className='buttonStyle'>
          Add Wish
        </button>
      </form>
    </div>
  );
}
AddWishesForm.propTypes = {
  setWishlist: PropTypes.func.isRequired,
  id: PropTypes.func.isRequired,
};
export default AddWishesForm;
