package com.bookstack.dto;

public class CartDataResponse {
	
private int cartId;
	
	private int bookId;
	
	private String bookName;
	
	private String bookDescription;
	
	private String bookImage;
	
	private int quantity;

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookDescription() {
		return bookDescription;
	}

	public void setBookDescription(String bookDescription) {
		this.bookDescription = bookDescription;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public String getBookImage() {
		return bookImage;
	}

	public void setBookImage(String bookImage) {
		this.bookImage = bookImage;
	}

	@Override
	public String toString() {
		return "CartDataResponse [cartId=" + cartId + ", bookId=" + bookId + ", bookName=" + bookName
				+ ", bookDescription=" + bookDescription + ", bookImage=" + bookImage + ", quantity="
				+ quantity + "]";
	}

}
