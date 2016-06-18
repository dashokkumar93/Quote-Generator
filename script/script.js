var main_Function = function($) {
  var main_func = {
    create: function() {
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
      var arr = [
        "Life shrinks or expands in proportion to one's courage. -Anais Nin",
        "People often say that motivation doesn 't last. Well, neither does bathing.  That 's why we recommend it daily. -Zig Ziglar",
        "Strive not to be a success, but rather to be of value. -Albert Einstein",
        "Life is about making an impact, not making an income. -Kevin Kruse",
        "Whatever the mind of man can conceive and believe, it can achieve. -Napoleon Hill",
        "I 've missed more than 9000 shots in my career. I 've lost almost 300 games. 26 times I 've been trusted to take the game winning shot and missed. I 've failed over and over and over again in my life. And that is why I succeed. -Michael Jordan",
        "The most difficult thing is the decision to act, the rest is merely tenacity. -Amelia Earhart",
        "Life isn 't about getting and having, it 's about giving and being. -Kevin Kruse",
        "Life is what happens to you while you 're busy making other plans. -John Lennon",
        "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.  -Robert Frost",
        "Eighty percent of success is showing up. -Woody Allen",
        "Winning isn 't everything, but wanting to win is. -Vince Lombardi",
        "Every child is an artist.  The problem is how to remain an artist once he grows up. -Pablo Picasso",
        "Either you run the day, or the day runs you. -Jim Rohn",
        "In order to succeed, your desire for success should be greater than your fear of failure. -Bill Cosby",
        "You become what you believe. -Oprah Winfrey",
        "Build your own dreams, or someone else will hire you to build theirs. -Farrah Gray",
        "It does not matter how slowly you go as long as you do not stop. -Confucius",
        "You can 't use up creativity.  The more you use, the more you have. -Maya Angelou",
        "Dream big and dare to fail. -Norman Vaughan",
        "If you can dream it, you can achieve it. -Zig Ziglar",
        "Do what you can, where you are, with what you have. -Teddy Roosevelt",
        "Dreaming, after all, is a form of planning. -Gloria Steinem",
        "You may be disappointed if you fail, but you are doomed if you don 't try. -Beverly Sills",
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. -Henry Ford",
        "Go confidently in the direction of your dreams.  Live the life you have imagined. -Henry David Thoreau",
        "Challenges are what make life interesting and overcoming them is what makes life meaningful. -Joshua J. Marine",
        "Never leave that till tomorrow which you can do today.  - Benjamin Franklin"
      ];
      var length = arr.length;
      var random = parseInt((Math.random() * 1000) % length);
      console.log(random);
      $(".Element").text(arr[random]);
    },
    index_of_character: function() {

    },
    close: function() {

    }
  };
  return {
    init: function() {
      main_func.create();
    },
    close: function() {
      main_func.close();
    }
  }
}(window.jQuery);
