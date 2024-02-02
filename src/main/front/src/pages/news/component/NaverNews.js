import React, {useEffect, useState} from 'react';
import NaverNewsAPI from './NaverNewsAPI'
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import DOMPurify from 'dompurify';

const NaverNews = () => {
    const [itemsPerPage, setItemsPerPage] = useState(4); // 페이지당 아이템 수
    const [currentPage, setCurrentPage] = useState(0);

    const [keyword, setKeyword] = useState('a');
    const [sort, setSort] = useState('sim');
    const [newsList, setNewsList] = useState('');
    const [display, setDisplay] = useState('10');
    const searchHandle = async () => {
        const getNewsList = await NaverNewsAPI(keyword, sort, display);
        setNewsList(getNewsList);
    };

    useEffect(() => {
        searchHandle();
    }, [sort, display, itemsPerPage]);

    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            searchHandle();
        }
    }

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    useEffect(() => {
        console.log('paging click');
    }, [currentPage]);

    const slicedNewsList = newsList ? newsList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) : null;


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
                정렬:
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="date">날짜순</option>
                    <option value="sim">관련도순</option>
                </select>
            </label>
            <label>
                리턴 결과 수:
                <select value={display} onChange={(e) => setDisplay(e.target.value)}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </label>
            <label>
                페이지 수:
                <select value={itemsPerPage} onChange={(e) => setItemsPerPage((e.target.value) * 1)}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </label>
            <Row>
                <h5 className="mb-3 mt-3">네이버 뉴스</h5>
                {slicedNewsList && slicedNewsList.map((item, idx) => (
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
                pageCount={Math.ceil(newsList.length / itemsPerPage)}
                marginPagesDisplayed={2}
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
