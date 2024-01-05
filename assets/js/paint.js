let colorName = document.getElementById('color-name');
let pricePerGallon = document.getElementById('color-price');


function configureListeners() {
  let images = document.querySelectorAll('img')

    for (let i = 0; i < images.length; i++) {          
        images[i].addEventListener('mouseover', (event) => {
            addOpacity(event)
        })
        images[i].addEventListener('mouseout', (event) => {
            removeOpacity(event)

        })
    }
}
     
function addOpacity(event) {
    event.target.classList.toggle('dim')
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
event.target.classList.toggle('dim')
price.textContent = '';
color.textContent = '';
event.preventDefault();    
}

function getProductInfo(paintColor) {
      
    
    switch (paintColor) {
    case 'pn1':           
            updatePrice('Lime Green', '$14.99') 
        break;           
    case 'pn2':
                updatePrice('Medium Brown', '$11.14') 
        break;            
    case 'pn3':
                updatePrice('Royal Blue', '$22.99')  
        break;   
    case 'pn4':
                updatePrice('Solid Red', '$4.99') 
        break;   
    case 'pn5':
                updatePrice('Solid white', '$8.22') 
        break;   
    case 'pn6':
                updatePrice('Solid Black', '$11.99') 
        break;   
     case 'pn7':
                updatePrice('Solid Cyan', '$13.42') 
        break;
    case 'pn8':
                updatePrice('Solid Purple', '$21.98') 
        break;   
     case 'pn9':
                updatePrice('Solid Yellow', '$14.99') 
        break;   
      default:              
    }

    function updatePrice(color, price)
    {  
        colorName.textContent = color;
        pricePerGallon.textContent = price;
    }
}
    