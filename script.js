var friends = ["Varis", "Quavonne", "Carlton", "Tre", "Will"];
let word = "lines"
let count = 0

// Outer for loop (friends)
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    console.log(element + ":");


    // Inner Loop (99 line of code song)
    for (let j = 99; j >= 0; j--) {
        if (j > 2) {
            console.log(j + " lines of code in the file, " + j + " line of code " + element + " strikes one out, clear it all out " + (-j) + " line of code in the file.")
        } else if (j === 1) {
            console.log(j + (word = " line") + " of code in the file, " + j + " line of code " + element + " strikes one out, clear it all out " + (-j) + " line of code in the file.")

        } else {
            console.log("File Empty")

        }
    }
}