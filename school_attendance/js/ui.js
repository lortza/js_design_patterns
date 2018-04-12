class UI {
  constructor() {
    this.tbody = document.querySelector('tbody')
  }

  buildStudents(students){
    let studentsHTML = ''
    students.forEach(function(student){
      let daysMissed = model.calculateMissingDays(student)

      let days = ''
      student.attendance.forEach(function(day, index){
        if(day === true){
          days += `<td class="attend-col"><input type="checkbox" class="day-${index + 1}" checked></td>`
        } else {
          days += `<td class="attend-col"><input type="checkbox" class="day-${index + 1}"></td>`
        }
      })//end attendance

      let tr = `
        <tr id="student-${student.id}" class="student">
          <td class="name-col">${student.name}</td>
          ${days}
          <td class="missed-col">${daysMissed}</td>
        </tr>
      `
      studentsHTML += tr
    })
    this.tbody.innerHTML = studentsHTML
  }

  updateDaysMissed(missingDayCol, student){
    let days = model.calculateMissingDays(student)
    missingDayCol.textContent = days
  }

  parseDomId(domId){
    return parseInt( domId.split('-').pop() )
  }

  init(){
    this.buildStudents(model.students)
  }



}// end UI
