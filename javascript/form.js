function signup_complete(){
var fname=document.forms.fname.value;
var lname=document.forms.lname.value;
var email=document.forms.ename.value;
var phone=document.forms.pname.value;
var str1=document.forms.s1name.value;
var str2=document.forms.s2name.value;
var city=document.forms.cname.value;
var state=document.forms.sname.value;
var zip=document.forms.zname.value;
var pwd=document.forms.crname.value;
var vpwd=document.forms.vname.value;

if(fname=='null' || fname=="") {
document.getElementById("pfname").innerHTML="First name cananot be blank";
document.getElementById("fname").style.color="#ff0000b5";
document.getElementById("ifname").style.border="1px solid #ff0000b5";
}
if(lname=='null' || lname=="") {
document.getElementById("plname").innerHTML="last name cananot be blank";
document.getElementById("lname").style.color="#ff0000b5";
document.getElementById("ilname").style.border="1px solid #ff0000b5";
}
if(email=='null' || email=="") {
document.getElementById("pename").innerHTML="email  cananot be blank";
document.getElementById("ename").style.color="#ff0000b5";
document.getElementById("iename").style.border="1px solid #ff0000b5";
}
if(phone=='null' || phone=="") {
document.getElementById("pname").innerHTML="phone number cananot be blank";
document.getElementById("pname").style.color="#ff0000b5";
document.getElementById("ipname").style.border="1px solid #ff0000b5";
}
if(str1=='null' || str1=="") {
document.getElementById("ps1name").innerHTML="address1  cananot be blank";
document.getElementById("s1name").style.color="#ff0000b5";
document.getElementById("is1name").style.border="1px solid #ff0000b5";
}
if(str2=='null' || str2=="") {
document.getElementById("ps2name").innerHTML="address2  cananot be blank";
document.getElementById("s2name").style.color="#ff0000b5";
document.getElementById("is2name").style.border="1px solid #ff0000b5";
}
if(city=='null' || city=="") {
document.getElementById("pcname").innerHTML="city name cananot be blank";
document.getElementById("cname").style.color="#ff0000b5";
document.getElementById("icname").style.border="1px solid #ff0000b5";
}
if(state=='null' || state=="") {
document.getElementById("psname").innerHTML="state name  cananot be blank";
document.getElementById("sname").style.color="#ff0000b5";
document.getElementById("isname").style.border="1px solid #ff0000b5";
}
if(zip=='null' || zip=="") {
document.getElementById("pzname").innerHTML="zip code  cananot be blank";
document.getElementById("zname").style.color="#ff0000b5";
document.getElementById("izname").style.border="1px solid #ff0000b5";
}
if(pwd=='null' || pwd=="") {
document.getElementById("pcrname").innerHTML="password  cananot be blank";
document.getElementById("crname").style.color="#ff0000b5";
document.getElementById("icrname").style.border="1px solid #ff0000b5";
}
if(vpwd=='null' || vpwd=="") {
document.getElementById("pvname").innerHTML="verify password  cananot be blank";
document.getElementById("vname").style.color="#ff0000b5";
document.getElementById("ivname").style.border="1px solid #ff0000b5";
}
}
