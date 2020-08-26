let arr = ["img/first_TLOU2.jpg", "img/second_TLOU2.jpg", "img/third_TLOU2.jpg", "img/fourth_TLOU2.jpg", "img/fifth_TLOU2.jpg"];
let container = document.querySelector('.container');
let main_screen = document.querySelector('.container_img');
let Interval;

container.addEventListener('mouseover', Hover);

container.addEventListener('mouseout', Over);

function Hover() {
   let i = 0;  

   Interval = setInterval(() => {
      main_screen.classList.add('anim');      

      main_screen.src = arr[i];

      i++; 

      if(i > 4)
         i = 0;         
   }, 2000);            
}

function Over() {
   clearInterval(Interval);

    main_screen.classList.remove('anim'); 

   main_screen.src = "./img/Main_TLOU2.jpg";
}
