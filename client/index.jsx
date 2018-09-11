import React from 'react'
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1> Ramen Noodles </h1>
      {/* 
      This a random image I made, feel free to skip this in your code
      If you want to add your own image you can add it to the server/public/img folder 
      */}
      <img style={{width: '300px'}} src="hongshaorou.jpeg"/>
      <h2>Ingredient List</h2>
      <ul>
        <li>First Ingredient</li>
        <li>Second Ingredient</li>
        <li>Third Ingredient</li>
      </ul>
      <h2> Cooking Instructions </h2>
      <p> Add cooking instructions here </p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.react-container'));