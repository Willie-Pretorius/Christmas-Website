import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

async function loginUser(credentials) {
  return fetch("http://localhost:4000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Register({ setToken, setResponse }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [register, setRegister] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
      email,
    });
    setRegister(token.response);
  };
  return (
    <div>
      <header className='App-header titlePicture'>
        <Container>
          <Row>
            <Col lg={4}>
              <div className='titleText goldText'>
                <h1>Ho,Ho,Ho </h1>
                <h2>Have a Merry Christmas!</h2>
                <br />
                <h2>Registration {register}</h2>
                <h2>Enter your details:</h2>
                <form onSubmit={handleSubmit}>
                  <p>
                    Username
                    <span>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        name='username'
                        className='inputStyle'></input>
                    </span>
                  </p>
                  <p>
                    Email Address:
                    <span>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className='inputStyle'></input>
                    </span>
                  </p>
                  <p>
                    Password
                    <span>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        name='password'
                        className='inputStyle'></input>
                    </span>
                  </p>

                  <br />
                  <button type='submit' className='buttonStyle'>
                    Register
                  </button>
                  <button
                    onClick={() => setResponse("login")}
                    className='buttonStyle'>
                    Login
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={8}></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

Register.propTypes = {
  setToken: PropTypes.func.isRequired,
  setResponse: PropTypes.func.isRequired,
};

export default Register;
