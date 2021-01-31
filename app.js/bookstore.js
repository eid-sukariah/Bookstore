var user = prompt('what is your name?');
alert('Hi ' + user  )

var userinput = prompt('how many book did you read?');
var image =''

for(var i = 0; i< userinput; i++){
if (userinput >= 5 )
    {
image = image + '<img src = "download.png">'
document .write('<h1>' + 'you are ammazing' + '<h1>');
document.write(image)

}

else {
document.write('<h2>'+ 'you should read more'+ '<h2>');
image =image + '<img src="https://portlandbuttonworks.com/image/cache/catalog/catalog%20items/Catalog%20Button%20Images/read-more-books-qu-13-qu-13-500x500-500x500.jpg">'

document.write(image)
}}