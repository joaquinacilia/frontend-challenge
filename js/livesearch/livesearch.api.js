var liveSearch = liveSearch || {};

liveSearch.api = function ($) {

    const URL = 'https://rickandmortyapi.com/api/character/?name=';

    function filterData(query, success)
    {
        return $.ajax({
            type: 'GET',
            url:  URL + query,
            dataType: 'json',
            success: success,
            statusCode: {
                404: function() {

                }
            }
        })
    }

    return {
        filterData: filterData,
    }
}($);