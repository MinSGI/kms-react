import React from 'react';
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import { useNavigate } from "react-router-dom";

const BoardUseState = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // 뒤로 가기 동작 실행
    };

    return (
        <Row>
            <Col>
                <Card body>
                    <CardTitle tag="h5">useState Hook이란?</CardTitle>
                    <CardText>
                        useState Hook은 이렇게 쓰는 것이다.
                    </CardText>
                    <div>
                        <Button color="light-warning" onClick={handleGoBack}>목록으로</Button>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default BoardUseState;
