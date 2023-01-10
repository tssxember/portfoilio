// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];

  //Add your own access Token as variable 
  
  const mapKey = '<pk.eyJ1IjoidHNzeGVtYmVyIiwiYSI6ImNsYmlvdjVodzBudmkzdmxjODNoMHpjb24ifQ.6rZsJPoKgMWDwMZ1F8qfqQ>'

   mapboxgl.accessToken = mapKey;
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
});

 // Create a new marker.
    const marker = new mapboxgl.Marker()
    .setLngLat(busStops[0])
    .addTo(map);
    
    let counter = 0;
    const stopCounting = busStops.length;
    //const reverseDirection = counter - 1; 

    //could use setTimeout
  function move() {
    setInterval(()=> {
        if (counter === stopCounting) {
            return
        }
        marker.setLngLat(busStops[counter]);
        counter = counter + 1;
    }, 1000);
}      
  //Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }  