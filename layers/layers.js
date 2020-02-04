var wms_layers = [];

        var lyr_GOOGLESATLITE_0 = new ol.layer.Tile({
            'title': 'GOOGLESATLITE_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2,
                title: '<img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2.png" /> INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_vialidad'
            });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3,
    title: 'INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio Juan_German_Roscio_Unidades_de_Paisaje<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3_0.png" /> Cumbres Montañosas<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3_1.png" /> Depresión<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3_2.png" /> Montaña Baja<br />'
        });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4,
    title: 'INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_temperatura<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4_0.png" /> 24<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4_1.png" /> 26<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4_2.png" /> 28<br />'
        });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5,
                title: '<img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5.png" /> INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_recursos_minerales'
            });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6,
    title: 'INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_precipitacion<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6_0.png" /> 1000 - 1400<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6_1.png" /> 1400 - 1800<br />'
        });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7,
                title: '<img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7.png" /> INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_oronimia'
            });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8,
                title: '<img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8.png" /> INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_isoyetas'
            });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9,
                title: '<img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9.png" /> INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_hidrografia'
            });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10,
    title: 'INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_geologia_formaciones<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10_0.png" /> (Terrazas)<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10_1.png" /> Capacho<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10_2.png" /> Colon<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10_3.png" /> La Luna<br />'
        });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11,
    title: 'INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_geologia_cronoestratigrafia<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11_0.png" /> Cretáceo<br />'
        });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12,
                title: '<img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12.png" /> INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_curvas_de_nivel'
            });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13,
    title: 'INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_capacidad_uso_del_suelo<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13_0.png" /> Clase V<br />\
    <img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13_1.png" /> Clase VI<br />'
        });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14,
                title: '<img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14.png" /> INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_centros_poblados_capitales'
            });var format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15 = new ol.format.GeoJSON();
var features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15 = format_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15.readFeatures(json_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15.addFeatures(features_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15);var lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15, 
                style: style_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15,
                title: '<img src="styles/legend/INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15.png" /> INDEPENDENCIA_JUANGERMANROSCIO Municipio_Capacho_Nuevo_Parroquia_Juan_German_Roscio juan_german_roscio_centros_poblados'
            });

lyr_GOOGLESATLITE_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14.setVisible(true);lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15.setVisible(true);
var layersList = [lyr_GOOGLESATLITE_0,lyr_OpenStreetMap_1,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14,lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15];
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'tipo': 'tipo', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3.set('fieldAliases', {'pk': 'pk', 'rowid': 'rowid', 'id': 'id', 'estado': 'estado', 'unidad': 'unidad', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'temperatur': 'temperatur', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'mineral': 'mineral', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'valor_men': 'valor_men', 'valor_may': 'valor_may', 'rango': 'rango', 'valor': 'valor', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'precipitac': 'precipitac', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nomenclatu': 'nomenclatu', 'formacion': 'formacion', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'numero': 'numero', 'era': 'era', 'periodo': 'periodo', 'epoca': 'epoca', 'roca': 'roca', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'altitud_ms': 'altitud_ms', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'clase_suel': 'clase_suel', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3.set('fieldImages', {'pk': 'TextEdit', 'rowid': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'unidad': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'temperatur': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'mineral': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'valor_men': 'TextEdit', 'valor_may': 'TextEdit', 'rango': 'TextEdit', 'valor': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'precipitac': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nomenclatu': 'TextEdit', 'formacion': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'numero': 'TextEdit', 'era': 'TextEdit', 'periodo': 'TextEdit', 'epoca': 'TextEdit', 'roca': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'altitud_ms': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'clase_suel': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_vialidad_2.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_RoscioJuan_German_Roscio_Unidades_de_Paisaje_3.set('fieldLabels', {'pk': 'no label', 'rowid': 'no label', 'id': 'no label', 'estado': 'no label', 'unidad': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_temperatura_4.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'temperatur': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_recursos_minerales_5.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'mineral': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_precipitacion_6.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'valor_men': 'no label', 'valor_may': 'no label', 'rango': 'no label', 'valor': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_oronimia_7.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_isoyetas_8.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'precipitac': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_hidrografia_9.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_formaciones_10.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nomenclatu': 'no label', 'formacion': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_geologia_cronoestratigrafia_11.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'numero': 'no label', 'era': 'no label', 'periodo': 'no label', 'epoca': 'no label', 'roca': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_curvas_de_nivel_12.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'altitud_ms': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_capacidad_uso_del_suelo_13.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'clase_suel': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_capitales_14.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_INDEPENDENCIA_JUANGERMANROSCIOMunicipio_Capacho_Nuevo_Parroquia_Juan_German_Rosciojuan_german_roscio_centros_poblados_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});