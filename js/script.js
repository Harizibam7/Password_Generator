const outputElement=document.getElementById('output');
const btncopy=document.getElementById('btnCopy');
const passwordLength=document.getElementById('length');
const numberElement=document.getElementById('number');
const smallElement=document.getElementById('smallLetter');
const capitalLetter=document.getElementById('capitalLetter');
const symbolElement=doucment.getElementById('symbol');
const frmElement=document.getElementById('frm');
const generateElement=document.getElementById('generate');

//button to copy
btncopy.addEventListener('click',async()=>{
    const pass=outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert("Copied to clipBoard");
    }else{
        alert("There is no Password");
    }
})

/*
ASCII Code
A-Z 65-90
a-z 97-122
0-9 48-57
symbol ~!%$&#*()#?.:
*/

//Random genreate

function generateRandom(min,max){
    const limit=(max-min)+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);

}
function capitalValue(){
    return generateRandom(65,90);
}

function smallValue(){
    return generateRandom(97,122);

}
function numberValue(){
    return generateRandom(48,57);
}

function symbolValue(){
    const sym='~!%$&#*()#?.:';
    return sym[Math.floor(Math.random()*sym.length)];
}

//function Object
const functionArray=[
    {
        element:capitalLetter,
        fun:capitalValue
    },
    {
        element:smallElement,
        fun:smallValue
    },
    {
        element:numberElement,
        fun:numberValue
    },
    {
        element:symbolElement,
        fun:symbolValue
    }

];

//Generate Password
frmElement.addEventListener('submit',(e)=>{
    e.preventDefault();

    let generatedpassword="";
    const limit=passwordLength.value;
    for(i=0;i<limit;i++){
        const index=Math.floor(Math.random()*functionArray.length);
        const letter=functionArray[index].fun();
        generatedpassword+=letter;
    }
    outputElement.value=generatedpassword;
});
