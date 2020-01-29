
require (["esri/Map", "esri/views/MapView", "esri/WebMap", "esri/widgets/BasemapGallery",
         "esri/layers/GraphicsLayer", "esri/widgets/Sketch","esri/layers/FeatureLayer"],
        function(Map, MapView, WebMap, BasemapGallery, GraphicsLayer, Sketch, FeatureLayer)
        {
            let map1 = new Map({basemap:"satellite"});
            let map2 = new Map({basemap:"topo"});
            let map3 = new Map({basemap:"osm"});
            var graphicsLayer = new GraphicsLayer();
            // var map = new Map({
            //     basemap: mapview,
                
            // });
            let map4 = new WebMap({portalItem:{id:"0466c523e5964bc194232d7394d518d4"},layers: [graphicsLayer]});
            let mapview = new MapView({
                container: "mapview",
                map:map4});
            var basemapGallery = new BasemapGallery({
                view: mapview,
                source: {
                    portal: {
                        url: "https://arcgis.com",
                        useVectorBasemaps: true,
                    }
                }
            });
            var sketch = new Sketch({
                view: mapview,
                layer: graphicsLayer,
            });

            var trailheadsLayer = new FeatureLayer({
                url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
            });

            map4.add(trailheadsLayer, 0);

            var parksLayer = new FeatureLayer({
                url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
              });
        
              map4.add(parksLayer, 0);
        
              

 
 mapview.ui.add(sketch, "top-right");

 mapview.ui.add(basemapGallery, "top-right");   
    
        
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




