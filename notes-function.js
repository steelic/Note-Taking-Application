// Reading localStorage for existing notes.
function getSavedNotes() {
    const notesJSON = localStorage.getItem('notes')
    // If there is no data in localStorage, then an empty array will generate.
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    }
    else {
        return []
    }
}

// Generating DOM structure for a new note.
function generateNotesDOM(note) {
    const noteElement = document.createElement('p')

    if (note.title.length > 0) {
        noteElement.textContent = note.title
    }
    else {
        noteElement.textContent = 'Untitled Note'
    }
    return noteElement
}

// Rendering application Notes
const renderedNotes = function(notes, filters)
{
    const filteredNotes = notes.filter(function (note)
    {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML =  ''

    filteredNotes.forEach(function (note)
    {
        const noteElement = generateNotesDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}