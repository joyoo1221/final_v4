import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Login from "../routes/Login";
import MyPage from "../routes/MyPage";
import EditProfile from "../routes/EditProfile";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "../routes/MainPage";
import RecoPage from "../routes/RecoPage";
import LikePage from "../routes/LikePage";
import TestPage from "../routes/TestPage";

const AppRouter = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TestPage />}></Route>
        <Route path="/testPage" element={<TestPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mainPage" element={<MainPage />}></Route>
        <Route path="/recoPage" element={<RecoPage />}></Route>
        <Route path="/likePage" element={<LikePage />}></Route>
        <Route path="/myPage" element={<MyPage />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default AppRouter;
