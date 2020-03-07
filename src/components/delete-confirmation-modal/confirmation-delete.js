import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export default class ConfirmationDelete extends Component {

    deleteButtonClick = () => {
        this.props.onSuccess();
    };

    cancelButtonClick = () => {
        this.props.onCancel();
    };

    render() {
        const {name, onCancel} = this.props;

        return (
            <div>
                <Modal isOpen={Boolean(name)} toggle={onCancel}>
                    <ModalHeader>Delete confirmation</ModalHeader>
                    <ModalBody>
                        The <strong>{name}</strong> task will be deleted
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger"
                                onClick={this.deleteButtonClick}
                        >Delete</Button>{' '}
                        <Button color="secondary"
                                onClick={this.cancelButtonClick}
                        >Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}