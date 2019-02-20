(function($) {

    $('#myform').submit(function() {
      var answers = $(this).serializeArray();
         console.log(answers)
      if(answers[6].value<100){
        window.open("https://premiumhempco.com")
      }
      else{

      if (answers[2].value=='conversion') {
        return true;
      }
      else{
        console.log(answers);
        window.open("https://premiumhempco.com")
        return false;
      }
    }
    });

}(jQuery));