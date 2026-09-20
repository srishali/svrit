import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Dreams from "./components/Dreams";
import BetterWorld from "./components/BetterWorld";
import SubmitCV from "./components/SubmitCV";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const Home = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <Hero />
    <About />
    <Services />
    <Dreams />
    <BetterWorld />
    <SubmitCV />
    <Clients />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
