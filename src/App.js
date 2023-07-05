import React from "react";
import './App.css'
import { BrowserRouter } from "react-router-dom"
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import {FiSettings} from "react-icons/fi"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="flex right-4 bottom-4 z-50">
          <TooltipComponent content="hehe" position="Top">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl">
              <FiSettings/>
            </button>
          </TooltipComponent>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;