import Logo from "./components/Logo";
import React, { useState } from "react";
import { PAGE_LINKS } from "../../constants";
import NavigationBar from "./components/NavigationBar";
import { SearchIcon } from "../../assets/icons/SearchIcon";

export default function HeroSection({
    search: _search,
    setSearch: _setSearch,
}) {
    const [search, setSearch] = useState(_search);

    return (
        <>
            <header className="flex place-content-between gap-4 px-8 py-6 sticky top-0 z-10 bg-white shadow-xl">
                <Logo />
                <NavigationBar links={PAGE_LINKS} />
            </header>
            <main className="flex place-content-center place-items-center h-[60dvh] bg-[url(/src/assets/images/hero_wallpaper.jpg)] bg-center bg-cover">
                <div className="flex w-1/3 bg-green-300 rounded-full overflow-hidden">
                    <input
                        className="w-full px-6 text-primary"
                        type="search"
                        placeholder="search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) =>
                            e.key == "Enter" && _setSearch(search)
                        }
                    />
                    <button
                        className="bg-primary text-white px-10 py-4 max-sm:p-4"
                        onClick={() => _setSearch(search)}
                    >
                        <SearchIcon className="size-6 max-sm:size-4" />
                    </button>
                </div>
            </main>
        </>
    );
}
