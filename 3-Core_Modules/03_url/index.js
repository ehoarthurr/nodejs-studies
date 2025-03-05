const url = require("url");
const address = "https://www.meusite.com.br/catalog?produtos=cadeira";
const passedUrl = new url.URL(address);

console.log(passedUrl.host);
console.log(passedUrl.pathname);
console.log(passedUrl.search);
console.log(passedUrl.searchParams);
console.log(passedUrl.searchParams.get("produtos"));
