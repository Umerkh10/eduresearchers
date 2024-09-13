import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import React, { useState } from 'react';

const FaqSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value); // Toggle item
  };

  return (
    <div id='faq' data-aos='fade-down' data-aos-duration="1500" className='mx-auto max-w-screen-xl py-10'>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div data-aos='flip-up'>
          <div className='flex items-center justify-center pt-10'>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className='bg-gradient-to-l from-emerald-50 to-orange-200 dark:bg-gradient-to-r dark:from-orange-700 dark:to-zinc-600 font-semibold rounded-lg px-4 w-[350px] lg:w-[500px] xl:w-[600px] md:w-[600px]'
                  onClick={() => handleToggle('item-1')}
                >
                  Why Should I Hire Your Writer?
                </AccordionTrigger>
                {openItem === 'item-1' && (
                  <AccordionContent className='text-muted-foreground font-semibold pt-3 px-4 w-[350px] md:w-[500px]'>
                    With our writers, you will be able to improve your writing skills. We have professional academic experts do work on your behalf, so you will get help to understand and read assignments efficiently and improve your research and writing skills. As we are covering complex assignments as well so you can also learn to cater to complicated guidelines.
                  </AccordionContent>
                )}
                <AccordionTrigger
                  className='mt-3 bg-gradient-to-l from-emerald-50 to-orange-200 dark:bg-gradient-to-r dark:from-orange-700 dark:to-zinc-600 font-semibold rounded-lg px-4 w-[350px] lg:w-[500px] xl:w-[600px] md:w-[600px]'
                  onClick={() => handleToggle('item-2')}
                >
                  What are your packages for editing services?
                </AccordionTrigger>
                {openItem === 'item-2' && (
                  <AccordionContent className='text-muted-foreground font-semibold pt-3 px-4 w-[350px] md:w-[500px]'>
                    Our packages depend on your requirements, word count, deadline and the technicalities of the subject. Still, we have reasonable packages, as we believe help students, so we designed extremely affordable editing and proofreading services.
                  </AccordionContent>
                )}
                <AccordionTrigger
                  className='mt-3 bg-gradient-to-l from-emerald-50 to-orange-200 dark:bg-gradient-to-r dark:from-orange-700 dark:to-zinc-600 font-semibold rounded-lg px-4 w-[350px] lg:w-[500px] xl:w-[600px] md:w-[600px]'
                  onClick={() => handleToggle('item-3')}
                >
                  Can I collaborate with my assignment writer?
                </AccordionTrigger>
                {openItem === 'item-3' && (
                  <AccordionContent className='text-muted-foreground font-semibold pt-3 px-4 w-[350px] md:w-[500px]'>
                    Yes, you can communicate with your writer any time you want. You can track the progress of your order and send instructions as per the guidelines. We at Mr Assignment appreciate all students sharing details before our writer starts work on your document to maintain accuracy.
                  </AccordionContent>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div data-aos='flip-down'>
          <div className='flex items-center justify-center pt-10'>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger
                  className='bg-gradient-to-l from-emerald-50 to-orange-200 dark:bg-gradient-to-r dark:from-orange-700 dark:to-zinc-600 font-semibold rounded-lg px-4 w-[350px] lg:w-[500px] xl:w-[600px] md:w-[600px]'
                  onClick={() => handleToggle('item-4')}
                >
                  How do you protect students' privacy?
                </AccordionTrigger>
                {openItem === 'item-4' && (
                  <AccordionContent className='text-muted-foreground font-semibold pt-3 px-4 w-[350px] md:w-[500px]'>
                    We at {process.env.NEXT_PUBLIC_NAME} never disclose our customer’s details, id or any information. We take all the information to facilitate you with the secure academic services and strictly adhere to the privacy policy. We understand student privacy concerns, so we are committed to upholding the confidentiality of your details when you avail of our academic services.
                  </AccordionContent>
                )}
                <AccordionTrigger
                  className='mt-3 bg-gradient-to-l from-emerald-50 to-orange-200 dark:bg-gradient-to-r dark:from-orange-700 dark:to-zinc-600 font-semibold rounded-lg px-4 w-[350px] lg:w-[500px] xl:w-[600px] md:w-[600px]'
                  onClick={() => handleToggle('item-5')}
                >
                  Do you offer guaranteed top results?
                </AccordionTrigger>
                {openItem === 'item-5' && (
                  <AccordionContent className='text-muted-foreground font-semibold pt-3 px-4 w-[350px] md:w-[500px]'>
                    We are committed to providing you with the highest quality assignment work. We guarantee to give you results perfectly according to the guidelines to achieve good grades in your degree program. You will be assigned a relevant writer to work on your assignment. No matter the subject, we have skilled writers from various disciplines.
                  </AccordionContent>
                )}
                <AccordionTrigger
                  className='mt-3 bg-gradient-to-l from-emerald-50 to-orange-200 dark:bg-gradient-to-r dark:from-orange-700 dark:to-zinc-600 font-semibold rounded-lg px-4 w-[350px] lg:w-[500px] xl:w-[600px] md:w-[600px]'
                  onClick={() => handleToggle('item-6')}
                >
                  I don’t find my field on your website. Are you still able to do it?
                </AccordionTrigger>
                {openItem === 'item-6' && (
                  <AccordionContent className='text-muted-foreground font-semibold pt-3 px-4 w-[350px] md:w-[500px]'>
                    If you don’t find your subject or field mentioned on our site, that’s not an issue; as we mentioned before, we cater to all disciplines and subjects. We have the most experienced writers from various fields and all are highly qualified from reputed universities to meet your requirements. Whatever your subject, you can hire us to do it for you.
                  </AccordionContent>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div data-aos='zoom-in' className='mt-10'>
        <h2 className='text-3xl text-center font-semibold text-zinc-800 dark:text-zinc-200'>Any Issues Or Questions</h2>
        <p className='text-muted-foreground font-medium pt-2 text-center'>Send us a message, and we’ll reply within seconds!</p>
        <div className='flex justify-center items-center mt-3'>
          <Link href={'#banner'} className='bg-zinc-900 text-white py-4 px-7 rounded-xl dark:bg-zinc-200 font-medium scale-90 hover:scale-95 lg:scale-95 lg:hover:scale-100 transition ease-in duration-200 delay-200 dark:text-zinc-900'>
            Get A Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
