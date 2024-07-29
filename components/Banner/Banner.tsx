import Image from 'next/image';

export default function Banner() {
    return (
        <div className="relative rounded-xl shadow-xl overflow-hidden max-h-[480px]">
            <Image
                src="/machtbewusst.png"
                alt="Banner Image"
                width={1020}
                height={572}
                className="object-cover object-center"
                quality={100}
            />
        </div>
    );
}
