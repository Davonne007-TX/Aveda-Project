import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./css/TopHeader.css";
import Home from "./Home";
import OurStory from "./OurStory";

export default function TopHeader() {
  return (
    <>
      <div className="top-header">
        <p>Find Stores & Salons</p>
        <p>Join Rewards</p>
        <p>Sign in</p>
      </div>
      <h1>Ava's</h1>

      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="ourStory">Our Story</Link>
      </div>
      <div className="black-background">
        Last Chance To Receive 50% off with new Registration:
        <Link className="signUp">Sign Up Today</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourStory" element={<OurStory />} />
      </Routes>
    </>
  );
}
