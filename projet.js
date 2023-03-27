searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

/////////////////////////////////////////////////////////////////////////////

/*login form */
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}
///////////////////////////////////////////////////////////////////////////////////

/* navbar */
window.onscroll = () => {
    searchForm.classList.remove('active');
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}


window.onload = () => {
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}




var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
     deplay:9500,
     disableOnInteraction:false,
     el:".swiper-pagination",
     clickable:true,
    },
    breakpoints: {
      
        "@0.00" : {
        slidesPerView: 1,
       
      },
      "@0.75": {
        slidesPerView: 2,
        
      },
      "@1.00" : {
        slidesPerView: 3,
       
      },
    },
  });



  var swiper = new Swiper(".featured-solider", {
    
   
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        
      },
    breakpoints: {
      
        "@0.00": {
        slidesPerView: 1,
       
      },
      "@0.75": {
        slidesPerView: 2,
       
      },
      "@1.00": {
        slidesPerView: 3,
        
      },
      "@1.50": {
        slidesPerView: 4,
       
      },
      
    },
  });


  var swiper = new Swiper(".featured-solider", {
    
   
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        
      },
    breakpoints: {
      
        "@0.00": {
        slidesPerView: 1,
       
      },
      "@0.75": {
        slidesPerView: 2,
       
      },
      "@1.00": {
        slidesPerView: 3,
        
      },
      
      
    },
  });



  var swiper = new Swiper(".arrivals-slider", {
    
   
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    
    breakpoints: {
      
        "@0.00": {
        slidesPerView: 1,
       
      },
      "@0.75": {
        slidesPerView: 2,
       
      },
      "@1.00": {
        slidesPerView: 3,
        
      },
      
      
    },
  });


  var swiper = new Swiper(".arrivals-slider", {
    
   
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    
    breakpoints: {
      
        "@0.00": {
        slidesPerView: 1,
       
      },
      "@0.75": {
        slidesPerView: 2,
       
      },
      "@1.00": {
        slidesPerView: 3,
        
      },
      "@1.50": {
        slidesPerView: 4,
       
      },
      
    },
  });



  
const book = [{
    
  img: "cover.jfif",
  title: "ONE PICE",
  year : 2003,
  url : "projet2.html"

},
{

    
  img: "cover (1).jfif",
  title: "NARUTO",
  year : 2002,
  url : "projet3.html"

},
{
  img: "cover (3).jfif",
  title: "Blue Box",
  year : 2002,
  url : "projet4.html"

},
{


   img: "cover (4).jfif",
  title: "DRAGON BALL",
  year : 2002,
  url : "projet5.html"

}







]


  let search_bx2 = document.getElementsByClassName('search_bx2')[0];


  window.addEventListener('load' , () => {

    book.forEach(element => {
      const { img,title,year,url } = element;

      let card = document.createElement('a');
      card.href = url;
      card.innerHTML = ` <img src="${img}" alt="">
      <div class="content2">
          <h6>${title}</h6>
          <p>${year}</p>
      </div>`;
      search_bx2.appendChild(card);
    });
  });

  let search = document.getElementById('search-box');


  search.addEventListener('keyup', () => {

    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for(let i=0;i< a.length;i++){
      let b = a[i].getElementsByClassName('content2')[0];
      let c = b.getElementsByTagName('h6')[0];

      let TextValue = c.textContent || c.innerText;
      if(TextValue.toUpperCase().indexOf(filter) > -1){
        a[i].style.display = '';
        search_bx2.style.visibility = "visible";
        search_bx2.style.opacity = 1;

      }else {
        a[i].style.display = 'none';

      }
      if(search.value == 0){
        search_bx2.style.visibility = "hidden";
        search_bx2.style.opacity = 0;
      }
    }
   
  })