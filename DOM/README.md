DOM
THE HTML DOM (Document Object Model)
When a web page is loaded, the browser creates a Document Object Model of the page.
The HTML DOM model is constructed as a tree of Objects:
<!DOCTYPE html>
<html>
	<head>
		<title>The DOM</title>
	</head>
	<body>
		<h1>Document Object Model</h1>
		<p id="pr">Test Paragraph</p>
	</body>
</html>
Tree Structure

With the object model, JavaScript gets all the power it needs to create dynamic HTML:
JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page
What is the HTML DOM?
The HTML DOM is a standard object model and programming interface for HTML. It defines:
The HTML elements as objects
The properties of all HTML elements
The methods to access all HTML elements
The events for all HTML elements
The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
The following example changes the content (the innerHTML) of the
element with id="demo":

In the example above, getElementById is a method, while innerHTML is a property.
The HTML DOM Document Object
The document object represents your web page.

If you want to access any element in an HTML page, you always start with accessing the document object.

Finding HTML Elements
document.getElementById(id)	- Find an element by element id
document.getElementsByTagName(name)	- Find elements by tag name
document.getElementsByClassName(name)- 	Find elements by class name
document.querySelector() - Find elemet with id, class and tag name
document.querySelectorAll() - Find elemets with matching class or tag name
Changing HTML Elements
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element

Adding and Deleting Elements
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream

Add Element to the body or to any other elements
const body = document.body;
body.append("hellow");
body.append(element)
body.appendChild(element)
Create element and set text to our element ()
createElement
textContent
innerText
const body = document.body;

const div = document.createElement('div')
div.textContent = "Hi i am dev"

body.append(div)

or

div.innerText = "Hi i am dev with innerText"

body.append(div)

Render HTML Elements in your page
let body = document.body;

let div = document.createElement('div')

let elements = `
<h1>Heading one</h1>
<p>Some long text</p>
`
div.innerHTML = elements

body.append(div)

JavaScript HTML DOM Events
HTML DOM allow react to some event

When a user clicks the mouse

When a web page has loaded

When an image has been loaded

When the mouse moves over an element

When an input field is changed

When an HTML form is submitted

When a user strokes a key

HTML Event Attributes
-To assign events to HTML elements you can use event attributes.

<button onclick="displayDate()">Try it</button>

Assign Events Using the HTML DOM
<script>
document.getElementById("myBtn").onclick = displayDate;
</script>
The onchange Event
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
Enter your name: <input type="text" id="fname" onchange="upperCase()">
<p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

<script>
function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
</script>

</body>
</html>

The onmouseover and onmouseout Events
<!DOCTYPE html>
<html>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)"
style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
Mouse Over Me</div>

<script>
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
</script>

</body>
</html>
The onmousedown, onmouseup and onclick Events
<!DOCTYPE html>
<html>
<body>

<div onmousedown="mDown(this)" onmouseup="mUp(this)"
style="background-color:#D94A38;width:90px;height:20px;padding:40px;">
Click Me</div>

<script>
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}
</script>

</body>
</html>


<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
