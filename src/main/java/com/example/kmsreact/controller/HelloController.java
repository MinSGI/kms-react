package com.example.kmsreact.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/api/test")
    public String hello() {
        return "테스트입니다.";
    }

    @GetMapping("/api/test2")
    public Map<String, Object> mapObjectReturn() {
        Map<String, Object> newMap = new HashMap<String, Object>();
        newMap.put("name", "이인제");
        newMap.put("message", "리액트 좋아요!");
        return newMap;
    }
}