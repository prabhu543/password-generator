const but=document.querySelector('button');
const pass=document.querySelector('#password');

const lengt=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase='abcdefghijklmnopqrstuvwxyz';
const number="0123456789";
const symbol='@#$&*+-/|';

const allChars= uppercase + lowercase + number + symbol ;

function gen(){
    let password = "";
    password +=uppercase[Math.floor(Math.random() * uppercase.length)];
    password +=lowercase[Math.floor(Math.random() * lowercase.length)];
    password +=number[Math.floor(Math.random() *number.length)];
    password +=symbol[Math.floor(Math.random() * symbol.length)];

    while(lengt > password.length){
        password +=allChars[Math.floor(Math.random() * allChars.length)];
    }
    pass.value=password;
}

function copyPass(){
    pass.select();
    document.execCommand('copy');
}