import React from "react";
import Left from "./HomeComponents/Left";
import Center from "./HomeComponents/Center";
import Right from "./HomeComponents/Right";

const Home = () => {
  return (
    <div className="h-[calc(100vh-100px)]">
      <div className="flex flex-row">
        <div className="w-1/5 h-[calc(100vh-100px)]">
          <Left />
        </div>
        <div className="w-1/3 h-[calc(100vh-100px)]">
          <Center />
        </div>
        <div className="w-1/2 h-[calc(100vh-100px)]">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Home;
