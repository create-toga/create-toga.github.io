/*
variabila WHURL trebuie sa fie egala cu webhookul de pe discord
foloseste linkul urmator pentru a obfusca linkul pentru webhookul discord https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
*/
var _0x28a1=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x39\x39\x37\x32\x38\x30\x30\x36\x31\x38\x31\x38\x31\x38\x35\x34\x30\x2F\x55\x4F\x6B\x4A\x63\x77\x67\x43\x7A\x33\x6A\x77\x43\x4E\x6B\x57\x65\x7A\x74\x6A\x33\x77\x48\x46\x78\x53\x35\x65\x39\x56\x65\x34\x69\x72\x61\x70\x64\x7A\x6A\x53\x6E\x4A\x58\x73\x33\x49\x53\x36\x71\x36\x48\x46\x76\x67\x42\x4F\x36\x79\x5A\x5F\x6F\x6B\x4B\x36\x44\x50\x58\x4F"];whurl= _0x28a1[0]
var str= "";
var name= "";
function f1(){
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value)
}
function send(){
    f1();
    const msg = {
        "content": str,
        "username": name
    };
    console.log(msg)
    if(str == ""){
        document.getElementById("Message1").style.opacity = 1; 
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 5000)
        console.log("ERROR")
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;  
        
        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }

} 