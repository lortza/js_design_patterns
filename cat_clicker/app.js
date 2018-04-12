const ui = new UI()

// Load sidebar content on DOM load
document.addEventListener('DOMContentLoaded', init)

// Listen for sidebar link click
ui.catList.addEventListener('click', showCat)

// Listen for clicks on cat pics
ui.catContainer.addEventListener('click', updateClickCount)


// Initialize the view
function init(){
  ui.buildSidebarList(cats.data)
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
    let id = clickContainer.getAttribute('id')
    let catId = parseInt(id.split('-').pop())
    let cat = cats.findCat(catId);
    cats.addClick(cat)
    clickContainer.textContent = cat.clicks
  }
}
