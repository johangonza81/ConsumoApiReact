
import React, { useState } from 'react';

const Buscador = ({ peliculaData,setPeliculaData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleSearch = () => {
    const movies = peliculaData.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if(searchTerm !== ""){
        setPeliculaData(movies)
        setSearchTerm('')
        return
    }else{
    null;
    
  }};

  return (
    <div className='componentsContainer2'>
       <h2>Buscar</h2> 
      <input
        type="text"
        placeholder="Buscar película..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      
    </div>
  );
};

export default Buscador;