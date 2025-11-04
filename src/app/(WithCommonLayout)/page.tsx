"use client"

import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

const HomePage =  () => {

const context = useContext(UserContext);
console.log(context)

  return (
    <div>
      <h1>This is HomePage component</h1>
    </div>
  );
};

export default HomePage;
