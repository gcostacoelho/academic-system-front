import * as AlertDialog from '@radix-ui/react-alert-dialog';

export function ConfirmaExclusao(props) {
    return (
        <AlertDialog.Root>

            <AlertDialog.Trigger>
                {props.trigger}
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
                <AlertDialog.Overlay className='bg-colorBackgroundModal data-[state=open]:animate-overlayShow fixed inset-0'/>
                
                <AlertDialog.Content className='fixed bg-[#ffffff] py-8 px-10 text-black top-1/2 left-[800px] -translate-x-1/2 -translate-y-1/2 rounded-lg w-[700px] shadow-lg shadow-black/25'>

                    <AlertDialog.Title className="m-0 text-[17px] font-semibold">
                        Você tem certeza?
                    </AlertDialog.Title>

                    <AlertDialog.Description>
                        Essa ação não pode ser desfeita
                    </AlertDialog.Description>

                    <div className="flex justify-between mt-5">
                        <AlertDialog.Cancel>
                            <button className="bg-colorBtnAlert p-2 rounded text-[#ffffff] font-medium">
                                Cancelar
                            </button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <button className="bg-colorBtnDanger p-2 rounded text-[#ffffff] font-medium">
                                Deletar
                            </button>
                        </AlertDialog.Action>
                    </div>
                    
                </AlertDialog.Content>
            </AlertDialog.Portal>

        </AlertDialog.Root>
    );
}