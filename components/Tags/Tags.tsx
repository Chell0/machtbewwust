import { useState } from "react";
import { TagsProps } from "@/app/lib/interface";

export default function Tags({ onTagSelect, tags }: TagsProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
        onTagSelect(tag);
        setIsDropdownOpen(false);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const buttonStyles = (isSelected: boolean) =>
        `capitalize italic text-sm rounded-lg shadow-xl py-1 px-2 ${isSelected ? "bg-orange-500 text-white" : "bg-white text-orange-600"
        }`;

    return (
        <div>
            {/* Desktop View */}
            <div className="hidden md:flex flex-wrap gap-4 mb-4 mt-20">
                <button
                    onClick={() => handleTagClick(null)}
                    className={buttonStyles(selectedTag === null)}
                >
                    View All
                </button>
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => handleTagClick(tag.title)}
                        className={buttonStyles(selectedTag === tag.title)}
                    >
                        #{tag.title}
                    </button>
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden mb-4">
                <button
                    onClick={handleDropdownToggle}
                    className="bg-white text-orange-500 py-2 px-4 rounded-lg w-full text-left"
                >
                    {selectedTag ? selectedTag : "Select Tag"}
                </button>
                {isDropdownOpen && (
                    <div className="bg-white border rounded-md mt-2 shadow-lg">
                        <button
                            onClick={() => handleTagClick(null)}
                            className={`block w-full text-left px-4 py-2 ${selectedTag === null ? "bg-orange-500 text-white" : "bg-gray-200 text-orange-600"
                                }`}
                        >
                            View All
                        </button>
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => handleTagClick(tag.title)}
                                className={`block w-full text-left capitalize px-4 py-2 ${selectedTag === tag.title ? "bg-orange-500 text-white" : "text-orange-500"
                                    }`}
                            >
                                #{tag.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
