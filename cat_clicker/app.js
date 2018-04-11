class UIController {
  constructor(){
    this.pic = document.querySelector('img#cat')
    this.clickDisplay = document.querySelector('span#click-count')
  }

  buildCats(cats){
    let output = ''

    cats.forEach(function(cat) {
      let card = `
      `
    });
  }
}

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
const ui = new UIController()

const cats = [
  {name: "meowkies", url: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426", clicks: 0},
  {name: "chewie", url: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496", clicks: 0}
]


ui.pic.addEventListener('click', updateClick)

let clicks = 0

function updateClick(){
  clicks += 1
  ui.clickDisplay.textContent = clicks
}


