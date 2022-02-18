import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login({ setToken, setResponse }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
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
                <h2>Sign in:</h2>
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
                    Login
                  </button>
                  <button
                    onClick={() => setResponse("register")}
                    className='buttonStyle'>
                    Register
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={8}>
              {/* <img
                alt='Christmas tree'
                className='titleImg'
                src={TitleImage}></img> */}
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setResponse: PropTypes.func.isRequired,
};

export default Login;
