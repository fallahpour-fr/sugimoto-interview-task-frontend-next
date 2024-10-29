'use client'
import React, { useState } from 'react';
// import '../styles/Reviews.css';

const Reviews = () => {
  // State to track reviews and form inputs
  const [reviews, setReviews] = useState([
    { username: "Alice", rating: 4, comment: "Great product!" },
    { username: "Bob", rating: 5, comment: "Absolutely love it!" }
  ]);
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  // Handle form submission to add a new review
  const handleAddReview = (e) => {
    e.preventDefault();
    const newReview = { username, rating, comment };
    setReviews([...reviews, newReview]);
    setUsername('');
    setRating(5);
    setComment('');
  };

  return (
    <div className="reviews_container">
      <h3>User Reviews</h3>
      
      {/* Display reviews */}
      <ul className="review_list">
        {reviews.map((review, index) => (
          <li key={index} className="review_item">
            <strong>{review.username}</strong> - Rating: {review.rating} ★
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>

      {/* Form to add a new review */}
      <form className="review_form" onSubmit={handleAddReview}>
        <input 
          type="text" 
          placeholder="Your name" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <select 
          value={rating} 
          onChange={(e) => setRating(Number(e.target.value))} 
          required
        >
          <option value={5}>5 - Excellent</option>
          <option value={4}>4 - Very Good</option>
          <option value={3}>3 - Good</option>
          <option value={2}>2 - Fair</option>
          <option value={1}>1 - Poor</option>
        </select>
        <textarea 
          placeholder="Your review" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          required 
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
