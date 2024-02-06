import React, {useEffect, useState} from "react";
import axios from "axios";

export default (initialUrl, initialParams = {}, initialConfig = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(initialUrl);
    const [params, setParams] = useState(initialParams);
    const [config, setConfig] = useState(initialConfig);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(url, { params, ...config });
                setData(response.data);
                setError(null);
            } catch (error) {
                setData(null);
                setError(error);
            }
        };

        if (url) {
            fetchData();
        }
    }, [url, params, config]);
    return { data, error };
};

