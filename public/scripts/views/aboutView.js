'use strict';

// This is where we define the view for the "About" page, in other words, the default view

 (function(module) {
   const aboutView = {};

   aboutView.init = function() {
     console.log('About view');
    $('#content').text('Hello from the about page!!!')
   }

   module.aboutView = aboutView;
 })(window);
