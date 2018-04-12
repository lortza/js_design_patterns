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
      <div id="nav-${cat.id}" class="cat card card-body mb-2">
        <p>${cat.name}</p>
      </div>
      `
      output += card
    });
    this.catList.innerHTML = output
  }

  buildCatProfile(id){
    let cat = model.findRecord(id)

    this.catContainer.innerHTML = `
    <div id="cat-${cat.id}" class="profile">
      <h3>${cat.name}</h3>
      <img src="${cat.url}" class="cat-pic">
      <p><span id="count-${cat.id}">${cat.clicks}</span> Clicks!</p>
      <button id="edit" class="btn btn-xs btn-primary">Edit</button>
    </div>
    `
  }

  editForm(cat){
    document.querySelector('button#edit').classList.add('hidden')
    let form = `
    <form id="edit-form" class="mt-3 form-control">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control" value="${cat.name}">
      </div>
      <div class="form-group">
        <label for="url">URL</label>
        <input type="text" id="url" class="form-control" value="${cat.url}">
      </div>
      <div class="form-group">
        <label for="clicks">Clicks</label>
        <input type="text" id="clicks" class="form-control" value="${cat.clicks}">
      </div>
      <button id="submit" class="btn btn-xs btn-success mt-2">Submit</button>
      <button id="cancel" class="btn btn-xs btn-warning mt-2">Cancel</button>
    </form>
    `
    this.catContainer.insertAdjacentHTML('beforeend', form)
  }

  removeForm(){
    document.querySelector('button#edit').classList.remove('hidden')
    document.querySelector('form#edit-form').remove()
  }

  parseId(domId){
    return parseInt(domId.split('-').pop())
  }
}
