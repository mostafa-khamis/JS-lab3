// Lap1 Login
var userName = prompt('Enter user name')
var password = prompt('Enter password')

if (userName == "admin" && password == "421$$") {
    alert("Welcome login success")
} else {
    if (userName != "admin" && password != "421$$") {
        alert("Please enter valid user name and password")
    } else if (userName != "admin") {
        alert("Please enter valid username ")
    } else if (password != "421$$") {
        alert("Please enter valid password")

    }
}

// Lap2 Calc with bonus

var fNum = Number(prompt("Enter frist number"))
var operate = prompt("Enter the Operation number")
var sNum = Number(prompt("Enter second number"))
var result = 0
operation(fNum, sNum)

function operation(fNum, sNum) {
    switch (operate) {
        case "+":
            result = fNum + sNum
            alert(result)
            break
        case "-":
            result = fNum - sNum
            alert(result)
            break
        case "*":
            result = fNum * sNum
            alert(result)
            break
        case "/":
            result = fNum / sNum
            alert(result)
            break
        case "%":
            result = fNum % sNum
            alert(result)
            break
        default:
            alert("Invalid operation")
            result = "null"
    }
}
if (result == "null") {

} else {
    while (result != "null") {
        var fNum = result
        var operate = prompt("Enter the Operation number")
        if (operate === null) {
            break
        }
        var sNum = Number(prompt("Enter second number"))
        if (sNum === null) {
            break
        }
        operation(fNum, sNum)
    }
}