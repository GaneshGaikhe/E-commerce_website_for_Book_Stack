package com.bookstack.service;


import com.bookstack.model.Review;

public interface ReviewService {

	 public void addReview(Review review);

	public void deleteReview(Review review);

	public java.util.List<Review> getReviewsByBookId(int bookId);
}
