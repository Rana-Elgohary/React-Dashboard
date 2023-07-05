import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import {FiSettings} from "react-icons/fi"

import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar"

import Ecommerce from "./pages/Ecommerce"
import Calendar from "./pages/Calendar"
import ColorPicker from "./pages/ColorPicker"
import Editor from "./pages/Editor"
import Employees from "./pages/Employees"
import Customers from "./pages/Customers"
import Kanban from "./pages/Kanban"
import Orders from "./pages/Orders"

import Area from "./pages/Charts/Area"
import Bar from "./pages/Charts/Bar"
import ColorMap from "./pages/Charts/ColorMap"
import Finantial from "./pages/Charts/Finantial"
import Line from "./pages/Charts/Line"
import Pie from "./pages/Charts/Pie"
import Pyramid from "./pages/Charts/Pyramid"
import Stacked from "./pages/Charts/Stacked"

function App() {
  const activeMenu = true  

  return (
    <div className="App">
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4 z-50">
          <TooltipComponent content="Settings" position="Top">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full"
            style={{background:"blue"}}>
              <FiSettings/>
            </button>
          </TooltipComponent>
        </div>

        {
          activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar></Sidebar>
          </div>) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar></Sidebar>
          </div>)
        }

        <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <NavBar></NavBar>
            </div>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Ecommerce></Ecommerce>}></Route>
            <Route path="/ecommerce" element={<Ecommerce></Ecommerce>}></Route>

            <Route path="/orders" element={<Orders></Orders>}></Route>
            <Route path="/employees" element={<Employees></Employees>}></Route>
            <Route path="/customers" element={<Customers></Customers>}></Route>

            <Route path="/kanban" element={<Kanban></Kanban>}></Route>
            <Route path="/editor" element={<Editor></Editor>}></Route>
            <Route path="/calendar" element={<Calendar></Calendar>}></Route>
            <Route path="/color-picker" element={<ColorPicker></ColorPicker>}></Route>

            <Route path="/line" element={<Line></Line>}></Route>
            <Route path="/area" element={<Area></Area>}></Route>
            <Route path="/bar" element={<Bar></Bar>}></Route>
            <Route path="/pie" element={<Pie></Pie>}></Route>
            <Route path="/financial" element={<Finantial></Finantial>}></Route>
            <Route path="/color-mapping" element={<ColorMap></ColorMap>}></Route>
            <Route path="/pyramid" element={<Pyramid></Pyramid>}></Route>
            <Route path="/stacked" element={<Stacked></Stacked>}></Route>
          </Routes>
        </div>

      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;