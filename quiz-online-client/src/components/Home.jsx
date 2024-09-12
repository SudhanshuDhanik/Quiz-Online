import React, { useState } from "react";
import JarvisAssistant from "./JarvisAssistant";

const Home = () => {
  const [isJarvisVisible, setJarvisVisible] = useState(false);

  const toggleJarvis = () => {
    setJarvisVisible(prevState => !prevState);
  };

  return (
    <main>
      <h2 className="mt-5 text-warning">Welcome Admin, you can test the quiz</h2>
      <button onClick={toggleJarvis} className="btn btn-primary">
        {isJarvisVisible ? "Hide JARVIS" : "Show JARVIS"}
      </button>
      {isJarvisVisible && <JarvisAssistant />}
    </main>
  );
};

export default Home;
