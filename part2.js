// Lab 1 
var numCount = Number(prompt("How many numbers do you want to enter?"))
var numbers = []
var sum = 0
var avg = 0
for (var i = 0; i < numCount; i++) {
    var number = Number(prompt("Enter number " + (i + 1)))
    sum += number
    numbers.push(number)
}
avg = sum / numCount

alert("Sum of numbers: " + sum + "  Avg of numbers: " + avg)


// Lab 2
var contacts = []

function addContact() {
    var name = prompt("enter name")
    var phone = prompt("Enter phone number")

    var contact = {
        name: name,
        phone: phone
    }
    contacts.push(contact)
}

function searchContact() {
    var search = prompt("Enter the name or phone number to search for:")

    for (var i = 0; i < contacts.length; i++) {
        var contact = contacts[i]
        if (contact.name == search || contact.phone == search) {
            alert("Contact exist")
            return
        }
    }
    alert("Not found")
}

while (true) {
    var operation = prompt("Enter add , search or end")
    if (operation == "add") {
        addContact()
    } else if (operation == "search") {
        searchContact()
    } else if (operation == "end") {
        break
    } else {
        alert("Please enter valid operation")

    }
}

//bonus
var shapeName = prompt("enter name of the shape")
var result
switch (shapeName.toLowerCase()) {
    case "circle":
        var r = Number(prompt("Enter The radius of circle"))
        result = 3.14 * Math.pow(r, 2)
        alert(result)
        break
    case "triangle":
        var b = Number(prompt("Enter The base"))
        var h = Number(prompt("Enter The height"))
        result = (1 / 2) * (b * h)
        alert(result)
        break
    case "square":
        var a = Number(prompt("Enter The length of side"))
        result = Math.pow(a, 2)
        alert(result)
        break
    case "rectangle":
        var l = Number(prompt("Enter The length"))
        var w = Number(prompt("Enter The width"))
        result = l * w
        alert(result)
        break
    case "parallelogram":
        var b = Number(prompt("Enter The base"))
        var h = Number(prompt("Enter The vertical height"))
        result = b * h
        alert(result)
        break
    case "trapezium ":
        var a = Number(prompt("Enter The length of first parallel side"))
        var b = Number(prompt("Enter The length of second parallel side"))
        var h = Number(prompt("Enter The height"))
        result = 1 / 2(a + b) * h
        alert(result)
        break
    case "ellipse":
        var a = Number(prompt("Enter The minor axis"))
        var b = Number(prompt("Enter The major axis"))
        result = 3.14 * a * b
        alert(result)
        break

    default:
        alert("Please enter valid shape")
}