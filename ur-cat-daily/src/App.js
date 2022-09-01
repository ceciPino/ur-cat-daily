import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [catImage, setCatImage] = useState(null);


  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search", {headers: {
      'x-api-key': 'live_Had3ALgPydzhJW2vYswAjmgyvXLGYz7VrGBtonkJ5nqOKIt7xVTysss2W9uFx3zW'
    }})
      .then((response) => response.json())
      .then((cat) => {
        setCatImage(cat);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  console.log(catImage);


  console.log(catImage[0].url);

  return (
    <div className="App">
      <p> Hello ladies welcome to ur dosis diaria of kittens </p>
      <img src={catImage[0].url} alt="Imagen de kitty aleatoria"/>
    </div>
  );
}

export default App;
