import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample1() {
  let [year,setYear]=useState(0);


  function data1(evt){
    console.log(evt)
    setYear(evt.target.value)
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" >
      <p>{year}</p>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item   onChange={data1}>2024</Dropdown.Item>
        <Dropdown.Item   onChange={data1}>2023</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2022</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2021</Dropdown.Item>

        <Dropdown.Item href="#/action-1">2020</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2019</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2018</Dropdown.Item>

        <Dropdown.Item href="#/action-1">2017</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2016</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2015</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample1;