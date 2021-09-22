class Subject {
  constructor(name) {
    this.name = name;
  }
  getSubjectName = () => {
    let name = this.name.toUpperCase();
    return name;
  };
}

export { Subject };
