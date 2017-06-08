



    document.addEventListener("turbolinks:load", function(event) {
      $('.post-content').mouseup(function() {
          const text = getSelectedText();
          const parse = $('.post-content').html().replace(/(<span[^>]*>)|(<\/span>)/ig, "")
          $('.post-content').html(parse.replace(text, '<span class="highlight">'+text+'</span>'))
      });

      function getSelectedText() {
          if (window.getSelection) {
              return window.getSelection().toString();
          } else if (document.selection) {
              return document.selection.createRange().text;
          }
          return '';
      }

    })
