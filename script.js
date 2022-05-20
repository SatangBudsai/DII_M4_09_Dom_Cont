var student = {};
student.name = 'คุณลุง';
student.username = 'a@b.com';
student.gender = 'ชาย';
console.log(student.name)

// document.getElementById('output').innerText = student;


function addStudent(student){
    const output = document.getElementById('output');
    addStudentData(output,'ชื่อ',student.name);
    addStudentData(output,'รหัส',student.username);
    addStudentData(output,'เพศ',student.gender);
}
function addStudentData(type,key,data){
    let row = document.createElement('div');
    row.classList.add('row');
    let columnName = document.createElement('div')
    columnName.classList.add('col-1')
    columnName.classList.add('offset-1')
    columnName.innerHTML=key
    let columnValue = document.createElement('div')
    columnValue.classList.add('col')
    columnValue.innerHTML = data
    row.appendChild(columnName)
    row.appendChild(columnValue)
    type.appendChild(row)
}


window.addEventListener('load',function(){
    addStudent(student)
})