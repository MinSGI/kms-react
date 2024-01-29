import {useEffect, useState} from "react";
import axios from "axios";
import CustomRouter from "./routes/CustomRouter";
import { useRoutes } from "react-router-dom";

function App() {
    /*
    const [hello, setHello] = useState('');
    const [newMap, setNewMap] = useState(null);

    const [testMap, setTestMap] = useState(
    {
        name : '이인제',
        message : '리액트으으으으',
    }
    );

    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);

    useEffect(() => {
        axios.get('/api/test2')
            .then((res) => {
                console.log(res);
                setNewMap(res.data.name);
            })
    }, []);
    return (
        <div className="App">
            백엔드 데이터 : {hello} <br/>
            두번째 백엔드 데이터 : {newMap} <br/>
            두번째 백엔드 데이터 :
            <div> {Object.values(testMap).map((value, i) => (<p key={i}>{i} : {value}</p>))}</div>
            <br/>
            <br/>
            <br/>
            {Object.values(testMap)}
        </div>
    );
     */
    const routing = useRoutes(CustomRouter);
    return <div className="dark">{routing}</div>;
}

export default App;