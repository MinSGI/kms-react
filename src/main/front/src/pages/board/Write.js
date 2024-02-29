import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill의 스타일시트
import './QuillEditor.css';
import {Button, Input} from "reactstrap";
import axios from "axios";

const Write = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const saveContent = () => {
        axios.post("/api/board/save", { title:title, contents:content })
            .then(res => {
                window.location.href="/board";
            })
            .catch(error => {
                console.error("Save error:", error);
            });
    };

    useEffect(() => {
        console.log("title:", title);
    }, [title]);

    useEffect(() => {
        console.log("content:", content);
    }, [content]);

    return (
        <div>
            <Input
                id="title"
                name="title"
                placeholder="게시글 제목을 입력하세요."
                onChange={(e) => {setTitle(e.target.value)}}
            />
            <br/>
            <ReactQuill
                value={content} // 에디터의 내용
                onChange={setContent} // 내용이 변경될 때 호출되는 콜백
                style={{backgroundColor:"white"}}
            />
            <Button className="btn" color="secondary" size="sm" onClick={saveContent} style={{marginTop:"10px"}}>
                저장
            </Button>
        </div>
    );
};

export default Write;
