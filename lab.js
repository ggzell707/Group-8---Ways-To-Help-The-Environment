// Buttons

$(document).ready(function() {
    $('#recycleButton').on('click', function() {
        $('#recycleText').slideToggle('slow'); // Toggle the visibility of the paragraph
    });

    $('#waterButton').on('click', function() {
        $('#waterText').slideToggle('slow');
    });

    $('#postButton').on('click', function() {
        $(".hidey-bit").hide();
        $('#postText').slideToggle('slow');
    });

    // $('#postButton').on('click', function() {
    //     if ($('#postText').is(':visible')) {
    //         $('#postText').slideUp('slow');
    //     } else {
    //         $(".hidey-bit").slideUp('slow'); // Hide all sections with animation
    //         $('#postText').slideDown('slow');
    //     }
    // });

    $('#susButton').on('click', function() {
        $(".hidey-bit").hide();
        $('#susText').slideToggle('slow');
    });

    $('#energyButton').on('click', function() {
        $('#energyText').slideToggle('slow');
    });

    $('#voteButton').on('click', function() {
        $('#voteText').slideToggle('slow');
    });

    $('#boyButton').on('click', function() {
        $('#boyText').slideToggle('slow');
    });

    $('#orgButton').on('click', function() {
        $('#orgText').slideToggle('slow');
    });

    $('#repButton').on('click', function() {
        $('#repText').slideToggle('slow');
    });

    $('#localButton').on('click', function() {
        $('#localText').slideToggle('slow');
    });
});
