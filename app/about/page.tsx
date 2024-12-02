import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

export default function Page() {
    return <>

        <div className="container py-4">
            <div className="row">

                <Header />
                <Nav />

                <div className="col-9">
                <h1>How did it start?</h1>
                    <p>
                    Pilates takes its name from Joseph Pilates. 
                    </p>

                    <p>
                    A German-born emigré to Britain and then America, he devised the Pilates method as a new approach to exercise and body-conditioning in the early decades of the last century. His method included the use of equipment referred to by him as: apparatus. Perhaps the best known piece of equipment is the Pilates reformer, which is in use in the Pilates Central studio today.
                    </p>
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                   
                </div>

            </div>
        </div>

    </>
}