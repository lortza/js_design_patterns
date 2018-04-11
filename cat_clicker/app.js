const ui = new UI()

document.addEventListener('DOMContentLoaded', ui.buildSidebarList(cats))
ui.catList.addEventListener('click', showCat)
ui.catContainer.addEventListener('click', updateClickCount)



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

function updateClickCount(e){
  if(e.target.classList.contains('cat-pic')){
    let clickContainer = e.target.parentElement.querySelector('span')
    let clickCount = parseInt(clickContainer.textContent)
    clickCount += 1
    clickContainer.textContent = clickCount
  }
  e.preventDefault()
}


