package com.autopartshub.service;

import java.util.List;

import com.autopartshub.dto.AddUserRequest;
import com.autopartshub.dto.UserLoginRequest;
import com.autopartshub.model.User;

public interface UserService {
	
	User registerUser(AddUserRequest userRequest);

    void deleteUserById(int userId);

    User loginUser(UserLoginRequest loginRequest);

    List<User> getAllUsers();

    List<User> getAllDeliveryPersons();

}
