'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }else{
        this.textContent = "Light";
    }
});

/*window.onresize = function(event) {
    document.location.reload(true);
  }
  
  var href = window.location.href.split("/")
  var html_location = href[href.length-1]
  
  if (window.innerWidth >= 960 && html_location !== "index.html") {
      window.location = "index.html";
  }
  
  if (window.innerWidth < 960 && html_location !== "indexMobile.html") {
      window.location = "indexMobile.html";
  }
  */