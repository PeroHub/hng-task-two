// Program to print first name and last name

let fullName = document.getElementById("name")


const logout = (value1, value2) => {
    return fullName.textContent = `${value1}  ${value2}`
}


// Object of first and last name
const nameObject =  {
    fName: "Peter",
    lname: "Ime"
}

const final = logout(nameObject.fName, nameObject.lname)

// console.log(final)