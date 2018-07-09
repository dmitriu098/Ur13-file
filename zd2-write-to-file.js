
/*
Используя модуль fs, сделать так, чтоб информация в файл дописывалась с новой строки(добавлялась), а не заменялась.
 */

var fs =require('fs');

//Получим исходный текст в файле

var read = fs.readFileSync('zd2.txt', 'utf-8');
console.log(read);

var mytext = 'New text\n';

/*
var content = fs.writeFileSync('zd2.txt', text, 'utf8');
//console.log(content);//undefined
*/


//дозапись в файл
fs.appendFileSync('zd2.txt', mytext);

//прочитаем новый файл
   var newread= fs.readFileSync('zd2.txt', 'utf-8');
    console.log(newread);




