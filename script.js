var student = {};
student.name = 'คุณลุง';
student.username = 'a@b.com';
student.gender = 'ชาย';
// console.log(student.name)
// document.getElementById('output').innerText = student;

var secondStudent = {};
secondStudent.name = 'คุณนาย';
secondStudent.username = 'c@f.com';
secondStudent.gender = 'หญิง';

var students = [
    student,secondStudent,{
        name :'สมรักษ์',
        username : 'm@n.com',
        gender : 'ชาย',
    }
]

function addStudent(student){
    const output = document.getElementById('output');
    addStudentData(output,'ชื่อ',student.name);
    addStudentData(output,'รหัส',student.username);
    addStudentData(output,'เพศ',student.gender);

    addStudentData(output,'ชื่อ',secondStudent.name);
    addStudentData(output,'รหัส',secondStudent.username);
    addStudentData(output,'เพศ',secondStudent.gender);
    
    addStudentData(output,'ชื่อ',students[2].name);
    addStudentData(output,'รหัส',students[2].username);
    addStudentData(output,'เพศ',students[2].gender);
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