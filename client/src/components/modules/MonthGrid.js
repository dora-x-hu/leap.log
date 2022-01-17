import React, { Component, useEffect, useState } from "react";
import "./MonthGrid.css";

//parent: Month.js
//props: date as a state that depends on the month.js

//TO DO:
//buttons, month situations, (28, 30, 31 days)

const MonthGrid = (props) => {
  //const d = new Date();

  const [d, setUserDate] = useState(new Date(props.year, props.month, props.day));

  const moveRight = () => {
    let tomorrow = new Date(d.getFullYear(), (d.getMonth() + 1) % 12, d.getDate());
    //return d.getDate() + 1;
    setUserDate(tomorrow);
    //d.setDate(d.getDate() + 1);
    //console.log(d);
  };

  const moveLeft = () => {
    let tomorrow = new Date(d.getFullYear(), (d.getMonth() + 11) % 12, d.getDate());
    //return d.getDate() + 1;
    setUserDate(tomorrow);
    //d.setDate(d.getDate() + 1);
    //console.log(d);
  };

  const getMonth = (integer) => {
    let yeet = "";
    if (integer === 0) {
      yeet = "january";
    } else if (integer === 1) {
      yeet = "february";
    } else if (integer === 2) {
      yeet = "march";
    } else if (integer === 3) {
      yeet = "april";
    } else if (integer === 4) {
      yeet = "may";
    } else if (integer === 5) {
      yeet = "june";
    } else if (integer === 6) {
      yeet = "july";
    } else if (integer === 7) {
      yeet = "august";
    } else if (integer === 8) {
      yeet = "september";
    } else if (integer === 9) {
      yeet = "october";
    } else if (integer === 10) {
      yeet = "november";
    } else {
      yeet = "december";
    }
    return yeet;
  };

  return (
    <>
      <div className="month">
        <ul>
          <button className="prev" onClick={moveLeft}>
            &#10094;
          </button>
          <li className="next" onClick={moveRight}>
            &#10095;
          </li>
          <li className="title">
            {getMonth(props.month)}
            <br></br>
            <span>{props.year}</span>
          </li>
        </ul>
      </div>

      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>

      <ul className="days">
        <li> </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        {/* <li><span class="active">10</span></li> */}
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        {JSON.stringify(getMonth(props.month) !== "february") && <li>30</li>}
        {/* /* {if (JSON.stringify(getMonth(props.month))!==JSON.stringify("february") 
        {(<li>30</li>)})} */}
        <li>31</li>
      </ul>
    </>
  );
};

export default MonthGrid;
