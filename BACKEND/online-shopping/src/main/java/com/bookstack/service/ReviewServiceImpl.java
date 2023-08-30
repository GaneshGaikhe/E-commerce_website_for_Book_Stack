package com.bookstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bookstack.dao.ReviewDao;
import com.bookstack.model.*;

@Service
public class ReviewServiceImpl implements ReviewService  {
	@Autowired
	private ReviewDao reviewDao;
	
	public void addReview(Review review) {
		this.reviewDao.save(review);
		
		
	}

	@Override
	public void deleteReview(Review review) {
		this.reviewDao.delete(review);
		
	}

	@Override
	public List<Review> getReviewsByBookId(int bookId) {
	    List<Review> reviews = reviewDao.findByBook_Id(bookId);
	    return reviews;
	}


//	@Override
//	public List<Review> getReviewsByBookId(int bookId) {
//	    List<Review> reviews = reviewDao.findByBookId(bookId);
//	    return reviews;
//	}


}
