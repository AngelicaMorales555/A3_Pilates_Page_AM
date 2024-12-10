import React from "react";
import Header from "./components/header";
import Nav from "./components";
import './globalcss.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Page() {
    return <>

        <div className="container py-4">
            <div className="row">

                <Header />
                <Nav />

                <div className="col-9">
                    
                </div>

            </div>
        </div>


        

    </>
}