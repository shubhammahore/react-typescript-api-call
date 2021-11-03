import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Message from "./todos";
function App() {
  const initialTutorialState = {
    userId: 0,
    id: 0,
    title: "",
    completed: false
  };
 
  

  const [activities, setActivities] = useState<Message>(initialTutorialState);
  
  useEffect(() => {
    axios
      .get("https://localhost:44362/WeatherForecast")
      .then((response) => {
        console.log(response.data);
        setActivities(response.data as Message);//Line where getting error Type is unknown
      });
      
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
         
          id : {activities.id}
         <br/>
          userId : {activities.userId}
          <br/>
          title : {activities.title}
          <br/>
          completed : {activities.completed}
          
        
      </header>
    </div>
  );
}

export default App;
