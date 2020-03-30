import React from 'react';
import './App.scss';
import * as ReactBootStrap from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Table from './components/Table';

const App = () => {
  const info = [
    {name: "", description: "", price: ""},
    {name: "", description: "", price: ""},
    {name: "", description: "", price: ""},
    {name: "", description: "", price: ""},
    {name: "", description: "", price: ""}
  ];
  
  const renderData = (info, index) => {
    return(
      <tr key={index} >
        <td>{info.name}</td>
        <td>{info.description}</td>
        <td>{info.price}</td>
      </tr>
    );
  }

  return(
    <div className="App">
      <ReactBootStrap.Table striped bordered hover>
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <Route>
              <th><Link to="/Table" component={Table}>+ Add Column</Link></th>
            </Route>
          </tr>
        </thead>
        <tbody className="table-body">
          {info.map(renderData)}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  )
}

export default App;