import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    //without destructuring feature without ImageCard.js
    //const images = props.images.map(image => <img key={image.id} alt={image.description} src={image.urls.small}/>);

    //using destructuring feature without ImageCard.js
    //const images = props.images.map(({id, description, urls}) => <img key={id} alt={description} src={urls.regular}/>);

    //using ImageCard.js
    const images = props.images.map((image) => <ImageCard key={image.id} image={image} />);
    
    return <div className="image-list">{images}</div>
};


export default ImageList;