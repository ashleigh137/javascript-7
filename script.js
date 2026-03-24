document.write("<hr>")
var a=5;
document.write(typeof(a)+"<br>")
var b='5';
document.write(typeof(b)+"<br>")
var c=true;
document.write(typeof(c)+"<br>")
var d={"name":"lilly"};
document.write(typeof(d)+"<br>")
var e;
document.write(typeof(e)+"<br>")


function wish()
{
    var greeting;
    var time =  new Date().getHours();

    if (time < 10)
    {
         greeting = "Good marning";
    }
    else if (time < 20)
    {
        greeting = "Good day";
    }
    else
    {
        greeting = "Good evening";
    }

    document.getElementById("hour").innerHTML = "Current Hour : " + time;
    document.getElementById("greet").innerHTML = greeting;
}
document.write("<hr>")


for (i=0;i<3;i++)
{
    document.write("Ashleigh"+"<br>")
}
document.write("<hr>")


var i=0;
while(i<5)
{
    var a=Math.round(Math.random()*100)
    document.write(a+"<br>")
    i+=1;
}
document.write("<hr>")