import React from "react";
import CatalogZDisplayer from "./components/CatalogZDisplayer";
import OurLinksDisplayer from "./components/OurLinksDisplayer";

export default function Footer() {
    return (
        <footer className="bg-gray-200 flex place-content-center text-gray-500 gap-32 p-12 flex-wrap">
            <CatalogZDisplayer />
            <OurLinksDisplayer />
        </footer>
    );
}
