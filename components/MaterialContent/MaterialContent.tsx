import Link from "next/link";
import {useState, useEffect} from "react";
import {PortableText} from "@portabletext/react";
import {fetchMaterialAbout} from "@/app/lib/fetchMaterialAbout";


export default function MaterialContent() {
    const [materialAbout, setMaterialAbout] = useState<{ title: string; body: any[] }>({title: "", body: []});

    useEffect(() => {
        (async () => {
            const aboutData = await fetchMaterialAbout();
            if (aboutData) {
                setMaterialAbout(aboutData);
            }
        })();
    }, []);

    return (
        <div className="bg-white p-5 m-1 rounded-xl shadow-lg items-center justify-center mt-10">
            <h1 className="text-orange-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-3">{materialAbout?.title}</h1>
            <div className="text-gray-600 text-left text-md p-3">
                <PortableText
                    value={materialAbout.body}
                    components={{
                        marks: {
                            link: ({children, value}) => (
                                <Link href={value.href} target="_blank" rel="noopener noreferrer"
                                      className="text-orange-500 font-semibold">{children}</Link>
                            ),
                        },
                    }}
                />
            </div>
        </div>
    );
}
