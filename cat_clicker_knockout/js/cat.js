const Cat = function(data){
  this.clicks = ko.observable(data.clicks)
  this.name = ko.observable(data.name)
  this.url = ko.observable(data.url)
  this.nicknames = ko.observableArray(data.nicknames)

  this.level = ko.pureComputed(function(){
    let term = 'newborn'
    if(this.clicks() <= 10){
      let term = 'newborn'
    } else if(this.clicks() <= 20){
      term = 'infant'
    } else if(this.clicks() <= 30){
      term = 'child'
    } else if(this.clicks() <= 40){
      term = 'teen'
    } else if(this.clicks() > 40){
      term = 'adult'
    }
    return term
  }, this)
}
