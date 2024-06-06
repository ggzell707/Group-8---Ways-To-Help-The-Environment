// Individual Buttons

$(document).ready(function() {
    $('#recycleButton').on('click', function() {
        $('#recycleText').slideToggle('slow'); // Toggle the visibility of the paragraph
    });
});

$(document).ready(function() {
    $('#waterButton').on('click', function() {
        $('#waterText').slideToggle('slow');
    });
});

$(document).ready(function() {
    $('#postButton').on('click', function() {
        $(".hidey-bit").hide();
        $('#postText').slideToggle('slow');
    });
});

$(document).ready(function() {
    $('#susButton').on('click', function() {
        $(".hidey-bit").hide();
        $('#susText').slideToggle('slow');
    });
});

$(document).ready(function() {
    $('#energyButton').on('click', function() {
        $('#energyText').slideToggle('slow');
    });
});

// Institutional Buttons

$(document).ready(function() {
    $('#voteButton').on('click', function() {
        $('#voteText').slideToggle('slow');
    });
});

$(document).ready(function() {
    $('#boyButton').on('click', function() {
        $('#boyText').slideToggle('slow');
    });
});

$(document).ready(function() {
    $('#orgButton').on('click', function() {
        $('#orgText').slideToggle('slow');
    });
});

$(document).ready(function() {
    $('#repButton').on('click', function() {
        $('#repText').slideToggle('slow');
    });
});

$(document).ready(function() {
    $('#localButton').on('click', function() {
        $('#localText').slideToggle('slow');
    });
});

$(".hidey-bit").hide();