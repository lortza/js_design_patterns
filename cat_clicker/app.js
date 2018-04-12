const ui = new UI()

// Load sidebar content on DOM load
document.addEventListener('DOMContentLoaded', init)

// Listen for sidebar link click
ui.catList.addEventListener('click', showCat)

// Listen for clicks on cat pics
ui.catContainer.addEventListener('click', updateClickCount)

// Listen for Edit button
ui.catContainer.addEventListener('click', enableEdit)

// Listen for Cancel Edit button
ui.catContainer.addEventListener('click', cancelEdit)


// Listen for Form Submission
ui.catContainer.addEventListener('click', updateRecord)


// Initialize the view
function init(){
  ui.buildSidebarList(model.data)
}

// Show the cat profile
function showCat(e){
  let catId;
  if(e.target.classList.contains('cat')){
    catId = e.target.getAttribute('id')
  } else if(e.target.nodeName === 'P'){
    catId = e.target.parentElement.getAttribute('id')
  }
  ui.buildCatProfile(catId)
}

// Update the click count
function updateClickCount(e){
  if(e.target.classList.contains('cat-pic')){
    let clickContainer = e.target.parentElement.querySelector('span')
    let domId = clickContainer.getAttribute('id')
    let cat = model.findRecord( ui.parseId(domId) );
    model.addClick(cat)
    clickContainer.textContent = cat.clicks
  }
}

function enableEdit(e){
  if(e.target.getAttribute('id') === 'edit') {
    let domId = e.target.parentElement.getAttribute('id')
    let cat = model.findRecord( ui.parseId(domId) );
    ui.editForm(cat)
  }
  e.preventDefault()
}

function cancelEdit(e){
  if(e.target.getAttribute('id') === 'cancel') {
    ui.removeForm()
  }
  e.preventDefault()
}

// function updateRecord(e){
//   if(e.target.getAttribute('id') === 'submit') {
//     let domId = e.target.parentElement.parentElement.querySelector('.profile').getAttribute('id')
//     let cat = {
//       id: ui.parseId(domId),
//       name: document.querySelector('input#name').value,
//       url: document.querySelector('input#url').value,
//       clicks: document.querySelector('input#clicks').value
//     }
//     model.updateRecord(cat)
//     ui.removeForm()
//   }
//   e.preventDefault()
// }
