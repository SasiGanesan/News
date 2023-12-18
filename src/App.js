import React, { useEffect } from "react";
import Header from "./components/Header";
import Searchbox from "./components/Searchbox";
import HomeScreen from "./components/HomeScreen";
import './App.css';
import server from "./server.js";
import Footer from "./components/Footer";

function App() {
 // const { articles, loading, error } = useserver();

//  if (loading) return <div>Loading...</div>;
//  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="App">
  <Header/>
  <Searchbox/>
  <HomeScreen/>
  <server/>
  <Footer/>
   </div>
  );
}

export default App;
