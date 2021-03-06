const notes = getSavedNotes()

const filters = 
{
    searchText: ''
}

renderedNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) 
{
    const id = uuidv4()
    notes.push({
        id: id,
        title: "",
        body: ""
    })
    saveNote()
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#remove-all-notes').addEventListener('click', function (e) 
{
    while(notes.length > 0) 
    {
        notes.pop()
    }
    localStorage.clear()
    document.querySelector('#notes').innerHTML =  ''
})

document.querySelector('#search-text').addEventListener('input', function (e) 
{
    filters.searchText = e.target.value
    renderedNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) 
{
    console.log(e.target.value)
})
