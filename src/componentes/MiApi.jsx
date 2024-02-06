import { useEffect } from "react";
import Card from 'react-bootstrap/Card';




  const MiApi = ({peliculaData,setPeliculaData}) =>{
    const url='https://api.sampleapis.com/movies/animation'
    

    
    const fetchData= async() =>{
        try{
          const resp = await fetch(url);
          if(!resp.ok){
            throw new Error('Hay un error en Api')
          }
          const data = await resp.json()
          console.log('Respuesta del JSON',data)
          setPeliculaData(data)
          
          console.log('Respuesta de fectchData', data)
        }catch(error){
        console.error("error fetching data;",error)
    }
    };

    
    useEffect(() =>{
        fetchData();
    },[])


    return(
        <div className="cardContainer">
         
      {peliculaData.map((character) => (

        <div key={character.id} className="card">
        <Card style={{ width: '12rem' }}>
        <Card.Img className="cardImagen" variant="top" src={character.posterURL} />
        <Card.Body>
          <Card.Title>{character.title}</Card.Title>
          <Card.Text>
          {character.status}
          </Card.Text>
         
          
        </Card.Body>
        </Card>

         </div>
      ))}
    </div>
    )
      }

      export default MiApi;
  
