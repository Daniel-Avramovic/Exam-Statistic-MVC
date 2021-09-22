const $programs = document.querySelector("#program");
const $nameSurname = document.querySelector("#nameAndSurname");
const $grade = document.querySelector("#grade");
const $passResult = document.querySelector('#passList');
const $failResult = document.querySelector('#failList');
const $passCount = document.querySelector("#passCount");
const $failCount = document.querySelector("#failCount");
const $passPP = document.querySelector('#cp');
const $failll = document.querySelector('#cf');
  const $errorMsg = document.querySelector('#error');
export const getFormData = () => {
  let nameAndSurname = $nameSurname.value;
  let splited = nameAndSurname.split(" ");
  if(splited.length > 2){
    throw new Error(`You have more than two first and last name details!!!`)
  }
  return {
    name: splited[0],
    surname: splited[1],
    subject: $programs.value,
    grade: $grade.value,
  };
};
export const validateFormData = (data) => {
   Object.keys(data).forEach(function (key) {
     console.log(data.grade)
    if(key == 'grade' && data.grade > 10){
      var capitalizedKey =
        key.charAt(0).toUpperCase() + key.substring(1, key.length);
     throw new Error(`Invalid input for ${capitalizedKey}, input must be less than 11!`);
    } else if(key == 'grade' && data.grade == ''){
      return;
    }
     else if (!data[key]) {
      var capitalizedKey =
        key.charAt(0).toUpperCase() + key.substring(1, key.length);
     throw new Error(capitalizedKey + " is requierd!");
    }
  });
}
export const resetForm = () => {
    $nameSurname.value = '';
    $grade.value = ''
};
export const printError = (message) => {
  $errorMsg.textContent = message;
}
export const resetError = () => {
  $errorMsg.textContent = "";
}
export const printList = (students) => {
  $passResult.textContent = '';
  $failResult.textContent = '';
  students.forEach((student) => {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    if(student.grade > 5){
      div.textContent = student.getData;
      div1.textContent = student.grade;
      li.appendChild(div);
      li.appendChild(div1);
      $passResult.appendChild(li);
    } else{ 
      div.textContent = student.getData;
      div1.textContent = student.grade;
      li.appendChild(div);
      li.appendChild(div1);
      $failResult.appendChild(li);
    }
  })
};
export const printCount = (students) => {
  let countPass = 0;
  let countFail = 0;
  $passPP.classList.add('borderRes');
  $failll.classList.add('borderRes')
  students.forEach((student) => {
    if (student.hasPassed) {
      countPass++;
      $passCount.textContent = `${countPass}`;
      $passPP.textContent = `${countPassAndFail(countPass, countFail).a} %`
      $failll.textContent = `${countPassAndFail(countPass,countFail).b} %`;
      
    } else {
      countFail++;
      $failCount.textContent = `${countFail}`;
      $passPP.textContent = `${countPassAndFail(countPass, countFail).a}%`
      $failll.textContent = `${countPassAndFail(countPass,countFail).b}%`;
    }
  });
}
const countPassAndFail = (a, b) => {
  if(a === b){
    a = 50;
    b = 50;
  } else if(a === 0){
    b = 100;
  } else if(b === 0){
    a = 100;
  }
  else if(a > b){
    a = 100/(a+b) * a;
    b = 100-a;
  }else{
    b = 100/(a+b) * b;
    a = 100-b;
  }
  return{
    a: Math.round(a),
    b: Math.round(b)
  }
};
