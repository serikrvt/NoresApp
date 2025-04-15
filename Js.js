const notesEl = document.querySelector('.notes')
const addBtn = document.querySelector('.noteAdd')
function createNotes(title, text) {
    const noteEl = document.createElement('div')
    noteEl.classList.add('note')

    noteEl.innerHTML = `
    <div class = 'noteHedor'>
      <p id=noteTitle>${title}</p>
      <input id='note-title-input'class='hidden'>${title}</input>
        <div>
            <button class='noteEdit'><i class="fa-solid fa-pencil"></i></button>
            <button class="noteDelite"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
    <p id='nodeText'>${text}</p>
          <textarea id='note-title-extarea'class='hidden'>${text}</textarea>


    `
    const editBtn = noteEl.querySelector('.noteEdit')
    const deleteBtn = noteEl.querySelector('.noteDelite')
    const titleEl= document.querySelector('#noteTitle')
    const texteEl= document.querySelector('#noteText') 
        editBtn.addEventListener('click', (e)=>{
                    titleElEl.classList.toggle('hedden')
                    texteElclassList.toggle('hedden')
        })
        deleteBtn.addEventListener('click', (e)=>{
            noteEl.remove()
        })
        
    return noteEl
}


addBtn.addEventListener('click',(e)=>{
    const el = createNotes('Заголовок', 'ваш текст')
    notesEl.append(el)
} )