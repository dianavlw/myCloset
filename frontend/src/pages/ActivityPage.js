import React from 'react';
import TodoList from '../components/BasicPages/TodoList';
import Footer from '../components/Footer/Footer';
import Weather from '../components/Weather/Weather'
import { Row, Col } from 'react-bootstrap'
import Profile from "../components/BasicPages/Profile"


function ActivityPage(props) {
  
  
    return (

      <div className="container">
      <hr />
      <h1 className="activity">
            Breath.Chill.DrinkBoba. 
            <hr />
          <Profile img="https://www.flaticon.com/svg/vstatic/svg/3498/3498590.svg?token=exp=1619580364~hmac=d61ce5c04e1bdb11b9812b54b21c172a" />
          </h1>
          <p> Is it bobaTea Time?</p>
          <hr />
          <Weather />
           <hr />
          <TodoList />
       
      </div>      

 
    )
}

export default ActivityPage; 