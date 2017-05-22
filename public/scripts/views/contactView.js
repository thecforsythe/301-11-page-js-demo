'use strict';

// This is where we define the view for the "Contact" page, in other words, the default view

 (function(module) {
   const contactView = {};

   contactView.init = function() {
     console.log('Contact view');
    $('#content').text('Hello from the contact page!!!')
   }

   module.contactView = contactView;
 })(window);
