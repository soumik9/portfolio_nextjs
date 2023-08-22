import React from 'react';
import { GrClose } from 'react-icons/gr'
import { cx } from 'src/hooks/helpers';

export type ModalProps = {
    children: React.ReactNode;
    open: boolean;
    setOpen: (open: boolean) => void;
    title?: string | React.ReactNode;
    modalCss?: string;
};

const Modal = ({ children, open, setOpen, modalCss, title }: ModalProps) => {

    // return
    if (!open) return <></>;

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000000] flex items-center justify-center">

            <div
                className={`absolute top-0 bottom-0 left-0 right-0 bg-[#00000047]`}
                onClick={() => setOpen(false)}
            >
            </div>

            <div className={cx(
                'rounded-[8px] max-h-[95vh] overflow-y-auto no-scrollbar z-[99999] relative bg-secondary xll:w-[1200px] lg:w-[800px] md:w-[700px] w-[375px] scrollbar',
                modalCss
            )}>


                <div className={cx(
                    'flex lg:py-[23px] py-[12px] lg:px-[30px] px-[10px]',
                    title ? 'justify-between items-center border-b border-lightDark border-dashed' : 'justify-end'
                )}>
                    {title ? <p className="text-[20px] text-lightDark font-semibold leading-[24px] cursor-default">
                        {title}
                    </p> : null}

                    <button type='button' onClick={() => setOpen(false)}>
                        <GrClose className='!text-lightDark hover:text-primary trans' />
                    </button>
                </div>

                <div className={`relative lg:px-[30px] px-[10px] text-lightDark`}>
                    {children}
                </div>

            </div>
        </div>
    );
};

export default Modal;