import Button from '@components/Button/Button'
import LightDarkCardLayout from '@components/ViewsComp/LightDarkCardLayout/LightDarkCardLayout'
import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import React, { useRef } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { cx } from 'src/hooks/helpers'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'

const contactInfoCard = 'bg-lightDark p-[1.2rem] border-2 border-smartian text-center trans hover:bg-bgDark hover:border-smartian rounded flex flex-col items-center';
const contactInfoCardIcon = 'text-[2rem] mb-2 text-purple';
const contactInfoCardTitle = 'text-primary text-[20px] font-medium';
const contactInfoCardAddInfo = 'my-2 text-purple';
const contactInfoCardSendMsg = 'inline-block text-sm text-secondary';

const Contact: React.FC = () => {

    // refs
    const form = useRef<HTMLFormElement | null>();

    // send emain function
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_y63cj9p', 'template_q86c1pa', form.current, 'yr4eaL11Ynd0jaIXy')
                .then((result) => {
                    toast.success(`Your email has been sent`);
                    form?.current?.reset();
                }, (error) => {
                    toast.error('Something wrong! Please try again.');
                });;
        } else {
            toast.error('Something wrong!');
        }
    };

    return (
        <SectionLayout css='lg:pt-[40px]' id='contactMe'>
            <SectionTop
                subTitle='👌 Get In Touch'
                title='Contact'
                titleSpan='Me'
            />


            <div className='gap-y-4 lg:gap-y-0 grid lg:grid-cols-3 mb-5 gap-x-5'>

                <a href="mailto:soumik.ahammed.9@gmail.com" target="_blank" rel="noreferrer" className={cx(contactInfoCard)}>
                    <MdOutlineEmail className={cx(contactInfoCardIcon)} />
                    <h4 className={cx(contactInfoCardTitle)}>Email</h4>
                    <h5 className={cx(contactInfoCardAddInfo)}>soumik.ahammed.9@gmail.com</h5>
                    <p className={cx(contactInfoCardSendMsg)}>Send a message</p>
                </a>

                <a href="https://m.me/soumik.ahammed.9" target="_blank" rel="noreferrer" className={cx(contactInfoCard)}>
                    <RiMessengerLine className={cx(contactInfoCardIcon)} />
                    <h4 className={cx(contactInfoCardTitle)}>Messenger</h4>
                    <h5 className={cx(contactInfoCardAddInfo)}>Soumik Ahammed</h5>
                    <p className={cx(contactInfoCardSendMsg)}>Send a message</p>
                </a>

                <a href="https://api.whatsapp.com/send?phone=+8801689201370" target="_blank" rel="noreferrer" className={cx(contactInfoCard)}>
                    <BsWhatsapp className={cx(contactInfoCardIcon)} />
                    <h4 className={cx(contactInfoCardTitle)}>Whatsapp</h4>
                    <h5 className={cx(contactInfoCardAddInfo)}>+8801689-201370</h5>
                    <p className={cx(contactInfoCardSendMsg)}>Send a message</p>
                </a>
            </div>

            <LightDarkCardLayout>
                <form className='flex flex-col justify-center gap-[1.2rem]' ref={form as React.RefObject<HTMLFormElement>} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' className='input' required />
                    <input type="text" name='subject' placeholder='Subject' className='input' required />
                    <input type="email" name='email' placeholder='Your Email Address' className='input' required />
                    <textarea name="message" rows={7} placeholder='Your Message' className='textarea' required></textarea>

                    <div className='flex justify-end'>
                        <Button
                            text='Send Message'
                            type='submit'
                        />
                    </div>
                </form>
            </LightDarkCardLayout>


        </SectionLayout>

    )
}

export default Contact