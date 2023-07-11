import React from "react";
import {useState} from "react"
export default function CardShow({data,findCount}){
    const[check,setcheck]=useState(true)
    function checked(){
        findCount(data,check)
        setcheck(check => !check)
    }
    return(
    <div className="col mb-5">
    <div className="card h-80">
        <img className="card-img-top" src={data.src} alt={data.name} />
        <div className="card-body p-4">
            <div className="text-center">  
                <h5 className="fw-bolder">{data.name}</h5>
                <div className="d-flex justify-content-center small text-warning mb-2">
                    {/* inside to have again one array so again iteration here needs */}
                    {data.stars.map((b,i) =>(
                    <div key={`star-${i}`} className={b.star ? "bi-star-fill" : ""} />
                    ))}
                </div>  
               {data.prize}
            </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a id="add" className="btn btn-outline-dark mt-auto" onClick={checked}>{check ? "Add to card":"Remove to card"}</a></div>
        </div>
    </div>
</div>
)}