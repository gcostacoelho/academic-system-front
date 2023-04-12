import * as Dialog from '@radix-ui/react-dialog';

export function DialogBox(props) {
    return (
        <Dialog.Root>

            <Dialog.Trigger>
                {props.trigger}
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay />

                <Dialog.Content className='fixed bg-[#6b6b6b] py-8 px-10 text-black top-1/2 left-[800px] -translate-x-1/2 -translate-y-1/2 rounded-lg w-[700px] shadow-lg shadow-black/25'>
                    <Dialog.Title />
                    {props.content}
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    );
};