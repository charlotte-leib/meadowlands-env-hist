const placenames4 = L.layerGroup();
const Haverstro4 = L.marker([40.6921, -74.1749]).bindPopup('<h5>"Haverstro, today"</h5><p>Haverstro is today known as Newark, New Jersey. Newark Liberty International Airport and the Port of Newark occupies the site of the most productive salt meadows that provided early settlers with forage.</p><img src=""></a>').addTo(placenames4);

const map4 = L.map('map4', {
    fullscreenControl: true,
    fullscreenControlOptions: {
    position: 'topleft'},
  });

const ESRI2024WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(map4)
map4.setView([40.8158, -74.1321], 11);

  L.control.coordinates({
    position: "bottomleft",
    useDMS: false,
    labelTemplateLat: "N {y}",
    labelTemplateLng: "E {x}",
    useLatLngOrder: true
}).addTo(map4);

const baseLayers4 = {  
    'ESRI World Imagery': ESRI2024WorldImagery,
}

const overlays4 = {
    'Place names': placenames4,
}


const layerControl4 = L.control.layers(baseLayers4, overlays4).addTo(map4);

/* ESRI2024WorldImagery attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community */