const solutions = {
    
    1: {
        title: "Conservation",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et blandit mi. Etiam diam tellus, sollicitudin quis pellentesque et, feugiat ac felis. Cras lacinia diam ut congue venenatis. Aliquam vel massa sit amet lectus accumsan hendrerit. Aenean nec urna non dolor egestas pharetra at quis tortor. Nulla facilisi. Etiam eget ex consectetur quam posuere rutrum. Sed consequat semper sodales. Donec ac vulputate massa. Integer malesuada eros eget volutpat dapibus. Phasellus suscipit in augue non congue. In dapibus dolor in nisi aliquet porttitor quis cursus urna. Donec eget varius ex. Pellentesque pharetra mauris eget placerat mattis. Nullam tristique vel ex in condimentum. Phasellus vulputate augue ac sapien dapibus ultricies. Cras feugiat iaculis velit, ac lacinia ligula faucibus at. Praesent egestas faucibus lorem a blandit. Aliquam erat volutpat. Sed sagittis felis ut purus ullamcorper, eget consectetur metus vulputate. Cras pulvinar diam varius tincidunt semper. Nulla pharetra, velit sed volutpat tincidunt, nunc nisl venenatis nunc, ut elementum mauris justo nec dui. Nunc eget convallis tellus.",
        image: "./img/icon1.png" 
    },
   
   
    2: {
        title: "Energy",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et blandit mi. Etiam diam tellus, sollicitudin quis pellentesque et, feugiat ac felis. Cras lacinia diam ut congue venenatis. Aliquam vel massa sit amet lectus accumsan hendrerit. Aenean nec urna non dolor egestas pharetra at quis tortor. Nulla facilisi. Etiam eget ex consectetur quam posuere rutrum. Sed consequat semper sodales. Donec ac vulputate massa. Integer malesuada eros eget volutpat dapibus. Phasellus suscipit in augue non congue. In dapibus dolor in nisi aliquet porttitor quis cursus urna. Donec eget varius ex. Pellentesque pharetra mauris eget placerat mattis. Nullam tristique vel ex in condimentum. Phasellus vulputate augue ac sapien dapibus ultricies. Cras feugiat iaculis velit, ac lacinia ligula faucibus at. Praesent egestas faucibus lorem a blandit. Aliquam erat volutpat. Sed sagittis felis ut purus ullamcorper, eget consectetur metus vulputate. Cras pulvinar diam varius tincidunt semper. Nulla pharetra, velit sed volutpat tincidunt, nunc nisl venenatis nunc, ut elementum mauris justo nec dui. Nunc eget convallis tellus.",
        image: "./img/icon2.png" 
    },
    
    
    3: {
        title: "Power",
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et blandit mi. Etiam diam tellus, sollicitudin quis pellentesque et, feugiat ac felis. Cras lacinia diam ut congue venenatis. Aliquam vel massa sit amet lectus accumsan hendrerit. Aenean nec urna non dolor egestas pharetra at quis tortor. Nulla facilisi. Etiam eget ex consectetur quam posuere rutrum. Sed consequat semper sodales. Donec ac vulputate massa. Integer malesuada eros eget volutpat dapibus. Phasellus suscipit in augue non congue. In dapibus dolor in nisi aliquet porttitor quis cursus urna. Donec eget varius ex. Pellentesque pharetra mauris eget placerat mattis. Nullam tristique vel ex in condimentum. Phasellus vulputate augue ac sapien dapibus ultricies. Cras feugiat iaculis velit, ac lacinia ligula faucibus at. Praesent egestas faucibus lorem a blandit. Aliquam erat volutpat. Sed sagittis felis ut purus ullamcorper, eget consectetur metus vulputate. Cras pulvinar diam varius tincidunt semper. Nulla pharetra, velit sed volutpat tincidunt, nunc nisl venenatis nunc, ut elementum mauris justo nec dui. Nunc eget convallis tellus.",
        image: "./img/icon3.png" 
    }
  };
   
    const buttons = document.querySelectorAll(".button-group button");
    const content = document.querySelector("#content");

    buttons.forEach(function(button) {
      button.addEventListener("click", function() {

          buttons.forEach(function(btn) {
              btn.classList.remove("active-button");
          });

          button.classList.add("active-button");
          
  const id = button.getAttribute("id").slice(-1);

  const solution = solutions[id];
 
  content.innerHTML = `<h2>${solution.title}</h2><p>${solution.content}</p><img src="${solution.image}" alt="${solution.title} Image">`;
      });
    });
    
    buttons[0].classList.add("active-button");
    
   