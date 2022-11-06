export default class Api {
    constructor(options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    _checkResponse(res){
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(
                `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
            );
        }
    }
    getInitialCards(){
        return fetch(`${this._baseUrl}/cards`,{headers:this._headers})
            .then((res) => this._checkResponse(res));
    }
    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`,{headers:this._headers})
            .then((res) => this._checkResponse(res));
    }
    setUserInfo(userInfo){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userInfo.name,
                about: userInfo.about
            })
        })
            .then((res) => this._checkResponse(res));
    }
    changeAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
            .then((res) => this._checkResponse(res));
    }
    addCard(data){
        return fetch(`${this._baseUrl}/cards`,{
            method: 'POST',
            headers:this._headers,
            body: JSON.stringify(data)
        })
            .then((res) => this._checkResponse(res));
    }
    deleteCard(cardId){
        {
            return fetch(`${this._baseUrl}/cards/${cardId}`, {
                method: "DELETE",
                headers: this._headers,
            }).then((res) => this._checkResponse(res));
        }
    }
    putLike(data){
        return fetch(`${this._baseUrl}/cards/${data}/likes`, {
            method: "PUT",
            headers: this._headers,
        }).then((res) => this._checkResponse(res));
    }
    deleteLike(data){
        return fetch(`${this._baseUrl}/cards/${data}/likes`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => this._checkResponse(res));
    }

}