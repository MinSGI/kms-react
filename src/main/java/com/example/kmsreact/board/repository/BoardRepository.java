package com.example.kmsreact.board.repository;

import com.example.kmsreact.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<UserEntity, Long> {
}
