import React from "react";

export default function Header({ page, setPage, lastPage }) {
    return (
        <header className="flex gap-4 place-content-between">
            <h2 className="font-bold text-xl">Latest Videos</h2>
            <div className="flex gap-[1ch]">
                <p>Page</p>
                <input
                    className={`bg-gray-200 text-center pl-2`}
                    type="number"
                    max={lastPage}
                    disabled={lastPage == 0}
                    min={Math.min(1, lastPage)}
                    value={lastPage != 0 ? page : 0}
                    maxLength={lastPage.toString().length}
                    onChange={(e) =>
                        setPage(Math.min(lastPage, Math.max(1, e.target.value)))
                    }
                />
                <p>of {lastPage}</p>
            </div>
        </header>
    );
}
