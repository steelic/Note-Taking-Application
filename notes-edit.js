const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const deleteElement = document.querySelector('#delete-note')
const saveElement = document.querySelector('#save-note')
const homeElement = document.querySelector('#return-home')

const noteID = location.hash.substring(1)

const notes = getSavedNotes()
const note = notes.find(function (note)
{
    return note.id === noteID
})

if(note === undefined)
{
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('input', function (e)
{
    note.title = e.target.value
})
bodyElement.addEventListener('input', function (e)
{
    note.body = e.target.value
})
saveElement.addEventListener('click',function(e)
{
    saveNote(notes)
})
deleteElement.addEventListener('click',function (e)
{
    removeNote(note.id)
    saveNote(notes)
    location.assign('/index.html')
})
homeElement.addEventListener('click', function(e)
{
    location.assign('/index.html')
})