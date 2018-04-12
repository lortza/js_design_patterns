const model = {
  students: [
    {
      id: 1,
      name: "Slappy the Frog",
      // attendance: ['a', 'b', 'c', true, false, true, false, true, true, false, true, false]
      attendance: [false, false, false, true, false, true, false, true, true, false, true, false]
    },
    {
      id: 2,
      name: "Lilly the Lizard",
      attendance: [true, false, true, false, true, false, true, false, true, true, true, true]
    },
    {
      id: 3,
      name: "Paulrus the Walrus",
      attendance: [false, false, true, false, false, true, false, false, false, false, false, false]
    },
    {
      id: 4,
      name: "Gregory the Goat",
      attendance: [true, true, true, false, true, false, false, false, true, true, true, true]
    },
    {
      id: 5,
      name: "Adam the Anaconda",
      attendance: [true, true, true, true, true, false, true, true, true, true, false, false]
    }
  ],

  findStudent: function(id){
    return this.students.find(function(student){ return student.id === id })
  },

  updateAttendance: function(student, day){
    student.attendance[day.id - 1] = day.value
  },

  calculateMissingDays: function(student){
    return student.attendance.filter(function(day){ return day === false }).length
  }

}
