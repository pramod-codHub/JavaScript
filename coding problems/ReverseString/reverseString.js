
function ReverseString(str) {
    let strArr = [...str]
    let reversStringArr = []
    for (let i = strArr.length - 1; i >= 0; i--) {
        reversStringArr.push(strArr[i])
    }
    return reversStringArr.join("")
}

const reversedString = ReverseString("Pramod")

function ReverseString2(string) {
    let reverseString = ""
    let stingArr = [...string]
    for (let i = stingArr.length - 1; i >= 0; i--) {
        reverseString += stingArr[i]
    }
    return reverseString
}

console.log(ReverseString2("pppss"))
