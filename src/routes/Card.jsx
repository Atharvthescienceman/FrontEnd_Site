import React, { useState, useEffect } from 'react';
import '../App.css';


function Card(props) {

  const [images, setImages] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try{
          const imageModule = await import(`../assets/cards/${props.imgName}.png`);
          setImages(imageModule.default);
      } catch (error){
        console.log("error while loading image ",error)
      }
    };
    loadImage();
  }, []);

  return (
    <div id="Card">
        <img src={images} alt="" className="imgCard" />
    </div>
  );
}

export default Card;
