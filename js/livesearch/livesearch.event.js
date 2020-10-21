$('.livesearch').keyup(function(e) {
    let listSearch = $(this);
    let listItems = $(this).parent().find('.livesearch-list');
    listItems.empty();
    if ($(this).val().length >= 1) {
        listItems.show();
        liveSearch.api.filterData($(this).val(), function(data) {
            liveSearch.function.populateList(data, listSearch.val(), listItems);
        });

        return true;
    }
});

$('.livesearch').focus(function(e) {
    $(this).removeClass('loading');
    if ($(this).val().length >= 1) {
        let listItems = $(this).parent().find('.livesearch-list');
        listItems.show();
    }
});

$('.livesearch-list').on('click', 'li', function() {
    let listItems = $(this).parent();
    let listSearch = listItems.parent().find('.livesearch');
    listItems.parent().find('input[type=hidden]').val($(this).data('id'));
    listSearch.val(liveSearch.function.getTextToFind($(this).text()));
    listSearch.addClass('loading');
    listItems.empty();
    listItems.hide();
    liveSearch.api.filterData(listSearch.val(), function(data) {
        liveSearch.function.populateList(data, listSearch.val(), listItems);
    });
});