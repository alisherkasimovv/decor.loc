;;
(function (_0x96e6x0) {
    "use strict";
    (jQuery["browser"] = jQuery["browser"] || {})["mobile"] = /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i ["test"](_0x96e6x0) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i ["test"](_0x96e6x0["substr"](0, 4));
})(navigator["userAgent"] || navigator["vendor"] || window["opera"]);;;
(function (_0x96e6x1, _0x96e6x2, _0x96e6x3, _0x96e6x4) {
    if (!_0x96e6x2["console"]) {
        _0x96e6x2["console"] = {};
    };
    if (!_0x96e6x2["console"]["log"]) {
        _0x96e6x2["console"]["log"] = function () {};
    };
    _0x96e6x1["fn"]["extend"]({
        hasClasses: function (_0x96e6x5) {
            var _0x96e6x6 = this;
            for (i in _0x96e6x5) {
                if (_0x96e6x1(_0x96e6x6)["hasClass"](_0x96e6x5[i])) {
                    return true;
                };
            };
            return false;
        }
    });
    _0x96e6x1["zozo"] = {};
    _0x96e6x1["zozo"]["core"] = {};
    _0x96e6x1["zozo"]["core"]["console"] = {
        debug: false,
        log: function (_0x96e6x7) {
            if (_0x96e6x1("#zozo-console")["length"] != 0) {
                _0x96e6x1("\x3Cdiv/\x3E")["css"]({
                    marginTop: -24
                })["html"](_0x96e6x7)["prependTo"]("#zozo-console")["animate"]({
                    marginTop: 0
                }, 300)["animate"]({
                    backgroundColor: "#ffffff"
                }, 800);
            } else {
                if (console && this["debug"] === true) {
                    console["log"](_0x96e6x7);
                };
            };
        }
    };
    _0x96e6x1["zozo"]["core"]["content"] = {
        debug: false,
        video: function (_0x96e6x8) {
            if (_0x96e6x8) {
                _0x96e6x8["find"]("iframe")["each"](function () {
                    var _0x96e6x9 = _0x96e6x1(this)["attr"]("src");
                    var _0x96e6xa = "wmode=transparent";
                    if (_0x96e6x9 && _0x96e6x9["indexOf"](_0x96e6xa) === -1) {
                        if (_0x96e6x9["indexOf"]("?") != -1) {
                            _0x96e6x1(this)["attr"]("src", _0x96e6x9 + "\x26" + _0x96e6xa);
                        } else {
                            _0x96e6x1(this)["attr"]("src", _0x96e6x9 + "?" + _0x96e6xa);
                        };
                    };
                });
            };
        },
        check: function (_0x96e6x8) {
            this["video"](_0x96e6x8);
        }
    };
    _0x96e6x1["zozo"]["core"]["keyCodes"] = {
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40
    };
    _0x96e6x1["zozo"]["core"]["debug"] = {
        startTime: new Date(),
        log: function (_0x96e6xb) {
            if (console) {
                console["log"](_0x96e6xb);
            };
        },
        start: function () {
            this["startTime"] = +new Date();
            this["log"]("start: " + this["startTime"]);
        },
        stop: function () {
            var _0x96e6xc = +new Date();
            var _0x96e6xd = _0x96e6xc - this["startTime"];
            this["log"]("end: " + _0x96e6xc);
            this["log"]("diff: " + _0x96e6xd);
            var _0x96e6xe = _0x96e6xd / 1000;
            var _0x96e6xf = Math["abs"](_0x96e6xe);
        }
    };
    _0x96e6x1["zozo"]["core"]["support"] = {
        is_mouse_present: function () {
            return (("onmousedown" in _0x96e6x2) && ("onmouseup" in _0x96e6x2) && ("onmousemove" in _0x96e6x2) && ("onclick" in _0x96e6x2) && ("ondblclick" in _0x96e6x2) && ("onmousemove" in _0x96e6x2) && ("onmouseover" in _0x96e6x2) && ("onmouseout" in _0x96e6x2) && ("oncontextmenu" in _0x96e6x2));
        },
        is_touch_device: function () {
            return (("ontouchstart" in _0x96e6x2) || (navigator["maxTouchPoints"] > 0) || (navigator["msMaxTouchPoints"] > 0)) && (jQuery["browser"]["mobile"]);
        },
        html5_storage: function () {
            try {
                return "localStorage" in _0x96e6x2 && _0x96e6x2["localStorage"] !== null;
            } catch (e) {
                return false;
            };
        },
        supportsCss: (function () {
            var _0x96e6x10 = _0x96e6x3["createElement"]("div"),
                _0x96e6x11 = "khtml ms o moz webkit" ["split"](" "),
                _0x96e6x12 = false;
            return function (_0x96e6x13) {
                (_0x96e6x13 in _0x96e6x10["style"]) && (_0x96e6x12 = _0x96e6x13);
                var _0x96e6x14 = _0x96e6x13["replace"](/^[a-z]/, function (_0x96e6x15) {
                    return _0x96e6x15["toUpperCase"]();
                });
                _0x96e6x1["each"](_0x96e6x11, function (_0x96e6x16, _0x96e6x17) {
                    (_0x96e6x17 + _0x96e6x14 in _0x96e6x10["style"]) && (_0x96e6x12 = "-" + _0x96e6x17 + "-" + _0x96e6x13);
                });
                return _0x96e6x12;
            };
        })(),
        css: {
            transition: false
        }
    };
    _0x96e6x1["zozo"]["core"]["utils"] = {
        toArray: function (_0x96e6x18) {
            return _0x96e6x1["map"](_0x96e6x18, function (_0x96e6x17, _0x96e6x19) {
                return _0x96e6x17;
            });
        },
        createHeader: function (_0x96e6x1a, _0x96e6x1b) {
            var _0x96e6x1c = _0x96e6x1("\x3Cli\x3E\x3Ca\x3E" + _0x96e6x1a + "\x3C/a\x3E\x3C/li\x3E");
            var _0x96e6x8 = _0x96e6x1("\x3Cdiv\x3E" + _0x96e6x1b + "\x3C/div\x3E");
            return {
                tab: _0x96e6x1c,
                content: _0x96e6x8
            };
        },
        isEmpty: function (_0x96e6x1d) {
            return (!_0x96e6x1d || 0 === _0x96e6x1d["length"]);
        },
        isNumber: function (_0x96e6x1e) {
            return typeof _0x96e6x1e === "number" && isFinite(_0x96e6x1e);
        },
        isEven: function (_0x96e6x1f) {
            return _0x96e6x1f % 2 === 0;
        },
        isOdd: function (_0x96e6x1e) {
            return !(_number % 2 === 0);
        },
        animate: function (_0x96e6x6, _0x96e6x20, _0x96e6x21, _0x96e6x22, _0x96e6x23, _0x96e6x24) {
            var _0x96e6x25 = (_0x96e6x6["settings"]["animation"]["effects"] === "none") ? 0 : _0x96e6x6["settings"]["animation"]["duration"];
            var _0x96e6x26 = _0x96e6x6["settings"]["animation"]["easing"];
            var _0x96e6x27 = _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"];
            if (_0x96e6x20 && _0x96e6x22) {
                if (_0x96e6x21) {
                    _0x96e6x20["css"](_0x96e6x21);
                };
                var _0x96e6x28 = _0x96e6x20["css"]("left");
                var _0x96e6x29 = _0x96e6x20["css"]("top");
                if (_0x96e6x6["settings"]["animation"]["type"] === "css") {
                    _0x96e6x22[_0x96e6x27] = "all " + _0x96e6x25 + "ms ease-in-out";
                    setTimeout(function () {
                        _0x96e6x20["css"](_0x96e6x22);
                    });
                    setTimeout(function () {
                        if (_0x96e6x23) {
                            _0x96e6x20["css"](_0x96e6x23);
                        };
                        _0x96e6x20["css"](_0x96e6x27, "");
                    }, _0x96e6x25);
                } else {
                    _0x96e6x20["animate"](_0x96e6x22, {
                        duration: _0x96e6x25,
                        easing: _0x96e6x26,
                        complete: function () {
                            if (_0x96e6x23) {
                                _0x96e6x20["css"](_0x96e6x23);
                            };
                            if (_0x96e6x24) {
                                _0x96e6x20["hide"]();
                            };
                        }
                    });
                };
            };
            return _0x96e6x6;
        }
    };
    _0x96e6x1["zozo"]["core"]["plugins"] = {
        easing: function (_0x96e6x6) {
            var _0x96e6x2a = false;
            if (_0x96e6x6) {
                if (_0x96e6x6["settings"]) {
                    var _0x96e6x2b = "swing";
                    if (_0x96e6x1["easing"]["def"]) {
                        _0x96e6x2a = true;
                    } else {
                        if (_0x96e6x6["settings"]["animation"]["easing"] != "swing" && _0x96e6x6["settings"]["animation"]["easing"] != "linear") {
                            _0x96e6x6["settings"]["animation"]["easing"] = _0x96e6x2b;
                        };
                    };
                };
            };
            return _0x96e6x2a;
        }
    };
    _0x96e6x1["zozo"]["core"]["browser"] = {
        init: function () {
            this["browser"] = this["searchString"](this["dataBrowser"]) || "An unknown browser";
            this["version"] = this["searchVersion"](navigator["userAgent"]) || this["searchVersion"](navigator["appVersion"]) || "an unknown version";
            _0x96e6x1["zozo"]["core"]["console"]["log"]("init: " + this["browser"] + " : " + this["version"]);
            if (this["browser"] === "Explorer") {
                var _0x96e6x2c = _0x96e6x1("html");
                var _0x96e6x2d = parseInt(this["version"]);
                if (_0x96e6x2d === 6) {
                    _0x96e6x2c["addClass"]("ie ie7");
                } else {
                    if (_0x96e6x2d === 7) {
                        _0x96e6x2c["addClass"]("ie ie7");
                    } else {
                        if (_0x96e6x2d === 8) {
                            _0x96e6x2c["addClass"]("ie ie8");
                        } else {
                            if (_0x96e6x2d === 9) {
                                _0x96e6x2c["addClass"]("ie ie9");
                            };
                        };
                    };
                };
            };
        },
        isIE: function (_0x96e6x2e) {
            if (_0x96e6x1["zozo"]["core"]["utils"]["isNumber"](_0x96e6x2e)) {
                return (this["browser"] === "Explorer" && this["version"] <= _0x96e6x2e);
            } else {
                return (this["browser"] === "Explorer");
            };
        },
        isChrome: function (_0x96e6x2e) {
            if (_0x96e6x1["zozo"]["core"]["utils"]["isNumber"](_0x96e6x2e)) {
                return (this["browser"] === "Chrome" && this["version"] <= _0x96e6x2e);
            } else {
                return (this["browser"] === "Chrome");
            };
        },
        searchString: function (_0x96e6x2f) {
            for (var _0x96e6x30 = 0; _0x96e6x30 < _0x96e6x2f["length"]; _0x96e6x30++) {
                var _0x96e6x31 = _0x96e6x2f[_0x96e6x30]["string"];
                var _0x96e6x32 = _0x96e6x2f[_0x96e6x30]["prop"];
                this["versionSearchString"] = _0x96e6x2f[_0x96e6x30]["versionSearch"] || _0x96e6x2f[_0x96e6x30]["identity"];
                if (_0x96e6x31) {
                    if (_0x96e6x31["indexOf"](_0x96e6x2f[_0x96e6x30]["subString"]) != -1) {
                        return _0x96e6x2f[_0x96e6x30]["identity"];
                    };
                } else {
                    if (_0x96e6x32) {
                        return _0x96e6x2f[_0x96e6x30]["identity"];
                    };
                };
            };
        },
        searchVersion: function (_0x96e6x31) {
            var _0x96e6x16 = _0x96e6x31["indexOf"](this["versionSearchString"]);
            if (_0x96e6x16 == -1) {
                return;
            };
            return parseFloat(_0x96e6x31["substring"](_0x96e6x16 + this["versionSearchString"]["length"] + 1));
        },
        dataBrowser: [{
            string: navigator["userAgent"],
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator["vendor"],
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: _0x96e6x2["opera"],
            identity: "Opera"
        }, {
            string: navigator["userAgent"],
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator["userAgent"],
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }]
    };
    _0x96e6x1["zozo"]["core"]["hashHelper"] = {
        mode: "single",
        separator: null,
        all: function (_0x96e6x33) {
            var _0x96e6x34 = [];
            var _0x96e6x35 = _0x96e6x3["location"]["hash"];
            if (!this["hasHash"]()) {
                return _0x96e6x34;
            };
            if (this["isSimple"](_0x96e6x33)) {
                return _0x96e6x35["substring"](1);
            } else {
                _0x96e6x35 = _0x96e6x35["substring"](1)["split"]("\x26");
                for (var _0x96e6x30 = 0; _0x96e6x30 < _0x96e6x35["length"]; _0x96e6x30++) {
                    var _0x96e6x36 = _0x96e6x35[_0x96e6x30]["split"](_0x96e6x33);
                    if (_0x96e6x36["length"] != 2 || _0x96e6x36[0] in _0x96e6x34) {
                        _0x96e6x36[1] = "none";
                    };
                    _0x96e6x34[_0x96e6x36[0]] = _0x96e6x36[1];
                };
            };
            return _0x96e6x34;
        },
        get: function (_0x96e6x19, _0x96e6x33) {
            var _0x96e6x37 = this["all"](_0x96e6x33);
            if (this["isSimple"](_0x96e6x33)) {
                return _0x96e6x37;
            } else {
                if (typeof _0x96e6x37 === "undefined" || typeof _0x96e6x37["length"] < 0) {
                    return null;
                } else {
                    if (typeof _0x96e6x37[_0x96e6x19] !== "undefined" && _0x96e6x37[_0x96e6x19] !== null) {
                        return _0x96e6x37[_0x96e6x19];
                    } else {
                        return null;
                    };
                };
            };
        },
        set: function (_0x96e6x19, _0x96e6x17, _0x96e6x33, _0x96e6x38) {
            if (this["isSimple"](_0x96e6x33)) {
                _0x96e6x3["location"]["hash"] = _0x96e6x17;
            } else {
                if (_0x96e6x38 === "multiple") {
                    var _0x96e6x37 = this["all"](_0x96e6x33);
                    var _0x96e6x35 = [];
                    _0x96e6x37[_0x96e6x19] = _0x96e6x17;
                    for (var _0x96e6x19 in _0x96e6x37) {
                        _0x96e6x35["push"](_0x96e6x19 + _0x96e6x33 + _0x96e6x37[_0x96e6x19]);
                    };
                    _0x96e6x3["location"]["hash"] = _0x96e6x35["join"]("\x26");
                } else {
                    _0x96e6x3["location"]["hash"] = _0x96e6x19 + _0x96e6x33 + _0x96e6x17;
                };
            };
        },
        isSimple: function (_0x96e6x33) {
            if (!_0x96e6x33 || _0x96e6x33 === "none") {
                return true;
            } else {
                return false;
            };
        },
        hasHash: function () {
            var _0x96e6x35 = _0x96e6x3["location"]["hash"];
            if (_0x96e6x35["length"] > 0) {
                return true;
            } else {
                return false;
            };
        }
    };
    _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"] = _0x96e6x1["zozo"]["core"]["support"]["supportsCss"]("transition");
    _0x96e6x1["zozo"]["core"]["browser"]["init"]();
})(jQuery, window, document);;;
(function (_0x96e6x1) {
    _0x96e6x1["event"]["special"]["ztap"] = {
        distanceThreshold: 10,
        timeThreshold: 500,
        isTouchSupported: jQuery["zozo"]["core"]["support"]["is_touch_device"](),
        setup: function (_0x96e6x39) {
            var _0x96e6x3a = this,
                _0x96e6x6 = _0x96e6x1(_0x96e6x3a);
            var _0x96e6x3b = "click";
            if (_0x96e6x39) {
                if (_0x96e6x39["data"]) {
                    _0x96e6x3b = _0x96e6x39["data"];
                };
            };
            if (_0x96e6x1["event"]["special"]["ztap"]["isTouchSupported"]) {
                _0x96e6x6["on"]("touchstart", function (_0x96e6x3c) {
                    var _0x96e6x3d = _0x96e6x3c["target"],
                        _0x96e6x3e = _0x96e6x3c["originalEvent"]["touches"][0],
                        _0x96e6x3f = _0x96e6x3e["pageX"],
                        _0x96e6x40 = _0x96e6x3e["pageY"],
                        _0x96e6x41 = _0x96e6x1["event"]["special"]["ztap"]["distanceThreshold"],
                        _0x96e6x42;

                    function _0x96e6x43() {
                        clearTimeout(_0x96e6x42);
                        _0x96e6x6["off"]("touchmove", _0x96e6x46)["off"]("touchend", _0x96e6x44);
                    };

                    function _0x96e6x44(_0x96e6x45) {
                        _0x96e6x43();
                        if (_0x96e6x3d == _0x96e6x45["target"]) {
                            _0x96e6x1["event"]["simulate"]("ztap", _0x96e6x3a, _0x96e6x45);
                        };
                    };

                    function _0x96e6x46(_0x96e6x47) {
                        var _0x96e6x48 = _0x96e6x47["originalEvent"]["touches"][0],
                            _0x96e6x49 = _0x96e6x48["pageX"],
                            _0x96e6x4a = _0x96e6x48["pageY"];
                        if (Math["abs"](_0x96e6x49 - _0x96e6x3f) > _0x96e6x41 || Math["abs"](_0x96e6x4a - _0x96e6x40) > _0x96e6x41) {
                            _0x96e6x43();
                        };
                    };
                    _0x96e6x42 = setTimeout(_0x96e6x43, _0x96e6x1["event"]["special"]["ztap"]["timeThreshold"]);
                    _0x96e6x6["on"]("touchmove", _0x96e6x46)["on"]("touchend", _0x96e6x44);
                });
            } else {
                _0x96e6x6["on"](_0x96e6x3b, function (_0x96e6x45) {
                    _0x96e6x1["event"]["simulate"]("ztap", _0x96e6x3a, _0x96e6x45);
                });
            };
        }
    };
})(jQuery);;;
(function (_0x96e6x1, _0x96e6x2, _0x96e6x3, _0x96e6x4) {
    if (_0x96e6x2["zozo"] == null) {
        _0x96e6x2["zozo"] = {};
    };
    var _0x96e6x4b = function (_0x96e6x4c, _0x96e6x4d) {
        this["elem"] = _0x96e6x4c;
        this["$elem"] = _0x96e6x1(_0x96e6x4c);
        this["options"] = _0x96e6x4d;
        this["metadata"] = (this["$elem"]["data"]("options")) ? this["$elem"]["data"]("options") : {};
        this["attrdata"] = (this["$elem"]["data"]()) ? this["$elem"]["data"]() : {};
        this["tabID"];
        this["$tabGroup"];
        this["$mobileNav"];
        this["$mobileDropdownArrow"];
        this["$tabs"];
        this["$container"];
        this["$contents"];
        this["autoplayIntervalId"];
        this["resizeWindowIntervalId"];
        this["currentTab"];
        this["BrowserDetection"] = _0x96e6x1["zozo"]["core"]["browser"];
        this["Deeplinking"] = _0x96e6x1["zozo"]["core"]["hashHelper"];
        this["lastWindowHeight"];
        this["lastWindowWidth"];
        this["responsive"];
    };
    var _0x96e6x4e = {
            pluginName: "zozoTabs",
            elementSpacer: "\x3Cspan class=\x27z-tab-spacer\x27 style=\x27clear: both;display: block;\x27\x3E\x3C/span\x3E",
            commaRegExp: /,/g,
            space: " ",
            responsive: {
                largeDesktop: 1200,
                desktop: 960,
                tablet: 720,
                phone: 480
            },
            modes: {
                tabs: "tabs",
                stacked: "stacked",
                menu: "menu",
                slider: "slider"
            },
            states: {
                closed: "z-state-closed",
                open: "z-state-open",
                active: "z-state-active"
            },
            events: {
                click: "click",
                mousover: "mouseover",
                touchend: "touchend",
                touchstart: "touchstart",
                touchmove: "touchmove"
            },
            animation: {
                effects: {
                    fade: "fade",
                    none: "none",
                    slideH: "slideH",
                    slideV: "slideV",
                    slideLeft: "slideLeft",
                    slideRight: "slideRight",
                    slideUp: "slideUp",
                    slideUpDown: "slideUpDown",
                    slideDown: "slideDown"
                },
                types: {
                    css: "css",
                    jquery: "jquery"
                }
            },
            classes: {
                prefix: "z-",
                wrapper: "z-tabs",
                tabGroup: "z-tabs-nav",
                tab: "z-tab",
                first: "z-first",
                last: "z-last",
                left: "z-left",
                right: "z-right",
                firstCol: "z-first-col",
                lastCol: "z-last-col",
                firstRow: "z-first-row",
                lastRow: "z-last-row",
                active: "z-active",
                link: "z-link",
                container: "z-container",
                content: "z-content",
                shadows: "z-shadows",
                bordered: "z-bordered",
                dark: "z-dark",
                spaced: "z-spaced",
                rounded: "z-rounded",
                themes: ["gray", "black", "blue", "crystal", "green", "silver", "red", "orange", "deepblue", "white"],
                flatThemes: ["flat-turquoise", "flat-emerald", "flat-peter-river", "flat-amethyst", "flat-wet-asphalt", "flat-green-sea", "flat-nephritis", "flat-belize-hole", "flat-wisteria", "flat-midnight-blue", "flat-sun-flower", "flat-carrot", "flat-alizarin", "flat-graphite", "flat-concrete", "flat-orange", "flat-pumpkin", "flat-pomegranate", "flat-silver", "flat-asbestos", "flat-zozo-red"],
                styles: ["contained", "pills", "underlined", "clean", "minimal"],
                orientations: ["vertical", "horizontal"],
                sizes: ["mini", "small", "medium", "large", "xlarge", "xxlarge"],
                positions: {
                    top: "top",
                    topLeft: "top-left",
                    topCenter: "top-center",
                    topRight: "top-right",
                    topCompact: "top-compact",
                    bottom: "bottom",
                    bottomLeft: "bottom-left",
                    bottomCenter: "bottom-center",
                    bottomRight: "bottom-right",
                    bottomCompact: "bottom-compact"
                }
            }
        },
        _0x96e6x4f = "flat",
        _0x96e6x50 = "ready",
        _0x96e6x51 = "error",
        _0x96e6x52 = "select",
        _0x96e6x53 = "activate",
        _0x96e6x54 = "deactivate",
        _0x96e6x55 = "hover",
        _0x96e6x56 = "beforeSend",
        _0x96e6x57 = "contentLoad",
        _0x96e6x58 = "contentUrl",
        _0x96e6x59 = "contentType",
        _0x96e6x5a = "disabled",
        _0x96e6x5b = "z-icon-menu",
        _0x96e6x5c = "z-disabled",
        _0x96e6x5d = "z-stacked",
        _0x96e6x5e = "z-icons-light",
        _0x96e6x5f = "z-icons-dark",
        _0x96e6x60 = "z-spinner",
        _0x96e6x61 = "underlined",
        _0x96e6x62 = "contained",
        _0x96e6x63 = "clean",
        _0x96e6x64 = "pills",
        _0x96e6x65 = "vertical",
        _0x96e6x66 = "horizontal",
        _0x96e6x67 = "top-left",
        _0x96e6x68 = "top-right",
        _0x96e6x69 = "top",
        _0x96e6x6a = "bottom",
        _0x96e6x6b = "bottom-right",
        _0x96e6x6c = "bottom-left",
        _0x96e6x6d = "mobile",
        _0x96e6x6e = "z-multiline",
        _0x96e6x6f = "transition",
        _0x96e6x70 = "z-animating",
        _0x96e6x71 = "z-dropdown-arrow",
        _0x96e6x72 = "responsive",
        _0x96e6x73 = "z-content-inner";
    _0x96e6x4b["prototype"] = {
        defaults: {
            delayAjax: 50,
            animation: {
                duration: 600,
                effects: "slideH",
                easing: "easeInQuad",
                type: "css",
                mobileDuration: 0
            },
            autoContentHeight: true,
            autoplay: {
                interval: 0,
                smart: true
            },
            bordered: true,
            dark: false,
            cacheAjax: true,
            contentUrls: null,
            deeplinking: false,
            deeplinkingAutoScroll: false,
            deeplinkingMode: "single",
            deeplinkingPrefix: null,
            deeplinkingSeparator: "",
            defaultTab: "tab1",
            event: _0x96e6x4e["events"]["click"],
            maxRows: 3,
            minWidth: 200,
            minWindowWidth: 480,
            mobileAutoScrolling: null,
            mobileNav: true,
            mobileMenuIcon: null,
            mode: _0x96e6x4e["modes"]["tabs"],
            multiline: false,
            hashAttribute: "data-link",
            position: _0x96e6x4e["classes"]["positions"]["topLeft"],
            orientation: _0x96e6x66,
            ready: function () {},
            responsive: true,
            responsiveDelay: 0,
            rounded: false,
            shadows: true,
            theme: "silver",
            scrollToContent: false,
            select: function () {},
            spaced: false,
            deactivate: function () {},
            beforeSend: function () {},
            contentLoad: function () {},
            next: null,
            prev: null,
            error: function () {},
            noTabs: false,
            rememberState: false,
            size: "medium",
            style: _0x96e6x62,
            tabRatio: 1.03,
            tabRatioCompact: 1.031,
            original: {
                itemWidth: 0,
                itemMinWidth: null,
                itemMaxWidth: null,
                groupWidth: 0,
                initGroupWidth: 0,
                itemD: 0,
                itemM: 0,
                firstRowWidth: 0,
                lastRowItems: 0,
                count: 0,
                contentMaxHeight: null,
                contentMaxWidth: null,
                navHeight: null,
                position: null,
                bottomLeft: null,
                tabGroupWidth: 0
            },
            animating: false
        },
        init: function () {
            var _0x96e6x6 = this;
            _0x96e6x6["settings"] = _0x96e6x1["extend"](true, {}, _0x96e6x6["defaults"], _0x96e6x6["options"], _0x96e6x6["metadata"], _0x96e6x6["attrdata"]);
            _0x96e6x6["$elem"]["find"]("\x3E." + _0x96e6x60)["remove"]();
            _0x96e6x6["$elem"]["removeClass"]("z-tabs-loading");
            if (_0x96e6x6["settings"]["contentUrls"] != null) {
                _0x96e6x6["$elem"]["find"]("\x3E div \x3E div")["each"](function (_0x96e6x16, _0x96e6x74) {
                    _0x96e6x1(_0x96e6x74)["data"](_0x96e6x58, _0x96e6x6["settings"]["contentUrls"][_0x96e6x16]);
                });
            };
            _0x96e6x86["initAnimation"](_0x96e6x6, true);
            _0x96e6x86["updateClasses"](_0x96e6x6);
            _0x96e6x86["checkWidth"](_0x96e6x6, true);
            _0x96e6x86["bindEvents"](_0x96e6x6);
            _0x96e6x86["initAutoPlay"](_0x96e6x6);
            _0x96e6x1["zozo"]["core"]["plugins"]["easing"](_0x96e6x6);
            if (_0x96e6x6["settings"]["rememberState"] === true && _0x96e6x1["zozo"]["core"]["support"]["html5_storage"]()) {
                var _0x96e6x75 = localStorage["getItem"](_0x96e6x6["tabID"] + "_defaultTab");
                if (_0x96e6x86["tabExist"](_0x96e6x6, _0x96e6x75)) {
                    _0x96e6x6["settings"]["defaultTab"] = _0x96e6x75;
                };
            };
            if (_0x96e6x6["settings"]["deeplinking"] === true) {
                var _0x96e6x76 = (_0x96e6x6["settings"]["deeplinkingPrefix"]) ? _0x96e6x6["settings"]["deeplinkingPrefix"] : _0x96e6x6["tabID"];
                if (_0x96e6x3["location"]["hash"]) {
                    var _0x96e6x75 = _0x96e6x6["Deeplinking"]["get"](_0x96e6x76, _0x96e6x6["settings"]["deeplinkingSeparator"]);
                    if (_0x96e6x86["tabExist"](_0x96e6x6, _0x96e6x75)) {
                        _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x75);
                        if (_0x96e6x6["settings"]["deeplinkingAutoScroll"] === true) {
                            _0x96e6x1("html, body")["animate"]({
                                scrollTop: _0x96e6x6["$elem"]["offset"]()["top"] - 150
                            }, 2000);
                        };
                    } else {
                        _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x6["settings"]["defaultTab"]);
                    };
                } else {
                    _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x6["settings"]["defaultTab"]);
                };
                if (typeof (_0x96e6x1(_0x96e6x2)["hashchange"]) != "undefined") {
                    _0x96e6x1(_0x96e6x2)["hashchange"](function () {
                        var _0x96e6x77 = _0x96e6x6["Deeplinking"]["get"](_0x96e6x76, _0x96e6x6["settings"]["deeplinkingSeparator"]);
                        if (!_0x96e6x6["currentTab"] || _0x96e6x6["currentTab"]["attr"](_0x96e6x6["settings"]["hashAttribute"]) !== _0x96e6x77) {
                            _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x77);
                        };
                    });
                } else {
                    _0x96e6x1(_0x96e6x2)["bind"]("hashchange", function () {
                        var _0x96e6x77 = _0x96e6x6["Deeplinking"]["get"](_0x96e6x76, _0x96e6x6["settings"]["deeplinkingSeparator"]);
                        if (!_0x96e6x6["currentTab"] || _0x96e6x6["currentTab"]["attr"](_0x96e6x6["settings"]["hashAttribute"]) !== _0x96e6x77) {
                            _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x77);
                        };
                    });
                };
            } else {
                if (_0x96e6x6["settings"]["noTabs"] === true) {
                    _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x86["getActive"](_0x96e6x6, 0));
                } else {
                    _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x6["settings"]["defaultTab"]);
                };
            };
            _0x96e6x86["checkWidth"](_0x96e6x6);
            _0x96e6x6["$elem"]["trigger"](_0x96e6x50, _0x96e6x6.$elem);
            return _0x96e6x6;
        },
        setOptions: function (_0x96e6x78) {
            var _0x96e6x6 = this;
            _0x96e6x6["settings"] = _0x96e6x1["extend"](true, _0x96e6x6["settings"], _0x96e6x78);
            _0x96e6x86["initAnimation"](_0x96e6x6);
            _0x96e6x86["updateClasses"](_0x96e6x6, true);
            _0x96e6x86["checkWidth"](_0x96e6x6, false, true);
            _0x96e6x86["initAutoPlay"](_0x96e6x6);
            return _0x96e6x6;
        },
        add: function (_0x96e6x74, _0x96e6x79, _0x96e6x7a) {
            var _0x96e6x6 = this;
            var _0x96e6x7b = {};
            if (_0x96e6x74 != null && typeof _0x96e6x74 === "object") {
                if (_0x96e6x74["tab"]) {
                    _0x96e6x7b["tab"] = _0x96e6x1(_0x96e6x74["tab"]);
                    (_0x96e6x74["tabID"] && _0x96e6x6["settings"]["deeplinking"] === true) && (_0x96e6x7b["tab"]["attr"](_0x96e6x6["settings"]["hashAttribute"], _0x96e6x74["tabID"]));
                };
                if (_0x96e6x74["content"]) {
                    _0x96e6x7b["content"] = _0x96e6x1(_0x96e6x74["content"]);
                };
            } else {
                if (_0x96e6x74 && _0x96e6x79) {
                    _0x96e6x7b["tab"] = _0x96e6x1("\x3Cli\x3E\x3Ca\x3E" + _0x96e6x74 + "\x3C/a\x3E\x3C/li\x3E");
                    _0x96e6x7b["content"] = _0x96e6x1("\x3Cdiv\x3E" + _0x96e6x79 + "\x3C/div\x3E");
                    (_0x96e6x7a && _0x96e6x6["settings"]["deeplinking"] === true) && (_0x96e6x7b["tab"]["attr"](_0x96e6x6["settings"]["hashAttribute"], _0x96e6x7a));
                };
            };
            if (_0x96e6x7b["tab"] && _0x96e6x7b["content"]) {
                _0x96e6x7b["tab"]["appendTo"](_0x96e6x6.$tabGroup)["hide"]()["fadeIn"](300)["css"]("display", "");
                _0x96e6x7b["content"]["appendTo"](_0x96e6x6.$container);
                _0x96e6x86["updateClasses"](_0x96e6x6);
                _0x96e6x86["bindEvent"](_0x96e6x6, _0x96e6x7b["tab"]);
                setTimeout(function () {
                    _0x96e6x86["checkWidth"](_0x96e6x6, false, true);
                }, 350);
            };
            return _0x96e6x6;
        },
        insertAfter: function (_0x96e6x1a, _0x96e6x1b, _0x96e6x7c) {
            var _0x96e6x6 = this;
            return _0x96e6x6;
        },
        insertBefore: function (_0x96e6x1a, _0x96e6x1b, _0x96e6x7c) {
            var _0x96e6x6 = this;
            return _0x96e6x6;
        },
        remove: function (_0x96e6x7d) {
            var _0x96e6x6 = this;
            var _0x96e6x7e = (_0x96e6x7d - 1);
            var _0x96e6x7f = _0x96e6x6["$tabs"]["eq"](_0x96e6x7e);
            var _0x96e6x80 = _0x96e6x6["$contents"]["eq"](_0x96e6x7e);
            _0x96e6x80["remove"]();
            _0x96e6x7f["fadeOut"](300, function () {
                _0x96e6x1(this)["remove"]();
                _0x96e6x86["updateClasses"](_0x96e6x6);
            });
            setTimeout(function () {
                _0x96e6x86["checkWidth"](_0x96e6x6, false, true);
            }, 350);
            return _0x96e6x6;
        },
        enable: function (_0x96e6x7d) {
            var _0x96e6x6 = this;
            var _0x96e6x81 = _0x96e6x6["$tabs"]["eq"](_0x96e6x7d);
            if (_0x96e6x81["length"]) {
                _0x96e6x81["removeClass"](_0x96e6x5c);
                _0x96e6x81["data"](_0x96e6x5a, false);
            };
            return _0x96e6x6;
        },
        disable: function (_0x96e6x7d) {
            var _0x96e6x6 = this;
            var _0x96e6x82 = _0x96e6x6["$tabs"]["eq"](_0x96e6x7d);
            if (_0x96e6x82["length"]) {
                _0x96e6x82["addClass"](_0x96e6x5c);
                _0x96e6x82["data"](_0x96e6x5a, true);
            };
            return _0x96e6x6;
        },
        select: function (_0x96e6x7d) {
            var _0x96e6x6 = this;
            if (_0x96e6x6["settings"]["animating"] !== true) {
                if (_0x96e6x6["settings"]["noTabs"] === true) {
                    _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x86["getActive"](_0x96e6x6, _0x96e6x7d));
                } else {
                    _0x96e6x86["changeHash"](_0x96e6x6, _0x96e6x6["$tabs"]["eq"](_0x96e6x7d)["attr"](_0x96e6x6["settings"]["hashAttribute"]));
                };
            };
            return _0x96e6x6;
        },
        first: function () {
            var _0x96e6x6 = this;
            _0x96e6x6["select"](_0x96e6x86["getFirst"]());
            return _0x96e6x6;
        },
        prev: function () {
            var _0x96e6x6 = this;
            var _0x96e6x83 = _0x96e6x86["getActiveIndex"](_0x96e6x6);
            if (_0x96e6x83 <= _0x96e6x86["getFirst"](_0x96e6x6)) {
                _0x96e6x6["select"](_0x96e6x86["getLast"](_0x96e6x6));
            } else {
                _0x96e6x6["select"](_0x96e6x83 - 1);
                _0x96e6x1["zozo"]["core"]["debug"]["log"]("prev tab : " + (_0x96e6x83 - 1));
            };
            return _0x96e6x6;
        },
        next: function (_0x96e6x6) {
            _0x96e6x6 = (_0x96e6x6) ? _0x96e6x6 : this;
            var _0x96e6x83 = _0x96e6x86["getActiveIndex"](_0x96e6x6);
            var _0x96e6x84 = parseInt(_0x96e6x86["getLast"](_0x96e6x6));
            if (_0x96e6x83 >= _0x96e6x84) {
                _0x96e6x6["select"](_0x96e6x86["getFirst"]());
            } else {
                _0x96e6x6["select"](_0x96e6x83 + 1);
                _0x96e6x1["zozo"]["core"]["debug"]["log"]("next tab : " + (_0x96e6x83 + 1));
            };
            return _0x96e6x6;
        },
        last: function () {
            var _0x96e6x6 = this;
            _0x96e6x6["select"](_0x96e6x86["getLast"](_0x96e6x6));
            return _0x96e6x6;
        },
        play: function (_0x96e6x85) {
            var _0x96e6x6 = this;
            if (_0x96e6x85 == null || _0x96e6x85 < 0) {
                _0x96e6x85 = 2000;
            };
            _0x96e6x6["settings"]["autoplay"]["interval"] = _0x96e6x85;
            _0x96e6x6["stop"]();
            _0x96e6x6["autoplayIntervalId"] = setInterval(function () {
                _0x96e6x6["next"](_0x96e6x6);
            }, _0x96e6x6["settings"]["autoplay"]["interval"]);
            return _0x96e6x6;
        },
        stop: function (_0x96e6x6) {
            _0x96e6x6 = (_0x96e6x6) ? _0x96e6x6 : this;
            clearInterval(_0x96e6x6["autoplayIntervalId"]);
            return _0x96e6x6;
        },
        refresh: function () {
            var _0x96e6x6 = this;
            _0x96e6x6["$contents"]["filter"](".z-active")["css"]({
                "display": "block"
            })["show"]();
            _0x96e6x86["checkWidth"](_0x96e6x6);
            return _0x96e6x6;
        }
    };
    var _0x96e6x86 = {
        initAnimation: function (_0x96e6x6, _0x96e6x87) {
            var _0x96e6x88 = _0x96e6x1["zozo"]["core"]["utils"]["toArray"](_0x96e6x4e["animation"]["effects"]);
            if (_0x96e6x1["inArray"](_0x96e6x6["settings"]["animation"]["effects"], _0x96e6x88) < 0) {
                _0x96e6x6["settings"]["animation"]["effects"] = _0x96e6x4e["animation"]["effects"]["slideH"];
            };
            if (jQuery["browser"]["mobile"]) {
                _0x96e6x6["settings"]["shadows"] = false;
            };
            if (_0x96e6x1["zozo"]["core"]["support"]["css"]["transition"] === false) {
                _0x96e6x6["settings"]["animation"]["type"] = _0x96e6x4e["animation"]["types"]["jquery"];
                if (jQuery["browser"]["mobile"]) {
                    _0x96e6x6["settings"]["animation"]["duration"] = 0;
                };
            };
            if (_0x96e6x6["settings"]["animation"]["effects"] === _0x96e6x4e["animation"]["effects"]["none"] && _0x96e6x87 === true) {
                _0x96e6x6["settings"]["animation"]["duration"] = 0;
            };
        },
        updateClasses: function (_0x96e6x6, _0x96e6x89) {
            _0x96e6x6["$elem"]["find"]("*")["stop"](true, true);
            _0x96e6x6["tabID"] = _0x96e6x6["$elem"]["attr"]("id");
            _0x96e6x6["$tabGroup"] = _0x96e6x6["$elem"]["find"]("\x3E ul")["addClass"](_0x96e6x4e["classes"]["tabGroup"])["not"](".z-tabs-mobile")["addClass"]("z-tabs-desktop");
            _0x96e6x6["$tabs"] = _0x96e6x6["$tabGroup"]["find"]("\x3E li");
            _0x96e6x6["$container"] = _0x96e6x6["$elem"]["find"]("\x3E div");
            _0x96e6x6["$contents"] = _0x96e6x6["$container"]["find"]("\x3E div");
            if (_0x96e6x6["$tabGroup"]["length"] <= 0) {
                _0x96e6x6["settings"]["noTabs"] = true;
            };
            var _0x96e6x27 = _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"];
            var _0x96e6x8a = _0x96e6x6["settings"]["noTabs"];
            _0x96e6x6["$container"]["addClass"](_0x96e6x4e["classes"]["container"])["css"]({
                _transition: ""
            });
            _0x96e6x6["$contents"]["addClass"](_0x96e6x4e["classes"]["content"]);
            _0x96e6x6["$contents"]["each"](function (_0x96e6x16, _0x96e6x74) {
                var _0x96e6x8b = _0x96e6x1(_0x96e6x74);
                _0x96e6x8b["css"]({
                    "left": "",
                    "top": "",
                    "opacity": "",
                    "display": "",
                    _transition: ""
                });
                (_0x96e6x8b["hasClass"](_0x96e6x4e["classes"]["active"])) && _0x96e6x8b["show"]()["css"]({
                    "display": "block",
                    _transition: ""
                });
            });
            if (_0x96e6x8a != true) {
                _0x96e6x6["$tabs"]["each"](function (_0x96e6x16, _0x96e6x74) {
                    var _0x96e6x1c = _0x96e6x1(_0x96e6x74);
                    _0x96e6x1c["removeClass"](_0x96e6x4e["classes"]["first"])["removeClass"](_0x96e6x4e["classes"]["last"])["removeClass"](_0x96e6x4e["classes"]["left"])["removeClass"](_0x96e6x4e["classes"]["right"])["removeClass"](_0x96e6x4e["classes"]["firstCol"])["removeClass"](_0x96e6x4e["classes"]["lastCol"])["removeClass"](_0x96e6x4e["classes"]["firstRow"])["removeClass"](_0x96e6x4e["classes"]["lastRow"])["css"]({
                        "width": "",
                        "float": ""
                    })["addClass"](_0x96e6x4e["classes"]["tab"])["find"]("a")["addClass"](_0x96e6x4e["classes"]["link"]);
                    (_0x96e6x86["isTabDisabled"](_0x96e6x1c)) && (_0x96e6x6["disable"](_0x96e6x16));
                    (_0x96e6x6["settings"]["deeplinking"] === false) && _0x96e6x1(_0x96e6x74)["attr"](_0x96e6x6["settings"]["hashAttribute"], "tab" + (_0x96e6x16 + 1));
                });
                _0x96e6x6["$tabs"]["filter"]("li:first-child")["addClass"](_0x96e6x4e["classes"]["first"]);
                _0x96e6x6["$tabs"]["filter"]("li:last-child")["addClass"](_0x96e6x4e["classes"]["last"]);
            };
            var _0x96e6x8c = _0x96e6x1["zozo"]["core"]["utils"]["toArray"](_0x96e6x4e["classes"]["positions"]);
            _0x96e6x6["$elem"]["removeClass"](_0x96e6x4e["classes"]["wrapper"])["removeClass"](_0x96e6x4e["classes"]["rounded"])["removeClass"](_0x96e6x4e["classes"]["shadows"])["removeClass"](_0x96e6x4e["classes"]["spaced"])["removeClass"](_0x96e6x4e["classes"]["bordered"])["removeClass"](_0x96e6x4e["classes"]["dark"])["removeClass"](_0x96e6x6e)["removeClass"](_0x96e6x5e)["removeClass"](_0x96e6x5f)["removeClass"](_0x96e6x5d)["removeClass"](_0x96e6x4f)["removeClass"](_0x96e6x4e["classes"]["styles"]["join"](_0x96e6x4e["space"]))["removeClass"](_0x96e6x4e["classes"]["orientations"]["join"](_0x96e6x4e["space"]))["removeClass"](_0x96e6x8c["join"]()["replace"](_0x96e6x4e["commaRegExp"], _0x96e6x4e["space"]))["removeClass"](_0x96e6x4e["classes"]["sizes"]["join"](_0x96e6x4e["space"]))["removeClass"](_0x96e6x4e["classes"]["themes"]["join"](_0x96e6x4e["space"]))["removeClass"](_0x96e6x4e["classes"]["flatThemes"]["join"](_0x96e6x4e["space"]))["addClass"](_0x96e6x55)["addClass"](_0x96e6x6["settings"]["style"])["addClass"](_0x96e6x6["settings"]["size"])["addClass"](_0x96e6x6["settings"]["theme"]);
            (_0x96e6x86["isFlatTheme"](_0x96e6x6)) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4f);
            (_0x96e6x86["isLightTheme"](_0x96e6x6)) ? _0x96e6x6["$elem"]["addClass"](_0x96e6x5f): _0x96e6x6["$elem"]["addClass"](_0x96e6x5e);
            (_0x96e6x6["settings"]["rounded"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["rounded"]);
            (_0x96e6x6["settings"]["shadows"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["shadows"]);
            (_0x96e6x6["settings"]["bordered"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["bordered"]);
            (_0x96e6x6["settings"]["dark"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["dark"]);
            (_0x96e6x6["settings"]["spaced"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["spaced"]);
            (_0x96e6x6["settings"]["multiline"] === true) && _0x96e6x6["$elem"]["addClass"](_0x96e6x6e);
            _0x96e6x86["checkPosition"](_0x96e6x6);
            if (_0x96e6x6["$elem"]["find"]("\x3E ul." + "z-tabs-mobile")["length"]) {
                _0x96e6x6["$mobileNav"] = _0x96e6x6["$elem"]["find"]("\x3E ul." + "z-tabs-mobile");
            } else {
                _0x96e6x6["$mobileNav"] = _0x96e6x1("\x3Cul class=\x27z-tabs-nav z-tabs-mobile\x27\x3E\x3Cli\x3E\x3Ca class=\x27z-link\x27 style=\x27text-align: left;\x27\x3E\x3Cspan class=\x27z-title\x27\x3EOverview\x3C/span\x3E\x3Cspan class=\x27z-arrow\x27\x3E\x3C/span\x3E\x3C/a\x3E\x3C/li\x3E\x3C/ul\x3E");
            };
            if (_0x96e6x6["$mobileNav"]) {
                _0x96e6x6["$tabGroup"]["before"](_0x96e6x6.$mobileNav);
                if (_0x96e6x6["$elem"]["find"]("\x3E i." + _0x96e6x71)["length"]) {
                    _0x96e6x6["$mobileDropdownArrow"] = _0x96e6x6["$elem"]["find"]("\x3E i." + _0x96e6x71);
                } else {
                    _0x96e6x6["$mobileDropdownArrow"] = _0x96e6x1("\x3Ci class=\x27z-dropdown-arrow\x27\x3E\x3C/i\x3E");
                };
                _0x96e6x6["$tabGroup"]["before"](_0x96e6x6.$mobileDropdownArrow);
            };
            (jQuery["browser"]["mobile"]) && (_0x96e6x6["$elem"]["removeClass"](_0x96e6x55));
        },
        checkPosition: function (_0x96e6x6) {
            _0x96e6x6["$container"]["appendTo"](_0x96e6x6.$elem);
            _0x96e6x6["$tabGroup"]["prependTo"](_0x96e6x6.$elem);
            _0x96e6x6["$elem"]["find"]("\x3E span.z-tab-spacer")["remove"]();
            _0x96e6x6["$elem"]["addClass"](_0x96e6x4e["classes"]["wrapper"]);
            var _0x96e6x8d = _0x96e6x86["isTop"](_0x96e6x6);
            _0x96e6x6["$contents"]["each"](function (_0x96e6x16, _0x96e6x74) {
                var _0x96e6x8 = _0x96e6x1(_0x96e6x74);
                var _0x96e6x8e = _0x96e6x73;
                if (!_0x96e6x8["find"]("\x3E div." + _0x96e6x73)["length"]) {
                    if (_0x96e6x8["hasClass"]("z-row")) {
                        _0x96e6x8["removeClass"]("z-row");
                        _0x96e6x8e = "z-row " + _0x96e6x73;
                    };
                    _0x96e6x8["wrapInner"]("\x3Cdiv class=\x27" + _0x96e6x8e + "\x27\x3E\x3C/div\x3E");
                    _0x96e6x1["zozo"]["core"]["content"]["check"](_0x96e6x8);
                };
            });
            if (_0x96e6x6["settings"]["orientation"] === _0x96e6x65) {
                if (_0x96e6x6["settings"]["position"] !== _0x96e6x68) {
                    _0x96e6x6["settings"]["position"] = _0x96e6x67;
                };
            } else {
                _0x96e6x6["settings"]["orientation"] = _0x96e6x66;
                if (_0x96e6x8d === false) {
                    _0x96e6x6["$tabGroup"]["appendTo"](_0x96e6x6.$elem);
                    _0x96e6x1(_0x96e6x4e["elementSpacer"])["appendTo"](_0x96e6x6.$elem);
                    _0x96e6x6["$container"]["prependTo"](_0x96e6x6.$elem);
                };
            };
            _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["orientation"]);
            _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["position"]);
            if (_0x96e6x8d) {
                _0x96e6x6["$elem"]["addClass"](_0x96e6x69);
            } else {
                _0x96e6x6["$elem"]["addClass"](_0x96e6x6a);
            };
        },
        bindEvents: function (_0x96e6x6) {
            var _0x96e6x25 = (_0x96e6x6["settings"]["animation"]["effects"] === _0x96e6x4e["animation"]["effects"]["none"]) ? 0 : _0x96e6x6["settings"]["animation"]["duration"];
            _0x96e6x6["$tabs"]["each"](function () {
                var _0x96e6x1c = _0x96e6x1(this);
                var _0x96e6x8f = _0x96e6x1c["find"]("a")["attr"]("href");
                var _0x96e6x3d = _0x96e6x1c["find"]("a")["attr"]("target");
                if (!_0x96e6x1["trim"](_0x96e6x8f)["length"]) {
                    _0x96e6x86["bindEvent"](_0x96e6x6, _0x96e6x1c);
                } else {
                    _0x96e6x1c["on"]("ztap", {
                        data: _0x96e6x6["settings"]["event"]
                    }, function (_0x96e6x39) {
                        (_0x96e6x1["trim"](_0x96e6x3d)["length"]) ? _0x96e6x2["open"](_0x96e6x8f, _0x96e6x3d): _0x96e6x2["location"] = _0x96e6x8f;
                        _0x96e6x39["preventDefault"]();
                    });
                };
            });
            _0x96e6x1(_0x96e6x2)["resize"](function () {
                if (_0x96e6x6["lastWindowWidth"] !== _0x96e6x1(_0x96e6x2)["width"]()) {
                    clearInterval(_0x96e6x6["resizeWindowIntervalId"]);
                    _0x96e6x6["resizeWindowIntervalId"] = setTimeout(function () {
                        _0x96e6x6["lastWindowHeight"] = _0x96e6x1(_0x96e6x2)["height"]();
                        _0x96e6x6["lastWindowWidth"] = _0x96e6x1(_0x96e6x2)["width"]();
                        _0x96e6x86["checkWidth"](_0x96e6x6);
                    }, _0x96e6x6["settings"]["responsiveDelay"]);
                };
            });
            var _0x96e6x90 = _0x96e6x6["settings"]["next"];
            if (_0x96e6x90 != null) {
                _0x96e6x1(_0x96e6x90)["on"](_0x96e6x4e["events"]["click"], function (_0x96e6x39) {
                    _0x96e6x39["preventDefault"]();
                    _0x96e6x6["next"]();
                });
            };
            var _0x96e6x91 = _0x96e6x6["settings"]["prev"];
            if (_0x96e6x91 != null) {
                _0x96e6x1(_0x96e6x91)["on"](_0x96e6x4e["events"]["click"], function (_0x96e6x39) {
                    _0x96e6x39["preventDefault"]();
                    _0x96e6x6["prev"]();
                });
            };
            if (_0x96e6x6["$mobileNav"]) {
                _0x96e6x6["$mobileNav"]["find"]("li")["on"]("ztap", {
                    data: _0x96e6x6["settings"]["event"]
                }, function (_0x96e6x39) {
                    _0x96e6x39["preventDefault"]();
                    if (_0x96e6x6["$mobileNav"]["hasClass"](_0x96e6x4e["states"]["closed"])) {
                        _0x96e6x6["$mobileNav"]["removeClass"](_0x96e6x4e["states"]["closed"]);
                        _0x96e6x6["$tabGroup"]["removeClass"]("z-hide-menu");
                        _0x96e6x86["mobileNavAutoScroll"](_0x96e6x6);
                    } else {
                        _0x96e6x6["$mobileNav"]["addClass"](_0x96e6x4e["states"]["closed"]);
                        _0x96e6x6["$tabGroup"]["addClass"]("z-hide-menu");
                    };
                    _0x96e6x86["refreshParents"](_0x96e6x6, _0x96e6x25);
                });
            };
            _0x96e6x6["lastWindowHeight"] = _0x96e6x1(_0x96e6x2)["height"]();
            _0x96e6x6["lastWindowWidth"] = _0x96e6x1(_0x96e6x2)["width"]();
            _0x96e6x6["$elem"]["bind"](_0x96e6x50, _0x96e6x6["settings"]["ready"]);
            _0x96e6x6["$elem"]["bind"](_0x96e6x52, _0x96e6x6["settings"]["select"]);
            _0x96e6x6["$elem"]["bind"](_0x96e6x54, _0x96e6x6["settings"]["deactivate"]);
            _0x96e6x6["$elem"]["bind"](_0x96e6x51, _0x96e6x6["settings"]["error"]);
            _0x96e6x6["$elem"]["bind"](_0x96e6x57, _0x96e6x6["settings"]["contentLoad"]);
        },
        bindEvent: function (_0x96e6x6, _0x96e6x1c) {
            _0x96e6x1c["on"]("ztap", {
                data: _0x96e6x6["settings"]["event"]
            }, function (_0x96e6x39) {
                _0x96e6x39["preventDefault"]();
                if (_0x96e6x6["settings"]["autoplay"] !== false && _0x96e6x6["settings"]["autoplay"] != null) {
                    if (_0x96e6x6["settings"]["autoplay"]["smart"] === true) {
                        _0x96e6x6["stop"]();
                    };
                };
                _0x96e6x86["changeHash"](_0x96e6x6, _0x96e6x1c["attr"](_0x96e6x6["settings"]["hashAttribute"]));
                if (_0x96e6x86["allowAutoScrolling"](_0x96e6x6) === true && _0x96e6x86["isMobile"](_0x96e6x6)) {
                    _0x96e6x1(_0x96e6x2["opera"] ? "html" : "html, body")["animate"]({
                        scrollTop: _0x96e6x6["$elem"]["offset"]()["top"] + _0x96e6x6["settings"]["mobileAutoScrolling"]["contentTopOffset"]
                    }, 0);
                };
            });
        },
        mobileNavAutoScroll: function (_0x96e6x6) {
            if (_0x96e6x86["allowAutoScrolling"](_0x96e6x6) === true) {
                _0x96e6x1(_0x96e6x2["opera"] ? "html" : "html, body")["animate"]({
                    scrollTop: _0x96e6x6["$mobileNav"]["offset"]()["top"] + _0x96e6x6["settings"]["mobileAutoScrolling"]["navTopOffset"]
                }, 0);
            };
            return _0x96e6x6;
        },
        showTab: function (_0x96e6x6, _0x96e6x75) {
            if (_0x96e6x86["tabExist"](_0x96e6x6, _0x96e6x75) && _0x96e6x75 != null && _0x96e6x6["settings"]["animating"] !== true) {
                var _0x96e6x92 = _0x96e6x6["$tabs"]["filter"]("li[" + _0x96e6x6["settings"]["hashAttribute"] + "=\x27" + _0x96e6x75 + "\x27]");
                var _0x96e6x93 = _0x96e6x6["$tabs"]["index"](_0x96e6x92);
                var _0x96e6x94 = _0x96e6x86["getActive"](_0x96e6x6, _0x96e6x93);
                if (_0x96e6x94["enabled"] && _0x96e6x94["preIndex"] !== _0x96e6x94["index"] && _0x96e6x6["settings"]["noTabs"] !== true) {
                    _0x96e6x6["currentTab"] = _0x96e6x92;
                    _0x96e6x6["$tabs"]["removeClass"](_0x96e6x4e["classes"]["active"]);
                    _0x96e6x6["currentTab"]["addClass"](_0x96e6x4e["classes"]["active"]);
                    if (_0x96e6x6["settings"]["rememberState"] === true && _0x96e6x1["zozo"]["core"]["support"]["html5_storage"]()) {
                        localStorage["setItem"](_0x96e6x6["tabID"] + "_defaultTab", _0x96e6x92["data"]("link"));
                    };
                    _0x96e6x86["mobileNav"](_0x96e6x6, false, _0x96e6x94["index"]);
                    if (_0x96e6x94["contentUrl"]) {
                        if (_0x96e6x94["preIndex"] === -1) {
                            _0x96e6x94["content"]["css"]({
                                "opacity": "",
                                "left": "",
                                "top": "",
                                "position": "relative"
                            })["show"]();
                        };
                        if (_0x96e6x94["contentType"] === "iframe") {
                            _0x96e6x86["iframeContent"](_0x96e6x6, _0x96e6x94);
                        } else {
                            _0x96e6x86["ajaxRequest"](_0x96e6x6, _0x96e6x94);
                        };
                    } else {
                        _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x94);
                    };
                };
            };
        },
        getActiveIndex: function (_0x96e6x6) {
            var _0x96e6x7e;
            if (_0x96e6x6["settings"]["noTabs"] === true) {
                _0x96e6x7e = _0x96e6x6["$container"]["find"]("\x3Ediv." + _0x96e6x4e["classes"]["active"])["index"]();
            } else {
                if (_0x96e6x6["currentTab"]) {
                    _0x96e6x7e = parseInt(_0x96e6x6["currentTab"]["index"]());
                } else {
                    _0x96e6x7e = _0x96e6x6["$tabGroup"]["find"]("li." + _0x96e6x4e["classes"]["active"])["index"]();
                };
            };
            return _0x96e6x7e;
        },
        getActive: function (_0x96e6x6, _0x96e6x7e) {
            var _0x96e6x95 = _0x96e6x86["getActiveIndex"](_0x96e6x6);
            var _0x96e6x96 = _0x96e6x6["$contents"]["eq"](_0x96e6x7e);
            var _0x96e6x97 = _0x96e6x6["$tabs"]["eq"](_0x96e6x7e);
            var _0x96e6x98 = _0x96e6x6["$tabs"]["eq"](_0x96e6x95);
            var _0x96e6x27 = _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"];
            var _0x96e6x25 = (_0x96e6x6["settings"]["animation"]["effects"] === _0x96e6x4e["animation"]["effects"]["none"]) ? 0 : _0x96e6x6["settings"]["animation"]["duration"];
            var _0x96e6x94 = {
                index: _0x96e6x7e,
                tab: _0x96e6x97,
                content: _0x96e6x96,
                contentInner: _0x96e6x96["find"]("\x3E .z-content-inner"),
                enabled: _0x96e6x86["isTabDisabled"](_0x96e6x97) === false,
                contentUrl: _0x96e6x96["data"](_0x96e6x58),
                contentType: _0x96e6x96["data"](_0x96e6x59),
                noAnimation: false,
                transition: _0x96e6x27,
                duration: _0x96e6x25,
                preIndex: _0x96e6x95,
                preTab: _0x96e6x98,
                preContent: _0x96e6x6["$contents"]["eq"](_0x96e6x95)
            };
            return _0x96e6x94;
        },
        iframeContent: function (_0x96e6x6, _0x96e6x94) {
            var _0x96e6x99 = _0x96e6x94["contentInner"]["find"]("\x3E div \x3E.z-iframe");
            if (!_0x96e6x99["length"]) {
                _0x96e6x86["showLoading"](_0x96e6x6);
                _0x96e6x94["contentInner"]["append"]("\x3Cdiv class=\x22z-video\x22\x3E\x3Ciframe src=\x22" + _0x96e6x94["contentUrl"] + "\x22 frameborder=\x220\x22 scrolling=\x22auto\x22 height=\x221400\x22 class=\x22z-iframe\x22\x3E\x3C/iframe\x3E\x3C/div\x3E");
                console["log"]("add iframe");
            } else {
                _0x96e6x86["hideLoading"](_0x96e6x6);
            };
            _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x94);
            _0x96e6x94["contentInner"]["find"](".z-iframe")["load"](function () {
                _0x96e6x86["hideLoading"](_0x96e6x6);
            });
            return _0x96e6x6;
        },
        showLoading: function (_0x96e6x6) {
            _0x96e6x6["$container"]["append"]("\x3Cspan class=\x22" + _0x96e6x60 + "\x22\x3E\x3C/span\x3E");
            return _0x96e6x6;
        },
        hideLoading: function (_0x96e6x6) {
            _0x96e6x6["$container"]["find"]("\x3E." + _0x96e6x60)["remove"]();
            return _0x96e6x6;
        },
        ajaxRequest: function (_0x96e6x6, _0x96e6x94) {
            var _0x96e6x2f = {};
            var _0x96e6x9a = {
                tab: _0x96e6x94["tab"],
                content: _0x96e6x94["contentInner"],
                index: _0x96e6x94["index"],
                xhr: null,
                message: ""
            };
            _0x96e6x1["ajax"]({
                type: "GET",
                cache: (_0x96e6x6["settings"]["cacheAjax"] === true),
                url: _0x96e6x94["contentUrl"],
                dataType: "html",
                data: _0x96e6x2f,
                beforeSend: function (_0x96e6x9b, _0x96e6x9c) {
                    _0x96e6x86["showLoading"](_0x96e6x6);
                    _0x96e6x6["settings"]["animating"] = true;
                },
                error: function (_0x96e6x9b, _0x96e6x9d, _0x96e6x9e) {
                    if (_0x96e6x9b["status"] == 404) {
                        _0x96e6x9a["message"] = "\x3Ch4 style=\x27color:red;\x27\x3ESorry, error: 404 - the requested content could not be found.\x3C/h4\x3E";
                    } else {
                        _0x96e6x9a["message"] = "\x3Ch4 style=\x27color:red;\x27\x3EAn error occurred: " + _0x96e6x9d + "\x0AError: " + _0x96e6x9b + " code: " + _0x96e6x9b["status"] + "\x3C/h4\x3E";
                    };
                    _0x96e6x9a["xhr"] = _0x96e6x9b;
                    (_0x96e6x6["settings"]["error"] && typeof (_0x96e6x6["settings"]["error"]) == typeof (Function)) && _0x96e6x6["$elem"]["trigger"](_0x96e6x51, _0x96e6x9a);
                    _0x96e6x94["contentInner"]["html"](_0x96e6x9a["message"]);
                },
                complete: function (_0x96e6x9b, _0x96e6x9d) {
                    setTimeout(function () {
                        _0x96e6x6["settings"]["animating"] = false;
                        _0x96e6x86["showContent"](_0x96e6x6, _0x96e6x94);
                        _0x96e6x86["hideLoading"](_0x96e6x6);
                    }, _0x96e6x6["settings"]["delayAjax"]);
                },
                success: function (_0x96e6x2f, _0x96e6x9d, _0x96e6x9b) {
                    setTimeout(function () {
                        _0x96e6x94["contentInner"]["html"](_0x96e6x2f);
                        _0x96e6x9a["xhr"] = _0x96e6x9b;
                        _0x96e6x6["$elem"]["trigger"](_0x96e6x57, _0x96e6x9a);
                    }, _0x96e6x6["settings"]["delayAjax"]);
                }
            });
            return _0x96e6x6;
        },
        showContent: function (_0x96e6x6, _0x96e6x94) {
            if (_0x96e6x94["preIndex"] !== _0x96e6x94["index"] && _0x96e6x6["settings"]["animating"] !== true) {
                _0x96e6x6["settings"]["animating"] = true;
                _0x96e6x6["$contents"]["removeClass"](_0x96e6x4e["classes"]["active"]);
                _0x96e6x94["content"]["addClass"](_0x96e6x4e["classes"]["active"]);
                if (_0x96e6x94["preIndex"] === -1) {
                    _0x96e6xd5["init"](_0x96e6x6, _0x96e6x94);
                } else {
                    var _0x96e6x88 = _0x96e6x6["settings"]["animation"]["effects"];
                    var _0x96e6x9f = _0x96e6x86["getContentHeight"](_0x96e6x6, _0x96e6x94["preContent"], true)["height"];
                    var _0x96e6xa0 = _0x96e6x86["getContentHeight"](_0x96e6x6, _0x96e6x94["content"], true)["height"];
                    var _0x96e6xa1 = _0x96e6x86["isLarger"](_0x96e6x9f, _0x96e6xa0);
                    if (_0x96e6x6["settings"]["orientation"] === _0x96e6x66 && _0x96e6x6["settings"]["autoContentHeight"] === true) {
                        _0x96e6xa1 = (_0x96e6x9f > _0x96e6xa0) ? _0x96e6x9f : _0x96e6xa0;
                    };
                    var _0x96e6xa2 = (_0x96e6x88 === _0x96e6x4e["animation"]["effects"]["slideH"] || _0x96e6x88 === _0x96e6x4e["animation"]["effects"]["slideLeft"] || _0x96e6x88 === _0x96e6x4e["animation"]["effects"]["slideRight"]) ? _0x96e6x6["$container"]["width"]() : _0x96e6xa2 = _0x96e6xa1;
                    if (_0x96e6x94["preIndex"] < _0x96e6x94["index"] && _0x96e6x88 === _0x96e6x4e["animation"]["effects"]["slideV"]) {
                        var _0x96e6xa3 = _0x96e6x86["isLarger"](_0x96e6x9f, _0x96e6xa0);
                        (_0x96e6xa3 > _0x96e6xa2) && (_0x96e6xa2 = _0x96e6xa3);
                    };
                    var _0x96e6xa4 = -_0x96e6xa2;
                    var _0x96e6xa5 = _0x96e6xa2;
                    if (_0x96e6x94["preIndex"] > _0x96e6x94["index"]) {
                        _0x96e6xa4 = _0x96e6xa2;
                        _0x96e6xa5 = -_0x96e6xa2;
                    };
                    _0x96e6xd5["before"](_0x96e6x6, _0x96e6x94);
                    switch (_0x96e6x88) {
                        case _0x96e6x4e["animation"]["effects"]["slideV"]:
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], null, {
                                "left": 0,
                                "top": _0x96e6xa4 + "px"
                            });
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], {
                                "left": 0,
                                "top": _0x96e6xa5 + "px"
                            }, {
                                "top": 0
                            });
                            break;;
                        case _0x96e6x4e["animation"]["effects"]["slideUp"]:
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], {
                                "opacity": 1
                            }, {
                                "left": 0,
                                "top": (-_0x96e6xa2) + "px"
                            });
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], {
                                "left": 0,
                                "top": (_0x96e6xa2 * 1) + "px"
                            }, {
                                "top": 0
                            });
                            break;;
                        case _0x96e6x4e["animation"]["effects"]["slideDown"]:
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], {
                                "opacity": 1
                            }, {
                                "left": 0,
                                "top": (_0x96e6xa2) + "px"
                            });
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], {
                                "left": 0,
                                "top": (-_0x96e6xa2) + "px"
                            }, {
                                "top": 0
                            });
                            break;;
                        case _0x96e6x4e["animation"]["effects"]["slideUpDown"]:
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], {
                                "opacity": 1
                            }, {
                                "left": 0,
                                "top": (-_0x96e6xa2 * 1) + "px"
                            });
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], {
                                "left": 0,
                                "top": (-(_0x96e6xa2 * 2)) + "px"
                            }, {
                                "top": 0
                            });
                            break;;
                        case _0x96e6x4e["animation"]["effects"]["slideH"]:
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], null, {
                                "left": _0x96e6xa4 + "px"
                            });
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], {
                                "left": _0x96e6xa5 + "px"
                            }, {
                                "left": 0
                            });
                            break;;
                        case _0x96e6x4e["animation"]["effects"]["slideRight"]:
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], {
                                "opacity": 1
                            }, {
                                "top": 0,
                                "left": (_0x96e6xa2) + "px"
                            });
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], {
                                "top": 0,
                                "left": (-_0x96e6xa2) + "px"
                            }, {
                                "top": 0,
                                "left": 0
                            });
                            break;;
                        case _0x96e6x4e["animation"]["effects"]["slideLeft"]:
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], {
                                "opacity": 1
                            }, {
                                "top": 0,
                                "left": (-_0x96e6xa2) + "px"
                            });
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], {
                                "top": 0,
                                "left": (_0x96e6xa2) + "px"
                            }, {
                                "top": 0,
                                "left": 0
                            });
                            break;;
                        case _0x96e6x4e["animation"]["effects"]["fade"]:
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["preContent"], {
                                "display": "block"
                            }, {
                                "opacity": 0
                            });
                            _0x96e6x86["animate"](_0x96e6x6, _0x96e6x94["content"], {
                                "display": "block",
                                "opacity": 0
                            }, {
                                "opacity": 1
                            });
                            break;;
                        case _0x96e6x4e["animation"]["effects"]["none"]:
                            _0x96e6x6["$contents"]["css"]({
                                "position": "absolute",
                                "left": 0,
                                "top": 0
                            })["removeClass"](_0x96e6x4e["classes"]["active"])["hide"]()["eq"](_0x96e6x94["index"])["addClass"](_0x96e6x4e["classes"]["active"])["css"]({
                                "position": "relative"
                            })["show"]();
                            break;;
                        default:
                            ;
                    };
                    _0x96e6xd5["after"](_0x96e6x6, _0x96e6x94);
                };
            };
        },
        refreshParents: function (_0x96e6x6, _0x96e6x25) {
            setTimeout(function () {
                _0x96e6x6["$elem"]["parents"](".z-tabs")["each"](function (_0x96e6x16, _0x96e6x74) {
                    _0x96e6x1(_0x96e6x74)["data"]("zozoTabs")["refresh"]();
                });
            }, _0x96e6x25);
        },
        animate: function (_0x96e6x6, _0x96e6x20, _0x96e6x21, _0x96e6x22, _0x96e6x23, _0x96e6x24) {
            _0x96e6x1["zozo"]["core"]["utils"]["animate"](_0x96e6x6, _0x96e6x20, _0x96e6x21, _0x96e6x22, _0x96e6x23, _0x96e6x24);
        },
        mobileNav: function (_0x96e6x6, _0x96e6xa6, _0x96e6x93) {
            if (_0x96e6x93 !== null && _0x96e6x6["$mobileNav"]) {
                _0x96e6x6["$mobileNav"]["find"]("\x3E li \x3E a \x3E span.z-title")["html"](_0x96e6x6["$tabs"]["eq"](_0x96e6x93)["find"]("a")["html"]());
            };
            if (_0x96e6xa6 === true) {
                setTimeout(function () {
                    _0x96e6x6["$mobileNav"]["removeClass"](_0x96e6x4e["states"]["closed"]);
                }, _0x96e6x6["settings"]["animation"]["mobileDuration"]);
                _0x96e6x6["$tabGroup"]["removeClass"]("z-hide-menu");;;
            } else {
                (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["addClass"](_0x96e6x4e["states"]["closed"]);
                _0x96e6x6["$tabGroup"]["addClass"]("z-hide-menu");
            };
        },
        setResponsiveDimension: function (_0x96e6x6, _0x96e6xa7, _0x96e6xa8) {
            var _0x96e6xa9 = _0x96e6x6["$container"];
            _0x96e6x6["settings"]["original"]["count"] = parseInt(_0x96e6x6["$tabs"]["size"]());
            if (!_0x96e6xa8) {
                _0x96e6x6["settings"]["original"]["itemD"] = parseInt(_0x96e6xa9["width"]() / _0x96e6x6["settings"]["original"]["itemWidth"]);
                _0x96e6x6["settings"]["original"]["itemM"] = _0x96e6x6["settings"]["original"]["itemWidth"] + _0x96e6x6["settings"]["original"]["itemM"];
            };
            _0x96e6x6["settings"]["original"]["firstRowWidth"] = (_0x96e6x6["settings"]["original"]["itemWidth"] / (parseInt(_0x96e6x6["settings"]["original"]["itemD"]) * _0x96e6x6["settings"]["original"]["itemWidth"]) * 100);
            _0x96e6x6["settings"]["original"]["itemCount"] = parseInt(_0x96e6x6["settings"]["original"]["itemD"]) * parseInt(_0x96e6x6["settings"]["original"]["count"] / (parseInt(_0x96e6x6["settings"]["original"]["itemD"])));
            _0x96e6x6["settings"]["original"]["lastItem"] = 100 / (parseInt(_0x96e6x6["settings"]["original"]["count"]) - parseInt(_0x96e6x6["settings"]["original"]["itemCount"]));
            _0x96e6x6["settings"]["original"]["navHeight"] = _0x96e6x6["settings"]["original"]["itemD"] * (parseInt(_0x96e6x6["$tabs"]["eq"](0)["innerHeight"]())) + ((_0x96e6x6["settings"]["original"]["itemM"] > 0 ? _0x96e6x6["$tabs"]["eq"](0)["innerHeight"]() : 0));
            _0x96e6x6["settings"]["original"]["bottomLeft"] = _0x96e6x6["settings"]["original"]["count"] - (_0x96e6x6["settings"]["original"]["count"] - _0x96e6x6["settings"]["original"]["itemCount"]);
            _0x96e6x6["settings"]["original"]["rows"] = _0x96e6x6["settings"]["original"]["count"] > _0x96e6x6["settings"]["original"]["itemCount"] ? parseInt(_0x96e6x6["settings"]["original"]["itemCount"] / _0x96e6x6["settings"]["original"]["itemD"]) + 1 : parseInt(_0x96e6x6["settings"]["original"]["itemCount"] / _0x96e6x6["settings"]["original"]["itemD"]);
            _0x96e6x6["settings"]["original"]["lastRowItems"] = _0x96e6x6["settings"]["original"]["count"] - (_0x96e6x6["settings"]["original"]["itemCount"] * (_0x96e6x6["settings"]["original"]["rows"] - 1));
            _0x96e6x6["settings"]["original"]["itemsPerRow"] = _0x96e6x6["settings"]["original"]["itemCount"] / _0x96e6x6["settings"]["original"]["rows"];
            if (_0x96e6xa9["width"]() > _0x96e6xa7 && !_0x96e6xa8) {
                _0x96e6x6["settings"]["original"]["itemD"] = _0x96e6x6["settings"]["original"]["count"];
                _0x96e6x6["settings"]["original"]["itemM"] = 0;
                _0x96e6x6["settings"]["original"]["rows"] = 1;
                _0x96e6x6["settings"]["original"]["itemCount"] = _0x96e6x6["settings"]["original"]["count"];
            };
            return _0x96e6x6;
        },
        checkWidth: function (_0x96e6x6, _0x96e6x87, _0x96e6x89) {
            var _0x96e6xa7 = 0;
            var _0x96e6xa9 = _0x96e6x6["$container"];
            var _0x96e6xaa = _0x96e6x86["isCompact"](_0x96e6x6);
            var _0x96e6xab = 0;
            var _0x96e6xac = _0x96e6x6["settings"]["tabRatio"];
            var _0x96e6xad = _0x96e6x6["settings"]["tabRatioCompact"];
            _0x96e6x6["$tabs"]["each"](function (_0x96e6x16) {
                var _0x96e6xae = _0x96e6x1(this)["outerWidth"](true) * _0x96e6xac;
                (_0x96e6xaa) && (_0x96e6xae = (_0x96e6xae * _0x96e6xad));
                if (_0x96e6x87 === true) {
                    if (_0x96e6xae > _0x96e6x6["settings"]["original"]["itemWidth"]) {
                        _0x96e6x6["settings"]["original"]["itemWidth"] = _0x96e6xae;
                        _0x96e6x6["settings"]["original"]["itemMaxWidth"] = _0x96e6xae;
                    };
                    if (_0x96e6xae < _0x96e6x6["settings"]["original"]["itemMinWidth"]) {
                        _0x96e6x6["settings"]["original"]["itemMinWidth"] = _0x96e6xae;
                    };
                };
                _0x96e6xab = _0x96e6xab + _0x96e6x1(this)["innerHeight"]();
                _0x96e6xa7 = _0x96e6xa7 + _0x96e6xae;
            });
            if (_0x96e6x87 === true) {
                _0x96e6xa7 = _0x96e6xa7 + (_0x96e6x6["settings"]["original"]["itemWidth"] * 0);
            };
            _0x96e6x6["settings"]["original"]["count"] = parseInt(_0x96e6x6["$tabs"]["size"]());
            _0x96e6x6["settings"]["original"]["groupWidth"] = _0x96e6xa7;
            _0x96e6x86["setResponsiveDimension"](_0x96e6x6, _0x96e6x6["settings"]["original"]["groupWidth"]);
            if (_0x96e6x6["settings"]["original"]["count"] > 3 && _0x96e6x6["settings"]["original"]["lastRowItems"] === 1) {
                _0x96e6x6["settings"]["original"]["itemD"] = _0x96e6x6["settings"]["original"]["itemD"] - 1;
                _0x96e6x6["settings"]["original"]["itemM"] = _0x96e6xa9["width"]() % _0x96e6x6["settings"]["original"]["itemWidth"];
                _0x96e6x86["setResponsiveDimension"](_0x96e6x6, _0x96e6x6["settings"]["original"]["groupWidth"], true);
            };
            if (_0x96e6x87 === true || _0x96e6x89 === true) {
                _0x96e6x6["settings"]["original"]["initGroupWidth"] = _0x96e6x6["settings"]["original"]["groupWidth"];
                if (_0x96e6x86["isCompact"](_0x96e6x6)) {
                    var _0x96e6xaf = 100 / _0x96e6x6["settings"]["original"]["count"];
                    _0x96e6x6["$tabs"]["each"](function () {
                        _0x96e6x1(this)["css"]({
                            "width": _0x96e6xaf + "%"
                        });
                    });
                };
                _0x96e6x6["settings"]["original"]["position"] = _0x96e6x6["settings"]["position"];
            };
            if (_0x96e6x6["settings"]["responsive"] === true) {
                _0x96e6x86["responsive"](_0x96e6x6, _0x96e6x87);
            };
            var _0x96e6xb0 = ((_0x96e6x86["isCompact"](_0x96e6x6) && !_0x96e6x86["isMobile"](_0x96e6x6)));
            var _0x96e6xb1 = (_0x96e6x86["isResponsive"](_0x96e6x6) && _0x96e6x6["BrowserDetection"]["isIE"](7)) ? {
                "float": "none",
                "width": "auto"
            } : {
                "float": ""
            };
            var _0x96e6xb2 = _0x96e6x6["$elem"]["hasClass"](_0x96e6x72);
            _0x96e6x6["$tabs"]["each"](function (_0x96e6x16) {
                if (((_0x96e6xb2 === true && (_0x96e6x16 + 1) === _0x96e6x6["settings"]["original"]["itemD"]) || (_0x96e6x16 + 1) === _0x96e6x6["settings"]["original"]["count"]) && _0x96e6xb0) {
                    _0x96e6x1(this)["css"](_0x96e6xb1);
                } else {
                    _0x96e6x1(this)["css"]({
                        "float": ""
                    });
                };
            });
            if (_0x96e6x6["settings"]["orientation"] === _0x96e6x65) {
                _0x96e6x86["setContentHeight"](_0x96e6x6, null, true);
            };
        },
        checkModes: function (_0x96e6x6) {
            var _0x96e6xaa = _0x96e6x86["isCompact"](_0x96e6x6);
            if (_0x96e6x6["settings"]["mode"] === _0x96e6x4e["modes"]["stacked"]) {
                _0x96e6x6["$elem"]["addClass"](_0x96e6x5d);
                _0x96e6x6["$elem"]["addClass"](_0x96e6x72);
                _0x96e6x6["$tabs"]["css"]({
                    "width": ""
                });
                (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["hide"]();
            } else {
                if (_0x96e6xaa) {
                    var _0x96e6xaf = 100 / _0x96e6x6["settings"]["original"]["count"];
                    _0x96e6x6["$tabs"]["each"](function () {
                        _0x96e6x1(this)["css"]({
                            "float": "",
                            "width": _0x96e6xaf + "%"
                        });
                    });
                } else {
                    _0x96e6x6["$tabs"]["each"](function () {
                        _0x96e6x1(this)["css"]({
                            "float": "",
                            "width": ""
                        });
                    });
                };
            };
        },
        getContentHeight: function (_0x96e6x6, _0x96e6xb3, _0x96e6xb4) {
            var _0x96e6xb5 = _0x96e6x6["settings"]["autoContentHeight"];
            var _0x96e6xb6 = {
                width: 0,
                height: 0
            };
            if (_0x96e6xb5 != true) {
                _0x96e6x6["$contents"]["each"](function (_0x96e6x16, _0x96e6x74) {
                    var _0x96e6x8 = _0x96e6x1(_0x96e6x74);
                    var _0x96e6xb7 = _0x96e6x86["getElementSize"](_0x96e6x8);
                    (_0x96e6xb7["height"] > _0x96e6xb6["height"]) && (_0x96e6xb6["height"] = _0x96e6xb7["height"]);
                    (_0x96e6xb7["width"] > _0x96e6xb6["width"]) && (_0x96e6xb6["width"] = _0x96e6xb7["width"]);
                });
            } else {
                var _0x96e6xb8 = _0x96e6x6["$elem"]["find"]("\x3E .z-container \x3E .z-content.z-active");
                if (_0x96e6xb3 != null) {
                    _0x96e6xb8 = _0x96e6xb3;
                };
                _0x96e6xb6["height"] = _0x96e6x86["getElementSize"](_0x96e6xb8)["height"];
            };
            if (_0x96e6x6["settings"]["orientation"] === _0x96e6x65 && !_0x96e6x86["isMobile"](_0x96e6x6)) {
                var _0x96e6xb9 = 0;
                _0x96e6x6["$tabs"]["each"](function (_0x96e6x16) {
                    _0x96e6xb9 = _0x96e6xb9 + parseInt(_0x96e6x1(this)["height"]()) + parseInt(_0x96e6x1(this)["css"]("border-top-width")) + parseInt(_0x96e6x1(this)["css"]("border-bottom-width"));
                });
                _0x96e6xb6["height"] = _0x96e6x86["isLarger"](_0x96e6xb6["height"], _0x96e6x6["$tabGroup"]["innerHeight"]());
                _0x96e6xb6["height"] = _0x96e6x86["isLarger"](_0x96e6xb6["height"], _0x96e6xb9);
            };
            return _0x96e6xb6;
        },
        setContentHeight: function (_0x96e6x6, _0x96e6xb3, _0x96e6xb4) {
            var _0x96e6xb6 = _0x96e6x86["getContentHeight"](_0x96e6x6, _0x96e6xb3, _0x96e6xb4);
            _0x96e6x6["settings"]["original"]["contentMaxHeight"] = _0x96e6xb6["height"];
            _0x96e6x6["settings"]["original"]["contentMaxWidth"] = _0x96e6xb6["width"];
            var _0x96e6x25 = (_0x96e6x6["settings"]["animation"]["effects"] === _0x96e6x4e["animation"]["effects"]["none"] || _0x96e6xb4 === true) ? 0 : _0x96e6x6["settings"]["animation"]["duration"];
            var _0x96e6xb5 = _0x96e6x6["settings"]["autoContentHeight"];
            var _0x96e6x27 = _0x96e6x1["zozo"]["core"]["support"]["css"]["transition"];
            var _0x96e6xba = {
                _transition: "none",
                "min-height": _0x96e6x6["settings"]["original"]["contentMaxHeight"] + "px"
            };
            if (_0x96e6xb4 === true) {
                _0x96e6x6["$container"]["css"](_0x96e6xba);
            } else {
                _0x96e6x86["animate"](_0x96e6x6, _0x96e6x6.$container, null, _0x96e6xba, {});
            };
            return _0x96e6x6;
        },
        responsive: function (_0x96e6x6, _0x96e6x87) {
            var _0x96e6xbb = _0x96e6x1(_0x96e6x2)["width"]();
            var _0x96e6x8d = _0x96e6x86["isTop"](_0x96e6x6);
            var _0x96e6xaa = _0x96e6x86["isCompact"](_0x96e6x6);
            var _0x96e6xbc = _0x96e6x6["settings"]["original"]["initGroupWidth"] >= _0x96e6x6["$container"]["width"]();
            var _0x96e6xbd = _0x96e6x6["settings"]["original"]["rows"] > _0x96e6x6["settings"]["maxRows"];
            var _0x96e6xbe = _0x96e6xbb <= _0x96e6x6["settings"]["minWindowWidth"];
            var _0x96e6xbf = (!_0x96e6x6["BrowserDetection"]["isIE"](8) && _0x96e6x6["settings"]["mobileNav"] === true && _0x96e6x6["$mobileNav"] != null);
            var _0x96e6x84 = _0x96e6x6["settings"]["original"]["count"];
            var _0x96e6xc0 = _0x96e6x6["settings"]["original"]["itemCount"];
            var _0x96e6xc1 = _0x96e6x6["settings"]["original"]["itemD"];
            var _0x96e6xc2 = _0x96e6x6["settings"]["original"]["rows"];
            _0x96e6x6["$elem"]["removeClass"](_0x96e6x5d);
            _0x96e6x6["$tabs"]["removeClass"](_0x96e6x4e["classes"]["left"])["removeClass"](_0x96e6x4e["classes"]["right"])["removeClass"](_0x96e6x4e["classes"]["firstCol"])["removeClass"](_0x96e6x4e["classes"]["lastCol"])["removeClass"](_0x96e6x4e["classes"]["firstRow"])["removeClass"](_0x96e6x4e["classes"]["lastRow"]);
            if (_0x96e6x6["settings"]["orientation"] === _0x96e6x66) {
                var _0x96e6xc3 = (_0x96e6xaa && (parseInt(_0x96e6x6["settings"]["original"]["count"] * _0x96e6x6["settings"]["original"]["itemWidth"]) >= _0x96e6x6["$container"]["width"]()));
                var _0x96e6xc4 = (!_0x96e6xaa && _0x96e6xbc);
                var _0x96e6xc5 = _0x96e6xc3 || _0x96e6xc4;
                if (_0x96e6xc5) {
                    (_0x96e6xc2 === _0x96e6x84 || (_0x96e6x6["settings"]["mode"] === _0x96e6x4e["modes"]["stacked"])) && (_0x96e6x6["$elem"]["addClass"](_0x96e6x5d));
                    _0x96e6x6["$tabs"]["each"](function (_0x96e6x16) {
                        var _0x96e6xc6 = _0x96e6x1(this);
                        var _0x96e6x83 = (_0x96e6x16 + 1);
                        if (_0x96e6x6["settings"]["original"]["itemM"] > 0) {
                            if (_0x96e6x83 <= _0x96e6xc0) {
                                _0x96e6xc6["css"]({
                                    "float": "",
                                    "width": _0x96e6x6["settings"]["original"]["firstRowWidth"] + "%"
                                });
                            } else {
                                _0x96e6xc6["css"]({
                                    "float": "",
                                    "width": _0x96e6x6["settings"]["original"]["lastItem"] + "%"
                                });
                            };
                            if (_0x96e6x8d === true) {
                                (_0x96e6x16 === (_0x96e6xc1 - 1)) ? _0x96e6xc6["addClass"](_0x96e6x4e["classes"]["right"]): _0x96e6xc6["removeClass"](_0x96e6x4e["classes"]["right"]);
                            } else {
                                (_0x96e6x83 === _0x96e6x84) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["right"]));
                                (_0x96e6x16 === _0x96e6x6["settings"]["original"]["bottomLeft"]) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["left"]));
                            };
                            if (_0x96e6xc2 > 1 && _0x96e6xc1 !== 1) {
                                (_0x96e6x83 === 1 || (_0x96e6x83 > _0x96e6xc1 && (_0x96e6x83 % _0x96e6xc1 === 1))) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["firstCol"]));
                                (_0x96e6x83 === _0x96e6x84 || (_0x96e6x83 >= _0x96e6xc1 && (_0x96e6x83 % _0x96e6xc1 === 0))) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["lastCol"]));
                                (_0x96e6x83 <= _0x96e6xc1) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["firstRow"]));
                                (_0x96e6x83 > (_0x96e6xc1 * (_0x96e6xc2 - 1))) && (_0x96e6xc6["addClass"](_0x96e6x4e["classes"]["lastRow"]));
                            };
                        };
                    });
                    _0x96e6x86["switchResponsiveClasses"](_0x96e6x6, true);
                } else {
                    if (_0x96e6xaa) {
                        var _0x96e6xaf = 100 / _0x96e6x6["settings"]["original"]["count"];
                        _0x96e6x6["$tabs"]["each"](function () {
                            _0x96e6x1(this)["css"]({
                                "float": "",
                                "width": _0x96e6xaf + "%"
                            });
                        });
                    } else {
                        _0x96e6x6["$tabs"]["each"](function () {
                            _0x96e6x1(this)["css"]({
                                "float": "",
                                "width": ""
                            });
                        });
                    };
                    _0x96e6x86["switchResponsiveClasses"](_0x96e6x6, false);
                };
                if (_0x96e6xbb >= 1200 && _0x96e6x6["responsive"] != _0x96e6x4e["responsive"]["largeDesktop"]) {
                    _0x96e6x6["responsive"] = _0x96e6x4e["responsive"]["largeDesktop"];
                    _0x96e6x86["switchMenu"](_0x96e6x6, false);
                };
                if (_0x96e6x6["responsive"] != _0x96e6x4e["responsive"]["phone"] && _0x96e6xbf && ((_0x96e6xbe) || ((_0x96e6xbd)))) {
                    _0x96e6x6["responsive"] = "auto";
                    _0x96e6x6["$elem"]["removeClass"](_0x96e6x72);
                    _0x96e6x6["$tabs"]["each"](function () {
                        _0x96e6x1(this)["css"]({
                            "width": ""
                        });
                    });
                    _0x96e6x6["$tabs"]["filter"]("li:first-child")["addClass"](_0x96e6x4e["classes"]["first"]);
                    _0x96e6x6["$tabs"]["filter"]("li:last-child")["addClass"](_0x96e6x4e["classes"]["last"]);
                    _0x96e6x86["switchMenu"](_0x96e6x6, true);
                };
            } else {
                if (_0x96e6xbf === true && (_0x96e6xbe || parseInt(_0x96e6x6["$elem"]["width"]() - _0x96e6x6["settings"]["original"]["itemWidth"]) < _0x96e6x6["settings"]["minWidth"])) {
                    _0x96e6x86["switchMenu"](_0x96e6x6, true);
                } else {
                    _0x96e6x86["switchMenu"](_0x96e6x6, false);
                };
            };
            _0x96e6x86["refreshParents"](_0x96e6x6, 0);
        },
        switchResponsiveClasses: function (_0x96e6x6, _0x96e6xc7) {
            var _0x96e6x8d = _0x96e6x86["isTop"](_0x96e6x6);
            var _0x96e6xc8 = _0x96e6x6["settings"]["original"]["position"];
            var _0x96e6xc9 = _0x96e6x4e["classes"]["positions"]["topLeft"];
            var _0x96e6xca = _0x96e6x4e["classes"]["positions"]["bottomLeft"];
            if (_0x96e6xc7 === true) {
                _0x96e6x6["$elem"]["addClass"](_0x96e6x72);
                _0x96e6x86["switchMenu"](_0x96e6x6, false);
                _0x96e6x6["$elem"]["removeClass"](_0x96e6xc8);
            } else {
                (_0x96e6x8d === true) ? _0x96e6x6["$elem"]["removeClass"](_0x96e6xc9)["addClass"](_0x96e6xc8): _0x96e6x6["$elem"]["removeClass"](_0x96e6xca)["addClass"](_0x96e6xc8);
                _0x96e6x86["switchMenu"](_0x96e6x6, false);
                _0x96e6x6["$elem"]["removeClass"](_0x96e6x72);
                _0x96e6x6["$tabs"]["removeClass"](_0x96e6x4e["classes"]["last"])["filter"]("li:last-child")["addClass"](_0x96e6x4e["classes"]["last"]);
            };
        },
        switchMenu: function (_0x96e6x6, _0x96e6xcb) {
            var _0x96e6xcc = _0x96e6x4e["classes"]["themes"];
            var _0x96e6xcd = _0x96e6x4e["classes"]["sizes"];
            var _0x96e6x8c = _0x96e6x1["zozo"]["core"]["utils"]["toArray"](_0x96e6x4e["classes"]["positions"]);
            _0x96e6x6["$elem"]["removeClass"](_0x96e6xcc["join"](_0x96e6x4e["space"]));
            if (_0x96e6xcb === true) {
                (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["addClass"](_0x96e6x4e["states"]["closed"])["show"]();
                _0x96e6x6["$tabGroup"]["addClass"]("z-hide-menu");
                _0x96e6x6["$elem"]["addClass"](_0x96e6x6d);
                _0x96e6x6["$elem"]["removeClass"](_0x96e6x6["settings"]["orientation"]);
                _0x96e6x6["$elem"]["removeClass"](_0x96e6x6["settings"]["position"]);
                (_0x96e6x6["settings"]["style"] === _0x96e6x61) ? _0x96e6x6["$elem"]["addClass"]("m-" + _0x96e6x6["settings"]["theme"]): _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["theme"]);
            } else {
                _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["orientation"]);
                _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["theme"]);
                _0x96e6x6["$elem"]["addClass"](_0x96e6x6["settings"]["position"]);
                (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["removeClass"](_0x96e6x4e["states"]["closed"]);
                _0x96e6x6["$tabGroup"]["removeClass"]("z-hide-menu");
                _0x96e6x6["$tabs"]["filter"]("li:first-child")["addClass"](_0x96e6x4e["classes"]["first"]);
                _0x96e6x6["$elem"]["removeClass"](_0x96e6x6d);
                (_0x96e6x6["$mobileNav"]) && _0x96e6x6["$mobileNav"]["hide"]();
            };
        },
        initAutoPlay: function (_0x96e6x6) {
            if (_0x96e6x6["settings"]["autoplay"] !== false && _0x96e6x6["settings"]["autoplay"] != null) {
                if (_0x96e6x6["settings"]["autoplay"]["interval"] > 0) {
                    _0x96e6x6["stop"]();
                    _0x96e6x6["autoplayIntervalId"] = setInterval(function () {
                        _0x96e6x6["next"](_0x96e6x6);
                    }, _0x96e6x6["settings"]["autoplay"]["interval"]);
                } else {
                    _0x96e6x6["stop"]();
                };
            } else {
                _0x96e6x6["stop"]();
            };
        },
        changeHash: function (_0x96e6x6, _0x96e6x75) {
            var _0x96e6x76 = (_0x96e6x6["settings"]["deeplinkingPrefix"]) ? _0x96e6x6["settings"]["deeplinkingPrefix"] : _0x96e6x6["tabID"];
            if (_0x96e6x6["settings"]["animating"] !== true) {
                if (_0x96e6x6["settings"]["deeplinking"] === true) {
                    if (typeof (_0x96e6x1(_0x96e6x2)["hashchange"]) != "undefined") {
                        _0x96e6x6["Deeplinking"]["set"](_0x96e6x76, _0x96e6x75, _0x96e6x6["settings"]["deeplinkingSeparator"], _0x96e6x6["settings"]["deeplinkingMode"]);
                    } else {
                        if (_0x96e6x6["BrowserDetection"]["isIE"](7)) {
                            _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x75);
                        } else {
                            _0x96e6x6["Deeplinking"]["set"](_0x96e6x76, _0x96e6x75, _0x96e6x6["settings"]["deeplinkingSeparator"], _0x96e6x6["settings"]["deeplinkingMode"]);
                        };
                    };
                } else {
                    _0x96e6x86["showTab"](_0x96e6x6, _0x96e6x75);
                };
            };
        },
        getFirst: function (_0x96e6x6) {
            return 0;
        },
        getLast: function (_0x96e6x6) {
            if (_0x96e6x6["settings"]["noTabs"] === true) {
                return parseInt(_0x96e6x6["$container"]["children"]("div")["size"]() - 1);
            };
            return parseInt(_0x96e6x6["$tabGroup"]["children"]("li")["size"]() - 1);
        },
        isCompact: function (_0x96e6x6) {
            return (_0x96e6x6["settings"]["position"] === _0x96e6x4e["classes"]["positions"]["topCompact"] || _0x96e6x6["settings"]["position"] === _0x96e6x4e["classes"]["positions"]["bottomCompact"]);
        },
        isTop: function (_0x96e6x6) {
            if (_0x96e6x6["settings"]["original"]["position"] === null) {
                _0x96e6x6["settings"]["original"]["position"] = _0x96e6x6["settings"]["position"];
            };
            return (_0x96e6x6["settings"]["original"]["position"]["indexOf"]("top") >= 0);
        },
        isLightTheme: function (_0x96e6x6) {
            var _0x96e6xce = ["red", "deepblue", "blue", "green", "orange", "black"];
            var _0x96e6xcf = true;
            var _0x96e6xd0 = _0x96e6x86["isFlatTheme"](_0x96e6x6);
            if (_0x96e6x6["settings"]["style"] !== _0x96e6x61) {
                (_0x96e6x1["inArray"](_0x96e6x6["settings"]["theme"], _0x96e6xce) > -1) && (_0x96e6xcf = false);
                (_0x96e6xd0) && (_0x96e6xcf = false);
            };
            return _0x96e6xcf;
        },
        isFlatTheme: function (_0x96e6x6) {
            return (_0x96e6x6["settings"]["theme"]["indexOf"]("flat") >= 0);
        },
        isResponsive: function (_0x96e6x6) {
            return (_0x96e6x6["$elem"]["hasClass"](_0x96e6x72) === true);
        },
        tabExist: function (_0x96e6x6, _0x96e6x75) {
            return (_0x96e6x6["$tabs"]["filter"]("li[" + _0x96e6x6["settings"]["hashAttribute"] + "=\x27" + _0x96e6x75 + "\x27]")["length"] > 0);
        },
        isMobile: function (_0x96e6x6) {
            return (_0x96e6x6["$elem"]["hasClass"](_0x96e6x6d) === true);
        },
        isTabDisabled: function (_0x96e6x1c) {
            return (_0x96e6x1c["hasClass"](_0x96e6x5c) || _0x96e6x1c["data"](_0x96e6x5a) === true);
        },
        allowAutoScrolling: function (_0x96e6x6) {
            return (_0x96e6x6["settings"]["mobileAutoScrolling"] != null && _0x96e6x6["settings"]["mobileAutoScrolling"] != false);
        },
        getElementSize: function (_0x96e6x8) {
            var _0x96e6xb6 = {
                width: 0,
                height: 0
            };
            if (_0x96e6x8 == null || _0x96e6x8["length"] == 0) {
                return _0x96e6xb6;
            };
            if (_0x96e6x8["is"](":visible") === false) {
                _0x96e6xb6["height"] = _0x96e6x8["show"]()["find"]("\x3E.z-content-inner")["innerHeight"]();
                _0x96e6xb6["width"] = _0x96e6x8["show"]()["find"]("\x3E.z-content-inner")["outerWidth"]();
                if (_0x96e6xb6["height"] >= 0) {};
                _0x96e6x8["hide"]();
            } else {
                _0x96e6xb6["height"] = _0x96e6x8["find"]("\x3E.z-content-inner")["innerHeight"]();
                _0x96e6xb6["width"] = _0x96e6x8["find"]("\x3E.z-content-inner")["outerWidth"]();
                if (_0x96e6xb6["height"] >= 0) {};
            };
            (_0x96e6x8["hasClass"]("z-video") && (_0x96e6xb6["height"] = _0x96e6x8["innerHeight"]()));
            return _0x96e6xb6;
        },
        getWidth: function (_0x96e6xd1) {
            if (_0x96e6xd1 == null || _0x96e6xd1["length"] == 0) {
                return 0;
            };
            _0x96e6xd1 = _0x96e6xd1["find"]("a");
            var _0x96e6x17 = _0x96e6xd1["outerWidth"]();
            _0x96e6x17 += parseInt(_0x96e6xd1["css"]("margin-left"), 10) + parseInt(_0x96e6xd1["css"]("margin-right"), 10);
            _0x96e6x17 += parseInt(_0x96e6xd1["css"]("borderLeftWidth"), 10) + parseInt(_0x96e6xd1["css"]("borderRightWidth"), 10);
            return _0x96e6x17;
        },
        isLarger: function (_0x96e6xd2, _0x96e6xd3) {
            var _0x96e6xd4 = _0x96e6xd2;
            if (_0x96e6xd2 < _0x96e6xd3) {
                _0x96e6xd4 = _0x96e6xd3;
            };
            return _0x96e6xd4;
        }
    };
    var _0x96e6xd5 = {
        init: function (_0x96e6x6, _0x96e6x94) {
            _0x96e6x6["$contents"]["hide"]();
            _0x96e6x94["content"]["css"]({
                "opacity": "",
                "left": "",
                "top": "",
                "position": "relative"
            })["show"]();
            setTimeout(function () {
                _0x96e6x6["$container"]["find"](".z-tabs")["each"](function (_0x96e6x16, _0x96e6x74) {
                    _0x96e6x1(_0x96e6x74)["data"]("zozoTabs")["refresh"]();
                });
                _0x96e6x6["$elem"]["trigger"](_0x96e6x52, {
                    tab: _0x96e6x94["tab"],
                    content: _0x96e6x94["content"],
                    index: _0x96e6x94["index"]
                });
                _0x96e6x6["settings"]["animating"] = false;
            }, _0x96e6x94["duration"] >= 0 ? 200 : _0x96e6x94["duration"]);
            if (_0x96e6x6["settings"]["orientation"] === _0x96e6x65) {
                _0x96e6x86["setContentHeight"](_0x96e6x6, _0x96e6x94["content"], true);
            };
            return _0x96e6x6;
        },
        before: function (_0x96e6x6, _0x96e6x94) {
            setTimeout(function () {
                _0x96e6x94["content"]["find"](".z-tabs")["each"](function (_0x96e6x16, _0x96e6x74) {
                    _0x96e6x1(_0x96e6x74)["data"]("zozoTabs")["refresh"]();
                });
            }, 50);
            if (_0x96e6x6["settings"]["animation"]["effects"] !== _0x96e6x4e["animation"]["effects"]["none"]) {
                _0x96e6x86["setContentHeight"](_0x96e6x6, _0x96e6x94["preContent"], true);
                _0x96e6x86["setContentHeight"](_0x96e6x6, _0x96e6x94["content"]);
            };
            _0x96e6x6["$container"]["addClass"](_0x96e6x70);
            _0x96e6x94["preContent"]["css"]({
                "position": "absolute",
                "display": "block",
                "left": 0,
                "top": 0
            });
            _0x96e6x94["content"]["css"]({
                "position": "absolute",
                "display": "block"
            });
            return _0x96e6x6;
        },
        after: function (_0x96e6x6, _0x96e6x94) {
            setTimeout(function () {
                _0x96e6x94["content"]["css"]({
                    "position": "relative"
                });
                _0x96e6x94["preContent"]["css"]({
                    "display": "none"
                });
            }, _0x96e6x94["duration"]);
            _0x96e6x6["$contents"]["each"](function (_0x96e6x16, _0x96e6x74) {
                if (_0x96e6x94["index"] != _0x96e6x16 && _0x96e6x94["preIndex"] != _0x96e6x16) {
                    _0x96e6x1(_0x96e6x74)["css"]({
                        _transition: "",
                        "position": "",
                        "display": "",
                        "left": "",
                        "top": ""
                    });
                };
            });
            setTimeout(function () {
                _0x96e6x6["$elem"]["trigger"](_0x96e6x52, {
                    tab: _0x96e6x94["tab"],
                    content: _0x96e6x94["content"],
                    index: _0x96e6x94["index"]
                });
                _0x96e6x6["$elem"]["trigger"](_0x96e6x54, {
                    tab: _0x96e6x94["preTab"],
                    content: _0x96e6x94["preContent"],
                    index: _0x96e6x94["preIndex"]
                });
                var _0x96e6xba = (_0x96e6x6["settings"]["orientation"] === _0x96e6x65) ? {
                    "height": ""
                } : {
                    "height": "",
                    "min-height": "",
                    "overflow": ""
                };
                _0x96e6x6["$container"]["css"](_0x96e6xba);
                _0x96e6x6["$container"]["removeClass"](_0x96e6x70);
                setTimeout(function () {
                    _0x96e6x6["$contents"]["removeClass"](_0x96e6x4e["classes"]["active"])["eq"](_0x96e6x94["index"])["addClass"](_0x96e6x4e["classes"]["active"]);
                    _0x96e6x6["settings"]["animating"] = false;
                    _0x96e6x6["$contents"]["stop"](true, true);
                });
            }, _0x96e6x94["duration"] + 50);
            return _0x96e6x6;
        }
    };
    _0x96e6x4b["defaults"] = _0x96e6x4b["prototype"]["defaults"];
    _0x96e6x1["fn"]["zozoTabs"] = function (_0x96e6x4d) {
        return this["each"](function () {
            if (_0x96e6x4 == _0x96e6x1(this)["data"](_0x96e6x4e["pluginName"])) {
                var _0x96e6xd6 = new _0x96e6x4b(this, _0x96e6x4d)["init"]();
                _0x96e6x1(this)["data"](_0x96e6x4e["pluginName"], _0x96e6xd6);
            };
        });
    };
    _0x96e6x2["zozo"]["tabs"] = _0x96e6x4b;
    _0x96e6x1(_0x96e6x3)["ready"](function () {
        _0x96e6x1("[data-role=\x27z-tabs\x27]")["each"](function (_0x96e6x16, _0x96e6x74) {
            if (!_0x96e6x1(_0x96e6x74)["zozoTabs"]()) {
                _0x96e6x1(_0x96e6x74)["zozoTabs"]();
            };
        });
    });
})(jQuery, window, document);
