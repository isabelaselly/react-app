import React from "react";
import Header from "./components/header";  // ✅ Ensure the folder name is "components"
import Content from "./components/Content";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
