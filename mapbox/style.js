
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Granicegminy_0": {
            "type": "geojson",
            "data": json_Granicegminy_0
        }
                    ,
        "Granicemiastiwsi_1": {
            "type": "geojson",
            "data": json_Granicemiastiwsi_1
        }
                    ,
        "Zabudowa_2": {
            "type": "geojson",
            "data": json_Zabudowa_2
        }
                    ,
        "Lasy_3": {
            "type": "geojson",
            "data": json_Lasy_3
        }
                    ,
        "Rzeki_4": {
            "type": "geojson",
            "data": json_Rzeki_4
        }
                    ,
        "Drogi_5": {
            "type": "geojson",
            "data": json_Drogi_5
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Granicegminy_0_0",
            "type": "fill",
            "source": "Granicegminy_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_Granicemiastiwsi_1_0",
            "type": "fill",
            "source": "Granicemiastiwsi_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_Granicemiastiwsi_1_1",
            "type": "symbol",
            "source": "Granicemiastiwsi_1",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'NAZWA'], 'text-size': '12.607142857142854', 'text-font': ['Open Sans Regular']},
            "paint": {'text-halo-width': '3.571428571428571', 'text-halo-color': '#ffffff', 'text-color': '#000000'}
        }
,
        {
            "id": "lyr_Zabudowa_2_0",
            "type": "fill",
            "source": "Zabudowa_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#a04d00'}
        }
,
        {
            "id": "lyr_Lasy_3_0",
            "type": "fill",
            "source": "Lasy_3",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#94d180'}
        }
,
        {
            "id": "lyr_Rzeki_4_0",
            "type": "line",
            "source": "Rzeki_4",
            "layout": {},
            "paint": {'line-width': 1.6428571428571428, 'line-opacity': 1.0, 'line-color': '#91a9ff'}
        }
,
        {
            "id": "lyr_Drogi_5_0",
            "type": "line",
            "source": "Drogi_5",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'KLASADROGI'], 'dojazdowa'], 3.7857142857142856, ['==', ['get', 'KLASADROGI'], 'dojazdowa'], 3.071428571428571, ['==', ['get', 'KLASADROGI'], 'glowna'], 3.7857142857142856, ['==', ['get', 'KLASADROGI'], 'glowna'], 3.071428571428571, ['==', ['get', 'KLASADROGI'], 'glownaRuchuPrzyspieszonego'], 3.7857142857142856, ['==', ['get', 'KLASADROGI'], 'glownaRuchuPrzyspieszonego'], 3.071428571428571, ['==', ['get', 'KLASADROGI'], 'inna'], 3.7857142857142856, ['==', ['get', 'KLASADROGI'], 'inna'], 3.071428571428571, ['==', ['get', 'KLASADROGI'], 'lokalna'], 3.7857142857142856, ['==', ['get', 'KLASADROGI'], 'lokalna'], 3.071428571428571, ['==', ['get', 'KLASADROGI'], 'zbiorcza'], 3.7857142857142856, ['==', ['get', 'KLASADROGI'], 'zbiorcza'], 3.071428571428571, 0], 'line-opacity': ['case', ['==', ['get', 'KLASADROGI'], 'dojazdowa'], 1.0, ['==', ['get', 'KLASADROGI'], 'dojazdowa'], 1.0, ['==', ['get', 'KLASADROGI'], 'glowna'], 1.0, ['==', ['get', 'KLASADROGI'], 'glowna'], 1.0, ['==', ['get', 'KLASADROGI'], 'glownaRuchuPrzyspieszonego'], 1.0, ['==', ['get', 'KLASADROGI'], 'glownaRuchuPrzyspieszonego'], 1.0, ['==', ['get', 'KLASADROGI'], 'inna'], 1.0, ['==', ['get', 'KLASADROGI'], 'inna'], 1.0, ['==', ['get', 'KLASADROGI'], 'lokalna'], 1.0, ['==', ['get', 'KLASADROGI'], 'lokalna'], 1.0, ['==', ['get', 'KLASADROGI'], 'zbiorcza'], 1.0, ['==', ['get', 'KLASADROGI'], 'zbiorcza'], 1.0, 0], 'line-color': ['case', ['==', ['get', 'KLASADROGI'], 'dojazdowa'], '#000000', ['==', ['get', 'KLASADROGI'], 'dojazdowa'], '#ffffff', ['==', ['get', 'KLASADROGI'], 'glowna'], '#000000', ['==', ['get', 'KLASADROGI'], 'glowna'], '#ffec60', ['==', ['get', 'KLASADROGI'], 'glownaRuchuPrzyspieszonego'], '#000000', ['==', ['get', 'KLASADROGI'], 'glownaRuchuPrzyspieszonego'], '#fb9107', ['==', ['get', 'KLASADROGI'], 'inna'], '#000000', ['==', ['get', 'KLASADROGI'], 'inna'], '#ffffff', ['==', ['get', 'KLASADROGI'], 'lokalna'], '#000000', ['==', ['get', 'KLASADROGI'], 'lokalna'], '#ffffff', ['==', ['get', 'KLASADROGI'], 'zbiorcza'], '#000000', ['==', ['get', 'KLASADROGI'], 'zbiorcza'], '#ffffff', '#ffffff']}
        }
],
}