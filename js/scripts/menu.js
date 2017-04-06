var listItem = $('.list__item'),
    insideList = $('.inside-list');


$(document).ready(function () {

    $('.nav-title').click(function () {
        listItem.removeClass('list__item_active');
        $('.list').slideToggle('slow');
        insideList.hide();
    });

    listItem.click(function () {
        listItem.removeClass('list__item_active');
        insideList.hide();

        if (!$(this).find(insideList).is(':empty')) {
            $(this).toggleClass('list__item_active');
            $(this).find(insideList).slideToggle('slow');
        }
    });

});

