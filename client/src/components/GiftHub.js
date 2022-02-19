import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Gifthub.css";
import AddWishesForm from "./AddWishesForm";

function GiftHub() {
  const { id } = useParams();
  const [wishlist, setWishlist] = useState({
    name: "",
    surname: "",
    wishes: [],
  });

  //------------------------------------------------
  useEffect(() => {
    const string = id;
    fetchWishlist({ id: { string } });
  }, []);

  //----------------------------------------------
  const fetchWishlist = async (id) => {
    const data = await fetch("http://localhost:4000/myWishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    let object = await data.json();
    setWishlist(object);
  };

  console.log(wishlist);
  return (
    <div className='giftHub gifthubPicture'>
      <Container>
        <Row>
          <Col lg={4}>
            <AddWishesForm id={id} setWishlist={setWishlist} />
          </Col>

          <Col lg={8}>
            <div className='addForm'>
              <h2>My Wishlist</h2>
              {wishlist.wishes.map((wish) => (
                <p>{wish}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default GiftHub;
