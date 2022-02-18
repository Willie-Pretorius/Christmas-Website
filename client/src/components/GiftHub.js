import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Gifthub.css";
function GiftHub() {
  return (
    <div className='giftHub gifthubPicture'>
      <h1>Gifthub</h1>
      <Container>
        <Row>
          <Col lg={4}>
            <div className='addForm'>
              <h1>Ho,Ho,Ho </h1>
              <h2>Welcome</h2>
              <br />
              <h2>What do you want for Christmas?</h2>
              <br />
              <form className='gifteeForm'>
                <p>
                  <span>
                    <input className='inputStyle'></input>
                  </span>
                </p>
                <br />
                <button type='submit' className='buttonStyle'>
                  Add Wish
                </button>
              </form>
            </div>
          </Col>
          <Col lg={8}>
            <div className='addForm'>
              <h2>My Wishlist</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default GiftHub;
