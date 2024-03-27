const map2 = L.map('map2', {
	fullscreenControl: true,
	fullscreenControlOptions: {
		position: 'topleft'
	}
  });
  L.tileLayer('https://allmaps.xyz/maps/3ed66f8ea512bf80/{z}/{x}/{y}.png').addTo(map2)
  map2.setView([40.712780, -74.081800], 12);

  L.control.coordinates({
    position: "bottomleft",
    useDMS: false,
    labelTemplateLat: "N {y}",
    labelTemplateLng: "E {x}",
    useLatLngOrder: true
}).addTo(map2);

var marker = L.marker([40.760338, -74.122696]).addTo(map2);
marker.bindPopup('<h5>Cedar Swamp</h5><p>In 1791, the cedars in this swamp were burned to the ground to improve surveillance over a key roadway for east-west trade and travel.</p><a href="/wax/meadowworlds/herb5a/" target="_blank"><img src="/wax/img/derivatives/simple/herb5/fullwidth.jpg"></a>')

var marker = L.marker([40.75, -74.2]).addTo(map2);
marker.bindPopup('<h5>Cedar Swamp</h5><p>In 1791, the cedars in this swamp were burned to the ground to improve surveillance over a key roadway for east-west trade and travel.</p><a href="/wax/meadowworlds/herb5a/" target="_blank"><img src="/wax/img/derivatives/simple/herb5/fullwidth.jpg" height="100px" width="50px"></a>')

var marker = L.marker([40.7879, -74.1364]).addTo(map2);