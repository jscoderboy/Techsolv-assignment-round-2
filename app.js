
var outsideClick = function (e) {
   var container = document.querySelector(".customDrp")
   if (!container.is(e.target) && container.has(e.target).length === 0 && container.is(':visible')) {
      container.removeClass("active");
      document.querySelector(document).unbind("click", outsideClick);
   }
};

document.querySelector(document).ready(function () {
   document.querySelector(".custmonDropDwon").click(function (e) {
      if (document.querySelector(e.target).hasClass("crossString") || document.querySelector(e.target).hasClass("bowiro")) {
         return false;
      }

      if (document.querySelector(e.target).is("a")) {
         return true;
      }

      e.preventDefault();

      console.log(e.target);

      if (document.querySelector(e.target).hasClass("language") || document.querySelector(e.target).parent().hasClass("language")) {
         languageFunc();

      }

      if (window.matchMedia('(max-width: 1170px)').matches) {
         document.body.style.overflow = 'hidden';
      }

      if (document.querySelector(e.target).hasClass("searchCoinDrp")) {
         document.getElementById('tokensearch1').focus();
      }

      if (document.querySelector(this).next(".customDrp").length) {
         document.querySelector(this).next(".customDrp").addClass("active");
      } else {
         document.querySelector(this).children(".customDrp").addClass("active");
      }

      e.stopPropagation();
      document.querySelector(document).bind("click", outsideClick);
   });

   let basic_banner_read_btn = false;
   document.querySelector(".basic_banner_read_btn").click(function () {
      if (basic_banner_read_btn == false) {
         document.querySelector(this).text("Read Less");
         document.querySelector(".basic_banner_text").slideToggle(500);
         basic_banner_read_btn = true;
      } else {
         document.querySelector(".basic_banner_text").slideToggle(500);
         document.querySelector(this).text("Read More");
         basic_banner_read_btn = false;
      }
   });

   document.querySelector(".filterToggelBtn").click(function () {
      document.querySelector(".filterToggel").slideToggle("active");
   });

   document.querySelector(".hideCustomDrp").on("click", function () {
      document.querySelector(".customDrp").removeClass("active");
   });

   document.querySelector(".closeIcon").click(function () {
      document.querySelector(".customPopup").removeClass("active");
      document.querySelector(".commonPopup").removeClass("active");

      if (!document.querySelector(".headerMain").classList.contains("active")) {
         document.body.style.overflow = 'auto';
      }
   });

   document.querySelector(".mainTable").on("scroll", function (e) {
      let isScroll = e.currentTarget.scrollLeft;
      if (isScroll) {
         document.querySelector(".ListingTable th:nth-child(3), td:nth-child(3)").addClass("before");
      } else {
         document.querySelector(".ListingTable th:nth-child(3), td:nth-child(3)").removeClass("before");
      }
   });
});