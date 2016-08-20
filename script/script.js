var main_Function = function($) {
  var main_func = {
    create: function(arg1) {
      var a = navigator.userAgent;
      var temp1 = $("<div/>", {
        class: "parent_div",
      });
      $(temp1).appendTo("body");
      var temp2 = $("<p/>", {
        class: "Element"
      });
      $(temp2).appendTo(temp1);
      var temp3 = $("<h1/>", {
        class: "header_div",
        text: "Quote"
      })
      $(temp3).appendTo(".parent_div");
      $(".Element").text(arg1.quoteText + "-" + arg1.quoteAuthor);
    },
    index_of_character: function() {

    },
    close: function() {

    }
  };
  return {
    init: function(arg1) {
      main_func.create(arg1);
    },
    close: function() {
      main_func.close();
    }
  }
}(window.jQuery);
