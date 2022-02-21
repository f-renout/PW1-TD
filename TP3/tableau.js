var notesInput = [10, 15, 6, 14, 14, 13, 19, 10, 17, 9]

function displayNote(notes, filtre) {
    if (!(typeof(filtre) === "boolean")) {
        alert("mauvais argument")
    } else {
        var laDiv = document.getElementById("affichage")
        var monUl = document.createElement("ul")
        laDiv.appendChild(monUl)
        // for (const note of notes) {
        idx = 0
        while (idx < notes.length) {
            var note = notes[idx++]
            if(!filtre&& note<15)
                continue
            var toAdd = document.createElement("li")
            var txt = document.createTextNode(note)
            toAdd.appendChild(txt)
            monUl.appendChild(toAdd)
        }
    }
}

displayNote(notesInput,true)