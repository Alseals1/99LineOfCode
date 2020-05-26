document.addEventListener('DOMContentLoaded', function() {

    let button = document.getElementsByClassName('btn')[0]

    var friends = ["Varis", "Quavonne", "Carlton", "Tre", "Will"];
    let word = "lines"
    let count = 0

    button.addEventListener('click', function() {


        // Outer for loop (friends)
        for (let i = 0; i < friends.length; i++) {
            const element = friends[i];
            // console.log(element + ":");
            let h2 = document.createElement('h2')
            document.body.appendChild(h2)

            let h2text = document.createTextNode(`${friends[i]}`)
            h2.appendChild(h2text)




            // Inner Loop (99 line of code song)
            let p = document.createElement('p')
            document.body.appendChild(p)
            for (let j = 99; j >= 0; j--) {
                if (j > 2) {
                    let p1 = document.createTextNode(j + " lines of code in the file, " + j + " line of code " + element + " strikes one out, clear it all out " + (j - 1) + " line of code in the file.")
                    p.appendChild(p1)
                } else if (j === 1) {

                    let p2 = document.createTextNode(j + (word = " line") + " of code in the file, " + j + " line of code " + element + " strikes one out, clear it all out " + (j - 1) + " line of code in the file.")
                    p.appendChild(p2)
                } else {
                    let empty = document.createTextNode(" File Empty")
                    p.appendChild(empty)
                    break

                }
            }
        }
    })
});