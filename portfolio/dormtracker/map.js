mapboxgl.accessToken = 'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-74.004984498024, 40.71106883459667],
    zoom: 14
});

var marker = new mapboxgl.Marker()
  .setLngLat([-74.004984498024, 40.71106883459667])
  .addTo(map);

const busStops = [
  [-74.0058751954367, 40.71170571554818], 
  [-74.00693125560957, 40.709844565588476],
  [-74.00772917184605, 40.70903193811264],
  [-74.0093198859028, 40.71008755206893],
  [-74.00573294982681, 40.710595855127494]
];

let counter = 0;
function move(){
setTimeout(()=>{
  if (counter >= busStops.length) return;
  marker.setLngLat(busStops[counter]);
  counter++;
  move();
},1000); 
}