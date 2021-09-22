import { Subject } from "./subject.js";
import { Student } from "./student.js";
let listStudent = [];

export class Exam extends Student {
  constructor(name, surname, subName, grade) {
    let subject = new Subject(subName);
    super(name, surname);
    this.subName = subject;
    this.grade = grade;
  }
  getExamInfo = () =>
    `${this.subName.getSubjectName()} - ${this.getStudentData()}`;
  hasPassed = () => {
    if (this.grade > 5) {
      return true;
    } else {
      return false;
    }
  };
}

export const getExem = (data) => {
  let grade = data.grade || NaN;
  let student = new Exam(data.name, data.surname, data.subject, grade);
  listStudent.push(student);
  return student;
};
export const getPrintData = () => {
  let printData = [];
  listStudent.forEach((student) => {
    printData.push({
      getData: student.getExamInfo(),
      grade: student.grade,
      hasPassed: student.hasPassed(),
    });
  });
  return printData;
};

