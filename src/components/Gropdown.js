// import { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

// function BasicExample1({data1}) {
//   let [year,setYear]=useState(0);


//   function data1(evt){
//     console.log(evt.target.textContent.trim(),".>>>evt")
//     setYear(evt.target.textContent.trim())
//   }
//   return (
//     <>
  
//         <Dropdown>
//       <Dropdown.Toggle variant="light" >
//           {year}
//       </Dropdown.Toggle>
      
//       <Dropdown.Menu>
//         <Dropdown.Item   onClick={data1}>2024</Dropdown.Item>
//         <Dropdown.Item   onClick={data1}>2023</Dropdown.Item>
//         <Dropdown.Item onClick={data1}>2022</Dropdown.Item>
//         <Dropdown.Item onClick={data1}>2021</Dropdown.Item>

//         <Dropdown.Item onClick={data1}>2020</Dropdown.Item>
//         <Dropdown.Item onClick={data1}>2019</Dropdown.Item>
//         <Dropdown.Item onClick={data1}>2018</Dropdown.Item>

//         <Dropdown.Item onClick={data1}>2017</Dropdown.Item>
//         <Dropdown.Item onClick={data1}>2016</Dropdown.Item>
//         <Dropdown.Item onClick={data1}>2015</Dropdown.Item>
        
//       </Dropdown.Menu>
//     </Dropdown>
//     </>

//   );
// }

// export default BasicExample1;


import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample1({ data1 }) {
  const [year, setYear] = useState(0);

  function handleSelect(evt) {
    const selectedYear = evt.target.textContent.trim();
    setYear(selectedYear);        
    data1(selectedYear);          
  }

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="light">
          {year || "Select Year"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleSelect}>2024</Dropdown.Item>
          <Dropdown.Item onClick={handleSelect}>2023</Dropdown.Item>
          <Dropdown.Item onClick={handleSelect}>2022</Dropdown.Item>
          <Dropdown.Item onClick={handleSelect}>2021</Dropdown.Item>
          <Dropdown.Item onClick={handleSelect}>2020</Dropdown.Item>
          <Dropdown.Item onClick={handleSelect}>2019</Dropdown.Item>
          <Dropdown.Item onClick={handleSelect}>2018</Dropdown.Item>
          <Dropdown.Item onClick={handleSelect}>2017</Dropdown.Item>
          <Dropdown.Item onClick={handleSelect}>2016</Dropdown.Item>
          <Dropdown.Item onClick={handleSelect}>2015</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default BasicExample1;



