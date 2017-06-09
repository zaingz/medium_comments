



    document.addEventListener("turbolinks:load", function(event) {
  $('.select_toolbar').slideUp()
      $('.post').mouseup(function() {
          const text = getSelectedText();
          const parse = $('.post-content').html().replace(/(<span[^>]*>)|(<\/span>)/ig, "")

          $('.post-content').html(parse.replace(text, '<span class="highlight">'+text+'</span>'))

          if (/(<span[^>]*>)|(<\/span>)/.test($('.post-content').html()) && text.length){
            $.event.trigger({
        			type: "textSelected",
        			text: text,
        			time: new Date()
        		});
          }else {
            $.event.trigger({
              type: "textSelectionRemoved",
              text: text,
              time: new Date()
            });
          }





      });




      $(document).on("textSelectionRemoved", function(event) {
        console.log('you babes not');

      $('.select_toolbar').slideUp(300)

      });





      $(document).on("textSelected", function(event) {
        console.log('you babes');

        $('.actions').show();
        $('.input').hide();
        $('.select_toolbar').slideDown(300)
      });




      function getSelectedText() {
          if (window.getSelection) {
              return window.getSelection().toString();
          } else if (document.selection) {
              return document.selection.createRange().text;
          }
          return '';
      }

      $('.note').click(function() {
        $('.actions').hide(100);
        $('.input').show(100);

        window.action = 'note'
      })


        $('.comment').click(function() {
          $('.actions').hide(100);
          $('.input').show(100);

          window.action = 'comment'
        })





      $("#submit_btn").click(function(e){
        const val = $('#input-box').val()
        $('#input-box').val('')



        const select_text = $('.highlight').text();
        let current_p_content = $('.highlight').parent().closest('p')

         let current_p = current_p_content.html().replace(/(<span[^>]*>)|(<\/span>)/ig, "")
         current_p = current_p.replace(select_text, '<b class="h-note">'+select_text+'</b>')


         var position = current_p_content.position()
         var style = 'style="top:' + position.top + 'px;'

         var heading
        if (window.action === 'note') {
           heading = 'Private Note'
        }
        else{
           heading = 'Comment'
        }

        $('.highlight').parent().closest('p').html('<p>'+ current_p +'<div class="h-comment" ' +   style + '">'  +   heading + '<div class="value">' +    val + '</div>' +'</div> </p>')






      })

    })
