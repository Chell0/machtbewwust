import Link from "next/link";

type ShowMoreButtonProps = {
    href: string;
    label: string;
};

export default function ShowMoreButton({ href, label }: ShowMoreButtonProps) {
    return (
        <div className="p-6">
            <div className="flex justify-end  md:mr-40 sm:mr-38">
                <Link
                    href={href}
                    className="text-orange-600 font-bold text-lg hover:text-stone-600"
                >
                    {label}
                </Link>
            </div>
        </div>
    );
}
