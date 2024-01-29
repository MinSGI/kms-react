package com.example.kmsreact.user.controller;

import com.example.kmsreact.user.entity.UserEntity;
import com.example.kmsreact.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/api/user")
public class UserController {

    @Autowired
    public UserService userService;

    // 회원 목록
    @RequestMapping("/list")
    public List<UserEntity> userList(){
        return userService.getUser();
    }

    @RequestMapping("/save")
    public void userReg(UserEntity userEntity){
        userService.userSave(userEntity);
    }

    @RequestMapping("/del")
    public void userDel(UserEntity userEntity){
        userService.userDel(userEntity);
    }
}
