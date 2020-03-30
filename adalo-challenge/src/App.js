import React, {useState} from 'react';
import './App.scss';
import * as ReactBootStrap from 'react-bootstrap';

const App = () => {
  const [data, setData] = useState([
    {name: "Bianchi", description: "Road Bike", price: "$3000"},
    {name: "Surly", description: "Tour Bike", price: "$1500"},
    {name: "Peugeot", description: "Vintage Road Bike", price: "$800"},
    {name: "Yeti", description: "Mountain Bike", price: "$4500"}
  ]);

  console.log(data);

  const renderData = (data, index) => {
    return(
      <tr key={index} >
        <td>{data.name}</td>
        <td>{data.description}</td>
        <td>{data.price}</td>
      </tr>
    );
  }

  return(
    <div className="App">
      <ReactBootStrap.Table striped bordered hover>
        <thead className="table-head">
          <tr className="table-row">
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map(renderData)}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  )
}

export default App;