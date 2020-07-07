let demo = document.getElementById("demo");

demo.color="red";
console.log(demo.color);

let first = document.getElementById("first");
first.color="blue";
first.fontSize="20";
console.log(first.color);
console.log(first.fontSize);

let username = document.getElementById("username").value;
console.log(username);

function getUserName()
{
    let username = document.getElementById("username").value;
    document.getElementsByName("p")[0].innerHTML = username;
}