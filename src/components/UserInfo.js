export default class UserInfo {
    constructor(nameSelector,jobSelector,avatarSelector) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    getUserInfo(){
        return {
            name: this._name.textContent,
            about: this._about.textContent,
        };
    }

    setUserInfo(data){
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }
    setUserId(data) {
        this._id = data._id
    }
    setAvatar(data){
        this._avatar.src = data.avatar;
        this._avatar.alt = data.name;
    }
    userId() {
        return this._id
    }
}