var names = [
    "Jaasvin", "Maadhav", "Ubay", "Jadhav", "Aabir", "Madin", "jadeja", "Faaiz", "Haardik", "Jagger"
]

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        // console.log(" Names starting with the letter 'J' and 'j' ")
        console.log("Goodbye " + names[i])
    }
    else {
        // console.log("Reming Names")
        console.log("Hello " + names[i])
    }
}