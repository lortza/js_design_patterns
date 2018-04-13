const ViewModel = function(){
  const self_vm = this

  this.catList = ko.observableArray([])

  catData.forEach(function(cat){
    self_vm.catList.push( new Cat(cat) )
  })

  this.currentCat = ko.observable( this.catList()[0] )

  this.incrementCounter = function(){
    self_vm.currentCat().clicks(self_vm.currentCat().clicks() + 1)
  }

  this.setCat = function(clicked){
    self_vm.currentCat(clicked)
  }
}

ko.applyBindings(new ViewModel())
