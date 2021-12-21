import React from "react";
import HomeForm from "./homeForm";
import HomeTable from "./homeTable";
import Student from "./student";

function Home() {
  return (
    <div className="homeStyle">
     <HomeTable/>
      <HomeForm/>
    </div>
  );
}

export default Home;