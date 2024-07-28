import Link from "next/link";

export default function NewsLetter() {
    return (
        <>
            <div
                className={`grid grid-rows-2 items-center justify-center max-w-lg px-6 py-4 bg-white shadow-xl rounded-2xl mt-20`}
            >
                <div className={`mt-2`}>
                    <p
                        className={`text-orange-500 text-xl lg:text-2xl md:text-md sm:text-sm font-bold`}
                    >
                        Anmeldung zum Newsletter
                    </p>
                </div>
                <div className={`flex flex-row justify-center items-center mt-5`}>
                    <Link
                        href={`https://39dff525.sibforms.com/serve/MUIFAOZ7L48ggutm_jNF7tYry6C5ZYqVW8siJVL8b884tlY5b1VNz1FhlCnABBVeJNpk5uoeBUwZCxreapwZngQmf7hmmmkeduQwCzNri_t920cVKW9kkgE_S-4s5FxL1vrftWnBNIJFz78O5c5zMtTeZy62Qb3b8Sdq1pZbEVAnVFz9EZXogILY5tfmN-Gk8QEG6IyJldrXKxRr`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-orange-500 hover:bg-gray-500 hover:text-white font-semibold text-white text-md no-underline py-2 px-4 rounded-xl`}
                    >
                        Anmelden
                    </Link>
                </div>
            </div>
        </>
    );
}

