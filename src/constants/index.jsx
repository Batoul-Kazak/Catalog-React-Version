import thumbnail1 from "../assets/images/thumbnail (1).jpg";
import thumbnail2 from "../assets/images/thumbnail (2).jpg";
import thumbnail3 from "../assets/images/thumbnail (3).jpg";
import thumbnail4 from "../assets/images/thumbnail (4).jpg";
import thumbnail5 from "../assets/images/thumbnail (5).jpg";
import thumbnail6 from "../assets/images/thumbnail (6).jpg";
import thumbnail7 from "../assets/images/thumbnail (7).jpg";
import thumbnail8 from "../assets/images/thumbnail (8).jpg";
import thumbnail9 from "../assets/images/thumbnail (9).jpg";
import thumbnail10 from "../assets/images/thumbnail (10).jpg";
import thumbnail11 from "../assets/images/thumbnail (11).jpg";
import thumbnail12 from "../assets/images/thumbnail (12).jpg";
import thumbnail13 from "../assets/images/thumbnail (13).jpg";
import thumbnail14 from "../assets/images/thumbnail (14).jpg";
import thumbnail15 from "../assets/images/thumbnail (15).jpg";
import thumbnail16 from "../assets/images/thumbnail (16).jpg";
import thumbnail17 from "../assets/images/thumbnail (17).jpg";
import thumbnail18 from "../assets/images/thumbnail (18).jpg";
import thumbnail19 from "../assets/images/thumbnail (19).jpg";
import thumbnail20 from "../assets/images/thumbnail (20).jpg";
import thumbnail21 from "../assets/images/thumbnail (21).jpg";
import thumbnail22 from "../assets/images/thumbnail (22).jpg";
import thumbnail23 from "../assets/images/thumbnail (23).jpg";
import thumbnail24 from "../assets/images/thumbnail (24).jpg";
import thumbnail25 from "../assets/images/thumbnail (25).jpg";
import thumbnail26 from "../assets/images/thumbnail (26).jpg";
import thumbnail27 from "../assets/images/thumbnail (27).jpg";
import thumbnail28 from "../assets/images/thumbnail (28).jpg";
import thumbnail29 from "../assets/images/thumbnail (29).jpg";
import thumbnail30 from "../assets/images/thumbnail (30).jpg";
import thumbnail31 from "../assets/images/thumbnail (31).jpg";
import thumbnail32 from "../assets/images/thumbnail (32).jpg";

import TwitterIcon from "../assets/icons/TwitterIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import SnapchatIcon from "../assets/icons/SnapchatIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";

export const THUMBNAILS = [
    { src: thumbnail1, name: "black cat" },
    { src: thumbnail2, name: "nature mountains trees" },
    { src: thumbnail3, name: "city dawn buildings" },
    { src: thumbnail4, name: "city street lights" },
    { src: thumbnail5, name: "maps papers" },
    { src: thumbnail6, name: "design sophistication" },
    { src: thumbnail7, name: "nature mountains trees" },
    { src: thumbnail8, name: "brown cat" },
    { src: thumbnail9, name: "see shore water" },
    { src: thumbnail10, name: "breathe word leaves" },
    { src: thumbnail11, name: "cup coffee table books" },
    { src: thumbnail12, name: "lighter fire dark" },
    { src: thumbnail13, name: "grass field flowers" },
    { src: thumbnail14, name: "books pen ink photos" },
    { src: thumbnail15, name: "nature water lake trees" },
    { src: thumbnail16, name: "leaves simple" },
    { src: thumbnail17, name: "flowers hand grass field" },
    { src: thumbnail18, name: "black white cat kitten" },
    { src: thumbnail19, name: "nature raven night sky" },
    { src: thumbnail20, name: "moon phases dark" },
    { src: thumbnail21, name: "skull dark simple" },
    { src: thumbnail22, name: "brown cat hand" },
    { src: thumbnail23, name: "black white cat" },
    { src: thumbnail24, name: "nature hills greens" },
    { src: thumbnail25, name: "nature mountains snows" },
    { src: thumbnail26, name: "city buildings sky" },
    { src: thumbnail27, name: "hands darkness dirty" },
    { src: thumbnail28, name: "flowers grass field" },
    { src: thumbnail29, name: "nature hills mountains greens" },
    { src: thumbnail30, name: "nature sky greens cliff" },
    { src: thumbnail31, name: "white cat kitten hand" },
    { src: thumbnail32, name: "art simple dark" },
];

export const PAGE_LINKS = ["photos", "videos", "about", "contact"];
export const OUR_LINKS = [
    "advertisement",
    "support",
    "our_company",
    "contact",
    "terms_of_use",
    "privacy_policy",
];

export const VIDEO_PREVIEWS = new Array(32).fill(null).map((_, i) => ({
    name: THUMBNAILS[i].name,
    thumbnail: THUMBNAILS[i].src,
    alt: `The thumbnail of the video (${i + 1}), showing ${
        THUMBNAILS[i].name
    }.`,
    views: Math.floor(Math.random() * 100_001),
    date: new Date(Date.now() + Math.random() * 1000_000_000).toDateString(),
}));

export const SOCIAL_MEDIA = [
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    SnapchatIcon,
];
