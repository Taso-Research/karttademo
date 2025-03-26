var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kuntiensamanlaisuus_1 = new ol.format.GeoJSON();
var features_Kuntiensamanlaisuus_1 = format_Kuntiensamanlaisuus_1.readFeatures(json_Kuntiensamanlaisuus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuntiensamanlaisuus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuntiensamanlaisuus_1.addFeatures(features_Kuntiensamanlaisuus_1);
var lyr_Kuntiensamanlaisuus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuntiensamanlaisuus_1, 
                style: style_Kuntiensamanlaisuus_1,
                popuplayertitle: 'Kuntien samanlaisuus',
                interactive: true,
    title: 'Kuntien samanlaisuus<br />\
    <img src="styles/legend/Kuntiensamanlaisuus_1_0.png" /> samanlainen<br />\
    <img src="styles/legend/Kuntiensamanlaisuus_1_1.png" /> <br />\
    <img src="styles/legend/Kuntiensamanlaisuus_1_2.png" /> <br />\
    <img src="styles/legend/Kuntiensamanlaisuus_1_3.png" /> <br />\
    <img src="styles/legend/Kuntiensamanlaisuus_1_4.png" /> <br />\
    <img src="styles/legend/Kuntiensamanlaisuus_1_5.png" /> erilainen<br />' });
var format_Kuntienelinvoima_2 = new ol.format.GeoJSON();
var features_Kuntienelinvoima_2 = format_Kuntienelinvoima_2.readFeatures(json_Kuntienelinvoima_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuntienelinvoima_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuntienelinvoima_2.addFeatures(features_Kuntienelinvoima_2);
var lyr_Kuntienelinvoima_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuntienelinvoima_2, 
                style: style_Kuntienelinvoima_2,
                popuplayertitle: 'Kuntien elinvoima',
                interactive: true,
    title: 'Kuntien elinvoima<br />\
    <img src="styles/legend/Kuntienelinvoima_2_0.png" /> heikko<br />\
    <img src="styles/legend/Kuntienelinvoima_2_1.png" /> <br />\
    <img src="styles/legend/Kuntienelinvoima_2_2.png" /> <br />\
    <img src="styles/legend/Kuntienelinvoima_2_3.png" /> <br />\
    <img src="styles/legend/Kuntienelinvoima_2_4.png" /> <br />\
    <img src="styles/legend/Kuntienelinvoima_2_5.png" /> vahva<br />' });
var format_Kouvolaalhimmtkunnat_3 = new ol.format.GeoJSON();
var features_Kouvolaalhimmtkunnat_3 = format_Kouvolaalhimmtkunnat_3.readFeatures(json_Kouvolaalhimmtkunnat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kouvolaalhimmtkunnat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kouvolaalhimmtkunnat_3.addFeatures(features_Kouvolaalhimmtkunnat_3);
var lyr_Kouvolaalhimmtkunnat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kouvolaalhimmtkunnat_3, 
                style: style_Kouvolaalhimmtkunnat_3,
                popuplayertitle: 'Kouvolaa lähimmät kunnat',
                interactive: true,
                title: '<img src="styles/legend/Kouvolaalhimmtkunnat_3.png" /> Kouvolaa lähimmät kunnat'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kuntiensamanlaisuus_1.setVisible(true);lyr_Kuntienelinvoima_2.setVisible(true);lyr_Kouvolaalhimmtkunnat_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kuntiensamanlaisuus_1,lyr_Kuntienelinvoima_2,lyr_Kouvolaalhimmtkunnat_3];
lyr_Kuntiensamanlaisuus_1.set('fieldAliases', {'fid': 'fid', 'nimi': 'nimi', 'name': 'name', 'kunta': 'kunta', 'vuosi': 'vuosi', 'namn': 'namn', 'etaisyys_kunnasta': 'Etäisyys Kouvolasta', 'elinvoimaisuus': 'elinvoimaisuus', });
lyr_Kuntienelinvoima_2.set('fieldAliases', {'fid': 'fid', 'nimi': 'nimi', 'name': 'name', 'kunta': 'kunta', 'vuosi': 'vuosi', 'namn': 'namn', 'etaisyys_kunnasta': 'Erilaisuus Kouvolasta', 'elinvoimaisuus': 'Elinvoimaisuus', });
lyr_Kouvolaalhimmtkunnat_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'kunta': 'kunta', 'vuosi': 'vuosi', 'nimi': 'nimi', 'namn': 'namn', });
lyr_Kuntiensamanlaisuus_1.set('fieldImages', {'fid': 'TextEdit', 'nimi': 'TextEdit', 'name': 'TextEdit', 'kunta': 'TextEdit', 'vuosi': 'Range', 'namn': 'TextEdit', 'etaisyys_kunnasta': 'TextEdit', 'elinvoimaisuus': 'TextEdit', });
lyr_Kuntienelinvoima_2.set('fieldImages', {'fid': 'Hidden', 'nimi': 'TextEdit', 'name': 'Hidden', 'kunta': 'Hidden', 'vuosi': 'Hidden', 'namn': 'Hidden', 'etaisyys_kunnasta': 'TextEdit', 'elinvoimaisuus': 'TextEdit', });
lyr_Kouvolaalhimmtkunnat_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'kunta': 'TextEdit', 'vuosi': 'Range', 'nimi': 'TextEdit', 'namn': 'TextEdit', });
lyr_Kuntiensamanlaisuus_1.set('fieldLabels', {'fid': 'hidden field', 'nimi': 'no label', 'name': 'hidden field', 'kunta': 'hidden field', 'vuosi': 'hidden field', 'namn': 'hidden field', 'etaisyys_kunnasta': 'header label - always visible', 'elinvoimaisuus': 'hidden field', });
lyr_Kuntienelinvoima_2.set('fieldLabels', {'nimi': 'no label', 'etaisyys_kunnasta': 'hidden field', 'elinvoimaisuus': 'header label - always visible', });
lyr_Kouvolaalhimmtkunnat_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'no label', 'kunta': 'hidden field', 'vuosi': 'hidden field', 'nimi': 'hidden field', 'namn': 'hidden field', });
lyr_Kouvolaalhimmtkunnat_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});