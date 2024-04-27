import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Card></Card>
      </Layout>
    </div>
  );
}

export default App;
