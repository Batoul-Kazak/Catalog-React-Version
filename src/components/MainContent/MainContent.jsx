import React from "react";
import Header from "./components/Header";
import VideoPreviewsDisplayer from "./components/VideoPreviewsDisplayer";
import Paginator from "./components/Paginator";

export default function MainContent({
    page,
    search,
    setPage,
    lastPage,
    videoPreviews,
}) {
    return (
        <main className="flex flex-col gap-8 p-20 text-primary">
            <Header page={page} setPage={setPage} lastPage={lastPage} />
            <VideoPreviewsDisplayer
                search={search}
                videoPreviews={videoPreviews}
            />
            <Paginator page={page} setPage={setPage} lastPage={lastPage} />
        </main>
    );
}
