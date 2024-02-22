package com.example.kmsreact.board.service;

import com.example.kmsreact.board.entity.BoardEntity;
import com.example.kmsreact.user.entity.UserEntity;

import java.util.List;

public interface BoardService {
    List<BoardEntity> getBoardList();

    void saveBoard(BoardEntity be);

    BoardEntity getBoardDetail(int boardNo);
}
