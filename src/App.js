import React from "react";
import {Header} from "./components/Header";
import {Button} from "./components/Button";
import {Image} from "./components/Image";
import {Navbar} from "./components/Navbar";


function App() {
  return (
  <div>
    <Header />
    <Button label="add to cart" />
    <Button label="add to cart" />
    <Button label="add to cart" />
    <Button label="add to cart" />
    <Navbar />
    <Image />
  </div>
  );
}

export default App;