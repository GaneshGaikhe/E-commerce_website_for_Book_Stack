package com.bookstack.dto;

public class AddToCartRequest {
	
	private int bookId;
	
	private int quantity;
	
	private int userId;

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "AddToCartRequest [bookId=" + bookId + ", quantity=" + quantity + ", userId=" + userId + "]";
	}
	
	
	
}
