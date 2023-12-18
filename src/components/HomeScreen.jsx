import React from 'react';
import  '../App.css';


const HomeScreen = ({title, description,url,urlToImage}) => {
  return (
    <>
    <div id='news-con'>
        <div id='news-item'>
        <img id='img-cls' src={urlToImage} alt={urlToImage}/>
        <h4><a id='link' href={url}>{title}</a></h4>
        <p>{description}</p>
        <h3>Read full articles <a href={url}>➙</a> </h3>
        </div>
        </div>
    </>
  )
}

export default HomeScreen