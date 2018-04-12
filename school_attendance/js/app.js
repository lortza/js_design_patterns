ui = new UI()

// Build out the view
ui.init()

// Listen for checkbox clicks
ui.tbody.addEventListener('click', updateStudentAttendance)

function updateStudentAttendance(e){
  if(e.target.getAttribute('type') === 'checkbox'){
    // Retrieve the day info
    let day = {
      id: ui.parseDomId(e.target.className),
      value: e.target.checked
    }
    // Retrieve the student info
    let studentId = ui.parseDomId(e.target.parentElement.parentElement.getAttribute('id'))
    let student = model.findStudent(studentId)

    // Update the data model with the new info
    model.updateAttendance(student, day)

    // Update the view with the new info
    let missingDayCol = e.target.parentElement.parentElement.querySelector('.missed-col')
    ui.updateDaysMissed(missingDayCol, student)
  }
}
