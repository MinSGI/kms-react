import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: 'https://api.example.com/', // 기본 URL 설정
    timeout: 5000, // 요청 시간 초과 설정 (옵션)
});

// 요청 전에 실행되는 함수
axiosInstance.interceptors.request.use(
    (config) => {
        // 요청 전에 설정할 내용 추가 가능
        console.log('Request sent:', config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 후에 실행되는 함수
axiosInstance.interceptors.response.use(
    (response) => {
        // 응답 후에 실행할 내용 추가 가능
        console.log('Response received:', response);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const AxiosCustom = (url, method = 'get', data = null, config = {}) => {

    // GET 요청의 경우 params 속성을 사용하여 파라미터를 전달합니다.
    if (method.toLowerCase() === 'get') {
        config.params = data;
        data = null;
    }

    // 요청 메서드에 따라 적절한 Axios 메서드를 호출합니다.
    switch (method.toLowerCase()) {
        case 'get':
            return axiosInstance.get(url, config);
        case 'post':
            return axiosInstance.post(url, data, config);
        case 'put':
            return axiosInstance.put(url, data, config);
        case 'delete':
            return axiosInstance.delete(url, config);
        default:
            throw new Error(`Unsupported HTTP method: ${method}`);
    }
}

export default AxiosCustom;