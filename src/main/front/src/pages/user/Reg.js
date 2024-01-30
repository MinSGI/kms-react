import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const Reg = () => {
    // 이메일 변수
    const [email, setEmail] = useState('');
    const emailFocus = useRef(null);
    const [name, setName] = useState('');
    const nameFocus = useRef(null);
    const [password, setPassword] = useState('');
    const passwordFocus = useRef(null);
    const [passwordChk, setPasswordChk] = useState('');
    const passwordChkFocus = useRef(null);
    const [birth, setBirth] = useState('');
    const birthFocus = useRef(null);

// 이메일 입력 처리부
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

// 이름 입력 처리부
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

// 비밀번호 입력 처리부
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

// 비밀번호 체크 입력 처리부
    const onPasswordChkHandler = (event) => {
        setPasswordChk(event.currentTarget.value);
    }

// 생년월일 입력 처리부
    const onBirthHandler = (event) => {
        setBirth(event.currentTarget.value);
    }

    const onRegHandler = (event) => {
        event.preventDefault();

        if( !email ) {
            emailFocus.current.focus();
            return;
        }
        if( !name ) {
            nameFocus.current.focus();
            return;
        }
        if( !password ) {
            passwordFocus.current.focus();
            return;
        }
        if( !passwordChk ) {
            passwordChkFocus.current.focus();
            return;
        }
        if(!(password === passwordChk)){
            passwordChkFocus.current.focus();
            console.log("비밀번호와 비밀번호 확인이 다릅니다. 확인해주세요.");
            return;
        }

        const param = {
            'email':email,
            'name':name,
            'birth':birth,
            'password':password
        }

        axios({
            method:'post',
            url: '/api/test2',
            data: param,
        }).then((res) => {
            console.log(res.data);
        })
    }

    return (
        <div>
            이메일 : <input type="text" onChange={onEmailHandler} ref={emailFocus}/> <br/>
            이름 : <input type="text" onChange={onNameHandler} ref={nameFocus}/> <br/>
            생일 : <input type="text" onChange={onBirthHandler} ref={birthFocus}/> <br/>
            비밀번호 : <input type="password" onChange={onPasswordHandler} ref={passwordFocus}/><br/>
            비밀번호확인 : <input type="password" onChange={onPasswordChkHandler} ref={passwordChkFocus}/><br/>
            <button onClick={onRegHandler}>등록</button>
        </div>
    );
};

export default Reg;
