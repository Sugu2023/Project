document.write(subFun());
function subFun()
{
   var digit=9150632151;
   let OTP=''
   for(i=0;i<6;i++)
   {
   OTP+=digit[Math.floor(Math.random)+10];
   }
   return OTP;
}
// window.history.back();
window.history.go(-
     1);