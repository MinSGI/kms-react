import React, {useEffect, useState} from 'react';
import NaverNewsAPI from 'service/api/naver/NaverNewsAPI'
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import DOMPurify from 'dompurify';
import "assets/css/News.css";

const NaverNews = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const [keyword, setKeyword] = useState('a');
    const [sort, setSort] = useState('sim');
    const [newsList, setNewsList] = useState('');

    const [totalCount, setTotalCount] = useState(0);
    const searchHandle = async () => {
        const getNewsList = await NaverNewsAPI(keyword, sort, 10, currentPage);
        if(getNewsList) {
            setNewsList(getNewsList.items);
            setTotalCount(getNewsList.total > 10000 ? 10000 : getNewsList.total);
        }
    };

    useEffect(() => {
        searchHandle();
    }, [sort, currentPage]);

    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            searchHandle();
        }
    }

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected+1);
    };

    return (
        <div>
            <h1>네이버 뉴스</h1>
            <input
                type="text"
                placeholder="검색어 입력"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={keyDownHandler}
            />
            <button onClick={searchHandle}>검색</button>
            <label>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="sim">관련도순</option>
                    <option value="date">날짜순</option>
                </select>
            </label>
            <Row>
                <h5 className="mb-3 mt-3">네이버 뉴스</h5>
                {newsList && newsList.map((item, idx) => (
                    <Col md="6" lg="4" key={idx}>
                        <Card body className="text-center">
                            <CardTitle tag="h5"
                                       dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.title)}}></CardTitle>
                            <CardText
                                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.description)}}></CardText>
                            <div>
                                <Link to={item.link}><Button color="light-danger">Go somewhere</Button></Link>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={Math.ceil(totalCount && totalCount / 10 )}
                marginPagesDisplayed={5}
                pageRangeDisplayed={10}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default NaverNews;
