import React from "react";
import { Col } from "react-bootstrap";

function Giftees(name, surname, wishes) {
  return (
    <Col lg={4}>
      <div className='addForm'>
        <h2>
          {name} {surname}
        </h2>
        {/* {wishes.map((wish) => (
          <p>{wish}</p>
        ))} */}
      </div>
    </Col>
  );
}
export default Giftees;
