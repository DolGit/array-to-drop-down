'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _OmniLink = require('lib/omni-link/OmniLink.jsx');

var _OmniLink2 = _interopRequireDefault(_OmniLink);

var _Menu = require('@material-ui/core/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Fade = require('@material-ui/core/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return _react2.default.createElement(
            'div',
            null,
            this.props.links.length > 0 && _react2.default.createElement(
                'div',
                { onClick: this.handleClick },
                this.props.children
            ),
            _react2.default.createElement(
                _Menu2.default,
                { id: 'render-props-menu',
                    anchorEl: this.state.el,
                    open: open,
                    onClose: this.handleClose,
                    TransitionComponent: _Fade2.default,
                    className: this.props.className
                },
                this.props.links.map(function (link, index) {
                    return _react2.default.createElement(
                        _MenuItem2.default,
                        { key: index, onClick: _this2.handleClose },
                        _react2.default.createElement(_OmniLink2.default, { link: link })
                    );
                })
            )
        );
    };

    return ArrayToDropDown;
}(_react2.default.Component);

ArrayToDropDown.propTypes = process.env.NODE_ENV !== "production" ? {
    links: _propTypes2.default.array,
    className: _propTypes2.default.string
} : {};

exports.default = ArrayToDropDown;
module.exports = exports['default'];