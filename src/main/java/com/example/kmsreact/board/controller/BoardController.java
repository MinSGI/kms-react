package com.example.kmsreact.board.controller;

import com.example.kmsreact.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BoardController {
    @Autowired
    UserService us;

    @RequestMapping("/api/testttt")
    public void apiTest(){
        System.out.println("asd : " + us.getUser());
    }
}
