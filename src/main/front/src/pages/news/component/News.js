import React, { useState, useEffect } from 'react';
import NewsAPI from "./NewsAPI";
import { Col, Row } from "reactstrap";
import Blog from "./Blog";

const News = () => {
    const [country, setCountry] = useState('kr');
    const [category, setCategory] = useState(null);
    const [sources, setSources] = useState(null);
    const [q, setQ] = useState('');
    const [pageSize, setPageSize] = useState(null);
    const [page, setPage] = useState(null);
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await NewsAPI({ country, category, sources, q, pageSize, page });
            setNewsList(data);
        };
        fetchData();
    }, [country, category, sources, pageSize, page]);

    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            const fetchData = async () => {
                const data = await NewsAPI({ country, category, sources, q, pageSize, page });
                setNewsList(data);
            };
            fetchData();
        }
    }

    return (
        <div>
            <h1>OPEN API 뉴스</h1>
            <Row>
                <h5 className="mb-3 mt-3">OPEN API 뉴스</h5>
                <input
                    type="text"
                    placeholder="검색어 입력"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    onKeyDown={keyDownHandler}
                />
                {newsList && newsList.map((item, idx) => (
                    <Col sm="6" lg="6" xl="3" key={idx}>
                        <Blog
                            image={item.urlToImage}
                            title={item.author ? item.author : item.source.name}
                            subtitle={item.title}
                            //text={item.description}
                            color='primary'
                            link={item.url}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default News;