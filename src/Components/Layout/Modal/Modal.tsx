import {useContext} from "react";
import ModalContext from "../../../Context/ModalContext";
import Button from "../../Form/Button";

export interface ModalProps {
    title: string,
    description: string,
    buttonConfirmLabel?: string,
    buttonCancelLabel?: string,
}

const Modal = ({ title, description, buttonConfirmLabel="Confirmar", buttonCancelLabel="Cancelar" }: ModalProps) => {
    const { setModalOpen } = useContext(ModalContext)

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    { title }
                                </h3>
                                { description && <div className="mt-2">
                                    <p className="text-sm leading-5 text-gray-500">
                                        {description}
                                    </p>
                                </div> }
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <Button className={"bg-green-200 hover:bg-green-400 text-green-900"}>
                                { buttonConfirmLabel }
                            </Button>
                        </span>
                        <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                            <Button onClick={() => setModalOpen(false)} className={"bg-gray-200 hover:bg-gray-400 text-gray-800"}>
                                { buttonCancelLabel }
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal