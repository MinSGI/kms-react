package com.example.kmsreact.board.service.impl;

import com.example.kmsreact.board.entity.BoardEntity;
import com.example.kmsreact.board.repository.BoardRepository;
import com.example.kmsreact.board.service.BoardService;
import com.example.kmsreact.user.entity.UserEntity;
import com.example.kmsreact.user.repository.UserRepository;
import com.example.kmsreact.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {
    @Autowired
    private BoardRepository br;

    @Override
    public List<BoardEntity> getBoardList() {
        return br.findAll();
    }

    @Override
    public void saveBoard(BoardEntity be) {
        Date dt = new Date();
        be.setRegDt(dt);
        br.saveAndFlush(be);
    }

    @Override
    public BoardEntity getBoardDetail(int boardNo) {
        return br.findByBoardNo(boardNo);
    }
}
