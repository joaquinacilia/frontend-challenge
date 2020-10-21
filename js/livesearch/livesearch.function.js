var liveSearch = liveSearch || {};

liveSearch.function = function ($) {

    function populateList(options, find, list)
    {
        let item = '';
        let type = '';
        $.each(options, function(key, data) {
            for (let i = 0; i < data.length; i++) {
                type = '';
                if (data[i].type !== '') {
                    type = ' <span class="character-type">en ' + boldText(data[i].type, find) + '</span>';
                }
                item = '<li data-id="' + data[i].id + '">' + boldText(data[i].name, find, '') + type + '</li>';
                list.append(item);
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
        return str.substr(0, positionFind) + '<span class="text-bolded">' + str.substr(positionFind, length) + '</span>' + str.substr(positionFind + length);
    }

    function getTextToFind(str)
    {
        let positionFind = str.indexOf(' en ');
        if (positionFind === -1) {
            return str;
        }
        return str.substr(0, positionFind).trim();
    }

    return {
        populateList: populateList,
        getTextToFind: getTextToFind
    }
}($);