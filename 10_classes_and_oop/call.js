function setUsername (username){
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUsername (username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUsername('Abhay', 'abhay@123.com', '123abc');
console.log(chai);
