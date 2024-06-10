$(document).ready(function() {
  setTimeout(function() {
      $('.big-ten').css({
          'transform': 'translate(-20vh, -50vh)', // Move left 20vh and up 50vh
          'font-size': '3rem', // Resize to match the title's size
          'transition': 'transform 2s ease, font-size 2s ease' // Smooth transition for transform and font-size
      });

      $('#introAnimation').fadeOut(2000, function() {
          // Once the animation is complete, reveal the main content
          $('#content').fadeIn(500);
          // Change the body's background to the desired image
          $('body').css({
              'background-image': 'url("lab img/pexels-markusspiske-1679815.jpg")',
              'background-size': 'cover',
              'background-position': 'center center',
              'background-repeat': 'no-repeat'
          });
      });
  }, 1000); // Wait 1 second before starting animation



  $('.button').on('click', function() {
      var targetText = $('#' + $(this).attr('id').replace('Button', 'Text'));
      if (targetText.is(':visible')) {
          targetText.slideUp('slow');
      } else {
          $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
          targetText.slideDown('slow');
      }
  });

  $('img.lazy-load').each(function() {
      $(this).attr('src', $(this).data('src'));
      $(this).on('load', function() {
          $(this).removeClass('lazy-load');
      });
  });

  $('#dynamicDataButton').on('click', function() {
      $.ajax({
          url: 'path/to/your/data/api', // Adjust as necessary
          type: 'GET',
          success: function(data) {
              $('#someElement').html(data.someContent);
          },
          error: function() {
              console.log('Error loading the data.');
          }
      });
  });

  function fetchEnvironmentalData() {
    var cityName = $('#cityName').val();
    var url = "https://enviro.epa.gov/enviro/efservice/"; // Base URL; needs specifics

    // Example URL needs adjustment based on what specific data you need
    url += "contaminants/CITY_NAME/" + cityName + "/JSON";

    $.ajax({
        url: url,
        success: function(result) {
            if (result.length > 0) {
                // Assuming result returns an array of issues, and you take the first one
                $('#issueDisplay').html('Major Issue: ' + result[0].issueName);
            } else {
                $('#issueDisplay').html('No data found for this city.');
            }
        },
        error: function() {
            $('#issueDisplay').html('Failed to retrieve data. Please try again.');
        }
    });
}

});
