let leftArrow = document.querySelector('.left-arrow')
let rightArrow = document.querySelector('.right-arrow')
let dots = document.querySelectorAll('header .dots li')
let ul = document.querySelectorAll('header .dots')
let body = document.querySelector('body')



//conter For dots
let dotsCounter = 0;
//Right Arrow function.
function dotsToRight(){
    dots[dotsCounter].classList.remove('active')
    if(dotsCounter < 2){
        dotsCounter+=1;
        dots[dotsCounter].classList.add('active')
        console.log(dotsCounter)
    }
    dots[dotsCounter].classList.add('active')
    
}
//Left Arrow Function.
function dotsToLeft(){
    dots[dotsCounter].classList.remove('active')
    if(dotsCounter <= 2 && dotsCounter > 0){
        dotsCounter-=1;
        dots[dotsCounter].classList.add('active')
        console.log(dotsCounter)
    }
    dots[dotsCounter].classList.add('active')
}

//right arrow on click
rightArrow.onclick = function(){
    dotsToRight() 
};
//left arrow click
leftArrow.onclick = function(){
    dotsToLeft() 
};

