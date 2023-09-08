let stickySidebar = $('.sticky');
let mainContent = $('.main-content');

if (stickySidebar.length > 0) {
  var stickyHeight = stickySidebar.outerHeight(true);
  var sidebarTop = stickySidebar.offset().top;
  var mainContentHeight = mainContent.outerHeight();
}

$(window).scroll(function () {
  if (stickySidebar.length > 0) {
    var scrollTop = $(window).scrollTop();

    var stop = mainContentHeight - stickyHeight;

    if (scrollTop > stop) {
      stickySidebar.css('top', stop);
      console.log('zxc')
    } else if (sidebarTop < scrollTop) {
      stickySidebar.css('top', scrollTop - sidebarTop);
      console.log('masya')
    } else {
      stickySidebar.css('top', '0');
    }
  }
});

$(window).resize(function () {
  if (stickySidebar.length > 0) {
    stickyHeight = stickySidebar.height();
    mainContentHeight = mainContent.height();
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