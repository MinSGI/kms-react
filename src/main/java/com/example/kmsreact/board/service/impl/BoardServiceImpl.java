package com.example.kmsreact.board.service.impl;

import com.example.kmsreact.board.service.BoardService;
import com.example.kmsreact.user.entity.UserEntity;
import com.example.kmsreact.user.repository.UserRepository;
import com.example.kmsreact.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private UserRepository ur;

    @Override
    public List<UserEntity> getUser() {
        return ur.findAll();
    }
}
