const model = {
  data: [
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
    },
    {
      id:3,
      name: "eliot & tim",
      url: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
      clicks: 0
    },
    {
      id:4,
      name: "dave",
      url: "https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640",
      clicks: 0
    }
  ],

  findRecord: function(id){
    return this.data.find(function(cat){ return cat.id === id })
  },

  // updateRecord: function(cat){
  //   console.log('hollllllla ' + cat)
  // },

  addClick: function(cat){
    cat.clicks += 1
  }
}
