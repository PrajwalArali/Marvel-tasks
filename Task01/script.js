document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var studentsInputs = document.querySelectorAll('#studentsInputs input[type="text"]');
    var marksInputs = document.querySelectorAll('#studentsInputs input[type="number"]');
    var resultsDiv = document.getElementById('results');
  
    var studentsData = [];
  
    for (var i = 0; i < studentsInputs.length; i++) {
      var studentName = studentsInputs[i].value.trim();
      var studentMarks = parseFloat(marksInputs[i].value);
  
      if (studentName !== '' && !isNaN(studentMarks)) {
        studentsData.push({ name: studentName, marks: studentMarks });
      }
    }
  
   
    var totalMarks = 0;
    for (var i = 0; i < studentsData.length; i++) {
      totalMarks += studentsData[i].marks;
    }
    var classAverage = totalMarks / studentsData.length;
  
    
    resultsDiv.innerHTML = '';
  
    studentsData.sort((a, b) => b.marks - a.marks);
  
    studentsData.forEach(function(student, index) {
      var percentage = (student.marks / 100) * 100;
      var rank = index + 1;
      resultsDiv.innerHTML += '<p>' + student.name + ': ' + percentage.toFixed(2) + '% (Rank: ' + rank + ')</p>';
    });
  
    resultsDiv.innerHTML += '<p>Class Average: ' + classAverage.toFixed(2) + '%</p>';
  });
    
  var studentsInputsDiv = document.getElementById('studentsInputs');
  for (var i = 1; i <= 10; i++) {
    studentsInputsDiv.innerHTML += '<input type="text" placeholder="Student ' + i + ' Name"> <input type="number" placeholder="Marks">';
  }