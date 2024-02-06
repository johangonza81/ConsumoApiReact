import React, { useState } from 'react';

const Ordenar = ({ peliculaData, setPeliculaData }) => {
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;

    if (selectedOption === 'asc') {
      const sortedData = [...peliculaData].sort((a, b) => a.title.localeCompare(b.title));
      setPeliculaData(sortedData);


    } else if (selectedOption === 'desc') {
      const sortedData = [...peliculaData].sort((a, b) => b.title.localeCompare(a.title));
      setPeliculaData(sortedData);
    }
  };

  return (
    <div className='sorter'>
      <h2>Ordenar</h2>
      <select onChange={handleSortChange}>
        <option value="">Seleccionar...</option>
        <option value="asc">De la A a la Z</option>
        <option value="desc">De la Z a la A</option>
      </select>
    </div>
  );
};

export default Ordenar;