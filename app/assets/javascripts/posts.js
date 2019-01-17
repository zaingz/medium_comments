var data
var action
document.addEventListener("turbolinks:load", function(event) {
    $('.select_toolbar').slideUp();

    $( '*' ).add( ".post" ).on('mouseup', function() {
    //$( ".post" ).on('mouseup', function() {
        var text = getSelectedText();
        var parse = $('.post-content').html().replace(/(<span>)|(<\/span>)/, "");

        $('.post-content').html(parse.replace(text, '<span class="highlight">' + text + '</span>'));

        if (/(<span>)|(<\/span>)/.test($('.post-content').html()) && text.length) {
            $.event.trigger({
                type: "textSelected",
                text: text,
                time: new Date()
            });
        } else {
            $.event.trigger({
                type: "textSelectionRemoved",
                text: text,
                time: new Date()
            });
        }
    });


    $(document).on("textSelectionRemoved", function(event) {
        $('.select_toolbar').slideUp(300);
    });

    $(document).on("textSelected", function(event) {
        $('.actions').show();
        $('.input').hide();
        $('.select_toolbar').slideDown(300);
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

        action = 'note';
    });


    $('.comment').click(function() {
        $('.actions').hide(100);
        $('.input').show(100);

        action = 'comment';
    });


    $("#submit_btn").click(function(e) {
        var val = $('#input-box').val();
        $('#input-box').val('');

        var select_text = $('.highlight').text();
        var current_p_content = $('.highlight').parent().closest('p');

        var current_p = current_p_content.html().replace(/(<span>)|(<\/span>)/ig, "");
        current_p = current_p.replace(select_text, '<b class="h-note">' + select_text + '</b>');

        var position = current_p_content.position();
        var style = 'style="top:' + position.top + 'px;';

        var heading;
        if (action == 'note') {
            heading = 'Private Note';
        } else {
            heading = 'Comment';
        }

 
        if (Object.prototype.toString.call(data) !== '[object Array]'){
            data = new Array
        }

        Array.prototype.push.apply(data, [{text: current_p, comment: val, type: heading, style: style}])
 
        (function(data){
            data.reverse().forEach(function(element){
                var text = element.text;
                var comment = element.comment;
                var type = element.type;
                var style = element.style;
                $('.highlight').parent().html('<p>' + text + '<div class="h-comment" ' + style + '">' + type + '<div class="value">' + comment + '</div>' + '</div> </p>');
    
            })
        })(data)

    });
});
