import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/accordion';

const AccordionCard = () => {
  const dataFooter = [
    {
      title: 'Bagaimana kerahasiaan data saya?',
      desc: 'Tidak perlu khawatir, privasi dan kerahasiaan Anda adalah prioritas kami. Segala data dan identitas hanya digunakan untuk kepentingan konseling. ',
    },
    {
      title: 'Kenapa saya harus membuat janji dulu?',
      desc: 'Sesi konseling akan dilakukan sesuai dengan kesepakatan jadwal bersama dengan Konselor dan dapat memilih waktu terbaik untuk konseling sehingga Anda dan Konselor sudah benar-benar siap saat melakukan konseling.',
    },
    {
      title: 'Masalah apa saja yang bisa saya ceritakan/konsultasi?',
      desc: 'Semua perasaan dan masalah yang sedang kamu hadapi itu valid. Oleh karena itu, jangan ragu untuk menceritakan apa pun yang kamu rasakan serta dengan berbagai topik keahlian dan pengalaman. Kamu bisa cari dan pilih sesuai kebutuhan.',
    },
  ];
  return (
    <div className="max-w-3xl py-10 px-5 mx-auto container">
      <h1 className="text-center text-color-palette-5 font-bold text-base lg:text-3xl lg:mb-6">
        Frequently Asked Question
      </h1>
      <Accordion allowToggle className="divide-y">
        {dataFooter.map((item) => (
          <AccordionItem key={item.title}>
            <AccordionButton className="py-4 px-2 w-full flex flex-row justify-between items-center text-color-palette-5 lg:text-xl">
              <p className="w-full text-start">{item.title}</p>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className="text-color-palette-5 px-2 py-2">
              {item.desc}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionCard;
