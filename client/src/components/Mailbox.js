import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Mailbox.css";

function Mailbox() {
  return (
    <div className='mailboxDiv mailboxPicture'>
      <h1>Santa's Letters</h1>
      <Container>
        <Row>
          <Col lg={4}>
            <div className='addForm'>
              <h2>User1</h2>
            </div>
          </Col>
          <Col lg={4}>
            <div className='addForm'>
              <h2>User2</h2>
            </div>
          </Col>
          <Col lg={4}>
            <div className='addForm'>
              <h2>User3</h2>
            </div>
          </Col>
          <Col lg={4}>
            <div className='addForm'>
              <h2>User2</h2>
            </div>
          </Col>
          <Col lg={4}>
            <div className='addForm'>
              <h2>User2</h2>
            </div>
          </Col>
          <Col lg={4}>
            <div className='addForm'>
              <h2>User2</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Mailbox;
