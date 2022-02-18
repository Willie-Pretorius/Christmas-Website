import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Mailbox from "./components/Mailbox";
import GiftHub from "./components/GiftHub";
import useToken from "./components/useToken.js";
import MyAccount from "./components/MyAccount.js";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState("login");
  const { token, setToken } = useToken();
  if (!token) {
    if (response === "login") {
      return (
        <div className='App'>
          <NavigationBar />
          <Login setResponse={setResponse} setToken={setToken} />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className='App'>
          <NavigationBar />
          <Register setResponse={setResponse} setToken={setToken} />
          <Footer />
        </div>
      );
    }
  }

  return (
    <div className='App'>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MyAccount />} />
          <Route path='/mailbox' element={<Mailbox />} />
          <Route path='/gifthub' element={<GiftHub />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
