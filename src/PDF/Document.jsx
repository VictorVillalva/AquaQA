import { Page, Text, Document, Image, View, Font, StyleSheet} from '@react-pdf/renderer';

import LogoEmpresa from '../assets/Images/AquaQA.jpg';
import rectangulo from  '../assets/Images/AzulRectangular.jpg';

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});
// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    Header:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: "5%"
    },
    Logo: {
        width:'175px',
    },
    title: {
        fontSize: "2vh",
        fontFamily: "Oswald",
        fontWeight: "bold",
        color: "#3CC0C9"
    },
    subtitle: {
        fontSize: "1.4vh",
        color: "#464646"
    },
    txtContenido: {
        paddingTop: "1vh",
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        width: "90%"
    },
    subtitle2: {
        paddingBottom: ".1vh",
        fontSize: "1.9vh",
        color: "#464646",
        fontWeight: "bold"
    },
    rectaguloAzul: {
        paddingBottom: ".5vh",
        width: "2vh"
    },
    contenido: {
        paddingTop: "5vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    tablaTamaño: {
        width: "95%"
    },
    table: { 
        display: "table", 
        width: "auto", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderRightWidth: 0, 
        borderBottomWidth: 0 
    }, 
    tableRow: { 
        margin: "auto", 
        flexDirection: "row" 
    }, 
    tableColTitle: { 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        width: "11.1%", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0,
        backgroundColor: "#3CC0C9"
    }, 
    tableCellTitle: {
        margin: "auto", 
        marginTop: "1vh",
        marginBottom: "1vh",
        fontSize: "1vh",
        fontFamily: "Oswald",
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    tableCellTitle3: {
        margin: "auto", 
        marginBottom: "1vh",
        fontSize: "1vh",
        fontFamily: "Oswald",
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    tableCellTitle2: {
        margin: "auto", 
        marginTop: "1vh",
        fontSize: "1vh",
        fontFamily: "Oswald",
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    tableCol: { 
        width: "11.1%", 
        borderStyle: "solid", 
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0 
    },
    tableCell: { 
        margin: "auto", 
        marginTop: "1vh", 
        marginBottom: "1vh",
        fontSize: "1vh" 
    }

});
// Create Document Component
//Div = View
// Etiquetas Texto = text
const MyDocument = () => {
    //Los nombre lo extraigo del Back-End   
    // const name = localStorage.getItem('nombre')
    // const lastname=localStorage.getItem('apellido')
    return(
        <Document >
            <Page size="A4">
                <View style={styles.Header}>
                    <Image src={LogoEmpresa} style={styles.Logo}/>
                </View>
                <View style={styles.Header}>
                    <Text style={styles.title}>REPORTE DE GENERAL</Text>
                    <Text style={styles.subtitle}>Nombre de la persona</Text>
                    <Text style={styles.subtitle}>Correo Electronico</Text>
                </View>
                <View style={styles.contenido}>
                    <View style={styles.txtContenido}>
                        <Text style={styles.subtitle2}>ANALISIS GENERAL (Dia)</Text>
                        <Image src={rectangulo} style={styles.rectaguloAzul}/>
                    </View>
                    <View style={styles.tablaTamaño}>
                        <View style={styles.table}> 
                                <View style={styles.tableRow}> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>No.</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Limite  Superior</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Limite Inferior</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Frecuencia</Text> 
                                    </View>
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Marca de Clase</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Frecuencia</Text>
                                        <Text style={styles.tableCellTitle3}>Acumulada</Text> 
                                    </View>
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Frecuencia</Text> 
                                        <Text style={styles.tableCellTitle3}>Complementaria</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Limite Inferior</Text>
                                        <Text style={styles.tableCellTitle3}>Exacto</Text>  
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Limite Superior</Text>
                                        <Text style={styles.tableCellTitle3}>Exacto</Text>  
                                    </View>   
                                </View>
                                <View style={styles.tableRow}> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>1</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View>
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>0000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                </View> 
                        </View>
                    </View>
                </View>
                <View style={styles.separador}></View>
                <View style={styles.contenido}>
                    <View style={styles.txtContenido}>
                        <Text style={styles.subtitle2}>ANALISIS GENERAL (Semanal)</Text>
                        <Image src={rectangulo} style={styles.rectaguloAzul}/>
                    </View>
                    <View style={styles.tablaTamaño}>
                        <View style={styles.table}> 
                                <View style={styles.tableRow}> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>No.</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Limite  Superior</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Limite Inferior</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Frecuencia</Text> 
                                    </View>
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Marca de Clase</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Frecuencia</Text>
                                        <Text style={styles.tableCellTitle3}>Acumulada</Text> 
                                    </View>
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Frecuencia</Text> 
                                        <Text style={styles.tableCellTitle3}>Complementaria</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Limite Inferior</Text>
                                        <Text style={styles.tableCellTitle3}>Exacto</Text>  
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Limite Superior</Text>
                                        <Text style={styles.tableCellTitle3}>Exacto</Text>  
                                    </View>   
                                </View>
                                <View style={styles.tableRow}> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>1</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View>
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>0000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                </View> 
                        </View>
                    </View>
                </View>
                <View style={styles.separador}></View>
                <View style={styles.contenido}>
                    <View style={styles.txtContenido}>
                        <Text style={styles.subtitle2}>ANALISIS GENERAL (Mensual)</Text>
                        <Image src={rectangulo} style={styles.rectaguloAzul}/>
                    </View>
                    <View style={styles.tablaTamaño}>
                        <View style={styles.table}> 
                                <View style={styles.tableRow}> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>No.</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Limite  Superior</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Limite Inferior</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Frecuencia</Text> 
                                    </View>
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Marca de Clase</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Frecuencia</Text>
                                        <Text style={styles.tableCellTitle3}>Acumulada</Text> 
                                    </View>
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Frecuencia</Text> 
                                        <Text style={styles.tableCellTitle3}>Complementaria</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Limite Inferior</Text>
                                        <Text style={styles.tableCellTitle3}>Exacto</Text>  
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Limite Superior</Text>
                                        <Text style={styles.tableCellTitle3}>Exacto</Text>  
                                    </View>   
                                </View>
                                <View style={styles.tableRow}> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>1</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View>
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>0000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                </View> 
                        </View>
                    </View>
                </View>
                <View style={styles.separador}></View>
                <View style={styles.contenido}>
                    <View style={styles.txtContenido}>
                        <Text style={styles.subtitle2}>ANALISIS GENERAL (Anual)</Text>
                        <Image src={rectangulo} style={styles.rectaguloAzul}/>
                    </View>
                    <View style={styles.tablaTamaño}>
                        <View style={styles.table}> 
                                <View style={styles.tableRow}> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>No.</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Limite  Superior</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Limite Inferior</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Frecuencia</Text> 
                                    </View>
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle}>Marca de Clase</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Frecuencia</Text>
                                        <Text style={styles.tableCellTitle3}>Acumulada</Text> 
                                    </View>
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Frecuencia</Text> 
                                        <Text style={styles.tableCellTitle3}>Complementaria</Text> 
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Limite Inferior</Text>
                                        <Text style={styles.tableCellTitle3}>Exacto</Text>  
                                    </View> 
                                    <View style={styles.tableColTitle}> 
                                        <Text style={styles.tableCellTitle2}>Limite Superior</Text>
                                        <Text style={styles.tableCellTitle3}>Exacto</Text>  
                                    </View>   
                                </View>
                                <View style={styles.tableRow}> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>1</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View>
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>0000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                    <View style={styles.tableCol}> 
                                        <Text style={styles.tableCell}>00000</Text> 
                                    </View> 
                                </View> 
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
    
};

export default MyDocument;