$('#livesearch').keyup(function(e) {
    $('#livesearch-list').empty();
    if ($(this).val().length >= 1) {
        liveSearch.api.filterData($(this).val(), function(data) {
            liveSearch.function.populateList(data, $('#livesearch').val());
        });

        return true;
    }
});