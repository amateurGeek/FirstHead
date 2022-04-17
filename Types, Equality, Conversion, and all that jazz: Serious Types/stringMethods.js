var test="AJAY|SETH|IS|A|TESTER ajay ajay ajay ajay";

var presentableText = test.toLowerCase();
if(presentableText.length>0)
{
console.log(presentableText);
}

console.log(test.substring(0,4))
console.log(test.indexOf("SETH", 4))
console.log(test.lastIndexOf("ajay"))

console.log("Hello Splitted data", test.split("|"));
