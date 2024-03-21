const form = document.getElementById('form');
form.addEventListener("submit",function(e){
    const formData = new FormData(form);
    e.preventDefault()
    let object = {};
    formData.forEach((value,key)=>{
        object[key] = value;
    })
})
let json = JSON.stringify(object);
fetch("https://api.web3forms.com/submit",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
        Accept: "application/json"
    },
    body:json
})
.then(async (res)=>{
    let json = await res.json();
    if(res.status ===200){
        console.log("success");
    }else{
        console.log(res)
    }
})