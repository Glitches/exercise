import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router";
import { Eyeglasses } from "./views/Eyeglasses";
import { Sunglasses } from "./views/Sunglasses";
import { Lenses } from "./views/Lenses";
import { Footer } from "./components/Footer";

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
          <a href="/">Subscribe to our newsletter</a>
          <input></input>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
