import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]= useState(0);

  const prevPerson = () =>{
    setIndex((index)=>{
      index= index-1;
    })
    
  }
  const nextPerson = () => {
      setIndex((index)=>{
        index=index+1;
      })

  }
  const {name,job,image,text}= people[index];


  return <article className="review">
    <div className="img-container">
      <img src={image} alt="" className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick ={prevPerson} >< FaChevronLeft /></button>
      <button className="next-btn" onClick = {nextPerson}>< FaChevronRight /></button>
      <br/>
      <button className="random-btn">surprise me</button>
    </div>
  </article>;
};

export default Review;
