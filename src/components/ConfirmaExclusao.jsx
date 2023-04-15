import * as AlertDialog from '@radix-ui/react-alert-dialog';

export function ConfirmaExclusao(props) {
    return (
        <AlertDialog.Root>

            <AlertDialog.Trigger>
                {props.trigger}
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
                <AlertDialog.Overlay />
                
                <AlertDialog.Content className='fixed bg-[#6b6b6b] py-8 px-10 text-black top-1/2 left-[800px] -translate-x-1/2 -translate-y-1/2 rounded-lg w-[700px] shadow-lg shadow-black/25'>

                    <AlertDialog.Title className="m-0 text-[17px] font-semibold">
                        Você tem certeza?
                    </AlertDialog.Title>

                    <AlertDialog.Description>
                        Essa ação não pode ser desfeita
                    </AlertDialog.Description>

                    <div className="flex justify-end gap-[25px]">
                        <AlertDialog.Cancel>
                            <button>
                                Cancelar
                            </button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <button className="bg-red-500 p-2 rounded text-white">
                                Deletar
                            </button>
                        </AlertDialog.Action>
                    </div>
                    
                </AlertDialog.Content>
            </AlertDialog.Portal>

        </AlertDialog.Root>
    );
}