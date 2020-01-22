
require (["esri/Map", "esri/views/MapView", "esri/WebMap"],
        function(Map, MapView, WebMap)
        {
            let map1 = new Map({basemap:"satellite"});
            let map2 = new Map({basemap:"topo"});
            let map3 = new Map({basemap:"osm"});
            let map4 = new WebMap({portalItem:{id:"0466c523e5964bc194232d7394d518d4"}});
            let mapview = new MapView({
                container: "mapview",
                map:map4
            });
        
 document.getElementById('satellite').addEventListener('click',
         function (){
             mapview.map = map1;
         }
     );

 document.getElementById('topo').addEventListener('click',
         function (){
             mapview.map = map2;
         }
     );

 document.getElementById('osm').addEventListener('click',
     function (){
         mapview.map = map3;
     }
 );

 document.getElementById('agol').addEventListener('click',
     function (){
         mapview.map = map4;
     }
 );
 });




