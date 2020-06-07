import React, { useState } from 'react';
import URLContext from './Context'
import SimpleCard from './component/Card';
function App() {

  const urlHook = useState("http://localhost:3000/book/");
  return (
    <div className="App">
      <URLContext.Provider value={urlHook}>
        <SimpleCard />
      </URLContext.Provider>
    </div>
  );
}

export default App;


