/**
 *  Popup create, delete
 */

const popups = document.querySelectorAll('.products');
  const pop = document.getElementById('pop'); 
  
  popups.forEach(element => {
    element.addEventListener('click', e => {
      pop.innerHTML += `
      <div id="popup1">
        <div class="popup">
          <div class="row ">
            <div class="col-lg-2 col-xs-3">
              <i class="fas fa-check-circle mt-3 mx-4"></i>
            </div>
            <div class="col-lg-10 col-xs-9">
              <h5>Ürün sepete eklendi.</h5>
              <a class="close" href="#">&times;</a>
              <div class="content">
                <a href="">Sepete Git</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      setTimeout(() => {
      pop.innerHTML = ""
    }, 3000);
    })

   
  });