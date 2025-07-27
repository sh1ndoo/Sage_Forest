function addCatSpots(map) {
    map.addInteractiveLayer('cat_spots', cat_spots, {
        name: 'Cat spots',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-door-open'),
                riseOnHover: true
            });
        }
    });
}
