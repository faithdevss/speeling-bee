import React, { useState, useCallback } from "react";

import SpellingBee from "./pages/spelling-bee";
import AdvanceBee from "./pages/advance-bee";

import LearnBee from "./pages/learn-bee";

import _style from "./_style.module.css";

function App() {
  const [showSpelling, setShowSpelling] = useState(false);

  const handleToggle = useCallback(() => {
    setShowSpelling((prev) => !prev);
  }, []);

  return (
    <div className={_style.container}>
      {showSpelling ? (
        <SpellingBee toggleView={handleToggle} />
      ) : (
        <AdvanceBee toggleView={handleToggle} />
      )}
      <LearnBee />
    </div>
  );
}

export default App;
