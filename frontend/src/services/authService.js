import API from "./api";


// ==============================================
// LOGIN USER
// ==============================================

export const loginUser = async (

    email,

    password

) => {

    try {

        const response = await API.post(

            "/auth/login",

            {
                email,
                password
            }
        );

        const data = response.data;

        // ======================================
        // STORE TOKEN
        // ======================================

        if (data.token) {

            localStorage.setItem(

                "drivelegal_token",

                data.token
            );
        }

        // ======================================
        // STORE USER
        // ======================================

        if (data.user) {

            localStorage.setItem(

                "drivelegal_user",

                JSON.stringify(data.user)
            );
        }

        return {

            success: true,

            data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Login failed"
        };
    }
};


// ==============================================
// REGISTER USER
// ==============================================

export const registerUser = async (

    name,

    email,

    password

) => {

    try {

        const response = await API.post(

            "/auth/register",

            {
                name,
                email,
                password
            }
        );

        return {

            success: true,

            data: response.data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Registration failed"
        };
    }
};


// ==============================================
// LOGOUT USER
// ==============================================

export const logoutUser = () => {

    localStorage.removeItem(

        "drivelegal_token"
    );

    localStorage.removeItem(

        "drivelegal_user"
    );

    window.location.href = "/login";
};


// ==============================================
// GET CURRENT USER
// ==============================================

export const getCurrentUser = () => {

    const user = localStorage.getItem(

        "drivelegal_user"
    );

    if (!user) return null;

    return JSON.parse(user);
};


// ==============================================
// GET TOKEN
// ==============================================

export const getToken = () => {

    return localStorage.getItem(

        "drivelegal_token"
    );
};


// ==============================================
// CHECK AUTH STATUS
// ==============================================

export const isAuthenticated = () => {

    const token = getToken();

    return !!token;
};


// ==============================================
// VERIFY TOKEN
// ==============================================

export const verifyToken = async () => {

    try {

        const response = await API.get(

            "/auth/verify-token"
        );

        return {

            success: true,

            data: response.data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Invalid token"
        };
    }
};


// ==============================================
// UPDATE USER PROFILE
// ==============================================

export const updateProfile = async (

    profileData

) => {

    try {

        const response = await API.put(

            "/auth/update-profile",

            profileData
        );

        // ======================================
        // UPDATE LOCAL STORAGE
        // ======================================

        if (response.data.user) {

            localStorage.setItem(

                "drivelegal_user",

                JSON.stringify(
                    response.data.user
                )
            );
        }

        return {

            success: true,

            data: response.data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Profile update failed"
        };
    }
};


// ==============================================
// CHANGE PASSWORD
// ==============================================

export const changePassword = async (

    oldPassword,

    newPassword

) => {

    try {

        const response = await API.post(

            "/auth/change-password",

            {
                oldPassword,
                newPassword
            }
        );

        return {

            success: true,

            data: response.data
        };

    } catch (error) {

        return {

            success: false,

            message:
                error.response?.data?.message ||

                "Password change failed"
        };
    }
};