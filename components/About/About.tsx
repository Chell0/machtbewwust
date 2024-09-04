import {useEffect, useState} from 'react';
import {client} from '@/app/lib/sanityClient';
import {AboutData} from '@/app/lib/interface';


export default function About() {
  const [aboutContent, setAboutContent] = useState<string>('');

  useEffect(() => {
    (async () => {
      const query = `*[_type == "about"][0]{
          content
        }`;
      const result = await client.fetch<AboutData>(query);
      setAboutContent(result.content);
    })();
  }, []);

  return (
      <div className="bg-white p-5 rounded-lg shadow-lg mx-auto w-full max-w-[1017px]">
        <p className="text-gray-600 text-md">{aboutContent}</p>
      </div>
  );
}
