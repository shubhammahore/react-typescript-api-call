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


 
  const headers= { 
    'Content-Type': 'application/json'
  }
  
  const [activities, setActivities] = useState<Message>(initialTutorialState);
  
  useEffect(() => {

    const headers= { 
      'Content-Type': 'application/json'
    }
    let data = JSON.stringify("Sample");

    //Post API
    axios.post("https://localhost:44371/api/Values",data,{headers})
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log("POST API Call success");
      })
      .catch((error) => {
        console.log(error);
      });

      //Get API
      axios
      .get("https://localhost:44362/WeatherForecast")
      .then((response) => {
        console.log(response.data);
        console.log("Get API Call success");
        setActivities(response.data as Message);//Line where i was getting error Type is unknown
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
