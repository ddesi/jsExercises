// Create a prototypical Person object. 
// From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers. 
// Make sure to write code afterwards that creates instances of these objects 
// to make sure that what you've written works well and you're able to store the necessary data 
// in each object.

function Person(name, age){
	this.name = name
	this.age = age
}

function Teacher(name, age, teacher_id){
	this.teacher_id = teacher_id
	Person.apply(this, arguments)

	this.teacherIdText = function(){
		return this.name + "'s ID is " + this.teacher_id
	}
}

function Student(name, age, level_of_education){
	this.level_of_education = level_of_education
	Person.apply(this, arguments)
	// i dont want the age, just the name

	this.educationText = function(){
		return this.name + "'s level of education is " + this.level_of_education
	}
}

function School(name){
	this.name = name
	this.teachers = []
	this.students = []

	this.addStudent = function(student){
		this.students.push(student)
	}
	this.addTeacher = function(teacher){
		this.teachers.push(teacher)
	}
}


orlando = new Teacher("Orlando", 32, "some teacher ID")
tolu = new Teacher("Tolu", 22, "some teacher ID")
jeremy = new Teacher("Jeremy", 33, "some teacher ID")
console.log(orlando)


sam = new Student("Sam", 24, "Masters")
jesse = new Student("Jesse", 29, "PHD")


school = new School("NYCDA")
console.log(school.name)

school.addTeacher(orlando)
school.addTeacher(tolu)
console.log(school.teachers)

school.addStudent(sam)
school.addStudent(jesse)
console.log(school.students)













