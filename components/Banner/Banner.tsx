import Image from 'next/image';

export default function Banner() {
    return (
        <>

            <div className="relative rounded-xl shadow-xl">
                <Image
                    src="/machtbewusst.png"
                    alt="Banner Image"
                    width={1020}
                    height={572}
                    className="object-cover object-center rounded-xl overflow-hidden"
                    quality={100}
                    style={{ maxHeight: `480px` }}
                />
            </div>

        </>
    );
};
