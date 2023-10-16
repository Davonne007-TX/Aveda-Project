import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./css/TopHeader.css";
import Home from "./Home";
import OurStory from "./OurStory";
import HairScalp from "./HairScalp";
import SkinBody from "./SkinBody";
import { Styling } from "./Styling";

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
        <Link to="/hair-scalp">Hair & Scalp</Link>
        <Link to="skin-body">Skin & Body</Link>
        <Link to="/styling">Styling</Link>
      </div>
      <div className="black-background">
        Last Chance To Receive 50% off with new Registration:
        <Link className="signUp">Sign Up Today</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourStory" element={<OurStory />} />
        <Route path="/hair-scalp" element={<HairScalp />} />
        <Route path="/skin-body" element={<SkinBody />} />
        <Route path="/styling" element={<Styling />} />
      </Routes>
    </>
  );
}
