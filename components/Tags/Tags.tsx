import { useState } from "react";

export default function Tags() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
        setIsDropdownOpen(false);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="hidden md:flex flex-wrap gap-4 mb-4 mt-20">
                <button
                    onClick={() => handleTagClick(null)}
                    className={`
                        ${selectedTag === null
                            ? "bg-orange-500 text-white"
                            : "bg-white text-orange-500"
                        } rounded-lg shadow-xl py-1 px-2`}
                >
                    View All
                </button>
                <button
                    className={`capitalize italic text-sm rounded-lg shadow-xl py-1 px-2`}
                >
                    # title
                </button>
            </div>
            <div className="md:hidden mb-4">
                <button
                    onClick={handleDropdownToggle}
                    className="bg-white text-orange-500 py-2 px-4 rounded-lg w-full text-left "
                >
                    {selectedTag ? selectedTag : "Select Tag"}
                </button>
                {/* MobileView Menu*/}
                {isDropdownOpen && (
                    <div className="bg-white border rounded-md mt-2 shadow-lg">
                        <button
                            onClick={() => handleTagClick(null)}
                            className={`block w-full text-left px-4 py-2 ${selectedTag === null ? "bg-orange-500 text-white" : "bg-gray-200 text-orange-600"}`}
                        >
                            View All
                        </button>
                        <button
                            className={`block w-full text-left capitalize px-4 py-2`}
                        >
                            # title
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
