 export const testEmail = (email) => {
   let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
 }

 export const canNavToNext = (formObj, instOfValidate) => {
   if (formObj.hasOwnProperty('values')) {
     let objToTest = instOfValidate(formObj.values);
     for (let key in objToTest) {
       if(objToTest.hasOwnProperty(key)) return false;
     }
     return true;
   }
   return false;
 }
