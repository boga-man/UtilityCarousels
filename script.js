// -------------------- basic carousel start -----------------------

// setting up the elements
var basicImages = document.querySelectorAll("#basic .images");
var basicNavDots = document.querySelectorAll("#basic .nav-dots .dots");
var basicSlideshowToggle = true;
var show;
var basicSlideshow = document.querySelector("#basic .play")
var basicCnt = basicImages.length;
var topIdx = 0;

// adding event listeners to buttons
document.querySelector("#basic .prev").addEventListener("click", function(){basicChange(false)});
document.querySelector("#basic .next").addEventListener("click", function(){basicChange(true)});
document.querySelector("#basic .play").addEventListener("click", slideshow);
// for the dots
for(let i=0; i<basicNavDots.length; i++){
    basicNavDots[i].setAttribute("index", i);
    basicNavDots[i].addEventListener("click", basicCarouselNav);
}

// functions \\

// change the classes of active elemetns
function activateElements(idx){
    basicImages[idx].className+=" top";
    basicNavDots[idx].className+=" active";
}

// set the current image on top 
function setTop(next){
    if(!next){
        topIdx--;
        if(topIdx==-1){
            topIdx=basicCnt-1;
        }
    }
    else{
        topIdx++;
        topIdx%=basicCnt;
    }
    activateElements(topIdx);
}

// move to next or prev slide
function basicChange(next){
    let classStr = basicImages[topIdx].className;
    classStr = classStr.replace("top", "");
    basicImages[topIdx].className=classStr;
    classStr = basicNavDots[topIdx].className;
    classStr=  classStr.replace("active", "");
    basicNavDots[topIdx].className=classStr;
    setTop(next);
}

// setting the picture corresponding to dot pressed on top
function basicCarouselNav(){
    let idx=this.getAttribute("index")
    let classStr = basicImages[topIdx].className;
    classStr = classStr.replace("top", "");
    basicImages[topIdx].className=classStr;
    classStr = basicNavDots[topIdx].className;
    classStr=  classStr.replace("active", "");
    basicNavDots[topIdx].className=classStr
    topIdx=idx;
    activateElements(topIdx);
}

// slideshow start and stop
function slideshow(){
    if(basicSlideshowToggle){
        show=setInterval(function(){
            basicChange(true);
        }, 1000);
        basicSlideshow.innerHTML="Pause";
        basicSlideshowToggle=false;
    }else{
        clearInterval(show);
        basicSlideshow.innerHTML="Play";
        basicSlideshowToggle++;
    }
}

//-------------------- basic carousel end ------------------

//-------------------- fading carousel start ------------------
var fadingImages = document.querySelectorAll("#fading .images");
var fadingNavDots = document.querySelectorAll("#fading .nav-dots .dots");
var fadingSlideshowToggle = true;
var fadeshow;
var fadingSlideshow = document.querySelector("#fading .play")
var fadingCnt = fadingImages.length;
var topFadingIdx = 0;

// adding event listeners to buttons
document.querySelector("#fading .prev").addEventListener("click", function(){fadingChange(false)});
document.querySelector("#fading .next").addEventListener("click", function(){fadingChange(true)});
document.querySelector("#fading .play").addEventListener("click", slideFadeshow);
for(let i=0; i<fadingNavDots.length; i++){
    fadingNavDots[i].setAttribute("index", i);
    fadingNavDots[i].addEventListener("click", fadingCarouselNav);
}

// functions \\

// change the classes of active elemetns
function activateFadingElements(idx){
    fadingImages[idx].className+=" blck";
    fadingNavDots[idx].className+=" active";
}

// set the current image on top 
function setBlock(next){
    if(!next){
        topFadingIdx--;
        if(topFadingIdx==-1){
            topFadingIdx=fadingCnt-1;
        }
    }
    else{
        topFadingIdx++;
        topFadingIdx%=fadingCnt;
    }
    activateFadingElements(topFadingIdx);
}

// move to next or prev slide
function fadingChange(next){
    let classStr = fadingImages[topFadingIdx].className;
    classStr = classStr.replace("blck", "");
    fadingImages[topFadingIdx].className=classStr;
    classStr = fadingNavDots[topFadingIdx].className;
    classStr=  classStr.replace("active", "");
    fadingNavDots[topFadingIdx].className=classStr;
    setTimeout(function(){
        setBlock(next)
    }, 500); 
}

// setting the picture corresponding to dot pressed on top
function fadingCarouselNav(){
    let idx=this.getAttribute("index")
    let classStr = fadingImages[topFadingIdx].className;
    classStr = classStr.replace("blck", "");
    fadingImages[topFadingIdx].className=classStr;
    classStr = fadingNavDots[topFadingIdx].className;
    classStr=  classStr.replace("active", "");
    fadingNavDots[topFadingIdx].className=classStr
    topFadingIdx=idx;
    setTimeout(function(){
        activateFadingElements(topFadingIdx);
    }, 500);
}

// slideshow start and stop
function slideFadeshow(){
    if(fadingSlideshowToggle){
        fadeshow=setInterval(function(){
            fadingChange(true);
        }, 1500);
        fadingSlideshow.innerHTML="Pause";
        fadingSlideshowToggle=false;
    }else{
        clearInterval(fadeshow);
        fadingSlideshow.innerHTML="Play";
        fadingSlideshowToggle++;
    }
}

// completed
//--------------------fading carousel end---------------