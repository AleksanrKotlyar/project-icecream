!function(){var e,o,t,n,d,c;e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=document.querySelector(".backdrop"),d=function(){var t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),n.classList.toggle("is-open"),document.body.classList.toggle("scroll-hidden")},o.addEventListener("click",d),t.addEventListener("click",d),e.addEventListener("click",(function(e){"A"===e.target.nodeName&&d()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),document.body.classList.remove("scroll-hidden"))})),c=document.querySelector(".header"),console.log("test",c),window.onscroll=function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?c.classList.add("compact"):c.classList.remove("compact")},function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}()}();
//# sourceMappingURL=index.4e16dbe6.js.map
