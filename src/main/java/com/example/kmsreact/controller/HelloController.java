package com.example.kmsreact.controller;

import com.example.kmsreact.user.entity.UserEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/api/test")
    public String hello() {
        return "테스트입니다.";
    }

    @RequestMapping(value="/api/test2", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<String, Object> mapObjectReturn(@RequestBody UserEntity userEntity) {
        Map<String, Object> newMap = new HashMap<String, Object>();
        newMap.put("name", "이인제");
        newMap.put("message", "리액트 좋아요!");

        System.out.println("userEntity UserId : " + userEntity.getUserId());
        System.out.println("userEntity Name : " + userEntity.getName());

        newMap.put("param", userEntity);

        return newMap;
    }
}