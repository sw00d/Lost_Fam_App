 export const testEmail = (email) => {
   let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
 }

 export const canNavToNext = (values, instOfValidate) => {
    if (!values) return false;
    let objToTest = instOfValidate(values);
    console.log(objToTest)
    for (let key in objToTest) {
      if(objToTest.hasOwnProperty(key)) return false;
    }
    return true;
 }

 export const testName = (name) => {
   if (name){
     return(name.length > 1);
   }
 }

 export const testPassword = (password) => {
   if (password){
     return(password.length > 5);
   }
 }

 export const checkForWhiteSpace = (str) => {
    return /\s/g.test(str);
 }
