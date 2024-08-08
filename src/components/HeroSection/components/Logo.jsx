import React from "react";
import VideoIcon from "../../../assets/icons/VideoIcon";

export default function Logo() {
    return (
        <div className="flex gap-4 text-primary place-items-center">
            <VideoIcon className="size-6" />
            <h1 className="text-xl font-semibold">Catalog</h1>
        </div>
    );
}
