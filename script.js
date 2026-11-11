// Form handling with localStorage draft
(function(){
  const form=document.getElementById('cform');
  const status=document.getElementById('status');
  // restore draft
  try{ const d=localStorage.getItem('draft'); if(d){ form.elements.name.value=d; }}catch(e){}
  form.addEventListener('submit',e=>{e.preventDefault(); if(!form.checkValidity()){status.textContent='Please fill required fields.';return}
    status.textContent='Thanks! Your message has been recorded locally.'; localStorage.setItem('message', JSON.stringify({name:form.name.value,email:form.email.value,msg:form.msg.value}));
  });
})();