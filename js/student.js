class Student {
  constructor(name, surname) {
    let capName =
    name.charAt(0).toUpperCase() + name.substring(1, name.length);
    let capSurname =
    surname.charAt(0).toUpperCase() + surname.substring(1, surname.length)
    this.name = capName;
    this.surname = capSurname;
  }
  getStudentData = () => `${this.name} ${this.surname}`;
}

export { Student };
