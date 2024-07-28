interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <>
            <div className={`flex justify-center space-x-4 mt-8`}>
                {pages.map((page => (
                    <button key={page} onClick={() => onPageChange(page)}
                        className={`px-4 py-2 rounded-lg shadow-xl ${page === currentPage ? 'bg-white text-orange-400' : 'bg-orange-400 text-white hover:bg-gray-500'}`}>
                        {page}
                    </button>
                )))}
            </div>
        </>
    );
};
