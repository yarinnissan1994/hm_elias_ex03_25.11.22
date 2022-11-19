import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  ContactUsPage,
  GamesPage,
  HomePage,
  MoviesPage,
  NotFoundPage,
} from "./pages";
import { MenuComponent } from "./components/menuComponent/menuComponent";

function App() {
  return (
    <div className="page-order">
      <header>
        <MenuComponent />
      </header>
      <div className="pageContent">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contactus" element={<ContactUsPage />}></Route>
          <Route path="/games" element={<GamesPage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/notfound" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
