package com.bookstack.service;

import com.bookstack.dto.AddToCartRequest;
import com.bookstack.dto.CartResponse;
import com.fasterxml.jackson.core.JsonProcessingException;

public interface CartService {
	
	public void addToCart(AddToCartRequest addToCartRequest);
	
	public CartResponse getMyCart(int userId) throws JsonProcessingException;
	
	public void removeCartItem(int cartId);

}
