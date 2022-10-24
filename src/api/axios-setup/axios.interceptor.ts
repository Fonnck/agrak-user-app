import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * Main axios config
 */
const config: AxiosRequestConfig = {
    baseURL: 'https://635017b9df22c2af7b630c3e.mockapi.io/api/v1',
    headers: {
        //Add all headers that you need C:
    }
}

/**
 * Fetch axios interceptor
 */
const axiosInterceptor = (): AxiosInstance => {

    const axiosInstance = axios.create(config);

    axiosInstance.interceptors.request.use(
        (request: any) => {
            try {

                //Handle request as needed

                return request;

            } catch (error) {
                console.log(error);
            }

        }
    );

    axiosInstance.interceptors.response.use(
        (response: any) => {

            try {

                //Hanlde response as needed

                return response;

            } catch (error) {
                console.log(error);
            }
        }
    );

    return axiosInstance;

}

export default axiosInterceptor;