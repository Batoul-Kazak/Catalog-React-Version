import { useState } from "react";
import { VIDEO_PREVIEWS } from "./constants";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import MainContent from "./components/MainContent/MainContent";

export default function App() {
    const PREVIEWS_PER_PAGE = 12;
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState();

    const firstIndex = (page - 1) * PREVIEWS_PER_PAGE;
    const lastIndex = firstIndex + PREVIEWS_PER_PAGE;

    const filteredVideoPreviews = VIDEO_PREVIEWS.filter(FilterSearch);
    const videoPreviews = filteredVideoPreviews.slice(firstIndex, lastIndex);

    const lastPage = Math.ceil(
        filteredVideoPreviews.length / PREVIEWS_PER_PAGE
    );

    function FilterSearch(videoPreview) {
        if (search == null || search.trim() == "") {
            return true;
        }

        return videoPreview.name.includes(search.trim().toLowerCase());
    }

    return (
        <>
            <HeroSection search={search} setSearch={setSearch} />
            <MainContent
                page={page}
                search={search}
                setPage={setPage}
                lastPage={lastPage}
                videoPreviews={videoPreviews}
            />
            <Footer />
        </>
    );
}
