import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './componentes/miApi';
import Sorter from './componentes/Sorter';
import Buscador from './componentes/Buscador';



function App() {
  const [peliculaData, setPeliculaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  
  return (
    <div >
      <h1>Peliculas de Animacion</h1><hr/> 
      <div className='componentsContainer'> 
        <Buscador peliculaData={peliculaData} setPeliculaData={setPeliculaData} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div className='componentsContainer'>
        <Sorter peliculaData={peliculaData} setPeliculaData={setPeliculaData}/>
      </div>
      <div className='componentsContainer2'>
        <MiApi
        peliculaData={peliculaData}
        setPeliculaData={setPeliculaData}/>
      </div>
    </div>
  )
}

export default App
