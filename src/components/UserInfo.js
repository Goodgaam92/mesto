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

    setUserInfo({name,about,_id,avatar}){
        this._name.textContent = name;
        this._about.textContent = about;
        this._id = _id;
        this._avatar.src = avatar;
        this._avatar.alt = name;
    }

    userId() {
        return this._id
    }
}