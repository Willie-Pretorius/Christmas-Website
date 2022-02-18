import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MyAccount.css";
import MyAccountForm from "./MyAccountForm";
// async function fetchGiftee(credentials) {
//   return fetch("http://localhost:4000/fetchgiftee", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

function MyAccount() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const username = token.username;
  useEffect(() => {
    fetchGiftee({
      username,
    });
  }, []);
  const [gifteeList, setGifteeList] = useState({
    response: "",
    list: [],
  });

  const fetchGiftee = async (credentials) => {
    const data = await fetch("http://localhost:4000/fetchgiftee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    let items = await data.json();
    setGifteeList(items);
  };
  // const arr = gifteeList.list;
  // console.log(items);
  return (
    <div className='myAccount   myAccPicture'>
      <h1>My Account</h1>
      <Container>
        <Row>
          <Col lg={4}>
            <MyAccountForm setGifteeList={setGifteeList} />
          </Col>
          <Col lg={8}>
            <div className='addForm'>
              <h2>Santa's List</h2>
              <p className='response'>{gifteeList.response}</p>
              {gifteeList.list.map((user) => (
                <p>{user.name + " " + user.surname + " " + user.URL}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MyAccount;
