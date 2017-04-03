$(document).ready(function(){

    $('.list__item').click(function () {

        $('.list__item').removeClass('list__item_active');
        $('.inside-list').hide();

            if (!$(this).find('.inside-list').is(':empty')) {
                $(this).toggleClass('list__item_active');
                $(this).find('.inside-list').slideToggle('slow');
            }

        }
    );

});

