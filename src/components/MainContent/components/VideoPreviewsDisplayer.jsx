import React from "react";
import ThumbnailCard from "./ThumbnailCard";

export default function VideoPreviewsDisplayer({ search, videoPreviews }) {
    if (videoPreviews.length == 0) {
        return (
            <main className="min-h-[40dvh] flex place-content-center place-items-center">
                <p className="text-lg">
                    {search != null && search.trim() != ""
                        ? `There's no data related to "${search}"`
                        : "There's no data yet"}
                </p>
            </main>
        );
    }

    return (
        <main className="grid grid-cols-auto-fill-[16rem] gap-8 [&:has(>div>img:hover)>div>img:not(:hover)]:scale-90">
            {videoPreviews.map((videoPreview, i) => (
                <ThumbnailCard
                    key={i}
                    alt={videoPreview.alt}
                    date={videoPreview.date}
                    views={videoPreview.views}
                    src={videoPreview.thumbnail}
                />
            ))}
        </main>
    );
}
