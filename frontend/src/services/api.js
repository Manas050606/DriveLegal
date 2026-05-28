import axios from "axios";


// ==============================================
// API BASE URL
// ==============================================

const API_BASE_URL =

    import.meta.env.VITE_API_URL ||

    "http://127.0.0.1:8000/api";


// ==============================================
// AXIOS INSTANCE
// ==============================================

const api = axios.create({

    baseURL: API_BASE_URL,

    timeout: 15000,

    headers: {

        "Content-Type":
            "application/json"
    }
});


// ==============================================
// REQUEST INTERCEPTOR
// ==============================================

api.interceptors.request.use(

    (config) => {

        const token = localStorage.getItem(

            "token"
        );

        if (token) {

            config.headers.Authorization =

                `Bearer ${token}`;
        }

        return config;
    },

    (error) => {

        return Promise.reject(error);
    }
);


// ==============================================
// RESPONSE INTERCEPTOR
// ==============================================

api.interceptors.response.use(

    (response) => {

        return response;
    },

    (error) => {

        // ======================================
        // BACKEND OFFLINE
        // ======================================

        if (!error.response) {

            console.error(

                "Network Error: Backend server unavailable"
            );

            return Promise.reject({

                message:
                    "Backend server unavailable"
            });
        }

        // ======================================
        // UNAUTHORIZED
        // ======================================

        if (error.response.status === 401) {

            localStorage.removeItem(

                "token"
            );
        }

        // ======================================
        // SERVER ERROR
        // ======================================

        console.error(

            "API Error:",

            error.response.data
        );

        return Promise.reject(

            error.response.data
        );
    }
);


// ==============================================
// AUTH APIs
// ==============================================

export const registerUser = async (

    userData

) => {

    const response = await api.post(

        "/auth/register",

        userData
    );

    return response.data;
};


export const loginUser = async (

    userData

) => {

    const response = await api.post(

        "/auth/login",

        userData
    );

    return response.data;
};


export const getUserProfile = async () => {

    const response = await api.get(

        "/auth/profile"
    );

    return response.data;
};


// ==============================================
// DOCUMENT UPLOAD APIs
// ==============================================

export const uploadDocument = async (

    file

) => {

    const formData = new FormData();

    formData.append(

        "file",

        file
    );

    const response = await api.post(

        "/upload/document",

        formData,

        {

            headers: {

                "Content-Type":
                    "multipart/form-data"
            }
        }
    );

    return response.data;
};


// ==============================================
// NUMBER PLATE OCR
// ==============================================

export const uploadNumberPlate = async (

    file

) => {

    const formData = new FormData();

    formData.append(

        "file",

        file
    );

    const response = await api.post(

        "/upload/number-plate",

        formData,

        {

            headers: {

                "Content-Type":
                    "multipart/form-data"
            }
        }
    );

    return response.data;
};


// ==============================================
// HEALTH CHECK
// ==============================================

export const healthCheck = async () => {

    const response = await api.get(

        "/health"
    );

    return response.data;
};


// ==============================================
// EXPORT API INSTANCE
// ==============================================

export default api;