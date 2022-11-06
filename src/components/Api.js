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
    _request(url, options,body) {
        return fetch(`${this._baseUrl}${url}`, {
            method: options,
            headers: this._headers,
            body: body
        }).then(this._checkResponse)
    }
    getInitialCards(){
        return this._request('/cards','GET')
    }
    getUserInfo(){
        return this._request('/users/me', 'GET')
    }
    setUserInfo(userInfo){
        return this._request('/users/me','PATCH',JSON.stringify({
            name: `${userInfo.name}`,
            about: `${userInfo.about}`
        }))
    }
    changeAvatar(data) {
        return this._request('/users/me/avatar','PATCH',JSON.stringify({
            avatar: `${data.avatar}`
        }))
    }
    addCard(data){
        return this._request('/cards','POST',JSON.stringify(data))
    }
    deleteCard(cardId){
        return this._request('/cards/' + cardId,'DELETE')
    }
    putLike(data){
        return this._request('/cards/' + data + '/likes','PUT')
    }
    deleteLike(data){
        return this._request('/cards/' + data + '/likes','DELETE')
    }

}