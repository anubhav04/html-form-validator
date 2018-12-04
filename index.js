const regex = /^[0-9]*$/;
const decimalRegex= /^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/;
const numberRegx = /^[+-]?((\.\d+)|(\d+(\.\d+)?))$/;
const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
import moment from 'moment';

export const checkNumber = (fieldInfo) => {

  return (checkEmpty(fieldInfo) && checkPattern(fieldInfo) && checkMinLength(fieldInfo) && checkMaxLength(fieldInfo)) ? '':fieldInfo.message;
}
export const checkString = (fieldInfo) => {
  return (checkEmpty(fieldInfo) && checkMinLength(fieldInfo) && checkMaxLength(fieldInfo)) ? '':fieldInfo.message;
}
export const checkIntNumber = (fieldInfo) => {
  return (checkEmpty(fieldInfo) && checkIntType(fieldInfo) && checkMinLength(fieldInfo) && checkMaxLength(fieldInfo)) ? '':fieldInfo.message;
}
export const checkValidDate = (fieldInfo) => {
  return (checkDateType(fieldInfo)) ? '':fieldInfo.message;
}
export const checkEmail = (fieldInfo) => {
  return (checkEmpty(fieldInfo) && checkEmailPattern(fieldInfo) ) ? '':fieldInfo.message;
}
export const checkFloat = (fieldInfo) => {
  return (checkEmpty(fieldInfo) && checkFloatPattern(fieldInfo) ) ? '':fieldInfo.message;
}
export const checkDateDiff = (startDate,endDate) => {

  if(!checkEmpty(startDate)){
    return "Start date is required";
  }
  if(!checkEmpty(endDate)){
    return "End date is required";
  }
  if(checkEmpty(endDate) && (startDate.value == "" || startDate.value == undefined || startDate.value == null)) {
    return "Start date is required";
  }
  if(checkEmpty(endDate) && checkEmpty(startDate)){
    if(!checkDateType(startDate)){
      return "Start date is not valid";
    }
    if(!checkDateType(endDate)){
      return "End date is not valid";
    }
    if(moment(endDate.value).diff(moment(startDate.value),'days')<0){
      return "Start date can't be post End Date";
    }
  }
  return "";
}

function checkEmpty(fieldInfo){
  if(fieldInfo.required){
    return (fieldInfo.value != '' && fieldInfo.value != null && fieldInfo.value != undefined) ? true:false
  }else{
    return true
  }
}
function checkFloatPattern(fieldInfo){
  if(!fieldInfo.required && (fieldInfo.value == '' || fieldInfo.value == undefined || fieldInfo.value == null) ){
    return true
  }else{
    return decimalRegex.test(fieldInfo.value);
  }
}
function checkPattern(fieldInfo){
  if(!fieldInfo.required && (fieldInfo.value == '' || fieldInfo.value == undefined || fieldInfo.value == null) ){
    return true
  }else{
    return numberRegx.test(fieldInfo.value);
  }
}
function checkEmailPattern(fieldInfo){
  if(!fieldInfo.required && (fieldInfo.value == '' || fieldInfo.value == undefined || fieldInfo.value == null)){
    return true
  }else{
    return emailRegx.test(fieldInfo.value);
  }
}
function checkMinLength(fieldInfo){
  if(fieldInfo.minLength){
    return parseInt(fieldInfo.value.length) >= parseInt(fieldInfo.minLength) ? true:false
  }else{
    return true
  }
}
function checkMaxLength(fieldInfo){
  if(fieldInfo.maxLength){
      return parseInt(fieldInfo.value.length) <= parseInt(fieldInfo.maxLength) ? true:false
  }else{
    return true
  }
}
function checkDateType(fieldInfo){
  if(!fieldInfo.required && (fieldInfo.value == '' || fieldInfo.value == undefined || fieldInfo.value == null)){
    return true
  }else{
    return fieldInfo.value == undefined || fieldInfo.value == null ? false : moment(fieldInfo.value).isValid();
  }
}
function checkIntType(fieldInfo){
  if(!fieldInfo.required && (fieldInfo.value == '' || fieldInfo.value == undefined || fieldInfo.value == null)){
    return true
  }else{
    return regex.test(fieldInfo.value);
  }
}
