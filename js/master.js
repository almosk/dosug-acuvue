$(function() {
  $('#proyti').click(function() {
    $('.contentWrapper').css({"transform":"translateY(-100vh)"});
    $('.bg').css({"transform":"scale(1.3)"});
    $('.bg').css({"opacity":".5"});
    $('.protiv').css({"width":"auto"});
  })

  var counter = '0'

  var dedmorozcounter = 0

  $('#sc11').one('click', function() {
    $(sc11).css({"opacity":"1"});
    $(sc12).css({"opacity":"1"});

    $(sc11).css({"animation":"none"});
    $(sc12).css({"animation":"none"});
    dedmorozcounter += 1
  });

  $('#sc12').one('click', function() {
    $(sc11).css({"opacity":"1"});
    $(sc12).css({"opacity":"1"});

    $(sc11).css({"animation":"none"});
    $(sc12).css({"animation":"none"});
    dedmorozcounter += 1
  });

  $('#sc21').one('click', function() {
    $(sc21).css({"opacity":"1"});
    $(sc22).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc22').one('click', function() {
    $(sc21).css({"opacity":"1"});
    $(sc22).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc31').one('click', function() {
    $(sc31).css({"opacity":"1"});
    $(sc32).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc32').one('click', function() {
    $(sc31).css({"opacity":"1"});
    $(sc32).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc41').one('click', function() {
    $(sc41).css({"opacity":"1"});
    $(sc42).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc42').one('click', function() {
    $(sc41).css({"opacity":"1"});
    $(sc42).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc51').one('click', function() {
    $(sc51).css({"opacity":"1"});
    $(sc52).css({"opacity":"1"});
    dedmorozcounter += 1
  });

  $('#sc52').one('click', function() {
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
      // console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-200vh)"});
  })

  $('#next2').click(function() {
    var form = $("form.form2")[0];
    var log = $(".log2")[0];
    var elem = document.getElementById("q2c")

    form.addEventListener("submit", function(event) {
      if (elem.checked) {
        counter+='1'
      }
      // console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-300vh)"});
  })

  var licounter = 0

  $('#sc_31').click(function() {
    $(sc_31).css({"opacity":"1"});
    $(sc_32).css({"opacity":"1"});
    licounter = '1'
  });

  $('#sc_32').click(function() {
    $(sc_31).css({"opacity":"1"});
    $(sc_32).css({"opacity":"1"});
    licounter = '1'
  });

  $('#next3').click(function() {
    var form = $("form.form3")[0];
    var log = $(".log3")[0];

    form.addEventListener("submit", function(event) {
      if (licounter == 1) {
        counter+='1'
      }
      // console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-400vh)"});
  })

  $('#next4').click(function() {
    var form = $("form.form4")[0];
    var log = $(".log4")[0];
    var elem = document.getElementById("q4c")

    form.addEventListener("submit", function(event) {
      if (elem.checked) {
        counter+='1'
      }
      // console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-500vh)"});
  })

  $('#next5').click(function() {
    var form = $("form.form5")[0];
    var log = $(".log5")[0];
    var elem = document.getElementById("q5b")

    form.addEventListener("submit", function(event) {
      if (elem.checked) {
        counter+='1'
      }
      // console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-600vh)"});
  })

  $('#next6').click(function() {
    var form = $("form.form6")[0];
    var log = $(".log6")[0];
    var elem = document.getElementById("q6c")

    form.addEventListener("submit", function(event) {
      if (elem.checked) {
        counter+='1'
      }
      // console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-700vh)"});
  })

  var snegcounter = 0

  $('#sc_71').click(function() {
    $(sc_71).css({"opacity":"1"});
    snegcounter = '1'
  });

  $('#next7').click(function() {
    var form = $("form.form7")[0];
    var log = $(".log7")[0];

    form.addEventListener("submit", function(event) {
      if (snegcounter == 1) {
        counter+='1'
      }
      // console.log(counter)
      event.preventDefault();
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-800vh)"});
  })

  var podarkicounter = 0

  $('#sc_811').one('click', function() {
    $(sc_811).css({"opacity":"1"});
    $(sc_812).css({"opacity":"1"});

    $(sc_811).css({"animation":"none"});
    $(sc_812).css({"animation":"none"});
    podarkicounter += 1
  });

  $('#sc_812').one('click', function() {
    $(sc_811).css({"opacity":"1"});
    $(sc_812).css({"opacity":"1"});

    $(sc_811).css({"animation":"none"});
    $(sc_812).css({"animation":"none"});
    podarkicounter += 1
  });

  $('#sc_821').one('click', function() {
    $(sc_821).css({"opacity":"1"});
    $(sc_822).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_822').one('click', function() {
    $(sc_821).css({"opacity":"1"});
    $(sc_822).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_831').one('click', function() {
    $(sc_831).css({"opacity":"1"});
    $(sc_832).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_832').one('click', function() {
    $(sc_831).css({"opacity":"1"});
    $(sc_832).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_841').one('click', function() {
    $(sc_841).css({"opacity":"1"});
    $(sc_842).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_842').one('click', function() {
    $(sc_841).css({"opacity":"1"});
    $(sc_842).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_851').one('click', function() {
    $(sc_851).css({"opacity":"1"});
    $(sc_852).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#sc_852').one('click', function() {
    $(sc_851).css({"opacity":"1"});
    $(sc_852).css({"opacity":"1"});
    podarkicounter += 1
  });

  $('#next8').one('click', function() {
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

      resultsP = document.getElementsByClassName('resultsP')[0]
      if (fnlcounter < 4) {
        resultsP.innerHTML = 'Надеемся, что поход до магазина и обратно не вызывает у вас больших проблем. Чтобы жить стало легче, попробуйте линзы Acuvue, с ними вы увидите мир по-новому. Если вы до сих пор сомневаетесь, то попробуйте сами! <br><br>Достаточно просто записаться на визит в ближайшую оптику, и вы сможете получить первую пару линз абсолютно бесплатно :)'
      } else if (fnlcounter < 7) {
        resultsP.innerHTML = 'Порой вы смотрите, но не видите. Возможно пора что-то менять! Чтобы жить стало легче, попробуйте линзы Acuvue, с ними вы увидите мир по-новому. Если вы до сих пор сомневаетесь, то попробуйте сами! <br><br>Достаточно просто записаться на визит в ближайшую оптику, и вы сможете получить первую пару линз абсолютно бесплатно :)'
      } else if (fnlcounter == 8) {
        resultsP.innerHTML = 'Да у вас орлиный глаз! Острое зрение ваш конек, но терять это качество точно не стоит. Чтобы вам было проще, попробуйте линзы Acuvue, с ними вы увидите мир по-новому. Если вы до сих пор сомневаетесь, то попробуйте сами! <br><br>Достаточно просто записаться на визит в ближайшую оптику, и вы сможете получить первую пару линз абсолютно бесплатно :)'
      }

      // сюда вместо IMAGE ссылки на картинки от 0 до 8
      if (fnlcounter == 0) {$("meta[property='og:image']").attr("content", 'IMAGE');}
      if (fnlcounter == 1) {$("meta[property='og:image']").attr("content", 'IMAGE');}
      if (fnlcounter == 2) {$("meta[property='og:image']").attr("content", 'IMAGE');}
      if (fnlcounter == 3) {$("meta[property='og:image']").attr("content", 'IMAGE');}
      if (fnlcounter == 4) {$("meta[property='og:image']").attr("content", 'IMAGE');}
      if (fnlcounter == 5) {$("meta[property='og:image']").attr("content", 'IMAGE');}
      if (fnlcounter == 6) {$("meta[property='og:image']").attr("content", 'IMAGE');}
      if (fnlcounter == 7) {$("meta[property='og:image']").attr("content", 'IMAGE');}
      if (fnlcounter == 8) {$("meta[property='og:image']").attr("content", 'IMAGE');}

      // console.log(counter, fnlcounter)
    }, false);

    $('.contentWrapper').css({"transform":"translateY(-900vh)"});
    $('.bg').css({"transform":"scale(1.5)"});
    $('.bg').css({"opacity":".2"});
    if (window.innerWidth > 414) {
      $('.protiv').css({"width":"400px"});
    }
  })

  $('a.back').click(function() {
    location.reload();
  })

})
