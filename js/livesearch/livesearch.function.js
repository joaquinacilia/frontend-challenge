var liveSearch = liveSearch || {};

liveSearch.function = function ($) {

    function populateList(options, find)
    {
        let item = '';
        $.each(options, function(key, data) {
            for (let i = 0; i < data.length; i++) {
                item = '<p>' + boldText(data[i].name, find) + '</p>';
                $('#livesearch-list').append(item);
            }
        });
    }

    function boldText(str, find)
    {
        let strUpper = str.toUpperCase();
        let findUpper = find.toUpperCase();
        let positionFind = strUpper.indexOf(findUpper);
        if (!findUpper || positionFind === -1) {
            return str;
        }
        let length = findUpper.length;
        return str.substr(0, positionFind) + '<b>' + str.substr(positionFind, length) + '</b>' + str.substr(positionFind + length);
    }

    return {
        populateList: populateList,
    }
}($);