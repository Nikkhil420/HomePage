<<<<<<< HEAD
import React from 'react';


import Cards from './Cards';
import './Cards.css';
import './CreateOrganization.css';
import CreateOrganization from './CreateOrganization';

function App() {
  return (
    <div className="App">
      <CreateOrganization />
    <Cards/>
    </div>
=======

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";
import Home from "./components/home/Home";
import Manage from "./components/manage/Manage";
import "./App.css";


import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';


function App() {

  const menuItems = [
    { id: 1, title: "Home", to:"/" },
    { id: 2, title: "Manage Campaigns", to:"/managecampaigns" },
    { id: 3, title: "Report Generation", to:"/reportgeneration" },
    { id: 4, title: "Saved Lists", to:"/savedlists" },
    { id: 5, title: "Find Influencers", to:"/findinfluencers" },
    { id: 6, title: "Influencers Base", to:"/influencersbase" },
  ];

  const accountTitles = [
    { id: 1, title: "Hire Influencers", to:"/hireinfluencers" },
    { id: 2, title: "Settings", to:"/settings" },
    { id: 3, title: "Live Support", to:"/livesupport" },
  ];

  return (

    <Router>
      <div className="App">
          <SideBar menuItems={menuItems} accountTitles={accountTitles} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/managecampaigns" element={<Manage />} />
          </Routes>
      </div>
    </Router>
=======
    <div className="App">
<Header/>
     
    </div>

>>>>>>> origin/main
  );
}

export default App;