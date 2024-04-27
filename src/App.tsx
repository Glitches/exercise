import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router";
import { Eyeglasses } from "./Views/Eyeglasses";
import { Sunglasses } from "./Views/Sunglasses";
import { Lenses } from "./Views/Lenses";

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
      </Layout>
    </div>
  );
}

export default App;
