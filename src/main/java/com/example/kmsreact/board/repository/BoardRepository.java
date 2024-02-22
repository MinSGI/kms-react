package com.example.kmsreact.board.repository;

import com.example.kmsreact.board.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<BoardEntity, Long> {
    BoardEntity findByBoardNo(int boardNo);
}
