$(function() {
  $('#proyti').click(function() {
    $('.contentWrapper').css({"transform":"translateY(-100vh)"});
    $('.bg').css({"transform":"scale(1.3)"});
    $('.bg').css({"opacity":".5"});
  })

  var counter = ''

  var dedmorozcounter = 0

  $('#sc11').click(function() {
    $(sc11).css({"opacity":"1"});
    $(sc12).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc12').click(function() {
    $(sc11).css({"opacity":"1"});
    $(sc12).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc21').click(function() {
    $(sc21).css({"opacity":"1"});
    $(sc22).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc22').click(function() {
    $(sc21).css({"opacity":"1"});
    $(sc22).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc31').click(function() {
    $(sc31).css({"opacity":"1"});
    $(sc32).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc32').click(function() {
    $(sc31).css({"opacity":"1"});
    $(sc32).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc41').click(function() {
    $(sc41).css({"opacity":"1"});
    $(sc42).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc42').click(function() {
    $(sc41).css({"opacity":"1"});
    $(sc42).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc51').click(function() {
    $(sc51).css({"opacity":"1"});
    $(sc52).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc52').click(function() {
    $(sc51).css({"opacity":"1"});
    $(sc52).css({"opacity":"1"});
    dedmorozcounter += 1
  });



  $('#next1').click(function() {
    var form = $("form.form1")[0];
    form.addEventListener("submit", function(event) {
      if (dedmorozcounter == 5) {
        counter+='1'
      }
      console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-200vh)"});
  })

  $('#next2').click(function() {
    var form = $("form.form2")[0];
    var log = $(".log2")[0];

    form.addEventListener("submit", function(event) {
      var data = new FormData(form);
      var output = "";
      for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r";
        counter+=entry[1]
        console.log(counter)
      };
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-300vh)"});
  })

  var licounter = 0

  $('#sc_31').click(function() {
    $(sc_31).css({"opacity":"1"});
    $(sc_32).css({"opacity":"1"});
    licounter+='1'
  });

  $('#sc_32').click(function() {
    $(sc_31).css({"opacity":"1"});
    $(sc_32).css({"opacity":"1"});
    licounter+='1'
  });

  $('#next3').click(function() {
    var form = $("form.form3")[0];
    var log = $(".log3")[0];

    form.addEventListener("submit", function(event) {
      if (licounter == 1) {
        counter+='1'
      }
      console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-400vh)"});
  })

  $('#next4').click(function() {
    var form = $("form.form4")[0];
    var log = $(".log4")[0];

    form.addEventListener("submit", function(event) {
      var data = new FormData(form);
      var output = "";
      for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r";
        counter+=entry[1]
        console.log(counter)
      };
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-500vh)"});
  })

  $('#next5').click(function() {
    var form = $("form.form5")[0];
    var log = $(".log5")[0];

    form.addEventListener("submit", function(event) {
      var data = new FormData(form);
      var output = "";
      for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r";
        counter+=entry[1]
        console.log(counter)
      };
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-600vh)"});
  })

  $('#next6').click(function() {
    var form = $("form.form6")[0];
    var log = $(".log6")[0];

    form.addEventListener("submit", function(event) {
      var data = new FormData(form);
      var output = "";
      for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r";
        counter+=entry[1]
        console.log(counter)
      };
      event.preventDefault();

    }, false);

    $('.contentWrapper').css({"transform":"translateY(-700vh)"});
  })

  var snegcounter = 0

  $('#sc_71').click(function() {
    $(sc_71).css({"opacity":"1"});
    snegcounter+='1'
  });

  $('#next7').click(function() {
    var form = $("form.form7")[0];
    var log = $(".log7")[0];

    form.addEventListener("submit", function(event) {
      if (snegcounter == 1) {
        counter+='1'
      }
      console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-800vh)"});
  })

  var podarkicounter = 0

  $('#sc_811').click(function() {
    $(sc_811).css({"opacity":"1"});
    $(sc_812).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_812').click(function() {
    $(sc_811).css({"opacity":"1"});
    $(sc_812).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_821').click(function() {
    $(sc_821).css({"opacity":"1"});
    $(sc_822).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_822').click(function() {
    $(sc_821).css({"opacity":"1"});
    $(sc_822).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_831').click(function() {
    $(sc_831).css({"opacity":"1"});
    $(sc_832).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_832').click(function() {
    $(sc_831).css({"opacity":"1"});
    $(sc_832).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_841').click(function() {
    $(sc_841).css({"opacity":"1"});
    $(sc_842).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_842').click(function() {
    $(sc_841).css({"opacity":"1"});
    $(sc_842).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_851').click(function() {
    $(sc_851).css({"opacity":"1"});
    $(sc_852).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_852').click(function() {
    $(sc_851).css({"opacity":"1"});
    $(sc_852).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#next8').click(function() {
    var form = $("form.form8")[0];
    form.addEventListener("submit", function(event) {
      if (podarkicounter == 5) {
        counter+='1'
      }
      console.log(counter)
      event.preventDefault();


            var fnlcounter = 0
            for (var i = 0; i < counter.length; i++) {
              if (counter[i] == '1') {
                fnlcounter+=1
              }
            }

            results = document.getElementsByClassName('results')[0]
            results.innerHTML = 'Ваш результат ' + fnlcounter + '/8'

            console.log(counter, fnlcounter)
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-900vh)"});
  })



})
