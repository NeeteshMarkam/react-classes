import React from "react";
import Card from "./components/Card.jsx";
import Nav from "./components/Nav.jsx";
const App = () => {
  return (
    <>
    <Nav></Nav>

    <div className="bg-amber-300 rounded-3xl flex flex-wrap m-20 h-90 gap-10">
      <Card></Card>
      <Card></Card>
    </div>
    </>
  );
};

export default App;
