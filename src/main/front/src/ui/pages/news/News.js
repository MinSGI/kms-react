import React, { useState, useEffect } from 'react';
import NewsAPI from "service/api/news/NewsAPI";
import { Col, Row } from "reactstrap";
import CustomCardSet from "./CustomCardSet";
import ReactPaginate from "react-paginate";
import "assets/css/News.css";

const News = () => {
    const [country, setCountry] = useState('kr');
    const [category, setCategory] = useState(null);
    const [sources, setSources] = useState(null);
    const [q, setQ] = useState('');
    const [page, setPage] = useState(null);
    const [newsList, setNewsList] = useState([]);
    const [totalResults, setTotalResults] = useState(null);

    const handlePageClick = (selectedPage) => {
        setPage(selectedPage.selected+1);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await NewsAPI({ country, category, sources, q, pageSize:10, page });
            if( data ) {
                setNewsList(data.data.articles);
                setTotalResults(data.data.totalResults);
            }
        };
        fetchData();
    }, [country, category, sources, page]);

    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            const fetchData = async () => {
                const data = await NewsAPI({ country, category, sources, q, pageSize:10, page });
                setNewsList(data);
            };
            fetchData();
        }
    }

    return (
        <div>
            <Row>
                <div className="mt-3 row">
                    <div className="col">
                        <input type="text"
                               className="form-control"
                               value={q}
                               onChange={(e) => setQ(e.target.value)}
                               onKeyDown={keyDownHandler}
                        />
                    </div>
                    <div className="col-3">
                        <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
                            <option value="">category</option>
                            <option value="business">business</option>
                            <option value="entertainment">entertainment</option>
                            <option value="health">health</option>
                            <option value="science">science</option>
                            <option value="sports">sports</option>
                            <option value="technology">technology</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <select id="exampleSelect" name="select" className="form-select" onChange={(e) => setCountry(e.target.value)}>
                            <option value="kr">한국</option>
                            <option value="us">미국</option>
                            <option value="ru">러시아</option>
                        </select>
                    </div>
                </div>
                <h5 className="mb-3 mt-3">OPEN API 뉴스</h5>
                {newsList && newsList.map((item, idx) => (
                    <Col sm="6" lg="6" xl="3" key={idx}>
                        <CustomCardSet
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
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={Math.ceil(totalResults / 10)}
                marginPagesDisplayed={100}
                pageRangeDisplayed={10}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default News;