package com.bookstack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookstack.model.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {
	

}
