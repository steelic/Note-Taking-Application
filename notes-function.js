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

// Saving a note.
function saveNote() {
    localStorage.setItem('notes', JSON.stringify(notes))
}


// Deleting a note.
const removeNote = function (id)
{
    const noteIndex = notes.findIndex(function (note)
    {
        return note.id === id
    })
    if (noteIndex > -1)
    {
        notes.splice(noteIndex, 1)
    }
}

// Generating DOM structure for a new note.
function generateNotesDOM(note) {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('span')

    // Creating a button to delete notes.
    const button = document.createElement('button')
    button.textContent = 'Delete'
    noteElement.appendChild(button)
    button.addEventListener('click', function (event)
    {
        removeNote(note.id)
        saveNote()
        renderedNotes(notes, filters)
    })

    // Creating a title for unnamed notes.
    if (note.title.length > 0) {
       textElement.textContent = note.title
    }
    else {
        textElement.textContent = 'Untitled Note'
    }
  
    noteElement.appendChild(textElement)

    return noteElement
}

// Rendering notes
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
