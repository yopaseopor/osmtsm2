/**
 * Nominatim Search Implementation
 */
/* global config, ol, t */

function initNominatimSearch(map) {
    var searchControl = new ol.control.Control({
        element: $('<div>').addClass('ol-control ol-unselectable osmcat-search').html(
            $('<div>').addClass('search-container').append(
                $('<input>').attr({
                    type: 'text',
                    placeholder: t('searchPlaceholder')
                }).addClass('search-input'),
                $('<button>').html('<i class="fa fa-search"></i>').addClass('search-button')
            )
        )[0]
    });

    map.addControl(searchControl);

    var searchInput = $('.search-input');
    var searchButton = $('.search-button');

    function performSearch() {
        var query = searchInput.val();
        if (query) {
            $.ajax({
                url: 'https://nominatim.openstreetmap.org/search',
                data: {
                    q: query,
                    format: 'json',
                    limit: 1
                },
                success: function(data) {
                    if (data && data.length > 0) {
                        var result = data[0];
                        var coordinate = ol.proj.fromLonLat([parseFloat(result.lon), parseFloat(result.lat)]);
                        map.getView().animate({
                            center: coordinate,
                            zoom: 16
                        });
                    } else {
                        alert(t('searchNoResults'));
                    }
                },
                error: function() {
                    alert(t('connectionError'));
                }
            });
        }
    }

    searchButton.on('click', performSearch);
    searchInput.on('keypress', function(e) {
        if (e.which === 13) {
            performSearch();
        }
    });
} 