const map3 = L.map('map3', {
  fullscreenControl: true,
  fullscreenControlOptions: {
  position: 'topleft'},
});

const jacobz1654mapNieuNederlant = L.tileLayer('https://allmaps.xyz/maps/d067eb292c19632e/{z}/{x}/{y}.png').addTo(map3)
  map3.setView([40.784, -74.104], 12);
const speed1676mapNewEnglandNY = L.tileLayer('https://allmaps.xyz/maps/dfd55b30d25acf91/{z}/{x}/{y}.png').addTo(map3)
  map3.setView([40.784, -74.104], 12);


  L.control.coordinates({
    position: "bottomleft",
    useDMS: false,
    labelTemplateLat: "N {y}",
    labelTemplateLng: "E {x}",
    useLatLngOrder: true
}).addTo(map3);

const baseLayers = {
  '1654': jacobz1654mapNieuNederlant,  
  '1676': speed1676mapNewEnglandNY,
}
const layerControl = L.control.layers(baseLayers).addTo(map3);

