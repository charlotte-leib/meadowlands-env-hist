
const landscapefeatures = L.layerGroup();
const CedarSwamp = L.marker([40.760338, -74.122696]).bindPopup('<h5>Cedar Swamp</h5><p>In 1791, the cedars in this swamp were burned to the ground to improve surveillance over a key roadway for east-west trade and travel.</p><a href="/meadowlands-env-hist/meadowworlds/herb_earlyam_2a/" target="_blank"><img src="/meadowlands-env-hist/img/derivatives/iiif/images/herb_earlyam_2a/full/full/0/default.jpg"></a>').addTo(landscapefeatures);

const SchuylersMansion = L.marker([40.7879, -74.1364]).bindPopup('<h5>Schuyler Mansion</h5><p>Ben Franklin visited the Schuylers in 1743 and recommended the Schuylers purchase a steam engine to add in the extraction of copper in the nearby Schuyler mine.</p><a href="/meadowlands-env-hist/meadowworlds/artifact_earlyam_schuylermine_1/"><img src="/meadowlands-env-hist/img/derivatives/iiif/images/artifact_earlyam_schuylermine_1/full/full/0/default.jpg"</a>').addTo(landscapefeatures);

const foragelocations = L.layerGroup();
const forageloc1 = L.marker([40.6768, -74.2222]).bindPopup('<h5>Forage Location test</h5><p>test text<p></a>').addTo(foragelocations);

const map = L.map('map', {
	  fullscreenControl: true,
	  fullscreenControlOptions: {
		position: 'topleft'},
    layers: [landscapefeatures],
  });

const warmap = L.tileLayer('https://allmaps.xyz/maps/19ebbf8cba8a3acb/{z}/{x}/{y}.png').addTo(map)
  map.setView([40.784, -74.104], 12);
const warmap2 = L.tileLayer('https://allmaps.xyz/maps/3ed66f8ea512bf80/{z}/{x}/{y}.png').addTo(map)
map.setView([40.784, -74.104], 12);

  L.control.coordinates({
    position: "bottomleft",
    useDMS: false,
    labelTemplateLat: "N {y}",
    labelTemplateLng: "E {x}",
    useLatLngOrder: true
}).addTo(map);

/*
const historicmines = L.layerGroup();
const historicmines = fetch("https://mapsdep.nj.gov/arcgis/rest/services/Features/Geology/MapServer/0/query?outFields=*&where=1%3D1&f=geojson")
    .then(function(response) {
       return response.json()
    })
    .then(function(data) {
      L.geoJson(data).addTo(map);
    })
    .catch(function(error) {
      console.log(`This is the error: ${error}`)
    })
*/

const baseLayers = {
    '1781 v1': warmap,
    '1781 v2': warmap2
}
const overlays = {
    'Landscape Features': landscapefeatures,
    'Forage Locations': foragelocations,
  };

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);

/*
console.log(baseLayers)
fetch("/wax/assets/geojson-data/NJ_Geol_soil_HistoricFill.geojson")
    .then(function(response) {
       return response.json()
    })
    .then(function(data) {
      L.geoJson(data).addTo(map);
    })
    .catch(function(error) {
      console.log(`This is the error: ${error}`)
    }) */

    /*
fetch("https://mapsdep.nj.gov/arcgis/rest/services/Features/Geology/MapServer/0/query?outFields=*&where=1%3D1&f=geojson")
    .then(function(response) {
       return response.json()
    })
    .then(function(data) {
      L.geoJson(data).addTo(map);
    })
    .catch(function(error) {
      console.log(`This is the error: ${error}`)
    }) */

