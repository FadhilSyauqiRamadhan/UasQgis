var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kapling_2 = new ol.format.GeoJSON();
var features_kapling_2 = format_kapling_2.readFeatures(json_kapling_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kapling_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kapling_2.addFeatures(features_kapling_2);
var lyr_kapling_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kapling_2, 
                style: style_kapling_2,
                popuplayertitle: 'kapling',
                interactive: true,
                title: '<img src="styles/legend/kapling_2.png" /> kapling'
            });
var format_jalann_3 = new ol.format.GeoJSON();
var features_jalann_3 = format_jalann_3.readFeatures(json_jalann_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalann_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalann_3.addFeatures(features_jalann_3);
var lyr_jalann_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalann_3, 
                style: style_jalann_3,
                popuplayertitle: 'jalann',
                interactive: true,
                title: '<img src="styles/legend/jalann_3.png" /> jalann'
            });
var format_jalan_4 = new ol.format.GeoJSON();
var features_jalan_4 = format_jalan_4.readFeatures(json_jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_4.addFeatures(features_jalan_4);
var lyr_jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_4, 
                style: style_jalan_4,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_4.png" /> jalan'
            });
var format_fasilitas_5 = new ol.format.GeoJSON();
var features_fasilitas_5 = format_fasilitas_5.readFeatures(json_fasilitas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_5.addFeatures(features_fasilitas_5);
var lyr_fasilitas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_5, 
                style: style_fasilitas_5,
                popuplayertitle: 'fasilitas',
                interactive: true,
                title: '<img src="styles/legend/fasilitas_5.png" /> fasilitas'
            });
var format_rumah_6 = new ol.format.GeoJSON();
var features_rumah_6 = format_rumah_6.readFeatures(json_rumah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_6.addFeatures(features_rumah_6);
var lyr_rumah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_6, 
                style: style_rumah_6,
                popuplayertitle: 'rumah',
                interactive: true,
                title: '<img src="styles/legend/rumah_6.png" /> rumah'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_kapling_2.setVisible(true);lyr_jalann_3.setVisible(true);lyr_jalan_4.setVisible(true);lyr_fasilitas_5.setVisible(true);lyr_rumah_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_kapling_2,lyr_jalann_3,lyr_jalan_4,lyr_fasilitas_5,lyr_rumah_6];
lyr_kapling_2.set('fieldAliases', {'id': 'id', 'Luas_m2': 'Luas_m2', });
lyr_jalann_3.set('fieldAliases', {'id': 'id', });
lyr_jalan_4.set('fieldAliases', {'id': 'id', });
lyr_fasilitas_5.set('fieldAliases', {'id': 'id', 'Fasilitas': 'Fasilitas', 'Luas_m2': 'Luas_m2', });
lyr_rumah_6.set('fieldAliases', {'KodeRumah': 'KodeRumah', 'Luas_m2': 'Luas_m2', });
lyr_kapling_2.set('fieldImages', {'id': 'TextEdit', 'Luas_m2': 'TextEdit', });
lyr_jalann_3.set('fieldImages', {'id': 'TextEdit', });
lyr_jalan_4.set('fieldImages', {'id': 'TextEdit', });
lyr_fasilitas_5.set('fieldImages', {'id': 'TextEdit', 'Fasilitas': 'TextEdit', 'Luas_m2': 'TextEdit', });
lyr_rumah_6.set('fieldImages', {'KodeRumah': 'TextEdit', 'Luas_m2': 'TextEdit', });
lyr_kapling_2.set('fieldLabels', {'id': 'no label', 'Luas_m2': 'no label', });
lyr_jalann_3.set('fieldLabels', {'id': 'no label', });
lyr_jalan_4.set('fieldLabels', {'id': 'no label', });
lyr_fasilitas_5.set('fieldLabels', {'id': 'no label', 'Fasilitas': 'no label', 'Luas_m2': 'no label', });
lyr_rumah_6.set('fieldLabels', {'KodeRumah': 'no label', 'Luas_m2': 'no label', });
lyr_rumah_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});