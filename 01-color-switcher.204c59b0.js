!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body"),o=null;function d(){n.style.backgroundColor=a()}function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.disabled=!0,e.addEventListener("click",function(){n.style.backgroundColor=a(),e.disabled=!0,t.disabled=!1,o=setInterval(d,1e3)}),t.addEventListener("click",function(){clearInterval(o),e.disabled=!1,t.disabled=!0})}();
//# sourceMappingURL=01-color-switcher.204c59b0.js.map