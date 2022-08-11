import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PlusSmIcon, XIcon } from "@heroicons/react/outline";
import { Theme } from "../components/Theme/Theme";

export const TiposClientes = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Theme>
        <div className="flex items-center space-x-4 ">
          <h2 className="py-4 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Tipos de clientes
          </h2>
          <button
            type="button"
            onClick={handleShow}
            className="flex bg-[#b28118] p-1  rounded-full items-center justify-center text-white hover:bg-[#91660a] focus:outline-none"
          >
            <PlusSmIcon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Adicionar Arquivo</span>
          </button>
        </div>

        {/* TABELA/CONTEUDO/CARDS... */}
        {/* <TabelaCliente children={currentPosts} loading={loading} /> */}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Adicionar Classificação</Modal.Title>
            <button
              type="button"
              className="  rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={handleClose}
            >
              <span className="sr-only">Close panel</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </Modal.Header>
          <Modal.Body>
            {/* <ModalAddClassific /> */}
          </Modal.Body>
        </Modal>
      </Theme>
    </>
  );
};
