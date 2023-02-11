var wms_layers = [];


        var lyr_GoogleTraffic_0 = new ol.layer.Tile({
            'title': 'Google Traffic ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Comunas_3 = new ol.format.GeoJSON();
var features_Comunas_3 = format_Comunas_3.readFeatures(json_Comunas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunas_3.addFeatures(features_Comunas_3);
var lyr_Comunas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunas_3, 
                style: style_Comunas_3,
                interactive: false,
                title: '<img src="styles/legend/Comunas_3.png" /> Comunas'
            });
var format_Calles_4 = new ol.format.GeoJSON();
var features_Calles_4 = format_Calles_4.readFeatures(json_Calles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calles_4.addFeatures(features_Calles_4);
var lyr_Calles_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calles_4, 
                style: style_Calles_4,
                interactive: true,
                title: '<img src="styles/legend/Calles_4.png" /> Calles'
            });
var format_Colectivos_5 = new ol.format.GeoJSON();
var features_Colectivos_5 = format_Colectivos_5.readFeatures(json_Colectivos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colectivos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colectivos_5.addFeatures(features_Colectivos_5);
var lyr_Colectivos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colectivos_5, 
                style: style_Colectivos_5,
                interactive: false,
                title: '<img src="styles/legend/Colectivos_5.png" /> Colectivos'
            });
var format_Anchocalzada_6 = new ol.format.GeoJSON();
var features_Anchocalzada_6 = format_Anchocalzada_6.readFeatures(json_Anchocalzada_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anchocalzada_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anchocalzada_6.addFeatures(features_Anchocalzada_6);
var lyr_Anchocalzada_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Anchocalzada_6, 
                style: style_Anchocalzada_6,
                interactive: true,
                title: '<img src="styles/legend/Anchocalzada_6.png" /> Ancho calzada'
            });
var format_NormativaAvenida_7 = new ol.format.GeoJSON();
var features_NormativaAvenida_7 = format_NormativaAvenida_7.readFeatures(json_NormativaAvenida_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormativaAvenida_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NormativaAvenida_7.addFeatures(features_NormativaAvenida_7);
var lyr_NormativaAvenida_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormativaAvenida_7, 
                style: style_NormativaAvenida_7,
                interactive: true,
    title: 'Normativa Avenida<br />\
    <img src="styles/legend/NormativaAvenida_7_0.png" /> PERMITIDO ESTACIONAR 24 HORAS<br />\
    <img src="styles/legend/NormativaAvenida_7_1.png" /> PERMITIDO ESTACIONAR A 45° 24 HORAS<br />\
    <img src="styles/legend/NormativaAvenida_7_2.png" /> PERMITIDO ESTACIONAR A 90° 24 HORAS<br />\
    <img src="styles/legend/NormativaAvenida_7_3.png" /> PERMITIDO ESTACIONAR PARALELO A CICLOVIA 24 HORAS<br />\
    <img src="styles/legend/NormativaAvenida_7_4.png" /> PROHIBIDO ESTACIONAR 24 HORAS<br />\
    <img src="styles/legend/NormativaAvenida_7_5.png" /> PROHIBIDO ESTACIONAR DIAS HABILES DE 7 A 21 HORAS<br />\
    <img src="styles/legend/NormativaAvenida_7_6.png" /> PROHIBIDO ESTACIONAR Y DETENERSE 24 HORAS<br />\
    <img src="styles/legend/NormativaAvenida_7_7.png" /> <br />'
        });
var format_NormativaCalle_8 = new ol.format.GeoJSON();
var features_NormativaCalle_8 = format_NormativaCalle_8.readFeatures(json_NormativaCalle_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormativaCalle_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NormativaCalle_8.addFeatures(features_NormativaCalle_8);
var lyr_NormativaCalle_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormativaCalle_8, 
                style: style_NormativaCalle_8,
                interactive: true,
    title: 'Normativa Calle<br />\
    <img src="styles/legend/NormativaCalle_8_0.png" /> PERMITIDO ESTACIONAR 24 HORAS<br />\
    <img src="styles/legend/NormativaCalle_8_1.png" /> PERMITIDO ESTACIONAR A 45° 24 HORAS<br />\
    <img src="styles/legend/NormativaCalle_8_2.png" /> PERMITIDO ESTACIONAR A 90° 24 HORAS<br />\
    <img src="styles/legend/NormativaCalle_8_3.png" /> PERMITIDO ESTACIONAR PARALELO A CICLOVIA 24 HORAS<br />\
    <img src="styles/legend/NormativaCalle_8_4.png" /> PROHIBIDO ESTACIONAR 24 HORAS<br />\
    <img src="styles/legend/NormativaCalle_8_5.png" /> PROHIBIDO ESTACIONAR DIAS HABILES DE 7 A 21 HORAS<br />\
    <img src="styles/legend/NormativaCalle_8_6.png" /> PROHIBIDO ESTACIONAR Y DETENERSE 24 HORAS<br />\
    <img src="styles/legend/NormativaCalle_8_7.png" /> <br />'
        });

lyr_GoogleTraffic_0.setVisible(true);lyr_GoogleMaps_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(true);lyr_Comunas_3.setVisible(false);lyr_Calles_4.setVisible(false);lyr_Colectivos_5.setVisible(false);lyr_Anchocalzada_6.setVisible(true);lyr_NormativaAvenida_7.setVisible(false);lyr_NormativaCalle_8.setVisible(false);
var layersList = [lyr_GoogleTraffic_0,lyr_GoogleMaps_1,lyr_OpenStreetMap_2,lyr_Comunas_3,lyr_Calles_4,lyr_Colectivos_5,lyr_Anchocalzada_6,lyr_NormativaAvenida_7,lyr_NormativaCalle_8];
lyr_Comunas_3.set('fieldAliases', {'qc_id': 'qc_id', 'barrios': 'barrios', 'perimetro': 'perimetro', 'area': 'area', 'comunas': 'comunas', 'id': 'id', 'objeto': 'objeto', 'numero': 'numero', });
lyr_Calles_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'codigo': 'codigo', 'nomoficial': 'nomoficial', 'alt_izqini': 'alt_izqini', 'alt_izqfin': 'alt_izqfin', 'alt_derini': 'alt_derini', 'alt_derfin': 'alt_derfin', 'nomanter': 'nomanter', 'nom_mapa': 'nom_mapa', 'tipo_c': 'tipo_c', 'long': 'long', 'sentido': 'sentido', 'cod_sent': 'cod_sent', 'observa': 'observa', 'ciclo_obse': 'ciclo_obse', 'red_jerarq': 'red_jerarq', 'red_tp': 'red_tp', 'comuna': 'comuna', 'com_par': 'com_par', 'com_impar': 'com_impar', 'barrio': 'barrio', 'barrio_par': 'barrio_par', 'barrio_imp': 'barrio_imp', });
lyr_Colectivos_5.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'linea': 'linea', 'recorrido': 'recorrido', 'sentido': 'sentido', 'l_r_s': 'l_r_s', 'modalidad': 'modalidad', 'jurisdicci': 'jurisdicci', 'long_kmp07': 'long_kmp07', 'long_caba': 'long_caba', 'porc_caba': 'porc_caba', 'long_mtb': 'long_mtb', 'porc_mtb': 'porc_mtb', 'l_flores': 'l_flores', 'p_flores': 'p_flores', 'l_pacif': 'l_pacif', 'p_pacif': 'p_pacif', 'l_jbjus': 'l_jbjus', 'p_jbjus': 'p_jbjus', 'l_9jul': 'l_9jul', 'p_9jul': 'p_9jul', 'l_bajo': 'l_bajo', 'p_bajo': 'p_bajo', 'l_mat': 'l_mat', 'p_mat': 'p_mat', 'l_nor': 'l_nor', 'p_nor': 'p_nor', 'l_rut8': 'l_rut8', 'p_rut8': 'p_rut8', 'l_scru': 'l_scru', 'p_scru': 'p_scru', 'l_smar': 'l_smar', 'p_smar': 'p_smar', 'l_sroc': 'l_sroc', 'p_sroc': 'p_sroc', 'long_au': 'long_au', 'porc_au': 'porc_au', 'entidad_su': 'entidad_su', 'linea_sube': 'linea_sube', 'l_r': 'l_r', 'desde': 'desde', 'hasta': 'hasta', 'georrefe_o': 'georrefe_o', });
lyr_Anchocalzada_6.set('fieldAliases', {'qc_id': 'qc_id', 'sm': 'sm', 'id': 'id', 'codigo': 'codigo', 'nomoficial': 'nomoficial', 'alt_izqini': 'alt_izqini', 'alt_izqfin': 'alt_izqfin', 'alt_derini': 'alt_derini', 'alt_derfin': 'alt_derfin', 'nombre_geo': 'nombre_geo', 'ancho': 'ancho', });
lyr_NormativaAvenida_7.set('fieldAliases', {'id': 'id', 'version': 'version', 'operation': 'operation', 'name': 'name', 'remarks': 'remarks', 'zone': 'zone', 'rates': 'rates', 'no_from': 'no_from', 'no_to': 'no_to', 'street': 'street', 'side': 'side', 'rule': 'rule', 'stage': 'stage', 'street_no': 'street_no', 'total_spac': 'total_spac', 'reserved_s': 'reserved_s', 'list_space': 'list_space', 'no': 'no', 'rate_space': 'rate_space', 'numeration': 'numeration', 'tipo_c': 'tipo_c', 'sentido': 'sentido', 'id_normati': 'id_normati', 'cod_street': 'cod_street', 'acarreo': 'acarreo', 'comuna': 'comuna', 'longitud': 'longitud', 'permitir_n': 'permitir_n', 'carteleria': 'carteleria', });
lyr_NormativaCalle_8.set('fieldAliases', {'id': 'id', 'version': 'version', 'operation': 'operation', 'name': 'name', 'zone': 'zone', 'rates': 'rates', 'no_from': 'no_from', 'no_to': 'no_to', 'street': 'street', 'side': 'side', 'rule': 'rule', 'stage': 'stage', 'street_no': 'street_no', 'total_spac': 'total_spac', 'reserved_s': 'reserved_s', 'list_space': 'list_space', 'no': 'no', 'numeration': 'numeration', 'tipo_c': 'tipo_c', 'sentido': 'sentido', 'id_normati': 'id_normati', 'cod_street': 'cod_street', 'acarreo': 'acarreo', 'comuna': 'comuna', 'longitud': 'longitud', 'carteleria': 'carteleria', });
lyr_Comunas_3.set('fieldImages', {'qc_id': '', 'barrios': '', 'perimetro': '', 'area': '', 'comunas': '', 'id': '', 'objeto': '', 'numero': 'Range', });
lyr_Calles_4.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', 'codigo': 'TextEdit', 'nomoficial': 'TextEdit', 'alt_izqini': 'TextEdit', 'alt_izqfin': 'TextEdit', 'alt_derini': 'TextEdit', 'alt_derfin': 'TextEdit', 'nomanter': 'TextEdit', 'nom_mapa': 'TextEdit', 'tipo_c': 'TextEdit', 'long': 'TextEdit', 'sentido': 'TextEdit', 'cod_sent': 'TextEdit', 'observa': 'TextEdit', 'ciclo_obse': 'TextEdit', 'red_jerarq': 'TextEdit', 'red_tp': 'TextEdit', 'comuna': '', 'com_par': '', 'com_impar': '', 'barrio': '', 'barrio_par': '', 'barrio_imp': '', });
lyr_Colectivos_5.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', 'linea': 'TextEdit', 'recorrido': 'TextEdit', 'sentido': 'TextEdit', 'l_r_s': 'TextEdit', 'modalidad': 'TextEdit', 'jurisdicci': 'TextEdit', 'long_kmp07': 'TextEdit', 'long_caba': 'TextEdit', 'porc_caba': 'TextEdit', 'long_mtb': 'TextEdit', 'porc_mtb': 'TextEdit', 'l_flores': 'TextEdit', 'p_flores': 'TextEdit', 'l_pacif': 'TextEdit', 'p_pacif': 'TextEdit', 'l_jbjus': 'TextEdit', 'p_jbjus': 'TextEdit', 'l_9jul': 'TextEdit', 'p_9jul': 'TextEdit', 'l_bajo': 'TextEdit', 'p_bajo': 'TextEdit', 'l_mat': 'TextEdit', 'p_mat': 'TextEdit', 'l_nor': 'TextEdit', 'p_nor': 'TextEdit', 'l_rut8': 'TextEdit', 'p_rut8': 'TextEdit', 'l_scru': 'TextEdit', 'p_scru': 'TextEdit', 'l_smar': 'TextEdit', 'p_smar': 'TextEdit', 'l_sroc': 'TextEdit', 'p_sroc': 'TextEdit', 'long_au': 'TextEdit', 'porc_au': 'TextEdit', 'entidad_su': 'TextEdit', 'linea_sube': 'TextEdit', 'l_r': 'TextEdit', 'desde': 'TextEdit', 'hasta': 'TextEdit', 'georrefe_o': 'TextEdit', });
lyr_Anchocalzada_6.set('fieldImages', {'qc_id': 'TextEdit', 'sm': 'TextEdit', 'id': 'TextEdit', 'codigo': 'TextEdit', 'nomoficial': 'TextEdit', 'alt_izqini': 'TextEdit', 'alt_izqfin': 'TextEdit', 'alt_derini': 'TextEdit', 'alt_derfin': 'TextEdit', 'nombre_geo': 'TextEdit', 'ancho': 'TextEdit', });
lyr_NormativaAvenida_7.set('fieldImages', {'id': 'TextEdit', 'version': 'TextEdit', 'operation': 'TextEdit', 'name': 'TextEdit', 'remarks': 'TextEdit', 'zone': 'TextEdit', 'rates': 'TextEdit', 'no_from': 'TextEdit', 'no_to': 'TextEdit', 'street': 'TextEdit', 'side': 'TextEdit', 'rule': 'TextEdit', 'stage': 'TextEdit', 'street_no': 'TextEdit', 'total_spac': 'TextEdit', 'reserved_s': 'TextEdit', 'list_space': 'TextEdit', 'no': 'TextEdit', 'rate_space': 'TextEdit', 'numeration': 'TextEdit', 'tipo_c': 'TextEdit', 'sentido': 'TextEdit', 'id_normati': 'TextEdit', 'cod_street': 'TextEdit', 'acarreo': 'TextEdit', 'comuna': 'TextEdit', 'longitud': 'TextEdit', 'permitir_n': 'TextEdit', 'carteleria': 'TextEdit', });
lyr_NormativaCalle_8.set('fieldImages', {'id': 'TextEdit', 'version': 'TextEdit', 'operation': 'TextEdit', 'name': 'TextEdit', 'zone': 'TextEdit', 'rates': 'TextEdit', 'no_from': 'TextEdit', 'no_to': 'TextEdit', 'street': 'TextEdit', 'side': 'TextEdit', 'rule': 'TextEdit', 'stage': 'TextEdit', 'street_no': 'TextEdit', 'total_spac': 'TextEdit', 'reserved_s': 'TextEdit', 'list_space': 'TextEdit', 'no': 'TextEdit', 'numeration': 'TextEdit', 'tipo_c': 'TextEdit', 'sentido': 'TextEdit', 'id_normati': 'TextEdit', 'cod_street': 'TextEdit', 'acarreo': 'TextEdit', 'comuna': 'TextEdit', 'longitud': 'TextEdit', 'carteleria': 'TextEdit', });
lyr_Comunas_3.set('fieldLabels', {'qc_id': 'no label', 'barrios': 'no label', 'perimetro': 'no label', 'area': 'no label', 'comunas': 'no label', 'id': 'no label', 'objeto': 'no label', 'numero': 'no label', });
lyr_Calles_4.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'codigo': 'no label', 'nomoficial': 'no label', 'alt_izqini': 'no label', 'alt_izqfin': 'no label', 'alt_derini': 'no label', 'alt_derfin': 'no label', 'nomanter': 'no label', 'nom_mapa': 'no label', 'tipo_c': 'no label', 'long': 'no label', 'sentido': 'no label', 'cod_sent': 'no label', 'observa': 'no label', 'ciclo_obse': 'no label', 'red_jerarq': 'no label', 'red_tp': 'no label', 'comuna': 'no label', 'com_par': 'no label', 'com_impar': 'no label', 'barrio': 'no label', 'barrio_par': 'no label', 'barrio_imp': 'no label', });
lyr_Colectivos_5.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'linea': 'no label', 'recorrido': 'no label', 'sentido': 'no label', 'l_r_s': 'no label', 'modalidad': 'no label', 'jurisdicci': 'no label', 'long_kmp07': 'no label', 'long_caba': 'no label', 'porc_caba': 'no label', 'long_mtb': 'no label', 'porc_mtb': 'no label', 'l_flores': 'no label', 'p_flores': 'no label', 'l_pacif': 'no label', 'p_pacif': 'no label', 'l_jbjus': 'no label', 'p_jbjus': 'no label', 'l_9jul': 'no label', 'p_9jul': 'no label', 'l_bajo': 'no label', 'p_bajo': 'no label', 'l_mat': 'no label', 'p_mat': 'no label', 'l_nor': 'no label', 'p_nor': 'no label', 'l_rut8': 'no label', 'p_rut8': 'no label', 'l_scru': 'no label', 'p_scru': 'no label', 'l_smar': 'no label', 'p_smar': 'no label', 'l_sroc': 'no label', 'p_sroc': 'no label', 'long_au': 'no label', 'porc_au': 'no label', 'entidad_su': 'no label', 'linea_sube': 'no label', 'l_r': 'no label', 'desde': 'no label', 'hasta': 'no label', 'georrefe_o': 'no label', });
lyr_Anchocalzada_6.set('fieldLabels', {'qc_id': 'no label', 'sm': 'no label', 'id': 'no label', 'codigo': 'no label', 'nomoficial': 'no label', 'alt_izqini': 'no label', 'alt_izqfin': 'no label', 'alt_derini': 'no label', 'alt_derfin': 'no label', 'nombre_geo': 'no label', 'ancho': 'inline label', });
lyr_NormativaAvenida_7.set('fieldLabels', {'id': 'no label', 'version': 'no label', 'operation': 'no label', 'name': 'no label', 'remarks': 'no label', 'zone': 'no label', 'rates': 'no label', 'no_from': 'no label', 'no_to': 'no label', 'street': 'no label', 'side': 'no label', 'rule': 'inline label', 'stage': 'no label', 'street_no': 'no label', 'total_spac': 'no label', 'reserved_s': 'no label', 'list_space': 'no label', 'no': 'no label', 'rate_space': 'no label', 'numeration': 'no label', 'tipo_c': 'no label', 'sentido': 'no label', 'id_normati': 'no label', 'cod_street': 'no label', 'acarreo': 'no label', 'comuna': 'no label', 'longitud': 'no label', 'permitir_n': 'no label', 'carteleria': 'no label', });
lyr_NormativaCalle_8.set('fieldLabels', {'id': 'no label', 'version': 'no label', 'operation': 'no label', 'name': 'no label', 'zone': 'no label', 'rates': 'no label', 'no_from': 'no label', 'no_to': 'no label', 'street': 'no label', 'side': 'no label', 'rule': 'inline label', 'stage': 'no label', 'street_no': 'no label', 'total_spac': 'no label', 'reserved_s': 'no label', 'list_space': 'no label', 'no': 'no label', 'numeration': 'no label', 'tipo_c': 'no label', 'sentido': 'no label', 'id_normati': 'no label', 'cod_street': 'no label', 'acarreo': 'no label', 'comuna': 'no label', 'longitud': 'no label', 'carteleria': 'no label', });
lyr_NormativaCalle_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});