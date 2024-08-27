let toastBox = document.getElementById('toastBox');
const successMsg = '<i class="fa-sharp fa-solid fa-circle-check"></i>Seccuessfully Submitted';
const errorMsg = '<i class="fa-sharp fa-solid fa-circle-xmark"></i> There is an error!';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid intup, check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();

    },6000)
}