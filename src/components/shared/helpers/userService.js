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
        }).then(res => res.json())
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
                    const { username, password, _kmd } = data;   // user values
                    /// cookie 1
                    const encodedToken = btoa(`${username}:${password}`);  //username and password cookie
                    setCookie('x-auth-token', encodedToken, 1);
                    /// cookie 2 -- for creating product
                    const encodedKinveyAuthCookie = _kmd.authtoken;  //kinvey auth cookie
                    setCookie('kinveyAuth', encodedKinveyAuthCookie, 1);

                    console.log('login succesfully');
                } else {
                    console.log('Invalid username/password, try again');
                    return Promise.reject();
                }
            })
    },

    logout: (history) => {
        eraseCookie('x-auth-token');
        eraseCookie('kinveyAuth');
        // history.push('/');
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
            .then(console.log)
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
    }


};

export default userService;