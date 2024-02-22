import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill의 스타일시트
import './QuillEditor.css';
import {Button, Input, Label} from "reactstrap";
import axios from "axios";

const Write = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const saveContent = () => {
        axios.post("/api/board/save", { title:title, contents:content })
            .then(res => {
                console.log("Save successful:", res);
                // 저장 성공 후에 필요한 작업 수행
            })
            .catch(error => {
                console.error("Save error:", error);
                // 저장 실패 시에 필요한 작업 수행
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
