const scriptURL = 'https://script.google.com/macros/s/AKfycbx9fm1cSoIEv-hwTGT-GDLnFWoJ9uxPUoZ0x6Y9FZwsTNryNLWsX2hnavCCbbO-Jjw2/exec'
const form = document.forms['submit-to-google-sheet'];
const loadingIndicator =document.getElementById('loading');

form.addEventListener('submit', e => {
  e.preventDefault();
  loadingIndicator.style.display='block';
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => { 
        if(response.ok){
        console.log('Success!', response);
    alert('Form Submitted Successfully');
    form.reset();
        }else{
            throw new error('network response was not ok.')
        }
})
.catch(error =>{ console.error('Error!', error.message);
alert('There was an error submitting the form. ;Please try again');
})
.finally(() =>{
    loadingIndicator.style.display='none';
});
});