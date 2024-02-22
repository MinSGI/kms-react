package com.example.kmsreact.board.controller;

import com.example.kmsreact.board.entity.BoardEntity;
import com.example.kmsreact.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/board")
public class BoardController {
    @Autowired
    private BoardService bs;

    @RequestMapping(value="/list", method = {RequestMethod.GET})
    public List<BoardEntity> boardList () {
        return bs.getBoardList();
    }

    @RequestMapping(value="/save", method = {RequestMethod.GET, RequestMethod.POST})
    public void boardSave (@RequestBody BoardEntity be) {
        System.out.println("be : "+ be.getContents());
        System.out.println("be : "+ be.getTitle());
        bs.saveBoard(be);
    }

    @RequestMapping(value="/detail", method = {RequestMethod.GET, RequestMethod.POST})
    public BoardEntity boardDetail (@RequestBody BoardEntity be) throws Exception{
        System.out.println("be : "+ be.getBoardNo());
        return bs.getBoardDetail(be.getBoardNo());
    }
}
