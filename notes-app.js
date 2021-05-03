const notes = getSavedNotes()

const filters = 
{
    searchText: ''
}

renderedNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) 
{
    notes.push({
        title: "",
        body: ""
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderedNotes(notes, filters)
})

document.querySelector('#remove-all-notes').addEventListener('click', function (e) {
    localStorage.clear()
    document.querySelector('#notes').innerHTML =  ''
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderedNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})