import React, {useState} from 'react';

const Sort = () => {
    // 정렬용 변수
    const [sort, setSort] = useState('all');
    // 정렬용 변수에 값 세팅하는 함수
    const onSortHandler = (event) => {
        setSort(event.currentTarget.value);
        console.log("sort value : " + sort);
    }

    return (
        <select onChange={onSortHandler}>
            <option value={"all"}>제목+내용</option>
            <option value={"title"}>제목</option>
            <option value={"content"}>내용</option>
        </select>
    );
};

export default Sort;
