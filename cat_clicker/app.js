const ui = new UI()

// Load sidebar content on DOM load
document.addEventListener('DOMContentLoaded', init)

// Listen for sidebar link click
ui.catList.addEventListener('click', showCat)

// Listen for clicks on cat pics
ui.catContainer.addEventListener('click', updateClickCount)


// Initialize the view
function init(){
  ui.buildSidebarList(cats)
}

// Show the cat profile
function showCat(e){
  let catId;
  if(e.target.classList.contains('cat')){
    catId = e.target.getAttribute('id')
  } else if(e.target.nodeName === 'P'){
    catId = e.target.parentElement.getAttribute('id')
  }
  ui.buildCat(catId)
}

// Update the click count
function updateClickCount(e){
  if(e.target.classList.contains('cat-pic')){
    let clickContainer = e.target.parentElement.querySelector('span')
    let clickCount = parseInt(clickContainer.textContent)
    clickCount += 1
    clickContainer.textContent = clickCount

  }
}
