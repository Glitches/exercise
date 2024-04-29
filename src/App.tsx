import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router";
import { Eyeglasses } from "./views/Eyeglasses";
import { Lenses } from "./views/Lenses";
import { Footer } from "./components/Footer";
import { Sunglasses } from "./views/Sunglasses";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Routes>
          <Route path="/eyeglasses" element={<Eyeglasses />} />
          <Route path="/sunglasses" element={<Sunglasses />} />
          <Route path="/lenses" element={<Lenses />} />
        </Routes>
        <Footer>
          <div className="Subscribe">
            <a href="/">Subscribe to our newsletter</a>
          </div>
          <div className="Contacts">
            <input placeholder="Email"></input>
            <button>SIGN UP</button>
            <div className="Social">
              <a href="/">Twitter</a>
              <a href="/">Facebook</a>
            </div>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
