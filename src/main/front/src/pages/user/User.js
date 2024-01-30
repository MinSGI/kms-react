import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardTitle, Col, Row, Table} from "reactstrap";

import axios from "axios";


const User = () => {
    const [tableData, setTableData] = useState(null);

    useEffect(() => {
        console.log('axios in');

        axios({
            url: '/api/user/list',
            method: 'post',
        }).then((res) => {
            console.log('console.log data : ' + res.data);
            setTableData(res.data);
        });
    }, []);

    return (
        <Row>
            <Col lg="12">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Project Listing</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Overview of the projects
                        </CardSubtitle>
                        <Table className="no-wrap mt-3 align-middle" responsive borderless>
                            <thead>
                            <tr>
                                <th>이름</th>
                                <th>생일</th>
                                <th>상태</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tableData && tableData.map((tdata, index) => (
                                <tr key={index} className="border-top">
                                    <td>
                                        <div className="d-flex align-items-center p-2">
                                            <img
                                                src={tdata.avatar}
                                                className="rounded-circle"
                                                width="45"
                                                height="45"
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-0">{tdata.name}</h6>
                                                <span className="text-muted">{tdata.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{tdata.birth}</td>
                                    <td>
                                        {tdata.status === "pending" ? (
                                            <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                                        ) : tdata.status === "holt" ? (
                                            <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                                        ) : (
                                            <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        <div style={{float:'right'}}>
                            <Button className="btn" outline color="secondary">
                                사용자 등록
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default User;