import React from "react";

export default function Paginator({ page, setPage, lastPage }) {
    return (
        <footer className="flex gap-8 place-content-between mt-24">
            <button
                className="px-8 py-4 max-sm:p-5 max-sm:size-[3rem] flex place-content-center place-items-center rounded-xl bg-primary text-white enabled:font-bold disabled:bg-gray-400 disabled:text-gray-300"
                disabled={page == 1}
                onClick={() => setPage((previousValue) => previousValue - 1)}
            >
                <p className="max-sm:hidden">Previous</p>
                <p className="sm:hidden">{"<"}</p>
            </button>
            <div className="flex gap-4">
                {new Array(lastPage).fill(null).map((_, i) => (
                    <button
                        key={i}
                        data-selected={i + 1 == page}
                        className="aspect-square rounded-xl size-[3rem] bg-gray-200 text-gray-500 [&:is(:hover,:focus-within,[data-selected=true])]:bg-primary [&:is(:hover,:focus-within,[data-selected=true])]:text-white [&:is(:hover,:focus-within,[data-selected=true])]:font-bold transition-all duration-300"
                        onClick={() => setPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <button
                className="px-8 py-4 max-sm:p-5 max-sm:size-[3rem] flex place-content-center place-items-center rounded-xl bg-primary text-white enabled:font-bold disabled:bg-gray-400 disabled:text-gray-300"
                disabled={page == lastPage || lastPage == 0}
                onClick={() => setPage((previousValue) => previousValue + 1)}
            >
                <p className="max-sm:hidden">Next Page</p>
                <p className="sm:hidden">{">"}</p>
            </button>
        </footer>
    );
}
