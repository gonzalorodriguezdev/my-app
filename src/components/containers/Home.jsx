import React from "react";
import Cards from "../dumbs/Cards";
import {connect} from "react-redux";
import { getPersonajes } from "../../redux/actions";
import { useEffect } from "react";

function mapStateToProps(state){
    return{
        personajes: state.personajes,
    }
}


function Home(props){
    console.log("personajes", props)
    useEffect(()=>{
        props.getPersonajes();
        console.log("obtuve los pj")
    }, []);

    
    return (
        <div className="container">
            <Cards personajes={props.personajes}/>
        </div>
    )
}

export default connect(mapStateToProps, { getPersonajes })(Home);