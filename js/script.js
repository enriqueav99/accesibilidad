document.body.classList.toggle('js-enabled');


document.addEventListener('DOMContentLoaded', function(event) 
{
  let hamburger = document.getElementById('menu-hamburguesa');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.onclick = function()
  {   
      if(this.getAttribute('aria-expanded') == 'false')
      {
          this.setAttribute('aria-expanded', 'true');
      }else{
          this.setAttribute('aria-expanded', 'false');
      }
  }


  
});

