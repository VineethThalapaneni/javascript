var a1=["king","queen"];
var a2=new Array ("Raja","Rani","Kalla","Police");
document.write("<br/>"+a1+","+a2+"</br />");
Array.prototype.displayItems=function()
{
    for(i=0;i<this.length;i++)
    {
        document.write(this[i]+"<br />");
    }
}

a2.displayItems();

document.write("<br />"+"Reverse"+"<br />")
a2.reverse();
a2.displayItems();