import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, CardTitle, Col, Row, Table} from "reactstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const List = () => {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        axios({
            url:"/api/board/list",
            method:'get'
        }).then((res) => {console.log("res : ", res); setBoardList(res.data);})
        .catch((e) => {console.error("error : ", e)})
    }, []);

    const navigate = useNavigate();

    const handleRowClick = (boardNo) => {
        navigate(`/board/boardDetail`, { state: { id: boardNo } });
    };

    return (
        <Row>
            <Col lg="12">
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-card-text me-2"> </i>
                        게시판
                    </CardTitle>
                    <CardBody className="">
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th style={{width:'5%'}}>#</th>
                                    <th>제목</th>
                                    <th style={{width:'30%'}}>작성일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                {boardList && boardList.map((item, idx) => (
                                    <tr key={idx} style={{cursor:"pointer"}} onClick={() => handleRowClick(item.boardNo)}>
                                        <th scope="row">{idx+1}</th>
                                        <td>{item.title}</td>
                                        <td>{new Date(item.regDt).toLocaleString('ko-KR')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Button className="btn" color="secondary" size="sm" onClick={() => window.location.href="/board/write"}>
                            글쓰기
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default List;
