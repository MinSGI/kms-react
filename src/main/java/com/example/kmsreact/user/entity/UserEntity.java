package com.example.kmsreact.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "TbUser")
@Getter
@Setter
public class UserEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private String userId;

    private String name;
    private String email;
    private String password;
    private String birth;
    private Date regDt;
    private String regId;
    private Date uptDt;
    private String uptId;
}
