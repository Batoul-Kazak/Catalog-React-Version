import React from "react";
import { OUR_LINKS, SOCIAL_MEDIA } from "../../../constants";

export default function OurLinksDisplayer() {
    return (
        <section className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-8">
                <h3 className="font-bold text-2xl text-primary">Our Links</h3>
                <ul className="grid grid-rows-4 gap-2">
                    {OUR_LINKS.slice(0, 4).map((link, i) => (
                        <li
                            key={i}
                            className="capitalize [&:is(:hover,:focus-within)]:text-primary [&:is(:hover,:focus-within)]:underline transition-all duration-300"
                        >
                            <a href="#">{link.replace(/\_/g, " ")}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                    {SOCIAL_MEDIA.map((SocialMediaIcon, i) => (
                        <button
                            key={i}
                            className="size-10 bg-white rounded-lg flex place-content-center place-items-center [&:is(:hover,:focus-within)]:bg-primary [&:is(:hover,:focus-within)]:text-white transition-all duration-300"
                        >
                            <SocialMediaIcon className="size-6" />
                        </button>
                    ))}
                </div>
                <div>
                    <ul className="grid grid-rows-4 gap-2">
                        <li />
                        <li />
                        {OUR_LINKS.slice(4).map((link, i) => (
                            <li
                                key={i}
                                className="capitalize text-end [&:is(:hover,:focus-within)]:text-primary [&:is(:hover,:focus-within)]:underline transition-all duration-300"
                            >
                                <a href="#">{link.replace(/\_/g, " ")}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grow flex gap-[0.75ch] place-items-end">
                    <p className="text-nowrap">Designed by</p>
                    <a
                        href="https://www.github.com/Batoul-Kazak"
                        className="underline [&:is(:hover,:focus-within)]:text-primary transition-all duration-300 text-nowrap"
                    >
                        Batoul Kazak
                    </a>
                </div>
            </div>
        </section>
    );
}
