---
layout: page
permalink: /leaflettest2/
title: Test2
---
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<style>
    #map { height: 800px; }
</style>
 <div id="map"></div>
 <script>
var map = L.map('map').setView([40.760338, -74.122696], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
{% comment %}
var marker = L.marker([40.760338, -74.122696]).addTo(map);
{% endcomment %}
var circle = L.circle([40.760338, -74.122696], {
    color: 'purple',
    fillColor: '#f07',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
var popup = L.popup()
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);
</script>