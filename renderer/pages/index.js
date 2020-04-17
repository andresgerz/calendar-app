import React, { Component } from 'react'
import { useState } from 'react'

const index = () => {
  const [days, setDays] = useState(
    [ 'Monday', 'Tuesday', 'Widnesday', 'Thursday', 'Friday', 'Sathurday', 'Sunday' ]);
  const [hours, setHours] = useState(new Array(35).fill(0));


  return (
    <div className="container">
      <h1>Calendar app</h1>
      
      <div className="aside-container">
        <button id="button-add">+</button>
      </div>

      <div>
        <div className="days-container">
        {
          days.map((day, index) => {
          
            return(<div className="item" key={index}>{day}</div> )
          })
        }
               

        </div>
        <div className="hours-container">
          {
            hours.map((day, index) => {
            
              return(<div className="item" key={index}>{index}</div> )
            })
          }
        </div>
        
      </div>

      <style jsx>{`
        
        .days-container {
          display: grid;
          grid-template-columns: repeat(7, 160px);
          grid-template-rows: repeat(1, 80px);
        }

        .hours-container {
          display: grid;
          grid-template-columns: repeat(7, 160px);
          grid-template-rows: repeat(5, 80px);
        }
      
        h1 {
          color: red;
          font-size: 50px;
        }

        div {
          color: #000;
        }

        .item {
          border: 1px solid #dbdde1;
          text-align: center;  
        }


        #button-add {
          background-color: #00F;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px;
        }


      `}</style>
    </div>
  )

}

export default index;