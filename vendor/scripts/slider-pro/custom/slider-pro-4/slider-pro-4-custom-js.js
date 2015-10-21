jQuery(document).ready(function($){

   // activate lightbox for image boxes
   $("a.image-box").prettyPhoto({openLightbox: function() {
      if (slider.getSlideshowState() == 'playing') {
         slider.pauseSlideshow();
      }
   },
   callback: function() {
      if (slider.getSlideshowState() == 'paused') {
         slider.resumeSlideshow();
      }
   }});

});