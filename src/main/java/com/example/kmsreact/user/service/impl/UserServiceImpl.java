package com.example.kmsreact.user.service.impl;

import com.example.kmsreact.user.entity.UserEntity;
import com.example.kmsreact.user.repository.UserRepository;
import com.example.kmsreact.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository ur;

    @Override
    public List<UserEntity> getUser() {
        return ur.findAll();
    }

    @Override
    public void userSave(UserEntity userEntity) {
        System.out.println("@@@ : " + userEntity.getEmail());
        if(userEntity.getUserId() != null){
            userEntity.setRegId(userEntity.getUserId());
        } else {
            userEntity.setRegId(userEntity.getName());
        }
        ur.saveAndFlush(userEntity);
    }

    @Override
    public void userDel(UserEntity userEntity) {
        ur.delete(userEntity);
    }
}
