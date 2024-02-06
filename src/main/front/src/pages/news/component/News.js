import React, {useEffect, useState} from 'react';
import newsAPI from "./NewsAPI";
import {Col, Row} from "reactstrap";
import * as PropTypes from "prop-types";
import Blog from "./Blog";

Blog.propTypes = {
    image: PropTypes.any,
    color: PropTypes.string,
    title: PropTypes.any
};
const News = () => {
    const [newsList, setNewsList] = useState('');

    const [country, setCountry] = useState('kr');
    const [category, setCategory] = useState(null);
    const [sources, setSources] = useState(null);
    const [q, setQ] = useState('');
    const [pageSize, setPageSize] = useState(null);
    const [page, setPage] = useState(null);

    useEffect(() => {
        searchHandle();
    }, [country, category, sources, pageSize, page]);

    const searchHandle = async () => {
        const getNewsList = await newsAPI(country, category, sources, q, pageSize, page);
        setNewsList(getNewsList);
    };

    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            searchHandle();
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
                            text={item.description}
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
