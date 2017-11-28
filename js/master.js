$(function() {
  $('#proyti').click(function() {
    $('.contentWrapper').css({"transform":"translateY(-100vh)"});
    $('.bg').css({"transform":"scale(1.3)"});
  })

  var counter = 0

  $('#next1').click(function() {
    var form = $("form.formForm1")[0];
    var log = $(".logLog1")[0];

    form.addEventListener("submit", function(event) {
      var data = new FormData(form);
      var output = "";

      for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r";
        console.log(output)
        counter+=entry[1]
        console.log(counter)
      };


      $(".logLog1")[0].innerText = output;
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-200vh)"});
  })

  $('#next2').click(function() {
    var form = $("form.formForm2")[0];
    var log = $(".logLog2")[0];

    form.addEventListener("submit", function(event) {
      var data = new FormData(form);
      var output = "";
      // console.log(data)
      for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r";
        console.log(output)
        counter+=entry[1]
        console.log(counter)
      };
      $(".logLog2")[0].innerText = output;
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-300vh)"});
  })



})
