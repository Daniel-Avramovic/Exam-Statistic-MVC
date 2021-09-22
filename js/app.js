import { Exam, getExem, getPrintData } from "./exam.js";
import {
  getFormData,
  resetForm,
  printList,
  printCount,
  printError,
  resetError,
  validateFormData,
} from "./form.js";
const $add = document.querySelector("#add");
document.addEventListener('DOMContentLoaded', function(){
  $add.addEventListener("click", createStudent);
});



const createStudent = () => {
  resetError();
  try {
    const form = getFormData();
    validateFormData(form);
    getExem(form);
    printCount(getPrintData());
    printList(getPrintData());
    resetForm();
  } catch (error) {
    printError(error.message);
  }
};


