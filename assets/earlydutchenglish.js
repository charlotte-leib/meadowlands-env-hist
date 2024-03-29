const placenames = L.layerGroup();
const Haverstro = L.marker([40.7494, -74.3757]).bindPopup('<h5>Haverstro</h5><p>When the Dutch settlers arrived in Lenapehoking, they called this area "Haverstro", meaning oat hay. The place name, ascribed only to this area, suggests it was a key site for the procurement of grasses and forage, and perhaps also the cultivation of oats.  </p><img src="/meadowlands-env-hist/img/extraimages/Spartinapatens_smoothcordgrass_earlywinter.jpg"></a>').addTo(placenames);

const map3 = L.map('map3', {
  fullscreenControl: true,
  fullscreenControlOptions: {
  position: 'topleft'},
  layers: [placenames],
});

const speed1676mapNewEnglandNY = L.tileLayer('https://allmaps.xyz/maps/dfd55b30d25acf91/{z}/{x}/{y}.png').addTo(map3)
  map3.setView([40.92, -74.3253], 10);

  L.control.coordinates({
    position: "bottomleft",
    useDMS: false,
    labelTemplateLat: "N {y}",
    labelTemplateLng: "E {x}",
    useLatLngOrder: true
}).addTo(map3);

const baseLayers3 = {  
  '1676': speed1676mapNewEnglandNY,
}

const overlays3 = {
    'Place names': placenames,
};

const layerControl = L.control.layers(baseLayers3, overlays3).addTo(map3);


/*
const jacobz1654mapNieuNederlant = L.tileLayer('https://allmaps.xyz/maps/d067eb292c19632e/{z}/{x}/{y}.png').addTo(map3)
  map3.setView([41.2, -74.32], 8);
  */