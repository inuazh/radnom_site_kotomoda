var map;
DG.then(function() {
    map = DG.map('map', {
        center: [59.934814, 30.332977],
        zoom: 15
    });
    DG.marker([59.934814, 30.332977]).addTo(map).bindPopup('КОТОМОДА!');
    DG.marker([59.932814, 30.334977]).addTo(map).bindPopup('КОТОМОДА!');
});