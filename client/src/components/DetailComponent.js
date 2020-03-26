import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DetailComponent = ({id}) =>{

    const [detailState, setDetailState] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res => {
                setDetailState(res.data)
            })
            .catch(err => console.log(err))
    },[])


    return(
        <div>
            <h1>DETAILS</h1>
            <h3>Title: {detailState.title}</h3>
            <h3>Price: {detailState.price}</h3>
            <h3>Description: {detailState.description}</h3>
        </div>
    )
}
export default DetailComponent;