const appKey = "kid_B1iuLHf6r";
const appSecret = "5dfa79164d614a26bd0693b6701a3380";
const url = 'https://baas.kinvey.com';
const auth = btoa(`${appKey}:${appSecret}`);
const authorization = `Basic ${auth}`
const { setCookie, eraseCookie, getCookie } = require('./cookieSetter')

const userService = {
    register: function (data) {
        return fetch(`${url}/user/${appKey}/`, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': authorization
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error === "UserAlreadyExists") {
                    return res.error;
                }
            })
    },

    login: (data) => {
        return fetch(`${url}/user/${appKey}/login/`, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': authorization,
            },
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    const { username, password, _id, _kmd } = data;
                    /// cookie 1
                    const encodedToken = btoa(`${username}:${password}`);
                    setCookie('x-auth-token', encodedToken, 3);
                    /// cookie 2 -- for creating product authentication
                    const encodedKinveyAuthCookie = _kmd.authtoken;
                    setCookie('kinveyAuth', encodedKinveyAuthCookie, 3);
                    /// cookie 3 -- for user_id
                    const encodedUserIdCookie = btoa(_id);
                    setCookie('usrinf', encodedUserIdCookie, 3);
                    ///
                    return 'login succesfully';
                }
                return data.error;
            })
    },

    logout: () => {
        eraseCookie('x-auth-token');
        eraseCookie('kinveyAuth');
        eraseCookie('usrinf');
    },

    createProduct: (data) => {
        const tokenForCreatingProduct = 'Kinvey ' + getCookie('kinveyAuth');
        return fetch(`${url}/appdata/${appKey}/products`, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': tokenForCreatingProduct,
            },
        }).then(res => res.json())
            .catch(err => console.log(err))
    },

    deleteProduct: (id) => {
        const token = 'Kinvey ' + getCookie('kinveyAuth');
        return fetch(`${url}/appdata/${appKey}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
            },
        }).then(res => {
            if (res.status < 200 && res.status > 400) {
                return Promise.reject()
            }
        }
        )
    },

    loadAllProducts: async () => {
        const token = await 'Kinvey ' + getCookie('kinveyAuth');
        let res = await fetch(`${url}/appdata/${appKey}/products`, {
            method: 'GET',
            headers: {
                // 'Content-type': 'application/json',
                'Authorization': token,
            },
        })
        res = await res.json();
        return res;
    },

    loadProduct: async (id) => {
        const token = await 'Kinvey ' + getCookie('kinveyAuth');
        let res = await fetch(`${url}/appdata/${appKey}/products/${id}`, {
            method: 'GET',
            headers: {
                // 'Content-type': 'application/json',
                'Authorization': token,
            },
        })
        res = await res.json();
        return res
    },

    getProfileData: async (userID) => {
        const token = await 'Kinvey ' + getCookie('kinveyAuth');
        let res = await fetch(`${url}/user/${appKey}/${userID}`, {
            method: 'GET',
            headers: {
                // 'Content-type': 'application/json',
                'Authorization': token,
            },
        })
        res = await res.json();
        return res;
    },

    editProfile: async (data) => {
        const token = await 'Kinvey ' + getCookie('kinveyAuth');
        return fetch(`${url}/user/${appKey}/${data._id}`, {
            body: JSON.stringify(data),
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error === "UserAlreadyExists") {
                    return res.error;
                }
            })
    }
};

export default userService;