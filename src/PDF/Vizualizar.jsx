import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./Document.jsx";

export function Vizualizar() {
    return (
        <div style={{ minHeight: "100vh" }}>

            <PDFViewer style={{ width: "100%", height: "100vh" }}>
                <MyDocument/>
            </PDFViewer>
        </div>
    )
}

