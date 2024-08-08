class User {
    constructor(email , password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    // never return in setter and introduce new variable for avoiding the error which is max call stack size exceed

    set email(value){
        this._email = value
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const vishal = new User("vishal@ai.com", "abc")
console.log(vishal.password);
console.log(vishal.email);
