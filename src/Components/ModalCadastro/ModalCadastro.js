import { Link, withRouter } from 'react-router-dom';
import {  Button, Modal  } from 'react-bootstrap';
import { useState, render} from 'react';



export default function ModalCadastro() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //to="/cadastro" as={Link} 

    return (
      <>
        <Button className="btn-light rounded-pill text-info" onClick={handleShow}>
         Cadastro
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        
          <Modal.Body>   <h1 className="py-4 h1 text-info">Cadastrar como </h1></Modal.Body>

          <Modal.Footer className="navbar-dark py-2 bg-info" >
          
                 <div className=" mx-auto d-inline">
                 <Button to="/Cadastro" as={Link} className="btn-light rounded-pill text-info"  onClick={handleClose}>
                    Usuário Comun
                  </Button>
                 </div>

                  <div className=" mx-auto d-inline">
                    <Button className=" px-5  " to="/Cadastro_empresa" as={Link} className="btn-light rounded-pill text-info"  onClick={handleClose}>
                    Empresa
                  </Button>
                  </div>
                       
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
