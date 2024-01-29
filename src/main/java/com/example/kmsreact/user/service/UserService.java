package com.example.kmsreact.user.service;

import com.example.kmsreact.user.entity.UserEntity;

import java.util.List;

public interface UserService {
    List<UserEntity> getUser();

    void userSave(UserEntity userEntity);

    void userDel(UserEntity userEntity);

    // 회원가입 처리
    // 로그인 처리
    // 회원수정 처리
    // 회원삭제 처리
}
