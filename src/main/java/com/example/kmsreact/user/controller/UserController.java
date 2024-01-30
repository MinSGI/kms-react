package com.example.kmsreact.user.controller;

import com.example.kmsreact.user.entity.UserEntity;
import com.example.kmsreact.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    public UserService userService;

    // 회원 목록
    @RequestMapping("/api/user/list")
    public List<UserEntity> userList(){
        return userService.getUser();
    }

    @RequestMapping(value = "/api/user/save", method = {RequestMethod.GET, RequestMethod.POST})
    public void userSave(@RequestBody UserEntity userEntity){
        userService.userSave(userEntity);
    }

    @RequestMapping("/api/user/del")
    public void userDel(@RequestBody UserEntity userEntity){
        userService.userDel(userEntity);
    }
}
