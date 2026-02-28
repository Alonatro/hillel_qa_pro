//Homework7 Part.1

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

const emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

const trustedEmails = arr
    .filter(function(obj) {
        return emailPattern.test(obj.email);
    })
    .map(function(obj) {
        return obj.email;
    });

console.log(trustedEmails);

//Homework7 Part.2

const regex = /\b[B-Zb-z]{6,}\b/g;

//як я перевіряла

const text = "Wonderful Joyful Happiness Time Task Apple";

const matches = text.match(regex);

console.log(matches);