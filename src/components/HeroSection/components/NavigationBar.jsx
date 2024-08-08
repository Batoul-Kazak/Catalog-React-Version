import React from "react";

export default function NavigationBar({ links }) {
    return (
        <nav className="flex place-items-center">
            <ul className="flex gap-4">
                {links.map((link, i) => (
                    <li
                        key={i}
                        className="relative [&:is(:hover,:focus-within)>div]:scale-x-100 capitalize"
                    >
                        <a href="#">{link}</a>
                        <div className="absolute -bottom-2 left-0 right-0 h-1 scale-x-0 bg-secondary rounded-full transition-all duration-300" />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
