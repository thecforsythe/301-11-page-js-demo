'use strict';

// This is where we define the view for the "Home" page, in other words, the default view

 (function(module) {
   const homeView = {};

   homeView.init = function() {
     console.log('Home view');
    $('#content').text('Hello from the home page!!!')
   }

   module.homeView = homeView;
 })(window);
