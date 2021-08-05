import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Modal from '../../components/UI/Modal';
import Input from '../../components/UI/Input';
import { Row, Col } from 'react-bootstrap';

/**
* @author
* @function NewPage
**/

const NewPage = (props) => {

    const [createModal, setcreateModal] = useState(false);
    const [title, setTitle] = useState('');

    const renderCreatePageModal = () => {
        return (
            <Modal
            show={createModal}
            modalTitle={'Create New Page'}
            handleClose={() => setcreateModal(false)}
            >

                <Row>
                    <Col>
                    <Input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={'Page Title'}
                    />
                    </Col>
                </Row>
               
            </Modal>
        );
    }
  return(
    <Layout sidebar>
        page
    </Layout>
   )

 }

export default NewPage