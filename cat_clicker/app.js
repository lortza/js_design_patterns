const ui = new UI()

// Load sidebar content on DOM load
document.addEventListener('DOMContentLoaded', ui.buildSidebarList(cats))

// Listen for sidebar link click
ui.catList.addEventListener('click', showCat)

// Listen for clicks on cat pics
ui.catContainer.addEventListener('click', updateClickCount)


// Show the cat profile
function showCat(e){
  let catElement;
  if(e.target.nodeName === 'P'){
    catId = e.target.getAttribute('id')
  } else if(e.target.classList.contains('card')){
    catId = e.target.querySelector('p').getAttribute('id')
  }
  ui.buildCat(catId)
  e.preventDefault()
}

// Update the click count
function updateClickCount(e){
  if(e.target.classList.contains('cat-pic')){
    let clickContainer = e.target.parentElement.querySelector('span')
    let clickCount = parseInt(clickContainer.textContent)
    clickCount += 1
    clickContainer.textContent = clickCount
  }
  e.preventDefault()
}


