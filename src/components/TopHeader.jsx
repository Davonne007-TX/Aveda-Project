import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./css/TopHeader.css";
import Home from "./Home";
import OurStory from "./OurStory";
import HairScalp from "./HairScalp";
import SkinBody from "./SkinBody";
import { Styling } from "./Styling";
import Register from "./Register";
import SignIn from "./SignIn";
import JoinRewards from "./JoinRewards";
import FindLocations from "./FindLocations";

export default function TopHeader() {
  //useNavigate
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  function goToSignIn() {
    navigate("/signIn");
  }

  function joinRewards() {
    navigate("/joinRewards");
  }

  function findLocations() {
    navigate("/findLocations");
  }

  return (
    <>
      <div className="top-header">
        <p onClick={findLocations}>Find Stores & Salons</p>
        <p onClick={joinRewards}>Join Rewards</p>
        <p onClick={goToSignIn}>Sign in</p>
      </div>
      <h1 onClick={goToHome} className="mt-10 text-3xl font-lobster">
        Ava's
      </h1>

      <div className="navigation text-black">
        <Link to="/">Home</Link>
        <Link to="ourStory">Our Story</Link>
        <Link to="/hair-scalp">Hair & Scalp</Link>
        <Link to="skin-body">Skin & Body</Link>
        <Link to="/styling">Styling</Link>
      </div>
      <div className="black-background">
        Last Chance To Receive 50% off with new Registration:
        <Link to="/register" className="signUp">
          Sign Up Today
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourStory" element={<OurStory />} />
        <Route path="/hair-scalp" element={<HairScalp />} />
        <Route path="/skin-body" element={<SkinBody />} />
        <Route path="/styling" element={<Styling />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/joinRewards" element={<JoinRewards />} />
        <Route path="/findLocations" element={<FindLocations />} />
      </Routes>
    </>
  );
}
