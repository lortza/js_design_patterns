// class Cat {
//   constructor(name, url){
//     this.name = name
//     this.url = url
//     this.clicks = 0
//   }
// }

// const ui = {
//   pic: document.querySelector('img#cat'),
//   clickDisplay: document.querySelector('span#click-count')
// }



const cats = [
  {
    id: 1,
    name: "meowkies",
    url: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
    clicks: 0
  },
  {
    id:2,
    name: "chewie",
    url: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
    clicks: 0
  }
]

class UIController {
  constructor(){
    this.catsContainer = document.querySelector('#cats')
  }

  buildCats(cats){
    let output = ''

    cats.forEach(function(cat) {
      let card = `
      <div class="col-sm-6">
        <h3>${cat.name}</h3>
        <img src="${cat.url}" class="cat-pic">
        <h3><span id="count-${cat.id}">${cat.clicks}</span> Clicks!</h3>
      </div> <!-- col-12-xs -->
      `
      output += card
    });
    this.catsContainer.innerHTML = output
  }
}



const ui = new UIController()
document.addEventListener('DOMContentLoaded', ui.buildCats(cats))
ui.catsContainer.addEventListener('click', updateClick)

function updateClick(e){
  if(e.target.classList.contains('cat-pic')){
    let clickContainer = e.target.parentElement.querySelector('span')
    let clickCount = parseInt(clickCount.textContent)
    clickCount += 1
    clickContainer.textContent = clickCount
  }
  e.preventDefault()
}


