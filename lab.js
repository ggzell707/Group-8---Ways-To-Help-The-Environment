// Buttons
$(document).ready(function() {
    $('#recycleButton').on('click', function() {
    if ($('#recycleText').is(':visible')) {
      $('#recycleText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#recycleText').slideDown('slow');
    }
    });  
  
    $('#waterButton').on('click', function() {
    if ($('#waterText').is(':visible')) {
      $('#waterText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#waterText').slideDown('slow');
    }
    });
  
    $('#postButton').on('click', function() {
    if ($('#postText').is(':visible')) {
      $('#postText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#postText').slideDown('slow');
    }
    }); 
  
    $('#susButton').on('click', function() {
    if ($('#susText').is(':visible')) {
      $('#susText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#susText').slideDown('slow');
    }
    });      
  
    $('#energyButton').on('click', function() {
    if ($('#energyText').is(':visible')) {
      $('#energyText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#energyText').slideDown('slow');
    }
    });  

    $('#voteButton').on('click', function() {
    if ($('#voteText').is(':visible')) {
      $('#voteText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#voteText').slideDown('slow');
    }
    });  

    $('#boyButton').on('click', function() {
    if ($('#boyText').is(':visible')) {
      $('#boyText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#boyText').slideDown('slow');
    }
    });

    $('#orgButton').on('click', function() {
    if ($('#orgText').is(':visible')) {
      $('#orgText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#orgText').slideDown('slow');
    }
    });

    $('#repButton').on('click', function() {
    if ($('#repText').is(':visible')) {
      $('#repText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#repText').slideDown('slow');
    }
    });
  
    $('#localButton').on('click', function() {
    if ($('#localText').is(':visible')) {
      $('#localText').slideUp('slow');
    } else {
        $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
        $('#localText').slideDown('slow');
    }
    });  
});