import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

export function DialogBox(props) {
    return (
        <Dialog.Root >

            <Dialog.Trigger>
                {props.trigger}
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='bg-colorBackgroundModal data-[state=open]:animate-overlayShow fixed inset-0' />

                <Dialog.Content className='fixed bg-[#FFFFFF] py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[700px] shadow-lg shadow-black/25'>
                    <Dialog.Title />
                    {props.content}
                    <Dialog.Close>
                        <button
                            className="hover:text-colorBtnDanger focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
                            aria-label="Close"
                        >
                            <X size={32} weight='bold' />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    );
};