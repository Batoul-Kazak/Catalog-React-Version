import React from "react";

export default function ThumbnailCard({ src, alt, date, views }) {
    return (
        <div className="flex flex-col gap-4 text-gray-400">
            <img
                className="aspect-[1.5] object-cover shadow-[10px_10px_10px_#00000050] transition-all duration-500 cursor-pointer"
                src={src}
                alt={alt}
            />
            <div className="flex gap-2 place-content-between">
                <p>{date}</p>
                <p>{views} views</p>
            </div>
        </div>
    );
}
