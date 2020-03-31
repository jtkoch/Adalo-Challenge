import React, { useState, useEffect } from 'react';
import './App.scss';
import * as ReactBootStrap from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Table from './components/Table';

const App = () => {
  const [data, setData] = useState([
    {name: "Name"},
    {name: "Description"},
    {name: "Price"},
  ]);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])
  
  const renderData = (data, index) => {
    return(
      <tr key={index} >
        <td>{data.description}</td>
        <td>{data.price}</td>
        <td></td>
      </tr>
    );
  }

  return(
    <div className="App">
      <ReactBootStrap.Table striped bordered hover>
        <thead className="table-head">
          <tr>
            {data.map(column => <th>{column.name}</th>) }
            <Route>
              <th><Link to="/Table" component={Table}>+ Add Column</Link></th>
            </Route>
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