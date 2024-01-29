package com.example.kmsreact.board.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "TbBoard")
@Getter
@Setter
public class BoardEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardNo;

    private String title;
    private String contents;
    private Date regDt;
    private String regId;
    private Date uptDt;
    private String uptId;
}
