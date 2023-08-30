package com.bookstack.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookstack.model.Book;

@Repository
public interface BookDao extends JpaRepository<Book, Integer> {
	
	List<Book> findByCategoryId(int category);


}
