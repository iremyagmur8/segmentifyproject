const wrapper = document.getElementsByClassName('wrapper');
  const button = document.querySelectorAll('#click');
  const button2 = document.querySelectorAll('#click2');


  let scroll = 0;
  for (let index=0; index<6;index++) {
    wrapper[index].addEventListener("scroll", function (event) {
      scroll = wrapper[index].scrollLeft;
    });
    
  }
  button.forEach((element,index) => {
    element.addEventListener('click', clicked =>{
      scroll = scroll += 500;
      wrapper[index].scrollTo({
        left: scroll,
        behavior: 'smooth'
      });
      scroll = wrapper[index].scrollLeft + 50;
      console.log(wrapper[index].scrollLeft);
    });
  
  });
  button2.forEach((element,index) => {
    element.addEventListener('click', clicked2 =>{
      scroll = scroll -= 500;
    wrapper[index].scrollTo({
      left: scroll,
      behavior: 'smooth'
    });
    scroll = wrapper[index].scrollLeft + 50;
    console.log(wrapper[index].scrollLeft);
    });
  
  });

