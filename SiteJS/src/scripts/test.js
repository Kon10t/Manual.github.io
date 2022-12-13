'use strict'

document.querySelector('#buttonAlert').addEventListener('click', function (e) {
  alert("Hello");
});

document.querySelector('#buttonPrompt2').addEventListener('click', function (e) {
  let age = prompt("Сколько тебе лет?", 100);
});

document.querySelector('#buttonConfirm').addEventListener('click', function (e) {
  let isBoss =  confirm("Ты здесь главный?");
});

var stickySidebar = $('.sticky');

if (stickySidebar.length > 0) {	
  var stickyHeight = stickySidebar.height(),
      sidebarTop = stickySidebar.offset().top;
}

$(window).scroll(function () {
  if (stickySidebar.length > 0) {	
    var scrollTop = $(window).scrollTop();
            
    if (sidebarTop < scrollTop) {
      stickySidebar.css('top', scrollTop - sidebarTop);

      
      var sidebarBottom = stickySidebar.offset().top + stickyHeight,
          stickyStop = $('.main-content').offset().top + $('.main-content').height();
      if (stickyStop < sidebarBottom) {
        var stopPosition = $('.main-content').height() - stickyHeight;
        stickySidebar.css('top', stopPosition);
      }
    }
    else {
      stickySidebar.css('top', '0');
    } 
  }
});

$(window).resize(function () {
  if (stickySidebar.length > 0) {	
    stickyHeight = stickySidebar.height();
  }
});

// const root = document.querySelector(":root"),
//       inputs = document.querySelectorAll("input[name='theme']");

// const theme = localStorage.getItem("theme-color");
// const themeText = localStorage.getItem("theme-color-text");

// const updateRoot = value => root.style.setProperty("--theme-color", `var(--${value})`);
// const updateRootText = value => root.style.setProperty("--theme-color-text", `var(--${value})`);

// for(const input of inputs) {
//   if(theme && input.value === theme) {
//     input.checked = true;
//     updateRoot(theme);
//   }
  
//   input.onchange = e => {
//     updateRootText(e.target.value);
//     localStorage.setItem("theme-color", e.target.value);
//   }
// }

// for(const input of inputs) {
//   if(themeText && input.value === themeText) {
//     input.checked = true;
//     updateRootText(themeText);
//   }
  
//   input.onchange = e => {
//     updateRootText(e.target.tagName);
//     localStorage.setItem("theme-color-text", e.target.tagName);
//   }
// }