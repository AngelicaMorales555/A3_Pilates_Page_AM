import Link from "next/link";
import React from "react";

export default function Nav() {
    return <>
        <div className="col-3">
            <div className="list-group">
                <Link href="/" className="list-group-item list-group-item-action">
                    Welcome 
                </Link>
                <Link href="/about" className="list-group-item list-group-item-action">
                    About us
                </Link>
                <Link href="/contact" className="list-group-item list-group-item-action">
                    Classes
                </Link>
                <Link href="/contact" className="list-group-item list-group-item-action">
                    Packages
                </Link>
                <Link href="/contact" className="list-group-item list-group-item-action">
                    Contact
                </Link>
            </div>
            <p className="small text-danger text-center mt-3 text-warning">
                Coffee: the magic potion that turns morning mayhem into midday clarity.
            </p>
        </div>
    </>
}