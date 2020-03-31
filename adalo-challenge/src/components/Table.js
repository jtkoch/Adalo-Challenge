import React from 'react';

const Table = (props) => {

  const create = e => {
    e.preventDefault();
    localStorage.setItem("name", e.target.value)
  }

  const handleChange = e => {
    let change = {}
    change[e.target.name] = e.target.value
    props.setData(change)
}

  return(
    <div>
      <form onSubmit={create}>
        <input placeholder="+ Add Column" value={props.data} type="text" name="column" onChange={props.handleChange} />
      </form>
    </div>
  );
};

export default Table;