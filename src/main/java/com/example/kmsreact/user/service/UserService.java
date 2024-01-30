package com.example.kmsreact.user.service;

import com.example.kmsreact.user.entity.UserEntity;

import java.util.List;

public interface UserService {
    List<UserEntity> getUser();

    void userSave(UserEntity userEntity);

    void userDel(UserEntity userEntity);
}
