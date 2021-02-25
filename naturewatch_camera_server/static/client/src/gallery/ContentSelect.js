import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ContentSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleteActive: false,
            deleteAllText: "Delete All",
        };
        this.onDeleteAll = this.onDeleteAll.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onClearSelection = this.onClearSelection.bind(this);
    }
    renderButtons() {
        if (this.props.isSelectActive) {
            return this.renderDeleteButtons();
        }
        else {
            return this.renderSelectButton();
        }
    }

    renderSelectButton() {
        return(
            <Button variant="primary" onClick={this.props.onSelectStart}>Select</Button>
        );
    }

    onDeleteAll() {
        if (this.state.isDeleteActive) {
            this.props.onDeleteAll();
            this.setState({
                deleteAllText: "Delete All",
                isDeleteActive: false,
            });
        }
        else {
            this.setState({
                deleteAllText: "Tap Again To Delete All",
                isDeleteActive: true,
            });
        }
    }

    onClearSelection() {
        this.setState({
            deleteAllText: "Delete All",
            isDeleteActive: false,
        }, this.props.onClearSelection);
    }

    onDelete() {
        this.setState({
            deleteAllText: "Delete All",
            isDeleteActive: false,
        }, this.props.onDelete);
    }

    renderDeleteButtons() {
        return(
            <ButtonGroup aria-label="delete">
                <Button variant="primary" onClick={this.onDeleteAll}>{this.state.deleteAllText}</Button>
                <Button variant="primary" onClick={this.onDelete}>Delete</Button>
                <Button variant="primary" onClick={this.onClearSelection}>Cancel</Button>
            </ButtonGroup>
        );
    }

    render() {
        return(
            <div className="content-select">
                {this.renderButtons()}
            </div>
        );
    }
}

ContentSelect.propTypes = {
    isSelectActive: PropTypes.bool.isRequired,
    onSelectStart: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onDeleteAll: PropTypes.func.isRequired,
    onClearSelection: PropTypes.func.isRequired
};

export default ContentSelect;