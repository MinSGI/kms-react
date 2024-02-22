import React, {useEffect, useState} from 'react';
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import {useLocation, useNavigate, useRoutes} from "react-router-dom";
import axios from "axios";

const Detail = (routes, locationArg) => {
    const navigate = useNavigate();
    const location = useLocation();
    const boardNo = location.state.id; // 전달된 boardNo 가져오기

    console.log('test:STATE=', boardNo);
    const handleGoBack = () => {
        navigate(-1); // 뒤로 가기 동작 실행
    };

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    useEffect(() => {
        axios({
            url:`/api/board/detail`,
            method:'post',
            data:{boardNo: boardNo}
        }).then((res) => {
            console.log("res : ", res);
            setTitle(res.data.title);
            setContent(res.data.contents);
        })
            .catch((e) => {console.error("error : ", e)})
    }, []);


    return (
        <Row>
            <Col>
                <Card body>
                    <CardTitle tag="h5">[Title] : {title}</CardTitle>
                    <CardText> [Content] :
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </CardText>
                    <div>
                        <Button color="light-warning" onClick={handleGoBack}>목록으로</Button>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default Detail;
