import React, { useState } from "react";
import { URLContext } from "./Context";
import BookStore from "./container/BookStore";
function App() {
  const urlHook = useState("http://localhost:3000/book/");
  return (
    <div className="App">
      <URLContext.Provider value={urlHook}>
        <BookStore />
      </URLContext.Provider>
    </div>
  );
}

export default App;
