import xml.etree.ElementTree as ET
tree = ET.parse('rutas.xml')
root = tree.getroot()


def convert_xml_to_kml(xml_file):
    
    try:
        # Parse the XML file
        tree = ET.parse(xml_file)
        root = tree.getroot()
 
        # Create a new KML document
        
        for ruta in root.iter("ruta"): 
            kml = ET.Element('kml', xmlns="http://www.opengis.net/kml/2.2")
            document = ET.SubElement(kml, 'Document')           
            placemark = ET.SubElement(document, 'Placemark')
            name = ET.SubElement(placemark, 'name')
            name.text = ruta.find('nombreRuta').text
            description = ET.SubElement(placemark, 'description')
            description.text = ruta.find('descripcion').text
            line= ET.SubElement(placemark, 'LineString')
            extrude= ET.SubElement(line, 'extrude')
            extrude.text="1"
            tessellate= ET.SubElement(line, 'tessellate')
            tessellate.text="1"
            altitudeMode= ET.SubElement(line, 'altitudeMode')
            altitudeMode.text="absoluto"
            coordinates=ET.SubElement(line, 'coordinates')
            text=""
            hitos=ruta.findall("hito")
            for hito in hitos:
                altitud=hito.find('coordenadas').find('altitud')
                longitud=hito.find('coordenadas').find('longitud')
                latitud=hito.find('coordenadas').find('latitud')
                text+=longitud+','+latitud+','+altitud+'\n'
            coordinates.text=text
            n=1
            nombre=ruta+n
            kml_tree = ET.ElementTree(kml)
            kml_tree.write(nombre, encoding='utf-8', xml_declaration=True)
            n+=1
        
 
        return True
    except Exception as e:
        print(f"An error occurred: {e}")
        return False
 
# Example usage
xml_file = 'rutas.xml'
 
if convert_xml_to_kml(xml_file):
    print(f"Conversion successful. KML file saved ")
else:
    print("Conversion failed.")