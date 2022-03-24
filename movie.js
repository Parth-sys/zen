function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);
    
  
  
   
  
  async function getFish(){
    var name=document.getElementById('Fname').value;
    
    
    try {
      
      const url="https://cataas.com/cat"
      var response=await fetch(url)
      var data= await response.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  
  
  function Movie(){
    
  
    var arr=[];
    try {
         
         var val=document.getElementById('Fname').value;
         var im=document.getElementById('m')
         var im1=document.getElementById('im1');
         var im2=document.getElementById('im2');
         var im3=document.getElementById('im3')
         console.log(val)
         var data=fetch("https://imdb-api.com/en/API/SearchMovie/k_vpx2kmqj/"+ val)
         
         
         data.then(function(res){
             console.log(res)
             // document.getElementById("m").src=res.url
             return res.json();
             
            }).then(function(rest){
                console.log(rest.results)
                 arr=rest.results;
                 var code=``
                arr.map((c,index)=>{
                  code+=`
                  
                  <div class="card bg-dark text-white" id="dd">
        <img class="card-img" src=${c.image}  id="m">
        <div class="card-img-overlay">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <p class="card-text" style="color :white" >  ${c.title}</p>
          </div>
      </div>
                  
                  
                  `
        
                })
            var s=document.getElementById('images');
            s.innerHTML=code;


               })
              


  
             }
             
        catch (error) {
         console.log(error); 
       }
        
      }