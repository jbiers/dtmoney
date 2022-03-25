import Modal from "react-modal";
import closeImg from "../../assets/close.svg"
import { Container } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionsModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="Close modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Title"
                />

                <input
                    placeholder="Amount"
                    type="number"
                />

                <input
                    placeholder="Catregory"
                />

                <button type="submit">
                    Add
                </button>
            </Container>


        </Modal>
    )
}