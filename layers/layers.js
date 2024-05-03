var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_UniversityofLeicester_1 = new ol.format.GeoJSON();
var features_UniversityofLeicester_1 = format_UniversityofLeicester_1.readFeatures(json_UniversityofLeicester_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UniversityofLeicester_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversityofLeicester_1.addFeatures(features_UniversityofLeicester_1);
var lyr_UniversityofLeicester_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversityofLeicester_1, 
                style: style_UniversityofLeicester_1,
                popuplayertitle: "University of Leicester",
                interactive: true,
                title: '<img src="styles/legend/UniversityofLeicester_1.png" /> University of Leicester'
            });
var format_circle1_2 = new ol.format.GeoJSON();
var features_circle1_2 = format_circle1_2.readFeatures(json_circle1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_circle1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_circle1_2.addFeatures(features_circle1_2);
var lyr_circle1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_circle1_2, 
                style: style_circle1_2,
                popuplayertitle: "circle1",
                interactive: true,
                title: '<img src="styles/legend/circle1_2.png" /> circle1'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_UniversityofLeicester_1.setVisible(true);lyr_circle1_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_UniversityofLeicester_1,lyr_circle1_2];
lyr_UniversityofLeicester_1.set('fieldAliases', {'id': 'id', });
lyr_circle1_2.set('fieldAliases', {'id': 'id', });
lyr_UniversityofLeicester_1.set('fieldImages', {'id': 'TextEdit', });
lyr_circle1_2.set('fieldImages', {'id': 'TextEdit', });
lyr_UniversityofLeicester_1.set('fieldLabels', {'id': 'no label', });
lyr_circle1_2.set('fieldLabels', {'id': 'no label', });
lyr_circle1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});