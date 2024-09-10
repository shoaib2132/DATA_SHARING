import { Injectable } from '@angular/core';
// import * as CryptoJS from 'crypto-js';
import * as config from '../Common/config/lock.config';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // private key = CryptoJS.enc.Utf8.parse(config.rsa.key.EncryptKey);
  // private iv = CryptoJS.enc.Utf8.parse(config.rsa.key.EncryptIV); 
  sidebarVisible: boolean = true;
  isEncryptLocalStorageData:any = true;
  isEncryptPayloadData:any = true; 

  constructor() { }

  // isLoggedInAdmin() {
  //   this.adminDetails = localStorage.getItem('APITOKEN');
  //   if(this.adminDetails === null){
  //     return false;
  //   }    
  //   if(this.adminDetails === ''){
  //     return false;
  //   }
  //   if(this.adminDetails == undefined){
  //     return false;
  //   }
  //   else{
  //     return true; 
  //   }
  // }

  // isLoggedInUser() {
  //   this.userDetails = localStorage.getItem('USERAPITOKEN');
  //   if(this.userDetails === null){
  //     return false;
  //   }    
  //   if(this.userDetails === ''){
  //     return false;
  //   }
  //   if(this.userDetails == undefined){
  //     return false;
  //   }
  //   else{
  //     return true; 
  //   }

  // }
  
  // Loacal Storage

//   setEncryptLocalStorageData(key:any,data:any,isJson?:any){
//     if(this.isEncryptLocalStorageData){
//       if(isJson == 1){
//         localStorage.setItem(key,this.encryptPayload(JSON.stringify(data),0));
//         // localStorage.setItem("APITOKEN",data.TOKEN);
//       }
//       else{
//         localStorage.setItem(key,this.encryptPayload(data,0));
//       }
//     }
//     else{
//       if(isJson == 1){
//         localStorage.setItem(key,JSON.stringify(data));
//       }
//       else{
//         localStorage.setItem(key,data);
//       }
//     }
// }

// getDecryptLocalStorageData(key:any,isJson?:any){
//   if(this.isEncryptLocalStorageData){
//     if(isJson == 1){
//       return JSON.parse(this.decryptPayload(localStorage.getItem(key)));
//     }
//     else{
//       return this.decryptPayload(localStorage.getItem(key));
//     }
//   }
//   else{
//     if(isJson == 1){
//       return JSON.parse(localStorage.getItem(key) || '{}');
//     }
//     else{
//       return localStorage.getItem(key);
//     }
//   }
// }


// encryptPayload(text: any,ispayload:any) {
//   if(this.isEncryptPayloadData){
//     text = JSON.stringify(text)
//     var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(text), this.key, {
//       keySize: 128 / 8,
//       iv: this.iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
//     });

//     if(ispayload == 1){
//       let data = {
//         data:  encrypted.toString()
//       }
//       var encryptData = JSON.stringify(data)
//       return encryptData;
//     }
//     else{
//       return encrypted;
//     }
  
//   }
//   else{
//     return text;
//   }
// }

// decryptPayload(decString: any) {
//   if(this.isValid(decString)){
//     var decrypted = CryptoJS.AES.decrypt(decString, this.key, {
//       keySize: 128 / 8,
//       iv: this.iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
//     });
//     return JSON.parse((decrypted.toString(CryptoJS.enc.Utf8)));    
//   }
//   else{
//     return null;
//   }
// }

// isValid(inputValue: any): boolean {
//     if (inputValue == '' || inputValue == undefined || inputValue == 'undefined') 
//     {
//       return false;
//     } else {
//       return true;
//     }
//   }

// decryptUsingAES256(decString:any) {
//   var decrypted = CryptoJS.AES.decrypt(decString, this.key, {
//       keySize: 128 / 8,
//       iv: this.iv,  
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
//   });
//   return decrypted.toString(CryptoJS.enc.Utf8);
// }




// SetRoleRights(code:any){
//   this.MenuList = JSON.parse(this.getDecryptLocalStorageData('MENU_LIST',this.MenuList));
//   this.findAllByFunctionCode(code,this.MenuList)
//   this.setEncryptLocalStorageData('ROLE_RIGHTS',this.ROLE_RIGHTS,1);
//   //  console.log('ROLE_RIGHTS SET ->' , this.ROLE_RIGHTS)
// }

// findAllByFunctionCode(functionCode, items,results = []) {
//   for (const item of items) {
//     if (item.FUNCTION_CODE === functionCode) {
//         // this.ROLE_RIGHTS.push(item); // Add matching item to the results array
//         this.ROLE_RIGHTS = {
//           FUNCTION_CODE:item.FUNCTION_CODE,
//           CREATE: item.A_CREATE,
//           EDIT: item.A_EDIT,
//           VIEW: item.A_VIEW,
//           CANCEL: item.A_CANCEL
//         };
//     }
//     if (item.items && item.items.length) {
//         this.findAllByFunctionCode(functionCode, item.items, results); // Recursively search in nested items
//     }
// }
// } 


}
