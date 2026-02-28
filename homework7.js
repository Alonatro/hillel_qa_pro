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

