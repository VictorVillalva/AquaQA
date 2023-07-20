import axios from "axios";
import { addData } from "../slices/TableSlice";

export const chargingTable=()=>{
    return async dispatch=>{
        
        axios.post('https://aquaqa-data-analysis.onrender.com/frecuency-distribution', {
            body:{
                "data" : [1.56,1.56,1.56,1.56,1.56,1.56,1.56,1.56,1.56,1.56]
            }
        })
        .then(({data})=>{
            console.log(data)
            dispatch(
                addData({
                    table: data
                })
            )
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
}