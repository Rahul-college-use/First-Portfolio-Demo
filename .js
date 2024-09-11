let dropdwonBtn=document.querySelector('.menu_btn');
let MenuContent=document.querySelector('.menu_content');
dropdwonBtn.addEventListener('click',()=>{
  if(MenuContent.style.display===''){
    MenuContent.style.display="block";
  }
  else{
    MenuContent.style.display='';
  }
})