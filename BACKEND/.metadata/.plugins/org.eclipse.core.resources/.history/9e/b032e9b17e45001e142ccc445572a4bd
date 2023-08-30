package com.autopartshub.service;

import com.autopartshub.dto.AddToCartRequest;
import com.autopartshub.dto.CartResponse;
import com.fasterxml.jackson.core.JsonProcessingException;

public interface CartService {
	
	public void addToCart(AddToCartRequest addToCartRequest);
	
	public CartResponse getMyCart(int userId) throws JsonProcessingException;
	
	public void removeCartItem(int cartId);

}
