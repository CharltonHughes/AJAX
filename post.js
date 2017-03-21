$('#estimate').on('submit', function(e) {           // When form is submitted
  e.preventDefault();
  var details= $('#estimate').serialize();
  $.post('simple-email.php', details, function(data) {  // Use $.post() to send it
    $('#estimate').html(data);                    // Where to display result
  });
});
