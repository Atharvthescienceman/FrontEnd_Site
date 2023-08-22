import React, { useState, useEffect } from 'react';
import '../App.css';

const deck_img_names = [];

function createDeck() {
  let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let type = ['C', 'D', 'H', 'S'];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < type.length; j++) {
      deck_img_names.push(values[i] + '-' + type[j]);
    }
  }
}

function Card({ imgName }) {
  createDeck();

  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImage = async () => {
      const loadedImages = await Promise.all(
        deck_img_names.map(async (imageName) => {
          const imageModule = await import(`../assets/cards/${imageName}.png`);
          return imageModule.default;
        })
      );
      setImages(loadedImages);
    };

    loadImage();
  }, []);

  // step 1
  //  loop >> try to find imgname in a list ,... then pass that img to html....
  return (
    <div id="Card">
      {images.map((img, index) => (
        <img key={index} src={img} alt="" className="imgCard" />
      ))}
    </div>
  );
}

export default Card;
