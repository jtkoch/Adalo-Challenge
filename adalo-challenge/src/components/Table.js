import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = (props) => {
  const [data, setData] = useState([
    {name: "", description: "", price: ""},
    {name: "", description: "", price: ""},
    {name: "", description: "", price: ""},
    {name: "", description: "", price: ""},
    {name: "", description: "", price: ""}
  ]);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  const create = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/", data)
      .then(res => data.history.push('/'))
      .catch(err => console.log(err));
  }

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
}

  return(
    <div>
      <form onSubmit={create}>
        <input placeholder="+ Add Column" value={props.setData} type="text" name="column" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Table;