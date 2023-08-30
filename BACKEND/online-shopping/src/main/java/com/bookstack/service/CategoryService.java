package com.bookstack.service;

import java.util.List;

import com.bookstack.model.Category;

public interface CategoryService {
	
	public List<Category> getAllCategories();
	
	public Category addCategory(Category category) ;
	
	public void deleteCategoryById(int categoryId);

}
