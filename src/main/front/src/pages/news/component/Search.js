import React, {useEffect, useState} from 'react';

const Search = () => {
    // 검색용 변수
    const [search, setSearch] = useState('');

    // 검색용 변수에 값 세팅하는 함수
    const onSearchHandler = (event) => {
        console.log("@@@ : " + event.currentTarget.value);
        setSearch(event.currentTarget.value);
        console.log("search value : " + search);
    }

    useEffect( () => {
        console.log("useEffect : " + search);
    }, [search]);

    return (
        <input type="text" onChange={onSearchHandler} placeholder={"검색어를 입력해 주세요."} />
    );
};

export default Search;
