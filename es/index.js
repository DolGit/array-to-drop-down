function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import OmniLink from '@dolnpm/omni-link';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

var ArrayToDropDown = function (_React$Component) {
    _inherits(ArrayToDropDown, _React$Component);

    function ArrayToDropDown(props) {
        _classCallCheck(this, ArrayToDropDown);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleClick = function (event) {
            _this.setState({ el: event.currentTarget });
        };

        _this.handleClose = function () {
            _this.setState({ el: null });
        };

        _this.state = {};

        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.testValidity();
        return _this;
    }

    ArrayToDropDown.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.testValidity();
    };

    ArrayToDropDown.prototype.testValidity = function testValidity() {
        this.state.valid = this.props.links.length && this.props.children.length;
    };

    ArrayToDropDown.prototype.render = function render() {
        var _this2 = this;

        if (!this.state.valid) return false;
        var open = Boolean(this.state.el);
        return React.createElement(
            'div',
            null,
            this.props.links.length > 0 && React.createElement(
                'div',
                { onClick: this.handleClick },
                this.props.children
            ),
            React.createElement(
                Menu,
                { id: 'render-props-menu',
                    anchorEl: this.state.el,
                    open: open,
                    onClose: this.handleClose,
                    TransitionComponent: Fade,
                    className: this.props.className
                },
                this.props.links.map(function (link, index) {
                    return React.createElement(
                        MenuItem,
                        { key: index, onClick: _this2.handleClose },
                        React.createElement(OmniLink, { link: link })
                    );
                })
            )
        );
    };

    return ArrayToDropDown;
}(React.Component);

ArrayToDropDown.propTypes = process.env.NODE_ENV !== "production" ? {
    links: PropTypes.array,
    className: PropTypes.string
} : {};

export default ArrayToDropDown;