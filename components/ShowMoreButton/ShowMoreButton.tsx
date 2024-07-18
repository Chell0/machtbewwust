import Link from "next/link";

type ShowMoreButtonProps = {
    href: string;
    label: string;
};

export default function ShowMoreButton({ href, label }: ShowMoreButtonProps) {
    return (
        <>
            <div className="p-6">
                <div
                    className={`flex flex-row items-end justify-end md:mr-40 sm:mr-38`}
                >
                    <Link
                        href={href}
                        className=" hover:text-stone-600 text-orange-600 font-bold text-lg"
                    >
                        {label}
                    </Link>
                </div>
            </div>
        </>
    );
}
