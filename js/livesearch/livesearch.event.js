$('#livesearch').keyup(function(e) {
    $('#livesearch-list').empty();
    if ($(this).val().length >= 1) {
        $('#livesearch-list').show();
        liveSearch.api.filterData($(this).val(), function(data) {
            liveSearch.function.populateList(data, $('#livesearch').val());
        });

        return true;
    }
});

$('#livesearch').focus(function(e) {
    $('#livesearch').removeClass('loading');
    if ($(this).val().length >= 1) {
        $('#livesearch-list').show();
    }
});

$('#livesearch-list').on('click', 'li', function() {
    $('#livesearch').val(liveSearch.function.getTextToFind($(this).text()));
    $('#livesearch_id').val($(this).data('id'));
    $('#livesearch-list').hide();
    $('#livesearch').addClass('loading');
    $('#livesearch-list').empty();
    liveSearch.api.filterData($('#livesearch').val(), function(data) {
        liveSearch.function.populateList(data, $('#livesearch').val());
    });
});