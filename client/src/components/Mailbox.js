import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Giftees from "./Giftees";
import "./Mailbox.css";

function Mailbox() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const id = token.token;
  console.log(id);
  useEffect(() => {
    fetchGiftee({
      id,
    });
  }, []);
  const [gifteeList, setGifteeList] = useState({
    response: "",
    list: [],
  });

  const fetchGiftee = async (credentials) => {
    const data = await fetch("http://localhost:4000/userGiftLists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    let items = await data.json();
    setGifteeList(items);
  };
  console.log(gifteeList);
  return (
    <div className='mailboxDiv mailboxPicture'>
      <h1>Santa's Letters</h1>
      <Container>
        <Row>
          {gifteeList.list.map((user) => (
            <Col lg={4}>
              <div className='addForm'>
                <h2>
                  {user.name} {user.surname}
                </h2>
                <br></br>
                {user.wishes.map((wish) => (
                  <p>{wish}</p>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Mailbox;
{
  /* {wishes.map((wish) => (
                    <p>{wish}</p>
                  ))} */
}
