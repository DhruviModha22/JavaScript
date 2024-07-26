let sliderindex=0;
    const time=2000;
    let slideinterval;

    function showslides(index) {
        const slides=document.querySelectorAll(".slide");
        if(index>=slides.length){
            sliderindex=0;
        }else if(index<0){
            sliderindex=slides.length-1;
        }else{
            sliderindex=index;
        }

        slides.forEach((slide,i) => {
            slide.style.transform=`translateX(${-sliderindex*100}%)`;
        });
        // slide.style.transform = translateX(${-slideIndex * 100}%);: Sets the transform property of each slide to shift it horizontally. The slideIndex determines the position of the slides.
        // ${-slideIndex * 100}%: Moves the current slide to the left by multiplying the slideIndex by 100%. This ensures each slide takes up 100% of the width of the container and slides horizontally.
    
    }

    function prevSlide(){
        showslides(sliderindex-1);
        
    }
    function nextSlide(){
        showslides(sliderindex+1);
        
    }

    function startslideshow() {
        slideinterval=setInterval(()=>{
            nextslide();
        },time);
    }
    function stopslideshow() {
        clearInterval(time);
        
    }
    showslides(sliderindex);
    startslideshow();

    const sliderelement=document.querySelector('.slider');
    sliderelement.addEventListener('movseenter',stopslideshow);
    sliderelement.addEventListener('movseleave',startslideshow);