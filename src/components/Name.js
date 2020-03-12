import React from 'react';

const Name = ({ onClickFunction }) => (
  <button className="btn btn-primary name" name="name" onClick={onClickFunction}>Name</button>
);

export default Name;
