import React from "react";
import pilatesImage from "./media/pilates_studio.jpg"; // Ajusta la ruta si es necesario

export default function Header() {
    return <>
        <div className="col-12 mb-4">

        <img className="d-block w-100 mb-3" src="images/Frame 2.png" />
            <h1>The Art of Pilates</h1>
            <p className="small m-0">
            Discover the benefits of Pilates – from strengthening your core to improving flexibility and posture.
            </p>
        </div>
    </>
}