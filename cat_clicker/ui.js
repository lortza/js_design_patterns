class UI {
  constructor(){
    this.catContainer = document.querySelector('#cat-display')
    this.sidebar = document.querySelector('.sidebar')
    this.catList = document.querySelector('#cat-list')
  }

  buildSidebarList(cats){
    let output = ''
    cats.forEach(function(cat) {
      let card = `
      <div class="card card-body mb-2">
        <p id="cat-${cat.id}">${cat.name}</p>
      </div>
      `
      output += card
    });
    this.catList.innerHTML = output
  }

  buildCat(catId){
    let id = parseInt(catId.split('-').pop())
    let cat = cats.filter(function(c){ return c.id === id })[0];

    this.catContainer.innerHTML = `
      <h3>${cat.name}</h3>
      <img src="${cat.url}" class="cat-pic">
      <p><span id="count-${cat.id}">${cat.clicks}</span> Clicks!</p>
    `
  }
}
