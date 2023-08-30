package com.bookstack.service;

import org.springframework.web.multipart.MultipartFile;

import com.bookstack.model.*;

public interface BookService {
	
	void addBook(Book book, MultipartFile bookImmage);

	void deleteBook(Book book);

	void updateBook(Book book, MultipartFile image);

}
