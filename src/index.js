import React from 'react'
import PropTypes from 'prop-types';
import OmniLink from '@dolnpm/omni-link'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

class ArrayToDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.testValidity()
    }

    componentWillReceiveProps(nextProps) {
        this.testValidity()
    }

    testValidity() {
        this.state.valid = this.props.links.length && this.props.children.length
    }

    handleClick = event => {
        this.setState({ el: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ el: null });
    };

    render() {
        if (!this.state.valid) return false
        const open = Boolean(this.state.el);
        return (
            <div>
                {this.props.links.length > 0 &&
                    <div onClick={this.handleClick}>
                        {this.props.children}
                    </div>
                }
                <Menu id="render-props-menu"
                      anchorEl={this.state.el}
                      open={open}
                      onClose={this.handleClose}
                      TransitionComponent={Fade}
                      className={this.props.className}
                >
                    {this.props.links.map((link, index) => {
                        return (
                            <MenuItem key={index} onClick={this.handleClose}>
                                <OmniLink link={link} />
                            </MenuItem>
                        )
                    })}
                </Menu>
            </div>
        )
    }
}

ArrayToDropDown.propTypes = {
    links: PropTypes.array,
    className: PropTypes.string
};

export default ArrayToDropDown