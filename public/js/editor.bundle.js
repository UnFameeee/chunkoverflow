(() => {
  // node_modules/@editorjs/editorjs/dist/editorjs.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")), document.head.appendChild(e);
      }
    } catch (t) {
      console.error("vite-plugin-css-injected-by-js", t);
    }
  })();
  var ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Fe(n3) {
    return n3 && n3.__esModule && Object.prototype.hasOwnProperty.call(n3, "default") ? n3.default : n3;
  }
  function ze() {
  }
  Object.assign(ze, {
    default: ze,
    register: ze,
    revert: function() {
    },
    __esModule: true
  });
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n3) {
    const e = (this.document || this.ownerDocument).querySelectorAll(n3);
    let t = e.length;
    for (; --t >= 0 && e.item(t) !== this; )
      ;
    return t > -1;
  });
  Element.prototype.closest || (Element.prototype.closest = function(n3) {
    let e = this;
    if (!document.documentElement.contains(e))
      return null;
    do {
      if (e.matches(n3))
        return e;
      e = e.parentElement || e.parentNode;
    } while (e !== null);
    return null;
  });
  Element.prototype.prepend || (Element.prototype.prepend = function(e) {
    const t = document.createDocumentFragment();
    Array.isArray(e) || (e = [e]), e.forEach((o4) => {
      const i = o4 instanceof Node;
      t.appendChild(i ? o4 : document.createTextNode(o4));
    }), this.insertBefore(t, this.firstChild);
  });
  Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n3) {
    n3 = arguments.length === 0 ? true : !!n3;
    const e = this.parentNode, t = window.getComputedStyle(e, null), o4 = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), s6 = this.offsetTop - e.offsetTop < e.scrollTop, r3 = this.offsetTop - e.offsetTop + this.clientHeight - o4 > e.scrollTop + e.clientHeight, l3 = this.offsetLeft - e.offsetLeft < e.scrollLeft, a6 = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, c5 = s6 && !r3;
    (s6 || r3) && n3 && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o4 + this.clientHeight / 2), (l3 || a6) && n3 && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (s6 || r3 || l3 || a6) && !n3 && this.scrollIntoView(c5);
  });
  window.requestIdleCallback = window.requestIdleCallback || function(n3) {
    const e = Date.now();
    return setTimeout(function() {
      n3({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - e));
        }
      });
    }, 1);
  };
  window.cancelIdleCallback = window.cancelIdleCallback || function(n3) {
    clearTimeout(n3);
  };
  var vo = (n3 = 21) => crypto.getRandomValues(new Uint8Array(n3)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
  var It = /* @__PURE__ */ ((n3) => (n3.VERBOSE = "VERBOSE", n3.INFO = "INFO", n3.WARN = "WARN", n3.ERROR = "ERROR", n3))(It || {});
  var w = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  };
  var wo = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
  function Be(n3, e, t = "log", o4, i = "color: inherit") {
    if (!("console" in window) || !window.console[t])
      return;
    const s6 = ["info", "log", "warn", "error"].includes(t), r3 = [];
    switch (Be.logLevel) {
      case "ERROR":
        if (t !== "error")
          return;
        break;
      case "WARN":
        if (!["error", "warn"].includes(t))
          return;
        break;
      case "INFO":
        if (!s6 || n3)
          return;
        break;
    }
    o4 && r3.push(o4);
    const l3 = "Editor.js 2.30.7", a6 = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
    n3 && (s6 ? (r3.unshift(a6, i), e = `%c${l3}%c ${e}`) : e = `( ${l3} )${e}`);
    try {
      s6 ? o4 ? console[t](`${e} %o`, ...r3) : console[t](e, ...r3) : console[t](e);
    } catch {
    }
  }
  Be.logLevel = "VERBOSE";
  function xo(n3) {
    Be.logLevel = n3;
  }
  var I = Be.bind(window, false);
  var X = Be.bind(window, true);
  function re(n3) {
    return Object.prototype.toString.call(n3).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  function O(n3) {
    return re(n3) === "function" || re(n3) === "asyncfunction";
  }
  function R(n3) {
    return re(n3) === "object";
  }
  function Q(n3) {
    return re(n3) === "string";
  }
  function yo(n3) {
    return re(n3) === "boolean";
  }
  function bt(n3) {
    return re(n3) === "number";
  }
  function kt(n3) {
    return re(n3) === "undefined";
  }
  function V(n3) {
    return n3 ? Object.keys(n3).length === 0 && n3.constructor === Object : true;
  }
  function Mt(n3) {
    return n3 > 47 && n3 < 58 || // number keys
    n3 === 32 || n3 === 13 || // Space bar & return key(s)
    n3 === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
    n3 > 64 && n3 < 91 || // letter keys
    n3 > 95 && n3 < 112 || // Numpad keys
    n3 > 185 && n3 < 193 || // ;=,-./` (in order)
    n3 > 218 && n3 < 223;
  }
  async function Eo(n3, e = () => {
  }, t = () => {
  }) {
    async function o4(i, s6, r3) {
      try {
        await i.function(i.data), await s6(kt(i.data) ? {} : i.data);
      } catch {
        r3(kt(i.data) ? {} : i.data);
      }
    }
    return n3.reduce(async (i, s6) => (await i, o4(s6, e, t)), Promise.resolve());
  }
  function At(n3) {
    return Array.prototype.slice.call(n3);
  }
  function Oe(n3, e) {
    return function() {
      const t = this, o4 = arguments;
      window.setTimeout(() => n3.apply(t, o4), e);
    };
  }
  function Bo(n3) {
    return n3.name.split(".").pop();
  }
  function To(n3) {
    return /^[-\w]+\/([-+\w]+|\*)$/.test(n3);
  }
  function vt(n3, e, t) {
    let o4;
    return (...i) => {
      const s6 = this, r3 = () => {
        o4 = null, t || n3.apply(s6, i);
      }, l3 = t && !o4;
      window.clearTimeout(o4), o4 = window.setTimeout(r3, e), l3 && n3.apply(s6, i);
    };
  }
  function Ve(n3, e, t = void 0) {
    let o4, i, s6, r3 = null, l3 = 0;
    t || (t = {});
    const a6 = function() {
      l3 = t.leading === false ? 0 : Date.now(), r3 = null, s6 = n3.apply(o4, i), r3 || (o4 = i = null);
    };
    return function() {
      const c5 = Date.now();
      !l3 && t.leading === false && (l3 = c5);
      const u2 = e - (c5 - l3);
      return o4 = this, i = arguments, u2 <= 0 || u2 > e ? (r3 && (clearTimeout(r3), r3 = null), l3 = c5, s6 = n3.apply(o4, i), r3 || (o4 = i = null)) : !r3 && t.trailing !== false && (r3 = setTimeout(a6, u2)), s6;
    };
  }
  function Co() {
    const n3 = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    }, e = Object.keys(n3).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
    return e && (n3[e] = true), n3;
  }
  function Le(n3) {
    return n3[0].toUpperCase() + n3.slice(1);
  }
  function qe(n3, ...e) {
    if (!e.length)
      return n3;
    const t = e.shift();
    if (R(n3) && R(t))
      for (const o4 in t)
        R(t[o4]) ? (n3[o4] || Object.assign(n3, { [o4]: {} }), qe(n3[o4], t[o4])) : Object.assign(n3, { [o4]: t[o4] });
    return qe(n3, ...e);
  }
  function tt(n3) {
    const e = Co();
    return n3 = n3.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), e.mac ? n3 = n3.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : n3 = n3.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n3;
  }
  function So(n3) {
    try {
      return new URL(n3).href;
    } catch {
    }
    return n3.substring(0, 2) === "//" ? window.location.protocol + n3 : window.location.origin + n3;
  }
  function Io() {
    return vo(10);
  }
  function Mo(n3) {
    window.open(n3, "_blank");
  }
  function Ao(n3 = "") {
    return `${n3}${Math.floor(Math.random() * 1e8).toString(16)}`;
  }
  function Ze(n3, e, t) {
    const o4 = `\xAB${e}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${t}\xBB instead.`;
    n3 && X(o4, "warn");
  }
  function ue(n3, e, t) {
    const o4 = t.value ? "value" : "get", i = t[o4], s6 = `#${e}Cache`;
    if (t[o4] = function(...r3) {
      return this[s6] === void 0 && (this[s6] = i.apply(this, ...r3)), this[s6];
    }, o4 === "get" && t.set) {
      const r3 = t.set;
      t.set = function(l3) {
        delete n3[s6], r3.apply(this, l3);
      };
    }
    return t;
  }
  var Ot = 650;
  function pe() {
    return window.matchMedia(`(max-width: ${Ot}px)`).matches;
  }
  var Ge = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  function Oo(n3, e) {
    const t = Array.isArray(n3) || R(n3), o4 = Array.isArray(e) || R(e);
    return t || o4 ? JSON.stringify(n3) === JSON.stringify(e) : n3 === e;
  }
  var d = class _d {
    /**
     * Check if passed tag has no closed tag
     *
     * @param {HTMLElement} tag - element to check
     * @returns {boolean}
     */
    static isSingleTag(e) {
      return e.tagName && [
        "AREA",
        "BASE",
        "BR",
        "COL",
        "COMMAND",
        "EMBED",
        "HR",
        "IMG",
        "INPUT",
        "KEYGEN",
        "LINK",
        "META",
        "PARAM",
        "SOURCE",
        "TRACK",
        "WBR"
      ].includes(e.tagName);
    }
    /**
     * Check if element is BR or WBR
     *
     * @param {HTMLElement} element - element to check
     * @returns {boolean}
     */
    static isLineBreakTag(e) {
      return e && e.tagName && [
        "BR",
        "WBR"
      ].includes(e.tagName);
    }
    /**
     * Helper for making Elements with class name and attributes
     *
     * @param  {string} tagName - new Element tag name
     * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
     * @param  {object} [attributes] - any attributes
     * @returns {HTMLElement}
     */
    static make(e, t = null, o4 = {}) {
      const i = document.createElement(e);
      if (Array.isArray(t)) {
        const s6 = t.filter((r3) => r3 !== void 0);
        i.classList.add(...s6);
      } else
        t && i.classList.add(t);
      for (const s6 in o4)
        Object.prototype.hasOwnProperty.call(o4, s6) && (i[s6] = o4[s6]);
      return i;
    }
    /**
     * Creates Text Node with the passed content
     *
     * @param {string} content - text content
     * @returns {Text}
     */
    static text(e) {
      return document.createTextNode(e);
    }
    /**
     * Append one or several elements to the parent
     *
     * @param  {Element|DocumentFragment} parent - where to append
     * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
     */
    static append(e, t) {
      Array.isArray(t) ? t.forEach((o4) => e.appendChild(o4)) : e.appendChild(t);
    }
    /**
     * Append element or a couple to the beginning of the parent elements
     *
     * @param {Element} parent - where to append
     * @param {Element|Element[]} elements - element or elements list
     */
    static prepend(e, t) {
      Array.isArray(t) ? (t = t.reverse(), t.forEach((o4) => e.prepend(o4))) : e.prepend(t);
    }
    /**
     * Swap two elements in parent
     *
     * @param {HTMLElement} el1 - from
     * @param {HTMLElement} el2 - to
     * @deprecated
     */
    static swap(e, t) {
      const o4 = document.createElement("div"), i = e.parentNode;
      i.insertBefore(o4, e), i.insertBefore(e, t), i.insertBefore(t, o4), i.removeChild(o4);
    }
    /**
     * Selector Decorator
     *
     * Returns first match
     *
     * @param {Element} el - element we searching inside. Default - DOM Document
     * @param {string} selector - searching string
     * @returns {Element}
     */
    static find(e = document, t) {
      return e.querySelector(t);
    }
    /**
     * Get Element by Id
     *
     * @param {string} id - id to find
     * @returns {HTMLElement | null}
     */
    static get(e) {
      return document.getElementById(e);
    }
    /**
     * Selector Decorator.
     *
     * Returns all matches
     *
     * @param {Element|Document} el - element we searching inside. Default - DOM Document
     * @param {string} selector - searching string
     * @returns {NodeList}
     */
    static findAll(e = document, t) {
      return e.querySelectorAll(t);
    }
    /**
     * Returns CSS selector for all text inputs
     */
    static get allInputsSelector() {
      return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t) => `input[type="${t}"]`).join(", ");
    }
    /**
     * Find all contenteditable, textarea and editable input elements passed holder contains
     *
     * @param holder - element where to find inputs
     */
    static findAllInputs(e) {
      return At(e.querySelectorAll(_d.allInputsSelector)).reduce((t, o4) => _d.isNativeInput(o4) || _d.containsOnlyInlineElements(o4) ? [...t, o4] : [...t, ..._d.getDeepestBlockElements(o4)], []);
    }
    /**
     * Search for deepest node which is Leaf.
     * Leaf is the vertex that doesn't have any child nodes
     *
     * @description Method recursively goes throw the all Node until it finds the Leaf
     * @param {Node} node - root Node. From this vertex we start Deep-first search
     *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
     * @param {boolean} [atLast] - find last text node
     * @returns - it can be text Node or Element Node, so that caret will able to work with it
     *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
     */
    static getDeepestNode(e, t = false) {
      const o4 = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
      if (e && e.nodeType === Node.ELEMENT_NODE && e[o4]) {
        let s6 = e[o4];
        if (_d.isSingleTag(s6) && !_d.isNativeInput(s6) && !_d.isLineBreakTag(s6))
          if (s6[i])
            s6 = s6[i];
          else if (s6.parentNode[i])
            s6 = s6.parentNode[i];
          else
            return s6.parentNode;
        return this.getDeepestNode(s6, t);
      }
      return e;
    }
    /**
     * Check if object is DOM node
     *
     * @param {*} node - object to check
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isElement(e) {
      return bt(e) ? false : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
    }
    /**
     * Check if object is DocumentFragment node
     *
     * @param {object} node - object to check
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isFragment(e) {
      return bt(e) ? false : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
    }
    /**
     * Check if passed element is contenteditable
     *
     * @param {HTMLElement} element - html element to check
     * @returns {boolean}
     */
    static isContentEditable(e) {
      return e.contentEditable === "true";
    }
    /**
     * Checks target if it is native input
     *
     * @param {*} target - HTML element or string
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isNativeInput(e) {
      const t = [
        "INPUT",
        "TEXTAREA"
      ];
      return e && e.tagName ? t.includes(e.tagName) : false;
    }
    /**
     * Checks if we can set caret
     *
     * @param {HTMLElement} target - target to check
     * @returns {boolean}
     */
    static canSetCaret(e) {
      let t = true;
      if (_d.isNativeInput(e))
        switch (e.type) {
          case "file":
          case "checkbox":
          case "radio":
          case "hidden":
          case "submit":
          case "button":
          case "image":
          case "reset":
            t = false;
            break;
        }
      else
        t = _d.isContentEditable(e);
      return t;
    }
    /**
     * Checks node if it is empty
     *
     * @description Method checks simple Node without any childs for emptiness
     * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
     * @param {Node} node - node to check
     * @param {string} [ignoreChars] - char or substring to treat as empty
     * @returns {boolean} true if it is empty
     */
    static isNodeEmpty(e, t) {
      let o4;
      return this.isSingleTag(e) && !this.isLineBreakTag(e) ? false : (this.isElement(e) && this.isNativeInput(e) ? o4 = e.value : o4 = e.textContent.replace("\u200B", ""), t && (o4 = o4.replace(new RegExp(t, "g"), "")), o4.trim().length === 0);
    }
    /**
     * checks node if it is doesn't have any child nodes
     *
     * @param {Node} node - node to check
     * @returns {boolean}
     */
    static isLeaf(e) {
      return e ? e.childNodes.length === 0 : false;
    }
    /**
     * breadth-first search (BFS)
     * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
     *
     * @description Pushes to stack all DOM leafs and checks for emptiness
     * @param {Node} node - node to check
     * @param {string} [ignoreChars] - char or substring to treat as empty
     * @returns {boolean}
     */
    static isEmpty(e, t) {
      const o4 = [e];
      for (; o4.length > 0; )
        if (e = o4.shift(), !!e) {
          if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
            return false;
          e.childNodes && o4.push(...Array.from(e.childNodes));
        }
      return true;
    }
    /**
     * Check if string contains html elements
     *
     * @param {string} str - string to check
     * @returns {boolean}
     */
    static isHTMLString(e) {
      const t = _d.make("div");
      return t.innerHTML = e, t.childElementCount > 0;
    }
    /**
     * Return length of node`s text content
     *
     * @param {Node} node - node with content
     * @returns {number}
     */
    static getContentLength(e) {
      return _d.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
    }
    /**
     * Return array of names of block html elements
     *
     * @returns {string[]}
     */
    static get blockElements() {
      return [
        "address",
        "article",
        "aside",
        "blockquote",
        "canvas",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "hr",
        "li",
        "main",
        "nav",
        "noscript",
        "ol",
        "output",
        "p",
        "pre",
        "ruby",
        "section",
        "table",
        "tbody",
        "thead",
        "tr",
        "tfoot",
        "ul",
        "video"
      ];
    }
    /**
     * Check if passed content includes only inline elements
     *
     * @param {string|HTMLElement} data - element or html string
     * @returns {boolean}
     */
    static containsOnlyInlineElements(e) {
      let t;
      Q(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
      const o4 = (i) => !_d.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o4);
      return Array.from(t.children).every(o4);
    }
    /**
     * Find and return all block elements in the passed parent (including subtree)
     *
     * @param {HTMLElement} parent - root element
     * @returns {HTMLElement[]}
     */
    static getDeepestBlockElements(e) {
      return _d.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o4) => [...t, ..._d.getDeepestBlockElements(o4)], []);
    }
    /**
     * Helper for get holder from {string} or return HTMLElement
     *
     * @param {string | HTMLElement} element - holder's id or holder's HTML Element
     * @returns {HTMLElement}
     */
    static getHolder(e) {
      return Q(e) ? document.getElementById(e) : e;
    }
    /**
     * Returns true if element is anchor (is A tag)
     *
     * @param {Element} element - element to check
     * @returns {boolean}
     */
    static isAnchor(e) {
      return e.tagName.toLowerCase() === "a";
    }
    /**
     * Return element's offset related to the document
     *
     * @todo handle case when editor initialized in scrollable popup
     * @param el - element to compute offset
     */
    static offset(e) {
      const t = e.getBoundingClientRect(), o4 = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s6 = t.top + i, r3 = t.left + o4;
      return {
        top: s6,
        left: r3,
        bottom: s6 + t.height,
        right: r3 + t.width
      };
    }
  };
  function Lo(n3) {
    return !/[^\t\n\r ]/.test(n3);
  }
  function _o(n3) {
    const e = window.getComputedStyle(n3), t = parseFloat(e.fontSize), o4 = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), s6 = parseFloat(e.borderTopWidth), r3 = parseFloat(e.marginTop), l3 = t * 0.8, a6 = (o4 - t) / 2;
    return r3 + s6 + i + a6 + l3;
  }
  function Lt(n3) {
    n3.dataset.empty = d.isEmpty(n3) ? "true" : "false";
  }
  var No = {
    blockTunes: {
      toggler: {
        "Click to tune": "",
        "or drag to move": ""
      }
    },
    inlineToolbar: {
      converter: {
        "Convert to": ""
      }
    },
    toolbar: {
      toolbox: {
        Add: ""
      }
    },
    popover: {
      Filter: "",
      "Nothing found": "",
      "Convert to": ""
    }
  };
  var Po = {
    Text: "",
    Link: "",
    Bold: "",
    Italic: ""
  };
  var Do = {
    link: {
      "Add a link": ""
    },
    stub: {
      "The block can not be displayed correctly.": ""
    }
  };
  var Ro = {
    delete: {
      Delete: "",
      "Click to delete": ""
    },
    moveUp: {
      "Move up": ""
    },
    moveDown: {
      "Move down": ""
    }
  };
  var _t = {
    ui: No,
    toolNames: Po,
    tools: Do,
    blockTunes: Ro
  };
  var Nt = class ae {
    /**
     * Type-safe translation for internal UI texts:
     * Perform translation of the string by namespace and a key
     *
     * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
     * @param internalNamespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static ui(e, t) {
      return ae._t(e, t);
    }
    /**
     * Translate for external strings that is not presented in default dictionary.
     * For example, for user-specified tool names
     *
     * @param namespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static t(e, t) {
      return ae._t(e, t);
    }
    /**
     * Adjust module for using external dictionary
     *
     * @param dictionary - new messages list to override default
     */
    static setDictionary(e) {
      ae.currentDictionary = e;
    }
    /**
     * Perform translation both for internal and external namespaces
     * If there is no translation found, returns passed key as a translated message
     *
     * @param namespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static _t(e, t) {
      const o4 = ae.getNamespace(e);
      return !o4 || !o4[t] ? t : o4[t];
    }
    /**
     * Find messages section by namespace path
     *
     * @param namespace - path to section
     */
    static getNamespace(e) {
      return e.split(".").reduce((o4, i) => !o4 || !Object.keys(o4).length ? {} : o4[i], ae.currentDictionary);
    }
  };
  Nt.currentDictionary = _t;
  var z = Nt;
  var Pt = class extends Error {
  };
  var Te = class {
    constructor() {
      this.subscribers = {};
    }
    /**
     * Subscribe any event on callback
     *
     * @param eventName - event name
     * @param callback - subscriber
     */
    on(e, t) {
      e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
    }
    /**
     * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
     *
     * @param eventName - event name
     * @param callback - subscriber
     */
    once(e, t) {
      e in this.subscribers || (this.subscribers[e] = []);
      const o4 = (i) => {
        const s6 = t(i), r3 = this.subscribers[e].indexOf(o4);
        return r3 !== -1 && this.subscribers[e].splice(r3, 1), s6;
      };
      this.subscribers[e].push(o4);
    }
    /**
     * Emit callbacks with passed data
     *
     * @param eventName - event name
     * @param data - subscribers get this data when they were fired
     */
    emit(e, t) {
      V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o4, i) => {
        const s6 = i(o4);
        return s6 !== void 0 ? s6 : o4;
      }, t);
    }
    /**
     * Unsubscribe callback from event
     *
     * @param eventName - event name
     * @param callback - event handler
     */
    off(e, t) {
      if (this.subscribers[e] === void 0) {
        console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
        return;
      }
      for (let o4 = 0; o4 < this.subscribers[e].length; o4++)
        if (this.subscribers[e][o4] === t) {
          delete this.subscribers[e][o4];
          break;
        }
    }
    /**
     * Destroyer
     * clears subscribers list
     */
    destroy() {
      this.subscribers = {};
    }
  };
  function G(n3) {
    Object.setPrototypeOf(this, {
      /**
       * Block id
       *
       * @returns {string}
       */
      get id() {
        return n3.id;
      },
      /**
       * Tool name
       *
       * @returns {string}
       */
      get name() {
        return n3.name;
      },
      /**
       * Tool config passed on Editor's initialization
       *
       * @returns {ToolConfig}
       */
      get config() {
        return n3.config;
      },
      /**
       * .ce-block element, that wraps plugin contents
       *
       * @returns {HTMLElement}
       */
      get holder() {
        return n3.holder;
      },
      /**
       * True if Block content is empty
       *
       * @returns {boolean}
       */
      get isEmpty() {
        return n3.isEmpty;
      },
      /**
       * True if Block is selected with Cross-Block selection
       *
       * @returns {boolean}
       */
      get selected() {
        return n3.selected;
      },
      /**
       * Set Block's stretch state
       *
       * @param {boolean} state — state to set
       */
      set stretched(t) {
        n3.stretched = t;
      },
      /**
       * True if Block is stretched
       *
       * @returns {boolean}
       */
      get stretched() {
        return n3.stretched;
      },
      /**
       * True if Block has inputs to be focused
       */
      get focusable() {
        return n3.focusable;
      },
      /**
       * Call Tool method with errors handler under-the-hood
       *
       * @param {string} methodName - method to call
       * @param {object} param - object with parameters
       * @returns {unknown}
       */
      call(t, o4) {
        return n3.call(t, o4);
      },
      /**
       * Save Block content
       *
       * @returns {Promise<void|SavedData>}
       */
      save() {
        return n3.save();
      },
      /**
       * Validate Block data
       *
       * @param {BlockToolData} data - data to validate
       * @returns {Promise<boolean>}
       */
      validate(t) {
        return n3.validate(t);
      },
      /**
       * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
       * Can be useful for block changes invisible for editor core.
       */
      dispatchChange() {
        n3.dispatchChange();
      },
      /**
       * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
       * This method returns the entry that is related to the Block (depended on the Block data)
       */
      getActiveToolboxEntry() {
        return n3.getActiveToolboxEntry();
      }
    });
  }
  var Ce = class {
    constructor() {
      this.allListeners = [];
    }
    /**
     * Assigns event listener on element and returns unique identifier
     *
     * @param {EventTarget} element - DOM element that needs to be listened
     * @param {string} eventType - event type
     * @param {Function} handler - method that will be fired on event
     * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
     */
    on(e, t, o4, i = false) {
      const s6 = Ao("l"), r3 = {
        id: s6,
        element: e,
        eventType: t,
        handler: o4,
        options: i
      };
      if (!this.findOne(e, t, o4))
        return this.allListeners.push(r3), e.addEventListener(t, o4, i), s6;
    }
    /**
     * Removes event listener from element
     *
     * @param {EventTarget} element - DOM element that we removing listener
     * @param {string} eventType - event type
     * @param {Function} handler - remove handler, if element listens several handlers on the same event type
     * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
     */
    off(e, t, o4, i) {
      const s6 = this.findAll(e, t, o4);
      s6.forEach((r3, l3) => {
        const a6 = this.allListeners.indexOf(s6[l3]);
        a6 > -1 && (this.allListeners.splice(a6, 1), r3.element.removeEventListener(r3.eventType, r3.handler, r3.options));
      });
    }
    /**
     * Removes listener by id
     *
     * @param {string} id - listener identifier
     */
    offById(e) {
      const t = this.findById(e);
      t && t.element.removeEventListener(t.eventType, t.handler, t.options);
    }
    /**
     * Finds and returns first listener by passed params
     *
     * @param {EventTarget} element - event target
     * @param {string} [eventType] - event type
     * @param {Function} [handler] - event handler
     * @returns {ListenerData|null}
     */
    findOne(e, t, o4) {
      const i = this.findAll(e, t, o4);
      return i.length > 0 ? i[0] : null;
    }
    /**
     * Return all stored listeners by passed params
     *
     * @param {EventTarget} element - event target
     * @param {string} eventType - event type
     * @param {Function} handler - event handler
     * @returns {ListenerData[]}
     */
    findAll(e, t, o4) {
      let i;
      const s6 = e ? this.findByEventTarget(e) : [];
      return e && t && o4 ? i = s6.filter((r3) => r3.eventType === t && r3.handler === o4) : e && t ? i = s6.filter((r3) => r3.eventType === t) : i = s6, i;
    }
    /**
     * Removes all listeners
     */
    removeAll() {
      this.allListeners.map((e) => {
        e.element.removeEventListener(e.eventType, e.handler, e.options);
      }), this.allListeners = [];
    }
    /**
     * Module cleanup on destruction
     */
    destroy() {
      this.removeAll();
    }
    /**
     * Search method: looks for listener by passed element
     *
     * @param {EventTarget} element - searching element
     * @returns {Array} listeners that found on element
     */
    findByEventTarget(e) {
      return this.allListeners.filter((t) => {
        if (t.element === e)
          return t;
      });
    }
    /**
     * Search method: looks for listener by passed event type
     *
     * @param {string} eventType - event type
     * @returns {ListenerData[]} listeners that found on element
     */
    findByType(e) {
      return this.allListeners.filter((t) => {
        if (t.eventType === e)
          return t;
      });
    }
    /**
     * Search method: looks for listener by passed handler
     *
     * @param {Function} handler - event handler
     * @returns {ListenerData[]} listeners that found on element
     */
    findByHandler(e) {
      return this.allListeners.filter((t) => {
        if (t.handler === e)
          return t;
      });
    }
    /**
     * Returns listener data found by id
     *
     * @param {string} id - listener identifier
     * @returns {ListenerData}
     */
    findById(e) {
      return this.allListeners.find((t) => t.id === e);
    }
  };
  var y = class _y {
    /**
     * @class
     * @param options - Module options
     * @param options.config - Module config
     * @param options.eventsDispatcher - Common event bus
     */
    constructor({ config: e, eventsDispatcher: t }) {
      if (this.nodes = {}, this.listeners = new Ce(), this.readOnlyMutableListeners = {
        /**
         * Assigns event listener on DOM element and pushes into special array that might be removed
         *
         * @param {EventTarget} element - DOM Element
         * @param {string} eventType - Event name
         * @param {Function} handler - Event handler
         * @param {boolean|AddEventListenerOptions} options - Listening options
         */
        on: (o4, i, s6, r3 = false) => {
          this.mutableListenerIds.push(
            this.listeners.on(o4, i, s6, r3)
          );
        },
        /**
         * Clears all mutable listeners
         */
        clearAll: () => {
          for (const o4 of this.mutableListenerIds)
            this.listeners.offById(o4);
          this.mutableListenerIds = [];
        }
      }, this.mutableListenerIds = [], new.target === _y)
        throw new TypeError("Constructors for abstract class Module are not allowed.");
      this.config = e, this.eventsDispatcher = t;
    }
    /**
     * Editor modules setter
     *
     * @param {EditorModules} Editor - Editor's Modules
     */
    set state(e) {
      this.Editor = e;
    }
    /**
     * Remove memorized nodes
     */
    removeAllNodes() {
      for (const e in this.nodes) {
        const t = this.nodes[e];
        t instanceof HTMLElement && t.remove();
      }
    }
    /**
     * Returns true if current direction is RTL (Right-To-Left)
     */
    get isRtl() {
      return this.config.i18n.direction === "rtl";
    }
  };
  var b = class _b {
    constructor() {
      this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = false, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
    }
    /**
     * Editor styles
     *
     * @returns {{editorWrapper: string, editorZone: string}}
     */
    static get CSS() {
      return {
        editorWrapper: "codex-editor",
        editorZone: "codex-editor__redactor"
      };
    }
    /**
     * Returns selected anchor
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
     *
     * @returns {Node|null}
     */
    static get anchorNode() {
      const e = window.getSelection();
      return e ? e.anchorNode : null;
    }
    /**
     * Returns selected anchor element
     *
     * @returns {Element|null}
     */
    static get anchorElement() {
      const e = window.getSelection();
      if (!e)
        return null;
      const t = e.anchorNode;
      return t ? d.isElement(t) ? t : t.parentElement : null;
    }
    /**
     * Returns selection offset according to the anchor node
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
     *
     * @returns {number|null}
     */
    static get anchorOffset() {
      const e = window.getSelection();
      return e ? e.anchorOffset : null;
    }
    /**
     * Is current selection range collapsed
     *
     * @returns {boolean|null}
     */
    static get isCollapsed() {
      const e = window.getSelection();
      return e ? e.isCollapsed : null;
    }
    /**
     * Check current selection if it is at Editor's zone
     *
     * @returns {boolean}
     */
    static get isAtEditor() {
      return this.isSelectionAtEditor(_b.get());
    }
    /**
     * Check if passed selection is at Editor's zone
     *
     * @param selection - Selection object to check
     */
    static isSelectionAtEditor(e) {
      if (!e)
        return false;
      let t = e.anchorNode || e.focusNode;
      t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
      let o4 = null;
      return t && t instanceof Element && (o4 = t.closest(`.${_b.CSS.editorZone}`)), o4 ? o4.nodeType === Node.ELEMENT_NODE : false;
    }
    /**
     * Check if passed range at Editor zone
     *
     * @param range - range to check
     */
    static isRangeAtEditor(e) {
      if (!e)
        return;
      let t = e.startContainer;
      t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
      let o4 = null;
      return t && t instanceof Element && (o4 = t.closest(`.${_b.CSS.editorZone}`)), o4 ? o4.nodeType === Node.ELEMENT_NODE : false;
    }
    /**
     * Methods return boolean that true if selection exists on the page
     */
    static get isSelectionExists() {
      return !!_b.get().anchorNode;
    }
    /**
     * Return first range
     *
     * @returns {Range|null}
     */
    static get range() {
      return this.getRangeFromSelection(this.get());
    }
    /**
     * Returns range from passed Selection object
     *
     * @param selection - Selection object to get Range from
     */
    static getRangeFromSelection(e) {
      return e && e.rangeCount ? e.getRangeAt(0) : null;
    }
    /**
     * Calculates position and size of selected text
     *
     * @returns {DOMRect | ClientRect}
     */
    static get rect() {
      let e = document.selection, t, o4 = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      if (e && e.type !== "Control")
        return e = e, t = e.createRange(), o4.x = t.boundingLeft, o4.y = t.boundingTop, o4.width = t.boundingWidth, o4.height = t.boundingHeight, o4;
      if (!window.getSelection)
        return I("Method window.getSelection is not supported", "warn"), o4;
      if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
        return I("Method SelectionUtils.rangeCount is not supported", "warn"), o4;
      if (e.rangeCount === 0)
        return o4;
      if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o4 = t.getBoundingClientRect()), o4.x === 0 && o4.y === 0) {
        const i = document.createElement("span");
        if (i.getBoundingClientRect) {
          i.appendChild(document.createTextNode("\u200B")), t.insertNode(i), o4 = i.getBoundingClientRect();
          const s6 = i.parentNode;
          s6.removeChild(i), s6.normalize();
        }
      }
      return o4;
    }
    /**
     * Returns selected text as String
     *
     * @returns {string}
     */
    static get text() {
      return window.getSelection ? window.getSelection().toString() : "";
    }
    /**
     * Returns window SelectionUtils
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
     *
     * @returns {Selection}
     */
    static get() {
      return window.getSelection();
    }
    /**
     * Set focus to contenteditable or native input element
     *
     * @param element - element where to set focus
     * @param offset - offset of cursor
     */
    static setCursor(e, t = 0) {
      const o4 = document.createRange(), i = window.getSelection();
      return d.isNativeInput(e) ? d.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o4.setStart(e, t), o4.setEnd(e, t), i.removeAllRanges(), i.addRange(o4), o4.getBoundingClientRect());
    }
    /**
     * Check if current range exists and belongs to container
     *
     * @param container - where range should be
     */
    static isRangeInsideContainer(e) {
      const t = _b.range;
      return t === null ? false : e.contains(t.startContainer);
    }
    /**
     * Adds fake cursor to the current range
     */
    static addFakeCursor() {
      const e = _b.range;
      if (e === null)
        return;
      const t = d.make("span", "codex-editor__fake-cursor");
      t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
    }
    /**
     * Check if passed element contains a fake cursor
     *
     * @param el - where to check
     */
    static isFakeCursorInsideContainer(e) {
      return d.find(e, ".codex-editor__fake-cursor") !== null;
    }
    /**
     * Removes fake cursor from a container
     *
     * @param container - container to look for
     */
    static removeFakeCursor(e = document.body) {
      const t = d.find(e, ".codex-editor__fake-cursor");
      t && t.remove();
    }
    /**
     * Removes fake background
     */
    removeFakeBackground() {
      this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = false, document.execCommand(this.commandRemoveFormat));
    }
    /**
     * Sets fake background
     */
    setFakeBackground() {
      document.execCommand(this.commandBackground, false, "#a8d6ff"), this.isFakeBackgroundEnabled = true;
    }
    /**
     * Save SelectionUtils's range
     */
    save() {
      this.savedSelectionRange = _b.range;
    }
    /**
     * Restore saved SelectionUtils's range
     */
    restore() {
      if (!this.savedSelectionRange)
        return;
      const e = window.getSelection();
      e.removeAllRanges(), e.addRange(this.savedSelectionRange);
    }
    /**
     * Clears saved selection
     */
    clearSaved() {
      this.savedSelectionRange = null;
    }
    /**
     * Collapse current selection
     */
    collapseToEnd() {
      const e = window.getSelection(), t = document.createRange();
      t.selectNodeContents(e.focusNode), t.collapse(false), e.removeAllRanges(), e.addRange(t);
    }
    /**
     * Looks ahead to find passed tag from current selection
     *
     * @param  {string} tagName       - tag to found
     * @param  {string} [className]   - tag's class name
     * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
     * @returns {HTMLElement|null}
     */
    findParentTag(e, t, o4 = 10) {
      const i = window.getSelection();
      let s6 = null;
      return !i || !i.anchorNode || !i.focusNode ? null : ([
        /** the Node in which the selection begins */
        i.anchorNode,
        /** the Node in which the selection ends */
        i.focusNode
      ].forEach((l3) => {
        let a6 = o4;
        for (; a6 > 0 && l3.parentNode && !(l3.tagName === e && (s6 = l3, t && l3.classList && !l3.classList.contains(t) && (s6 = null), s6)); )
          l3 = l3.parentNode, a6--;
      }), s6);
    }
    /**
     * Expands selection range to the passed parent node
     *
     * @param {HTMLElement} element - element which contents should be selected
     */
    expandToTag(e) {
      const t = window.getSelection();
      t.removeAllRanges();
      const o4 = document.createRange();
      o4.selectNodeContents(e), t.addRange(o4);
    }
  };
  function Fo(n3, e) {
    const { type: t, target: o4, addedNodes: i, removedNodes: s6 } = n3;
    return n3.type === "attributes" && n3.attributeName === "data-empty" ? false : !!(e.contains(o4) || t === "childList" && (Array.from(i).some((a6) => a6 === e) || Array.from(s6).some((a6) => a6 === e)));
  }
  var Je = "redactor dom changed";
  var Dt = "block changed";
  var Rt = "fake cursor is about to be toggled";
  var Ft = "fake cursor have been set";
  var ye = "editor mobile layout toggled";
  function Qe(n3, e) {
    if (!n3.conversionConfig)
      return false;
    const t = n3.conversionConfig[e];
    return O(t) || Q(t);
  }
  function _e(n3, e) {
    return Qe(n3.tool, e);
  }
  function Ht(n3, e) {
    return Object.entries(n3).some(([t, o4]) => e[t] && Oo(e[t], o4));
  }
  async function zt(n3, e) {
    const o4 = (await n3.save()).data, i = e.find((s6) => s6.name === n3.name);
    return i !== void 0 && !Qe(i, "export") ? [] : e.reduce((s6, r3) => {
      if (!Qe(r3, "import") || r3.toolbox === void 0)
        return s6;
      const l3 = r3.toolbox.filter((a6) => {
        if (V(a6) || a6.icon === void 0)
          return false;
        if (a6.data !== void 0) {
          if (Ht(a6.data, o4))
            return false;
        } else if (r3.name === n3.name)
          return false;
        return true;
      });
      return s6.push({
        ...r3,
        toolbox: l3
      }), s6;
    }, []);
  }
  function wt(n3, e) {
    return n3.mergeable ? n3.name === e.name ? true : _e(e, "export") && _e(n3, "import") : false;
  }
  function Ho(n3, e) {
    const t = e == null ? void 0 : e.export;
    return O(t) ? t(n3) : Q(t) ? n3[t] : (t !== void 0 && I("Conversion \xABexport\xBB property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
  }
  function xt(n3, e) {
    const t = e == null ? void 0 : e.import;
    return O(t) ? t(n3) : Q(t) ? {
      [t]: n3
    } : (t !== void 0 && I("Conversion \xABimport\xBB property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
  }
  var A = /* @__PURE__ */ ((n3) => (n3.Default = "default", n3.Separator = "separator", n3.Html = "html", n3))(A || {});
  var J = /* @__PURE__ */ ((n3) => (n3.APPEND_CALLBACK = "appendCallback", n3.RENDERED = "rendered", n3.MOVED = "moved", n3.UPDATED = "updated", n3.REMOVED = "removed", n3.ON_PASTE = "onPaste", n3))(J || {});
  var D = class _D extends Te {
    /**
     * @param options - block constructor options
     * @param [options.id] - block's id. Will be generated if omitted.
     * @param options.data - Tool's initial data
     * @param options.tool — block's tool
     * @param options.api - Editor API module for pass it to the Block Tunes
     * @param options.readOnly - Read-Only flag
     * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
     */
    constructor({
      id: e = Io(),
      data: t,
      tool: o4,
      readOnly: i,
      tunesData: s6
    }, r3) {
      super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
        this.dropInputsCache(), this.updateCurrentInput();
      }, this.didMutated = (l3 = void 0) => {
        const a6 = l3 === void 0, c5 = l3 instanceof InputEvent;
        !a6 && !c5 && this.detectToolRootChange(l3);
        let u2;
        a6 || c5 ? u2 = true : u2 = !(l3.length > 0 && l3.every((p2) => {
          const { addedNodes: g4, removedNodes: f3, target: k4 } = p2;
          return [
            ...Array.from(g4),
            ...Array.from(f3),
            k4
          ].some((S5) => (d.isElement(S5) || (S5 = S5.parentElement), S5 && S5.closest('[data-mutation-free="true"]') !== null));
        })), u2 && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call(
          "updated"
          /* UPDATED */
        ), this.emit("didMutated", this));
      }, this.name = o4.name, this.id = e, this.settings = o4.settings, this.config = o4.settings.config || {}, this.editorEventBus = r3 || null, this.blockAPI = new G(this), this.tool = o4, this.toolInstance = o4.create(t, this.blockAPI, i), this.tunes = o4.tunes, this.composeTunes(s6), this.holder = this.compose(), window.requestIdleCallback(() => {
        this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
      });
    }
    /**
     * CSS classes for the Block
     *
     * @returns {{wrapper: string, content: string}}
     */
    static get CSS() {
      return {
        wrapper: "ce-block",
        wrapperStretched: "ce-block--stretched",
        content: "ce-block__content",
        selected: "ce-block--selected",
        dropTarget: "ce-block--drop-target"
      };
    }
    /**
     * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
     */
    get inputs() {
      if (this.cachedInputs.length !== 0)
        return this.cachedInputs;
      const e = d.findAllInputs(this.holder);
      return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
    }
    /**
     * Return current Tool`s input
     * If Block doesn't contain inputs, return undefined
     */
    get currentInput() {
      return this.inputs[this.inputIndex];
    }
    /**
     * Set input index to the passed element
     *
     * @param element - HTML Element to set as current input
     */
    set currentInput(e) {
      const t = this.inputs.findIndex((o4) => o4 === e || o4.contains(e));
      t !== -1 && (this.inputIndex = t);
    }
    /**
     * Return first Tool`s input
     * If Block doesn't contain inputs, return undefined
     */
    get firstInput() {
      return this.inputs[0];
    }
    /**
     * Return first Tool`s input
     * If Block doesn't contain inputs, return undefined
     */
    get lastInput() {
      const e = this.inputs;
      return e[e.length - 1];
    }
    /**
     * Return next Tool`s input or undefined if it doesn't exist
     * If Block doesn't contain inputs, return undefined
     */
    get nextInput() {
      return this.inputs[this.inputIndex + 1];
    }
    /**
     * Return previous Tool`s input or undefined if it doesn't exist
     * If Block doesn't contain inputs, return undefined
     */
    get previousInput() {
      return this.inputs[this.inputIndex - 1];
    }
    /**
     * Get Block's JSON data
     *
     * @returns {object}
     */
    get data() {
      return this.save().then((e) => e && !V(e.data) ? e.data : {});
    }
    /**
     * Returns tool's sanitizer config
     *
     * @returns {object}
     */
    get sanitize() {
      return this.tool.sanitizeConfig;
    }
    /**
     * is block mergeable
     * We plugin have merge function then we call it mergeable
     *
     * @returns {boolean}
     */
    get mergeable() {
      return O(this.toolInstance.merge);
    }
    /**
     * If Block contains inputs, it is focusable
     */
    get focusable() {
      return this.inputs.length !== 0;
    }
    /**
     * Check block for emptiness
     *
     * @returns {boolean}
     */
    get isEmpty() {
      const e = d.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
      return e && t;
    }
    /**
     * Check if block has a media content such as images, iframe and other
     *
     * @returns {boolean}
     */
    get hasMedia() {
      const e = [
        "img",
        "iframe",
        "video",
        "audio",
        "source",
        "input",
        "textarea",
        "twitterwidget"
      ];
      return !!this.holder.querySelector(e.join(","));
    }
    /**
     * Set selected state
     * We don't need to mark Block as Selected when it is empty
     *
     * @param {boolean} state - 'true' to select, 'false' to remove selection
     */
    set selected(e) {
      var i, s6;
      this.holder.classList.toggle(_D.CSS.selected, e);
      const t = e === true && b.isRangeInsideContainer(this.holder), o4 = e === false && b.isFakeCursorInsideContainer(this.holder);
      (t || o4) && ((i = this.editorEventBus) == null || i.emit(Rt, { state: e }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (s6 = this.editorEventBus) == null || s6.emit(Ft, { state: e }));
    }
    /**
     * Returns True if it is Selected
     *
     * @returns {boolean}
     */
    get selected() {
      return this.holder.classList.contains(_D.CSS.selected);
    }
    /**
     * Set stretched state
     *
     * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
     */
    set stretched(e) {
      this.holder.classList.toggle(_D.CSS.wrapperStretched, e);
    }
    /**
     * Return Block's stretched state
     *
     * @returns {boolean}
     */
    get stretched() {
      return this.holder.classList.contains(_D.CSS.wrapperStretched);
    }
    /**
     * Toggle drop target state
     *
     * @param {boolean} state - 'true' if block is drop target, false otherwise
     */
    set dropTarget(e) {
      this.holder.classList.toggle(_D.CSS.dropTarget, e);
    }
    /**
     * Returns Plugins content
     *
     * @returns {HTMLElement}
     */
    get pluginsContent() {
      return this.toolRenderedElement;
    }
    /**
     * Calls Tool's method
     *
     * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
     *
     * @param {string} methodName - method to call
     * @param {object} params - method argument
     */
    call(e, t) {
      if (O(this.toolInstance[e])) {
        e === "appendCallback" && I(
          "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
          "warn"
        );
        try {
          this.toolInstance[e].call(this.toolInstance, t);
        } catch (o4) {
          I(`Error during '${e}' call: ${o4.message}`, "error");
        }
      }
    }
    /**
     * Call plugins merge method
     *
     * @param {BlockToolData} data - data to merge
     */
    async mergeWith(e) {
      await this.toolInstance.merge(e);
    }
    /**
     * Extracts data from Block
     * Groups Tool's save processing time
     *
     * @returns {object}
     */
    async save() {
      const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
      [
        ...this.tunesInstances.entries(),
        ...this.defaultTunesInstances.entries()
      ].forEach(([s6, r3]) => {
        if (O(r3.save))
          try {
            t[s6] = r3.save();
          } catch (l3) {
            I(`Tune ${r3.constructor.name} save method throws an Error %o`, "warn", l3);
          }
      });
      const o4 = window.performance.now();
      let i;
      return Promise.resolve(e).then((s6) => (i = window.performance.now(), {
        id: this.id,
        tool: this.name,
        data: s6,
        tunes: t,
        time: i - o4
      })).catch((s6) => {
        I(`Saving process for ${this.name} tool failed due to the ${s6}`, "log", "red");
      });
    }
    /**
     * Uses Tool's validation method to check the correctness of output data
     * Tool's validation method is optional
     *
     * @description Method returns true|false whether data passed the validation or not
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>} valid
     */
    async validate(e) {
      let t = true;
      return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
    }
    /**
     * Returns data to render in Block Tunes menu.
     * Splits block tunes into 2 groups: block specific tunes and common tunes
     */
    getTunes() {
      const e = [], t = [], o4 = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
      return d.isElement(o4) ? e.push({
        type: A.Html,
        element: o4
      }) : Array.isArray(o4) ? e.push(...o4) : e.push(o4), [
        ...this.tunesInstances.values(),
        ...this.defaultTunesInstances.values()
      ].map((s6) => s6.render()).forEach((s6) => {
        d.isElement(s6) ? t.push({
          type: A.Html,
          element: s6
        }) : Array.isArray(s6) ? t.push(...s6) : t.push(s6);
      }), {
        toolTunes: e,
        commonTunes: t
      };
    }
    /**
     * Update current input index with selection anchor node
     */
    updateCurrentInput() {
      this.currentInput = d.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
    }
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      this.didMutated();
    }
    /**
     * Call Tool instance destroy method
     */
    destroy() {
      this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), O(this.toolInstance.destroy) && this.toolInstance.destroy();
    }
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    async getActiveToolboxEntry() {
      const e = this.tool.toolbox;
      if (e.length === 1)
        return Promise.resolve(this.tool.toolbox[0]);
      const t = await this.data, o4 = e;
      return o4 == null ? void 0 : o4.find((i) => Ht(i.data, t));
    }
    /**
     * Exports Block data as string using conversion config
     */
    async exportDataAsString() {
      const e = await this.data;
      return Ho(e, this.tool.conversionConfig);
    }
    /**
     * Make default Block wrappers and put Tool`s content there
     *
     * @returns {HTMLDivElement}
     */
    compose() {
      const e = d.make("div", _D.CSS.wrapper), t = d.make("div", _D.CSS.content), o4 = this.toolInstance.render();
      e.dataset.id = this.id, this.toolRenderedElement = o4, t.appendChild(this.toolRenderedElement);
      let i = t;
      return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((s6) => {
        if (O(s6.wrap))
          try {
            i = s6.wrap(i);
          } catch (r3) {
            I(`Tune ${s6.constructor.name} wrap method throws an Error %o`, "warn", r3);
          }
      }), e.appendChild(i), e;
    }
    /**
     * Instantiate Block Tunes
     *
     * @param tunesData - current Block tunes data
     * @private
     */
    composeTunes(e) {
      Array.from(this.tunes.values()).forEach((t) => {
        (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
      }), Object.entries(e).forEach(([t, o4]) => {
        this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o4);
      });
    }
    /**
     * Adds focus event listeners to all inputs and contenteditable
     */
    addInputEvents() {
      this.inputs.forEach((e) => {
        e.addEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.addEventListener("input", this.didMutated);
      });
    }
    /**
     * removes focus event listeners from all inputs and contenteditable
     */
    removeInputEvents() {
      this.inputs.forEach((e) => {
        e.removeEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
      });
    }
    /**
     * Listen common editor Dom Changed event and detect mutations related to the  Block
     */
    watchBlockMutations() {
      var e;
      this.redactorDomChangedCallback = (t) => {
        const { mutations: o4 } = t;
        o4.some((s6) => Fo(s6, this.toolRenderedElement)) && this.didMutated(o4);
      }, (e = this.editorEventBus) == null || e.on(Je, this.redactorDomChangedCallback);
    }
    /**
     * Remove redactor dom change event listener
     */
    unwatchBlockMutations() {
      var e;
      (e = this.editorEventBus) == null || e.off(Je, this.redactorDomChangedCallback);
    }
    /**
     * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
     * We need to detect such changes and update a link to tools main element with the new one
     *
     * @param mutations - records of block content mutations
     */
    detectToolRootChange(e) {
      e.forEach((t) => {
        if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
          const i = t.addedNodes[t.addedNodes.length - 1];
          this.toolRenderedElement = i;
        }
      });
    }
    /**
     * Clears inputs cached value
     */
    dropInputsCache() {
      this.cachedInputs = [];
    }
    /**
     * Mark inputs with 'data-empty' attribute with the empty state
     */
    toggleInputsEmptyMark() {
      this.inputs.forEach(Lt);
    }
  };
  var zo = class extends y {
    constructor() {
      super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o4 = {}, i, s6, r3, l3) => {
        const a6 = this.Editor.BlockManager.insert({
          id: l3,
          tool: e,
          data: t,
          index: i,
          needToFocus: s6,
          replace: r3
        });
        return new G(a6);
      }, this.composeBlockData = async (e) => {
        const t = this.Editor.Tools.blockTools.get(e);
        return new D({
          tool: t,
          api: this.Editor.API,
          readOnly: true,
          data: {},
          tunesData: {}
        }).data;
      }, this.update = async (e, t, o4) => {
        const { BlockManager: i } = this.Editor, s6 = i.getBlockById(e);
        if (s6 === void 0)
          throw new Error(`Block with id "${e}" not found`);
        const r3 = await i.update(s6, t, o4);
        return new G(r3);
      }, this.convert = async (e, t, o4) => {
        var h5, p2;
        const { BlockManager: i, Tools: s6 } = this.Editor, r3 = i.getBlockById(e);
        if (!r3)
          throw new Error(`Block with id "${e}" not found`);
        const l3 = s6.blockTools.get(r3.name), a6 = s6.blockTools.get(t);
        if (!a6)
          throw new Error(`Block Tool with type "${t}" not found`);
        const c5 = ((h5 = l3 == null ? void 0 : l3.conversionConfig) == null ? void 0 : h5.export) !== void 0, u2 = ((p2 = a6.conversionConfig) == null ? void 0 : p2.import) !== void 0;
        if (c5 && u2) {
          const g4 = await i.convert(r3, t, o4);
          return new G(g4);
        } else {
          const g4 = [
            c5 ? false : Le(r3.name),
            u2 ? false : Le(t)
          ].filter(Boolean).join(" and ");
          throw new Error(`Conversion from "${r3.name}" to "${t}" is not possible. ${g4} tool(s) should provide a "conversionConfig"`);
        }
      }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
        this.validateIndex(t);
        const o4 = e.map(({ id: i, type: s6, data: r3 }) => this.Editor.BlockManager.composeBlock({
          id: i,
          tool: s6 || this.config.defaultBlock,
          data: r3
        }));
        return this.Editor.BlockManager.insertMany(o4, t), o4.map((i) => new G(i));
      };
    }
    /**
     * Available methods
     *
     * @returns {Blocks}
     */
    get methods() {
      return {
        clear: () => this.clear(),
        render: (e) => this.render(e),
        renderFromHTML: (e) => this.renderFromHTML(e),
        delete: (e) => this.delete(e),
        swap: (e, t) => this.swap(e, t),
        move: (e, t) => this.move(e, t),
        getBlockByIndex: (e) => this.getBlockByIndex(e),
        getById: (e) => this.getById(e),
        getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
        getBlockIndex: (e) => this.getBlockIndex(e),
        getBlocksCount: () => this.getBlocksCount(),
        getBlockByElement: (e) => this.getBlockByElement(e),
        stretchBlock: (e, t = true) => this.stretchBlock(e, t),
        insertNewBlock: () => this.insertNewBlock(),
        insert: this.insert,
        insertMany: this.insertMany,
        update: this.update,
        composeBlockData: this.composeBlockData,
        convert: this.convert
      };
    }
    /**
     * Returns Blocks count
     *
     * @returns {number}
     */
    getBlocksCount() {
      return this.Editor.BlockManager.blocks.length;
    }
    /**
     * Returns current block index
     *
     * @returns {number}
     */
    getCurrentBlockIndex() {
      return this.Editor.BlockManager.currentBlockIndex;
    }
    /**
     * Returns the index of Block by id;
     *
     * @param id - block id
     */
    getBlockIndex(e) {
      const t = this.Editor.BlockManager.getBlockById(e);
      if (!t) {
        X("There is no block with id `" + e + "`", "warn");
        return;
      }
      return this.Editor.BlockManager.getBlockIndex(t);
    }
    /**
     * Returns BlockAPI object by Block index
     *
     * @param {number} index - index to get
     */
    getBlockByIndex(e) {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      if (t === void 0) {
        X("There is no block at index `" + e + "`", "warn");
        return;
      }
      return new G(t);
    }
    /**
     * Returns BlockAPI object by Block id
     *
     * @param id - id of block to get
     */
    getById(e) {
      const t = this.Editor.BlockManager.getBlockById(e);
      return t === void 0 ? (X("There is no block with id `" + e + "`", "warn"), null) : new G(t);
    }
    /**
     * Get Block API object by any child html element
     *
     * @param element - html element to get Block by
     */
    getBlockByElement(e) {
      const t = this.Editor.BlockManager.getBlock(e);
      if (t === void 0) {
        X("There is no block corresponding to element `" + e + "`", "warn");
        return;
      }
      return new G(t);
    }
    /**
     * Call Block Manager method that swap Blocks
     *
     * @param {number} fromIndex - position of first Block
     * @param {number} toIndex - position of second Block
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      I(
        "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
        "info"
      ), this.Editor.BlockManager.swap(e, t);
    }
    /**
     * Move block from one index to another
     *
     * @param {number} toIndex - index to move to
     * @param {number} fromIndex - index to move from
     */
    move(e, t) {
      this.Editor.BlockManager.move(e, t);
    }
    /**
     * Deletes Block
     *
     * @param {number} blockIndex - index of Block to delete
     */
    delete(e = this.Editor.BlockManager.currentBlockIndex) {
      try {
        const t = this.Editor.BlockManager.getBlockByIndex(e);
        this.Editor.BlockManager.removeBlock(t);
      } catch (t) {
        X(t, "warn");
        return;
      }
      this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
    }
    /**
     * Clear Editor's area
     */
    async clear() {
      await this.Editor.BlockManager.clear(true), this.Editor.InlineToolbar.close();
    }
    /**
     * Fills Editor with Blocks data
     *
     * @param {OutputData} data — Saved Editor data
     */
    async render(e) {
      if (e === void 0 || e.blocks === void 0)
        throw new Error("Incorrect data passed to the render() method");
      this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
    }
    /**
     * Render passed HTML string
     *
     * @param {string} data - HTML string to render
     * @returns {Promise<void>}
     */
    renderFromHTML(e) {
      return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, true);
    }
    /**
     * Stretch Block's content
     *
     * @param {number} index - index of Block to stretch
     * @param {boolean} status - true to enable, false to disable
     * @deprecated Use BlockAPI interface to stretch Blocks
     */
    stretchBlock(e, t = true) {
      Ze(
        true,
        "blocks.stretchBlock()",
        "BlockAPI"
      );
      const o4 = this.Editor.BlockManager.getBlockByIndex(e);
      o4 && (o4.stretched = t);
    }
    /**
     * Insert new Block
     * After set caret to this Block
     *
     * @todo remove in 3.0.0
     * @deprecated with insert() method
     */
    insertNewBlock() {
      I("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
    }
    /**
     * Validated block index and throws an error if it's invalid
     *
     * @param index - index to validate
     */
    validateIndex(e) {
      if (typeof e != "number")
        throw new Error("Index should be a number");
      if (e < 0)
        throw new Error("Index should be greater than or equal to 0");
      if (e === null)
        throw new Error("Index should be greater than or equal to 0");
    }
  };
  function Uo(n3, e) {
    return typeof n3 == "number" ? e.BlockManager.getBlockByIndex(n3) : typeof n3 == "string" ? e.BlockManager.getBlockById(n3) : e.BlockManager.getBlockById(n3.id);
  }
  var jo = class extends y {
    constructor() {
      super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), true) : false, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), true) : false, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), true) : false, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), true) : false, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o4 = 0) => {
        const i = Uo(e, this.Editor);
        return i === void 0 ? false : (this.Editor.Caret.setToBlock(i, t, o4), true);
      }, this.focus = (e = false) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
    }
    /**
     * Available methods
     *
     * @returns {Caret}
     */
    get methods() {
      return {
        setToFirstBlock: this.setToFirstBlock,
        setToLastBlock: this.setToLastBlock,
        setToPreviousBlock: this.setToPreviousBlock,
        setToNextBlock: this.setToNextBlock,
        setToBlock: this.setToBlock,
        focus: this.focus
      };
    }
  };
  var $o = class extends y {
    /**
     * Available methods
     *
     * @returns {Events}
     */
    get methods() {
      return {
        emit: (e, t) => this.emit(e, t),
        off: (e, t) => this.off(e, t),
        on: (e, t) => this.on(e, t)
      };
    }
    /**
     * Subscribe on Events
     *
     * @param {string} eventName - event name to subscribe
     * @param {Function} callback - event handler
     */
    on(e, t) {
      this.eventsDispatcher.on(e, t);
    }
    /**
     * Emit event with data
     *
     * @param {string} eventName - event to emit
     * @param {object} data - event's data
     */
    emit(e, t) {
      this.eventsDispatcher.emit(e, t);
    }
    /**
     * Unsubscribe from Event
     *
     * @param {string} eventName - event to unsubscribe
     * @param {Function} callback - event handler
     */
    off(e, t) {
      this.eventsDispatcher.off(e, t);
    }
  };
  var ot = class _ot extends y {
    /**
     * Return namespace section for tool or block tune
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    static getNamespace(e, t) {
      return t ? `blockTunes.${e}` : `tools.${e}`;
    }
    /**
     * Return I18n API methods with global dictionary access
     */
    get methods() {
      return {
        t: () => {
          X("I18n.t() method can be accessed only from Tools", "warn");
        }
      };
    }
    /**
     * Return I18n API methods with tool namespaced dictionary
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    getMethodsForTool(e, t) {
      return Object.assign(
        this.methods,
        {
          t: (o4) => z.t(_ot.getNamespace(e, t), o4)
        }
      );
    }
  };
  var Yo = class extends y {
    /**
     * Editor.js Core API modules
     */
    get methods() {
      return {
        blocks: this.Editor.BlocksAPI.methods,
        caret: this.Editor.CaretAPI.methods,
        tools: this.Editor.ToolsAPI.methods,
        events: this.Editor.EventsAPI.methods,
        listeners: this.Editor.ListenersAPI.methods,
        notifier: this.Editor.NotifierAPI.methods,
        sanitizer: this.Editor.SanitizerAPI.methods,
        saver: this.Editor.SaverAPI.methods,
        selection: this.Editor.SelectionAPI.methods,
        styles: this.Editor.StylesAPI.classes,
        toolbar: this.Editor.ToolbarAPI.methods,
        inlineToolbar: this.Editor.InlineToolbarAPI.methods,
        tooltip: this.Editor.TooltipAPI.methods,
        i18n: this.Editor.I18nAPI.methods,
        readOnly: this.Editor.ReadOnlyAPI.methods,
        ui: this.Editor.UiAPI.methods
      };
    }
    /**
     * Returns Editor.js Core API methods for passed tool
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    getMethodsForTool(e, t) {
      return Object.assign(
        this.methods,
        {
          i18n: this.Editor.I18nAPI.getMethodsForTool(e, t)
        }
      );
    }
  };
  var Wo = class extends y {
    /**
     * Available methods
     *
     * @returns {InlineToolbar}
     */
    get methods() {
      return {
        close: () => this.close(),
        open: () => this.open()
      };
    }
    /**
     * Open Inline Toolbar
     */
    open() {
      this.Editor.InlineToolbar.tryToShow();
    }
    /**
     * Close Inline Toolbar
     */
    close() {
      this.Editor.InlineToolbar.close();
    }
  };
  var Ko = class extends y {
    /**
     * Available methods
     *
     * @returns {Listeners}
     */
    get methods() {
      return {
        on: (e, t, o4, i) => this.on(e, t, o4, i),
        off: (e, t, o4, i) => this.off(e, t, o4, i),
        offById: (e) => this.offById(e)
      };
    }
    /**
     * Ads a DOM event listener. Return it's id.
     *
     * @param {HTMLElement} element - Element to set handler to
     * @param {string} eventType - event type
     * @param {() => void} handler - event handler
     * @param {boolean} useCapture - capture event or not
     */
    on(e, t, o4, i) {
      return this.listeners.on(e, t, o4, i);
    }
    /**
     * Removes DOM listener from element
     *
     * @param {Element} element - Element to remove handler from
     * @param eventType - event type
     * @param handler - event handler
     * @param {boolean} useCapture - capture event or not
     */
    off(e, t, o4, i) {
      this.listeners.off(e, t, o4, i);
    }
    /**
     * Removes DOM listener by the listener id
     *
     * @param id - id of the listener to remove
     */
    offById(e) {
      this.listeners.offById(e);
    }
  };
  var Ut = { exports: {} };
  (function(n3, e) {
    (function(t, o4) {
      n3.exports = o4();
    })(window, function() {
      return function(t) {
        var o4 = {};
        function i(s6) {
          if (o4[s6])
            return o4[s6].exports;
          var r3 = o4[s6] = { i: s6, l: false, exports: {} };
          return t[s6].call(r3.exports, r3, r3.exports, i), r3.l = true, r3.exports;
        }
        return i.m = t, i.c = o4, i.d = function(s6, r3, l3) {
          i.o(s6, r3) || Object.defineProperty(s6, r3, { enumerable: true, get: l3 });
        }, i.r = function(s6) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s6, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s6, "__esModule", { value: true });
        }, i.t = function(s6, r3) {
          if (1 & r3 && (s6 = i(s6)), 8 & r3 || 4 & r3 && typeof s6 == "object" && s6 && s6.__esModule)
            return s6;
          var l3 = /* @__PURE__ */ Object.create(null);
          if (i.r(l3), Object.defineProperty(l3, "default", { enumerable: true, value: s6 }), 2 & r3 && typeof s6 != "string")
            for (var a6 in s6)
              i.d(l3, a6, function(c5) {
                return s6[c5];
              }.bind(null, a6));
          return l3;
        }, i.n = function(s6) {
          var r3 = s6 && s6.__esModule ? function() {
            return s6.default;
          } : function() {
            return s6;
          };
          return i.d(r3, "a", r3), r3;
        }, i.o = function(s6, r3) {
          return Object.prototype.hasOwnProperty.call(s6, r3);
        }, i.p = "/", i(i.s = 0);
      }([function(t, o4, i) {
        i(1), /*!
        * Codex JavaScript Notification module
        * https://github.com/codex-team/js-notifier
        */
        t.exports = function() {
          var s6 = i(6), r3 = "cdx-notify--bounce-in", l3 = null;
          return { show: function(a6) {
            if (a6.message) {
              (function() {
                if (l3)
                  return true;
                l3 = s6.getWrapper(), document.body.appendChild(l3);
              })();
              var c5 = null, u2 = a6.time || 8e3;
              switch (a6.type) {
                case "confirm":
                  c5 = s6.confirm(a6);
                  break;
                case "prompt":
                  c5 = s6.prompt(a6);
                  break;
                default:
                  c5 = s6.alert(a6), window.setTimeout(function() {
                    c5.remove();
                  }, u2);
              }
              l3.appendChild(c5), c5.classList.add(r3);
            }
          } };
        }();
      }, function(t, o4, i) {
        var s6 = i(2);
        typeof s6 == "string" && (s6 = [[t.i, s6, ""]]);
        var r3 = { hmr: true, transform: void 0, insertInto: void 0 };
        i(4)(s6, r3), s6.locals && (t.exports = s6.locals);
      }, function(t, o4, i) {
        (t.exports = i(3)(false)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
      }, function(t, o4) {
        t.exports = function(i) {
          var s6 = [];
          return s6.toString = function() {
            return this.map(function(r3) {
              var l3 = function(a6, c5) {
                var u2 = a6[1] || "", h5 = a6[3];
                if (!h5)
                  return u2;
                if (c5 && typeof btoa == "function") {
                  var p2 = (f3 = h5, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f3)))) + " */"), g4 = h5.sources.map(function(k4) {
                    return "/*# sourceURL=" + h5.sourceRoot + k4 + " */";
                  });
                  return [u2].concat(g4).concat([p2]).join(`
`);
                }
                var f3;
                return [u2].join(`
`);
              }(r3, i);
              return r3[2] ? "@media " + r3[2] + "{" + l3 + "}" : l3;
            }).join("");
          }, s6.i = function(r3, l3) {
            typeof r3 == "string" && (r3 = [[null, r3, ""]]);
            for (var a6 = {}, c5 = 0; c5 < this.length; c5++) {
              var u2 = this[c5][0];
              typeof u2 == "number" && (a6[u2] = true);
            }
            for (c5 = 0; c5 < r3.length; c5++) {
              var h5 = r3[c5];
              typeof h5[0] == "number" && a6[h5[0]] || (l3 && !h5[2] ? h5[2] = l3 : l3 && (h5[2] = "(" + h5[2] + ") and (" + l3 + ")"), s6.push(h5));
            }
          }, s6;
        };
      }, function(t, o4, i) {
        var s6, r3, l3 = {}, a6 = (s6 = function() {
          return window && document && document.all && !window.atob;
        }, function() {
          return r3 === void 0 && (r3 = s6.apply(this, arguments)), r3;
        }), c5 = /* @__PURE__ */ function(v5) {
          var m4 = {};
          return function(x5) {
            if (typeof x5 == "function")
              return x5();
            if (m4[x5] === void 0) {
              var E4 = function(M5) {
                return document.querySelector(M5);
              }.call(this, x5);
              if (window.HTMLIFrameElement && E4 instanceof window.HTMLIFrameElement)
                try {
                  E4 = E4.contentDocument.head;
                } catch {
                  E4 = null;
                }
              m4[x5] = E4;
            }
            return m4[x5];
          };
        }(), u2 = null, h5 = 0, p2 = [], g4 = i(5);
        function f3(v5, m4) {
          for (var x5 = 0; x5 < v5.length; x5++) {
            var E4 = v5[x5], M5 = l3[E4.id];
            if (M5) {
              M5.refs++;
              for (var T4 = 0; T4 < M5.parts.length; T4++)
                M5.parts[T4](E4.parts[T4]);
              for (; T4 < E4.parts.length; T4++)
                M5.parts.push(j3(E4.parts[T4], m4));
            } else {
              var P4 = [];
              for (T4 = 0; T4 < E4.parts.length; T4++)
                P4.push(j3(E4.parts[T4], m4));
              l3[E4.id] = { id: E4.id, refs: 1, parts: P4 };
            }
          }
        }
        function k4(v5, m4) {
          for (var x5 = [], E4 = {}, M5 = 0; M5 < v5.length; M5++) {
            var T4 = v5[M5], P4 = m4.base ? T4[0] + m4.base : T4[0], B5 = { css: T4[1], media: T4[2], sourceMap: T4[3] };
            E4[P4] ? E4[P4].parts.push(B5) : x5.push(E4[P4] = { id: P4, parts: [B5] });
          }
          return x5;
        }
        function C4(v5, m4) {
          var x5 = c5(v5.insertInto);
          if (!x5)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var E4 = p2[p2.length - 1];
          if (v5.insertAt === "top")
            E4 ? E4.nextSibling ? x5.insertBefore(m4, E4.nextSibling) : x5.appendChild(m4) : x5.insertBefore(m4, x5.firstChild), p2.push(m4);
          else if (v5.insertAt === "bottom")
            x5.appendChild(m4);
          else {
            if (typeof v5.insertAt != "object" || !v5.insertAt.before)
              throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            var M5 = c5(v5.insertInto + " " + v5.insertAt.before);
            x5.insertBefore(m4, M5);
          }
        }
        function S5(v5) {
          if (v5.parentNode === null)
            return false;
          v5.parentNode.removeChild(v5);
          var m4 = p2.indexOf(v5);
          m4 >= 0 && p2.splice(m4, 1);
        }
        function _3(v5) {
          var m4 = document.createElement("style");
          return v5.attrs.type === void 0 && (v5.attrs.type = "text/css"), ee3(m4, v5.attrs), C4(v5, m4), m4;
        }
        function ee3(v5, m4) {
          Object.keys(m4).forEach(function(x5) {
            v5.setAttribute(x5, m4[x5]);
          });
        }
        function j3(v5, m4) {
          var x5, E4, M5, T4;
          if (m4.transform && v5.css) {
            if (!(T4 = m4.transform(v5.css)))
              return function() {
              };
            v5.css = T4;
          }
          if (m4.singleton) {
            var P4 = h5++;
            x5 = u2 || (u2 = _3(m4)), E4 = fe3.bind(null, x5, P4, false), M5 = fe3.bind(null, x5, P4, true);
          } else
            v5.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (x5 = function(B5) {
              var Y3 = document.createElement("link");
              return B5.attrs.type === void 0 && (B5.attrs.type = "text/css"), B5.attrs.rel = "stylesheet", ee3(Y3, B5.attrs), C4(B5, Y3), Y3;
            }(m4), E4 = function(B5, Y3, ge3) {
              var ie3 = ge3.css, He3 = ge3.sourceMap, mo = Y3.convertToAbsoluteUrls === void 0 && He3;
              (Y3.convertToAbsoluteUrls || mo) && (ie3 = g4(ie3)), He3 && (ie3 += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(He3)))) + " */");
              var bo = new Blob([ie3], { type: "text/css" }), mt2 = B5.href;
              B5.href = URL.createObjectURL(bo), mt2 && URL.revokeObjectURL(mt2);
            }.bind(null, x5, m4), M5 = function() {
              S5(x5), x5.href && URL.revokeObjectURL(x5.href);
            }) : (x5 = _3(m4), E4 = function(B5, Y3) {
              var ge3 = Y3.css, ie3 = Y3.media;
              if (ie3 && B5.setAttribute("media", ie3), B5.styleSheet)
                B5.styleSheet.cssText = ge3;
              else {
                for (; B5.firstChild; )
                  B5.removeChild(B5.firstChild);
                B5.appendChild(document.createTextNode(ge3));
              }
            }.bind(null, x5), M5 = function() {
              S5(x5);
            });
          return E4(v5), function(B5) {
            if (B5) {
              if (B5.css === v5.css && B5.media === v5.media && B5.sourceMap === v5.sourceMap)
                return;
              E4(v5 = B5);
            } else
              M5();
          };
        }
        t.exports = function(v5, m4) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error("The style-loader cannot be used in a non-browser environment");
          (m4 = m4 || {}).attrs = typeof m4.attrs == "object" ? m4.attrs : {}, m4.singleton || typeof m4.singleton == "boolean" || (m4.singleton = a6()), m4.insertInto || (m4.insertInto = "head"), m4.insertAt || (m4.insertAt = "bottom");
          var x5 = k4(v5, m4);
          return f3(x5, m4), function(E4) {
            for (var M5 = [], T4 = 0; T4 < x5.length; T4++) {
              var P4 = x5[T4];
              (B5 = l3[P4.id]).refs--, M5.push(B5);
            }
            for (E4 && f3(k4(E4, m4), m4), T4 = 0; T4 < M5.length; T4++) {
              var B5;
              if ((B5 = M5[T4]).refs === 0) {
                for (var Y3 = 0; Y3 < B5.parts.length; Y3++)
                  B5.parts[Y3]();
                delete l3[B5.id];
              }
            }
          };
        };
        var $3, oe3 = ($3 = [], function(v5, m4) {
          return $3[v5] = m4, $3.filter(Boolean).join(`
`);
        });
        function fe3(v5, m4, x5, E4) {
          var M5 = x5 ? "" : E4.css;
          if (v5.styleSheet)
            v5.styleSheet.cssText = oe3(m4, M5);
          else {
            var T4 = document.createTextNode(M5), P4 = v5.childNodes;
            P4[m4] && v5.removeChild(P4[m4]), P4.length ? v5.insertBefore(T4, P4[m4]) : v5.appendChild(T4);
          }
        }
      }, function(t, o4) {
        t.exports = function(i) {
          var s6 = typeof window < "u" && window.location;
          if (!s6)
            throw new Error("fixUrls requires window.location");
          if (!i || typeof i != "string")
            return i;
          var r3 = s6.protocol + "//" + s6.host, l3 = r3 + s6.pathname.replace(/\/[^\/]*$/, "/");
          return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(a6, c5) {
            var u2, h5 = c5.trim().replace(/^"(.*)"$/, function(p2, g4) {
              return g4;
            }).replace(/^'(.*)'$/, function(p2, g4) {
              return g4;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h5) ? a6 : (u2 = h5.indexOf("//") === 0 ? h5 : h5.indexOf("/") === 0 ? r3 + h5 : l3 + h5.replace(/^\.\//, ""), "url(" + JSON.stringify(u2) + ")");
          });
        };
      }, function(t, o4, i) {
        var s6, r3, l3, a6, c5, u2, h5, p2, g4;
        t.exports = (s6 = "cdx-notifies", r3 = "cdx-notify", l3 = "cdx-notify__cross", a6 = "cdx-notify__button--confirm", c5 = "cdx-notify__button--cancel", u2 = "cdx-notify__input", h5 = "cdx-notify__button", p2 = "cdx-notify__btns-wrapper", { alert: g4 = function(f3) {
          var k4 = document.createElement("DIV"), C4 = document.createElement("DIV"), S5 = f3.message, _3 = f3.style;
          return k4.classList.add(r3), _3 && k4.classList.add(r3 + "--" + _3), k4.innerHTML = S5, C4.classList.add(l3), C4.addEventListener("click", k4.remove.bind(k4)), k4.appendChild(C4), k4;
        }, confirm: function(f3) {
          var k4 = g4(f3), C4 = document.createElement("div"), S5 = document.createElement("button"), _3 = document.createElement("button"), ee3 = k4.querySelector("." + l3), j3 = f3.cancelHandler, $3 = f3.okHandler;
          return C4.classList.add(p2), S5.innerHTML = f3.okText || "Confirm", _3.innerHTML = f3.cancelText || "Cancel", S5.classList.add(h5), _3.classList.add(h5), S5.classList.add(a6), _3.classList.add(c5), j3 && typeof j3 == "function" && (_3.addEventListener("click", j3), ee3.addEventListener("click", j3)), $3 && typeof $3 == "function" && S5.addEventListener("click", $3), S5.addEventListener("click", k4.remove.bind(k4)), _3.addEventListener("click", k4.remove.bind(k4)), C4.appendChild(S5), C4.appendChild(_3), k4.appendChild(C4), k4;
        }, prompt: function(f3) {
          var k4 = g4(f3), C4 = document.createElement("div"), S5 = document.createElement("button"), _3 = document.createElement("input"), ee3 = k4.querySelector("." + l3), j3 = f3.cancelHandler, $3 = f3.okHandler;
          return C4.classList.add(p2), S5.innerHTML = f3.okText || "Ok", S5.classList.add(h5), S5.classList.add(a6), _3.classList.add(u2), f3.placeholder && _3.setAttribute("placeholder", f3.placeholder), f3.default && (_3.value = f3.default), f3.inputType && (_3.type = f3.inputType), j3 && typeof j3 == "function" && ee3.addEventListener("click", j3), $3 && typeof $3 == "function" && S5.addEventListener("click", function() {
            $3(_3.value);
          }), S5.addEventListener("click", k4.remove.bind(k4)), C4.appendChild(_3), C4.appendChild(S5), k4.appendChild(C4), k4;
        }, getWrapper: function() {
          var f3 = document.createElement("DIV");
          return f3.classList.add(s6), f3;
        } });
      }]);
    });
  })(Ut);
  var Xo = Ut.exports;
  var Vo = /* @__PURE__ */ Fe(Xo);
  var qo = class {
    /**
     * Show web notification
     *
     * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
     */
    show(e) {
      Vo.show(e);
    }
  };
  var Zo = class extends y {
    /**
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.notifier = new qo();
    }
    /**
     * Available methods
     */
    get methods() {
      return {
        show: (e) => this.show(e)
      };
    }
    /**
     * Show notification
     *
     * @param {NotifierOptions} options - message option
     */
    show(e) {
      return this.notifier.show(e);
    }
  };
  var Go = class extends y {
    /**
     * Available methods
     */
    get methods() {
      const e = () => this.isEnabled;
      return {
        toggle: (t) => this.toggle(t),
        get isEnabled() {
          return e();
        }
      };
    }
    /**
     * Set or toggle read-only state
     *
     * @param {boolean|undefined} state - set or toggle state
     * @returns {boolean} current value
     */
    toggle(e) {
      return this.Editor.ReadOnly.toggle(e);
    }
    /**
     * Returns current read-only state
     */
    get isEnabled() {
      return this.Editor.ReadOnly.isEnabled;
    }
  };
  var jt = { exports: {} };
  (function(n3, e) {
    (function(t, o4) {
      n3.exports = o4();
    })(ko, function() {
      function t(h5) {
        var p2 = h5.tags, g4 = Object.keys(p2), f3 = g4.map(function(k4) {
          return typeof p2[k4];
        }).every(function(k4) {
          return k4 === "object" || k4 === "boolean" || k4 === "function";
        });
        if (!f3)
          throw new Error("The configuration was invalid");
        this.config = h5;
      }
      var o4 = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
      function i(h5) {
        return o4.indexOf(h5.nodeName) !== -1;
      }
      var s6 = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
      function r3(h5) {
        return s6.indexOf(h5.nodeName) !== -1;
      }
      t.prototype.clean = function(h5) {
        const p2 = document.implementation.createHTMLDocument(), g4 = p2.createElement("div");
        return g4.innerHTML = h5, this._sanitize(p2, g4), g4.innerHTML;
      }, t.prototype._sanitize = function(h5, p2) {
        var g4 = l3(h5, p2), f3 = g4.firstChild();
        if (f3)
          do {
            if (f3.nodeType === Node.TEXT_NODE)
              if (f3.data.trim() === "" && (f3.previousElementSibling && i(f3.previousElementSibling) || f3.nextElementSibling && i(f3.nextElementSibling))) {
                p2.removeChild(f3), this._sanitize(h5, p2);
                break;
              } else
                continue;
            if (f3.nodeType === Node.COMMENT_NODE) {
              p2.removeChild(f3), this._sanitize(h5, p2);
              break;
            }
            var k4 = r3(f3), C4;
            k4 && (C4 = Array.prototype.some.call(f3.childNodes, i));
            var S5 = !!p2.parentNode, _3 = i(p2) && i(f3) && S5, ee3 = f3.nodeName.toLowerCase(), j3 = a6(this.config, ee3, f3), $3 = k4 && C4;
            if ($3 || c5(f3, j3) || !this.config.keepNestedBlockElements && _3) {
              if (!(f3.nodeName === "SCRIPT" || f3.nodeName === "STYLE"))
                for (; f3.childNodes.length > 0; )
                  p2.insertBefore(f3.childNodes[0], f3);
              p2.removeChild(f3), this._sanitize(h5, p2);
              break;
            }
            for (var oe3 = 0; oe3 < f3.attributes.length; oe3 += 1) {
              var fe3 = f3.attributes[oe3];
              u2(fe3, j3, f3) && (f3.removeAttribute(fe3.name), oe3 = oe3 - 1);
            }
            this._sanitize(h5, f3);
          } while (f3 = g4.nextSibling());
      };
      function l3(h5, p2) {
        return h5.createTreeWalker(
          p2,
          NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
          null,
          false
        );
      }
      function a6(h5, p2, g4) {
        return typeof h5.tags[p2] == "function" ? h5.tags[p2](g4) : h5.tags[p2];
      }
      function c5(h5, p2) {
        return typeof p2 > "u" ? true : typeof p2 == "boolean" ? !p2 : false;
      }
      function u2(h5, p2, g4) {
        var f3 = h5.name.toLowerCase();
        return p2 === true ? false : typeof p2[f3] == "function" ? !p2[f3](h5.value, g4) : typeof p2[f3] > "u" || p2[f3] === false ? true : typeof p2[f3] == "string" ? p2[f3] !== h5.value : false;
      }
      return t;
    });
  })(jt);
  var Jo = jt.exports;
  var Qo = /* @__PURE__ */ Fe(Jo);
  function it(n3, e) {
    return n3.map((t) => {
      const o4 = O(e) ? e(t.tool) : e;
      return V(o4) || (t.data = st(t.data, o4)), t;
    });
  }
  function q(n3, e = {}) {
    const t = {
      tags: e
    };
    return new Qo(t).clean(n3);
  }
  function st(n3, e) {
    return Array.isArray(n3) ? ei(n3, e) : R(n3) ? ti(n3, e) : Q(n3) ? oi(n3, e) : n3;
  }
  function ei(n3, e) {
    return n3.map((t) => st(t, e));
  }
  function ti(n3, e) {
    const t = {};
    for (const o4 in n3) {
      if (!Object.prototype.hasOwnProperty.call(n3, o4))
        continue;
      const i = n3[o4], s6 = ii(e[o4]) ? e[o4] : e;
      t[o4] = st(i, s6);
    }
    return t;
  }
  function oi(n3, e) {
    return R(e) ? q(n3, e) : e === false ? q(n3, {}) : n3;
  }
  function ii(n3) {
    return R(n3) || yo(n3) || O(n3);
  }
  var si = class extends y {
    /**
     * Available methods
     *
     * @returns {SanitizerConfig}
     */
    get methods() {
      return {
        clean: (e, t) => this.clean(e, t)
      };
    }
    /**
     * Perform sanitizing of a string
     *
     * @param {string} taintString - what to sanitize
     * @param {SanitizerConfig} config - sanitizer config
     * @returns {string}
     */
    clean(e, t) {
      return q(e, t);
    }
  };
  var ni = class extends y {
    /**
     * Available methods
     *
     * @returns {Saver}
     */
    get methods() {
      return {
        save: () => this.save()
      };
    }
    /**
     * Return Editor's data
     *
     * @returns {OutputData}
     */
    save() {
      const e = "Editor's content can not be saved in read-only mode";
      return this.Editor.ReadOnly.isEnabled ? (X(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
    }
  };
  var ri = class extends y {
    constructor() {
      super(...arguments), this.selectionUtils = new b();
    }
    /**
     * Available methods
     *
     * @returns {SelectionAPIInterface}
     */
    get methods() {
      return {
        findParentTag: (e, t) => this.findParentTag(e, t),
        expandToTag: (e) => this.expandToTag(e),
        save: () => this.selectionUtils.save(),
        restore: () => this.selectionUtils.restore(),
        setFakeBackground: () => this.selectionUtils.setFakeBackground(),
        removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
      };
    }
    /**
     * Looks ahead from selection and find passed tag with class name
     *
     * @param {string} tagName - tag to find
     * @param {string} className - tag's class name
     * @returns {HTMLElement|null}
     */
    findParentTag(e, t) {
      return this.selectionUtils.findParentTag(e, t);
    }
    /**
     * Expand selection to passed tag
     *
     * @param {HTMLElement} node - tag that should contain selection
     */
    expandToTag(e) {
      this.selectionUtils.expandToTag(e);
    }
  };
  var li = class extends y {
    /**
     * Available methods
     */
    get methods() {
      return {
        getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
      };
    }
  };
  var ai = class extends y {
    /**
     * Exported classes
     */
    get classes() {
      return {
        /**
         * Base Block styles
         */
        block: "cdx-block",
        /**
         * Inline Tools styles
         */
        inlineToolButton: "ce-inline-tool",
        inlineToolButtonActive: "ce-inline-tool--active",
        /**
         * UI elements
         */
        input: "cdx-input",
        loader: "cdx-loader",
        button: "cdx-button",
        /**
         * Settings styles
         */
        settingsButton: "cdx-settings-button",
        settingsButtonActive: "cdx-settings-button--active"
      };
    }
  };
  var ci = class extends y {
    /**
     * Available methods
     *
     * @returns {Toolbar}
     */
    get methods() {
      return {
        close: () => this.close(),
        open: () => this.open(),
        toggleBlockSettings: (e) => this.toggleBlockSettings(e),
        toggleToolbox: (e) => this.toggleToolbox(e)
      };
    }
    /**
     * Open toolbar
     */
    open() {
      this.Editor.Toolbar.moveAndOpen();
    }
    /**
     * Close toolbar and all included elements
     */
    close() {
      this.Editor.Toolbar.close();
    }
    /**
     * Toggles Block Setting of the current block
     *
     * @param {boolean} openingState —  opening state of Block Setting
     */
    toggleBlockSettings(e) {
      if (this.Editor.BlockManager.currentBlockIndex === -1) {
        X("Could't toggle the Toolbar because there is no block selected ", "warn");
        return;
      }
      e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
    }
    /**
     * Open toolbox
     *
     * @param {boolean} openingState - Opening state of toolbox
     */
    toggleToolbox(e) {
      if (this.Editor.BlockManager.currentBlockIndex === -1) {
        X("Could't toggle the Toolbox because there is no block selected ", "warn");
        return;
      }
      e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
    }
  };
  var $t = { exports: {} };
  (function(n3, e) {
    (function(t, o4) {
      n3.exports = o4();
    })(window, function() {
      return function(t) {
        var o4 = {};
        function i(s6) {
          if (o4[s6])
            return o4[s6].exports;
          var r3 = o4[s6] = { i: s6, l: false, exports: {} };
          return t[s6].call(r3.exports, r3, r3.exports, i), r3.l = true, r3.exports;
        }
        return i.m = t, i.c = o4, i.d = function(s6, r3, l3) {
          i.o(s6, r3) || Object.defineProperty(s6, r3, { enumerable: true, get: l3 });
        }, i.r = function(s6) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s6, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s6, "__esModule", { value: true });
        }, i.t = function(s6, r3) {
          if (1 & r3 && (s6 = i(s6)), 8 & r3 || 4 & r3 && typeof s6 == "object" && s6 && s6.__esModule)
            return s6;
          var l3 = /* @__PURE__ */ Object.create(null);
          if (i.r(l3), Object.defineProperty(l3, "default", { enumerable: true, value: s6 }), 2 & r3 && typeof s6 != "string")
            for (var a6 in s6)
              i.d(l3, a6, function(c5) {
                return s6[c5];
              }.bind(null, a6));
          return l3;
        }, i.n = function(s6) {
          var r3 = s6 && s6.__esModule ? function() {
            return s6.default;
          } : function() {
            return s6;
          };
          return i.d(r3, "a", r3), r3;
        }, i.o = function(s6, r3) {
          return Object.prototype.hasOwnProperty.call(s6, r3);
        }, i.p = "", i(i.s = 0);
      }([function(t, o4, i) {
        t.exports = i(1);
      }, function(t, o4, i) {
        i.r(o4), i.d(o4, "default", function() {
          return s6;
        });
        class s6 {
          constructor() {
            this.nodes = { wrapper: null, content: null }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
              this.showed && this.hide(true);
            }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: true });
          }
          get CSS() {
            return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
          }
          show(l3, a6, c5) {
            this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
            const u2 = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c5);
            if (u2.hidingDelay && (this.hidingDelay = u2.hidingDelay), this.nodes.content.innerHTML = "", typeof a6 == "string")
              this.nodes.content.appendChild(document.createTextNode(a6));
            else {
              if (!(a6 instanceof Node))
                throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof a6 + " given.");
              this.nodes.content.appendChild(a6);
            }
            switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u2.placement) {
              case "top":
                this.placeTop(l3, u2);
                break;
              case "left":
                this.placeLeft(l3, u2);
                break;
              case "right":
                this.placeRight(l3, u2);
                break;
              case "bottom":
              default:
                this.placeBottom(l3, u2);
            }
            u2 && u2.delay ? this.showingTimeout = setTimeout(() => {
              this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
            }, u2.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
          }
          hide(l3 = false) {
            if (this.hidingDelay && !l3)
              return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
                this.hide(true);
              }, this.hidingDelay));
            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
          }
          onHover(l3, a6, c5) {
            l3.addEventListener("mouseenter", () => {
              this.show(l3, a6, c5);
            }), l3.addEventListener("mouseleave", () => {
              this.hide();
            });
          }
          destroy() {
            this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
          }
          prepare() {
            this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
          }
          loadStyles() {
            const l3 = "codex-tooltips-style";
            if (document.getElementById(l3))
              return;
            const a6 = i(2), c5 = this.make("style", null, { textContent: a6.toString(), id: l3 });
            this.prepend(document.head, c5);
          }
          placeBottom(l3, a6) {
            const c5 = l3.getBoundingClientRect(), u2 = c5.left + l3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h5 = c5.bottom + window.pageYOffset + this.offsetTop + a6.marginTop;
            this.applyPlacement("bottom", u2, h5);
          }
          placeTop(l3, a6) {
            const c5 = l3.getBoundingClientRect(), u2 = c5.left + l3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h5 = c5.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
            this.applyPlacement("top", u2, h5);
          }
          placeLeft(l3, a6) {
            const c5 = l3.getBoundingClientRect(), u2 = c5.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - a6.marginLeft, h5 = c5.top + window.pageYOffset + l3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("left", u2, h5);
          }
          placeRight(l3, a6) {
            const c5 = l3.getBoundingClientRect(), u2 = c5.right + this.offsetRight + a6.marginRight, h5 = c5.top + window.pageYOffset + l3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("right", u2, h5);
          }
          applyPlacement(l3, a6, c5) {
            this.nodes.wrapper.classList.add(this.CSS.placement[l3]), this.nodes.wrapper.style.left = a6 + "px", this.nodes.wrapper.style.top = c5 + "px";
          }
          make(l3, a6 = null, c5 = {}) {
            const u2 = document.createElement(l3);
            Array.isArray(a6) ? u2.classList.add(...a6) : a6 && u2.classList.add(a6);
            for (const h5 in c5)
              c5.hasOwnProperty(h5) && (u2[h5] = c5[h5]);
            return u2;
          }
          append(l3, a6) {
            Array.isArray(a6) ? a6.forEach((c5) => l3.appendChild(c5)) : l3.appendChild(a6);
          }
          prepend(l3, a6) {
            Array.isArray(a6) ? (a6 = a6.reverse()).forEach((c5) => l3.prepend(c5)) : l3.prepend(a6);
          }
        }
      }, function(t, o4) {
        t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
      }]).default;
    });
  })($t);
  var di = $t.exports;
  var hi = /* @__PURE__ */ Fe(di);
  var U = null;
  function nt() {
    U || (U = new hi());
  }
  function ui(n3, e, t) {
    nt(), U == null || U.show(n3, e, t);
  }
  function Ne(n3 = false) {
    nt(), U == null || U.hide(n3);
  }
  function Pe(n3, e, t) {
    nt(), U == null || U.onHover(n3, e, t);
  }
  function pi() {
    U == null || U.destroy(), U = null;
  }
  var fi = class extends y {
    /**
     * @class
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      });
    }
    /**
     * Available methods
     */
    get methods() {
      return {
        show: (e, t, o4) => this.show(e, t, o4),
        hide: () => this.hide(),
        onHover: (e, t, o4) => this.onHover(e, t, o4)
      };
    }
    /**
     * Method show tooltip on element with passed HTML content
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    show(e, t, o4) {
      ui(e, t, o4);
    }
    /**
     * Method hides tooltip on HTML page
     */
    hide() {
      Ne();
    }
    /**
     * Decorator for showing Tooltip by mouseenter/mouseleave
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    onHover(e, t, o4) {
      Pe(e, t, o4);
    }
  };
  var gi = class extends y {
    /**
     * Available methods / getters
     */
    get methods() {
      return {
        nodes: this.editorNodes
        /**
         * There can be added some UI methods, like toggleThinMode() etc
         */
      };
    }
    /**
     * Exported classes
     */
    get editorNodes() {
      return {
        /**
         * Top-level editor instance wrapper
         */
        wrapper: this.Editor.UI.nodes.wrapper,
        /**
         * Element that holds all the Blocks
         */
        redactor: this.Editor.UI.nodes.redactor
      };
    }
  };
  function Yt(n3, e) {
    const t = {};
    return Object.entries(n3).forEach(([o4, i]) => {
      if (R(i)) {
        const s6 = e ? `${e}.${o4}` : o4;
        Object.values(i).every((l3) => Q(l3)) ? t[o4] = s6 : t[o4] = Yt(i, s6);
        return;
      }
      t[o4] = i;
    }), t;
  }
  var K = Yt(_t);
  function mi(n3, e) {
    const t = {};
    return Object.keys(n3).forEach((o4) => {
      const i = e[o4];
      i !== void 0 ? t[i] = n3[o4] : t[o4] = n3[o4];
    }), t;
  }
  var Wt = class ve {
    /**
     * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
     * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
     */
    constructor(e, t) {
      this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
    }
    /**
     * Returns Focused button Node
     *
     * @returns {HTMLElement}
     */
    get currentItem() {
      return this.cursor === -1 ? null : this.items[this.cursor];
    }
    /**
     * Sets cursor to specified position
     *
     * @param cursorPosition - new cursor position
     */
    setCursor(e) {
      e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
    }
    /**
     * Sets items. Can be used when iterable items changed dynamically
     *
     * @param {HTMLElement[]} nodeList - nodes to iterate
     */
    setItems(e) {
      this.items = e;
    }
    /**
     * Sets cursor next to the current
     */
    next() {
      this.cursor = this.leafNodesAndReturnIndex(ve.directions.RIGHT);
    }
    /**
     * Sets cursor before current
     */
    previous() {
      this.cursor = this.leafNodesAndReturnIndex(ve.directions.LEFT);
    }
    /**
     * Sets cursor to the default position and removes CSS-class from previously focused item
     */
    dropCursor() {
      this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
    }
    /**
     * Leafs nodes inside the target list from active element
     *
     * @param {string} direction - leaf direction. Can be 'left' or 'right'
     * @returns {number} index of focused node
     */
    leafNodesAndReturnIndex(e) {
      if (this.items.length === 0)
        return this.cursor;
      let t = this.cursor;
      return t === -1 ? t = e === ve.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === ve.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, d.canSetCaret(this.items[t]) && Oe(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
    }
  };
  Wt.directions = {
    RIGHT: "right",
    LEFT: "left"
  };
  var me = Wt;
  var le = class _le {
    /**
     * @param options - different constructing settings
     */
    constructor(e) {
      this.iterator = null, this.activated = false, this.flipCallbacks = [], this.onKeyDown = (t) => {
        if (this.isEventReadyForHandling(t))
          switch (_le.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
            case w.TAB:
              this.handleTabPress(t);
              break;
            case w.LEFT:
            case w.UP:
              this.flipLeft();
              break;
            case w.RIGHT:
            case w.DOWN:
              this.flipRight();
              break;
            case w.ENTER:
              this.handleEnterPress(t);
              break;
          }
      }, this.iterator = new me(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || _le.usedKeys;
    }
    /**
     * True if flipper is currently activated
     */
    get isActivated() {
      return this.activated;
    }
    /**
     * Array of keys (codes) that is handled by Flipper
     * Used to:
     *  - preventDefault only for this keys, not all keydowns (@see constructor)
     *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
     */
    static get usedKeys() {
      return [
        w.TAB,
        w.LEFT,
        w.RIGHT,
        w.ENTER,
        w.UP,
        w.DOWN
      ];
    }
    /**
     * Active tab/arrows handling by flipper
     *
     * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
     * @param cursorPosition - index of the item that should be focused once flipper is activated
     */
    activate(e, t) {
      this.activated = true, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, true);
    }
    /**
     * Disable tab/arrows handling by flipper
     */
    deactivate() {
      this.activated = false, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
    }
    /**
     * Focus first item
     */
    focusFirst() {
      this.dropCursor(), this.flipRight();
    }
    /**
     * Focuses previous flipper iterator item
     */
    flipLeft() {
      this.iterator.previous(), this.flipCallback();
    }
    /**
     * Focuses next flipper iterator item
     */
    flipRight() {
      this.iterator.next(), this.flipCallback();
    }
    /**
     * Return true if some button is focused
     */
    hasFocus() {
      return !!this.iterator.currentItem;
    }
    /**
     * Registeres function that should be executed on each navigation action
     *
     * @param cb - function to execute
     */
    onFlip(e) {
      this.flipCallbacks.push(e);
    }
    /**
     * Unregisteres function that is executed on each navigation action
     *
     * @param cb - function to stop executing
     */
    removeOnFlip(e) {
      this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
    }
    /**
     * Drops flipper's iterator cursor
     *
     * @see DomIterator#dropCursor
     */
    dropCursor() {
      this.iterator.dropCursor();
    }
    /**
     * This function is fired before handling flipper keycodes
     * The result of this function defines if it is need to be handled or not
     *
     * @param {KeyboardEvent} event - keydown keyboard event
     * @returns {boolean}
     */
    isEventReadyForHandling(e) {
      return this.activated && this.allowedKeys.includes(e.keyCode);
    }
    /**
     * When flipper is activated tab press will leaf the items
     *
     * @param {KeyboardEvent} event - tab keydown event
     */
    handleTabPress(e) {
      switch (e.shiftKey ? me.directions.LEFT : me.directions.RIGHT) {
        case me.directions.RIGHT:
          this.flipRight();
          break;
        case me.directions.LEFT:
          this.flipLeft();
          break;
      }
    }
    /**
     * Enter press will click current item if flipper is activated
     *
     * @param {KeyboardEvent} event - enter keydown event
     */
    handleEnterPress(e) {
      this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), O(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
    }
    /**
     * Fired after flipping in any direction
     */
    flipCallback() {
      this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
    }
  };
  var bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>';
  var ki = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>';
  var vi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>';
  var wi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>';
  var xi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>';
  var yi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>';
  var Ei = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>';
  var Bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>';
  var yt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>';
  var Ti = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>';
  var Ci = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>';
  var Kt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>';
  var Si = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var Ii = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var Mi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
  var Ai = "__";
  var Oi = "--";
  function te(n3) {
    return (e, t) => [[n3, e].filter((i) => !!i).join(Ai), t].filter((i) => !!i).join(Oi);
  }
  var be = te("ce-hint");
  var ke = {
    root: be(),
    alignedStart: be(null, "align-left"),
    alignedCenter: be(null, "align-center"),
    title: be("title"),
    description: be("description")
  };
  var Li = class {
    /**
     * Constructs the hint content instance
     *
     * @param params - hint content parameters
     */
    constructor(e) {
      this.nodes = {
        root: d.make("div", [ke.root, e.alignment === "center" ? ke.alignedCenter : ke.alignedStart]),
        title: d.make("div", ke.title, { textContent: e.title })
      }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = d.make("div", ke.description, { textContent: e.description }), this.nodes.root.appendChild(this.nodes.description));
    }
    /**
     * Returns the root element of the hint content
     */
    getElement() {
      return this.nodes.root;
    }
  };
  var rt = class {
    /**
     * Constructs the instance
     *
     * @param params - instance parameters
     */
    constructor(e) {
      this.params = e;
    }
    /**
     * Item name if exists
     */
    get name() {
      if (this.params !== void 0 && "name" in this.params)
        return this.params.name;
    }
    /**
     * Destroys the instance
     */
    destroy() {
      Ne();
    }
    /**
     * Called when children popover is opened (if exists)
     */
    onChildrenOpen() {
      var e;
      this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
    }
    /**
     * Called when children popover is closed (if exists)
     */
    onChildrenClose() {
      var e;
      this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
    }
    /**
     * Called on popover item click
     */
    handleClick() {
      var e, t;
      this.params !== void 0 && "onActivate" in this.params && ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
    }
    /**
     * Adds hint to the item element if hint data is provided
     *
     * @param itemElement - popover item root element to add hint to
     * @param hintData - hint data
     */
    addHint(e, t) {
      const o4 = new Li(t);
      Pe(e, o4.getElement(), {
        placement: t.position,
        hidingDelay: 100
      });
    }
    /**
     * Returns item children that are represented as popover items
     */
    get children() {
      var e;
      return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
    }
    /**
     * Returns true if item has any type of children
     */
    get hasChildren() {
      return this.children.length > 0;
    }
    /**
     * Returns true if item children should be open instantly after popover is opened and not on item click/hover
     */
    get isChildrenOpen() {
      var e;
      return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === true;
    }
    /**
     * True if item children items should be navigatable via keyboard
     */
    get isChildrenFlippable() {
      var e;
      return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === false);
    }
    /**
     * Returns true if item has children that should be searchable
     */
    get isChildrenSearchable() {
      var e;
      return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.searchable) === true;
    }
    /**
     * True if popover should close once item is activated
     */
    get closeOnActivate() {
      return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
    }
    /**
     * True if item is active
     */
    get isActive() {
      return this.params === void 0 || !("isActive" in this.params) ? false : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === true;
    }
  };
  var W = te("ce-popover-item");
  var L = {
    container: W(),
    active: W(null, "active"),
    disabled: W(null, "disabled"),
    focused: W(null, "focused"),
    hidden: W(null, "hidden"),
    confirmationState: W(null, "confirmation"),
    noHover: W(null, "no-hover"),
    noFocus: W(null, "no-focus"),
    title: W("title"),
    secondaryTitle: W("secondary-title"),
    icon: W("icon"),
    iconTool: W("icon", "tool"),
    iconChevronRight: W("icon", "chevron-right"),
    wobbleAnimation: te("wobble")()
  };
  var se = class extends rt {
    /**
     * Constructs popover item instance
     *
     * @param params - popover item construction params
     * @param renderParams - popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t) {
      super(e), this.params = e, this.nodes = {
        root: null,
        icon: null
      }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
        var o4;
        (o4 = this.nodes.root) == null || o4.classList.remove(L.noFocus);
      }, this.removeSpecialHoverBehavior = () => {
        var o4;
        (o4 = this.nodes.root) == null || o4.classList.remove(L.noHover);
      }, this.onErrorAnimationEnd = () => {
        var o4, i;
        (o4 = this.nodes.icon) == null || o4.classList.remove(L.wobbleAnimation), (i = this.nodes.icon) == null || i.removeEventListener("animationend", this.onErrorAnimationEnd);
      }, this.nodes.root = this.make(e, t);
    }
    /**
     * True if item is disabled and hence not clickable
     */
    get isDisabled() {
      return this.params.isDisabled === true;
    }
    /**
     * Exposes popover item toggle parameter
     */
    get toggle() {
      return this.params.toggle;
    }
    /**
     * Item title
     */
    get title() {
      return this.params.title;
    }
    /**
     * True if confirmation state is enabled for popover item
     */
    get isConfirmationStateEnabled() {
      return this.confirmationState !== null;
    }
    /**
     * True if item is focused in keyboard navigation process
     */
    get isFocused() {
      return this.nodes.root === null ? false : this.nodes.root.classList.contains(L.focused);
    }
    /**
     * Returns popover item root element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Called on popover item click
     */
    handleClick() {
      if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
        this.activateOrEnableConfirmationMode(this.confirmationState);
        return;
      }
      this.activateOrEnableConfirmationMode(this.params);
    }
    /**
     * Toggles item active state
     *
     * @param isActive - true if item should strictly should become active
     */
    toggleActive(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(L.active, e);
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(L.hidden, e);
    }
    /**
     * Resets popover item to its original state
     */
    reset() {
      this.isConfirmationStateEnabled && this.disableConfirmationMode();
    }
    /**
     * Method called once item becomes focused during keyboard navigation
     */
    onFocus() {
      this.disableSpecialHoverAndFocusBehavior();
    }
    /**
     * Constructs HTML element corresponding to popover item params
     *
     * @param params - item construction params
     * @param renderParams - popover item render params
     */
    make(e, t) {
      var s6, r3;
      const o4 = (t == null ? void 0 : t.wrapperTag) || "div", i = d.make(o4, L.container, {
        type: o4 === "button" ? "button" : void 0
      });
      return e.name && (i.dataset.itemName = e.name), this.nodes.icon = d.make("div", [L.icon, L.iconTool], {
        innerHTML: e.icon || Ei
      }), i.appendChild(this.nodes.icon), e.title !== void 0 && i.appendChild(d.make("div", L.title, {
        innerHTML: e.title || ""
      })), e.secondaryLabel && i.appendChild(d.make("div", L.secondaryTitle, {
        textContent: e.secondaryLabel
      })), this.hasChildren && i.appendChild(d.make("div", [L.icon, L.iconChevronRight], {
        innerHTML: wi
      })), this.isActive && i.classList.add(L.active), e.isDisabled && i.classList.add(L.disabled), e.hint !== void 0 && ((s6 = t == null ? void 0 : t.hint) == null ? void 0 : s6.enabled) !== false && this.addHint(i, {
        ...e.hint,
        position: ((r3 = t == null ? void 0 : t.hint) == null ? void 0 : r3.position) || "right"
      }), i;
    }
    /**
     * Activates confirmation mode for the item.
     *
     * @param newState - new popover item params that should be applied
     */
    enableConfirmationMode(e) {
      if (this.nodes.root === null)
        return;
      const t = {
        ...this.params,
        ...e,
        confirmation: "confirmation" in e ? e.confirmation : void 0
      }, o4 = this.make(t);
      this.nodes.root.innerHTML = o4.innerHTML, this.nodes.root.classList.add(L.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
    }
    /**
     * Returns item to its original state
     */
    disableConfirmationMode() {
      if (this.nodes.root === null)
        return;
      const e = this.make(this.params);
      this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(L.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
    }
    /**
     * Enables special focus and hover behavior for item in confirmation state.
     * This is needed to prevent item from being highlighted as hovered/focused just after click.
     */
    enableSpecialHoverAndFocusBehavior() {
      var e, t, o4;
      (e = this.nodes.root) == null || e.classList.add(L.noHover), (t = this.nodes.root) == null || t.classList.add(L.noFocus), (o4 = this.nodes.root) == null || o4.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: true });
    }
    /**
     * Disables special focus and hover behavior
     */
    disableSpecialHoverAndFocusBehavior() {
      var e;
      this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
    }
    /**
     * Executes item's onActivate callback if the item has no confirmation configured
     *
     * @param item - item to activate or bring to confirmation mode
     */
    activateOrEnableConfirmationMode(e) {
      var t;
      if (!("confirmation" in e) || e.confirmation === void 0)
        try {
          (t = e.onActivate) == null || t.call(e, e), this.disableConfirmationMode();
        } catch {
          this.animateError();
        }
      else
        this.enableConfirmationMode(e.confirmation);
    }
    /**
     * Animates item which symbolizes that error occured while executing 'onActivate()' callback
     */
    animateError() {
      var e, t, o4;
      (e = this.nodes.icon) != null && e.classList.contains(L.wobbleAnimation) || ((t = this.nodes.icon) == null || t.classList.add(L.wobbleAnimation), (o4 = this.nodes.icon) == null || o4.addEventListener("animationend", this.onErrorAnimationEnd));
    }
  };
  var Ue = te("ce-popover-item-separator");
  var je = {
    container: Ue(),
    line: Ue("line"),
    hidden: Ue(null, "hidden")
  };
  var Xt = class extends rt {
    /**
     * Constructs the instance
     */
    constructor() {
      super(), this.nodes = {
        root: d.make("div", je.container),
        line: d.make("div", je.line)
      }, this.nodes.root.appendChild(this.nodes.line);
    }
    /**
     * Returns popover separator root element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(je.hidden, e);
    }
  };
  var Z = /* @__PURE__ */ ((n3) => (n3.Closed = "closed", n3.ClosedOnActivate = "closed-on-activate", n3))(Z || {});
  var H = te("ce-popover");
  var N = {
    popover: H(),
    popoverContainer: H("container"),
    popoverOpenTop: H(null, "open-top"),
    popoverOpenLeft: H(null, "open-left"),
    popoverOpened: H(null, "opened"),
    search: H("search"),
    nothingFoundMessage: H("nothing-found-message"),
    nothingFoundMessageDisplayed: H("nothing-found-message", "displayed"),
    items: H("items"),
    overlay: H("overlay"),
    overlayHidden: H("overlay", "hidden"),
    popoverNested: H(null, "nested"),
    getPopoverNestedClass: (n3) => H(null, `nested-level-${n3.toString()}`),
    popoverInline: H(null, "inline"),
    popoverHeader: H("header")
  };
  var de = /* @__PURE__ */ ((n3) => (n3.NestingLevel = "--nesting-level", n3.PopoverHeight = "--popover-height", n3.InlinePopoverWidth = "--inline-popover-width", n3.TriggerItemLeft = "--trigger-item-left", n3.TriggerItemTop = "--trigger-item-top", n3))(de || {});
  var Et = te("ce-popover-item-html");
  var Bt = {
    root: Et(),
    hidden: Et(null, "hidden")
  };
  var Ee = class extends rt {
    /**
     * Constructs the instance
     *
     * @param params – instance parameters
     * @param renderParams – popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t) {
      var o4, i;
      super(e), this.nodes = {
        root: d.make("div", Bt.root)
      }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((o4 = t == null ? void 0 : t.hint) == null ? void 0 : o4.enabled) !== false && this.addHint(this.nodes.root, {
        ...e.hint,
        position: ((i = t == null ? void 0 : t.hint) == null ? void 0 : i.position) || "right"
      });
    }
    /**
     * Returns popover item root element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(Bt.hidden, e);
    }
    /**
     * Returns list of buttons and inputs inside custom content
     */
    getControls() {
      const e = this.nodes.root.querySelectorAll(
        `button, ${d.allInputsSelector}`
      );
      return Array.from(e);
    }
  };
  var Vt = class extends Te {
    /**
     * Constructs the instance
     *
     * @param params - popover construction params
     * @param itemsRenderParams - popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t = {}) {
      super(), this.params = e, this.itemsRenderParams = t, this.listeners = new Ce(), this.messages = {
        nothingFound: "Nothing found",
        search: "Search"
      }, this.items = this.buildItems(e.items), e.messages && (this.messages = {
        ...this.messages,
        ...e.messages
      }), this.nodes = {}, this.nodes.popoverContainer = d.make("div", [N.popoverContainer]), this.nodes.nothingFoundMessage = d.make("div", [N.nothingFoundMessage], {
        textContent: this.messages.nothingFound
      }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [N.items]), this.items.forEach((o4) => {
        const i = o4.getElement();
        i !== null && this.nodes.items.appendChild(i);
      }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (o4) => this.handleClick(o4)), this.nodes.popover = d.make("div", [
        N.popover,
        this.params.class
      ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
    }
    /**
     * List of default popover items that are searchable and may have confirmation state
     */
    get itemsDefault() {
      return this.items.filter((e) => e instanceof se);
    }
    /**
     * Returns HTML element corresponding to the popover
     */
    getElement() {
      return this.nodes.popover;
    }
    /**
     * Open popover
     */
    show() {
      this.nodes.popover.classList.add(N.popoverOpened), this.search !== void 0 && this.search.focus();
    }
    /**
     * Closes popover
     */
    hide() {
      this.nodes.popover.classList.remove(N.popoverOpened), this.nodes.popover.classList.remove(N.popoverOpenTop), this.itemsDefault.forEach((e) => e.reset()), this.search !== void 0 && this.search.clear(), this.emit(Z.Closed);
    }
    /**
     * Clears memory
     */
    destroy() {
      var e;
      this.items.forEach((t) => t.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e = this.search) == null || e.destroy();
    }
    /**
     * Looks for the item by name and imitates click on it
     *
     * @param name - name of the item to activate
     */
    activateItemByName(e) {
      const t = this.items.find((o4) => o4.name === e);
      this.handleItemClick(t);
    }
    /**
     * Factory method for creating popover items
     *
     * @param items - list of items params
     */
    buildItems(e) {
      return e.map((t) => {
        switch (t.type) {
          case A.Separator:
            return new Xt();
          case A.Html:
            return new Ee(t, this.itemsRenderParams[A.Html]);
          default:
            return new se(t, this.itemsRenderParams[A.Default]);
        }
      });
    }
    /**
     * Retrieves popover item that is the target of the specified event
     *
     * @param event - event to retrieve popover item from
     */
    getTargetItem(e) {
      return this.items.filter((t) => t instanceof se || t instanceof Ee).find((t) => {
        const o4 = t.getElement();
        return o4 === null ? false : e.composedPath().includes(o4);
      });
    }
    /**
     * Handles popover item click
     *
     * @param item - item to handle click of
     */
    handleItemClick(e) {
      if (!("isDisabled" in e && e.isDisabled)) {
        if (e.hasChildren) {
          this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
          return;
        }
        this.itemsDefault.filter((t) => t !== e).forEach((t) => t.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(Z.ClosedOnActivate));
      }
    }
    /**
     * Handles clicks inside popover
     *
     * @param event - item to handle click of
     */
    handleClick(e) {
      const t = this.getTargetItem(e);
      t !== void 0 && this.handleItemClick(t);
    }
    /**
     * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
     *
     * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
     * (All the other items with the same key get inactive, and the item gets active)
     *
     * @param clickedItem - popover item that was clicked
     */
    toggleItemActivenessIfNeeded(e) {
      if (e instanceof se && (e.toggle === true && e.toggleActive(), typeof e.toggle == "string")) {
        const t = this.itemsDefault.filter((o4) => o4.toggle === e.toggle);
        if (t.length === 1) {
          e.toggleActive();
          return;
        }
        t.forEach((o4) => {
          o4.toggleActive(o4 === e);
        });
      }
    }
  };
  var De = /* @__PURE__ */ ((n3) => (n3.Search = "search", n3))(De || {});
  var $e = te("cdx-search-field");
  var Ye = {
    wrapper: $e(),
    icon: $e("icon"),
    input: $e("input")
  };
  var _i = class extends Te {
    /**
     * @param options - available config
     * @param options.items - searchable items list
     * @param options.placeholder - input placeholder
     */
    constructor({ items: e, placeholder: t }) {
      super(), this.listeners = new Ce(), this.items = e, this.wrapper = d.make("div", Ye.wrapper);
      const o4 = d.make("div", Ye.icon, {
        innerHTML: Si
      });
      this.input = d.make("input", Ye.input, {
        placeholder: t,
        /**
         * Used to prevent focusing on the input by Tab key
         * (Popover in the Toolbar lays below the blocks,
         * so Tab in the last block will focus this hidden input if this property is not set)
         */
        tabIndex: -1
      }), this.wrapper.appendChild(o4), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
        this.searchQuery = this.input.value, this.emit(De.Search, {
          query: this.searchQuery,
          items: this.foundItems
        });
      });
    }
    /**
     * Returns search field element
     */
    getElement() {
      return this.wrapper;
    }
    /**
     * Sets focus to the input
     */
    focus() {
      this.input.focus();
    }
    /**
     * Clears search query and results
     */
    clear() {
      this.input.value = "", this.searchQuery = "", this.emit(De.Search, {
        query: "",
        items: this.foundItems
      });
    }
    /**
     * Clears memory
     */
    destroy() {
      this.listeners.removeAll();
    }
    /**
     * Returns list of found items for the current search query
     */
    get foundItems() {
      return this.items.filter((e) => this.checkItem(e));
    }
    /**
     * Contains logic for checking whether passed item conforms the search query
     *
     * @param item - item to be checked
     */
    checkItem(e) {
      var i, s6;
      const t = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o4 = (s6 = this.searchQuery) == null ? void 0 : s6.toLowerCase();
      return o4 !== void 0 ? t.includes(o4) : false;
    }
  };
  var Ni = Object.defineProperty;
  var Pi = Object.getOwnPropertyDescriptor;
  var Di = (n3, e, t, o4) => {
    for (var i = o4 > 1 ? void 0 : o4 ? Pi(e, t) : e, s6 = n3.length - 1, r3; s6 >= 0; s6--)
      (r3 = n3[s6]) && (i = (o4 ? r3(e, t, i) : r3(i)) || i);
    return o4 && i && Ni(e, t, i), i;
  };
  var qt = class Zt extends Vt {
    /**
     * Construct the instance
     *
     * @param params - popover params
     * @param itemsRenderParams – popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t) {
      super(e, t), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
        var o4;
        super.hide(), this.destroyNestedPopoverIfExists(), (o4 = this.flipper) == null || o4.deactivate(), this.previouslyHoveredItem = null;
      }, this.onFlip = () => {
        const o4 = this.itemsDefault.find((i) => i.isFocused);
        o4 == null || o4.onFocus();
      }, this.onSearch = (o4) => {
        var l3;
        const i = o4.query === "", s6 = o4.items.length === 0;
        this.items.forEach((a6) => {
          let c5 = false;
          a6 instanceof se ? c5 = !o4.items.includes(a6) : (a6 instanceof Xt || a6 instanceof Ee) && (c5 = s6 || !i), a6.toggleHidden(c5);
        }), this.toggleNothingFoundMessage(s6);
        const r3 = o4.query === "" ? this.flippableElements : o4.items.map((a6) => a6.getElement());
        (l3 = this.flipper) != null && l3.isActivated && (this.flipper.deactivate(), this.flipper.activate(r3));
      }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(N.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (o4) => this.handleHover(o4)), e.searchable && this.addSearch(), e.flippable !== false && (this.flipper = new le({
        items: this.flippableElements,
        focusedItemClass: L.focused,
        allowedKeys: [
          w.TAB,
          w.UP,
          w.DOWN,
          w.ENTER
        ]
      }), this.flipper.onFlip(this.onFlip));
    }
    /**
     * Returns true if some item inside popover is focused
     */
    hasFocus() {
      return this.flipper === void 0 ? false : this.flipper.hasFocus();
    }
    /**
     * Scroll position inside items container of the popover
     */
    get scrollTop() {
      return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
    }
    /**
     * Returns visible element offset top
     */
    get offsetTop() {
      return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
    }
    /**
     * Open popover
     */
    show() {
      var e;
      this.nodes.popover.style.setProperty(de.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(N.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(N.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
    }
    /**
     * Clears memory
     */
    destroy() {
      this.hide(), super.destroy();
    }
    /**
     * Handles displaying nested items for the item.
     *
     * @param item – item to show nested popover for
     */
    showNestedItems(e) {
      this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
    }
    /**
     * Handles hover events inside popover items container
     *
     * @param event - hover event data
     */
    handleHover(e) {
      const t = this.getTargetItem(e);
      t !== void 0 && this.previouslyHoveredItem !== t && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t, t.hasChildren && this.showNestedPopoverForItem(t));
    }
    /**
     * Sets CSS variable with position of item near which nested popover should be displayed.
     * Is used for correct positioning of the nested popover
     *
     * @param nestedPopoverEl - nested popover element
     * @param item – item near which nested popover should be displayed
     */
    setTriggerItemPosition(e, t) {
      const o4 = t.getElement(), i = (o4 ? o4.offsetTop : 0) - this.scrollTop, s6 = this.offsetTop + i;
      e.style.setProperty(de.TriggerItemTop, s6 + "px");
    }
    /**
     * Destroys existing nested popover
     */
    destroyNestedPopoverIfExists() {
      var e, t;
      this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(Z.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
    }
    /**
     * Creates and displays nested popover for specified item.
     * Is used only on desktop
     *
     * @param item - item to display nested popover by
     */
    showNestedPopoverForItem(e) {
      var o4;
      this.nestedPopover = new Zt({
        searchable: e.isChildrenSearchable,
        items: e.children,
        nestingLevel: this.nestingLevel + 1,
        flippable: e.isChildrenFlippable,
        messages: this.messages
      }), e.onChildrenOpen(), this.nestedPopover.on(Z.ClosedOnActivate, this.hide);
      const t = this.nestedPopover.getElement();
      return this.nodes.popover.appendChild(t), this.setTriggerItemPosition(t, e), t.style.setProperty(de.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o4 = this.flipper) == null || o4.deactivate(), this.nestedPopover;
    }
    /**
     * Checks if popover should be opened bottom.
     * It should happen when there is enough space below or not enough space above
     */
    get shouldOpenBottom() {
      if (this.nodes.popover === void 0 || this.nodes.popover === null)
        return false;
      const e = this.nodes.popoverContainer.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o4 = this.size.height, i = e.top + o4, s6 = e.top - o4, r3 = Math.min(window.innerHeight, t.bottom);
      return s6 < t.top || i <= r3;
    }
    /**
     * Checks if popover should be opened left.
     * It should happen when there is enough space in the right or not enough space in the left
     */
    get shouldOpenRight() {
      if (this.nodes.popover === void 0 || this.nodes.popover === null)
        return false;
      const e = this.nodes.popover.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o4 = this.size.width, i = e.right + o4, s6 = e.left - o4, r3 = Math.min(window.innerWidth, t.right);
      return s6 < t.left || i <= r3;
    }
    get size() {
      var i;
      const e = {
        height: 0,
        width: 0
      };
      if (this.nodes.popover === null)
        return e;
      const t = this.nodes.popover.cloneNode(true);
      t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000px", t.classList.add(N.popoverOpened), (i = t.querySelector("." + N.popoverNested)) == null || i.remove(), document.body.appendChild(t);
      const o4 = t.querySelector("." + N.popoverContainer);
      return e.height = o4.offsetHeight, e.width = o4.offsetWidth, t.remove(), e;
    }
    /**
     * Returns list of elements available for keyboard navigation.
     */
    get flippableElements() {
      return this.items.map((t) => {
        if (t instanceof se)
          return t.getElement();
        if (t instanceof Ee)
          return t.getControls();
      }).flat().filter((t) => t != null);
    }
    /**
     * Adds search to the popover
     */
    addSearch() {
      this.search = new _i({
        items: this.itemsDefault,
        placeholder: this.messages.search
      }), this.search.on(De.Search, this.onSearch);
      const e = this.search.getElement();
      e.classList.add(N.search), this.nodes.popoverContainer.insertBefore(e, this.nodes.popoverContainer.firstChild);
    }
    /**
     * Toggles nothing found message visibility
     *
     * @param isDisplayed - true if the message should be displayed
     */
    toggleNothingFoundMessage(e) {
      this.nodes.nothingFoundMessage.classList.toggle(N.nothingFoundMessageDisplayed, e);
    }
  };
  Di([
    ue
  ], qt.prototype, "size", 1);
  var lt = qt;
  var Ri = class extends lt {
    /**
     * Constructs the instance
     *
     * @param params - instance parameters
     */
    constructor(e) {
      const t = !pe();
      super(
        {
          ...e,
          class: N.popoverInline
        },
        {
          [A.Default]: {
            /**
             * We use button instead of div here to fix bug associated with focus loss (which leads to selection change) on click in safari
             *
             * @todo figure out better way to solve the issue
             */
            wrapperTag: "button",
            hint: {
              position: "top",
              alignment: "center",
              enabled: t
            }
          },
          [A.Html]: {
            hint: {
              position: "top",
              alignment: "center",
              enabled: t
            }
          }
        }
      ), this.items.forEach((o4) => {
        !(o4 instanceof se) && !(o4 instanceof Ee) || o4.hasChildren && o4.isChildrenOpen && this.showNestedItems(o4);
      });
    }
    /**
     * Returns visible element offset top
     */
    get offsetLeft() {
      return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetLeft;
    }
    /**
     * Open popover
     */
    show() {
      this.nestingLevel === 0 && this.nodes.popover.style.setProperty(
        de.InlinePopoverWidth,
        this.size.width + "px"
      ), super.show();
    }
    /**
     * Disable hover event handling.
     * Overrides parent's class behavior
     */
    handleHover() {
    }
    /**
     * Sets CSS variable with position of item near which nested popover should be displayed.
     * Is used to position nested popover right below clicked item
     *
     * @param nestedPopoverEl - nested popover element
     * @param item – item near which nested popover should be displayed
     */
    setTriggerItemPosition(e, t) {
      const o4 = t.getElement(), i = o4 ? o4.offsetLeft : 0, s6 = this.offsetLeft + i;
      e.style.setProperty(
        de.TriggerItemLeft,
        s6 + "px"
      );
    }
    /**
     * Handles displaying nested items for the item.
     * Overriding in order to add toggling behaviour
     *
     * @param item – item to toggle nested popover for
     */
    showNestedItems(e) {
      if (this.nestedPopoverTriggerItem === e) {
        this.destroyNestedPopoverIfExists(), this.nestedPopoverTriggerItem = null;
        return;
      }
      super.showNestedItems(e);
    }
    /**
     * Creates and displays nested popover for specified item.
     * Is used only on desktop
     *
     * @param item - item to display nested popover by
     */
    showNestedPopoverForItem(e) {
      const t = super.showNestedPopoverForItem(e);
      return t.getElement().classList.add(N.getPopoverNestedClass(t.nestingLevel)), t;
    }
    /**
     * Overrides default item click handling.
     * Helps to close nested popover once other item is clicked.
     *
     * @param item - clicked item
     */
    handleItemClick(e) {
      var t;
      e !== this.nestedPopoverTriggerItem && ((t = this.nestedPopoverTriggerItem) == null || t.handleClick(), super.destroyNestedPopoverIfExists()), super.handleItemClick(e);
    }
  };
  var Gt = class we {
    constructor() {
      this.scrollPosition = null;
    }
    /**
     * Locks body element scroll
     */
    lock() {
      Ge ? this.lockHard() : document.body.classList.add(we.CSS.scrollLocked);
    }
    /**
     * Unlocks body element scroll
     */
    unlock() {
      Ge ? this.unlockHard() : document.body.classList.remove(we.CSS.scrollLocked);
    }
    /**
     * Locks scroll in a hard way (via setting fixed position to body element)
     */
    lockHard() {
      this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
        "--window-scroll-offset",
        `${this.scrollPosition}px`
      ), document.body.classList.add(we.CSS.scrollLockedHard);
    }
    /**
     * Unlocks hard scroll lock
     */
    unlockHard() {
      document.body.classList.remove(we.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
    }
  };
  Gt.CSS = {
    scrollLocked: "ce-scroll-locked",
    scrollLockedHard: "ce-scroll-locked--hard"
  };
  var Fi = Gt;
  var We = te("ce-popover-header");
  var Ke = {
    root: We(),
    text: We("text"),
    backButton: We("back-button")
  };
  var Hi = class {
    /**
     * Constructs the instance
     *
     * @param params - popover header params
     */
    constructor({ text: e, onBackButtonClick: t }) {
      this.listeners = new Ce(), this.text = e, this.onBackButtonClick = t, this.nodes = {
        root: d.make("div", [Ke.root]),
        backButton: d.make("button", [Ke.backButton]),
        text: d.make("div", [Ke.text])
      }, this.nodes.backButton.innerHTML = vi, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
    }
    /**
     * Returns popover header root html element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Destroys the instance
     */
    destroy() {
      this.nodes.root.remove(), this.listeners.destroy();
    }
  };
  var zi = class {
    constructor() {
      this.history = [];
    }
    /**
     * Push new popover state
     *
     * @param state - new state
     */
    push(e) {
      this.history.push(e);
    }
    /**
     * Pop last popover state
     */
    pop() {
      return this.history.pop();
    }
    /**
     * Title retrieved from the current state
     */
    get currentTitle() {
      return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
    }
    /**
     * Items list retrieved from the current state
     */
    get currentItems() {
      return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
    }
    /**
     * Returns history to initial popover state
     */
    reset() {
      for (; this.history.length > 1; )
        this.pop();
    }
  };
  var Jt = class extends Vt {
    /**
     * Construct the instance
     *
     * @param params - popover params
     */
    constructor(e) {
      super(e, {
        [A.Default]: {
          hint: {
            enabled: false
          }
        },
        [A.Html]: {
          hint: {
            enabled: false
          }
        }
      }), this.scrollLocker = new Fi(), this.history = new zi(), this.isHidden = true, this.nodes.overlay = d.make("div", [N.overlay, N.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
        this.hide();
      }), this.history.push({ items: e.items });
    }
    /**
     * Open popover
     */
    show() {
      this.nodes.overlay.classList.remove(N.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = false;
    }
    /**
     * Closes popover
     */
    hide() {
      this.isHidden || (super.hide(), this.nodes.overlay.classList.add(N.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = true);
    }
    /**
     * Clears memory
     */
    destroy() {
      super.destroy(), this.scrollLocker.unlock();
    }
    /**
     * Handles displaying nested items for the item
     *
     * @param item – item to show nested popover for
     */
    showNestedItems(e) {
      this.updateItemsAndHeader(e.children, e.title), this.history.push({
        title: e.title,
        items: e.children
      });
    }
    /**
     * Removes rendered popover items and header and displays new ones
     *
     * @param items - new popover items
     * @param title - new popover header text
     */
    updateItemsAndHeader(e, t) {
      if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t !== void 0) {
        this.header = new Hi({
          text: t,
          onBackButtonClick: () => {
            this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
          }
        });
        const o4 = this.header.getElement();
        o4 !== null && this.nodes.popoverContainer.insertBefore(o4, this.nodes.popoverContainer.firstChild);
      }
      this.items.forEach((o4) => {
        var i;
        return (i = o4.getElement()) == null ? void 0 : i.remove();
      }), this.items = this.buildItems(e), this.items.forEach((o4) => {
        var s6;
        const i = o4.getElement();
        i !== null && ((s6 = this.nodes.items) == null || s6.appendChild(i));
      });
    }
  };
  var Ui = class extends y {
    constructor() {
      super(...arguments), this.opened = false, this.selection = new b(), this.popover = null, this.close = () => {
        this.opened && (this.opened = false, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(Z.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
      }, this.onPopoverClose = () => {
        this.close();
      };
    }
    /**
     * Module Events
     */
    get events() {
      return {
        opened: "block-settings-opened",
        closed: "block-settings-closed"
      };
    }
    /**
     * Block Settings CSS
     */
    get CSS() {
      return {
        settings: "ce-settings"
      };
    }
    /**
     * Getter for inner popover's flipper instance
     *
     * @todo remove once BlockSettings becomes standalone non-module class
     */
    get flipper() {
      var e;
      if (this.popover !== null)
        return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
    }
    /**
     * Panel with block settings with 2 sections:
     *  - Tool's Settings
     *  - Default Settings [Move, Remove, etc]
     */
    make() {
      this.nodes.wrapper = d.make("div", [this.CSS.settings]), this.eventsDispatcher.on(ye, this.close);
    }
    /**
     * Destroys module
     */
    destroy() {
      this.removeAllNodes(), this.listeners.destroy(), this.eventsDispatcher.off(ye, this.close);
    }
    /**
     * Open Block Settings pane
     *
     * @param targetBlock - near which Block we should open BlockSettings
     */
    async open(e = this.Editor.BlockManager.currentBlock) {
      var s6;
      this.opened = true, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
      const { toolTunes: t, commonTunes: o4 } = e.getTunes();
      this.eventsDispatcher.emit(this.events.opened);
      const i = pe() ? Jt : lt;
      this.popover = new i({
        searchable: true,
        items: await this.getTunesItems(e, o4, t),
        scopeElement: this.Editor.API.methods.ui.nodes.redactor,
        messages: {
          nothingFound: z.ui(K.ui.popover, "Nothing found"),
          search: z.ui(K.ui.popover, "Filter")
        }
      }), this.popover.on(Z.Closed, this.onPopoverClose), (s6 = this.nodes.wrapper) == null || s6.append(this.popover.getElement()), this.popover.show();
    }
    /**
     * Returns root block settings element
     */
    getElement() {
      return this.nodes.wrapper;
    }
    /**
     * Returns list of items to be displayed in block tunes menu.
     * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
     *
     * @param currentBlock –  block we are about to open block tunes for
     * @param commonTunes – common tunes
     * @param toolTunes - tool specific tunes
     */
    async getTunesItems(e, t, o4) {
      const i = [];
      o4 !== void 0 && o4.length > 0 && (i.push(...o4), i.push({
        type: A.Separator
      }));
      const s6 = Array.from(this.Editor.Tools.blockTools.values()), l3 = (await zt(e, s6)).reduce((a6, c5) => (c5.toolbox.forEach((u2) => {
        a6.push({
          icon: u2.icon,
          title: z.t(K.toolNames, u2.title),
          name: c5.name,
          closeOnActivate: true,
          onActivate: async () => {
            const { BlockManager: h5, Caret: p2, Toolbar: g4 } = this.Editor, f3 = await h5.convert(e, c5.name, u2.data);
            g4.close(), p2.setToBlock(f3, p2.positions.END);
          }
        });
      }), a6), []);
      return l3.length > 0 && (i.push({
        icon: Kt,
        name: "convert-to",
        title: z.ui(K.ui.popover, "Convert to"),
        children: {
          searchable: true,
          items: l3
        }
      }), i.push({
        type: A.Separator
      })), i.push(...t), i.map((a6) => this.resolveTuneAliases(a6));
    }
    /**
     * Resolves aliases in tunes menu items
     *
     * @param item - item with resolved aliases
     */
    resolveTuneAliases(e) {
      if (e.type === A.Separator || e.type === A.Html)
        return e;
      const t = mi(e, { label: "title" });
      return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
    }
  };
  var Qt = { exports: {} };
  (function(n3, e) {
    (function(t, o4) {
      n3.exports = o4();
    })(window, function() {
      return function(t) {
        var o4 = {};
        function i(s6) {
          if (o4[s6])
            return o4[s6].exports;
          var r3 = o4[s6] = { i: s6, l: false, exports: {} };
          return t[s6].call(r3.exports, r3, r3.exports, i), r3.l = true, r3.exports;
        }
        return i.m = t, i.c = o4, i.d = function(s6, r3, l3) {
          i.o(s6, r3) || Object.defineProperty(s6, r3, { enumerable: true, get: l3 });
        }, i.r = function(s6) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s6, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s6, "__esModule", { value: true });
        }, i.t = function(s6, r3) {
          if (1 & r3 && (s6 = i(s6)), 8 & r3 || 4 & r3 && typeof s6 == "object" && s6 && s6.__esModule)
            return s6;
          var l3 = /* @__PURE__ */ Object.create(null);
          if (i.r(l3), Object.defineProperty(l3, "default", { enumerable: true, value: s6 }), 2 & r3 && typeof s6 != "string")
            for (var a6 in s6)
              i.d(l3, a6, function(c5) {
                return s6[c5];
              }.bind(null, a6));
          return l3;
        }, i.n = function(s6) {
          var r3 = s6 && s6.__esModule ? function() {
            return s6.default;
          } : function() {
            return s6;
          };
          return i.d(r3, "a", r3), r3;
        }, i.o = function(s6, r3) {
          return Object.prototype.hasOwnProperty.call(s6, r3);
        }, i.p = "", i(i.s = 0);
      }([function(t, o4, i) {
        function s6(a6, c5) {
          for (var u2 = 0; u2 < c5.length; u2++) {
            var h5 = c5[u2];
            h5.enumerable = h5.enumerable || false, h5.configurable = true, "value" in h5 && (h5.writable = true), Object.defineProperty(a6, h5.key, h5);
          }
        }
        function r3(a6, c5, u2) {
          return c5 && s6(a6.prototype, c5), u2 && s6(a6, u2), a6;
        }
        i.r(o4);
        var l3 = function() {
          function a6(c5) {
            var u2 = this;
            (function(h5, p2) {
              if (!(h5 instanceof p2))
                throw new TypeError("Cannot call a class as a function");
            })(this, a6), this.commands = {}, this.keys = {}, this.name = c5.name, this.parseShortcutName(c5.name), this.element = c5.on, this.callback = c5.callback, this.executeShortcut = function(h5) {
              u2.execute(h5);
            }, this.element.addEventListener("keydown", this.executeShortcut, false);
          }
          return r3(a6, null, [{ key: "supportedCommands", get: function() {
            return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
          } }, { key: "keyCodes", get: function() {
            return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
          } }]), r3(a6, [{ key: "parseShortcutName", value: function(c5) {
            c5 = c5.split("+");
            for (var u2 = 0; u2 < c5.length; u2++) {
              c5[u2] = c5[u2].toUpperCase();
              var h5 = false;
              for (var p2 in a6.supportedCommands)
                if (a6.supportedCommands[p2].includes(c5[u2])) {
                  h5 = this.commands[p2] = true;
                  break;
                }
              h5 || (this.keys[c5[u2]] = true);
            }
            for (var g4 in a6.supportedCommands)
              this.commands[g4] || (this.commands[g4] = false);
          } }, { key: "execute", value: function(c5) {
            var u2, h5 = { CMD: c5.ctrlKey || c5.metaKey, SHIFT: c5.shiftKey, ALT: c5.altKey }, p2 = true;
            for (u2 in this.commands)
              this.commands[u2] !== h5[u2] && (p2 = false);
            var g4, f3 = true;
            for (g4 in this.keys)
              f3 = f3 && c5.keyCode === a6.keyCodes[g4];
            p2 && f3 && this.callback(c5);
          } }, { key: "remove", value: function() {
            this.element.removeEventListener("keydown", this.executeShortcut);
          } }]), a6;
        }();
        o4.default = l3;
      }]).default;
    });
  })(Qt);
  var ji = Qt.exports;
  var $i = /* @__PURE__ */ Fe(ji);
  var Yi = class {
    constructor() {
      this.registeredShortcuts = /* @__PURE__ */ new Map();
    }
    /**
     * Register shortcut
     *
     * @param shortcut - shortcut options
     */
    add(e) {
      if (this.findShortcut(e.on, e.name))
        throw Error(
          `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
        );
      const o4 = new $i({
        name: e.name,
        on: e.on,
        callback: e.handler
      }), i = this.registeredShortcuts.get(e.on) || [];
      this.registeredShortcuts.set(e.on, [...i, o4]);
    }
    /**
     * Remove shortcut
     *
     * @param element - Element shortcut is set for
     * @param name - shortcut name
     */
    remove(e, t) {
      const o4 = this.findShortcut(e, t);
      if (!o4)
        return;
      o4.remove();
      const i = this.registeredShortcuts.get(e);
      this.registeredShortcuts.set(e, i.filter((s6) => s6 !== o4));
    }
    /**
     * Get Shortcut instance if exist
     *
     * @param element - Element shorcut is set for
     * @param shortcut - shortcut name
     * @returns {number} index - shortcut index if exist
     */
    findShortcut(e, t) {
      return (this.registeredShortcuts.get(e) || []).find(({ name: i }) => i === t);
    }
  };
  var he = new Yi();
  var Wi = Object.defineProperty;
  var Ki = Object.getOwnPropertyDescriptor;
  var eo = (n3, e, t, o4) => {
    for (var i = o4 > 1 ? void 0 : o4 ? Ki(e, t) : e, s6 = n3.length - 1, r3; s6 >= 0; s6--)
      (r3 = n3[s6]) && (i = (o4 ? r3(e, t, i) : r3(i)) || i);
    return o4 && i && Wi(e, t, i), i;
  };
  var Se = /* @__PURE__ */ ((n3) => (n3.Opened = "toolbox-opened", n3.Closed = "toolbox-closed", n3.BlockAdded = "toolbox-block-added", n3))(Se || {});
  var at = class to extends Te {
    /**
     * Toolbox constructor
     *
     * @param options - available parameters
     * @param options.api - Editor API methods
     * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
     */
    constructor({ api: e, tools: t, i18nLabels: o4 }) {
      super(), this.opened = false, this.listeners = new Ce(), this.popover = null, this.handleMobileLayoutToggle = () => {
        this.destroyPopover(), this.initPopover();
      }, this.onPopoverClose = () => {
        this.opened = false, this.emit(
          "toolbox-closed"
          /* Closed */
        );
      }, this.api = e, this.tools = t, this.i18nLabels = o4, this.enableShortcuts(), this.nodes = {
        toolbox: d.make("div", to.CSS.toolbox)
      }, this.initPopover(), this.api.events.on(ye, this.handleMobileLayoutToggle);
    }
    /**
     * Returns True if Toolbox is Empty and nothing to show
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return this.toolsToBeDisplayed.length === 0;
    }
    /**
     * CSS styles
     */
    static get CSS() {
      return {
        toolbox: "ce-toolbox"
      };
    }
    /**
     * Returns root block settings element
     */
    getElement() {
      return this.nodes.toolbox;
    }
    /**
     * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
     */
    hasFocus() {
      if (this.popover !== null)
        return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
    }
    /**
     * Destroy Module
     */
    destroy() {
      var e;
      super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(Z.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(ye, this.handleMobileLayoutToggle);
    }
    /**
     * Toolbox Tool's button click handler
     *
     * @param toolName - tool type to be activated
     * @param blockDataOverrides - Block data predefined by the activated Toolbox item
     */
    toolButtonActivated(e, t) {
      this.insertNewBlock(e, t);
    }
    /**
     * Open Toolbox with Tools
     */
    open() {
      var e;
      this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = true, this.emit(
        "toolbox-opened"
        /* Opened */
      ));
    }
    /**
     * Close Toolbox
     */
    close() {
      var e;
      (e = this.popover) == null || e.hide(), this.opened = false, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }
    /**
     * Close Toolbox
     */
    toggle() {
      this.opened ? this.close() : this.open();
    }
    /**
     * Creates toolbox popover and appends it inside wrapper element
     */
    initPopover() {
      var t;
      const e = pe() ? Jt : lt;
      this.popover = new e({
        scopeElement: this.api.ui.nodes.redactor,
        searchable: true,
        messages: {
          nothingFound: this.i18nLabels.nothingFound,
          search: this.i18nLabels.filter
        },
        items: this.toolboxItemsToBeDisplayed
      }), this.popover.on(Z.Closed, this.onPopoverClose), (t = this.nodes.toolbox) == null || t.append(this.popover.getElement());
    }
    /**
     * Destroys popover instance and removes it from DOM
     */
    destroyPopover() {
      this.popover !== null && (this.popover.hide(), this.popover.off(Z.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
    }
    get toolsToBeDisplayed() {
      const e = [];
      return this.tools.forEach((t) => {
        t.toolbox && e.push(t);
      }), e;
    }
    get toolboxItemsToBeDisplayed() {
      const e = (t, o4) => ({
        icon: t.icon,
        title: z.t(K.toolNames, t.title || Le(o4.name)),
        name: o4.name,
        onActivate: () => {
          this.toolButtonActivated(o4.name, t.data);
        },
        secondaryLabel: o4.shortcut ? tt(o4.shortcut) : ""
      });
      return this.toolsToBeDisplayed.reduce((t, o4) => (Array.isArray(o4.toolbox) ? o4.toolbox.forEach((i) => {
        t.push(e(i, o4));
      }) : o4.toolbox !== void 0 && t.push(e(o4.toolbox, o4)), t), []);
    }
    /**
     * Iterate all tools and enable theirs shortcuts if specified
     */
    enableShortcuts() {
      this.toolsToBeDisplayed.forEach((e) => {
        const t = e.shortcut;
        t && this.enableShortcutForTool(e.name, t);
      });
    }
    /**
     * Enable shortcut Block Tool implemented shortcut
     *
     * @param {string} toolName - Tool name
     * @param {string} shortcut - shortcut according to the ShortcutData Module format
     */
    enableShortcutForTool(e, t) {
      he.add({
        name: t,
        on: this.api.ui.nodes.redactor,
        handler: async (o4) => {
          o4.preventDefault();
          const i = this.api.blocks.getCurrentBlockIndex(), s6 = this.api.blocks.getBlockByIndex(i);
          if (s6)
            try {
              const r3 = await this.api.blocks.convert(s6.id, e);
              this.api.caret.setToBlock(r3, "end");
              return;
            } catch {
            }
          this.insertNewBlock(e);
        }
      });
    }
    /**
     * Removes all added shortcuts
     * Fired when the Read-Only mode is activated
     */
    removeAllShortcuts() {
      this.toolsToBeDisplayed.forEach((e) => {
        const t = e.shortcut;
        t && he.remove(this.api.ui.nodes.redactor, t);
      });
    }
    /**
     * Inserts new block
     * Can be called when button clicked on Toolbox or by ShortcutData
     *
     * @param {string} toolName - Tool name
     * @param blockDataOverrides - predefined Block data
     */
    async insertNewBlock(e, t) {
      const o4 = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o4);
      if (!i)
        return;
      const s6 = i.isEmpty ? o4 : o4 + 1;
      let r3;
      if (t) {
        const a6 = await this.api.blocks.composeBlockData(e);
        r3 = Object.assign(a6, t);
      }
      const l3 = this.api.blocks.insert(
        e,
        r3,
        void 0,
        s6,
        void 0,
        i.isEmpty
      );
      l3.call(J.APPEND_CALLBACK), this.api.caret.setToBlock(s6), this.emit("toolbox-block-added", {
        block: l3
      }), this.api.toolbar.close();
    }
  };
  eo([
    ue
  ], at.prototype, "toolsToBeDisplayed", 1);
  eo([
    ue
  ], at.prototype, "toolboxItemsToBeDisplayed", 1);
  var Xi = at;
  var oo = "block hovered";
  async function Vi(n3, e) {
    const t = navigator.keyboard;
    if (!t)
      return e;
    try {
      return (await t.getLayoutMap()).get(n3) || e;
    } catch (o4) {
      return console.error(o4), e;
    }
  }
  var qi = class extends y {
    /**
     * @class
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.toolboxInstance = null;
    }
    /**
     * CSS styles
     *
     * @returns {object}
     */
    get CSS() {
      return {
        toolbar: "ce-toolbar",
        content: "ce-toolbar__content",
        actions: "ce-toolbar__actions",
        actionsOpened: "ce-toolbar__actions--opened",
        toolbarOpened: "ce-toolbar--opened",
        openedToolboxHolderModifier: "codex-editor--toolbox-opened",
        plusButton: "ce-toolbar__plus",
        plusButtonShortcut: "ce-toolbar__plus-shortcut",
        settingsToggler: "ce-toolbar__settings-btn",
        settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
      };
    }
    /**
     * Returns the Toolbar opening state
     *
     * @returns {boolean}
     */
    get opened() {
      return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
    }
    /**
     * Public interface for accessing the Toolbox
     */
    get toolbox() {
      var e;
      return {
        opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
        close: () => {
          var t;
          (t = this.toolboxInstance) == null || t.close();
        },
        open: () => {
          if (this.toolboxInstance === null) {
            I("toolbox.open() called before initialization is finished", "warn");
            return;
          }
          this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
        },
        toggle: () => {
          if (this.toolboxInstance === null) {
            I("toolbox.toggle() called before initialization is finished", "warn");
            return;
          }
          this.toolboxInstance.toggle();
        },
        hasFocus: () => {
          var t;
          return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
        }
      };
    }
    /**
     * Block actions appearance manipulations
     */
    get blockActions() {
      return {
        hide: () => {
          this.nodes.actions.classList.remove(this.CSS.actionsOpened);
        },
        show: () => {
          this.nodes.actions.classList.add(this.CSS.actionsOpened);
        }
      };
    }
    /**
     * Methods for working with Block Tunes toggler
     */
    get blockTunesToggler() {
      return {
        hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
        show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
      };
    }
    /**
     * Toggles read-only mode
     *
     * @param {boolean} readOnlyEnabled - read-only mode
     */
    toggleReadOnly(e) {
      e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
        this.drawUI(), this.enableModuleBindings();
      }, { timeout: 2e3 });
    }
    /**
     * Move Toolbar to the passed (or current) Block
     *
     * @param block - block to move Toolbar near it
     */
    moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
      if (this.toolboxInstance === null) {
        I("Can't open Toolbar since Editor initialization is not finished yet", "warn");
        return;
      }
      if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
        return;
      this.hoveredBlock = e;
      const t = e.holder, { isMobile: o4 } = this.Editor.UI;
      let i;
      const s6 = 20, r3 = e.firstInput, l3 = t.getBoundingClientRect(), a6 = r3 !== void 0 ? r3.getBoundingClientRect() : null, c5 = a6 !== null ? a6.top - l3.top : null, u2 = c5 !== null ? c5 > s6 : void 0;
      if (o4)
        i = t.offsetTop + t.offsetHeight;
      else if (r3 === void 0 || u2) {
        const h5 = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
        i = t.offsetTop + h5;
      } else {
        const h5 = _o(r3), p2 = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10), g4 = 8;
        i = t.offsetTop + h5 - p2 + g4 + c5;
      }
      this.nodes.wrapper.style.top = `${Math.floor(i)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
    }
    /**
     * Close the Toolbar
     */
    close() {
      var e, t;
      this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
    }
    /**
     * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
     */
    reset() {
      this.nodes.wrapper.style.top = "unset";
    }
    /**
     * Open Toolbar with Plus Button and Actions
     *
     * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
     *                                     This flag allows to open Toolbar without Actions.
     */
    open(e = true) {
      this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
    }
    /**
     * Draws Toolbar elements
     */
    async make() {
      this.nodes.wrapper = d.make("div", this.CSS.toolbar), ["content", "actions"].forEach((s6) => {
        this.nodes[s6] = d.make("div", this.CSS[s6]);
      }), d.append(this.nodes.wrapper, this.nodes.content), d.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d.make("div", this.CSS.plusButton, {
        innerHTML: Ci
      }), d.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
        Ne(true), this.plusButtonClicked();
      }, false);
      const e = d.make("div");
      e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
        textContent: "/"
      })), Pe(this.nodes.plusButton, e, {
        hidingDelay: 400
      }), this.nodes.settingsToggler = d.make("span", this.CSS.settingsToggler, {
        innerHTML: Ti
      }), d.append(this.nodes.actions, this.nodes.settingsToggler);
      const t = d.make("div"), o4 = d.text(z.ui(K.ui.blockTunes.toggler, "Click to tune")), i = await Vi("Slash", "/");
      t.appendChild(o4), t.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
        textContent: tt(`CMD + ${i}`)
      })), Pe(this.nodes.settingsToggler, t, {
        hidingDelay: 400
      }), d.append(this.nodes.actions, this.makeToolbox()), d.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
    }
    /**
     * Creates the Toolbox instance and return it's rendered element
     */
    makeToolbox() {
      return this.toolboxInstance = new Xi({
        api: this.Editor.API.methods,
        tools: this.Editor.Tools.blockTools,
        i18nLabels: {
          filter: z.ui(K.ui.popover, "Filter"),
          nothingFound: z.ui(K.ui.popover, "Nothing found")
        }
      }), this.toolboxInstance.on(Se.Opened, () => {
        this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
      }), this.toolboxInstance.on(Se.Closed, () => {
        this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
      }), this.toolboxInstance.on(Se.BlockAdded, ({ block: e }) => {
        const { BlockManager: t, Caret: o4 } = this.Editor, i = t.getBlockById(e.id);
        i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o4.setToBlock(t.lastBlock)) : o4.setToBlock(t.nextBlock));
      }), this.toolboxInstance.getElement();
    }
    /**
     * Handler for Plus Button
     */
    plusButtonClicked() {
      var e;
      this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
    }
    /**
     * Enable bindings
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
        var t;
        e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), Ne(true);
      }, true), pe() || this.eventsDispatcher.on(oo, (e) => {
        var t;
        this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
      });
    }
    /**
     * Disable bindings
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Clicks on the Block Settings toggler
     */
    settingsTogglerClicked() {
      this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
    }
    /**
     * Draws Toolbar UI
     *
     * Toolbar contains BlockSettings and Toolbox.
     * That's why at first we draw its components and then Toolbar itself
     *
     * Steps:
     *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
     *  - Make itself and append dependent nodes to itself
     *
     */
    drawUI() {
      this.Editor.BlockSettings.make(), this.make();
    }
    /**
     * Removes all created and saved HTMLElements
     * It is used in Read-Only mode
     */
    destroy() {
      this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
    }
  };
  var ne = /* @__PURE__ */ ((n3) => (n3[n3.Block = 0] = "Block", n3[n3.Inline = 1] = "Inline", n3[n3.Tune = 2] = "Tune", n3))(ne || {});
  var Ie = /* @__PURE__ */ ((n3) => (n3.Shortcut = "shortcut", n3.Toolbox = "toolbox", n3.EnabledInlineTools = "inlineToolbar", n3.EnabledBlockTunes = "tunes", n3.Config = "config", n3))(Ie || {});
  var io = /* @__PURE__ */ ((n3) => (n3.Shortcut = "shortcut", n3.SanitizeConfig = "sanitize", n3))(io || {});
  var ce = /* @__PURE__ */ ((n3) => (n3.IsEnabledLineBreaks = "enableLineBreaks", n3.Toolbox = "toolbox", n3.ConversionConfig = "conversionConfig", n3.IsReadOnlySupported = "isReadOnlySupported", n3.PasteConfig = "pasteConfig", n3))(ce || {});
  var ct = /* @__PURE__ */ ((n3) => (n3.IsInline = "isInline", n3.Title = "title", n3))(ct || {});
  var et = /* @__PURE__ */ ((n3) => (n3.IsTune = "isTune", n3))(et || {});
  var dt = class {
    /**
     * @class
     * @param {ConstructorOptions} options - Constructor options
     */
    constructor({
      name: e,
      constructable: t,
      config: o4,
      api: i,
      isDefault: s6,
      isInternal: r3 = false,
      defaultPlaceholder: l3
    }) {
      this.api = i, this.name = e, this.constructable = t, this.config = o4, this.isDefault = s6, this.isInternal = r3, this.defaultPlaceholder = l3;
    }
    /**
     * Returns Tool user configuration
     */
    get settings() {
      const e = this.config.config || {};
      return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
    }
    /**
     * Calls Tool's reset method
     */
    reset() {
      if (O(this.constructable.reset))
        return this.constructable.reset();
    }
    /**
     * Calls Tool's prepare method
     */
    prepare() {
      if (O(this.constructable.prepare))
        return this.constructable.prepare({
          toolName: this.name,
          config: this.settings
        });
    }
    /**
     * Returns shortcut for Tool (internal or specified by user)
     */
    get shortcut() {
      const e = this.constructable.shortcut;
      return this.config.shortcut || e;
    }
    /**
     * Returns Tool's sanitizer configuration
     */
    get sanitizeConfig() {
      return this.constructable.sanitize || {};
    }
    /**
     * Returns true if Tools is inline
     */
    isInline() {
      return this.type === ne.Inline;
    }
    /**
     * Returns true if Tools is block
     */
    isBlock() {
      return this.type === ne.Block;
    }
    /**
     * Returns true if Tools is tune
     */
    isTune() {
      return this.type === ne.Tune;
    }
  };
  var Zi = class extends y {
    /**
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.CSS = {
        inlineToolbar: "ce-inline-toolbar"
      }, this.opened = false, this.popover = null, this.toolbarVerticalMargin = pe() ? 20 : 6, this.toolsInstances = /* @__PURE__ */ new Map();
    }
    /**
     * Toggles read-only mode
     *
     * @param {boolean} readOnlyEnabled - read-only mode
     */
    toggleReadOnly(e) {
      e ? this.destroy() : window.requestIdleCallback(() => {
        this.make();
      }, { timeout: 2e3 });
    }
    /**
     *  Moving / appearance
     *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    /**
     * Shows Inline Toolbar if something is selected
     *
     * @param [needToClose] - pass true to close toolbar if it is not allowed.
     *                                  Avoid to use it just for closing IT, better call .close() clearly.
     */
    async tryToShow(e = false) {
      e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
    }
    /**
     * Hides Inline Toolbar
     */
    close() {
      var e, t;
      this.opened && (this.Editor.ReadOnly.isEnabled || (Array.from(this.toolsInstances.entries()).forEach(([o4, i]) => {
        const s6 = this.getToolShortcut(o4);
        s6 && he.remove(this.Editor.UI.nodes.redactor, s6), O(i.clear) && i.clear();
      }), this.toolsInstances = null, this.reset(), this.opened = false, (e = this.popover) == null || e.hide(), (t = this.popover) == null || t.destroy(), this.popover = null));
    }
    /**
     * Check if node is contained by Inline Toolbar
     *
     * @param {Node} node — node to check
     */
    containsNode(e) {
      return this.nodes.wrapper === void 0 ? false : this.nodes.wrapper.contains(e);
    }
    /**
     * Removes UI and its components
     */
    destroy() {
      var e;
      this.removeAllNodes(), (e = this.popover) == null || e.destroy(), this.popover = null;
    }
    /**
     * Making DOM
     */
    make() {
      this.nodes.wrapper = d.make("div", [
        this.CSS.inlineToolbar,
        ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
      ]), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
    }
    /**
     * Shows Inline Toolbar
     */
    async open() {
      var t;
      if (this.opened)
        return;
      this.opened = true, this.popover !== null && this.popover.destroy();
      const e = await this.getInlineTools();
      this.popover = new Ri({
        items: e,
        scopeElement: this.Editor.API.methods.ui.nodes.redactor,
        messages: {
          nothingFound: z.ui(K.ui.popover, "Nothing found"),
          search: z.ui(K.ui.popover, "Filter")
        }
      }), this.move(this.popover.size.width), (t = this.nodes.wrapper) == null || t.append(this.popover.getElement()), this.popover.show();
    }
    /**
     * Move Toolbar to the selected text
     *
     * @param popoverWidth - width of the toolbar popover
     */
    move(e) {
      const t = b.rect, o4 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), i = {
        x: t.x - o4.x,
        y: t.y + t.height - // + window.scrollY
        o4.top + this.toolbarVerticalMargin
      };
      i.x + e + o4.x > this.Editor.UI.contentRect.right && (i.x = this.Editor.UI.contentRect.right - e - o4.x), this.nodes.wrapper.style.left = Math.floor(i.x) + "px", this.nodes.wrapper.style.top = Math.floor(i.y) + "px";
    }
    /**
     * Clear orientation classes and reset position
     */
    reset() {
      this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
    }
    /**
     * Need to show Inline Toolbar or not
     */
    allowedToShow() {
      const e = ["IMG", "INPUT"], t = b.get(), o4 = b.text;
      if (!t || !t.anchorNode || t.isCollapsed || o4.length < 1)
        return false;
      const i = d.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
      if (i === null || t && e.includes(i.tagName) || i.closest('[contenteditable="true"]') === null)
        return false;
      const r3 = this.Editor.BlockManager.getBlock(t.anchorNode);
      return r3 ? r3.tool.inlineTools.size !== 0 : false;
    }
    /**
     *  Working with Tools
     *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    /**
     * Returns Inline Tools segregated by their appearance type: popover items and custom html elements.
     * Sets this.toolsInstances map
     */
    async getInlineTools() {
      const e = b.get(), t = this.Editor.BlockManager.getBlock(e.anchorNode), o4 = Array.from(t.tool.inlineTools.values()), i = [];
      this.toolsInstances === null && (this.toolsInstances = /* @__PURE__ */ new Map());
      for (let s6 = 0; s6 < o4.length; s6++) {
        const r3 = o4[s6], l3 = r3.create(), a6 = await l3.render();
        this.toolsInstances.set(r3.name, l3);
        const c5 = this.getToolShortcut(r3.name);
        if (c5)
          try {
            this.enableShortcuts(r3.name, c5);
          } catch {
          }
        const u2 = c5 !== void 0 ? tt(c5) : void 0, h5 = z.t(
          K.toolNames,
          r3.title || Le(r3.name)
        );
        [a6].flat().forEach((p2) => {
          var f3, k4;
          const g4 = {
            name: r3.name,
            onActivate: () => {
              this.toolClicked(l3);
            },
            hint: {
              title: h5,
              description: u2
            }
          };
          if (d.isElement(p2)) {
            const C4 = {
              ...g4,
              element: p2,
              type: A.Html
            };
            if (O(l3.renderActions)) {
              const S5 = l3.renderActions();
              C4.children = {
                isOpen: (f3 = l3.checkState) == null ? void 0 : f3.call(l3, b.get()),
                /** Disable keyboard navigation in actions, as it might conflict with enter press handling */
                isFlippable: false,
                items: [
                  {
                    type: A.Html,
                    element: S5
                  }
                ]
              };
            } else
              (k4 = l3.checkState) == null || k4.call(l3, b.get());
            i.push(C4);
          } else if (p2.type === A.Html)
            i.push({
              ...g4,
              ...p2,
              type: A.Html
            });
          else if (p2.type === A.Separator)
            i.push({
              type: A.Separator
            });
          else {
            const C4 = {
              ...g4,
              ...p2,
              type: A.Default
            };
            "children" in C4 && s6 !== 0 && i.push({
              type: A.Separator
            }), i.push(C4), "children" in C4 && s6 < o4.length - 1 && i.push({
              type: A.Separator
            });
          }
        });
      }
      return i;
    }
    /**
     * Get shortcut name for tool
     *
     * @param toolName — Tool name
     */
    getToolShortcut(e) {
      const { Tools: t } = this.Editor, o4 = t.inlineTools.get(e), i = t.internal.inlineTools;
      return Array.from(i.keys()).includes(e) ? this.inlineTools[e][io.Shortcut] : o4 == null ? void 0 : o4.shortcut;
    }
    /**
     * Enable Tool shortcut with Editor Shortcuts Module
     *
     * @param toolName - tool name
     * @param shortcut - shortcut according to the ShortcutData Module format
     */
    enableShortcuts(e, t) {
      he.add({
        name: t,
        handler: (o4) => {
          var s6;
          const { currentBlock: i } = this.Editor.BlockManager;
          i && i.tool.enabledInlineTools && (o4.preventDefault(), (s6 = this.popover) == null || s6.activateItemByName(e));
        },
        on: this.Editor.UI.nodes.redactor
      });
    }
    /**
     * Inline Tool button clicks
     *
     * @param tool - Tool's instance
     */
    toolClicked(e) {
      var o4;
      const t = b.range;
      (o4 = e.surround) == null || o4.call(e, t), this.checkToolsState();
    }
    /**
     * Check Tools` state by selection
     */
    checkToolsState() {
      var e;
      (e = this.toolsInstances) == null || e.forEach((t) => {
        var o4;
        (o4 = t.checkState) == null || o4.call(t, b.get());
      });
    }
    /**
     * Get inline tools tools
     * Tools that has isInline is true
     */
    get inlineTools() {
      const e = {};
      return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o4]) => {
        e[t] = o4.create();
      }), e;
    }
  };
  function so() {
    const n3 = window.getSelection();
    if (n3 === null)
      return [null, 0];
    let e = n3.focusNode, t = n3.focusOffset;
    return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], t = e.textContent.length)), [e, t]);
  }
  function no(n3, e, t, o4) {
    const i = document.createRange();
    o4 === "left" ? (i.setStart(n3, 0), i.setEnd(e, t)) : (i.setStart(e, t), i.setEnd(n3, n3.childNodes.length));
    const s6 = i.cloneContents(), r3 = document.createElement("div");
    r3.appendChild(s6);
    const l3 = r3.textContent || "";
    return Lo(l3);
  }
  function Me(n3) {
    const e = d.getDeepestNode(n3);
    if (e === null || d.isEmpty(n3))
      return true;
    if (d.isNativeInput(e))
      return e.selectionEnd === 0;
    if (d.isEmpty(n3))
      return true;
    const [t, o4] = so();
    return t === null ? false : no(n3, t, o4, "left");
  }
  function Ae(n3) {
    const e = d.getDeepestNode(n3, true);
    if (e === null)
      return true;
    if (d.isNativeInput(e))
      return e.selectionEnd === e.value.length;
    const [t, o4] = so();
    return t === null ? false : no(n3, t, o4, "right");
  }
  var Gi = class extends y {
    /**
     * All keydowns on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    keydown(e) {
      switch (this.beforeKeydownProcessing(e), e.keyCode) {
        case w.BACKSPACE:
          this.backspace(e);
          break;
        case w.DELETE:
          this.delete(e);
          break;
        case w.ENTER:
          this.enter(e);
          break;
        case w.DOWN:
        case w.RIGHT:
          this.arrowRightAndDown(e);
          break;
        case w.UP:
        case w.LEFT:
          this.arrowLeftAndUp(e);
          break;
        case w.TAB:
          this.tabPressed(e);
          break;
      }
      e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
    }
    /**
     * Fires on keydown before event processing
     *
     * @param {KeyboardEvent} event - keydown
     */
    beforeKeydownProcessing(e) {
      this.needToolbarClosing(e) && Mt(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
    }
    /**
     * Key up on Block:
     * - shows Inline Toolbar if something selected
     * - shows conversion toolbar with 85% of block selection
     *
     * @param {KeyboardEvent} event - keyup event
     */
    keyup(e) {
      e.shiftKey || this.Editor.UI.checkEmptiness();
    }
    /**
     * Add drop target styles
     *
     * @param {DragEvent} event - drag over event
     */
    dragOver(e) {
      const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
      t.dropTarget = true;
    }
    /**
     * Remove drop target style
     *
     * @param {DragEvent} event - drag leave event
     */
    dragLeave(e) {
      const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
      t.dropTarget = false;
    }
    /**
     * Copying selected blocks
     * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
     *
     * @param {ClipboardEvent} event - clipboard event
     */
    handleCommandC(e) {
      const { BlockSelection: t } = this.Editor;
      t.anyBlockSelected && t.copySelectedBlocks(e);
    }
    /**
     * Copy and Delete selected Blocks
     *
     * @param {ClipboardEvent} event - clipboard event
     */
    handleCommandX(e) {
      const { BlockSelection: t, BlockManager: o4, Caret: i } = this.Editor;
      t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
        const s6 = o4.removeSelectedBlocks(), r3 = o4.insertDefaultBlockAtIndex(s6, true);
        i.setToBlock(r3, i.positions.START), t.clearSelection(e);
      });
    }
    /**
     * Tab pressed inside a Block.
     *
     * @param {KeyboardEvent} event - keydown
     */
    tabPressed(e) {
      const { InlineToolbar: t, Caret: o4 } = this.Editor;
      if (t.opened)
        return;
      (e.shiftKey ? o4.navigatePrevious(true) : o4.navigateNext(true)) && e.preventDefault();
    }
    /**
     * '/' + 'command' keydown inside a Block
     */
    commandSlashPressed() {
      this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
    }
    /**
     * '/' keydown inside a Block
     *
     * @param event - keydown
     */
    slashPressed(e) {
      this.Editor.BlockManager.currentBlock.isEmpty && (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
    }
    /**
     * ENTER pressed on block
     *
     * @param {KeyboardEvent} event - keydown
     */
    enter(e) {
      const { BlockManager: t, UI: o4 } = this.Editor, i = t.currentBlock;
      if (i === void 0 || i.tool.isLineBreaksEnabled || o4.someToolbarOpened && o4.someFlipperButtonFocused || e.shiftKey && !Ge)
        return;
      let s6 = i;
      i.currentInput !== void 0 && Me(i.currentInput) && !i.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : i.currentInput && Ae(i.currentInput) ? s6 = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : s6 = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s6), this.Editor.Toolbar.moveAndOpen(s6), e.preventDefault();
    }
    /**
     * Handle backspace keydown on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    backspace(e) {
      const { BlockManager: t, Caret: o4 } = this.Editor, { currentBlock: i, previousBlock: s6 } = t;
      if (i === void 0 || !b.isCollapsed || !i.currentInput || !Me(i.currentInput))
        return;
      if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
        o4.navigatePrevious();
        return;
      }
      if (s6 === null)
        return;
      if (s6.isEmpty) {
        t.removeBlock(s6);
        return;
      }
      if (i.isEmpty) {
        t.removeBlock(i);
        const a6 = t.currentBlock;
        o4.setToBlock(a6, o4.positions.END);
        return;
      }
      wt(s6, i) ? this.mergeBlocks(s6, i) : o4.setToBlock(s6, o4.positions.END);
    }
    /**
     * Handles delete keydown on Block
     * Removes char after the caret.
     * If caret is at the end of the block, merge next block with current
     *
     * @param {KeyboardEvent} event - keydown
     */
    delete(e) {
      const { BlockManager: t, Caret: o4 } = this.Editor, { currentBlock: i, nextBlock: s6 } = t;
      if (!b.isCollapsed || !Ae(i.currentInput))
        return;
      if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
        o4.navigateNext();
        return;
      }
      if (s6 === null)
        return;
      if (s6.isEmpty) {
        t.removeBlock(s6);
        return;
      }
      if (i.isEmpty) {
        t.removeBlock(i), o4.setToBlock(s6, o4.positions.START);
        return;
      }
      wt(i, s6) ? this.mergeBlocks(i, s6) : o4.setToBlock(s6, o4.positions.START);
    }
    /**
     * Merge passed Blocks
     *
     * @param targetBlock - to which Block we want to merge
     * @param blockToMerge - what Block we want to merge
     */
    mergeBlocks(e, t) {
      const { BlockManager: o4, Caret: i, Toolbar: s6 } = this.Editor;
      i.createShadow(e.lastInput), o4.mergeBlocks(e, t).then(() => {
        i.restoreCaret(e.pluginsContent), s6.close();
      });
    }
    /**
     * Handle right and down keyboard keys
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    arrowRightAndDown(e) {
      const t = le.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === w.TAB);
      if (this.Editor.UI.someToolbarOpened && t)
        return;
      this.Editor.Toolbar.close();
      const { currentBlock: o4 } = this.Editor.BlockManager, s6 = ((o4 == null ? void 0 : o4.currentInput) !== void 0 ? Ae(o4.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
      if (e.shiftKey && e.keyCode === w.DOWN && s6) {
        this.Editor.CrossBlockSelection.toggleBlockSelectedState();
        return;
      }
      if (e.keyCode === w.DOWN || e.keyCode === w.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
        e.preventDefault();
        return;
      }
      Oe(() => {
        this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
      }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Handle left and up keyboard keys
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    arrowLeftAndUp(e) {
      if (this.Editor.UI.someToolbarOpened) {
        if (le.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === w.TAB))
          return;
        this.Editor.UI.closeAllToolbars();
      }
      this.Editor.Toolbar.close();
      const { currentBlock: t } = this.Editor.BlockManager, i = ((t == null ? void 0 : t.currentInput) !== void 0 ? Me(t.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
      if (e.shiftKey && e.keyCode === w.UP && i) {
        this.Editor.CrossBlockSelection.toggleBlockSelectedState(false);
        return;
      }
      if (e.keyCode === w.UP || e.keyCode === w.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
        e.preventDefault();
        return;
      }
      Oe(() => {
        this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
      }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Cases when we need to close Toolbar
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    needToolbarClosing(e) {
      const t = e.keyCode === w.ENTER && this.Editor.Toolbar.toolbox.opened, o4 = e.keyCode === w.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === w.ENTER && this.Editor.InlineToolbar.opened, s6 = e.keyCode === w.TAB;
      return !(e.shiftKey || s6 || t || o4 || i);
    }
    /**
     * If Toolbox is not open, then just open it and show plus button
     */
    activateToolbox() {
      this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
    }
    /**
     * Open Toolbar and show BlockSettings before flipping Tools
     */
    activateBlockSettings() {
      this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
    }
  };
  var Xe = class {
    /**
     * @class
     * @param {HTMLElement} workingArea — editor`s working node
     */
    constructor(e) {
      this.blocks = [], this.workingArea = e;
    }
    /**
     * Get length of Block instances array
     *
     * @returns {number}
     */
    get length() {
      return this.blocks.length;
    }
    /**
     * Get Block instances array
     *
     * @returns {Block[]}
     */
    get array() {
      return this.blocks;
    }
    /**
     * Get blocks html elements array
     *
     * @returns {HTMLElement[]}
     */
    get nodes() {
      return At(this.workingArea.children);
    }
    /**
     * Proxy trap to implement array-like setter
     *
     * @example
     * blocks[0] = new Block(...)
     * @param {Blocks} instance — Blocks instance
     * @param {PropertyKey} property — block index or any Blocks class property key to set
     * @param {Block} value — value to set
     * @returns {boolean}
     */
    static set(e, t, o4) {
      return isNaN(Number(t)) ? (Reflect.set(e, t, o4), true) : (e.insert(+t, o4), true);
    }
    /**
     * Proxy trap to implement array-like getter
     *
     * @param {Blocks} instance — Blocks instance
     * @param {PropertyKey} property — Blocks class property key
     * @returns {Block|*}
     */
    static get(e, t) {
      return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
    }
    /**
     * Push new Block to the blocks array and append it to working area
     *
     * @param {Block} block - Block to add
     */
    push(e) {
      this.blocks.push(e), this.insertToDOM(e);
    }
    /**
     * Swaps blocks with indexes first and second
     *
     * @param {number} first - first block index
     * @param {number} second - second block index
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      const o4 = this.blocks[t];
      d.swap(this.blocks[e].holder, o4.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o4;
    }
    /**
     * Move a block from one to another index
     *
     * @param {number} toIndex - new index of the block
     * @param {number} fromIndex - block to move
     */
    move(e, t) {
      const o4 = this.blocks.splice(t, 1)[0], i = e - 1, s6 = Math.max(0, i), r3 = this.blocks[s6];
      e > 0 ? this.insertToDOM(o4, "afterend", r3) : this.insertToDOM(o4, "beforebegin", r3), this.blocks.splice(e, 0, o4);
      const l3 = this.composeBlockEvent("move", {
        fromIndex: t,
        toIndex: e
      });
      o4.call(J.MOVED, l3);
    }
    /**
     * Insert new Block at passed index
     *
     * @param {number} index — index to insert Block
     * @param {Block} block — Block to insert
     * @param {boolean} replace — it true, replace block on given index
     */
    insert(e, t, o4 = false) {
      if (!this.length) {
        this.push(t);
        return;
      }
      e > this.length && (e = this.length), o4 && (this.blocks[e].holder.remove(), this.blocks[e].call(J.REMOVED));
      const i = o4 ? 1 : 0;
      if (this.blocks.splice(e, i, t), e > 0) {
        const s6 = this.blocks[e - 1];
        this.insertToDOM(t, "afterend", s6);
      } else {
        const s6 = this.blocks[e + 1];
        s6 ? this.insertToDOM(t, "beforebegin", s6) : this.insertToDOM(t);
      }
    }
    /**
     * Replaces block under passed index with passed block
     *
     * @param index - index of existed block
     * @param block - new block
     */
    replace(e, t) {
      if (this.blocks[e] === void 0)
        throw Error("Incorrect index");
      this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
    }
    /**
     * Inserts several blocks at once
     *
     * @param blocks - blocks to insert
     * @param index - index to insert blocks at
     */
    insertMany(e, t) {
      const o4 = new DocumentFragment();
      for (const i of e)
        o4.appendChild(i.holder);
      if (this.length > 0) {
        if (t > 0) {
          const i = Math.min(t - 1, this.length - 1);
          this.blocks[i].holder.after(o4);
        } else
          t === 0 && this.workingArea.prepend(o4);
        this.blocks.splice(t, 0, ...e);
      } else
        this.blocks.push(...e), this.workingArea.appendChild(o4);
      e.forEach((i) => i.call(J.RENDERED));
    }
    /**
     * Remove block
     *
     * @param {number} index - index of Block to remove
     */
    remove(e) {
      isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(J.REMOVED), this.blocks.splice(e, 1);
    }
    /**
     * Remove all blocks
     */
    removeAll() {
      this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(J.REMOVED)), this.blocks.length = 0;
    }
    /**
     * Insert Block after passed target
     *
     * @todo decide if this method is necessary
     * @param {Block} targetBlock — target after which Block should be inserted
     * @param {Block} newBlock — Block to insert
     */
    insertAfter(e, t) {
      const o4 = this.blocks.indexOf(e);
      this.insert(o4 + 1, t);
    }
    /**
     * Get Block by index
     *
     * @param {number} index — Block index
     * @returns {Block}
     */
    get(e) {
      return this.blocks[e];
    }
    /**
     * Return index of passed Block
     *
     * @param {Block} block - Block to find
     * @returns {number}
     */
    indexOf(e) {
      return this.blocks.indexOf(e);
    }
    /**
     * Insert new Block into DOM
     *
     * @param {Block} block - Block to insert
     * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
     * @param {Block} target — Block related to position
     */
    insertToDOM(e, t, o4) {
      t ? o4.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(J.RENDERED);
    }
    /**
     * Composes Block event with passed type and details
     *
     * @param {string} type - event type
     * @param {object} detail - event detail
     */
    composeBlockEvent(e, t) {
      return new CustomEvent(e, {
        detail: t
      });
    }
  };
  var Tt = "block-removed";
  var Ct = "block-added";
  var Ji = "block-moved";
  var St = "block-changed";
  var Qi = class {
    constructor() {
      this.completed = Promise.resolve();
    }
    /**
     * Add new promise to queue
     *
     * @param operation - promise should be added to queue
     */
    add(e) {
      return new Promise((t, o4) => {
        this.completed = this.completed.then(e).then(t).catch(o4);
      });
    }
  };
  var es = class extends y {
    constructor() {
      super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
    }
    /**
     * Returns current Block index
     *
     * @returns {number}
     */
    get currentBlockIndex() {
      return this._currentBlockIndex;
    }
    /**
     * Set current Block index and fire Block lifecycle callbacks
     *
     * @param {number} newIndex - index of Block to set as current
     */
    set currentBlockIndex(e) {
      this._currentBlockIndex = e;
    }
    /**
     * returns first Block
     *
     * @returns {Block}
     */
    get firstBlock() {
      return this._blocks[0];
    }
    /**
     * returns last Block
     *
     * @returns {Block}
     */
    get lastBlock() {
      return this._blocks[this._blocks.length - 1];
    }
    /**
     * Get current Block instance
     *
     * @returns {Block}
     */
    get currentBlock() {
      return this._blocks[this.currentBlockIndex];
    }
    /**
     * Set passed Block as a current
     *
     * @param block - block to set as a current
     */
    set currentBlock(e) {
      this.currentBlockIndex = this.getBlockIndex(e);
    }
    /**
     * Returns next Block instance
     *
     * @returns {Block|null}
     */
    get nextBlock() {
      return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
    }
    /**
     * Return first Block with inputs after current Block
     *
     * @returns {Block | undefined}
     */
    get nextContentfulBlock() {
      return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
    }
    /**
     * Return first Block with inputs before current Block
     *
     * @returns {Block | undefined}
     */
    get previousContentfulBlock() {
      return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
    }
    /**
     * Returns previous Block instance
     *
     * @returns {Block|null}
     */
    get previousBlock() {
      return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
    }
    /**
     * Get array of Block instances
     *
     * @returns {Block[]} {@link Blocks#array}
     */
    get blocks() {
      return this._blocks.array;
    }
    /**
     * Check if each Block is empty
     *
     * @returns {boolean}
     */
    get isEditorEmpty() {
      return this.blocks.every((e) => e.isEmpty);
    }
    /**
     * Should be called after Editor.UI preparation
     * Define this._blocks property
     */
    prepare() {
      const e = new Xe(this.Editor.UI.nodes.redactor);
      this._blocks = new Proxy(e, {
        set: Xe.set,
        get: Xe.get
      }), this.listeners.on(
        document,
        "copy",
        (t) => this.Editor.BlockEvents.handleCommandC(t)
      );
    }
    /**
     * Toggle read-only state
     *
     * If readOnly is true:
     *  - Unbind event handlers from created Blocks
     *
     * if readOnly is false:
     *  - Bind event handlers to all existing Blocks
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(e) {
      e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
     * Creates Block instance by tool name
     *
     * @param {object} options - block creation options
     * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
     * @param {string} [options.id] - unique id for this block
     * @param {BlockToolData} [options.data] - constructor params
     * @returns {Block}
     */
    composeBlock({
      tool: e,
      data: t = {},
      id: o4 = void 0,
      tunes: i = {}
    }) {
      const s6 = this.Editor.ReadOnly.isEnabled, r3 = this.Editor.Tools.blockTools.get(e), l3 = new D({
        id: o4,
        data: t,
        tool: r3,
        api: this.Editor.API,
        readOnly: s6,
        tunesData: i
      }, this.eventsDispatcher);
      return s6 || window.requestIdleCallback(() => {
        this.bindBlockEvents(l3);
      }, { timeout: 2e3 }), l3;
    }
    /**
     * Insert new block into _blocks
     *
     * @param {object} options - insert options
     * @param {string} [options.id] - block's unique id
     * @param {string} [options.tool] - plugin name, by default method inserts the default block type
     * @param {object} [options.data] - plugin data
     * @param {number} [options.index] - index where to insert new Block
     * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
     * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
     * @returns {Block}
     */
    insert({
      id: e = void 0,
      tool: t = this.config.defaultBlock,
      data: o4 = {},
      index: i,
      needToFocus: s6 = true,
      replace: r3 = false,
      tunes: l3 = {}
    } = {}) {
      let a6 = i;
      a6 === void 0 && (a6 = this.currentBlockIndex + (r3 ? 0 : 1));
      const c5 = this.composeBlock({
        id: e,
        tool: t,
        data: o4,
        tunes: l3
      });
      return r3 && this.blockDidMutated(Tt, this.getBlockByIndex(a6), {
        index: a6
      }), this._blocks.insert(a6, c5, r3), this.blockDidMutated(Ct, c5, {
        index: a6
      }), s6 ? this.currentBlockIndex = a6 : a6 <= this.currentBlockIndex && this.currentBlockIndex++, c5;
    }
    /**
     * Inserts several blocks at once
     *
     * @param blocks - blocks to insert
     * @param index - index where to insert
     */
    insertMany(e, t = 0) {
      this._blocks.insertMany(e, t);
    }
    /**
     * Update Block data.
     *
     * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
     * Should not trigger 'block-removed' or 'block-added' events.
     *
     * If neither data nor tunes is provided, return the provided block instead.
     *
     * @param block - block to update
     * @param data - (optional) new data
     * @param tunes - (optional) tune data
     */
    async update(e, t, o4) {
      if (!t && !o4)
        return e;
      const i = await e.data, s6 = this.composeBlock({
        id: e.id,
        tool: e.name,
        data: Object.assign({}, i, t ?? {}),
        tunes: o4 ?? e.tunes
      }), r3 = this.getBlockIndex(e);
      return this._blocks.replace(r3, s6), this.blockDidMutated(St, s6, {
        index: r3
      }), s6;
    }
    /**
     * Replace passed Block with the new one with specified Tool and data
     *
     * @param block - block to replace
     * @param newTool - new Tool name
     * @param data - new Tool data
     */
    replace(e, t, o4) {
      const i = this.getBlockIndex(e);
      return this.insert({
        tool: t,
        data: o4,
        index: i,
        replace: true
      });
    }
    /**
     * Insert pasted content. Call onPaste callback after insert.
     *
     * @param {string} toolName - name of Tool to insert
     * @param {PasteEvent} pasteEvent - pasted data
     * @param {boolean} replace - should replace current block
     */
    paste(e, t, o4 = false) {
      const i = this.insert({
        tool: e,
        replace: o4
      });
      try {
        window.requestIdleCallback(() => {
          i.call(J.ON_PASTE, t);
        });
      } catch (s6) {
        I(`${e}: onPaste callback call is failed`, "error", s6);
      }
      return i;
    }
    /**
     * Insert new default block at passed index
     *
     * @param {number} index - index where Block should be inserted
     * @param {boolean} needToFocus - if true, updates current Block index
     *
     * TODO: Remove method and use insert() with index instead (?)
     * @returns {Block} inserted Block
     */
    insertDefaultBlockAtIndex(e, t = false) {
      const o4 = this.composeBlock({ tool: this.config.defaultBlock });
      return this._blocks[e] = o4, this.blockDidMutated(Ct, o4, {
        index: e
      }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o4;
    }
    /**
     * Always inserts at the end
     *
     * @returns {Block}
     */
    insertAtEnd() {
      return this.currentBlockIndex = this.blocks.length - 1, this.insert();
    }
    /**
     * Merge two blocks
     *
     * @param {Block} targetBlock - previous block will be append to this block
     * @param {Block} blockToMerge - block that will be merged with target block
     * @returns {Promise} - the sequence that can be continued
     */
    async mergeBlocks(e, t) {
      let o4;
      if (e.name === t.name && e.mergeable) {
        const i = await t.data;
        if (V(i)) {
          console.error("Could not merge Block. Failed to extract original Block data.");
          return;
        }
        const [s6] = it([i], e.tool.sanitizeConfig);
        o4 = s6;
      } else if (e.mergeable && _e(t, "export") && _e(e, "import")) {
        const i = await t.exportDataAsString(), s6 = q(i, e.tool.sanitizeConfig);
        o4 = xt(s6, e.tool.conversionConfig);
      }
      o4 !== void 0 && (await e.mergeWith(o4), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e));
    }
    /**
     * Remove passed Block
     *
     * @param block - Block to remove
     * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
     */
    removeBlock(e, t = true) {
      return new Promise((o4) => {
        const i = this._blocks.indexOf(e);
        if (!this.validateIndex(i))
          throw new Error("Can't find a Block to remove");
        e.destroy(), this._blocks.remove(i), this.blockDidMutated(Tt, e, {
          index: i
        }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), t && this.insert()), o4();
      });
    }
    /**
     * Remove only selected Blocks
     * and returns first Block index where started removing...
     *
     * @returns {number|undefined}
     */
    removeSelectedBlocks() {
      let e;
      for (let t = this.blocks.length - 1; t >= 0; t--)
        this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
      return e;
    }
    /**
     * Attention!
     * After removing insert the new default typed Block and focus on it
     * Removes all blocks
     */
    removeAllBlocks() {
      for (let e = this.blocks.length - 1; e >= 0; e--)
        this._blocks.remove(e);
      this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
    }
    /**
     * Split current Block
     * 1. Extract content from Caret position to the Block`s end
     * 2. Insert a new Block below current one with extracted content
     *
     * @returns {Block}
     */
    split() {
      const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = d.make("div");
      t.appendChild(e);
      const o4 = {
        text: d.isEmpty(t) ? "" : t.innerHTML
      };
      return this.insert({ data: o4 });
    }
    /**
     * Returns Block by passed index
     *
     * @param {number} index - index to get. -1 to get last
     * @returns {Block}
     */
    getBlockByIndex(e) {
      return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
    }
    /**
     * Returns an index for passed Block
     *
     * @param block - block to find index
     */
    getBlockIndex(e) {
      return this._blocks.indexOf(e);
    }
    /**
     * Returns the Block by passed id
     *
     * @param id - id of block to get
     * @returns {Block}
     */
    getBlockById(e) {
      return this._blocks.array.find((t) => t.id === e);
    }
    /**
     * Get Block instance by html element
     *
     * @param {Node} element - html element to get Block by
     */
    getBlock(e) {
      d.isElement(e) || (e = e.parentNode);
      const t = this._blocks.nodes, o4 = e.closest(`.${D.CSS.wrapper}`), i = t.indexOf(o4);
      if (i >= 0)
        return this._blocks[i];
    }
    /**
     * 1) Find first-level Block from passed child Node
     * 2) Mark it as current
     *
     * @param {Node} childNode - look ahead from this node.
     * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
     */
    setCurrentBlockByChildNode(e) {
      d.isElement(e) || (e = e.parentNode);
      const t = e.closest(`.${D.CSS.wrapper}`);
      if (!t)
        return;
      const o4 = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
      if (o4 != null && o4.isEqualNode(this.Editor.UI.nodes.wrapper))
        return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
    }
    /**
     * Return block which contents passed node
     *
     * @param {Node} childNode - node to get Block by
     * @returns {Block}
     */
    getBlockByChildNode(e) {
      if (!e || !(e instanceof Node))
        return;
      d.isElement(e) || (e = e.parentNode);
      const t = e.closest(`.${D.CSS.wrapper}`);
      return this.blocks.find((o4) => o4.holder === t);
    }
    /**
     * Swap Blocks Position
     *
     * @param {number} fromIndex - index of first block
     * @param {number} toIndex - index of second block
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      this._blocks.swap(e, t), this.currentBlockIndex = t;
    }
    /**
     * Move a block to a new index
     *
     * @param {number} toIndex - index where to move Block
     * @param {number} fromIndex - index of Block to move
     */
    move(e, t = this.currentBlockIndex) {
      if (isNaN(e) || isNaN(t)) {
        I("Warning during 'move' call: incorrect indices provided.", "warn");
        return;
      }
      if (!this.validateIndex(e) || !this.validateIndex(t)) {
        I("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
        return;
      }
      this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(Ji, this.currentBlock, {
        fromIndex: t,
        toIndex: e
      });
    }
    /**
     * Converts passed Block to the new Tool
     * Uses Conversion Config
     *
     * @param blockToConvert - Block that should be converted
     * @param targetToolName - name of the Tool to convert to
     * @param blockDataOverrides - optional new Block data overrides
     */
    async convert(e, t, o4) {
      if (!await e.save())
        throw new Error("Could not convert Block. Failed to extract original Block data.");
      const s6 = this.Editor.Tools.blockTools.get(t);
      if (!s6)
        throw new Error(`Could not convert Block. Tool \xAB${t}\xBB not found.`);
      const r3 = await e.exportDataAsString(), l3 = q(
        r3,
        s6.sanitizeConfig
      );
      let a6 = xt(l3, s6.conversionConfig);
      return o4 && (a6 = Object.assign(a6, o4)), this.replace(e, s6.name, a6);
    }
    /**
     * Sets current Block Index -1 which means unknown
     * and clear highlights
     */
    unsetCurrentBlock() {
      this.currentBlockIndex = -1;
    }
    /**
     * Clears Editor
     *
     * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
     *                                             we don't need to add an empty default block
     *                                        2) in api.blocks.clear we should add empty block
     */
    async clear(e = false) {
      const t = new Qi();
      this.blocks.forEach((o4) => {
        t.add(async () => {
          await this.removeBlock(o4, false);
        });
      }), await t.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
    }
    /**
     * Cleans up all the block tools' resources
     * This is called when editor is destroyed
     */
    async destroy() {
      await Promise.all(this.blocks.map((e) => e.destroy()));
    }
    /**
     * Bind Block events
     *
     * @param {Block} block - Block to which event should be bound
     */
    bindBlockEvents(e) {
      const { BlockEvents: t } = this.Editor;
      this.readOnlyMutableListeners.on(e.holder, "keydown", (o4) => {
        t.keydown(o4);
      }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o4) => {
        t.keyup(o4);
      }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o4) => {
        t.dragOver(o4);
      }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o4) => {
        t.dragLeave(o4);
      }), e.on("didMutated", (o4) => this.blockDidMutated(St, o4, {
        index: this.getBlockIndex(o4)
      }));
    }
    /**
     * Disable mutable handlers and bindings
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Enables all module handlers and bindings for all Blocks
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(
        document,
        "cut",
        (e) => this.Editor.BlockEvents.handleCommandX(e)
      ), this.blocks.forEach((e) => {
        this.bindBlockEvents(e);
      });
    }
    /**
     * Validates that the given index is not lower than 0 or higher than the amount of blocks
     *
     * @param {number} index - index of blocks array to validate
     * @returns {boolean}
     */
    validateIndex(e) {
      return !(e < 0 || e >= this._blocks.length);
    }
    /**
     * Block mutation callback
     *
     * @param mutationType - what happened with block
     * @param block - mutated block
     * @param detailData - additional data to pass with change event
     */
    blockDidMutated(e, t, o4) {
      const i = new CustomEvent(e, {
        detail: {
          target: new G(t),
          ...o4
        }
      });
      return this.eventsDispatcher.emit(Dt, {
        event: i
      }), t;
    }
  };
  var ts = class extends y {
    constructor() {
      super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
    }
    /**
     * Sanitizer Config
     *
     * @returns {SanitizerConfig}
     */
    get sanitizerConfig() {
      return {
        p: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        ol: {},
        ul: {},
        li: {},
        br: true,
        img: {
          src: true,
          width: true,
          height: true
        },
        a: {
          href: true
        },
        b: {},
        i: {},
        u: {}
      };
    }
    /**
     * Flag that identifies all Blocks selection
     *
     * @returns {boolean}
     */
    get allBlocksSelected() {
      const { BlockManager: e } = this.Editor;
      return e.blocks.every((t) => t.selected === true);
    }
    /**
     * Set selected all blocks
     *
     * @param {boolean} state - state to set
     */
    set allBlocksSelected(e) {
      const { BlockManager: t } = this.Editor;
      t.blocks.forEach((o4) => {
        o4.selected = e;
      }), this.clearCache();
    }
    /**
     * Flag that identifies any Block selection
     *
     * @returns {boolean}
     */
    get anyBlockSelected() {
      const { BlockManager: e } = this.Editor;
      return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === true)), this.anyBlockSelectedCache;
    }
    /**
     * Return selected Blocks array
     *
     * @returns {Block[]}
     */
    get selectedBlocks() {
      return this.Editor.BlockManager.blocks.filter((e) => e.selected);
    }
    /**
     * Module Preparation
     * Registers Shortcuts CMD+A and CMD+C
     * to select all and copy them
     */
    prepare() {
      this.selection = new b(), he.add({
        name: "CMD+A",
        handler: (e) => {
          const { BlockManager: t, ReadOnly: o4 } = this.Editor;
          if (o4.isEnabled) {
            e.preventDefault(), this.selectAllBlocks();
            return;
          }
          t.currentBlock && this.handleCommandA(e);
        },
        on: this.Editor.UI.nodes.redactor
      });
    }
    /**
     * Toggle read-only state
     *
     *  - Remove all ranges
     *  - Unselect all Blocks
     */
    toggleReadOnly() {
      b.get().removeAllRanges(), this.allBlocksSelected = false;
    }
    /**
     * Remove selection of Block
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    unSelectBlockByIndex(e) {
      const { BlockManager: t } = this.Editor;
      let o4;
      isNaN(e) ? o4 = t.currentBlock : o4 = t.getBlockByIndex(e), o4.selected = false, this.clearCache();
    }
    /**
     * Clear selection from Blocks
     *
     * @param {Event} reason - event caused clear of selection
     * @param {boolean} restoreSelection - if true, restore saved selection
     */
    clearSelection(e, t = false) {
      const { BlockManager: o4, Caret: i, RectangleSelection: s6 } = this.Editor;
      this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
      const r3 = e && e instanceof KeyboardEvent, l3 = r3 && Mt(e.keyCode);
      if (this.anyBlockSelected && r3 && l3 && !b.isSelectionExists) {
        const a6 = o4.removeSelectedBlocks();
        o4.insertDefaultBlockAtIndex(a6, true), i.setToBlock(o4.currentBlock), Oe(() => {
          const c5 = e.key;
          i.insertContentAtCaretPosition(c5.length > 1 ? "" : c5);
        }, 20)();
      }
      if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || s6.isRectActivated()) {
        this.Editor.RectangleSelection.clearSelection();
        return;
      }
      t && this.selection.restore(), this.allBlocksSelected = false;
    }
    /**
     * Reduce each Block and copy its content
     *
     * @param {ClipboardEvent} e - copy/cut event
     * @returns {Promise<void>}
     */
    copySelectedBlocks(e) {
      e.preventDefault();
      const t = d.make("div");
      this.selectedBlocks.forEach((s6) => {
        const r3 = q(s6.holder.innerHTML, this.sanitizerConfig), l3 = d.make("p");
        l3.innerHTML = r3, t.appendChild(l3);
      });
      const o4 = Array.from(t.childNodes).map((s6) => s6.textContent).join(`

`), i = t.innerHTML;
      return e.clipboardData.setData("text/plain", o4), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((s6) => s6.save())).then((s6) => {
        try {
          e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(s6));
        } catch {
        }
      });
    }
    /**
     * Select Block by its index
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    selectBlockByIndex(e) {
      const { BlockManager: t } = this.Editor, o4 = t.getBlockByIndex(e);
      o4 !== void 0 && this.selectBlock(o4);
    }
    /**
     * Select passed Block
     *
     * @param {Block} block - Block to select
     */
    selectBlock(e) {
      this.selection.save(), b.get().removeAllRanges(), e.selected = true, this.clearCache(), this.Editor.InlineToolbar.close();
    }
    /**
     * Remove selection from passed Block
     *
     * @param {Block} block - Block to unselect
     */
    unselectBlock(e) {
      e.selected = false, this.clearCache();
    }
    /**
     * Clear anyBlockSelected cache
     */
    clearCache() {
      this.anyBlockSelectedCache = null;
    }
    /**
     * Module destruction
     * De-registers Shortcut CMD+A
     */
    destroy() {
      he.remove(this.Editor.UI.nodes.redactor, "CMD+A");
    }
    /**
     * First CMD+A selects all input content by native behaviour,
     * next CMD+A keypress selects all blocks
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    handleCommandA(e) {
      if (this.Editor.RectangleSelection.clearSelection(), d.isNativeInput(e.target) && !this.readyToBlockSelection) {
        this.readyToBlockSelection = true;
        return;
      }
      const t = this.Editor.BlockManager.getBlock(e.target), o4 = t.inputs;
      if (o4.length > 1 && !this.readyToBlockSelection) {
        this.readyToBlockSelection = true;
        return;
      }
      if (o4.length === 1 && !this.needToSelectAll) {
        this.needToSelectAll = true;
        return;
      }
      this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = false, this.readyToBlockSelection = false) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = true);
    }
    /**
     * Select All Blocks
     * Each Block has selected setter that makes Block copyable
     */
    selectAllBlocks() {
      this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = true, this.Editor.InlineToolbar.close();
    }
  };
  var Re = class _Re extends y {
    /**
     * Allowed caret positions in input
     *
     * @static
     * @returns {{START: string, END: string, DEFAULT: string}}
     */
    get positions() {
      return {
        START: "start",
        END: "end",
        DEFAULT: "default"
      };
    }
    /**
     * Elements styles that can be useful for Caret Module
     */
    static get CSS() {
      return {
        shadowCaret: "cdx-shadow-caret"
      };
    }
    /**
     * Method gets Block instance and puts caret to the text node with offset
     * There two ways that method applies caret position:
     *   - first found text node: sets at the beginning, but you can pass an offset
     *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
     *
     * @param {Block} block - Block class
     * @param {string} position - position where to set caret.
     *                            If default - leave default behaviour and apply offset if it's passed
     * @param {number} offset - caret offset regarding to the text node
     */
    setToBlock(e, t = this.positions.DEFAULT, o4 = 0) {
      var c5;
      const { BlockManager: i, BlockSelection: s6 } = this.Editor;
      if (s6.clearSelection(), !e.focusable) {
        (c5 = window.getSelection()) == null || c5.removeAllRanges(), s6.selectBlock(e), i.currentBlock = e;
        return;
      }
      let r3;
      switch (t) {
        case this.positions.START:
          r3 = e.firstInput;
          break;
        case this.positions.END:
          r3 = e.lastInput;
          break;
        default:
          r3 = e.currentInput;
      }
      if (!r3)
        return;
      const l3 = d.getDeepestNode(r3, t === this.positions.END), a6 = d.getContentLength(l3);
      switch (true) {
        case t === this.positions.START:
          o4 = 0;
          break;
        case t === this.positions.END:
        case o4 > a6:
          o4 = a6;
          break;
      }
      this.set(l3, o4), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = r3;
    }
    /**
     * Set caret to the current input of current Block.
     *
     * @param {HTMLElement} input - input where caret should be set
     * @param {string} position - position of the caret.
     *                            If default - leave default behaviour and apply offset if it's passed
     * @param {number} offset - caret offset regarding to the text node
     */
    setToInput(e, t = this.positions.DEFAULT, o4 = 0) {
      const { currentBlock: i } = this.Editor.BlockManager, s6 = d.getDeepestNode(e);
      switch (t) {
        case this.positions.START:
          this.set(s6, 0);
          break;
        case this.positions.END:
          this.set(s6, d.getContentLength(s6));
          break;
        default:
          o4 && this.set(s6, o4);
      }
      i.currentInput = e;
    }
    /**
     * Creates Document Range and sets caret to the element with offset
     *
     * @param {HTMLElement} element - target node.
     * @param {number} offset - offset
     */
    set(e, t = 0) {
      const { top: i, bottom: s6 } = b.setCursor(e, t), { innerHeight: r3 } = window;
      i < 0 ? window.scrollBy(0, i - 30) : s6 > r3 && window.scrollBy(0, s6 - r3 + 30);
    }
    /**
     * Set Caret to the last Block
     * If last block is not empty, append another empty block
     */
    setToTheLastBlock() {
      const e = this.Editor.BlockManager.lastBlock;
      if (e)
        if (e.tool.isDefault && e.isEmpty)
          this.setToBlock(e);
        else {
          const t = this.Editor.BlockManager.insertAtEnd();
          this.setToBlock(t);
        }
    }
    /**
     * Extract content fragment of current Block from Caret position to the end of the Block
     */
    extractFragmentFromCaretPosition() {
      const e = b.get();
      if (e.rangeCount) {
        const t = e.getRangeAt(0), o4 = this.Editor.BlockManager.currentBlock.currentInput;
        if (t.deleteContents(), o4)
          if (d.isNativeInput(o4)) {
            const i = o4, s6 = document.createDocumentFragment(), r3 = i.value.substring(0, i.selectionStart), l3 = i.value.substring(i.selectionStart);
            return s6.textContent = l3, i.value = r3, s6;
          } else {
            const i = t.cloneRange();
            return i.selectNodeContents(o4), i.setStart(t.endContainer, t.endOffset), i.extractContents();
          }
      }
    }
    /**
     * Set's caret to the next Block or Tool`s input
     * Before moving caret, we should check if caret position is at the end of Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @param {boolean} force - pass true to skip check for caret position
     */
    navigateNext(e = false) {
      const { BlockManager: t } = this.Editor, { currentBlock: o4, nextBlock: i } = t;
      if (o4 === void 0)
        return false;
      const { nextInput: s6, currentInput: r3 } = o4, l3 = r3 !== void 0 ? Ae(r3) : void 0;
      let a6 = i;
      const c5 = e || l3 || !o4.focusable;
      if (s6 && c5)
        return this.setToInput(s6, this.positions.START), true;
      if (a6 === null) {
        if (o4.tool.isDefault || !c5)
          return false;
        a6 = t.insertAtEnd();
      }
      return c5 ? (this.setToBlock(a6, this.positions.START), true) : false;
    }
    /**
     * Set's caret to the previous Tool`s input or Block
     * Before moving caret, we should check if caret position is start of the Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @param {boolean} force - pass true to skip check for caret position
     */
    navigatePrevious(e = false) {
      const { currentBlock: t, previousBlock: o4 } = this.Editor.BlockManager;
      if (!t)
        return false;
      const { previousInput: i, currentInput: s6 } = t, r3 = s6 !== void 0 ? Me(s6) : void 0, l3 = e || r3 || !t.focusable;
      return i && l3 ? (this.setToInput(i, this.positions.END), true) : o4 !== null && l3 ? (this.setToBlock(o4, this.positions.END), true) : false;
    }
    /**
     * Inserts shadow element after passed element where caret can be placed
     *
     * @param {Element} element - element after which shadow caret should be inserted
     */
    createShadow(e) {
      const t = document.createElement("span");
      t.classList.add(_Re.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
    }
    /**
     * Restores caret position
     *
     * @param {HTMLElement} element - element where caret should be restored
     */
    restoreCaret(e) {
      const t = e.querySelector(`.${_Re.CSS.shadowCaret}`);
      if (!t)
        return;
      new b().expandToTag(t);
      const i = document.createRange();
      i.selectNode(t), i.extractContents();
    }
    /**
     * Inserts passed content at caret position
     *
     * @param {string} content - content to insert
     */
    insertContentAtCaretPosition(e) {
      const t = document.createDocumentFragment(), o4 = document.createElement("div"), i = b.get(), s6 = b.range;
      o4.innerHTML = e, Array.from(o4.childNodes).forEach((c5) => t.appendChild(c5)), t.childNodes.length === 0 && t.appendChild(new Text());
      const r3 = t.lastChild;
      s6.deleteContents(), s6.insertNode(t);
      const l3 = document.createRange(), a6 = r3.nodeType === Node.TEXT_NODE ? r3 : r3.firstChild;
      a6 !== null && a6.textContent !== null && l3.setStart(a6, a6.textContent.length), i.removeAllRanges(), i.addRange(l3);
    }
  };
  var os = class extends y {
    constructor() {
      super(...arguments), this.onMouseUp = () => {
        this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
      }, this.onMouseOver = (e) => {
        const { BlockManager: t, BlockSelection: o4 } = this.Editor;
        if (e.relatedTarget === null && e.target === null)
          return;
        const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, s6 = t.getBlockByChildNode(e.target);
        if (!(!i || !s6) && s6 !== i) {
          if (i === this.firstSelectedBlock) {
            b.get().removeAllRanges(), i.selected = true, s6.selected = true, o4.clearCache();
            return;
          }
          if (s6 === this.firstSelectedBlock) {
            i.selected = false, s6.selected = false, o4.clearCache();
            return;
          }
          this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, s6), this.lastSelectedBlock = s6;
        }
      };
    }
    /**
     * Module preparation
     *
     * @returns {Promise}
     */
    async prepare() {
      this.listeners.on(document, "mousedown", (e) => {
        this.enableCrossBlockSelection(e);
      });
    }
    /**
     * Sets up listeners
     *
     * @param {MouseEvent} event - mouse down event
     */
    watchSelection(e) {
      if (e.button !== wo.LEFT)
        return;
      const { BlockManager: t } = this.Editor;
      this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
    }
    /**
     * Return boolean is cross block selection started:
     * there should be at least 2 selected blocks
     */
    get isCrossBlockSelectionStarted() {
      return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
    }
    /**
     * Change selection state of the next Block
     * Used for CBS via Shift + arrow keys
     *
     * @param {boolean} next - if true, toggle next block. Previous otherwise
     */
    toggleBlockSelectedState(e = true) {
      const { BlockManager: t, BlockSelection: o4 } = this.Editor;
      this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = true, o4.clearCache(), b.get().removeAllRanges());
      const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), s6 = t.blocks[i];
      s6 && (this.lastSelectedBlock.selected !== s6.selected ? (s6.selected = true, o4.clearCache()) : (this.lastSelectedBlock.selected = false, o4.clearCache()), this.lastSelectedBlock = s6, this.Editor.InlineToolbar.close(), s6.holder.scrollIntoView({
        block: "nearest"
      }));
    }
    /**
     * Clear saved state
     *
     * @param {Event} reason - event caused clear of selection
     */
    clear(e) {
      const { BlockManager: t, BlockSelection: o4, Caret: i } = this.Editor, s6 = t.blocks.indexOf(this.firstSelectedBlock), r3 = t.blocks.indexOf(this.lastSelectedBlock);
      if (o4.anyBlockSelected && s6 > -1 && r3 > -1 && e && e instanceof KeyboardEvent)
        switch (e.keyCode) {
          case w.DOWN:
          case w.RIGHT:
            i.setToBlock(t.blocks[Math.max(s6, r3)], i.positions.END);
            break;
          case w.UP:
          case w.LEFT:
            i.setToBlock(t.blocks[Math.min(s6, r3)], i.positions.START);
            break;
          default:
            i.setToBlock(t.blocks[Math.max(s6, r3)], i.positions.END);
        }
      this.firstSelectedBlock = this.lastSelectedBlock = null;
    }
    /**
     * Enables Cross Block Selection
     *
     * @param {MouseEvent} event - mouse down event
     */
    enableCrossBlockSelection(e) {
      const { UI: t } = this.Editor;
      b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Change blocks selection state between passed two blocks.
     *
     * @param {Block} firstBlock - first block in range
     * @param {Block} lastBlock - last block in range
     */
    toggleBlocksSelectedState(e, t) {
      const { BlockManager: o4, BlockSelection: i } = this.Editor, s6 = o4.blocks.indexOf(e), r3 = o4.blocks.indexOf(t), l3 = e.selected !== t.selected;
      for (let a6 = Math.min(s6, r3); a6 <= Math.max(s6, r3); a6++) {
        const c5 = o4.blocks[a6];
        c5 !== this.firstSelectedBlock && c5 !== (l3 ? e : t) && (o4.blocks[a6].selected = !o4.blocks[a6].selected, i.clearCache());
      }
    }
  };
  var is = class extends y {
    constructor() {
      super(...arguments), this.isStartedAtEditor = false;
    }
    /**
     * Toggle read-only state
     *
     * if state is true:
     *  - disable all drag-n-drop event handlers
     *
     * if state is false:
     *  - restore drag-n-drop event handlers
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(e) {
      e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
     * Add drag events listeners to editor zone
     */
    enableModuleBindings() {
      const { UI: e } = this.Editor;
      this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
        await this.processDrop(t);
      }, true), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
        this.processDragStart();
      }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
        this.processDragOver(t);
      }, true);
    }
    /**
     * Unbind drag-n-drop event handlers
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Handle drop event
     *
     * @param {DragEvent} dropEvent - drop event
     */
    async processDrop(e) {
      const {
        BlockManager: t,
        Paste: o4,
        Caret: i
      } = this.Editor;
      e.preventDefault(), t.blocks.forEach((r3) => {
        r3.dropTarget = false;
      }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = false;
      const s6 = t.setCurrentBlockByChildNode(e.target);
      if (s6)
        this.Editor.Caret.setToBlock(s6, i.positions.END);
      else {
        const r3 = t.setCurrentBlockByChildNode(t.lastBlock.holder);
        this.Editor.Caret.setToBlock(r3, i.positions.END);
      }
      await o4.processDataTransfer(e.dataTransfer, true);
    }
    /**
     * Handle drag start event
     */
    processDragStart() {
      b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = true), this.Editor.InlineToolbar.close();
    }
    /**
     * @param {DragEvent} dragEvent - drag event
     */
    processDragOver(e) {
      e.preventDefault();
    }
  };
  var ss = 180;
  var ns = 400;
  var rs = class extends y {
    /**
     * Prepare the module
     *
     * @param options - options used by the modification observer module
     * @param options.config - Editor configuration object
     * @param options.eventsDispatcher - common Editor event bus
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.disabled = false, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = ns, this.mutationObserver = new MutationObserver((o4) => {
        this.redactorChanged(o4);
      }), this.eventsDispatcher.on(Dt, (o4) => {
        this.particularBlockChanged(o4.event);
      }), this.eventsDispatcher.on(Rt, () => {
        this.disable();
      }), this.eventsDispatcher.on(Ft, () => {
        this.enable();
      });
    }
    /**
     * Enables onChange event
     */
    enable() {
      this.mutationObserver.observe(
        this.Editor.UI.nodes.redactor,
        {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true
        }
      ), this.disabled = false;
    }
    /**
     * Disables onChange event
     */
    disable() {
      this.mutationObserver.disconnect(), this.disabled = true;
    }
    /**
     * Call onChange event passed to Editor.js configuration
     *
     * @param event - some of our custom change events
     */
    particularBlockChanged(e) {
      this.disabled || !O(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
        let t;
        this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
      }, this.batchTime));
    }
    /**
     * Fired on every blocks wrapper dom change
     *
     * @param mutations - mutations happened
     */
    redactorChanged(e) {
      this.eventsDispatcher.emit(Je, {
        mutations: e
      });
    }
  };
  var ro = class lo extends y {
    constructor() {
      super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
        try {
          const t = e.create({}, {}, false);
          if (e.pasteConfig === false) {
            this.exceptionList.push(e.name);
            return;
          }
          if (!O(t.onPaste))
            return;
          this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
        } catch (t) {
          I(
            `Paste handling for \xAB${e.name}\xBB Tool hasn't been set up because of the error`,
            "warn",
            t
          );
        }
      }, this.handlePasteEvent = async (e) => {
        const { BlockManager: t, Toolbar: o4 } = this.Editor, i = t.setCurrentBlockByChildNode(e.target);
        !i || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || i && this.exceptionList.includes(i.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), o4.close());
      };
    }
    /**
     * Set onPaste callback and collect tools` paste configurations
     */
    async prepare() {
      this.processTools();
    }
    /**
     * Set read-only state
     *
     * @param {boolean} readOnlyEnabled - read only flag value
     */
    toggleReadOnly(e) {
      e ? this.unsetCallback() : this.setCallback();
    }
    /**
     * Handle pasted or dropped data transfer object
     *
     * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
     * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
     */
    async processDataTransfer(e, t = false) {
      const { Tools: o4 } = this.Editor, i = e.types;
      if ((i.includes ? i.includes("Files") : i.contains("Files")) && !V(this.toolsFiles)) {
        await this.processFiles(e.files);
        return;
      }
      const r3 = e.getData(this.MIME_TYPE), l3 = e.getData("text/plain");
      let a6 = e.getData("text/html");
      if (r3)
        try {
          this.insertEditorJSData(JSON.parse(r3));
          return;
        } catch {
        }
      t && l3.trim() && a6.trim() && (a6 = "<p>" + (a6.trim() ? a6 : l3) + "</p>");
      const c5 = Object.keys(this.toolsTags).reduce((p2, g4) => (p2[g4.toLowerCase()] = this.toolsTags[g4].sanitizationConfig ?? {}, p2), {}), u2 = Object.assign({}, c5, o4.getAllInlineToolsSanitizeConfig(), { br: {} }), h5 = q(a6, u2);
      !h5.trim() || h5.trim() === l3 || !d.isHTMLString(h5) ? await this.processText(l3) : await this.processText(h5, true);
    }
    /**
     * Process pasted text and divide them into Blocks
     *
     * @param {string} data - text to process. Can be HTML or plain.
     * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
     */
    async processText(e, t = false) {
      const { Caret: o4, BlockManager: i } = this.Editor, s6 = t ? this.processHTML(e) : this.processPlain(e);
      if (!s6.length)
        return;
      if (s6.length === 1) {
        s6[0].isBlock ? this.processSingleBlock(s6.pop()) : this.processInlinePaste(s6.pop());
        return;
      }
      const l3 = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
      s6.map(
        async (a6, c5) => this.insertBlock(a6, c5 === 0 && l3)
      ), i.currentBlock && o4.setToBlock(i.currentBlock, o4.positions.END);
    }
    /**
     * Set onPaste callback handler
     */
    setCallback() {
      this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
     * Unset onPaste callback handler
     */
    unsetCallback() {
      this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
     * Get and process tool`s paste configs
     */
    processTools() {
      const e = this.Editor.Tools.blockTools;
      Array.from(e.values()).forEach(this.processTool);
    }
    /**
     * Get tags name list from either tag name or sanitization config.
     *
     * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
     * @returns {string[]} array of tags.
     */
    collectTagNames(e) {
      return Q(e) ? [e] : R(e) ? Object.keys(e) : [];
    }
    /**
     * Get tags to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getTagsConfig(e) {
      if (e.pasteConfig === false)
        return;
      const t = e.pasteConfig.tags || [], o4 = [];
      t.forEach((i) => {
        const s6 = this.collectTagNames(i);
        o4.push(...s6), s6.forEach((r3) => {
          if (Object.prototype.hasOwnProperty.call(this.toolsTags, r3)) {
            I(
              `Paste handler for \xAB${e.name}\xBB Tool on \xAB${r3}\xBB tag is skipped because it is already used by \xAB${this.toolsTags[r3].tool.name}\xBB Tool.`,
              "warn"
            );
            return;
          }
          const l3 = R(i) ? i[r3] : null;
          this.toolsTags[r3.toUpperCase()] = {
            tool: e,
            sanitizationConfig: l3
          };
        });
      }), this.tagsByTool[e.name] = o4.map((i) => i.toUpperCase());
    }
    /**
     * Get files` types and extensions to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getFilesConfig(e) {
      if (e.pasteConfig === false)
        return;
      const { files: t = {} } = e.pasteConfig;
      let { extensions: o4, mimeTypes: i } = t;
      !o4 && !i || (o4 && !Array.isArray(o4) && (I(`\xABextensions\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), o4 = []), i && !Array.isArray(i) && (I(`\xABmimeTypes\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), i = []), i && (i = i.filter((s6) => To(s6) ? true : (I(`MIME type value \xAB${s6}\xBB for the \xAB${e.name}\xBB Tool is not a valid MIME type`, "warn"), false))), this.toolsFiles[e.name] = {
        extensions: o4 || [],
        mimeTypes: i || []
      });
    }
    /**
     * Get RegExp patterns to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getPatternsConfig(e) {
      e.pasteConfig === false || !e.pasteConfig.patterns || V(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([t, o4]) => {
        o4 instanceof RegExp || I(
          `Pattern ${o4} for \xAB${e.name}\xBB Tool is skipped because it should be a Regexp instance.`,
          "warn"
        ), this.toolsPatterns.push({
          key: t,
          pattern: o4,
          tool: e
        });
      });
    }
    /**
     * Check if browser behavior suits better
     *
     * @param {EventTarget} element - element where content has been pasted
     * @returns {boolean}
     */
    isNativeBehaviour(e) {
      return d.isNativeInput(e);
    }
    /**
     * Get files from data transfer object and insert related Tools
     *
     * @param {FileList} items - pasted or dropped items
     */
    async processFiles(e) {
      const { BlockManager: t } = this.Editor;
      let o4;
      o4 = await Promise.all(
        Array.from(e).map((r3) => this.processFile(r3))
      ), o4 = o4.filter((r3) => !!r3);
      const s6 = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
      o4.forEach(
        (r3, l3) => {
          t.paste(r3.type, r3.event, l3 === 0 && s6);
        }
      );
    }
    /**
     * Get information about file and find Tool to handle it
     *
     * @param {File} file - file to process
     */
    async processFile(e) {
      const t = Bo(e), o4 = Object.entries(this.toolsFiles).find(([r3, { mimeTypes: l3, extensions: a6 }]) => {
        const [c5, u2] = e.type.split("/"), h5 = a6.find((g4) => g4.toLowerCase() === t.toLowerCase()), p2 = l3.find((g4) => {
          const [f3, k4] = g4.split("/");
          return f3 === c5 && (k4 === u2 || k4 === "*");
        });
        return !!h5 || !!p2;
      });
      if (!o4)
        return;
      const [i] = o4;
      return {
        event: this.composePasteEvent("file", {
          file: e
        }),
        type: i
      };
    }
    /**
     * Split HTML string to blocks and return it as array of Block data
     *
     * @param {string} innerHTML - html string to process
     * @returns {PasteData[]}
     */
    processHTML(e) {
      const { Tools: t } = this.Editor, o4 = d.make("DIV");
      return o4.innerHTML = e, this.getNodes(o4).map((s6) => {
        let r3, l3 = t.defaultTool, a6 = false;
        switch (s6.nodeType) {
          case Node.DOCUMENT_FRAGMENT_NODE:
            r3 = d.make("div"), r3.appendChild(s6);
            break;
          case Node.ELEMENT_NODE:
            r3 = s6, a6 = true, this.toolsTags[r3.tagName] && (l3 = this.toolsTags[r3.tagName].tool);
            break;
        }
        const { tags: c5 } = l3.pasteConfig || { tags: [] }, u2 = c5.reduce((g4, f3) => (this.collectTagNames(f3).forEach((C4) => {
          const S5 = R(f3) ? f3[C4] : null;
          g4[C4.toLowerCase()] = S5 || {};
        }), g4), {}), h5 = Object.assign({}, u2, l3.baseSanitizeConfig);
        if (r3.tagName.toLowerCase() === "table") {
          const g4 = q(r3.outerHTML, h5);
          r3 = d.make("div", void 0, {
            innerHTML: g4
          }).firstChild;
        } else
          r3.innerHTML = q(r3.innerHTML, h5);
        const p2 = this.composePasteEvent("tag", {
          data: r3
        });
        return {
          content: r3,
          isBlock: a6,
          tool: l3.name,
          event: p2
        };
      }).filter((s6) => {
        const r3 = d.isEmpty(s6.content), l3 = d.isSingleTag(s6.content);
        return !r3 || l3;
      });
    }
    /**
     * Split plain text by new line symbols and return it as array of Block data
     *
     * @param {string} plain - string to process
     * @returns {PasteData[]}
     */
    processPlain(e) {
      const { defaultBlock: t } = this.config;
      if (!e)
        return [];
      const o4 = t;
      return e.split(/\r?\n/).filter((i) => i.trim()).map((i) => {
        const s6 = d.make("div");
        s6.textContent = i;
        const r3 = this.composePasteEvent("tag", {
          data: s6
        });
        return {
          content: s6,
          tool: o4,
          isBlock: false,
          event: r3
        };
      });
    }
    /**
     * Process paste of single Block tool content
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    async processSingleBlock(e) {
      const { Caret: t, BlockManager: o4 } = this.Editor, { currentBlock: i } = o4;
      if (!i || e.tool !== i.name || !d.containsOnlyInlineElements(e.content.innerHTML)) {
        this.insertBlock(e, (i == null ? void 0 : i.tool.isDefault) && i.isEmpty);
        return;
      }
      t.insertContentAtCaretPosition(e.content.innerHTML);
    }
    /**
     * Process paste to single Block:
     * 1. Find patterns` matches
     * 2. Insert new block if it is not the same type as current one
     * 3. Just insert text if there is no substitutions
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    async processInlinePaste(e) {
      const { BlockManager: t, Caret: o4 } = this.Editor, { content: i } = e;
      if (t.currentBlock && t.currentBlock.tool.isDefault && i.textContent.length < lo.PATTERN_PROCESSING_MAX_LENGTH) {
        const r3 = await this.processPattern(i.textContent);
        if (r3) {
          const l3 = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty, a6 = t.paste(r3.tool, r3.event, l3);
          o4.setToBlock(a6, o4.positions.END);
          return;
        }
      }
      if (t.currentBlock && t.currentBlock.currentInput) {
        const r3 = t.currentBlock.tool.baseSanitizeConfig;
        document.execCommand(
          "insertHTML",
          false,
          q(i.innerHTML, r3)
        );
      } else
        this.insertBlock(e);
    }
    /**
     * Get patterns` matches
     *
     * @param {string} text - text to process
     * @returns {Promise<{event: PasteEvent, tool: string}>}
     */
    async processPattern(e) {
      const t = this.toolsPatterns.find((i) => {
        const s6 = i.pattern.exec(e);
        return s6 ? e === s6.shift() : false;
      });
      return t ? {
        event: this.composePasteEvent("pattern", {
          key: t.key,
          data: e
        }),
        tool: t.tool.name
      } : void 0;
    }
    /**
     * Insert pasted Block content to Editor
     *
     * @param {PasteData} data - data to insert
     * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
     * @returns {void}
     */
    insertBlock(e, t = false) {
      const { BlockManager: o4, Caret: i } = this.Editor, { currentBlock: s6 } = o4;
      let r3;
      if (t && s6 && s6.isEmpty) {
        r3 = o4.paste(e.tool, e.event, true), i.setToBlock(r3, i.positions.END);
        return;
      }
      r3 = o4.paste(e.tool, e.event), i.setToBlock(r3, i.positions.END);
    }
    /**
     * Insert data passed as application/x-editor-js JSON
     *
     * @param {Array} blocks — Blocks' data to insert
     * @returns {void}
     */
    insertEditorJSData(e) {
      const { BlockManager: t, Caret: o4, Tools: i } = this.Editor;
      it(
        e,
        (r3) => i.blockTools.get(r3).sanitizeConfig
      ).forEach(({ tool: r3, data: l3 }, a6) => {
        let c5 = false;
        a6 === 0 && (c5 = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
        const u2 = t.insert({
          tool: r3,
          data: l3,
          replace: c5
        });
        o4.setToBlock(u2, o4.positions.END);
      });
    }
    /**
     * Fetch nodes from Element node
     *
     * @param {Node} node - current node
     * @param {Node[]} nodes - processed nodes
     * @param {Node} destNode - destination node
     */
    processElementNode(e, t, o4) {
      const i = Object.keys(this.toolsTags), s6 = e, { tool: r3 } = this.toolsTags[s6.tagName] || {}, l3 = this.tagsByTool[r3 == null ? void 0 : r3.name] || [], a6 = i.includes(s6.tagName), c5 = d.blockElements.includes(s6.tagName.toLowerCase()), u2 = Array.from(s6.children).some(
        ({ tagName: p2 }) => i.includes(p2) && !l3.includes(p2)
      ), h5 = Array.from(s6.children).some(
        ({ tagName: p2 }) => d.blockElements.includes(p2.toLowerCase())
      );
      if (!c5 && !a6 && !u2)
        return o4.appendChild(s6), [...t, o4];
      if (a6 && !u2 || c5 && !h5 && !u2)
        return [...t, o4, s6];
    }
    /**
     * Recursively divide HTML string to two types of nodes:
     * 1. Block element
     * 2. Document Fragments contained text and markup tags like a, b, i etc.
     *
     * @param {Node} wrapper - wrapper of paster HTML content
     * @returns {Node[]}
     */
    getNodes(e) {
      const t = Array.from(e.childNodes);
      let o4;
      const i = (s6, r3) => {
        if (d.isEmpty(r3) && !d.isSingleTag(r3))
          return s6;
        const l3 = s6[s6.length - 1];
        let a6 = new DocumentFragment();
        switch (l3 && d.isFragment(l3) && (a6 = s6.pop()), r3.nodeType) {
          case Node.ELEMENT_NODE:
            if (o4 = this.processElementNode(r3, s6, a6), o4)
              return o4;
            break;
          case Node.TEXT_NODE:
            return a6.appendChild(r3), [...s6, a6];
          default:
            return [...s6, a6];
        }
        return [...s6, ...Array.from(r3.childNodes).reduce(i, [])];
      };
      return t.reduce(i, []);
    }
    /**
     * Compose paste event with passed type and detail
     *
     * @param {string} type - event type
     * @param {PasteEventDetail} detail - event detail
     */
    composePasteEvent(e, t) {
      return new CustomEvent(e, {
        detail: t
      });
    }
  };
  ro.PATTERN_PROCESSING_MAX_LENGTH = 450;
  var ls = ro;
  var as = class extends y {
    constructor() {
      super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = false;
    }
    /**
     * Returns state of read only mode
     */
    get isEnabled() {
      return this.readOnlyEnabled;
    }
    /**
     * Set initial state
     */
    async prepare() {
      const { Tools: e } = this.Editor, { blockTools: t } = e, o4 = [];
      Array.from(t.entries()).forEach(([i, s6]) => {
        s6.isReadOnlySupported || o4.push(i);
      }), this.toolsDontSupportReadOnly = o4, this.config.readOnly && o4.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, true);
    }
    /**
     * Set read-only mode or toggle current state
     * Call all Modules `toggleReadOnly` method and re-render Editor
     *
     * @param state - (optional) read-only state or toggle
     * @param isInitial - (optional) true when editor is initializing
     */
    async toggle(e = !this.readOnlyEnabled, t = false) {
      e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
      const o4 = this.readOnlyEnabled;
      this.readOnlyEnabled = e;
      for (const s6 in this.Editor)
        this.Editor[s6].toggleReadOnly && this.Editor[s6].toggleReadOnly(e);
      if (o4 === e)
        return this.readOnlyEnabled;
      if (t)
        return this.readOnlyEnabled;
      this.Editor.ModificationsObserver.disable();
      const i = await this.Editor.Saver.save();
      return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(i.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
    }
    /**
     * Throws an error about tools which don't support read-only mode
     */
    throwCriticalError() {
      throw new Pt(
        `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
      );
    }
  };
  var xe = class _xe extends y {
    constructor() {
      super(...arguments), this.isRectSelectionActivated = false, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = false, this.isScrolling = false, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
    }
    /**
     * CSS classes for the Block
     *
     * @returns {{wrapper: string, content: string}}
     */
    static get CSS() {
      return {
        overlay: "codex-editor-overlay",
        overlayContainer: "codex-editor-overlay__container",
        rect: "codex-editor-overlay__rectangle",
        topScrollZone: "codex-editor-overlay__scroll-zone--top",
        bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
      };
    }
    /**
     * Module Preparation
     * Creating rect and hang handlers
     */
    prepare() {
      this.enableModuleBindings();
    }
    /**
     * Init rect params
     *
     * @param {number} pageX - X coord of mouse
     * @param {number} pageY - Y coord of mouse
     */
    startSelection(e, t) {
      const o4 = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
      o4.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = false, this.clearSelection(), this.stackOfSelected = []);
      const s6 = [
        `.${D.CSS.content}`,
        `.${this.Editor.Toolbar.CSS.toolbar}`,
        `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
      ], r3 = o4.closest("." + this.Editor.UI.CSS.editorWrapper), l3 = s6.some((a6) => !!o4.closest(a6));
      !r3 || l3 || (this.mousedown = true, this.startX = e, this.startY = t);
    }
    /**
     * Clear all params to end selection
     */
    endSelection() {
      this.mousedown = false, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
    }
    /**
     * is RectSelection Activated
     */
    isRectActivated() {
      return this.isRectSelectionActivated;
    }
    /**
     * Mark that selection is end
     */
    clearSelection() {
      this.isRectSelectionActivated = false;
    }
    /**
     * Sets Module necessary event handlers
     */
    enableModuleBindings() {
      const { container: e } = this.genHTML();
      this.listeners.on(e, "mousedown", (t) => {
        this.processMouseDown(t);
      }, false), this.listeners.on(document.body, "mousemove", Ve((t) => {
        this.processMouseMove(t);
      }, 10), {
        passive: true
      }), this.listeners.on(document.body, "mouseleave", () => {
        this.processMouseLeave();
      }), this.listeners.on(window, "scroll", Ve((t) => {
        this.processScroll(t);
      }, 10), {
        passive: true
      }), this.listeners.on(document.body, "mouseup", () => {
        this.processMouseUp();
      }, false);
    }
    /**
     * Handle mouse down events
     *
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    processMouseDown(e) {
      if (e.button !== this.MAIN_MOUSE_BUTTON)
        return;
      e.target.closest(d.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
    }
    /**
     * Handle mouse move events
     *
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    processMouseMove(e) {
      this.changingRectangle(e), this.scrollByZones(e.clientY);
    }
    /**
     * Handle mouse leave
     */
    processMouseLeave() {
      this.clearSelection(), this.endSelection();
    }
    /**
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    processScroll(e) {
      this.changingRectangle(e);
    }
    /**
     * Handle mouse up
     */
    processMouseUp() {
      this.clearSelection(), this.endSelection();
    }
    /**
     * Scroll If mouse in scroll zone
     *
     * @param {number} clientY - Y coord of mouse
     */
    scrollByZones(e) {
      if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
        this.isScrolling = false;
        return;
      }
      this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = true);
    }
    /**
     * Generates required HTML elements
     *
     * @returns {Object<string, Element>}
     */
    genHTML() {
      const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o4 = d.make("div", _xe.CSS.overlay, {}), i = d.make("div", _xe.CSS.overlayContainer, {}), s6 = d.make("div", _xe.CSS.rect, {});
      return i.appendChild(s6), o4.appendChild(i), t.appendChild(o4), this.overlayRectangle = s6, {
        container: t,
        overlay: o4
      };
    }
    /**
     * Activates scrolling if blockSelection is active and mouse is in scroll zone
     *
     * @param {number} speed - speed of scrolling
     */
    scrollVertical(e) {
      if (!(this.inScrollZone && this.mousedown))
        return;
      const t = window.pageYOffset;
      window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
        this.scrollVertical(e);
      }, 0);
    }
    /**
     * Handles the change in the rectangle and its effect
     *
     * @param {MouseEvent} event - mouse event
     */
    changingRectangle(e) {
      if (!this.mousedown)
        return;
      e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
      const { rightPos: t, leftPos: o4, index: i } = this.genInfoForMouseSelection(), s6 = this.startX > t && this.mouseX > t, r3 = this.startX < o4 && this.mouseX < o4;
      this.rectCrossesBlocks = !(s6 || r3), this.isRectSelectionActivated || (this.rectCrossesBlocks = false, this.isRectSelectionActivated = true, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), b.get().removeAllRanges());
    }
    /**
     * Shrink rect to singular point
     */
    shrinkRectangleToPoint() {
      this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
    }
    /**
     * Select or unselect all of blocks in array if rect is out or in selectable area
     */
    inverseSelection() {
      const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
      if (this.rectCrossesBlocks && !t)
        for (const o4 of this.stackOfSelected)
          this.Editor.BlockSelection.selectBlockByIndex(o4);
      if (!this.rectCrossesBlocks && t)
        for (const o4 of this.stackOfSelected)
          this.Editor.BlockSelection.unSelectBlockByIndex(o4);
    }
    /**
     * Updates size of rectangle
     */
    updateRectangleSize() {
      this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
    }
    /**
     * Collects information needed to determine the behavior of the rectangle
     *
     * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
     */
    genInfoForMouseSelection() {
      const t = document.body.offsetWidth / 2, o4 = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t, o4), s6 = this.Editor.BlockManager.getBlockByChildNode(i);
      let r3;
      s6 !== void 0 && (r3 = this.Editor.BlockManager.blocks.findIndex((h5) => h5.holder === s6.holder));
      const l3 = this.Editor.BlockManager.lastBlock.holder.querySelector("." + D.CSS.content), a6 = Number.parseInt(window.getComputedStyle(l3).width, 10) / 2, c5 = t - a6, u2 = t + a6;
      return {
        index: r3,
        leftPos: c5,
        rightPos: u2
      };
    }
    /**
     * Select block with index index
     *
     * @param index - index of block in redactor
     */
    addBlockInSelection(e) {
      this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
    }
    /**
     * Adds a block to the selection and determines which blocks should be selected
     *
     * @param {object} index - index of new block in the reactor
     */
    trySelectNextBlock(e) {
      const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o4 = this.stackOfSelected.length, i = 1, s6 = -1, r3 = 0;
      if (t)
        return;
      const l3 = this.stackOfSelected[o4 - 1] - this.stackOfSelected[o4 - 2] > 0;
      let a6 = r3;
      o4 > 1 && (a6 = l3 ? i : s6);
      const c5 = e > this.stackOfSelected[o4 - 1] && a6 === i, u2 = e < this.stackOfSelected[o4 - 1] && a6 === s6, p2 = !(c5 || u2 || a6 === r3);
      if (!p2 && (e > this.stackOfSelected[o4 - 1] || this.stackOfSelected[o4 - 1] === void 0)) {
        let k4 = this.stackOfSelected[o4 - 1] + 1 || e;
        for (k4; k4 <= e; k4++)
          this.addBlockInSelection(k4);
        return;
      }
      if (!p2 && e < this.stackOfSelected[o4 - 1]) {
        for (let k4 = this.stackOfSelected[o4 - 1] - 1; k4 >= e; k4--)
          this.addBlockInSelection(k4);
        return;
      }
      if (!p2)
        return;
      let g4 = o4 - 1, f3;
      for (e > this.stackOfSelected[o4 - 1] ? f3 = () => e > this.stackOfSelected[g4] : f3 = () => e < this.stackOfSelected[g4]; f3(); )
        this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g4]), this.stackOfSelected.pop(), g4--;
    }
  };
  var cs = class extends y {
    /**
     * Renders passed blocks as one batch
     *
     * @param blocksData - blocks to render
     */
    async render(e) {
      return new Promise((t) => {
        const { Tools: o4, BlockManager: i } = this.Editor;
        if (e.length === 0)
          i.insert();
        else {
          const s6 = e.map(({ type: r3, data: l3, tunes: a6, id: c5 }) => {
            o4.available.has(r3) === false && (X(`Tool \xAB${r3}\xBB is not found. Check 'tools' property at the Editor.js config.`, "warn"), l3 = this.composeStubDataForTool(r3, l3, c5), r3 = o4.stubTool);
            let u2;
            try {
              u2 = i.composeBlock({
                id: c5,
                tool: r3,
                data: l3,
                tunes: a6
              });
            } catch (h5) {
              I(`Block \xAB${r3}\xBB skipped because of plugins error`, "error", {
                data: l3,
                error: h5
              }), l3 = this.composeStubDataForTool(r3, l3, c5), r3 = o4.stubTool, u2 = i.composeBlock({
                id: c5,
                tool: r3,
                data: l3,
                tunes: a6
              });
            }
            return u2;
          });
          i.insertMany(s6);
        }
        window.requestIdleCallback(() => {
          t();
        }, { timeout: 2e3 });
      });
    }
    /**
     * Create data for the Stub Tool that will be used instead of unavailable tool
     *
     * @param tool - unavailable tool name to stub
     * @param data - data of unavailable block
     * @param [id] - id of unavailable block
     */
    composeStubDataForTool(e, t, o4) {
      const { Tools: i } = this.Editor;
      let s6 = e;
      if (i.unavailable.has(e)) {
        const r3 = i.unavailable.get(e).toolbox;
        r3 !== void 0 && r3[0].title !== void 0 && (s6 = r3[0].title);
      }
      return {
        savedData: {
          id: o4,
          type: e,
          data: t
        },
        title: s6
      };
    }
  };
  var ds = class extends y {
    /**
     * Composes new chain of Promises to fire them alternatelly
     *
     * @returns {OutputData}
     */
    async save() {
      const { BlockManager: e, Tools: t } = this.Editor, o4 = e.blocks, i = [];
      try {
        o4.forEach((l3) => {
          i.push(this.getSavedData(l3));
        });
        const s6 = await Promise.all(i), r3 = await it(s6, (l3) => t.blockTools.get(l3).sanitizeConfig);
        return this.makeOutput(r3);
      } catch (s6) {
        X("Saving failed due to the Error %o", "error", s6);
      }
    }
    /**
     * Saves and validates
     *
     * @param {Block} block - Editor's Tool
     * @returns {ValidatedData} - Tool's validated data
     */
    async getSavedData(e) {
      const t = await e.save(), o4 = t && await e.validate(t.data);
      return {
        ...t,
        isValid: o4
      };
    }
    /**
     * Creates output object with saved data, time and version of editor
     *
     * @param {ValidatedData} allExtractedData - data extracted from Blocks
     * @returns {OutputData}
     */
    makeOutput(e) {
      const t = [];
      return e.forEach(({ id: o4, tool: i, data: s6, tunes: r3, isValid: l3 }) => {
        if (!l3) {
          I(`Block \xAB${i}\xBB skipped because saved data is invalid`);
          return;
        }
        if (i === this.Editor.Tools.stubTool) {
          t.push(s6);
          return;
        }
        const a6 = {
          id: o4,
          type: i,
          data: s6,
          ...!V(r3) && {
            tunes: r3
          }
        };
        t.push(a6);
      }), {
        time: +/* @__PURE__ */ new Date(),
        blocks: t,
        version: "2.30.7"
      };
    }
  };
  (function() {
    try {
      if (typeof document < "u") {
        var n3 = document.createElement("style");
        n3.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n3);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var hs = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
  function us(n3) {
    const e = document.createElement("div");
    e.innerHTML = n3.trim();
    const t = document.createDocumentFragment();
    return t.append(...Array.from(e.childNodes)), t;
  }
  var ht = class _ht {
    /**
     * Default placeholder for Paragraph Tool
     *
     * @returns {string}
     * @class
     */
    static get DEFAULT_PLACEHOLDER() {
      return "";
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - constructor params
     * @param {ParagraphData} params.data - previously saved data
     * @param {ParagraphConfig} params.config - user config for Tool
     * @param {object} params.api - editor.js api
     * @param {boolean} readOnly - read only mode flag
     */
    constructor({ data: e, config: t, api: o4, readOnly: i }) {
      this.api = o4, this.readOnly = i, this._CSS = {
        block: this.api.styles.block,
        wrapper: "ce-paragraph"
      }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : _ht.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? false;
    }
    /**
     * Check if text content is empty and set empty string to inner html.
     * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
     *
     * @param {KeyboardEvent} e - key up event
     */
    onKeyUp(e) {
      if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
        return;
      const { textContent: t } = this._element;
      t === "" && (this._element.innerHTML = "");
    }
    /**
     * Create Tool's view
     *
     * @returns {HTMLDivElement}
     * @private
     */
    drawView() {
      const e = document.createElement("DIV");
      return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render() {
      return this._element = this.drawView(), this._element;
    }
    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {ParagraphData} data
     * @public
     */
    merge(e) {
      if (!this._element)
        return;
      this._data.text += e.text;
      const t = us(e.text);
      this._element.appendChild(t), this._element.normalize();
    }
    /**
     * Validate Paragraph block data:
     * - check for emptiness
     *
     * @param {ParagraphData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(e) {
      return !(e.text.trim() === "" && !this._preserveBlank);
    }
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {ParagraphData} - saved data
     * @public
     */
    save(e) {
      return {
        text: e.innerHTML
      };
    }
    /**
     * On paste callback fired from Editor.
     *
     * @param {HTMLPasteEvent} event - event with pasted data
     */
    onPaste(e) {
      const t = {
        text: e.detail.data.innerHTML
      };
      this._data = t, window.requestAnimationFrame(() => {
        this._element && (this._element.innerHTML = this._data.text || "");
      });
    }
    /**
     * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
     * @returns {ConversionConfig}
     */
    static get conversionConfig() {
      return {
        export: "text",
        // to convert Paragraph to other block, use 'text' property of saved data
        import: "text"
        // to covert other block's exported string to Paragraph, fill 'text' property of tool data
      };
    }
    /**
     * Sanitizer rules
     * @returns {SanitizerConfig} - Edtior.js sanitizer config
     */
    static get sanitize() {
      return {
        text: {
          br: true
        }
      };
    }
    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Used by Editor paste handling API.
     * Provides configuration to handle P tags.
     *
     * @returns {PasteConfig} - Paragraph Paste Setting
     */
    static get pasteConfig() {
      return {
        tags: ["P"]
      };
    }
    /**
     * Icon and title for displaying at the Toolbox
     *
     * @returns {ToolboxConfig} - Paragraph Toolbox Setting
     */
    static get toolbox() {
      return {
        icon: hs,
        title: "Text"
      };
    }
  };
  var ut = class {
    constructor() {
      this.commandName = "bold";
    }
    /**
     * Sanitizer Rule
     * Leave <b> tags
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        b: {}
      };
    }
    /**
     * Create button for Inline Toolbar
     */
    render() {
      return {
        icon: bi,
        name: "bold",
        onActivate: () => {
          document.execCommand(this.commandName);
        },
        isActive: () => document.queryCommandState(this.commandName)
      };
    }
    /**
     * Set a shortcut
     *
     * @returns {boolean}
     */
    get shortcut() {
      return "CMD+B";
    }
  };
  ut.isInline = true;
  ut.title = "Bold";
  var pt = class {
    constructor() {
      this.commandName = "italic", this.CSS = {
        button: "ce-inline-tool",
        buttonActive: "ce-inline-tool--active",
        buttonModifier: "ce-inline-tool--italic"
      }, this.nodes = {
        button: null
      };
    }
    /**
     * Sanitizer Rule
     * Leave <i> tags
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        i: {}
      };
    }
    /**
     * Create button for Inline Toolbar
     */
    render() {
      return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Bi, this.nodes.button;
    }
    /**
     * Wrap range with <i> tag
     */
    surround() {
      document.execCommand(this.commandName);
    }
    /**
     * Check selection and set activated state to button if there are <i> tag
     */
    checkState() {
      const e = document.queryCommandState(this.commandName);
      return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
    }
    /**
     * Set a shortcut
     */
    get shortcut() {
      return "CMD+I";
    }
  };
  pt.isInline = true;
  pt.title = "Italic";
  var ft = class {
    /**
     * @param api - Editor.js API
     */
    constructor({ api: e }) {
      this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
        button: "ce-inline-tool",
        buttonActive: "ce-inline-tool--active",
        buttonModifier: "ce-inline-tool--link",
        buttonUnlink: "ce-inline-tool--unlink",
        input: "ce-inline-tool-input",
        inputShowed: "ce-inline-tool-input--showed"
      }, this.nodes = {
        button: null,
        input: null
      }, this.inputOpened = false, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
    }
    /**
     * Sanitizer Rule
     * Leave <a> tags
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        a: {
          href: true,
          target: "_blank",
          rel: "nofollow"
        }
      };
    }
    /**
     * Create button for Inline Toolbar
     */
    render() {
      return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = yt, this.nodes.button;
    }
    /**
     * Input for the link
     */
    renderActions() {
      return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
        e.keyCode === this.ENTER_KEY && this.enterPressed(e);
      }), this.nodes.input;
    }
    /**
     * Handle clicks on the Inline Toolbar icon
     *
     * @param {Range} range - range to wrap with link
     */
    surround(e) {
      if (e) {
        this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
        const t = this.selection.findParentTag("A");
        if (t) {
          this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
          return;
        }
      }
      this.toggleActions();
    }
    /**
     * Check selection and set activated state to button if there are <a> tag
     */
    checkState() {
      const e = this.selection.findParentTag("A");
      if (e) {
        this.nodes.button.innerHTML = Ii, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
        const t = e.getAttribute("href");
        this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
      } else
        this.nodes.button.innerHTML = yt, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
      return !!e;
    }
    /**
     * Function called with Inline Toolbar closing
     */
    clear() {
      this.closeActions();
    }
    /**
     * Set a shortcut
     */
    get shortcut() {
      return "CMD+K";
    }
    /**
     * Show/close link input
     */
    toggleActions() {
      this.inputOpened ? this.closeActions(false) : this.openActions(true);
    }
    /**
     * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
     */
    openActions(e = false) {
      this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = true;
    }
    /**
     * Close input
     *
     * @param {boolean} clearSavedSelection — we don't need to clear saved selection
     *                                        on toggle-clicks on the icon of opened Toolbar
     */
    closeActions(e = true) {
      if (this.selection.isFakeBackgroundEnabled) {
        const t = new b();
        t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
      }
      this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = false;
    }
    /**
     * Enter pressed on input
     *
     * @param {KeyboardEvent} event - enter keydown event
     */
    enterPressed(e) {
      let t = this.nodes.input.value || "";
      if (!t.trim()) {
        this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
        return;
      }
      if (!this.validateURL(t)) {
        this.notifier.show({
          message: "Pasted link is not valid.",
          style: "error"
        }), I("Incorrect Link pasted", "warn", t);
        return;
      }
      t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
    }
    /**
     * Detects if passed string is URL
     *
     * @param {string} str - string to validate
     * @returns {boolean}
     */
    validateURL(e) {
      return !/\s/.test(e);
    }
    /**
     * Process link before injection
     * - sanitize
     * - add protocol for links like 'google.com'
     *
     * @param {string} link - raw user input
     */
    prepareLink(e) {
      return e = e.trim(), e = this.addProtocol(e), e;
    }
    /**
     * Add 'http' protocol to the links like 'vc.ru', 'google.com'
     *
     * @param {string} link - string to process
     */
    addProtocol(e) {
      if (/^(\w+):(\/\/)?/.test(e))
        return e;
      const t = /^\/[^/\s]/.test(e), o4 = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
      return !t && !o4 && !i && (e = "http://" + e), e;
    }
    /**
     * Inserts <a> tag with "href"
     *
     * @param {string} link - "href" value
     */
    insertLink(e) {
      const t = this.selection.findParentTag("A");
      t && this.selection.expandToTag(t), document.execCommand(this.commandLink, false, e);
    }
    /**
     * Removes <a> tag
     */
    unlink() {
      document.execCommand(this.commandUnlink);
    }
  };
  ft.isInline = true;
  ft.title = "Link";
  var ao = class {
    /**
     * @param api - Editor.js API
     */
    constructor({ api: e }) {
      this.i18nAPI = e.i18n, this.blocksAPI = e.blocks, this.selectionAPI = e.selection, this.toolsAPI = e.tools, this.caretAPI = e.caret;
    }
    /**
     * Returns tool's UI config
     */
    async render() {
      const e = b.get(), t = this.blocksAPI.getBlockByElement(e.anchorNode);
      if (t === void 0)
        return [];
      const o4 = this.toolsAPI.getBlockTools(), i = await zt(t, o4);
      if (i.length === 0)
        return [];
      const s6 = i.reduce((c5, u2) => {
        var h5;
        return (h5 = u2.toolbox) == null || h5.forEach((p2) => {
          c5.push({
            icon: p2.icon,
            title: z.t(K.toolNames, p2.title),
            name: u2.name,
            closeOnActivate: true,
            onActivate: async () => {
              const g4 = await this.blocksAPI.convert(t.id, u2.name, p2.data);
              this.caretAPI.setToBlock(g4, "end");
            }
          });
        }), c5;
      }, []), r3 = await t.getActiveToolboxEntry(), l3 = r3 !== void 0 ? r3.icon : Kt, a6 = !pe();
      return {
        icon: l3,
        name: "convert-to",
        hint: {
          title: this.i18nAPI.t("Convert to")
        },
        children: {
          searchable: a6,
          items: s6,
          onOpen: () => {
            a6 && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
          },
          onClose: () => {
            a6 && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
          }
        }
      };
    }
  };
  ao.isInline = true;
  var co = class {
    /**
     * @param options - constructor options
     * @param options.data - stub tool data
     * @param options.api - Editor.js API
     */
    constructor({ data: e, api: t }) {
      this.CSS = {
        wrapper: "ce-stub",
        info: "ce-stub__info",
        title: "ce-stub__title",
        subtitle: "ce-stub__subtitle"
      }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
    }
    /**
     * Returns stub holder
     *
     * @returns {HTMLElement}
     */
    render() {
      return this.wrapper;
    }
    /**
     * Return original Tool data
     *
     * @returns {BlockToolData}
     */
    save() {
      return this.savedData;
    }
    /**
     * Create Tool html markup
     *
     * @returns {HTMLElement}
     */
    make() {
      const e = d.make("div", this.CSS.wrapper), t = Mi, o4 = d.make("div", this.CSS.info), i = d.make("div", this.CSS.title, {
        textContent: this.title
      }), s6 = d.make("div", this.CSS.subtitle, {
        textContent: this.subtitle
      });
      return e.innerHTML = t, o4.appendChild(i), o4.appendChild(s6), e.appendChild(o4), e;
    }
  };
  co.isReadOnlySupported = true;
  var ps = class extends dt {
    constructor() {
      super(...arguments), this.type = ne.Inline;
    }
    /**
     * Returns title for Inline Tool if specified by user
     */
    get title() {
      return this.constructable[ct.Title];
    }
    /**
     * Constructs new InlineTool instance from constructable
     */
    create() {
      return new this.constructable({
        api: this.api,
        config: this.settings
      });
    }
  };
  var fs = class extends dt {
    constructor() {
      super(...arguments), this.type = ne.Tune;
    }
    /**
     * Constructs new BlockTune instance from constructable
     *
     * @param data - Tune data
     * @param block - Block API object
     */
    create(e, t) {
      return new this.constructable({
        api: this.api,
        config: this.settings,
        block: t,
        data: e
      });
    }
  };
  var F = class _F extends Map {
    /**
     * Returns Block Tools collection
     */
    get blockTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
      return new _F(e);
    }
    /**
     * Returns Inline Tools collection
     */
    get inlineTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
      return new _F(e);
    }
    /**
     * Returns Block Tunes collection
     */
    get blockTunes() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
      return new _F(e);
    }
    /**
     * Returns internal Tools collection
     */
    get internalTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
      return new _F(e);
    }
    /**
     * Returns Tools collection provided by user
     */
    get externalTools() {
      const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
      return new _F(e);
    }
  };
  var gs = Object.defineProperty;
  var ms = Object.getOwnPropertyDescriptor;
  var ho = (n3, e, t, o4) => {
    for (var i = o4 > 1 ? void 0 : o4 ? ms(e, t) : e, s6 = n3.length - 1, r3; s6 >= 0; s6--)
      (r3 = n3[s6]) && (i = (o4 ? r3(e, t, i) : r3(i)) || i);
    return o4 && i && gs(e, t, i), i;
  };
  var gt = class extends dt {
    constructor() {
      super(...arguments), this.type = ne.Block, this.inlineTools = new F(), this.tunes = new F();
    }
    /**
     * Creates new Tool instance
     *
     * @param data - Tool data
     * @param block - BlockAPI for current Block
     * @param readOnly - True if Editor is in read-only mode
     */
    create(e, t, o4) {
      return new this.constructable({
        data: e,
        block: t,
        readOnly: o4,
        api: this.api,
        config: this.settings
      });
    }
    /**
     * Returns true if read-only mode is supported by Tool
     */
    get isReadOnlySupported() {
      return this.constructable[ce.IsReadOnlySupported] === true;
    }
    /**
     * Returns true if Tool supports linebreaks
     */
    get isLineBreaksEnabled() {
      return this.constructable[ce.IsEnabledLineBreaks];
    }
    /**
     * Returns Tool toolbox configuration (internal or user-specified).
     *
     * Merges internal and user-defined toolbox configs based on the following rules:
     *
     * - If both internal and user-defined toolbox configs are arrays their items are merged.
     * Length of the second one is kept.
     *
     * - If both are objects their properties are merged.
     *
     * - If one is an object and another is an array than internal config is replaced with user-defined
     * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
     */
    get toolbox() {
      const e = this.constructable[ce.Toolbox], t = this.config[Ie.Toolbox];
      if (!V(e) && t !== false)
        return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o4, i) => {
          const s6 = e[i];
          return s6 ? {
            ...s6,
            ...o4
          } : o4;
        }) : [t] : Array.isArray(t) ? t : [
          {
            ...e,
            ...t
          }
        ] : Array.isArray(e) ? e : [e];
    }
    /**
     * Returns Tool conversion configuration
     */
    get conversionConfig() {
      return this.constructable[ce.ConversionConfig];
    }
    /**
     * Returns enabled inline tools for Tool
     */
    get enabledInlineTools() {
      return this.config[Ie.EnabledInlineTools] || false;
    }
    /**
     * Returns enabled tunes for Tool
     */
    get enabledBlockTunes() {
      return this.config[Ie.EnabledBlockTunes];
    }
    /**
     * Returns Tool paste configuration
     */
    get pasteConfig() {
      return this.constructable[ce.PasteConfig] ?? {};
    }
    get sanitizeConfig() {
      const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
      if (V(e))
        return t;
      const o4 = {};
      for (const i in e)
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          const s6 = e[i];
          R(s6) ? o4[i] = Object.assign({}, t, s6) : o4[i] = s6;
        }
      return o4;
    }
    get baseSanitizeConfig() {
      const e = {};
      return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
    }
  };
  ho([
    ue
  ], gt.prototype, "sanitizeConfig", 1);
  ho([
    ue
  ], gt.prototype, "baseSanitizeConfig", 1);
  var bs = class {
    /**
     * @class
     * @param config - tools config
     * @param editorConfig - EditorJS config
     * @param api - EditorJS API module
     */
    constructor(e, t, o4) {
      this.api = o4, this.config = e, this.editorConfig = t;
    }
    /**
     * Returns Tool object based on it's type
     *
     * @param name - tool name
     */
    get(e) {
      const { class: t, isInternal: o4 = false, ...i } = this.config[e], s6 = this.getConstructor(t), r3 = t[et.IsTune];
      return new s6({
        name: e,
        constructable: t,
        config: i,
        api: this.api.getMethodsForTool(e, r3),
        isDefault: e === this.editorConfig.defaultBlock,
        defaultPlaceholder: this.editorConfig.placeholder,
        isInternal: o4
      });
    }
    /**
     * Find appropriate Tool object constructor for Tool constructable
     *
     * @param constructable - Tools constructable
     */
    getConstructor(e) {
      switch (true) {
        case e[ct.IsInline]:
          return ps;
        case e[et.IsTune]:
          return fs;
        default:
          return gt;
      }
    }
  };
  var uo = class {
    /**
     * MoveDownTune constructor
     *
     * @param {API} api — Editor's API
     */
    constructor({ api: e }) {
      this.CSS = {
        animation: "wobble"
      }, this.api = e;
    }
    /**
     * Tune's appearance in block settings menu
     */
    render() {
      return {
        icon: ki,
        title: this.api.i18n.t("Move down"),
        onActivate: () => this.handleClick(),
        name: "move-down"
      };
    }
    /**
     * Handle clicks on 'move down' button
     */
    handleClick() {
      const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
      if (!t)
        throw new Error("Unable to move Block down since it is already the last");
      const o4 = t.holder, i = o4.getBoundingClientRect();
      let s6 = Math.abs(window.innerHeight - o4.offsetHeight);
      i.top < window.innerHeight && (s6 = window.scrollY + o4.offsetHeight), window.scrollTo(0, s6), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(true);
    }
  };
  uo.isTune = true;
  var po = class {
    /**
     * DeleteTune constructor
     *
     * @param {API} api - Editor's API
     */
    constructor({ api: e }) {
      this.api = e;
    }
    /**
     * Tune's appearance in block settings menu
     */
    render() {
      return {
        icon: yi,
        title: this.api.i18n.t("Delete"),
        name: "delete",
        confirmation: {
          title: this.api.i18n.t("Click to delete"),
          onActivate: () => this.handleClick()
        }
      };
    }
    /**
     * Delete block conditions passed
     */
    handleClick() {
      this.api.blocks.delete();
    }
  };
  po.isTune = true;
  var fo = class {
    /**
     * MoveUpTune constructor
     *
     * @param {API} api - Editor's API
     */
    constructor({ api: e }) {
      this.CSS = {
        animation: "wobble"
      }, this.api = e;
    }
    /**
     * Tune's appearance in block settings menu
     */
    render() {
      return {
        icon: xi,
        title: this.api.i18n.t("Move up"),
        onActivate: () => this.handleClick(),
        name: "move-up"
      };
    }
    /**
     * Move current block up
     */
    handleClick() {
      const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o4 = this.api.blocks.getBlockByIndex(e - 1);
      if (e === 0 || !t || !o4)
        throw new Error("Unable to move Block up since it is already the first");
      const i = t.holder, s6 = o4.holder, r3 = i.getBoundingClientRect(), l3 = s6.getBoundingClientRect();
      let a6;
      l3.top > 0 ? a6 = Math.abs(r3.top) - Math.abs(l3.top) : a6 = Math.abs(r3.top) + l3.height, window.scrollBy(0, -1 * a6), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(true);
    }
  };
  fo.isTune = true;
  var ks = Object.defineProperty;
  var vs = Object.getOwnPropertyDescriptor;
  var ws = (n3, e, t, o4) => {
    for (var i = o4 > 1 ? void 0 : o4 ? vs(e, t) : e, s6 = n3.length - 1, r3; s6 >= 0; s6--)
      (r3 = n3[s6]) && (i = (o4 ? r3(e, t, i) : r3(i)) || i);
    return o4 && i && ks(e, t, i), i;
  };
  var go = class extends y {
    constructor() {
      super(...arguments), this.stubTool = "stub", this.toolsAvailable = new F(), this.toolsUnavailable = new F();
    }
    /**
     * Returns available Tools
     */
    get available() {
      return this.toolsAvailable;
    }
    /**
     * Returns unavailable Tools
     */
    get unavailable() {
      return this.toolsUnavailable;
    }
    /**
     * Return Tools for the Inline Toolbar
     */
    get inlineTools() {
      return this.available.inlineTools;
    }
    /**
     * Return editor block tools
     */
    get blockTools() {
      return this.available.blockTools;
    }
    /**
     * Return available Block Tunes
     *
     * @returns {object} - object of Inline Tool's classes
     */
    get blockTunes() {
      return this.available.blockTunes;
    }
    /**
     * Returns default Tool object
     */
    get defaultTool() {
      return this.blockTools.get(this.config.defaultBlock);
    }
    /**
     * Returns internal tools
     */
    get internal() {
      return this.available.internalTools;
    }
    /**
     * Creates instances via passed or default configuration
     *
     * @returns {Promise<void>}
     */
    async prepare() {
      if (this.validateTools(), this.config.tools = qe({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
        throw Error("Can't start without tools");
      const e = this.prepareConfig();
      this.factory = new bs(e, this.config, this.Editor.API);
      const t = this.getListOfPrepareFunctions(e);
      if (t.length === 0)
        return Promise.resolve();
      await Eo(t, (o4) => {
        this.toolPrepareMethodSuccess(o4);
      }, (o4) => {
        this.toolPrepareMethodFallback(o4);
      }), this.prepareBlockTools();
    }
    getAllInlineToolsSanitizeConfig() {
      const e = {};
      return Array.from(this.inlineTools.values()).forEach((t) => {
        Object.assign(e, t.sanitizeConfig);
      }), e;
    }
    /**
     * Calls each Tool reset method to clean up anything set by Tool
     */
    destroy() {
      Object.values(this.available).forEach(async (e) => {
        O(e.reset) && await e.reset();
      });
    }
    /**
     * Returns internal tools
     * Includes Bold, Italic, Link and Paragraph
     */
    get internalTools() {
      return {
        convertTo: {
          class: ao,
          isInternal: true
        },
        link: {
          class: ft,
          isInternal: true
        },
        bold: {
          class: ut,
          isInternal: true
        },
        italic: {
          class: pt,
          isInternal: true
        },
        paragraph: {
          class: ht,
          inlineToolbar: true,
          isInternal: true
        },
        stub: {
          class: co,
          isInternal: true
        },
        moveUp: {
          class: fo,
          isInternal: true
        },
        delete: {
          class: po,
          isInternal: true
        },
        moveDown: {
          class: uo,
          isInternal: true
        }
      };
    }
    /**
     * Tool prepare method success callback
     *
     * @param {object} data - append tool to available list
     */
    toolPrepareMethodSuccess(e) {
      const t = this.factory.get(e.toolName);
      if (t.isInline()) {
        const i = ["render"].filter((s6) => !t.create()[s6]);
        if (i.length) {
          I(
            `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
            "warn",
            i
          ), this.toolsUnavailable.set(t.name, t);
          return;
        }
      }
      this.toolsAvailable.set(t.name, t);
    }
    /**
     * Tool prepare method fail callback
     *
     * @param {object} data - append tool to unavailable list
     */
    toolPrepareMethodFallback(e) {
      this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
    }
    /**
     * Binds prepare function of plugins with user or default config
     *
     * @returns {Array} list of functions that needs to be fired sequentially
     * @param config - tools config
     */
    getListOfPrepareFunctions(e) {
      const t = [];
      return Object.entries(e).forEach(([o4, i]) => {
        t.push({
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          function: O(i.class.prepare) ? i.class.prepare : () => {
          },
          data: {
            toolName: o4,
            config: i.config
          }
        });
      }), t;
    }
    /**
     * Assign enabled Inline Tools and Block Tunes for Block Tool
     */
    prepareBlockTools() {
      Array.from(this.blockTools.values()).forEach((e) => {
        this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
      });
    }
    /**
     * Assign enabled Inline Tools for Block Tool
     *
     * @param tool - Block Tool
     */
    assignInlineToolsToBlockTool(e) {
      if (this.config.inlineToolbar !== false) {
        if (e.enabledInlineTools === true) {
          e.inlineTools = new F(
            Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
          );
          return;
        }
        Array.isArray(e.enabledInlineTools) && (e.inlineTools = new F(
          /** Prepend ConvertTo Inline Tool */
          ["convertTo", ...e.enabledInlineTools].map((t) => [t, this.inlineTools.get(t)])
        ));
      }
    }
    /**
     * Assign enabled Block Tunes for Block Tool
     *
     * @param tool — Block Tool
     */
    assignBlockTunesToBlockTool(e) {
      if (e.enabledBlockTunes !== false) {
        if (Array.isArray(e.enabledBlockTunes)) {
          const t = new F(
            e.enabledBlockTunes.map((o4) => [o4, this.blockTunes.get(o4)])
          );
          e.tunes = new F([...t, ...this.blockTunes.internalTools]);
          return;
        }
        if (Array.isArray(this.config.tunes)) {
          const t = new F(
            this.config.tunes.map((o4) => [o4, this.blockTunes.get(o4)])
          );
          e.tunes = new F([...t, ...this.blockTunes.internalTools]);
          return;
        }
        e.tunes = this.blockTunes.internalTools;
      }
    }
    /**
     * Validate Tools configuration objects and throw Error for user if it is invalid
     */
    validateTools() {
      for (const e in this.config.tools)
        if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
          if (e in this.internalTools)
            return;
          const t = this.config.tools[e];
          if (!O(t) && !O(t.class))
            throw Error(
              `Tool \xAB${e}\xBB must be a constructor function or an object with function in the \xABclass\xBB property`
            );
        }
    }
    /**
     * Unify tools config
     */
    prepareConfig() {
      const e = {};
      for (const t in this.config.tools)
        R(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
      return e;
    }
  };
  ws([
    ue
  ], go.prototype, "getAllInlineToolsSanitizeConfig", 1);
  var xs = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
  var ys = class extends y {
    constructor() {
      super(...arguments), this.isMobile = false, this.contentRectCache = void 0, this.resizeDebouncer = vt(() => {
        this.windowResize();
      }, 200);
    }
    /**
     * Editor.js UI CSS class names
     *
     * @returns {{editorWrapper: string, editorZone: string}}
     */
    get CSS() {
      return {
        editorWrapper: "codex-editor",
        editorWrapperNarrow: "codex-editor--narrow",
        editorZone: "codex-editor__redactor",
        editorZoneHidden: "codex-editor__redactor--hidden",
        editorEmpty: "codex-editor--empty",
        editorRtlFix: "codex-editor--rtl"
      };
    }
    /**
     * Return Width of center column of Editor
     *
     * @returns {DOMRect}
     */
    get contentRect() {
      if (this.contentRectCache)
        return this.contentRectCache;
      const e = this.nodes.wrapper.querySelector(`.${D.CSS.content}`);
      return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
        width: 650,
        left: 0,
        right: 0
      };
    }
    /**
     * Making main interface
     */
    async prepare() {
      this.setIsMobile(), this.make(), this.loadStyles();
    }
    /**
     * Toggle read-only state
     *
     * If readOnly is true:
     *  - removes all listeners from main UI module elements
     *
     * if readOnly is false:
     *  - enables all listeners to UI module elements
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(e) {
      e ? this.disableModuleBindings() : window.requestIdleCallback(() => {
        this.enableModuleBindings();
      }, {
        timeout: 2e3
      });
    }
    /**
     * Check if Editor is empty and set CSS class to wrapper
     */
    checkEmptiness() {
      const { BlockManager: e } = this.Editor;
      this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
    }
    /**
     * Check if one of Toolbar is opened
     * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
     *
     * @returns {boolean}
     */
    get someToolbarOpened() {
      const { Toolbar: e, BlockSettings: t, InlineToolbar: o4 } = this.Editor;
      return !!(t.opened || o4.opened || e.toolbox.opened);
    }
    /**
     * Check for some Flipper-buttons is under focus
     */
    get someFlipperButtonFocused() {
      return this.Editor.Toolbar.toolbox.hasFocus() ? true : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof le).some(([e, t]) => t.flipper.hasFocus());
    }
    /**
     * Clean editor`s UI
     */
    destroy() {
      this.nodes.holder.innerHTML = "";
    }
    /**
     * Close all Editor's toolbars
     */
    closeAllToolbars() {
      const { Toolbar: e, BlockSettings: t, InlineToolbar: o4 } = this.Editor;
      t.close(), o4.close(), e.toolbox.close();
    }
    /**
     * Check for mobile mode and save the result
     */
    setIsMobile() {
      const e = window.innerWidth < Ot;
      e !== this.isMobile && this.eventsDispatcher.emit(ye, {
        isEnabled: this.isMobile
      }), this.isMobile = e;
    }
    /**
     * Makes Editor.js interface
     */
    make() {
      this.nodes.holder = d.getHolder(this.config.holder), this.nodes.wrapper = d.make("div", [
        this.CSS.editorWrapper,
        ...this.isRtl ? [this.CSS.editorRtlFix] : []
      ]), this.nodes.redactor = d.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
    }
    /**
     * Appends CSS
     */
    loadStyles() {
      const e = "editor-js-styles";
      if (d.get(e))
        return;
      const t = d.make("style", null, {
        id: e,
        textContent: xs.toString()
      });
      this.config.style && !V(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), d.prepend(document.head, t);
    }
    /**
     * Bind events on the Editor.js interface
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (t) => {
        this.redactorClicked(t);
      }, false), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (t) => {
        this.documentTouched(t);
      }, {
        capture: true,
        passive: true
      }), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (t) => {
        this.documentTouched(t);
      }, {
        capture: true,
        passive: true
      }), this.readOnlyMutableListeners.on(document, "keydown", (t) => {
        this.documentKeydown(t);
      }, true), this.readOnlyMutableListeners.on(document, "mousedown", (t) => {
        this.documentClicked(t);
      }, true);
      const e = vt(() => {
        this.selectionChanged();
      }, ss);
      this.readOnlyMutableListeners.on(document, "selectionchange", e, true), this.readOnlyMutableListeners.on(window, "resize", () => {
        this.resizeDebouncer();
      }, {
        passive: true
      }), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
    }
    /**
     * Listen redactor mousemove to emit 'block-hovered' event
     */
    watchBlockHoveredEvents() {
      let e;
      this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Ve((t) => {
        const o4 = t.target.closest(".ce-block");
        this.Editor.BlockSelection.anyBlockSelected || o4 && e !== o4 && (e = o4, this.eventsDispatcher.emit(oo, {
          block: this.Editor.BlockManager.getBlockByChildNode(o4)
        }));
      }, 20), {
        passive: true
      });
    }
    /**
     * Unbind events on the Editor.js interface
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Resize window handler
     */
    windowResize() {
      this.contentRectCache = null, this.setIsMobile();
    }
    /**
     * All keydowns on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    documentKeydown(e) {
      switch (e.keyCode) {
        case w.ENTER:
          this.enterPressed(e);
          break;
        case w.BACKSPACE:
        case w.DELETE:
          this.backspacePressed(e);
          break;
        case w.ESC:
          this.escapePressed(e);
          break;
        default:
          this.defaultBehaviour(e);
          break;
      }
    }
    /**
     * Ignore all other document's keydown events
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    defaultBehaviour(e) {
      const { currentBlock: t } = this.Editor.BlockManager, o4 = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
      if (t !== void 0 && o4 === null) {
        this.Editor.BlockEvents.keydown(e);
        return;
      }
      o4 || t && i || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    }
    /**
     * @param {KeyboardEvent} event - keyboard event
     */
    backspacePressed(e) {
      const { BlockManager: t, BlockSelection: o4, Caret: i } = this.Editor;
      if (o4.anyBlockSelected && !b.isSelectionExists) {
        const s6 = t.removeSelectedBlocks(), r3 = t.insertDefaultBlockAtIndex(s6, true);
        i.setToBlock(r3, i.positions.START), o4.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
      }
    }
    /**
     * Escape pressed
     * If some of Toolbar components are opened, then close it otherwise close Toolbar
     *
     * @param {Event} event - escape keydown event
     */
    escapePressed(e) {
      this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
    }
    /**
     * Enter pressed on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    enterPressed(e) {
      const { BlockManager: t, BlockSelection: o4 } = this.Editor;
      if (this.someToolbarOpened)
        return;
      const i = t.currentBlockIndex >= 0;
      if (o4.anyBlockSelected && !b.isSelectionExists) {
        o4.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
        return;
      }
      if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
        const s6 = this.Editor.BlockManager.insert();
        e.preventDefault(), this.Editor.Caret.setToBlock(s6), this.Editor.Toolbar.moveAndOpen(s6);
      }
      this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * All clicks on document
     *
     * @param {MouseEvent} event - Click event
     */
    documentClicked(e) {
      var l3, a6;
      if (!e.isTrusted)
        return;
      const t = e.target;
      this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
      const i = (l3 = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : l3.contains(t), s6 = (a6 = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : a6.contains(t), r3 = i || s6;
      if (this.Editor.BlockSettings.opened && !r3) {
        this.Editor.BlockSettings.close();
        const c5 = this.Editor.BlockManager.getBlockByChildNode(t);
        this.Editor.Toolbar.moveAndOpen(c5);
      }
      this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * First touch on editor
     * Fired before click
     *
     * Used to change current block — we need to do it before 'selectionChange' event.
     * Also:
     * - Move and show the Toolbar
     * - Set a Caret
     *
     * @param {MouseEvent | TouchEvent} event - touch or mouse event
     */
    documentTouched(e) {
      let t = e.target;
      if (t === this.nodes.redactor) {
        const o4 = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
        t = document.elementFromPoint(o4, i);
      }
      try {
        this.Editor.BlockManager.setCurrentBlockByChildNode(t);
      } catch {
        this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
      }
      this.Editor.Toolbar.moveAndOpen();
    }
    /**
     * All clicks on the redactor zone
     *
     * @param {MouseEvent} event - click event
     * @description
     * - By clicks on the Editor's bottom zone:
     *      - if last Block is empty, set a Caret to this
     *      - otherwise, add a new empty Block and set a Caret to that
     */
    redactorClicked(e) {
      if (!b.isCollapsed)
        return;
      const t = e.target, o4 = e.metaKey || e.ctrlKey;
      if (d.isAnchor(t) && o4) {
        e.stopImmediatePropagation(), e.stopPropagation();
        const i = t.getAttribute("href"), s6 = So(i);
        Mo(s6);
        return;
      }
      this.processBottomZoneClick(e);
    }
    /**
     * Check if user clicks on the Editor's bottom zone:
     *  - set caret to the last block
     *  - or add new empty block
     *
     * @param event - click event
     */
    processBottomZoneClick(e) {
      const t = this.Editor.BlockManager.getBlockByIndex(-1), o4 = d.offset(t.holder).bottom, i = e.pageY, { BlockSelection: s6 } = this.Editor;
      if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
      * If there is cross block selection started, target will be equal to redactor so we need additional check
      */
      !s6.anyBlockSelected && /**
      * Prevent caret jumping (to last block) when clicking between blocks
      */
      o4 < i) {
        e.stopImmediatePropagation(), e.stopPropagation();
        const { BlockManager: l3, Caret: a6, Toolbar: c5 } = this.Editor;
        (!l3.lastBlock.tool.isDefault || !l3.lastBlock.isEmpty) && l3.insertAtEnd(), a6.setToTheLastBlock(), c5.moveAndOpen(l3.lastBlock);
      }
    }
    /**
     * Handle selection changes on mobile devices
     * Uses for showing the Inline Toolbar
     */
    selectionChanged() {
      const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o4 = b.anchorElement;
      if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), !o4) {
        b.range || this.Editor.InlineToolbar.close();
        return;
      }
      const i = o4.closest(`.${D.CSS.content}`);
      (i === null || i.closest(`.${b.CSS.editorWrapper}`) !== this.nodes.wrapper) && (this.Editor.InlineToolbar.containsNode(o4) || this.Editor.InlineToolbar.close(), !(o4.dataset.inlineToolbar === "true")) || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o4), this.Editor.InlineToolbar.tryToShow(true));
    }
    /**
     * Editor.js provides and ability to show placeholders for empty contenteditable elements
     *
     * This method watches for input and focus events and toggles 'data-empty' attribute
     * to workaroud the case, when inputs contains only <br>s and has no visible content
     * Then, CSS could rely on this attribute to show placeholders
     */
    enableInputsEmptyMark() {
      function e(t) {
        const o4 = t.target;
        Lt(o4);
      }
      this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
    }
  };
  var Es = {
    // API Modules
    BlocksAPI: zo,
    CaretAPI: jo,
    EventsAPI: $o,
    I18nAPI: ot,
    API: Yo,
    InlineToolbarAPI: Wo,
    ListenersAPI: Ko,
    NotifierAPI: Zo,
    ReadOnlyAPI: Go,
    SanitizerAPI: si,
    SaverAPI: ni,
    SelectionAPI: ri,
    ToolsAPI: li,
    StylesAPI: ai,
    ToolbarAPI: ci,
    TooltipAPI: fi,
    UiAPI: gi,
    // Toolbar Modules
    BlockSettings: Ui,
    Toolbar: qi,
    InlineToolbar: Zi,
    // Modules
    BlockEvents: Gi,
    BlockManager: es,
    BlockSelection: ts,
    Caret: Re,
    CrossBlockSelection: os,
    DragNDrop: is,
    ModificationsObserver: rs,
    Paste: ls,
    ReadOnly: as,
    RectangleSelection: xe,
    Renderer: cs,
    Saver: ds,
    Tools: go,
    UI: ys
  };
  var Bs = class {
    /**
     * @param {EditorConfig} config - user configuration
     */
    constructor(e) {
      this.moduleInstances = {}, this.eventsDispatcher = new Te();
      let t, o4;
      this.isReady = new Promise((i, s6) => {
        t = i, o4 = s6;
      }), Promise.resolve().then(async () => {
        this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
        const { BlockManager: i, Caret: s6, UI: r3, ModificationsObserver: l3 } = this.moduleInstances;
        r3.checkEmptiness(), l3.enable(), this.configuration.autofocus && s6.setToBlock(i.blocks[0], s6.positions.START), t();
      }).catch((i) => {
        I(`Editor.js is not ready because of ${i}`, "error"), o4(i);
      });
    }
    /**
     * Setting for configuration
     *
     * @param {EditorConfig|string} config - Editor's config to set
     */
    set configuration(e) {
      var o4, i;
      R(e) ? this.config = {
        ...e
      } : this.config = {
        holder: e
      }, Ze(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = It.VERBOSE), xo(this.config.logLevel), Ze(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
      const t = {
        type: this.config.defaultBlock,
        data: {}
      };
      this.config.placeholder = this.config.placeholder || false, this.config.sanitizer = this.config.sanitizer || {
        p: true,
        b: true,
        a: true
      }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : false, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
      }), this.config.onChange = this.config.onChange || (() => {
      }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : true, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || false, (o4 = this.config.i18n) != null && o4.messages && z.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
    }
    /**
     * Returns private property
     *
     * @returns {EditorConfig}
     */
    get configuration() {
      return this.config;
    }
    /**
     * Checks for required fields in Editor's config
     */
    validate() {
      const { holderId: e, holder: t } = this.config;
      if (e && t)
        throw Error("\xABholderId\xBB and \xABholder\xBB param can't assign at the same time.");
      if (Q(t) && !d.get(t))
        throw Error(`element with ID \xAB${t}\xBB is missing. Pass correct holder's ID.`);
      if (t && R(t) && !d.isElement(t))
        throw Error("\xABholder\xBB value must be an Element node");
    }
    /**
     * Initializes modules:
     *  - make and save instances
     *  - configure
     */
    init() {
      this.constructModules(), this.configureModules();
    }
    /**
     * Start Editor!
     *
     * Get list of modules that needs to be prepared and return a sequence (Promise)
     *
     * @returns {Promise<void>}
     */
    async start() {
      await [
        "Tools",
        "UI",
        "BlockManager",
        "Paste",
        "BlockSelection",
        "RectangleSelection",
        "CrossBlockSelection",
        "ReadOnly"
      ].reduce(
        (t, o4) => t.then(async () => {
          try {
            await this.moduleInstances[o4].prepare();
          } catch (i) {
            if (i instanceof Pt)
              throw new Error(i.message);
            I(`Module ${o4} was skipped because of %o`, "warn", i);
          }
        }),
        Promise.resolve()
      );
    }
    /**
     * Render initial data
     */
    render() {
      return this.moduleInstances.Renderer.render(this.config.data.blocks);
    }
    /**
     * Make modules instances and save it to the @property this.moduleInstances
     */
    constructModules() {
      Object.entries(Es).forEach(([e, t]) => {
        try {
          this.moduleInstances[e] = new t({
            config: this.configuration,
            eventsDispatcher: this.eventsDispatcher
          });
        } catch (o4) {
          I("[constructModules]", `Module ${e} skipped because`, "error", o4);
        }
      });
    }
    /**
     * Modules instances configuration:
     *  - pass other modules to the 'state' property
     *  - ...
     */
    configureModules() {
      for (const e in this.moduleInstances)
        Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
    }
    /**
     * Return modules without passed name
     *
     * @param {string} name - module for witch modules difference should be calculated
     */
    getModulesDiff(e) {
      const t = {};
      for (const o4 in this.moduleInstances)
        o4 !== e && (t[o4] = this.moduleInstances[o4]);
      return t;
    }
  };
  var Ts = class {
    /** Editor version */
    static get version() {
      return "2.30.7";
    }
    /**
     * @param {EditorConfig|string|undefined} [configuration] - user configuration
     */
    constructor(e) {
      let t = () => {
      };
      R(e) && O(e.onReady) && (t = e.onReady);
      const o4 = new Bs(e);
      this.isReady = o4.isReady.then(() => {
        this.exportAPI(o4), t();
      });
    }
    /**
     * Export external API methods
     *
     * @param {Core} editor — Editor's instance
     */
    exportAPI(e) {
      const t = ["configuration"], o4 = () => {
        Object.values(e.moduleInstances).forEach((s6) => {
          O(s6.destroy) && s6.destroy(), s6.listeners.removeAll();
        }), pi(), e = null;
        for (const s6 in this)
          Object.prototype.hasOwnProperty.call(this, s6) && delete this[s6];
        Object.setPrototypeOf(this, null);
      };
      t.forEach((s6) => {
        this[s6] = e[s6];
      }), this.destroy = o4, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
        blocks: {
          clear: "clear",
          render: "render"
        },
        caret: {
          focus: "focus"
        },
        events: {
          on: "on",
          off: "off",
          emit: "emit"
        },
        saver: {
          save: "save"
        }
      }).forEach(([s6, r3]) => {
        Object.entries(r3).forEach(([l3, a6]) => {
          this[a6] = e.moduleInstances.API.methods[s6][l3];
        });
      });
    }
  };

  // node_modules/@editorjs/header/dist/header.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")), document.head.appendChild(e);
      }
    } catch (n3) {
      console.error("vite-plugin-css-injected-by-js", n3);
    }
  })();
  var a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>';
  var l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>';
  var o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>';
  var h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>';
  var d2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>';
  var u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>';
  var g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
  var v = class {
    constructor({ data: e, config: t, api: s6, readOnly: r3 }) {
      this.api = s6, this.readOnly = r3, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
    }
    /**
     * Styles
     */
    get _CSS() {
      return {
        block: this.api.styles.block,
        wrapper: "ce-header"
      };
    }
    /**
     * Check if data is valid
     * 
     * @param {any} data - data to check
     * @returns {data is HeaderData}
     * @private
     */
    isHeaderData(e) {
      return e.text !== void 0;
    }
    /**
     * Normalize input data
     *
     * @param {HeaderData} data - saved data to process
     *
     * @returns {HeaderData}
     * @private
     */
    normalizeData(e) {
      const t = { text: "", level: this.defaultLevel.number };
      return this.isHeaderData(e) && (t.text = e.text || "", e.level !== void 0 && !isNaN(parseInt(e.level.toString())) && (t.level = parseInt(e.level.toString()))), t;
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLHeadingElement}
     * @public
     */
    render() {
      return this._element;
    }
    /**
     * Returns header block tunes config
     *
     * @returns {Array}
     */
    renderSettings() {
      return this.levels.map((e) => ({
        icon: e.svg,
        label: this.api.i18n.t(`Heading ${e.number}`),
        onActivate: () => this.setLevel(e.number),
        closeOnActivate: true,
        isActive: this.currentLevel.number === e.number,
        render: () => document.createElement("div")
      }));
    }
    /**
     * Callback for Block's settings buttons
     *
     * @param {number} level - level to set
     */
    setLevel(e) {
      this.data = {
        level: e,
        text: this.data.text
      };
    }
    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {HeaderData} data - saved data to merger with current block
     * @public
     */
    merge(e) {
      this._element.insertAdjacentHTML("beforeend", e.text);
    }
    /**
     * Validate Text block data:
     * - check for emptiness
     *
     * @param {HeaderData} blockData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(e) {
      return e.text.trim() !== "";
    }
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
     * @returns {HeaderData} - saved data
     * @public
     */
    save(e) {
      return {
        text: e.innerHTML,
        level: this.currentLevel.number
      };
    }
    /**
     * Allow Header to be converted to/from other blocks
     */
    static get conversionConfig() {
      return {
        export: "text",
        // use 'text' property for other blocks
        import: "text"
        // fill 'text' property from other block's export string
      };
    }
    /**
     * Sanitizer Rules
     */
    static get sanitize() {
      return {
        level: false,
        text: {}
      };
    }
    /**
     * Returns true to notify core that read-only is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get current Tools`s data
     *
     * @returns {HeaderData} Current data
     * @private
     */
    get data() {
      return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
    }
    /**
     * Store data in plugin:
     * - at the this._data property
     * - at the HTML
     *
     * @param {HeaderData} data — data to set
     * @private
     */
    set data(e) {
      if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
        const t = this.getTag();
        t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
      }
      e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
    }
    /**
     * Get tag for target level
     * By default returns second-leveled header
     *
     * @returns {HTMLElement}
     */
    getTag() {
      const e = document.createElement(this.currentLevel.tag);
      return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
    }
    /**
     * Get current level
     *
     * @returns {level}
     */
    get currentLevel() {
      let e = this.levels.find((t) => t.number === this._data.level);
      return e || (e = this.defaultLevel), e;
    }
    /**
     * Return default level
     *
     * @returns {level}
     */
    get defaultLevel() {
      if (this._settings.defaultLevel) {
        const e = this.levels.find((t) => t.number === this._settings.defaultLevel);
        if (e)
          return e;
        console.warn("(\u0E07'\u0300-'\u0301)\u0E07 Heading Tool: the default level specified was not found in available levels");
      }
      return this.levels[1];
    }
    /**
     * @typedef {object} level
     * @property {number} number - level number
     * @property {string} tag - tag corresponds with level number
     * @property {string} svg - icon
     */
    /**
     * Available header levels
     *
     * @returns {level[]}
     */
    get levels() {
      const e = [
        {
          number: 1,
          tag: "H1",
          svg: a
        },
        {
          number: 2,
          tag: "H2",
          svg: l
        },
        {
          number: 3,
          tag: "H3",
          svg: o
        },
        {
          number: 4,
          tag: "H4",
          svg: h
        },
        {
          number: 5,
          tag: "H5",
          svg: d2
        },
        {
          number: 6,
          tag: "H6",
          svg: u
        }
      ];
      return this._settings.levels ? e.filter(
        (t) => this._settings.levels.includes(t.number)
      ) : e;
    }
    /**
     * Handle H1-H6 tags on paste to substitute it with header Tool
     *
     * @param {PasteEvent} event - event with pasted content
     */
    onPaste(e) {
      const t = e.detail;
      if ("data" in t) {
        const s6 = t.data;
        let r3 = this.defaultLevel.number;
        switch (s6.tagName) {
          case "H1":
            r3 = 1;
            break;
          case "H2":
            r3 = 2;
            break;
          case "H3":
            r3 = 3;
            break;
          case "H4":
            r3 = 4;
            break;
          case "H5":
            r3 = 5;
            break;
          case "H6":
            r3 = 6;
            break;
        }
        this._settings.levels && (r3 = this._settings.levels.reduce((n3, i) => Math.abs(i - r3) < Math.abs(n3 - r3) ? i : n3)), this.data = {
          level: r3,
          text: s6.innerHTML
        };
      }
    }
    /**
     * Used by Editor.js paste handling API.
     * Provides configuration to handle H1-H6 tags.
     *
     * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
     */
    static get pasteConfig() {
      return {
        tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
      };
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: g,
        title: "Heading"
      };
    }
  };

  // node_modules/@editorjs/list/dist/editorjs-list.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode('.cdx-list{margin:0;padding:0;outline:none;display:grid;counter-reset:item;gap:var(--spacing-s);padding:var(--spacing-xs);--spacing-s: 8px;--spacing-xs: 6px;--list-counter-type: numeric;--radius-border: 5px;--checkbox-background: #fff;--color-border: #C9C9C9;--color-bg-checked: #369FFF;--line-height: 1.45em;--color-bg-checked-hover: #0059AB;--color-tick: #fff;--size-checkbox: 1.2em}.cdx-list__item{line-height:var(--line-height);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;grid-template-areas:"checkbox content" ". child"}.cdx-list__item-children{display:grid;grid-area:child;gap:var(--spacing-s);padding-top:var(--spacing-s)}.cdx-list__item [contenteditable]{outline:none}.cdx-list__item-content{word-break:break-word;white-space:pre-wrap;grid-area:content;padding-left:var(--spacing-s)}.cdx-list__item:before{counter-increment:item;white-space:nowrap}.cdx-list-ordered .cdx-list__item:before{content:counters(item,".",var(--list-counter-type)) "."}.cdx-list-ordered{counter-reset:item}.cdx-list-unordered .cdx-list__item:before{content:"\u2022"}.cdx-list-checklist .cdx-list__item:before{content:""}.cdx-list__settings .cdx-settings-button{width:50%}.cdx-list__checkbox{padding-top:calc((var(--line-height) - var(--size-checkbox)) / 2);grid-area:checkbox;width:var(--size-checkbox);height:var(--size-checkbox);display:flex;cursor:pointer}.cdx-list__checkbox svg{opacity:0;height:var(--size-checkbox);width:var(--size-checkbox);left:-1px;top:-1px;position:absolute}@media (hover: hover){.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg{opacity:1}}.cdx-list__checkbox--checked{line-height:var(--line-height)}@media (hover: hover){.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check{background:var(--color-bg-checked-hover);border-color:var(--color-bg-checked-hover)}}.cdx-list__checkbox--checked .cdx-list__checkbox-check{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg{opacity:1}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path{stroke:var(--color-tick)}.cdx-list__checkbox--checked .cdx-list__checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}.cdx-list__checkbox-check{cursor:pointer;display:inline-block;position:relative;margin:0 auto;width:var(--size-checkbox);height:var(--size-checkbox);box-sizing:border-box;border-radius:var(--radius-border);border:1px solid var(--color-border);background:var(--checkbox-background)}.cdx-list__checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:var(--color-bg-checked);visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}.cdx-list-start-with-field{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-list-start-with-field--invalid{background:#FFECED;border:1px solid #E13F3F}.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input{color:#e13f3f}.cdx-list-start-with-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-list-start-with-field__input::placeholder{color:var(--grayText);font-weight:500}')), document.head.appendChild(e);
      }
    } catch (c5) {
      console.error("vite-plugin-css-injected-by-js", c5);
    }
  })();
  var Ct2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>';
  var Ae2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  var $e2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>';
  var Be2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
  var St2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.2L10 7.4135C10 7.32872 9.90111 7.28241 9.83598 7.33668L7 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var Ot2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 9.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 7.01L10 7" stroke="black" stroke-width="1.8" stroke-linecap="round"/></svg>';
  var kt2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 7.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var _t2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0087 14.2H16" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M7 14.2L7.78865 12M13 14.2L12.1377 12M7.78865 12C7.78865 12 9.68362 7 10 7C10.3065 7 12.1377 12 12.1377 12M7.78865 12L12.1377 12" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var Et2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2087 14.2H14.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M11.5 14.5C11.5 14.5 11 13.281 11 12.5M7 9.5C7 9.5 7.5 8.5 9 8.5C10.5 8.5 11 9.5 11 10.5L11 11.5M11 11.5L11 12.5M11 11.5C11 11.5 7 11 7 13C7 15.3031 11 15 11 12.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
  var It2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14.2L8 7.4135C8 7.32872 7.90111 7.28241 7.83598 7.33668L5 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M14 13L16.4167 10.7778M16.4167 10.7778L14 8.5M16.4167 10.7778H11.6562" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var A2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function wt2(e) {
    if (e.__esModule)
      return e;
    var t = e.default;
    if (typeof t == "function") {
      var n3 = function r3() {
        return this instanceof r3 ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n3.prototype = t.prototype;
    } else
      n3 = {};
    return Object.defineProperty(n3, "__esModule", { value: true }), Object.keys(e).forEach(function(r3) {
      var i = Object.getOwnPropertyDescriptor(e, r3);
      Object.defineProperty(n3, r3, i.get ? i : {
        enumerable: true,
        get: function() {
          return e[r3];
        }
      });
    }), n3;
  }
  var c = {};
  var V2 = {};
  var Y = {};
  Object.defineProperty(Y, "__esModule", { value: true });
  Y.allInputsSelector = Pt2;
  function Pt2() {
    var e = ["text", "password", "email", "number", "search", "tel", "url"];
    return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
      return 'input[type="'.concat(t, '"]');
    }).join(", ");
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.allInputsSelector = void 0;
    var t = Y;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
  })(V2);
  var k = {};
  var J2 = {};
  Object.defineProperty(J2, "__esModule", { value: true });
  J2.isNativeInput = jt2;
  function jt2(e) {
    var t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : false;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNativeInput = void 0;
    var t = J2;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return t.isNativeInput;
    } });
  })(k);
  var Fe2 = {};
  var Q2 = {};
  Object.defineProperty(Q2, "__esModule", { value: true });
  Q2.append = Tt2;
  function Tt2(e, t) {
    Array.isArray(t) ? t.forEach(function(n3) {
      e.appendChild(n3);
    }) : e.appendChild(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.append = void 0;
    var t = Q2;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return t.append;
    } });
  })(Fe2);
  var Z2 = {};
  var x = {};
  Object.defineProperty(x, "__esModule", { value: true });
  x.blockElements = Mt2;
  function Mt2() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.blockElements = void 0;
    var t = x;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return t.blockElements;
    } });
  })(Z2);
  var Re2 = {};
  var ee = {};
  Object.defineProperty(ee, "__esModule", { value: true });
  ee.calculateBaseline = Lt2;
  function Lt2(e) {
    var t = window.getComputedStyle(e), n3 = parseFloat(t.fontSize), r3 = parseFloat(t.lineHeight) || n3 * 1.2, i = parseFloat(t.paddingTop), a6 = parseFloat(t.borderTopWidth), l3 = parseFloat(t.marginTop), s6 = n3 * 0.8, o4 = (r3 - n3) / 2, d4 = l3 + a6 + i + o4 + s6;
    return d4;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.calculateBaseline = void 0;
    var t = ee;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return t.calculateBaseline;
    } });
  })(Re2);
  var qe2 = {};
  var te2 = {};
  var ne2 = {};
  var re2 = {};
  Object.defineProperty(re2, "__esModule", { value: true });
  re2.isContentEditable = Nt2;
  function Nt2(e) {
    return e.contentEditable === "true";
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isContentEditable = void 0;
    var t = re2;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return t.isContentEditable;
    } });
  })(ne2);
  Object.defineProperty(te2, "__esModule", { value: true });
  te2.canSetCaret = Bt2;
  var At2 = k;
  var $t2 = ne2;
  function Bt2(e) {
    var t = true;
    if ((0, At2.isNativeInput)(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = false;
          break;
      }
    else
      t = (0, $t2.isContentEditable)(e);
    return t;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.canSetCaret = void 0;
    var t = te2;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return t.canSetCaret;
    } });
  })(qe2);
  var $ = {};
  var ie = {};
  function Wt2(e, t, n3) {
    const r3 = n3.value !== void 0 ? "value" : "get", i = n3[r3], a6 = `#${t}Cache`;
    if (n3[r3] = function(...l3) {
      return this[a6] === void 0 && (this[a6] = i.apply(this, l3)), this[a6];
    }, r3 === "get" && n3.set) {
      const l3 = n3.set;
      n3.set = function(s6) {
        delete e[a6], l3.apply(this, s6);
      };
    }
    return n3;
  }
  function Ue2() {
    const e = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    }, t = Object.keys(e).find((n3) => window.navigator.appVersion.toLowerCase().indexOf(n3) !== -1);
    return t !== void 0 && (e[t] = true), e;
  }
  function ae2(e) {
    return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
  }
  function Dt2(e) {
    return !ae2(e);
  }
  var Ht2 = () => typeof window < "u" && window.navigator !== null && ae2(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  function Ft2(e) {
    const t = Ue2();
    return e = e.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
  }
  function Rt2(e) {
    return e[0].toUpperCase() + e.slice(1);
  }
  function qt2(e) {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
    const n3 = window.getSelection(), r3 = document.createRange();
    if (r3.selectNode(t), n3 === null)
      throw new Error("Cannot copy text to clipboard");
    n3.removeAllRanges(), n3.addRange(r3), document.execCommand("copy"), document.body.removeChild(t);
  }
  function Ut2(e, t, n3) {
    let r3;
    return (...i) => {
      const a6 = this, l3 = () => {
        r3 = void 0, n3 !== true && e.apply(a6, i);
      }, s6 = n3 === true && r3 !== void 0;
      window.clearTimeout(r3), r3 = window.setTimeout(l3, t), s6 && e.apply(a6, i);
    };
  }
  function S(e) {
    return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  function zt2(e) {
    return S(e) === "boolean";
  }
  function ze2(e) {
    return S(e) === "function" || S(e) === "asyncfunction";
  }
  function Kt2(e) {
    return ze2(e) && /^\s*class\s+/.test(e.toString());
  }
  function Xt2(e) {
    return S(e) === "number";
  }
  function L2(e) {
    return S(e) === "object";
  }
  function Gt2(e) {
    return Promise.resolve(e) === e;
  }
  function Vt2(e) {
    return S(e) === "string";
  }
  function Yt2(e) {
    return S(e) === "undefined";
  }
  function X2(e, ...t) {
    if (!t.length)
      return e;
    const n3 = t.shift();
    if (L2(e) && L2(n3))
      for (const r3 in n3)
        L2(n3[r3]) ? (e[r3] === void 0 && Object.assign(e, { [r3]: {} }), X2(e[r3], n3[r3])) : Object.assign(e, { [r3]: n3[r3] });
    return X2(e, ...t);
  }
  function Jt2(e, t, n3) {
    const r3 = `\xAB${t}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${n3}\xBB instead.`;
    e && console.warn(r3);
  }
  function Qt2(e) {
    try {
      return new URL(e).href;
    } catch {
    }
    return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
  }
  function Zt2(e) {
    return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
  }
  var xt2 = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  };
  var en = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
  var tn = class {
    constructor() {
      this.completed = Promise.resolve();
    }
    /**
     * Add new promise to queue
     * @param operation - promise should be added to queue
     */
    add(t) {
      return new Promise((n3, r3) => {
        this.completed = this.completed.then(t).then(n3).catch(r3);
      });
    }
  };
  function nn(e, t, n3 = void 0) {
    let r3, i, a6, l3 = null, s6 = 0;
    n3 || (n3 = {});
    const o4 = function() {
      s6 = n3.leading === false ? 0 : Date.now(), l3 = null, a6 = e.apply(r3, i), l3 === null && (r3 = i = null);
    };
    return function() {
      const d4 = Date.now();
      !s6 && n3.leading === false && (s6 = d4);
      const u2 = t - (d4 - s6);
      return r3 = this, i = arguments, u2 <= 0 || u2 > t ? (l3 && (clearTimeout(l3), l3 = null), s6 = d4, a6 = e.apply(r3, i), l3 === null && (r3 = i = null)) : !l3 && n3.trailing !== false && (l3 = setTimeout(o4, u2)), a6;
    };
  }
  var rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    PromiseQueue: tn,
    beautifyShortcut: Ft2,
    cacheable: Wt2,
    capitalize: Rt2,
    copyTextToClipboard: qt2,
    debounce: Ut2,
    deepMerge: X2,
    deprecationAssert: Jt2,
    getUserOS: Ue2,
    getValidUrl: Qt2,
    isBoolean: zt2,
    isClass: Kt2,
    isEmpty: Dt2,
    isFunction: ze2,
    isIosDevice: Ht2,
    isNumber: Xt2,
    isObject: L2,
    isPrintableKey: Zt2,
    isPromise: Gt2,
    isString: Vt2,
    isUndefined: Yt2,
    keyCodes: xt2,
    mouseButtons: en,
    notEmpty: ae2,
    throttle: nn,
    typeOf: S
  }, Symbol.toStringTag, { value: "Module" }));
  var le2 = /* @__PURE__ */ wt2(rn);
  Object.defineProperty(ie, "__esModule", { value: true });
  ie.containsOnlyInlineElements = sn;
  var an = le2;
  var ln = Z2;
  function sn(e) {
    var t;
    (0, an.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    var n3 = function(r3) {
      return !(0, ln.blockElements)().includes(r3.tagName.toLowerCase()) && Array.from(r3.children).every(n3);
    };
    return Array.from(t.children).every(n3);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.containsOnlyInlineElements = void 0;
    var t = ie;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return t.containsOnlyInlineElements;
    } });
  })($);
  var Ke2 = {};
  var se2 = {};
  var B = {};
  var oe = {};
  Object.defineProperty(oe, "__esModule", { value: true });
  oe.make = on;
  function on(e, t, n3) {
    var r3;
    t === void 0 && (t = null), n3 === void 0 && (n3 = {});
    var i = document.createElement(e);
    if (Array.isArray(t)) {
      var a6 = t.filter(function(s6) {
        return s6 !== void 0;
      });
      (r3 = i.classList).add.apply(r3, a6);
    } else
      t !== null && i.classList.add(t);
    for (var l3 in n3)
      Object.prototype.hasOwnProperty.call(n3, l3) && (i[l3] = n3[l3]);
    return i;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.make = void 0;
    var t = oe;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return t.make;
    } });
  })(B);
  Object.defineProperty(se2, "__esModule", { value: true });
  se2.fragmentToString = cn;
  var un = B;
  function cn(e) {
    var t = (0, un.make)("div");
    return t.appendChild(e), t.innerHTML;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.fragmentToString = void 0;
    var t = se2;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return t.fragmentToString;
    } });
  })(Ke2);
  var Xe2 = {};
  var ue2 = {};
  Object.defineProperty(ue2, "__esModule", { value: true });
  ue2.getContentLength = fn;
  var dn = k;
  function fn(e) {
    var t, n3;
    return (0, dn.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n3 = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n3 !== void 0 ? n3 : 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getContentLength = void 0;
    var t = ue2;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return t.getContentLength;
    } });
  })(Xe2);
  var ce2 = {};
  var de2 = {};
  var We2 = A2 && A2.__spreadArray || function(e, t, n3) {
    if (n3 || arguments.length === 2)
      for (var r3 = 0, i = t.length, a6; r3 < i; r3++)
        (a6 || !(r3 in t)) && (a6 || (a6 = Array.prototype.slice.call(t, 0, r3)), a6[r3] = t[r3]);
    return e.concat(a6 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(de2, "__esModule", { value: true });
  de2.getDeepestBlockElements = Ge2;
  var pn = $;
  function Ge2(e) {
    return (0, pn.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n3) {
      return We2(We2([], t, true), Ge2(n3), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestBlockElements = void 0;
    var t = de2;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return t.getDeepestBlockElements;
    } });
  })(ce2);
  var Ve2 = {};
  var fe = {};
  var W2 = {};
  var pe2 = {};
  Object.defineProperty(pe2, "__esModule", { value: true });
  pe2.isLineBreakTag = hn;
  function hn(e) {
    return [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLineBreakTag = void 0;
    var t = pe2;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return t.isLineBreakTag;
    } });
  })(W2);
  var D2 = {};
  var he2 = {};
  Object.defineProperty(he2, "__esModule", { value: true });
  he2.isSingleTag = mn;
  function mn(e) {
    return [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isSingleTag = void 0;
    var t = he2;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return t.isSingleTag;
    } });
  })(D2);
  Object.defineProperty(fe, "__esModule", { value: true });
  fe.getDeepestNode = Ye2;
  var gn = k;
  var vn = W2;
  var bn = D2;
  function Ye2(e, t) {
    t === void 0 && (t = false);
    var n3 = t ? "lastChild" : "firstChild", r3 = t ? "previousSibling" : "nextSibling";
    if (e.nodeType === Node.ELEMENT_NODE && e[n3]) {
      var i = e[n3];
      if ((0, bn.isSingleTag)(i) && !(0, gn.isNativeInput)(i) && !(0, vn.isLineBreakTag)(i))
        if (i[r3])
          i = i[r3];
        else if (i.parentNode !== null && i.parentNode[r3])
          i = i.parentNode[r3];
        else
          return i.parentNode;
      return Ye2(i, t);
    }
    return e;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestNode = void 0;
    var t = fe;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return t.getDeepestNode;
    } });
  })(Ve2);
  var Je2 = {};
  var me2 = {};
  var j = A2 && A2.__spreadArray || function(e, t, n3) {
    if (n3 || arguments.length === 2)
      for (var r3 = 0, i = t.length, a6; r3 < i; r3++)
        (a6 || !(r3 in t)) && (a6 || (a6 = Array.prototype.slice.call(t, 0, r3)), a6[r3] = t[r3]);
    return e.concat(a6 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(me2, "__esModule", { value: true });
  me2.findAllInputs = kn;
  var yn = $;
  var Cn = ce2;
  var Sn = V2;
  var On = k;
  function kn(e) {
    return Array.from(e.querySelectorAll((0, Sn.allInputsSelector)())).reduce(function(t, n3) {
      return (0, On.isNativeInput)(n3) || (0, yn.containsOnlyInlineElements)(n3) ? j(j([], t, true), [n3], false) : j(j([], t, true), (0, Cn.getDeepestBlockElements)(n3), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.findAllInputs = void 0;
    var t = me2;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return t.findAllInputs;
    } });
  })(Je2);
  var Qe2 = {};
  var ge = {};
  Object.defineProperty(ge, "__esModule", { value: true });
  ge.isCollapsedWhitespaces = _n;
  function _n(e) {
    return !/[^\t\n\r ]/.test(e);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isCollapsedWhitespaces = void 0;
    var t = ge;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return t.isCollapsedWhitespaces;
    } });
  })(Qe2);
  var ve2 = {};
  var be2 = {};
  Object.defineProperty(be2, "__esModule", { value: true });
  be2.isElement = In;
  var En = le2;
  function In(e) {
    return (0, En.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isElement = void 0;
    var t = be2;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return t.isElement;
    } });
  })(ve2);
  var Ze2 = {};
  var ye2 = {};
  var Ce2 = {};
  var Se2 = {};
  Object.defineProperty(Se2, "__esModule", { value: true });
  Se2.isLeaf = wn;
  function wn(e) {
    return e === null ? false : e.childNodes.length === 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLeaf = void 0;
    var t = Se2;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return t.isLeaf;
    } });
  })(Ce2);
  var Oe2 = {};
  var ke2 = {};
  Object.defineProperty(ke2, "__esModule", { value: true });
  ke2.isNodeEmpty = Ln;
  var Pn = W2;
  var jn = ve2;
  var Tn = k;
  var Mn = D2;
  function Ln(e, t) {
    var n3 = "";
    return (0, Mn.isSingleTag)(e) && !(0, Pn.isLineBreakTag)(e) ? false : ((0, jn.isElement)(e) && (0, Tn.isNativeInput)(e) ? n3 = e.value : e.textContent !== null && (n3 = e.textContent.replace("\u200B", "")), t !== void 0 && (n3 = n3.replace(new RegExp(t, "g"), "")), n3.trim().length === 0);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNodeEmpty = void 0;
    var t = ke2;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return t.isNodeEmpty;
    } });
  })(Oe2);
  Object.defineProperty(ye2, "__esModule", { value: true });
  ye2.isEmpty = $n;
  var Nn = Ce2;
  var An = Oe2;
  function $n(e, t) {
    e.normalize();
    for (var n3 = [e]; n3.length > 0; ) {
      var r3 = n3.shift();
      if (r3) {
        if (e = r3, (0, Nn.isLeaf)(e) && !(0, An.isNodeEmpty)(e, t))
          return false;
        n3.push.apply(n3, Array.from(e.childNodes));
      }
    }
    return true;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isEmpty = void 0;
    var t = ye2;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return t.isEmpty;
    } });
  })(Ze2);
  var xe2 = {};
  var _e2 = {};
  Object.defineProperty(_e2, "__esModule", { value: true });
  _e2.isFragment = Wn;
  var Bn = le2;
  function Wn(e) {
    return (0, Bn.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isFragment = void 0;
    var t = _e2;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return t.isFragment;
    } });
  })(xe2);
  var et2 = {};
  var Ee2 = {};
  Object.defineProperty(Ee2, "__esModule", { value: true });
  Ee2.isHTMLString = Hn;
  var Dn = B;
  function Hn(e) {
    var t = (0, Dn.make)("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isHTMLString = void 0;
    var t = Ee2;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return t.isHTMLString;
    } });
  })(et2);
  var tt2 = {};
  var Ie2 = {};
  Object.defineProperty(Ie2, "__esModule", { value: true });
  Ie2.offset = Fn;
  function Fn(e) {
    var t = e.getBoundingClientRect(), n3 = window.pageXOffset || document.documentElement.scrollLeft, r3 = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r3, a6 = t.left + n3;
    return {
      top: i,
      left: a6,
      bottom: i + t.height,
      right: a6 + t.width
    };
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.offset = void 0;
    var t = Ie2;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return t.offset;
    } });
  })(tt2);
  var nt2 = {};
  var we2 = {};
  Object.defineProperty(we2, "__esModule", { value: true });
  we2.prepend = Rn;
  function Rn(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n3) {
      return e.prepend(n3);
    })) : e.prepend(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = void 0;
    var t = we2;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return t.prepend;
    } });
  })(nt2);
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
    var t = V2;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
    var n3 = k;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return n3.isNativeInput;
    } });
    var r3 = Fe2;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return r3.append;
    } });
    var i = Z2;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return i.blockElements;
    } });
    var a6 = Re2;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return a6.calculateBaseline;
    } });
    var l3 = qe2;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return l3.canSetCaret;
    } });
    var s6 = $;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return s6.containsOnlyInlineElements;
    } });
    var o4 = Ke2;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return o4.fragmentToString;
    } });
    var d4 = Xe2;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return d4.getContentLength;
    } });
    var u2 = ce2;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return u2.getDeepestBlockElements;
    } });
    var p2 = Ve2;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return p2.getDeepestNode;
    } });
    var g4 = Je2;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return g4.findAllInputs;
    } });
    var w4 = Qe2;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return w4.isCollapsedWhitespaces;
    } });
    var _3 = ne2;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return _3.isContentEditable;
    } });
    var ut3 = ve2;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return ut3.isElement;
    } });
    var ct3 = Ze2;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return ct3.isEmpty;
    } });
    var dt3 = xe2;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return dt3.isFragment;
    } });
    var ft3 = et2;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return ft3.isHTMLString;
    } });
    var pt3 = Ce2;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return pt3.isLeaf;
    } });
    var ht3 = Oe2;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return ht3.isNodeEmpty;
    } });
    var mt2 = W2;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return mt2.isLineBreakTag;
    } });
    var gt3 = D2;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return gt3.isSingleTag;
    } });
    var vt3 = B;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return vt3.make;
    } });
    var bt3 = tt2;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return bt3.offset;
    } });
    var yt3 = nt2;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return yt3.prepend;
    } });
  })(c);
  var m = "cdx-list";
  var h2 = {
    wrapper: m,
    item: `${m}__item`,
    itemContent: `${m}__item-content`,
    itemChildren: `${m}__item-children`
  };
  var v2 = class _v {
    /**
     * Getter for all CSS classes used in unordered list rendering
     */
    static get CSS() {
      return {
        ...h2,
        orderedList: `${m}-ordered`
      };
    }
    /**
     * Assign passed readonly mode and config to relevant class properties
     * @param readonly - read-only mode flag
     * @param config - user config for Tool
     */
    constructor(t, n3) {
      this.config = n3, this.readOnly = t;
    }
    /**
     * Renders ol wrapper for list
     * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
     * @returns - created html ol element
     */
    renderWrapper(t) {
      let n3;
      return t === true ? n3 = c.make("ol", [_v.CSS.wrapper, _v.CSS.orderedList]) : n3 = c.make("ol", [_v.CSS.orderedList, _v.CSS.itemChildren]), n3;
    }
    /**
     * Redners list item element
     * @param content - content used in list item rendering
     * @param _meta - meta of the list item unused in rendering of the ordered list
     * @returns - created html list item element
     */
    renderItem(t, n3) {
      const r3 = c.make("li", _v.CSS.item), i = c.make("div", _v.CSS.itemContent, {
        innerHTML: t,
        contentEditable: (!this.readOnly).toString()
      });
      return r3.appendChild(i), r3;
    }
    /**
     * Return the item content
     * @param item - item wrapper (<li>)
     * @returns - item content string
     */
    getItemContent(t) {
      const n3 = t.querySelector(`.${_v.CSS.itemContent}`);
      return !n3 || c.isEmpty(n3) ? "" : n3.innerHTML;
    }
    /**
     * Returns item meta, for ordered list
     * @returns item meta object
     */
    getItemMeta() {
      return {};
    }
    /**
     * Returns default item meta used on creation of the new item
     */
    composeDefaultMeta() {
      return {};
    }
  };
  var b2 = class _b {
    /**
     * Getter for all CSS classes used in unordered list rendering
     */
    static get CSS() {
      return {
        ...h2,
        unorderedList: `${m}-unordered`
      };
    }
    /**
     * Assign passed readonly mode and config to relevant class properties
     * @param readonly - read-only mode flag
     * @param config - user config for Tool
     */
    constructor(t, n3) {
      this.config = n3, this.readOnly = t;
    }
    /**
     * Renders ol wrapper for list
     * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
     * @returns - created html ul element
     */
    renderWrapper(t) {
      let n3;
      return t === true ? n3 = c.make("ul", [_b.CSS.wrapper, _b.CSS.unorderedList]) : n3 = c.make("ul", [_b.CSS.unorderedList, _b.CSS.itemChildren]), n3;
    }
    /**
     * Redners list item element
     * @param content - content used in list item rendering
     * @param _meta - meta of the list item unused in rendering of the unordered list
     * @returns - created html list item element
     */
    renderItem(t, n3) {
      const r3 = c.make("li", _b.CSS.item), i = c.make("div", _b.CSS.itemContent, {
        innerHTML: t,
        contentEditable: (!this.readOnly).toString()
      });
      return r3.appendChild(i), r3;
    }
    /**
     * Return the item content
     * @param item - item wrapper (<li>)
     * @returns - item content string
     */
    getItemContent(t) {
      const n3 = t.querySelector(`.${_b.CSS.itemContent}`);
      return !n3 || c.isEmpty(n3) ? "" : n3.innerHTML;
    }
    /**
     * Returns item meta, for unordered list
     * @returns Item meta object
     */
    getItemMeta() {
      return {};
    }
    /**
     * Returns default item meta used on creation of the new item
     */
    composeDefaultMeta() {
      return {};
    }
  };
  function O2(e) {
    return e.nodeType === Node.ELEMENT_NODE;
  }
  var P = {};
  var Pe2 = {};
  var H2 = {};
  var F2 = {};
  Object.defineProperty(F2, "__esModule", { value: true });
  F2.getContenteditableSlice = Un;
  var qn = c;
  function Un(e, t, n3, r3, i) {
    var a6;
    i === void 0 && (i = false);
    var l3 = document.createRange();
    if (r3 === "left" ? (l3.setStart(e, 0), l3.setEnd(t, n3)) : (l3.setStart(t, n3), l3.setEnd(e, e.childNodes.length)), i === true) {
      var s6 = l3.extractContents();
      return (0, qn.fragmentToString)(s6);
    }
    var o4 = l3.cloneContents(), d4 = document.createElement("div");
    d4.appendChild(o4);
    var u2 = (a6 = d4.textContent) !== null && a6 !== void 0 ? a6 : "";
    return u2;
  }
  Object.defineProperty(H2, "__esModule", { value: true });
  H2.checkContenteditableSliceForEmptiness = Xn;
  var zn = c;
  var Kn = F2;
  function Xn(e, t, n3, r3) {
    var i = (0, Kn.getContenteditableSlice)(e, t, n3, r3);
    return (0, zn.isCollapsedWhitespaces)(i);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.checkContenteditableSliceForEmptiness = void 0;
    var t = H2;
    Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: true, get: function() {
      return t.checkContenteditableSliceForEmptiness;
    } });
  })(Pe2);
  var rt2 = {};
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getContenteditableSlice = void 0;
    var t = F2;
    Object.defineProperty(e, "getContenteditableSlice", { enumerable: true, get: function() {
      return t.getContenteditableSlice;
    } });
  })(rt2);
  var it2 = {};
  var je2 = {};
  Object.defineProperty(je2, "__esModule", { value: true });
  je2.focus = Vn;
  var Gn = c;
  function Vn(e, t) {
    var n3, r3;
    if (t === void 0 && (t = true), (0, Gn.isNativeInput)(e)) {
      e.focus();
      var i = t ? 0 : e.value.length;
      e.setSelectionRange(i, i);
    } else {
      var a6 = document.createRange(), l3 = window.getSelection();
      if (!l3)
        return;
      var s6 = function(g4, w4) {
        w4 === void 0 && (w4 = false);
        var _3 = document.createTextNode("");
        w4 ? g4.insertBefore(_3, g4.firstChild) : g4.appendChild(_3), a6.setStart(_3, 0), a6.setEnd(_3, 0);
      }, o4 = function(g4) {
        return g4 != null;
      }, d4 = e.childNodes, u2 = t ? d4[0] : d4[d4.length - 1];
      if (o4(u2)) {
        for (; o4(u2) && u2.nodeType !== Node.TEXT_NODE; )
          u2 = t ? u2.firstChild : u2.lastChild;
        if (o4(u2) && u2.nodeType === Node.TEXT_NODE) {
          var p2 = (r3 = (n3 = u2.textContent) === null || n3 === void 0 ? void 0 : n3.length) !== null && r3 !== void 0 ? r3 : 0, i = t ? 0 : p2;
          a6.setStart(u2, i), a6.setEnd(u2, i);
        } else
          s6(e, t);
      } else
        s6(e);
      l3.removeAllRanges(), l3.addRange(a6);
    }
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.focus = void 0;
    var t = je2;
    Object.defineProperty(e, "focus", { enumerable: true, get: function() {
      return t.focus;
    } });
  })(it2);
  var Te2 = {};
  var R2 = {};
  Object.defineProperty(R2, "__esModule", { value: true });
  R2.getCaretNodeAndOffset = Yn;
  function Yn() {
    var e = window.getSelection();
    if (e === null)
      return [null, 0];
    var t = e.focusNode, n3 = e.focusOffset;
    return t === null ? [null, 0] : (t.nodeType !== Node.TEXT_NODE && t.childNodes.length > 0 && (t.childNodes[n3] !== void 0 ? (t = t.childNodes[n3], n3 = 0) : (t = t.childNodes[n3 - 1], t.textContent !== null && (n3 = t.textContent.length))), [t, n3]);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getCaretNodeAndOffset = void 0;
    var t = R2;
    Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: true, get: function() {
      return t.getCaretNodeAndOffset;
    } });
  })(Te2);
  var at2 = {};
  var q2 = {};
  Object.defineProperty(q2, "__esModule", { value: true });
  q2.getRange = Jn;
  function Jn() {
    var e = window.getSelection();
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getRange = void 0;
    var t = q2;
    Object.defineProperty(e, "getRange", { enumerable: true, get: function() {
      return t.getRange;
    } });
  })(at2);
  var lt2 = {};
  var Me2 = {};
  Object.defineProperty(Me2, "__esModule", { value: true });
  Me2.isCaretAtEndOfInput = xn;
  var De2 = c;
  var Qn = Te2;
  var Zn = Pe2;
  function xn(e) {
    var t = (0, De2.getDeepestNode)(e, true);
    if (t === null)
      return true;
    if ((0, De2.isNativeInput)(t))
      return t.selectionEnd === t.value.length;
    var n3 = (0, Qn.getCaretNodeAndOffset)(), r3 = n3[0], i = n3[1];
    return r3 === null ? false : (0, Zn.checkContenteditableSliceForEmptiness)(e, r3, i, "right");
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isCaretAtEndOfInput = void 0;
    var t = Me2;
    Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: true, get: function() {
      return t.isCaretAtEndOfInput;
    } });
  })(lt2);
  var st2 = {};
  var Le2 = {};
  Object.defineProperty(Le2, "__esModule", { value: true });
  Le2.isCaretAtStartOfInput = nr;
  var T = c;
  var er = R2;
  var tr = H2;
  function nr(e) {
    var t = (0, T.getDeepestNode)(e);
    if (t === null || (0, T.isEmpty)(e))
      return true;
    if ((0, T.isNativeInput)(t))
      return t.selectionEnd === 0;
    if ((0, T.isEmpty)(e))
      return true;
    var n3 = (0, er.getCaretNodeAndOffset)(), r3 = n3[0], i = n3[1];
    return r3 === null ? false : (0, tr.checkContenteditableSliceForEmptiness)(e, r3, i, "left");
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isCaretAtStartOfInput = void 0;
    var t = Le2;
    Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: true, get: function() {
      return t.isCaretAtStartOfInput;
    } });
  })(st2);
  var ot2 = {};
  var Ne2 = {};
  Object.defineProperty(Ne2, "__esModule", { value: true });
  Ne2.save = ar;
  var rr = c;
  var ir = q2;
  function ar() {
    var e = (0, ir.getRange)(), t = (0, rr.make)("span");
    if (t.id = "cursor", t.hidden = true, !!e)
      return e.insertNode(t), function() {
        var r3 = window.getSelection();
        r3 && (e.setStartAfter(t), e.setEndAfter(t), r3.removeAllRanges(), r3.addRange(e), setTimeout(function() {
          t.remove();
        }, 150));
      };
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.save = void 0;
    var t = Ne2;
    Object.defineProperty(e, "save", { enumerable: true, get: function() {
      return t.save;
    } });
  })(ot2);
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.save = e.isCaretAtStartOfInput = e.isCaretAtEndOfInput = e.getRange = e.getCaretNodeAndOffset = e.focus = e.getContenteditableSlice = e.checkContenteditableSliceForEmptiness = void 0;
    var t = Pe2;
    Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: true, get: function() {
      return t.checkContenteditableSliceForEmptiness;
    } });
    var n3 = rt2;
    Object.defineProperty(e, "getContenteditableSlice", { enumerable: true, get: function() {
      return n3.getContenteditableSlice;
    } });
    var r3 = it2;
    Object.defineProperty(e, "focus", { enumerable: true, get: function() {
      return r3.focus;
    } });
    var i = Te2;
    Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: true, get: function() {
      return i.getCaretNodeAndOffset;
    } });
    var a6 = at2;
    Object.defineProperty(e, "getRange", { enumerable: true, get: function() {
      return a6.getRange;
    } });
    var l3 = lt2;
    Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: true, get: function() {
      return l3.isCaretAtEndOfInput;
    } });
    var s6 = st2;
    Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: true, get: function() {
      return s6.isCaretAtStartOfInput;
    } });
    var o4 = ot2;
    Object.defineProperty(e, "save", { enumerable: true, get: function() {
      return o4.save;
    } });
  })(P);
  var f = class _f {
    /**
     * Getter for all CSS classes used in unordered list rendering
     */
    static get CSS() {
      return {
        ...h2,
        checklist: `${m}-checklist`,
        itemChecked: `${m}__checkbox--checked`,
        noHover: `${m}__checkbox--no-hover`,
        checkbox: `${m}__checkbox-check`,
        checkboxContainer: `${m}__checkbox`
      };
    }
    /**
     * Assign passed readonly mode and config to relevant class properties
     * @param readonly - read-only mode flag
     * @param config - user config for Tool
     */
    constructor(t, n3) {
      this.config = n3, this.readOnly = t;
    }
    /**
     * Renders ul wrapper for list
     * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
     * @returns - created html ul element
     */
    renderWrapper(t) {
      let n3;
      return t === true ? (n3 = c.make("ul", [_f.CSS.wrapper, _f.CSS.checklist]), n3.addEventListener("click", (r3) => {
        const i = r3.target;
        if (i) {
          const a6 = i.closest(`.${_f.CSS.checkboxContainer}`);
          a6 && a6.contains(i) && this.toggleCheckbox(a6);
        }
      })) : n3 = c.make("ul", [_f.CSS.checklist, _f.CSS.itemChildren]), n3;
    }
    /**
     * Redners list item element
     * @param content - content used in list item rendering
     * @param meta - meta of the list item used in rendering of the checklist
     * @returns - created html list item element
     */
    renderItem(t, n3) {
      const r3 = c.make("li", [_f.CSS.item, _f.CSS.item]), i = c.make("div", _f.CSS.itemContent, {
        innerHTML: t,
        contentEditable: (!this.readOnly).toString()
      }), a6 = c.make("span", _f.CSS.checkbox), l3 = c.make("div", _f.CSS.checkboxContainer);
      return n3.checked === true && l3.classList.add(_f.CSS.itemChecked), a6.innerHTML = Ct2, l3.appendChild(a6), r3.appendChild(l3), r3.appendChild(i), r3;
    }
    /**
     * Return the item content
     * @param item - item wrapper (<li>)
     * @returns - item content string
     */
    getItemContent(t) {
      const n3 = t.querySelector(`.${_f.CSS.itemContent}`);
      return !n3 || c.isEmpty(n3) ? "" : n3.innerHTML;
    }
    /**
     * Return meta object of certain element
     * @param item - will be returned meta information of this item
     * @returns Item meta object
     */
    getItemMeta(t) {
      const n3 = t.querySelector(`.${_f.CSS.checkboxContainer}`);
      return {
        checked: n3 ? n3.classList.contains(_f.CSS.itemChecked) : false
      };
    }
    /**
     * Returns default item meta used on creation of the new item
     */
    composeDefaultMeta() {
      return { checked: false };
    }
    /**
     * Toggle checklist item state
     * @param checkbox - checkbox element to be toggled
     */
    toggleCheckbox(t) {
      t.classList.toggle(_f.CSS.itemChecked), t.classList.add(_f.CSS.noHover), t.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(t), { once: true });
    }
    /**
     * Removes class responsible for special hover behavior on an item
     * @param el - item wrapper
     */
    removeSpecialHoverBehavior(t) {
      t.classList.remove(_f.CSS.noHover);
    }
  };
  function U2(e, t = "after") {
    const n3 = [];
    let r3;
    function i(a6) {
      switch (t) {
        case "after":
          return a6.nextElementSibling;
        case "before":
          return a6.previousElementSibling;
      }
    }
    for (r3 = i(e); r3 !== null; )
      n3.push(r3), r3 = i(r3);
    return n3.length !== 0 ? n3 : null;
  }
  function y2(e, t = true) {
    let n3 = e;
    return e.classList.contains(h2.item) && (n3 = e.querySelector(`.${h2.itemChildren}`)), n3 === null ? [] : t ? Array.from(n3.querySelectorAll(`:scope > .${h2.item}`)) : Array.from(n3.querySelectorAll(`.${h2.item}`));
  }
  function lr(e) {
    return e.nextElementSibling === null;
  }
  function sr(e) {
    return e.querySelector(`.${h2.itemChildren}`) !== null;
  }
  function C(e) {
    return e.querySelector(`.${h2.itemChildren}`);
  }
  function z2(e) {
    let t = e;
    e.classList.contains(h2.item) && (t = C(e)), t !== null && y2(t).length === 0 && t.remove();
  }
  function N2(e) {
    return e.querySelector(`.${h2.itemContent}`);
  }
  function E(e, t = true) {
    const n3 = N2(e);
    n3 && P.focus(n3, t);
  }
  var K2 = class {
    /**
     * Getter method to get current item
     * @returns current list item or null if caret position is not undefined
     */
    get currentItem() {
      const t = window.getSelection();
      if (!t)
        return null;
      let n3 = t.anchorNode;
      return !n3 || (O2(n3) || (n3 = n3.parentNode), !n3) || !O2(n3) ? null : n3.closest(`.${h2.item}`);
    }
    /**
     * Method that returns nesting level of the current item, null if there is no selection
     */
    get currentItemLevel() {
      const t = this.currentItem;
      if (t === null)
        return null;
      let n3 = t.parentNode, r3 = 0;
      for (; n3 !== null && n3 !== this.listWrapper; )
        O2(n3) && n3.classList.contains(h2.item) && (r3 += 1), n3 = n3.parentNode;
      return r3 + 1;
    }
    /**
     * Assign all passed params and renderer to relevant class properties
     * @param params - tool constructor options
     * @param params.data - previously saved data
     * @param params.config - user config for Tool
     * @param params.api - Editor.js API
     * @param params.readOnly - read-only mode flag
     * @param renderer - renderer instance initialized in tool class
     */
    constructor({ data: t, config: n3, api: r3, readOnly: i, block: a6 }, l3) {
      this.config = n3, this.data = t, this.readOnly = i, this.api = r3, this.block = a6, this.renderer = l3;
    }
    /**
     * Function that is responsible for rendering list with contents
     * @returns Filled with content wrapper element of the list
     */
    render() {
      return this.listWrapper = this.renderer.renderWrapper(true), this.data.items.length ? this.appendItems(this.data.items, this.listWrapper) : this.appendItems(
        [
          {
            content: "",
            meta: {},
            items: []
          }
        ],
        this.listWrapper
      ), this.readOnly || this.listWrapper.addEventListener(
        "keydown",
        (t) => {
          switch (t.key) {
            case "Enter":
              this.enterPressed(t);
              break;
            case "Backspace":
              this.backspace(t);
              break;
            case "Tab":
              t.shiftKey ? this.shiftTab(t) : this.addTab(t);
              break;
          }
        },
        false
      ), "start" in this.data.meta && this.data.meta.start !== void 0 && this.changeStartWith(this.data.meta.start), "counterType" in this.data.meta && this.data.meta.counterType !== void 0 && this.changeCounters(this.data.meta.counterType), this.listWrapper;
    }
    /**
     * Function that is responsible for list content saving
     * @param wrapper - optional argument wrapper
     * @returns whole list saved data if wrapper not passes, otherwise will return data of the passed wrapper
     */
    save(t) {
      const n3 = t ?? this.listWrapper, r3 = (l3) => y2(l3).map((o4) => {
        const d4 = C(o4), u2 = this.renderer.getItemContent(o4), p2 = this.renderer.getItemMeta(o4), g4 = d4 ? r3(d4) : [];
        return {
          content: u2,
          meta: p2,
          items: g4
        };
      }), i = n3 ? r3(n3) : [];
      let a6 = {
        style: this.data.style,
        meta: {},
        items: i
      };
      return this.data.style === "ordered" && (a6.meta = {
        start: this.data.meta.start,
        counterType: this.data.meta.counterType
      }), a6;
    }
    /**
     * On paste sanitzation config. Allow only tags that are allowed in the Tool.
     * @returns - config that determines tags supposted by paste handler
     * @todo - refactor and move to list instance
     */
    static get pasteConfig() {
      return {
        tags: ["OL", "UL", "LI"]
      };
    }
    /**
     * Method that specified hot to merge two List blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * Content of the first item of the next List would be merged with deepest item in current list
     * Other items of the next List would be appended to the current list without any changes in nesting levels
     * @param data - data of the second list to be merged with current
     */
    merge(t) {
      const n3 = this.block.holder.querySelectorAll(`.${h2.item}`), r3 = n3[n3.length - 1], i = N2(r3);
      if (r3 === null || i === null || (i.insertAdjacentHTML("beforeend", t.items[0].content), this.listWrapper === void 0))
        return;
      const a6 = y2(this.listWrapper);
      if (a6.length === 0)
        return;
      const l3 = a6[a6.length - 1];
      let s6 = C(l3);
      const o4 = t.items.shift();
      o4 !== void 0 && (o4.items.length !== 0 && (s6 === null && (s6 = this.renderer.renderWrapper(false)), this.appendItems(o4.items, s6)), t.items.length > 0 && this.appendItems(t.items, this.listWrapper));
    }
    /**
     * On paste callback that is fired from Editor.
     * @param event - event with pasted data
     * @todo - refactor and move to list instance
     */
    onPaste(t) {
      const n3 = t.detail.data;
      this.data = this.pasteHandler(n3);
      const r3 = this.listWrapper;
      r3 && r3.parentNode && r3.parentNode.replaceChild(this.render(), r3);
    }
    /**
     * Handle UL, OL and LI tags paste and returns List data
     * @param element - html element that contains whole list
     * @todo - refactor and move to list instance
     */
    pasteHandler(t) {
      const { tagName: n3 } = t;
      let r3 = "unordered", i;
      switch (n3) {
        case "OL":
          r3 = "ordered", i = "ol";
          break;
        case "UL":
        case "LI":
          r3 = "unordered", i = "ul";
      }
      const a6 = {
        style: r3,
        meta: {},
        items: []
      };
      r3 === "ordered" && (this.data.meta.counterType = "numeric", this.data.meta.start = 1);
      const l3 = (s6) => Array.from(s6.querySelectorAll(":scope > li")).map((d4) => {
        const u2 = d4.querySelector(`:scope > ${i}`), p2 = u2 ? l3(u2) : [];
        return {
          content: d4.innerHTML ?? "",
          meta: {},
          items: p2
        };
      });
      return a6.items = l3(t), a6;
    }
    /**
     * Changes ordered list start property value
     * @param index - new value of the start property
     */
    changeStartWith(t) {
      this.listWrapper.style.setProperty("counter-reset", `item ${t - 1}`), this.data.meta.start = t;
    }
    /**
     * Changes ordered list counterType property value
     * @param counterType - new value of the counterType value
     */
    changeCounters(t) {
      this.listWrapper.style.setProperty("--list-counter-type", t), this.data.meta.counterType = t;
    }
    /**
     * Handles Enter keypress
     * @param event - keydown
     */
    enterPressed(t) {
      var s6;
      const n3 = this.currentItem;
      if (t.stopPropagation(), t.preventDefault(), t.isComposing || n3 === null)
        return;
      const r3 = ((s6 = this.renderer) == null ? void 0 : s6.getItemContent(n3).trim().length) === 0, i = n3.parentNode === this.listWrapper, a6 = n3.previousElementSibling === null, l3 = this.api.blocks.getCurrentBlockIndex();
      if (i && r3)
        if (lr(n3) && !sr(n3)) {
          a6 ? this.convertItemToDefaultBlock(l3, true) : this.convertItemToDefaultBlock();
          return;
        } else {
          this.splitList(n3);
          return;
        }
      else if (r3) {
        this.unshiftItem(n3);
        return;
      } else
        this.splitItem(n3);
    }
    /**
     * Handle backspace
     * @param event - keydown
     */
    backspace(t) {
      const n3 = this.currentItem;
      if (n3 !== null && P.isCaretAtStartOfInput(n3)) {
        if (t.stopPropagation(), n3.parentNode === this.listWrapper && n3.previousElementSibling === null) {
          this.convertFirstItemToDefaultBlock();
          return;
        }
        t.preventDefault(), this.mergeItemWithPrevious(n3);
      }
    }
    /**
     * Reduce indentation for current item
     * @param event - keydown
     */
    shiftTab(t) {
      t.stopPropagation(), t.preventDefault(), this.currentItem !== null && this.unshiftItem(this.currentItem);
    }
    /**
     * Decrease indentation of the passed item
     * @param item - list item to be unshifted
     */
    unshiftItem(t) {
      if (!t.parentNode || !O2(t.parentNode))
        return;
      const n3 = t.parentNode.closest(`.${h2.item}`);
      if (!n3)
        return;
      let r3 = C(t);
      if (t.parentElement === null)
        return;
      const i = U2(t);
      i !== null && (r3 === null && (r3 = this.renderer.renderWrapper(false)), i.forEach((a6) => {
        r3.appendChild(a6);
      }), t.appendChild(r3)), n3.after(t), E(t, false), z2(n3);
    }
    /**
     * Method that is used for list splitting and moving trailing items to the new separated list
     * @param item - current item html element
     */
    splitList(t) {
      const n3 = y2(t), r3 = this.block, i = this.api.blocks.getCurrentBlockIndex();
      if (n3.length !== 0) {
        const o4 = n3[0];
        this.unshiftItem(o4), E(t, false);
      }
      if (t.previousElementSibling === null && t.parentNode === this.listWrapper) {
        this.convertItemToDefaultBlock(i);
        return;
      }
      const a6 = U2(t);
      if (a6 === null)
        return;
      const l3 = this.renderer.renderWrapper(true);
      a6.forEach((o4) => {
        l3.appendChild(o4);
      });
      const s6 = this.save(l3);
      s6.meta.start = this.data.style == "ordered" ? 1 : void 0, this.api.blocks.insert(r3 == null ? void 0 : r3.name, s6, this.config, i + 1), this.convertItemToDefaultBlock(i + 1), l3.remove();
    }
    /**
     * Method that is used for splitting item content and moving trailing content to the new sibling item
     * @param currentItem - current item html element
     */
    splitItem(t) {
      const [n3, r3] = P.getCaretNodeAndOffset();
      if (n3 === null)
        return;
      const i = N2(t);
      let a6;
      i === null ? a6 = "" : a6 = P.getContenteditableSlice(i, n3, r3, "right", true);
      const l3 = C(t), s6 = this.renderItem(a6);
      t == null || t.after(s6), l3 && s6.appendChild(l3), E(s6);
    }
    /**
     * Method that is used for merging current item with previous one
     * Content of the current item would be appended to the previous item
     * Current item children would not change nesting level
     * @param item - current item html element
     */
    mergeItemWithPrevious(t) {
      const n3 = t.previousElementSibling, r3 = t.parentNode;
      if (r3 === null || !O2(r3))
        return;
      const i = r3.closest(`.${h2.item}`);
      if (!n3 && !i || n3 && !O2(n3))
        return;
      let a6;
      if (n3) {
        const p2 = y2(n3, false);
        p2.length !== 0 && p2.length !== 0 ? a6 = p2[p2.length - 1] : a6 = n3;
      } else
        a6 = i;
      const l3 = this.renderer.getItemContent(t);
      if (!a6)
        return;
      E(a6, false);
      const s6 = N2(a6);
      if (s6 === null)
        return;
      s6.insertAdjacentHTML("beforeend", l3);
      const o4 = y2(t);
      if (o4.length === 0) {
        t.remove(), z2(a6);
        return;
      }
      const d4 = n3 || i, u2 = C(d4) ?? this.renderer.renderWrapper(false);
      n3 ? o4.forEach((p2) => {
        u2.appendChild(p2);
      }) : o4.forEach((p2) => {
        u2.prepend(p2);
      }), C(d4) === null && a6.appendChild(u2), t.remove();
    }
    /**
     * Add indentation to current item
     * @param event - keydown
     */
    addTab(t) {
      var a6;
      t.stopPropagation(), t.preventDefault();
      const n3 = this.currentItem;
      if (!n3)
        return;
      if (((a6 = this.config) == null ? void 0 : a6.maxLevel) !== void 0) {
        const l3 = this.currentItemLevel;
        if (l3 !== null && l3 === this.config.maxLevel)
          return;
      }
      const r3 = n3.previousSibling;
      if (r3 === null || !O2(r3))
        return;
      const i = C(r3);
      if (i)
        i.appendChild(n3), y2(n3).forEach((s6) => {
          i.appendChild(s6);
        });
      else {
        const l3 = this.renderer.renderWrapper(false);
        l3.appendChild(n3), y2(n3).forEach((o4) => {
          l3.appendChild(o4);
        }), r3.appendChild(l3);
      }
      z2(n3), E(n3, false);
    }
    /**
     * Convert current item to default block with passed index
     * @param newBloxkIndex - optional parameter represents index, where would be inseted default block
     * @param removeList - optional parameter, that represents condition, if List should be removed
     */
    convertItemToDefaultBlock(t, n3) {
      let r3;
      const i = this.currentItem, a6 = i !== null ? this.renderer.getItemContent(i) : "";
      n3 === true && this.api.blocks.delete(), t !== void 0 ? r3 = this.api.blocks.insert(void 0, { text: a6 }, void 0, t) : r3 = this.api.blocks.insert(), i == null || i.remove(), this.api.caret.setToBlock(r3, "start");
    }
    /**
     * Convert first item of the list to default block
     * This method could be called when backspace button pressed at start of the first item of the list
     * First item of the list would be converted to the paragraph and first item children would be unshifted
     */
    convertFirstItemToDefaultBlock() {
      const t = this.currentItem;
      if (t === null)
        return;
      const n3 = y2(t);
      if (n3.length !== 0) {
        const l3 = n3[0];
        this.unshiftItem(l3), E(t);
      }
      const r3 = U2(t), i = this.api.blocks.getCurrentBlockIndex(), a6 = r3 === null;
      this.convertItemToDefaultBlock(i, a6);
    }
    /**
     * Method that calls render function of the renderer with a necessary item meta cast
     * @param itemContent - content to be rendered in new item
     * @param meta - meta used in list item rendering
     * @returns html element of the rendered item
     */
    renderItem(t, n3) {
      const r3 = n3 ?? this.renderer.composeDefaultMeta();
      switch (true) {
        case this.renderer instanceof v2:
          return this.renderer.renderItem(t, r3);
        case this.renderer instanceof b2:
          return this.renderer.renderItem(t, r3);
        default:
          return this.renderer.renderItem(t, r3);
      }
    }
    /**
     * Renders children list
     * @param items - list data used in item rendering
     * @param parentElement - where to append passed items
     */
    appendItems(t, n3) {
      t.forEach((r3) => {
        var a6;
        const i = this.renderItem(r3.content, r3.meta);
        if (n3.appendChild(i), r3.items.length) {
          const l3 = (a6 = this.renderer) == null ? void 0 : a6.renderWrapper(false);
          this.appendItems(r3.items, l3), i.appendChild(l3);
        }
      });
    }
  };
  var I2 = {
    wrapper: `${m}-start-with-field`,
    input: `${m}-start-with-field__input`,
    startWithElementWrapperInvalid: `${m}-start-with-field--invalid`
  };
  function or(e, { value: t, placeholder: n3, attributes: r3, sanitize: i }) {
    const a6 = c.make("div", I2.wrapper), l3 = c.make("input", I2.input, {
      placeholder: n3,
      /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */
      tabIndex: -1,
      /**
       * Value of the start property, if it is not specified, then it is set to one
       */
      value: t
    });
    for (const s6 in r3)
      l3.setAttribute(s6, r3[s6]);
    return a6.appendChild(l3), l3.addEventListener("input", () => {
      i !== void 0 && (l3.value = i(l3.value));
      const s6 = l3.checkValidity();
      !s6 && !a6.classList.contains(I2.startWithElementWrapperInvalid) && a6.classList.add(I2.startWithElementWrapperInvalid), s6 && a6.classList.contains(I2.startWithElementWrapperInvalid) && a6.classList.remove(I2.startWithElementWrapperInvalid), s6 && e(l3.value);
    }), a6;
  }
  var M = /* @__PURE__ */ new Map([
    /**
     * Value that represents default arabic numbers for counters
     */
    ["Numeric", "numeric"],
    /**
     * Value that represents lower roman numbers for counteres
     */
    ["Lower Roman", "lower-roman"],
    /**
     * Value that represents upper roman numbers for counters
     */
    ["Upper Roman", "upper-roman"],
    /**
     * Value that represents lower alpha characters for counters
     */
    ["Lower Alpha", "lower-alpha"],
    /**
     * Value that represents upper alpha characters for counters
     */
    ["Upper Alpha", "upper-alpha"]
  ]);
  var He = /* @__PURE__ */ new Map([
    /**
     * Value that represents Icon for Numeric counter type
     */
    ["numeric", St2],
    /**
     * Value that represents Icon for Lower Roman counter type
     */
    ["lower-roman", Ot2],
    /**
     * Value that represents Icon for Upper Roman counter type
     */
    ["upper-roman", kt2],
    /**
     * Value that represents Icon for Lower Alpha counter type
     */
    ["lower-alpha", Et2],
    /**
     * Value that represents Icon for Upper Alpha counter type
     */
    ["upper-alpha", _t2]
  ]);
  function ur(e) {
    return e.replace(/\D+/g, "");
  }
  function cr(e) {
    return typeof e.items[0] == "string";
  }
  function dr(e) {
    return typeof e.items[0] != "string" && "text" in e.items[0] && "checked" in e.items[0] && typeof e.items[0].text == "string" && typeof e.items[0].checked == "boolean";
  }
  function fr(e) {
    const t = [];
    return cr(e) ? (e.items.forEach((n3) => {
      t.push({
        content: n3,
        meta: {},
        items: []
      });
    }), {
      style: e.style,
      meta: {},
      items: t
    }) : dr(e) ? (e.items.forEach((n3) => {
      t.push({
        content: n3.text,
        meta: {
          checked: n3.checked
        },
        items: []
      });
    }), {
      style: "checklist",
      meta: {},
      items: t
    }) : e;
  }
  var G2 = class _G {
    /**
     * Notify core that read-only mode is supported
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allow to use native Enter behaviour
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     */
    static get toolbox() {
      return [
        {
          icon: $e2,
          title: "Unordered List",
          data: {
            style: "unordered"
          }
        },
        {
          icon: Be2,
          title: "Ordered List",
          data: {
            style: "ordered"
          }
        },
        {
          icon: Ae2,
          title: "Checklist",
          data: {
            style: "checklist"
          }
        }
      ];
    }
    /**
     * On paste sanitzation config. Allow only tags that are allowed in the Tool.
     * @returns - paste config object used in editor
     */
    static get pasteConfig() {
      return {
        tags: ["OL", "UL", "LI"]
      };
    }
    /**
     * Convert from text to list with import and export list to text
     */
    static get conversionConfig() {
      return {
        export: (t) => _G.joinRecursive(t),
        import: (t, n3) => ({
          meta: {},
          items: [
            {
              content: t,
              meta: {},
              items: []
            }
          ],
          style: (n3 == null ? void 0 : n3.defaultStyle) !== void 0 ? n3.defaultStyle : "unordered"
        })
      };
    }
    /**
     * Get list style name
     */
    get listStyle() {
      return this.data.style || this.defaultListStyle;
    }
    /**
     * Set list style
     * @param style - new style to set
     */
    set listStyle(t) {
      var r3;
      this.data.style = t, this.changeTabulatorByStyle();
      const n3 = this.list.render();
      (r3 = this.listElement) == null || r3.replaceWith(n3), this.listElement = n3;
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     * @param params - tool constructor options
     * @param params.data - previously saved data
     * @param params.config - user config for Tool
     * @param params.api - Editor.js API
     * @param params.readOnly - read-only mode flag
     */
    constructor({ data: t, config: n3, api: r3, readOnly: i, block: a6 }) {
      var s6;
      this.api = r3, this.readOnly = i, this.config = n3, this.block = a6, this.defaultListStyle = ((s6 = this.config) == null ? void 0 : s6.defaultStyle) || "unordered";
      const l3 = {
        style: this.defaultListStyle,
        meta: {},
        items: []
      };
      this.data = Object.keys(t).length ? fr(t) : l3, this.listStyle === "ordered" && this.data.meta.counterType === void 0 && (this.data.meta.counterType = "numeric"), this.changeTabulatorByStyle();
    }
    /**
     * Convert from list to text for conversionConfig
     * @param data - current data of the list
     * @returns - string of the recursively merged contents of the items of the list
     */
    static joinRecursive(t) {
      return t.items.map((n3) => `${n3.content} ${_G.joinRecursive(n3)}`).join("");
    }
    /**
     * Function that is responsible for content rendering
     * @returns rendered list wrapper with all contents
     */
    render() {
      return this.listElement = this.list.render(), this.listElement;
    }
    /**
     * Function that is responsible for content saving
     * @returns formatted content used in editor
     */
    save() {
      return this.data = this.list.save(), this.data;
    }
    /**
     * Function that is responsible for mergind two lists into one
     * @param data - data of the next standing list, that should be merged with current
     */
    merge(t) {
      this.list.merge(t);
    }
    /**
     * Creates Block Tune allowing to change the list style
     * @returns array of tune configs
     */
    renderSettings() {
      const t = [
        {
          label: this.api.i18n.t("Unordered"),
          icon: $e2,
          closeOnActivate: true,
          isActive: this.listStyle == "unordered",
          onActivate: () => {
            this.listStyle = "unordered";
          }
        },
        {
          label: this.api.i18n.t("Ordered"),
          icon: Be2,
          closeOnActivate: true,
          isActive: this.listStyle == "ordered",
          onActivate: () => {
            this.listStyle = "ordered";
          }
        },
        {
          label: this.api.i18n.t("Checklist"),
          icon: Ae2,
          closeOnActivate: true,
          isActive: this.listStyle == "checklist",
          onActivate: () => {
            this.listStyle = "checklist";
          }
        }
      ];
      if (this.listStyle === "ordered") {
        const n3 = or(
          (a6) => this.changeStartWith(Number(a6)),
          {
            value: String(this.data.meta.start ?? 1),
            placeholder: "",
            attributes: {
              required: "true"
            },
            sanitize: (a6) => ur(a6)
          }
        ), r3 = [
          {
            label: this.api.i18n.t("Start with"),
            icon: It2,
            children: {
              items: [
                {
                  element: n3,
                  // @ts-expect-error ts(2820) can not use PopoverItem enum from editor.js types
                  type: "html"
                }
              ]
            }
          }
        ], i = {
          label: this.api.i18n.t("Counter type"),
          icon: He.get(this.data.meta.counterType),
          children: {
            items: []
          }
        };
        M.forEach((a6, l3) => {
          i.children.items.push({
            title: this.api.i18n.t(l3),
            icon: He.get(M.get(l3)),
            isActive: this.data.meta.counterType === M.get(l3),
            closeOnActivate: true,
            onActivate: () => {
              this.changeCounters(M.get(l3));
            }
          });
        }), t.push({ type: "separator" }, ...r3, i);
      }
      return t;
    }
    /**
     * On paste callback that is fired from Editor.
     * @param event - event with pasted data
     */
    onPaste(t) {
      const { tagName: n3 } = t.detail.data;
      switch (n3) {
        case "OL":
          this.listStyle = "ordered";
          break;
        case "UL":
        case "LI":
          this.listStyle = "unordered";
      }
      this.list.onPaste(t);
    }
    /**
     * Handle UL, OL and LI tags paste and returns List data
     * @param element - html element that contains whole list
     */
    pasteHandler(t) {
      return this.list.pasteHandler(t);
    }
    /**
     * Changes ordered list counterType property value
     * @param counterType - new value of the counterType value
     */
    changeCounters(t) {
      var n3;
      (n3 = this.list) == null || n3.changeCounters(t), this.data.meta.counterType = t;
    }
    /**
     * Changes ordered list start property value
     * @param index - new value of the start property
     */
    changeStartWith(t) {
      var n3;
      (n3 = this.list) == null || n3.changeStartWith(t), this.data.meta.start = t;
    }
    /**
     * This method allows changing tabulator respectfully to passed style
     */
    changeTabulatorByStyle() {
      switch (this.listStyle) {
        case "ordered":
          this.list = new K2(
            {
              data: this.data,
              readOnly: this.readOnly,
              api: this.api,
              config: this.config,
              block: this.block
            },
            new v2(this.readOnly, this.config)
          );
          break;
        case "unordered":
          this.list = new K2(
            {
              data: this.data,
              readOnly: this.readOnly,
              api: this.api,
              config: this.config,
              block: this.block
            },
            new b2(this.readOnly, this.config)
          );
          break;
        case "checklist":
          this.list = new K2(
            {
              data: this.data,
              readOnly: this.readOnly,
              api: this.api,
              config: this.config,
              block: this.block
            },
            new f(this.readOnly, this.config)
          );
          break;
      }
    }
  };

  // node_modules/@editorjs/paragraph/dist/paragraph.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(e);
      }
    } catch (a6) {
      console.error("vite-plugin-css-injected-by-js", a6);
    }
  })();
  var a2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
  function l2(r3) {
    const t = document.createElement("div");
    t.innerHTML = r3.trim();
    const e = document.createDocumentFragment();
    return e.append(...Array.from(t.childNodes)), e;
  }
  var n = class _n2 {
    /**
     * Default placeholder for Paragraph Tool
     *
     * @returns {string}
     * @class
     */
    static get DEFAULT_PLACEHOLDER() {
      return "";
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - constructor params
     * @param {ParagraphData} params.data - previously saved data
     * @param {ParagraphConfig} params.config - user config for Tool
     * @param {object} params.api - editor.js api
     * @param {boolean} readOnly - read only mode flag
     */
    constructor({ data: t, config: e, api: i, readOnly: s6 }) {
      this.api = i, this.readOnly = s6, this._CSS = {
        block: this.api.styles.block,
        wrapper: "ce-paragraph"
      }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = e.placeholder ? e.placeholder : _n2.DEFAULT_PLACEHOLDER, this._data = t ?? {}, this._element = null, this._preserveBlank = e.preserveBlank ?? false;
    }
    /**
     * Check if text content is empty and set empty string to inner html.
     * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
     *
     * @param {KeyboardEvent} e - key up event
     */
    onKeyUp(t) {
      if (t.code !== "Backspace" && t.code !== "Delete" || !this._element)
        return;
      const { textContent: e } = this._element;
      e === "" && (this._element.innerHTML = "");
    }
    /**
     * Create Tool's view
     *
     * @returns {HTMLDivElement}
     * @private
     */
    drawView() {
      const t = document.createElement("DIV");
      return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = "false", t.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (t.innerHTML = this._data.text), this.readOnly || (t.contentEditable = "true", t.addEventListener("keyup", this.onKeyUp)), t;
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render() {
      return this._element = this.drawView(), this._element;
    }
    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {ParagraphData} data
     * @public
     */
    merge(t) {
      if (!this._element)
        return;
      this._data.text += t.text;
      const e = l2(t.text);
      this._element.appendChild(e), this._element.normalize();
    }
    /**
     * Validate Paragraph block data:
     * - check for emptiness
     *
     * @param {ParagraphData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(t) {
      return !(t.text.trim() === "" && !this._preserveBlank);
    }
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {ParagraphData} - saved data
     * @public
     */
    save(t) {
      return {
        text: t.innerHTML
      };
    }
    /**
     * On paste callback fired from Editor.
     *
     * @param {HTMLPasteEvent} event - event with pasted data
     */
    onPaste(t) {
      const e = {
        text: t.detail.data.innerHTML
      };
      this._data = e, window.requestAnimationFrame(() => {
        this._element && (this._element.innerHTML = this._data.text || "");
      });
    }
    /**
     * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
     * @returns {ConversionConfig}
     */
    static get conversionConfig() {
      return {
        export: "text",
        // to convert Paragraph to other block, use 'text' property of saved data
        import: "text"
        // to covert other block's exported string to Paragraph, fill 'text' property of tool data
      };
    }
    /**
     * Sanitizer rules
     * @returns {SanitizerConfig} - Edtior.js sanitizer config
     */
    static get sanitize() {
      return {
        text: {
          br: true
        }
      };
    }
    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Used by Editor paste handling API.
     * Provides configuration to handle P tags.
     *
     * @returns {PasteConfig} - Paragraph Paste Setting
     */
    static get pasteConfig() {
      return {
        tags: ["P"]
      };
    }
    /**
     * Icon and title for displaying at the Toolbox
     *
     * @returns {ToolboxConfig} - Paragraph Toolbox Setting
     */
    static get toolbox() {
      return {
        icon: a2,
        title: "Text"
      };
    }
  };

  // node_modules/@editorjs/delimiter/dist/delimiter.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode('.ce-delimiter{line-height:1.6em;width:100%;text-align:center}.ce-delimiter:before{display:inline-block;content:"***";font-size:30px;line-height:65px;height:30px;letter-spacing:.2em}')), document.head.appendChild(e);
      }
    } catch (t) {
      console.error("vite-plugin-css-injected-by-js", t);
    }
  })();
  var r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var n2 = class {
    /**
     * Notify core that read-only mode is supported
     * @return {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allow Tool to have no content
     * @return {boolean}
     */
    static get contentless() {
      return true;
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {{data: DelimiterData, config: object, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     */
    constructor({ data: t, config: s6, api: e }) {
      this.api = e, this._CSS = {
        block: this.api.styles.block,
        wrapper: "ce-delimiter"
      }, this._element = this.drawView(), this.data = t;
    }
    /**
     * Create Tool's view
     * @return {HTMLDivElement}
     * @private
     */
    drawView() {
      let t = document.createElement("div");
      return t.classList.add(this._CSS.wrapper, this._CSS.block), t;
    }
    /**
     * Return Tool's view
     * @returns {HTMLDivElement}
     * @public
     */
    render() {
      return this._element;
    }
    /**
     * Extract Tool's data from the view
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {DelimiterData} - saved data
     * @public
     */
    save(t) {
      return {};
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @return {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: r,
        title: "Delimiter"
      };
    }
    /**
     * Delimiter onPaste configuration
     *
     * @public
     */
    static get pasteConfig() {
      return { tags: ["HR"] };
    }
    /**
     * On paste callback that is fired from Editor
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(t) {
      this.data = {};
    }
  };

  // node_modules/@editorjs/marker/dist/marker.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".cdx-marker{background:rgba(245,235,111,.29);padding:3px 0}")), document.head.appendChild(e);
      }
    } catch (d4) {
      console.error("vite-plugin-css-injected-by-js", d4);
    }
  })();
  var o2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.3536 9.31802L12.7678 7.90381C13.5488 7.12276 14.8151 7.12276 15.5962 7.90381C16.3772 8.68486 16.3772 9.95119 15.5962 10.7322L14.182 12.1464M11.3536 9.31802L7.96729 12.7043C7.40889 13.2627 7.02827 13.9739 6.8734 14.7482L6.69798 15.6253C6.55804 16.325 7.17496 16.942 7.87468 16.802L8.75176 16.6266C9.52612 16.4717 10.2373 16.0911 10.7957 15.5327L14.182 12.1464M11.3536 9.31802L14.182 12.1464"/><line x1="15" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var s = class _s {
    /**
     * Class name for term-tag
     *
     * @type {string}
     */
    static get CSS() {
      return "cdx-marker";
    }
    /**
     * @param {{api: object}}  - Editor.js API
     */
    constructor({ api: t }) {
      this.api = t, this.button = null, this.tag = "MARK", this.iconClasses = {
        base: this.api.styles.inlineToolButton,
        active: this.api.styles.inlineToolButtonActive
      };
    }
    /**
     * Specifies Tool as Inline Toolbar Tool
     *
     * @return {boolean}
     */
    static get isInline() {
      return true;
    }
    /**
     * Create button element for Toolbar
     *
     * @return {HTMLElement}
     */
    render() {
      return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
    }
    /**
     * Wrap/Unwrap selected fragment
     *
     * @param {Range} range - selected fragment
     */
    surround(t) {
      if (!t)
        return;
      let e = this.api.selection.findParentTag(this.tag, _s.CSS);
      e ? this.unwrap(e) : this.wrap(t);
    }
    /**
     * Wrap selection with term-tag
     *
     * @param {Range} range - selected fragment
     */
    wrap(t) {
      let e = document.createElement(this.tag);
      e.classList.add(_s.CSS), e.appendChild(t.extractContents()), t.insertNode(e), this.api.selection.expandToTag(e);
    }
    /**
     * Unwrap term-tag
     *
     * @param {HTMLElement} termWrapper - term wrapper tag
     */
    unwrap(t) {
      this.api.selection.expandToTag(t);
      let e = window.getSelection(), n3 = e.getRangeAt(0), i = n3.extractContents();
      t.parentNode.removeChild(t), n3.insertNode(i), e.removeAllRanges(), e.addRange(n3);
    }
    /**
     * Check and change Term's state for current selection
     */
    checkState() {
      const t = this.api.selection.findParentTag(this.tag, _s.CSS);
      this.button.classList.toggle(this.iconClasses.active, !!t);
    }
    /**
     * Get Tool icon's SVG
     * @return {string}
     */
    get toolboxIcon() {
      return o2;
    }
    /**
     * Sanitizer rule
     * @return {{mark: {class: string}}}
     */
    static get sanitize() {
      return {
        mark: {
          class: _s.CSS
        }
      };
    }
  };

  // node_modules/@editorjs/inline-code/dist/inline-code.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".inline-code{background:rgba(250,239,240,.78);color:#b44437;padding:3px 4px;border-radius:5px;margin:0 1px;font-family:inherit;font-size:.86em;font-weight:500;letter-spacing:.3px}")), document.head.appendChild(e);
      }
    } catch (n3) {
      console.error("vite-plugin-css-injected-by-js", n3);
    }
  })();
  var a3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
  var s2 = class _s {
    constructor({ api: t }) {
      this.tag = "CODE", this.api = t, this.button = null, this.iconClasses = {
        base: this.api.styles.inlineToolButton,
        active: this.api.styles.inlineToolButtonActive
      };
    }
    /**
     * Class name for term-tag
     *
     * @type {string}
     */
    static get CSS() {
      return "inline-code";
    }
    /**
     * Specifies Tool as Inline Toolbar Tool
     *
     * @return {boolean}
     */
    static get isInline() {
      return true;
    }
    /**
     * Create button element for Toolbar
     *
     * @return {HTMLElement}
     */
    render() {
      return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
    }
    /**
     * Wrap/Unwrap selected fragment
     *
     * @param {Range} range - selected fragment
     */
    surround(t) {
      if (!t)
        return;
      let e = this.api.selection.findParentTag(this.tag, _s.CSS);
      e ? this.unwrap(e) : this.wrap(t);
    }
    /**
     * Wrap selection with term-tag
     *
     * @param {Range} range - selected fragment
     */
    wrap(t) {
      let e = document.createElement(this.tag);
      e.classList.add(_s.CSS), e.appendChild(t.extractContents()), t.insertNode(e), this.api.selection.expandToTag(e);
    }
    /**
     * Unwrap term-tag
     *
     * @param {HTMLElement} termWrapper - term wrapper tag
     */
    unwrap(t) {
      var i;
      this.api.selection.expandToTag(t);
      const e = window.getSelection();
      if (!e)
        return;
      const n3 = e.getRangeAt(0), o4 = n3.extractContents();
      (i = t.parentNode) == null || i.removeChild(t), n3.insertNode(o4), e.removeAllRanges(), e.addRange(n3);
    }
    /**
     * Check and change Term's state for current selection
     * 
     * @return {boolean}
     */
    checkState() {
      const t = this.api.selection.findParentTag(this.tag, _s.CSS);
      return this.button && this.button.classList.toggle(this.iconClasses.active, !!t), !!t;
    }
    /**
     * Get Tool icon's SVG
     * @return {string}
     */
    get toolboxIcon() {
      return a3;
    }
    /**
     * Sanitizer rule
     * @return {SanitizerConfig}
     */
    static get sanitize() {
      return {
        code: {
          class: _s.CSS
        }
      };
    }
  };

  // node_modules/@editorjs/table/dist/table.mjs
  (function() {
    var r3;
    "use strict";
    try {
      if (typeof document < "u") {
        var o4 = document.createElement("style");
        o4.nonce = (r3 = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : r3.content, o4.appendChild(document.createTextNode('.tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size)}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table{position:relative;width:100%;height:100%;display:grid;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4}.tc-table:after{width:calc(var(--cell-size));height:100%;left:calc(var(--cell-size)*-1);top:0}.tc-table:after,.tc-table:before{position:absolute;content:""}.tc-table:before{width:100%;height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{font-weight:600;border-bottom:2px solid var(--color-border)}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{padding:4px 0;justify-content:center;border-top:1px solid var(--color-border)}.tc-add-column--disabled{visibility:hidden}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);align-items:center;padding-left:4px;position:relative}.tc-add-row--disabled{display:none}.tc-add-row:before{content:"";position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size);height:100%}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative;border-bottom:1px solid var(--color-border)}.tc-row:after{content:"";pointer-events:none;position:absolute;width:var(--cell-size);height:100%;bottom:-1px;right:calc(var(--cell-size)*-1);border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,opacity}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translate(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--showed{opacity:1}.tc-toolbox .tc-popover{position:absolute;top:0;left:var(--popover-margin)}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);opacity:0;transition:opacity .15s ease;will-change:opacity}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered)}.tc-toolbox__toggler svg{fill:currentColor}.tc-wrap:hover .tc-toolbox__toggler{opacity:1}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;padding:6px;display:none;will-change:opacity,transform}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm)}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:#0000001a}.tc-popover__item--confirm .tc-popover__item-icon svg{transition:transform .2s ease-in;transform:rotate(90deg) scale(1.2)}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}')), document.head.appendChild(o4);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  function c2(d4, t, e = {}) {
    const o4 = document.createElement(d4);
    Array.isArray(t) ? o4.classList.add(...t) : t && o4.classList.add(t);
    for (const i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (o4[i] = e[i]);
    return o4;
  }
  function f2(d4) {
    const t = d4.getBoundingClientRect();
    return {
      y1: Math.floor(t.top + window.pageYOffset),
      x1: Math.floor(t.left + window.pageXOffset),
      x2: Math.floor(t.right + window.pageXOffset),
      y2: Math.floor(t.bottom + window.pageYOffset)
    };
  }
  function g2(d4, t) {
    const e = f2(d4), o4 = f2(t);
    return {
      fromTopBorder: o4.y1 - e.y1,
      fromLeftBorder: o4.x1 - e.x1,
      fromRightBorder: e.x2 - o4.x2,
      fromBottomBorder: e.y2 - o4.y2
    };
  }
  function k2(d4, t) {
    const e = d4.getBoundingClientRect(), { width: o4, height: i, x: n3, y: r3 } = e, { clientX: h5, clientY: l3 } = t;
    return {
      width: o4,
      height: i,
      x: h5 - n3,
      y: l3 - r3
    };
  }
  function m2(d4, t) {
    return t.parentNode.insertBefore(d4, t);
  }
  function C2(d4, t = true) {
    const e = document.createRange(), o4 = window.getSelection();
    e.selectNodeContents(d4), e.collapse(t), o4.removeAllRanges(), o4.addRange(e);
  }
  var a4 = class _a {
    /**
     * @param {object} options - constructor options
     * @param {PopoverItem[]} options.items - constructor options
     */
    constructor({ items: t }) {
      this.items = t, this.wrapper = void 0, this.itemEls = [];
    }
    /**
     * Set of CSS classnames used in popover
     *
     * @returns {object}
     */
    static get CSS() {
      return {
        popover: "tc-popover",
        popoverOpened: "tc-popover--opened",
        item: "tc-popover__item",
        itemHidden: "tc-popover__item--hidden",
        itemConfirmState: "tc-popover__item--confirm",
        itemIcon: "tc-popover__item-icon",
        itemLabel: "tc-popover__item-label"
      };
    }
    /**
     * Returns the popover element
     *
     * @returns {Element}
     */
    render() {
      return this.wrapper = c2("div", _a.CSS.popover), this.items.forEach((t, e) => {
        const o4 = c2("div", _a.CSS.item), i = c2("div", _a.CSS.itemIcon, {
          innerHTML: t.icon
        }), n3 = c2("div", _a.CSS.itemLabel, {
          textContent: t.label
        });
        o4.dataset.index = e, o4.appendChild(i), o4.appendChild(n3), this.wrapper.appendChild(o4), this.itemEls.push(o4);
      }), this.wrapper.addEventListener("click", (t) => {
        this.popoverClicked(t);
      }), this.wrapper;
    }
    /**
     * Popover wrapper click listener
     * Used to delegate clicks in items
     *
     * @returns {void}
     */
    popoverClicked(t) {
      const e = t.target.closest(`.${_a.CSS.item}`);
      if (!e)
        return;
      const o4 = e.dataset.index, i = this.items[o4];
      if (i.confirmationRequired && !this.hasConfirmationState(e)) {
        this.setConfirmationState(e);
        return;
      }
      i.onClick();
    }
    /**
     * Enable the confirmation state on passed item
     *
     * @returns {void}
     */
    setConfirmationState(t) {
      t.classList.add(_a.CSS.itemConfirmState);
    }
    /**
     * Disable the confirmation state on passed item
     *
     * @returns {void}
     */
    clearConfirmationState(t) {
      t.classList.remove(_a.CSS.itemConfirmState);
    }
    /**
     * Check if passed item has the confirmation state
     *
     * @returns {boolean}
     */
    hasConfirmationState(t) {
      return t.classList.contains(_a.CSS.itemConfirmState);
    }
    /**
     * Return an opening state
     *
     * @returns {boolean}
     */
    get opened() {
      return this.wrapper.classList.contains(_a.CSS.popoverOpened);
    }
    /**
     * Opens the popover
     *
     * @returns {void}
     */
    open() {
      this.items.forEach((t, e) => {
        typeof t.hideIf == "function" && this.itemEls[e].classList.toggle(_a.CSS.itemHidden, t.hideIf());
      }), this.wrapper.classList.add(_a.CSS.popoverOpened);
    }
    /**
     * Closes the popover
     *
     * @returns {void}
     */
    close() {
      this.wrapper.classList.remove(_a.CSS.popoverOpened), this.itemEls.forEach((t) => {
        this.clearConfirmationState(t);
      });
    }
  };
  var R3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>';
  var b3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>';
  var x2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>';
  var S2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>';
  var y3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>';
  var L3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>';
  var M2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>';
  var v3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>';
  var O3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
  var T2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  var H3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  var A3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  var w2 = class _w {
    /**
     * Creates toolbox buttons and toolbox menus
     *
     * @param {Object} config
     * @param {any} config.api - Editor.js api
     * @param {PopoverItem[]} config.items - Editor.js api
     * @param {function} config.onOpen - callback fired when the Popover is opening
     * @param {function} config.onClose - callback fired when the Popover is closing
     * @param {string} config.cssModifier - the modifier for the Toolbox. Allows to add some specific styles.
     */
    constructor({ api: t, items: e, onOpen: o4, onClose: i, cssModifier: n3 = "" }) {
      this.api = t, this.items = e, this.onOpen = o4, this.onClose = i, this.cssModifier = n3, this.popover = null, this.wrapper = this.createToolbox();
    }
    /**
     * Style classes
     */
    static get CSS() {
      return {
        toolbox: "tc-toolbox",
        toolboxShowed: "tc-toolbox--showed",
        toggler: "tc-toolbox__toggler"
      };
    }
    /**
     * Returns rendered Toolbox element
     */
    get element() {
      return this.wrapper;
    }
    /**
     * Creating a toolbox to open menu for a manipulating columns
     *
     * @returns {Element}
     */
    createToolbox() {
      const t = c2("div", [
        _w.CSS.toolbox,
        this.cssModifier ? `${_w.CSS.toolbox}--${this.cssModifier}` : ""
      ]);
      t.dataset.mutationFree = "true";
      const e = this.createPopover(), o4 = this.createToggler();
      return t.appendChild(o4), t.appendChild(e), t;
    }
    /**
     * Creates the Toggler
     *
     * @returns {Element}
     */
    createToggler() {
      const t = c2("div", _w.CSS.toggler, {
        innerHTML: M2
      });
      return t.addEventListener("click", () => {
        this.togglerClicked();
      }), t;
    }
    /**
     * Creates the Popover instance and render it
     *
     * @returns {Element}
     */
    createPopover() {
      return this.popover = new a4({
        items: this.items
      }), this.popover.render();
    }
    /**
     * Toggler click handler. Opens/Closes the popover
     *
     * @returns {void}
     */
    togglerClicked() {
      this.popover.opened ? (this.popover.close(), this.onClose()) : (this.popover.open(), this.onOpen());
    }
    /**
     * Shows the Toolbox
     *
     * @param {function} computePositionMethod - method that returns the position coordinate
     * @returns {void}
     */
    show(t) {
      const e = t();
      Object.entries(e).forEach(([o4, i]) => {
        this.wrapper.style[o4] = i;
      }), this.wrapper.classList.add(_w.CSS.toolboxShowed);
    }
    /**
     * Hides the Toolbox
     *
     * @returns {void}
     */
    hide() {
      this.popover.close(), this.wrapper.classList.remove(_w.CSS.toolboxShowed);
    }
  };
  function B2(d4, t) {
    let e = 0;
    return function(...o4) {
      const i = (/* @__PURE__ */ new Date()).getTime();
      if (!(i - e < d4))
        return e = i, t(...o4);
    };
  }
  var s3 = {
    wrapper: "tc-wrap",
    wrapperReadOnly: "tc-wrap--readonly",
    table: "tc-table",
    row: "tc-row",
    withHeadings: "tc-table--heading",
    rowSelected: "tc-row--selected",
    cell: "tc-cell",
    cellSelected: "tc-cell--selected",
    addRow: "tc-add-row",
    addRowDisabled: "tc-add-row--disabled",
    addColumn: "tc-add-column",
    addColumnDisabled: "tc-add-column--disabled"
  };
  var E2 = class {
    /**
     * Creates
     *
     * @constructor
     * @param {boolean} readOnly - read-only mode flag
     * @param {object} api - Editor.js API
     * @param {TableData} data - Editor.js API
     * @param {TableConfig} config - Editor.js API
     */
    constructor(t, e, o4, i) {
      this.readOnly = t, this.api = e, this.data = o4, this.config = i, this.wrapper = null, this.table = null, this.toolboxColumn = this.createColumnToolbox(), this.toolboxRow = this.createRowToolbox(), this.createTableWrapper(), this.hoveredRow = 0, this.hoveredColumn = 0, this.selectedRow = 0, this.selectedColumn = 0, this.tunes = {
        withHeadings: false
      }, this.resize(), this.fill(), this.focusedCell = {
        row: 0,
        column: 0
      }, this.documentClicked = (n3) => {
        const r3 = n3.target.closest(`.${s3.table}`) !== null, h5 = n3.target.closest(`.${s3.wrapper}`) === null;
        (r3 || h5) && this.hideToolboxes();
        const u2 = n3.target.closest(`.${s3.addRow}`), p2 = n3.target.closest(`.${s3.addColumn}`);
        u2 && u2.parentNode === this.wrapper ? (this.addRow(void 0, true), this.hideToolboxes()) : p2 && p2.parentNode === this.wrapper && (this.addColumn(void 0, true), this.hideToolboxes());
      }, this.readOnly || this.bindEvents();
    }
    /**
     * Returns the rendered table wrapper
     *
     * @returns {Element}
     */
    getWrapper() {
      return this.wrapper;
    }
    /**
     * Hangs the necessary handlers to events
     */
    bindEvents() {
      document.addEventListener("click", this.documentClicked), this.table.addEventListener("mousemove", B2(150, (t) => this.onMouseMoveInTable(t)), { passive: true }), this.table.onkeypress = (t) => this.onKeyPressListener(t), this.table.addEventListener("keydown", (t) => this.onKeyDownListener(t)), this.table.addEventListener("focusin", (t) => this.focusInTableListener(t));
    }
    /**
     * Configures and creates the toolbox for manipulating with columns
     *
     * @returns {Toolbox}
     */
    createColumnToolbox() {
      return new w2({
        api: this.api,
        cssModifier: "column",
        items: [
          {
            label: this.api.i18n.t("Add column to left"),
            icon: S2,
            hideIf: () => this.numberOfColumns === this.config.maxcols,
            onClick: () => {
              this.addColumn(this.selectedColumn, true), this.hideToolboxes();
            }
          },
          {
            label: this.api.i18n.t("Add column to right"),
            icon: y3,
            hideIf: () => this.numberOfColumns === this.config.maxcols,
            onClick: () => {
              this.addColumn(this.selectedColumn + 1, true), this.hideToolboxes();
            }
          },
          {
            label: this.api.i18n.t("Delete column"),
            icon: b3,
            hideIf: () => this.numberOfColumns === 1,
            confirmationRequired: true,
            onClick: () => {
              this.deleteColumn(this.selectedColumn), this.hideToolboxes();
            }
          }
        ],
        onOpen: () => {
          this.selectColumn(this.hoveredColumn), this.hideRowToolbox();
        },
        onClose: () => {
          this.unselectColumn();
        }
      });
    }
    /**
     * Configures and creates the toolbox for manipulating with rows
     *
     * @returns {Toolbox}
     */
    createRowToolbox() {
      return new w2({
        api: this.api,
        cssModifier: "row",
        items: [
          {
            label: this.api.i18n.t("Add row above"),
            icon: L3,
            hideIf: () => this.numberOfRows === this.config.maxrows,
            onClick: () => {
              this.addRow(this.selectedRow, true), this.hideToolboxes();
            }
          },
          {
            label: this.api.i18n.t("Add row below"),
            icon: x2,
            hideIf: () => this.numberOfRows === this.config.maxrows,
            onClick: () => {
              this.addRow(this.selectedRow + 1, true), this.hideToolboxes();
            }
          },
          {
            label: this.api.i18n.t("Delete row"),
            icon: b3,
            hideIf: () => this.numberOfRows === 1,
            confirmationRequired: true,
            onClick: () => {
              this.deleteRow(this.selectedRow), this.hideToolboxes();
            }
          }
        ],
        onOpen: () => {
          this.selectRow(this.hoveredRow), this.hideColumnToolbox();
        },
        onClose: () => {
          this.unselectRow();
        }
      });
    }
    /**
     * When you press enter it moves the cursor down to the next row
     * or creates it if the click occurred on the last one
     */
    moveCursorToNextRow() {
      this.focusedCell.row !== this.numberOfRows ? (this.focusedCell.row += 1, this.focusCell(this.focusedCell)) : (this.addRow(), this.focusedCell.row += 1, this.focusCell(this.focusedCell), this.updateToolboxesPosition(0, 0));
    }
    /**
     * Get table cell by row and col index
     *
     * @param {number} row - cell row coordinate
     * @param {number} column - cell column coordinate
     * @returns {HTMLElement}
     */
    getCell(t, e) {
      return this.table.querySelectorAll(`.${s3.row}:nth-child(${t}) .${s3.cell}`)[e - 1];
    }
    /**
     * Get table row by index
     *
     * @param {number} row - row coordinate
     * @returns {HTMLElement}
     */
    getRow(t) {
      return this.table.querySelector(`.${s3.row}:nth-child(${t})`);
    }
    /**
     * The parent of the cell which is the row
     *
     * @param {HTMLElement} cell - cell element
     * @returns {HTMLElement}
     */
    getRowByCell(t) {
      return t.parentElement;
    }
    /**
     * Ger row's first cell
     *
     * @param {Element} row - row to find its first cell
     * @returns {Element}
     */
    getRowFirstCell(t) {
      return t.querySelector(`.${s3.cell}:first-child`);
    }
    /**
     * Set the sell's content by row and column numbers
     *
     * @param {number} row - cell row coordinate
     * @param {number} column - cell column coordinate
     * @param {string} content - cell HTML content
     */
    setCellContent(t, e, o4) {
      const i = this.getCell(t, e);
      i.innerHTML = o4;
    }
    /**
     * Add column in table on index place
     * Add cells in each row
     *
     * @param {number} columnIndex - number in the array of columns, where new column to insert, -1 if insert at the end
     * @param {boolean} [setFocus] - pass true to focus the first cell
     */
    addColumn(t = -1, e = false) {
      var n3;
      let o4 = this.numberOfColumns;
      if (this.config && this.config.maxcols && this.numberOfColumns >= this.config.maxcols)
        return;
      for (let r3 = 1; r3 <= this.numberOfRows; r3++) {
        let h5;
        const l3 = this.createCell();
        if (t > 0 && t <= o4 ? (h5 = this.getCell(r3, t), m2(l3, h5)) : h5 = this.getRow(r3).appendChild(l3), r3 === 1) {
          const u2 = this.getCell(r3, t > 0 ? t : o4 + 1);
          u2 && e && C2(u2);
        }
      }
      const i = this.wrapper.querySelector(`.${s3.addColumn}`);
      (n3 = this.config) != null && n3.maxcols && this.numberOfColumns > this.config.maxcols - 1 && i && i.classList.add(s3.addColumnDisabled), this.addHeadingAttrToFirstRow();
    }
    /**
     * Add row in table on index place
     *
     * @param {number} index - number in the array of rows, where new column to insert, -1 if insert at the end
     * @param {boolean} [setFocus] - pass true to focus the inserted row
     * @returns {HTMLElement} row
     */
    addRow(t = -1, e = false) {
      let o4, i = c2("div", s3.row);
      this.tunes.withHeadings && this.removeHeadingAttrFromFirstRow();
      let n3 = this.numberOfColumns;
      if (this.config && this.config.maxrows && this.numberOfRows >= this.config.maxrows && h5)
        return;
      if (t > 0 && t <= this.numberOfRows) {
        let l3 = this.getRow(t);
        o4 = m2(i, l3);
      } else
        o4 = this.table.appendChild(i);
      this.fillRow(o4, n3), this.tunes.withHeadings && this.addHeadingAttrToFirstRow();
      const r3 = this.getRowFirstCell(o4);
      r3 && e && C2(r3);
      const h5 = this.wrapper.querySelector(`.${s3.addRow}`);
      return this.config && this.config.maxrows && this.numberOfRows >= this.config.maxrows && h5 && h5.classList.add(s3.addRowDisabled), o4;
    }
    /**
     * Delete a column by index
     *
     * @param {number} index
     */
    deleteColumn(t) {
      for (let o4 = 1; o4 <= this.numberOfRows; o4++) {
        const i = this.getCell(o4, t);
        if (!i)
          return;
        i.remove();
      }
      const e = this.wrapper.querySelector(`.${s3.addColumn}`);
      e && e.classList.remove(s3.addColumnDisabled);
    }
    /**
     * Delete a row by index
     *
     * @param {number} index
     */
    deleteRow(t) {
      this.getRow(t).remove();
      const e = this.wrapper.querySelector(`.${s3.addRow}`);
      e && e.classList.remove(s3.addRowDisabled), this.addHeadingAttrToFirstRow();
    }
    /**
     * Create a wrapper containing a table, toolboxes
     * and buttons for adding rows and columns
     *
     * @returns {HTMLElement} wrapper - where all buttons for a table and the table itself will be
     */
    createTableWrapper() {
      if (this.wrapper = c2("div", s3.wrapper), this.table = c2("div", s3.table), this.readOnly && this.wrapper.classList.add(s3.wrapperReadOnly), this.wrapper.appendChild(this.toolboxRow.element), this.wrapper.appendChild(this.toolboxColumn.element), this.wrapper.appendChild(this.table), !this.readOnly) {
        const t = c2("div", s3.addColumn, {
          innerHTML: v3
        }), e = c2("div", s3.addRow, {
          innerHTML: v3
        });
        this.wrapper.appendChild(t), this.wrapper.appendChild(e);
      }
    }
    /**
     * Returns the size of the table based on initial data or config "size" property
     *
     * @return {{rows: number, cols: number}} - number of cols and rows
     */
    computeInitialSize() {
      const t = this.data && this.data.content, e = Array.isArray(t), o4 = e ? t.length : false, i = e ? t.length : void 0, n3 = o4 ? t[0].length : void 0, r3 = Number.parseInt(this.config && this.config.rows), h5 = Number.parseInt(this.config && this.config.cols), l3 = !isNaN(r3) && r3 > 0 ? r3 : void 0, u2 = !isNaN(h5) && h5 > 0 ? h5 : void 0;
      return {
        rows: i || l3 || 2,
        cols: n3 || u2 || 2
      };
    }
    /**
     * Resize table to match config size or transmitted data size
     *
     * @return {{rows: number, cols: number}} - number of cols and rows
     */
    resize() {
      const { rows: t, cols: e } = this.computeInitialSize();
      for (let o4 = 0; o4 < t; o4++)
        this.addRow();
      for (let o4 = 0; o4 < e; o4++)
        this.addColumn();
    }
    /**
     * Fills the table with data passed to the constructor
     *
     * @returns {void}
     */
    fill() {
      const t = this.data;
      if (t && t.content)
        for (let e = 0; e < t.content.length; e++)
          for (let o4 = 0; o4 < t.content[e].length; o4++)
            this.setCellContent(e + 1, o4 + 1, t.content[e][o4]);
    }
    /**
     * Fills a row with cells
     *
     * @param {HTMLElement} row - row to fill
     * @param {number} numberOfColumns - how many cells should be in a row
     */
    fillRow(t, e) {
      for (let o4 = 1; o4 <= e; o4++) {
        const i = this.createCell();
        t.appendChild(i);
      }
    }
    /**
     * Creating a cell element
     *
     * @return {Element}
     */
    createCell() {
      return c2("div", s3.cell, {
        contentEditable: !this.readOnly
      });
    }
    /**
     * Get number of rows in the table
     */
    get numberOfRows() {
      return this.table.childElementCount;
    }
    /**
     * Get number of columns in the table
     */
    get numberOfColumns() {
      return this.numberOfRows ? this.table.querySelectorAll(`.${s3.row}:first-child .${s3.cell}`).length : 0;
    }
    /**
     * Is the column toolbox menu displayed or not
     *
     * @returns {boolean}
     */
    get isColumnMenuShowing() {
      return this.selectedColumn !== 0;
    }
    /**
     * Is the row toolbox menu displayed or not
     *
     * @returns {boolean}
     */
    get isRowMenuShowing() {
      return this.selectedRow !== 0;
    }
    /**
     * Recalculate position of toolbox icons
     *
     * @param {Event} event - mouse move event
     */
    onMouseMoveInTable(t) {
      const { row: e, column: o4 } = this.getHoveredCell(t);
      this.hoveredColumn = o4, this.hoveredRow = e, this.updateToolboxesPosition();
    }
    /**
     * Prevents default Enter behaviors
     * Adds Shift+Enter processing
     *
     * @param {KeyboardEvent} event - keypress event
     */
    onKeyPressListener(t) {
      if (t.key === "Enter") {
        if (t.shiftKey)
          return true;
        this.moveCursorToNextRow();
      }
      return t.key !== "Enter";
    }
    /**
     * Prevents tab keydown event from bubbling
     * so that it only works inside the table
     *
     * @param {KeyboardEvent} event - keydown event
     */
    onKeyDownListener(t) {
      t.key === "Tab" && t.stopPropagation();
    }
    /**
     * Set the coordinates of the cell that the focus has moved to
     *
     * @param {FocusEvent} event - focusin event
     */
    focusInTableListener(t) {
      const e = t.target, o4 = this.getRowByCell(e);
      this.focusedCell = {
        row: Array.from(this.table.querySelectorAll(`.${s3.row}`)).indexOf(o4) + 1,
        column: Array.from(o4.querySelectorAll(`.${s3.cell}`)).indexOf(e) + 1
      };
    }
    /**
     * Unselect row/column
     * Close toolbox menu
     * Hide toolboxes
     *
     * @returns {void}
     */
    hideToolboxes() {
      this.hideRowToolbox(), this.hideColumnToolbox(), this.updateToolboxesPosition();
    }
    /**
     * Unselect row, close toolbox
     *
     * @returns {void}
     */
    hideRowToolbox() {
      this.unselectRow(), this.toolboxRow.hide();
    }
    /**
     * Unselect column, close toolbox
     *
     * @returns {void}
     */
    hideColumnToolbox() {
      this.unselectColumn(), this.toolboxColumn.hide();
    }
    /**
     * Set the cursor focus to the focused cell
     *
     * @returns {void}
     */
    focusCell() {
      this.focusedCellElem.focus();
    }
    /**
     * Get current focused element
     *
     * @returns {HTMLElement} - focused cell
     */
    get focusedCellElem() {
      const { row: t, column: e } = this.focusedCell;
      return this.getCell(t, e);
    }
    /**
     * Update toolboxes position
     *
     * @param {number} row - hovered row
     * @param {number} column - hovered column
     */
    updateToolboxesPosition(t = this.hoveredRow, e = this.hoveredColumn) {
      this.isColumnMenuShowing || e > 0 && e <= this.numberOfColumns && this.toolboxColumn.show(() => ({
        left: `calc((100% - var(--cell-size)) / (${this.numberOfColumns} * 2) * (1 + (${e} - 1) * 2))`
      })), this.isRowMenuShowing || t > 0 && t <= this.numberOfRows && this.toolboxRow.show(() => {
        const o4 = this.getRow(t), { fromTopBorder: i } = g2(this.table, o4), { height: n3 } = o4.getBoundingClientRect();
        return {
          top: `${Math.ceil(i + n3 / 2)}px`
        };
      });
    }
    /**
     * Makes the first row headings
     *
     * @param {boolean} withHeadings - use headings row or not
     */
    setHeadingsSetting(t) {
      this.tunes.withHeadings = t, t ? (this.table.classList.add(s3.withHeadings), this.addHeadingAttrToFirstRow()) : (this.table.classList.remove(s3.withHeadings), this.removeHeadingAttrFromFirstRow());
    }
    /**
     * Adds an attribute for displaying the placeholder in the cell
     */
    addHeadingAttrToFirstRow() {
      for (let t = 1; t <= this.numberOfColumns; t++) {
        let e = this.getCell(1, t);
        e && e.setAttribute("heading", this.api.i18n.t("Heading"));
      }
    }
    /**
     * Removes an attribute for displaying the placeholder in the cell
     */
    removeHeadingAttrFromFirstRow() {
      for (let t = 1; t <= this.numberOfColumns; t++) {
        let e = this.getCell(1, t);
        e && e.removeAttribute("heading");
      }
    }
    /**
     * Add effect of a selected row
     *
     * @param {number} index
     */
    selectRow(t) {
      const e = this.getRow(t);
      e && (this.selectedRow = t, e.classList.add(s3.rowSelected));
    }
    /**
     * Remove effect of a selected row
     */
    unselectRow() {
      if (this.selectedRow <= 0)
        return;
      const t = this.table.querySelector(`.${s3.rowSelected}`);
      t && t.classList.remove(s3.rowSelected), this.selectedRow = 0;
    }
    /**
     * Add effect of a selected column
     *
     * @param {number} index
     */
    selectColumn(t) {
      for (let e = 1; e <= this.numberOfRows; e++) {
        const o4 = this.getCell(e, t);
        o4 && o4.classList.add(s3.cellSelected);
      }
      this.selectedColumn = t;
    }
    /**
     * Remove effect of a selected column
     */
    unselectColumn() {
      if (this.selectedColumn <= 0)
        return;
      let t = this.table.querySelectorAll(`.${s3.cellSelected}`);
      Array.from(t).forEach((e) => {
        e.classList.remove(s3.cellSelected);
      }), this.selectedColumn = 0;
    }
    /**
     * Calculates the row and column that the cursor is currently hovering over
     * The search was optimized from O(n) to O (log n) via bin search to reduce the number of calculations
     *
     * @param {Event} event - mousemove event
     * @returns hovered cell coordinates as an integer row and column
     */
    getHoveredCell(t) {
      let e = this.hoveredRow, o4 = this.hoveredColumn;
      const { width: i, height: n3, x: r3, y: h5 } = k2(this.table, t);
      return r3 >= 0 && (o4 = this.binSearch(
        this.numberOfColumns,
        (l3) => this.getCell(1, l3),
        ({ fromLeftBorder: l3 }) => r3 < l3,
        ({ fromRightBorder: l3 }) => r3 > i - l3
      )), h5 >= 0 && (e = this.binSearch(
        this.numberOfRows,
        (l3) => this.getCell(l3, 1),
        ({ fromTopBorder: l3 }) => h5 < l3,
        ({ fromBottomBorder: l3 }) => h5 > n3 - l3
      )), {
        row: e || this.hoveredRow,
        column: o4 || this.hoveredColumn
      };
    }
    /**
     * Looks for the index of the cell the mouse is hovering over.
     * Cells can be represented as ordered intervals with left and
     * right (upper and lower for rows) borders inside the table, if the mouse enters it, then this is our index
     *
     * @param {number} numberOfCells - upper bound of binary search
     * @param {function} getCell - function to take the currently viewed cell
     * @param {function} beforeTheLeftBorder - determines the cursor position, to the left of the cell or not
     * @param {function} afterTheRightBorder - determines the cursor position, to the right of the cell or not
     * @returns {number}
     */
    binSearch(t, e, o4, i) {
      let n3 = 0, r3 = t + 1, h5 = 0, l3;
      for (; n3 < r3 - 1 && h5 < 10; ) {
        l3 = Math.ceil((n3 + r3) / 2);
        const u2 = e(l3), p2 = g2(this.table, u2);
        if (o4(p2))
          r3 = l3;
        else if (i(p2))
          n3 = l3;
        else
          break;
        h5++;
      }
      return l3;
    }
    /**
     * Collects data from cells into a two-dimensional array
     *
     * @returns {string[][]}
     */
    getData() {
      const t = [];
      for (let e = 1; e <= this.numberOfRows; e++) {
        const o4 = this.table.querySelector(`.${s3.row}:nth-child(${e})`), i = Array.from(o4.querySelectorAll(`.${s3.cell}`));
        i.every((r3) => !r3.textContent.trim()) || t.push(i.map((r3) => r3.innerHTML));
      }
      return t;
    }
    /**
     * Remove listeners on the document
     */
    destroy() {
      document.removeEventListener("click", this.documentClicked);
    }
  };
  var F3 = class {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allow to press Enter inside the CodeTool textarea
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {TableConstructor} init
     */
    constructor({ data: t, config: e, api: o4, readOnly: i, block: n3 }) {
      this.api = o4, this.readOnly = i, this.config = e, this.data = {
        withHeadings: this.getConfig("withHeadings", false, t),
        stretched: this.getConfig("stretched", false, t),
        content: t && t.content ? t.content : []
      }, this.table = null, this.block = n3;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: A3,
        title: "Table"
      };
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render() {
      return this.table = new E2(this.readOnly, this.api, this.data, this.config), this.container = c2("div", this.api.styles.block), this.container.appendChild(this.table.getWrapper()), this.table.setHeadingsSetting(this.data.withHeadings), this.container;
    }
    /**
     * Returns plugin settings
     *
     * @returns {Array}
     */
    renderSettings() {
      return [
        {
          label: this.api.i18n.t("With headings"),
          icon: T2,
          isActive: this.data.withHeadings,
          closeOnActivate: true,
          toggle: true,
          onActivate: () => {
            this.data.withHeadings = true, this.table.setHeadingsSetting(this.data.withHeadings);
          }
        },
        {
          label: this.api.i18n.t("Without headings"),
          icon: H3,
          isActive: !this.data.withHeadings,
          closeOnActivate: true,
          toggle: true,
          onActivate: () => {
            this.data.withHeadings = false, this.table.setHeadingsSetting(this.data.withHeadings);
          }
        },
        {
          label: this.data.stretched ? this.api.i18n.t("Collapse") : this.api.i18n.t("Stretch"),
          icon: this.data.stretched ? R3 : O3,
          closeOnActivate: true,
          toggle: true,
          onActivate: () => {
            this.data.stretched = !this.data.stretched, this.block.stretched = this.data.stretched;
          }
        }
      ];
    }
    /**
     * Extract table data from the view
     *
     * @returns {TableData} - saved data
     */
    save() {
      const t = this.table.getData();
      return {
        withHeadings: this.data.withHeadings,
        stretched: this.data.stretched,
        content: t
      };
    }
    /**
     * Plugin destroyer
     *
     * @returns {void}
     */
    destroy() {
      this.table.destroy();
    }
    /**
     * A helper to get config value.
     *
     * @param {string} configName - the key to get from the config.
     * @param {any} defaultValue - default value if config doesn't have passed key
     * @param {object} savedData - previously saved data. If passed, the key will be got from there, otherwise from the config
     * @returns {any} - config value.
     */
    getConfig(t, e = void 0, o4 = void 0) {
      const i = this.data || o4;
      return i ? i[t] ? i[t] : e : this.config && this.config[t] ? this.config[t] : e;
    }
    /**
     * Table onPaste configuration
     *
     * @public
     */
    static get pasteConfig() {
      return { tags: ["TABLE", "TR", "TH", "TD"] };
    }
    /**
     * On paste callback that is fired from Editor
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(t) {
      const e = t.detail.data, o4 = e.querySelector(":scope > thead, tr:first-of-type th"), n3 = Array.from(e.querySelectorAll("tr")).map((r3) => Array.from(r3.querySelectorAll("th, td")).map((l3) => l3.innerHTML));
      this.data = {
        withHeadings: o4 !== null,
        content: n3
      }, this.table.wrapper && this.table.wrapper.replaceWith(this.render());
    }
  };

  // node_modules/@editorjs/quote/dist/quote.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var t = document.createElement("style");
        t.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")), document.head.appendChild(t);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var De3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>';
  var He2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>';
  var Re3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
  var b4 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Fe3(e) {
    if (e.__esModule)
      return e;
    var t = e.default;
    if (typeof t == "function") {
      var n3 = function r3() {
        return this instanceof r3 ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n3.prototype = t.prototype;
    } else
      n3 = {};
    return Object.defineProperty(n3, "__esModule", { value: true }), Object.keys(e).forEach(function(r3) {
      var i = Object.getOwnPropertyDescriptor(e, r3);
      Object.defineProperty(n3, r3, i.get ? i : {
        enumerable: true,
        get: function() {
          return e[r3];
        }
      });
    }), n3;
  }
  var v4 = {};
  var P2 = {};
  var j2 = {};
  Object.defineProperty(j2, "__esModule", { value: true });
  j2.allInputsSelector = We3;
  function We3() {
    var e = ["text", "password", "email", "number", "search", "tel", "url"];
    return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
      return 'input[type="'.concat(t, '"]');
    }).join(", ");
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.allInputsSelector = void 0;
    var t = j2;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
  })(P2);
  var c3 = {};
  var T3 = {};
  Object.defineProperty(T3, "__esModule", { value: true });
  T3.isNativeInput = Ue3;
  function Ue3(e) {
    var t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : false;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNativeInput = void 0;
    var t = T3;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return t.isNativeInput;
    } });
  })(c3);
  var ie2 = {};
  var C3 = {};
  Object.defineProperty(C3, "__esModule", { value: true });
  C3.append = qe3;
  function qe3(e, t) {
    Array.isArray(t) ? t.forEach(function(n3) {
      e.appendChild(n3);
    }) : e.appendChild(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.append = void 0;
    var t = C3;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return t.append;
    } });
  })(ie2);
  var L4 = {};
  var S3 = {};
  Object.defineProperty(S3, "__esModule", { value: true });
  S3.blockElements = ze3;
  function ze3() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.blockElements = void 0;
    var t = S3;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return t.blockElements;
    } });
  })(L4);
  var ae3 = {};
  var M3 = {};
  Object.defineProperty(M3, "__esModule", { value: true });
  M3.calculateBaseline = Ge3;
  function Ge3(e) {
    var t = window.getComputedStyle(e), n3 = parseFloat(t.fontSize), r3 = parseFloat(t.lineHeight) || n3 * 1.2, i = parseFloat(t.paddingTop), a6 = parseFloat(t.borderTopWidth), l3 = parseFloat(t.marginTop), u2 = n3 * 0.8, d4 = (r3 - n3) / 2, s6 = l3 + a6 + i + d4 + u2;
    return s6;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.calculateBaseline = void 0;
    var t = M3;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return t.calculateBaseline;
    } });
  })(ae3);
  var le3 = {};
  var k3 = {};
  var w3 = {};
  var N3 = {};
  Object.defineProperty(N3, "__esModule", { value: true });
  N3.isContentEditable = Ke3;
  function Ke3(e) {
    return e.contentEditable === "true";
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isContentEditable = void 0;
    var t = N3;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return t.isContentEditable;
    } });
  })(w3);
  Object.defineProperty(k3, "__esModule", { value: true });
  k3.canSetCaret = Qe3;
  var Xe3 = c3;
  var Ye3 = w3;
  function Qe3(e) {
    var t = true;
    if ((0, Xe3.isNativeInput)(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = false;
          break;
      }
    else
      t = (0, Ye3.isContentEditable)(e);
    return t;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.canSetCaret = void 0;
    var t = k3;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return t.canSetCaret;
    } });
  })(le3);
  var y4 = {};
  var I3 = {};
  function Ve3(e, t, n3) {
    const r3 = n3.value !== void 0 ? "value" : "get", i = n3[r3], a6 = `#${t}Cache`;
    if (n3[r3] = function(...l3) {
      return this[a6] === void 0 && (this[a6] = i.apply(this, l3)), this[a6];
    }, r3 === "get" && n3.set) {
      const l3 = n3.set;
      n3.set = function(u2) {
        delete e[a6], l3.apply(this, u2);
      };
    }
    return n3;
  }
  function ue3() {
    const e = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    }, t = Object.keys(e).find((n3) => window.navigator.appVersion.toLowerCase().indexOf(n3) !== -1);
    return t !== void 0 && (e[t] = true), e;
  }
  function A4(e) {
    return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
  }
  function Ze3(e) {
    return !A4(e);
  }
  var Je3 = () => typeof window < "u" && window.navigator !== null && A4(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  function xe3(e) {
    const t = ue3();
    return e = e.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
  }
  function et3(e) {
    return e[0].toUpperCase() + e.slice(1);
  }
  function tt3(e) {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
    const n3 = window.getSelection(), r3 = document.createRange();
    if (r3.selectNode(t), n3 === null)
      throw new Error("Cannot copy text to clipboard");
    n3.removeAllRanges(), n3.addRange(r3), document.execCommand("copy"), document.body.removeChild(t);
  }
  function nt3(e, t, n3) {
    let r3;
    return (...i) => {
      const a6 = this, l3 = () => {
        r3 = void 0, n3 !== true && e.apply(a6, i);
      }, u2 = n3 === true && r3 !== void 0;
      window.clearTimeout(r3), r3 = window.setTimeout(l3, t), u2 && e.apply(a6, i);
    };
  }
  function o3(e) {
    return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  function rt3(e) {
    return o3(e) === "boolean";
  }
  function oe2(e) {
    return o3(e) === "function" || o3(e) === "asyncfunction";
  }
  function it3(e) {
    return oe2(e) && /^\s*class\s+/.test(e.toString());
  }
  function at3(e) {
    return o3(e) === "number";
  }
  function g3(e) {
    return o3(e) === "object";
  }
  function lt3(e) {
    return Promise.resolve(e) === e;
  }
  function ut2(e) {
    return o3(e) === "string";
  }
  function ot3(e) {
    return o3(e) === "undefined";
  }
  function O4(e, ...t) {
    if (!t.length)
      return e;
    const n3 = t.shift();
    if (g3(e) && g3(n3))
      for (const r3 in n3)
        g3(n3[r3]) ? (e[r3] === void 0 && Object.assign(e, { [r3]: {} }), O4(e[r3], n3[r3])) : Object.assign(e, { [r3]: n3[r3] });
    return O4(e, ...t);
  }
  function st3(e, t, n3) {
    const r3 = `\xAB${t}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${n3}\xBB instead.`;
    e && console.warn(r3);
  }
  function ct2(e) {
    try {
      return new URL(e).href;
    } catch {
    }
    return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
  }
  function dt2(e) {
    return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
  }
  var ft2 = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  };
  var pt2 = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
  var vt2 = class {
    constructor() {
      this.completed = Promise.resolve();
    }
    /**
     * Add new promise to queue
     * @param operation - promise should be added to queue
     */
    add(t) {
      return new Promise((n3, r3) => {
        this.completed = this.completed.then(t).then(n3).catch(r3);
      });
    }
  };
  function gt2(e, t, n3 = void 0) {
    let r3, i, a6, l3 = null, u2 = 0;
    n3 || (n3 = {});
    const d4 = function() {
      u2 = n3.leading === false ? 0 : Date.now(), l3 = null, a6 = e.apply(r3, i), l3 === null && (r3 = i = null);
    };
    return function() {
      const s6 = Date.now();
      !u2 && n3.leading === false && (u2 = s6);
      const f3 = t - (s6 - u2);
      return r3 = this, i = arguments, f3 <= 0 || f3 > t ? (l3 && (clearTimeout(l3), l3 = null), u2 = s6, a6 = e.apply(r3, i), l3 === null && (r3 = i = null)) : !l3 && n3.trailing !== false && (l3 = setTimeout(d4, f3)), a6;
    };
  }
  var mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    PromiseQueue: vt2,
    beautifyShortcut: xe3,
    cacheable: Ve3,
    capitalize: et3,
    copyTextToClipboard: tt3,
    debounce: nt3,
    deepMerge: O4,
    deprecationAssert: st3,
    getUserOS: ue3,
    getValidUrl: ct2,
    isBoolean: rt3,
    isClass: it3,
    isEmpty: Ze3,
    isFunction: oe2,
    isIosDevice: Je3,
    isNumber: at3,
    isObject: g3,
    isPrintableKey: dt2,
    isPromise: lt3,
    isString: ut2,
    isUndefined: ot3,
    keyCodes: ft2,
    mouseButtons: pt2,
    notEmpty: A4,
    throttle: gt2,
    typeOf: o3
  }, Symbol.toStringTag, { value: "Module" }));
  var $2 = /* @__PURE__ */ Fe3(mt);
  Object.defineProperty(I3, "__esModule", { value: true });
  I3.containsOnlyInlineElements = _t3;
  var bt2 = $2;
  var yt2 = L4;
  function _t3(e) {
    var t;
    (0, bt2.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    var n3 = function(r3) {
      return !(0, yt2.blockElements)().includes(r3.tagName.toLowerCase()) && Array.from(r3.children).every(n3);
    };
    return Array.from(t.children).every(n3);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.containsOnlyInlineElements = void 0;
    var t = I3;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return t.containsOnlyInlineElements;
    } });
  })(y4);
  var se3 = {};
  var B3 = {};
  var _ = {};
  var D3 = {};
  Object.defineProperty(D3, "__esModule", { value: true });
  D3.make = ht2;
  function ht2(e, t, n3) {
    var r3;
    t === void 0 && (t = null), n3 === void 0 && (n3 = {});
    var i = document.createElement(e);
    if (Array.isArray(t)) {
      var a6 = t.filter(function(u2) {
        return u2 !== void 0;
      });
      (r3 = i.classList).add.apply(r3, a6);
    } else
      t !== null && i.classList.add(t);
    for (var l3 in n3)
      Object.prototype.hasOwnProperty.call(n3, l3) && (i[l3] = n3[l3]);
    return i;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.make = void 0;
    var t = D3;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return t.make;
    } });
  })(_);
  Object.defineProperty(B3, "__esModule", { value: true });
  B3.fragmentToString = Ot3;
  var Et3 = _;
  function Ot3(e) {
    var t = (0, Et3.make)("div");
    return t.appendChild(e), t.innerHTML;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.fragmentToString = void 0;
    var t = B3;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return t.fragmentToString;
    } });
  })(se3);
  var ce3 = {};
  var H4 = {};
  Object.defineProperty(H4, "__esModule", { value: true });
  H4.getContentLength = jt3;
  var Pt3 = c3;
  function jt3(e) {
    var t, n3;
    return (0, Pt3.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n3 = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n3 !== void 0 ? n3 : 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getContentLength = void 0;
    var t = H4;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return t.getContentLength;
    } });
  })(ce3);
  var R4 = {};
  var F4 = {};
  var re3 = b4 && b4.__spreadArray || function(e, t, n3) {
    if (n3 || arguments.length === 2)
      for (var r3 = 0, i = t.length, a6; r3 < i; r3++)
        (a6 || !(r3 in t)) && (a6 || (a6 = Array.prototype.slice.call(t, 0, r3)), a6[r3] = t[r3]);
    return e.concat(a6 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(F4, "__esModule", { value: true });
  F4.getDeepestBlockElements = de3;
  var Tt3 = y4;
  function de3(e) {
    return (0, Tt3.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n3) {
      return re3(re3([], t, true), de3(n3), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestBlockElements = void 0;
    var t = F4;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return t.getDeepestBlockElements;
    } });
  })(R4);
  var fe2 = {};
  var W3 = {};
  var h3 = {};
  var U3 = {};
  Object.defineProperty(U3, "__esModule", { value: true });
  U3.isLineBreakTag = Ct3;
  function Ct3(e) {
    return [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLineBreakTag = void 0;
    var t = U3;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return t.isLineBreakTag;
    } });
  })(h3);
  var E3 = {};
  var q3 = {};
  Object.defineProperty(q3, "__esModule", { value: true });
  q3.isSingleTag = Lt3;
  function Lt3(e) {
    return [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isSingleTag = void 0;
    var t = q3;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return t.isSingleTag;
    } });
  })(E3);
  Object.defineProperty(W3, "__esModule", { value: true });
  W3.getDeepestNode = pe3;
  var St3 = c3;
  var Mt3 = h3;
  var kt3 = E3;
  function pe3(e, t) {
    t === void 0 && (t = false);
    var n3 = t ? "lastChild" : "firstChild", r3 = t ? "previousSibling" : "nextSibling";
    if (e.nodeType === Node.ELEMENT_NODE && e[n3]) {
      var i = e[n3];
      if ((0, kt3.isSingleTag)(i) && !(0, St3.isNativeInput)(i) && !(0, Mt3.isLineBreakTag)(i))
        if (i[r3])
          i = i[r3];
        else if (i.parentNode !== null && i.parentNode[r3])
          i = i.parentNode[r3];
        else
          return i.parentNode;
      return pe3(i, t);
    }
    return e;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestNode = void 0;
    var t = W3;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return t.getDeepestNode;
    } });
  })(fe2);
  var ve3 = {};
  var z3 = {};
  var p = b4 && b4.__spreadArray || function(e, t, n3) {
    if (n3 || arguments.length === 2)
      for (var r3 = 0, i = t.length, a6; r3 < i; r3++)
        (a6 || !(r3 in t)) && (a6 || (a6 = Array.prototype.slice.call(t, 0, r3)), a6[r3] = t[r3]);
    return e.concat(a6 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(z3, "__esModule", { value: true });
  z3.findAllInputs = $t3;
  var wt3 = y4;
  var Nt3 = R4;
  var It3 = P2;
  var At3 = c3;
  function $t3(e) {
    return Array.from(e.querySelectorAll((0, It3.allInputsSelector)())).reduce(function(t, n3) {
      return (0, At3.isNativeInput)(n3) || (0, wt3.containsOnlyInlineElements)(n3) ? p(p([], t, true), [n3], false) : p(p([], t, true), (0, Nt3.getDeepestBlockElements)(n3), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.findAllInputs = void 0;
    var t = z3;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return t.findAllInputs;
    } });
  })(ve3);
  var ge2 = {};
  var G3 = {};
  Object.defineProperty(G3, "__esModule", { value: true });
  G3.isCollapsedWhitespaces = Bt3;
  function Bt3(e) {
    return !/[^\t\n\r ]/.test(e);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isCollapsedWhitespaces = void 0;
    var t = G3;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return t.isCollapsedWhitespaces;
    } });
  })(ge2);
  var K3 = {};
  var X3 = {};
  Object.defineProperty(X3, "__esModule", { value: true });
  X3.isElement = Ht3;
  var Dt3 = $2;
  function Ht3(e) {
    return (0, Dt3.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isElement = void 0;
    var t = X3;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return t.isElement;
    } });
  })(K3);
  var me3 = {};
  var Y2 = {};
  var Q3 = {};
  var V3 = {};
  Object.defineProperty(V3, "__esModule", { value: true });
  V3.isLeaf = Rt3;
  function Rt3(e) {
    return e === null ? false : e.childNodes.length === 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLeaf = void 0;
    var t = V3;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return t.isLeaf;
    } });
  })(Q3);
  var Z3 = {};
  var J3 = {};
  Object.defineProperty(J3, "__esModule", { value: true });
  J3.isNodeEmpty = zt3;
  var Ft3 = h3;
  var Wt3 = K3;
  var Ut3 = c3;
  var qt3 = E3;
  function zt3(e, t) {
    var n3 = "";
    return (0, qt3.isSingleTag)(e) && !(0, Ft3.isLineBreakTag)(e) ? false : ((0, Wt3.isElement)(e) && (0, Ut3.isNativeInput)(e) ? n3 = e.value : e.textContent !== null && (n3 = e.textContent.replace("\u200B", "")), t !== void 0 && (n3 = n3.replace(new RegExp(t, "g"), "")), n3.trim().length === 0);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNodeEmpty = void 0;
    var t = J3;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return t.isNodeEmpty;
    } });
  })(Z3);
  Object.defineProperty(Y2, "__esModule", { value: true });
  Y2.isEmpty = Xt3;
  var Gt3 = Q3;
  var Kt3 = Z3;
  function Xt3(e, t) {
    e.normalize();
    for (var n3 = [e]; n3.length > 0; ) {
      var r3 = n3.shift();
      if (r3) {
        if (e = r3, (0, Gt3.isLeaf)(e) && !(0, Kt3.isNodeEmpty)(e, t))
          return false;
        n3.push.apply(n3, Array.from(e.childNodes));
      }
    }
    return true;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isEmpty = void 0;
    var t = Y2;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return t.isEmpty;
    } });
  })(me3);
  var be3 = {};
  var x3 = {};
  Object.defineProperty(x3, "__esModule", { value: true });
  x3.isFragment = Qt3;
  var Yt3 = $2;
  function Qt3(e) {
    return (0, Yt3.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isFragment = void 0;
    var t = x3;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return t.isFragment;
    } });
  })(be3);
  var ye3 = {};
  var ee2 = {};
  Object.defineProperty(ee2, "__esModule", { value: true });
  ee2.isHTMLString = Zt3;
  var Vt3 = _;
  function Zt3(e) {
    var t = (0, Vt3.make)("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isHTMLString = void 0;
    var t = ee2;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return t.isHTMLString;
    } });
  })(ye3);
  var _e3 = {};
  var te3 = {};
  Object.defineProperty(te3, "__esModule", { value: true });
  te3.offset = Jt3;
  function Jt3(e) {
    var t = e.getBoundingClientRect(), n3 = window.pageXOffset || document.documentElement.scrollLeft, r3 = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r3, a6 = t.left + n3;
    return {
      top: i,
      left: a6,
      bottom: i + t.height,
      right: a6 + t.width
    };
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.offset = void 0;
    var t = te3;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return t.offset;
    } });
  })(_e3);
  var he3 = {};
  var ne3 = {};
  Object.defineProperty(ne3, "__esModule", { value: true });
  ne3.prepend = xt3;
  function xt3(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n3) {
      return e.prepend(n3);
    })) : e.prepend(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = void 0;
    var t = ne3;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return t.prepend;
    } });
  })(he3);
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
    var t = P2;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
    var n3 = c3;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return n3.isNativeInput;
    } });
    var r3 = ie2;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return r3.append;
    } });
    var i = L4;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return i.blockElements;
    } });
    var a6 = ae3;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return a6.calculateBaseline;
    } });
    var l3 = le3;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return l3.canSetCaret;
    } });
    var u2 = y4;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return u2.containsOnlyInlineElements;
    } });
    var d4 = se3;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return d4.fragmentToString;
    } });
    var s6 = ce3;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return s6.getContentLength;
    } });
    var f3 = R4;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return f3.getDeepestBlockElements;
    } });
    var Oe3 = fe2;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return Oe3.getDeepestNode;
    } });
    var Pe3 = ve3;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return Pe3.findAllInputs;
    } });
    var je3 = ge2;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return je3.isCollapsedWhitespaces;
    } });
    var Te3 = w3;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return Te3.isContentEditable;
    } });
    var Ce3 = K3;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return Ce3.isElement;
    } });
    var Le3 = me3;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return Le3.isEmpty;
    } });
    var Se3 = be3;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return Se3.isFragment;
    } });
    var Me3 = ye3;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return Me3.isHTMLString;
    } });
    var ke3 = Q3;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return ke3.isLeaf;
    } });
    var we3 = Z3;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return we3.isNodeEmpty;
    } });
    var Ne3 = h3;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return Ne3.isLineBreakTag;
    } });
    var Ie3 = E3;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return Ie3.isSingleTag;
    } });
    var Ae3 = _;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return Ae3.make;
    } });
    var $e3 = _e3;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return $e3.offset;
    } });
    var Be3 = he3;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return Be3.prepend;
    } });
  })(v4);
  var Ee3 = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e))(Ee3 || {});
  var m3 = class _m {
    /**
     * Render plugin`s main Element and fill it with saved data
     * @param params - Quote Tool constructor params
     * @param params.data - previously saved data
     * @param params.config - user config for Tool
     * @param params.api - editor.js api
     * @param params.readOnly - read only mode flag
     */
    constructor({ data: t, config: n3, api: r3, readOnly: i, block: a6 }) {
      const { DEFAULT_ALIGNMENT: l3 } = _m;
      this.api = r3, this.readOnly = i, this.quotePlaceholder = r3.i18n.t((n3 == null ? void 0 : n3.quotePlaceholder) ?? _m.DEFAULT_QUOTE_PLACEHOLDER), this.captionPlaceholder = r3.i18n.t((n3 == null ? void 0 : n3.captionPlaceholder) ?? _m.DEFAULT_CAPTION_PLACEHOLDER), this.data = {
        text: t.text || "",
        caption: t.caption || "",
        alignment: Object.values(Ee3).includes(t.alignment) ? t.alignment : (n3 == null ? void 0 : n3.defaultAlignment) ?? l3
      }, this.css = {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption"
      }, this.block = a6;
    }
    /**
     * Notify core that read-only mode is supported
     * @returns true
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     * @returns icon and title of the toolbox
     */
    static get toolbox() {
      return {
        icon: Re3,
        title: "Quote"
      };
    }
    /**
     * Empty Quote is not empty Block
     * @returns true
     */
    static get contentless() {
      return true;
    }
    /**
     * Allow to press Enter inside the Quote
     * @returns true
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Default placeholder for quote text
     * @returns 'Enter a quote'
     */
    static get DEFAULT_QUOTE_PLACEHOLDER() {
      return "Enter a quote";
    }
    /**
     * Default placeholder for quote caption
     * @returns 'Enter a caption'
     */
    static get DEFAULT_CAPTION_PLACEHOLDER() {
      return "Enter a caption";
    }
    /**
     * Default quote alignment
     * @returns Alignment.Left
     */
    static get DEFAULT_ALIGNMENT() {
      return "left";
    }
    /**
     * Allow Quote to be converted to/from other blocks
     * @returns conversion config object
     */
    static get conversionConfig() {
      return {
        /**
         * To create Quote data from string, simple fill 'text' property
         */
        import: "text",
        /**
         * To create string from Quote data, concatenate text and caption
         * @param quoteData - Quote data object
         * @returns string
         */
        export: function(t) {
          return t.caption ? `${t.text} \u2014 ${t.caption}` : t.text;
        }
      };
    }
    /**
     * Tool`s styles
     * @returns CSS classes names
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption"
      };
    }
    /**
     * Tool`s settings properties
     * @returns settings properties
     */
    get settings() {
      return [
        {
          name: "left",
          icon: He2
        },
        {
          name: "center",
          icon: De3
        }
      ];
    }
    /**
     * Create Quote Tool container with inputs
     * @returns blockquote DOM element - Quote Tool container
     */
    render() {
      const t = v4.make("blockquote", [
        this.css.baseClass,
        this.css.wrapper
      ]), n3 = v4.make("div", [this.css.input, this.css.text], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.text
      }), r3 = v4.make("div", [this.css.input, this.css.caption], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.caption
      });
      return n3.dataset.placeholder = this.quotePlaceholder, r3.dataset.placeholder = this.captionPlaceholder, t.appendChild(n3), t.appendChild(r3), t;
    }
    /**
     * Extract Quote data from Quote Tool element
     * @param quoteElement - Quote DOM element to save
     * @returns Quote data object
     */
    save(t) {
      const n3 = t.querySelector(`.${this.css.text}`), r3 = t.querySelector(`.${this.css.caption}`);
      return Object.assign(this.data, {
        text: (n3 == null ? void 0 : n3.innerHTML) ?? "",
        caption: (r3 == null ? void 0 : r3.innerHTML) ?? ""
      });
    }
    /**
     * Sanitizer rules
     * @returns sanitizer rules
     */
    static get sanitize() {
      return {
        text: {
          br: true
        },
        caption: {
          br: true
        },
        alignment: {}
      };
    }
    /**
     * Create wrapper for Tool`s settings buttons:
     * 1. Left alignment
     * 2. Center alignment
     * @returns settings menu
     */
    renderSettings() {
      const t = (n3) => n3 && n3[0].toUpperCase() + n3.slice(1);
      return this.settings.map((n3) => ({
        icon: n3.icon,
        label: this.api.i18n.t(`Align ${t(n3.name)}`),
        onActivate: () => this._toggleTune(n3.name),
        isActive: this.data.alignment === n3.name,
        closeOnActivate: true
      }));
    }
    /**
     * Toggle quote`s alignment
     * @param tune - alignment
     */
    _toggleTune(t) {
      this.data.alignment = t, this.block.dispatchChange();
    }
  };

  // node_modules/@editorjs/code/dist/code.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")), document.head.appendChild(e);
      }
    } catch (o4) {
      console.error("vite-plugin-css-injected-by-js", o4);
    }
  })();
  function c4(l3, t) {
    let a6 = "";
    for (; a6 !== `
` && t > 0; )
      t = t - 1, a6 = l3.substr(t, 1);
    return a6 === `
` && (t += 1), t;
  }
  var h4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
  var d3 = class _d {
    /**
     * Notify core that read-only mode is supported
     * @returns true if read-only mode is supported
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allows pressing Enter key to create line breaks inside the CodeTool textarea
     * This enables multi-line input within the code editor.
     * @returns true if line breaks are allowed in the textarea
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     * @param options - tool constricting options
     * @param options.data — previously saved plugin code
     * @param options.config - user config for Tool
     * @param options.api - Editor.js API
     * @param options.readOnly - read only mode flag
     */
    constructor({ data: t, config: e, api: a6, readOnly: r3 }) {
      this.api = a6, this.readOnly = r3, this.placeholder = this.api.i18n.t(e.placeholder || _d.DEFAULT_PLACEHOLDER), this.CSS = {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        wrapper: "ce-code",
        textarea: "ce-code__textarea"
      }, this.nodes = {
        holder: null,
        textarea: null
      }, this.data = {
        code: t.code ?? ""
      }, this.nodes.holder = this.drawView();
    }
    /**
     * Return Tool's view
     * @returns this.nodes.holder - Code's wrapper
     */
    render() {
      return this.nodes.holder;
    }
    /**
     * Extract Tool's data from the view
     * @param codeWrapper - CodeTool's wrapper, containing textarea with code
     * @returns - saved plugin code
     */
    save(t) {
      return {
        code: t.querySelector("textarea").value
      };
    }
    /**
     * onPaste callback fired from Editor`s core
     * @param event - event with pasted content
     */
    onPaste(t) {
      const e = t.detail;
      if ("data" in e) {
        const a6 = e.data;
        this.data = {
          code: a6 || ""
        };
      }
    }
    /**
     * Returns Tool`s data from private property
     * @returns
     */
    get data() {
      return this._data;
    }
    /**
     * Set Tool`s data to private property and update view
     * @param data - saved tool data
     */
    set data(t) {
      this._data = t, this.nodes.textarea && (this.nodes.textarea.value = t.code);
    }
    /**
     * Get Tool toolbox settings.
     * Provides the icon and title to display in the toolbox for the CodeTool.
     * @returns An object containing:
     * - icon: SVG representation of the Tool's icon
     * - title: Title to show in the toolbox
     */
    static get toolbox() {
      return {
        icon: h4,
        title: "Code"
      };
    }
    /**
     * Default placeholder for CodeTool's textarea
     * @returns
     */
    static get DEFAULT_PLACEHOLDER() {
      return "Enter a code";
    }
    /**
     *  Used by Editor.js paste handling API.
     *  Provides configuration to handle CODE tag.
     * @returns
     */
    static get pasteConfig() {
      return {
        tags: ["pre"]
      };
    }
    /**
     * Automatic sanitize config
     * @returns
     */
    static get sanitize() {
      return {
        code: true
        // Allow HTML tags
      };
    }
    /**
     * Handles Tab key pressing (adds/removes indentations)
     * @param event - keydown
     */
    tabHandler(t) {
      t.stopPropagation(), t.preventDefault();
      const e = t.target, a6 = t.shiftKey, r3 = e.selectionStart, s6 = e.value, n3 = "  ";
      let i;
      if (!a6)
        i = r3 + n3.length, e.value = s6.substring(0, r3) + n3 + s6.substring(r3);
      else {
        const o4 = c4(s6, r3);
        if (s6.substr(o4, n3.length) !== n3)
          return;
        e.value = s6.substring(0, o4) + s6.substring(o4 + n3.length), i = r3 - n3.length;
      }
      e.setSelectionRange(i, i);
    }
    /**
     * Create Tool's view
     * @returns
     */
    drawView() {
      const t = document.createElement("div"), e = document.createElement("textarea");
      return t.classList.add(this.CSS.baseClass, this.CSS.wrapper), e.classList.add(this.CSS.textarea, this.CSS.input), e.value = this.data.code, e.placeholder = this.placeholder, this.readOnly && (e.disabled = true), t.appendChild(e), e.addEventListener("keydown", (a6) => {
        switch (a6.code) {
          case "Tab":
            this.tabHandler(a6);
            break;
        }
      }), this.nodes.textarea = e, t;
    }
  };

  // node_modules/@editorjs/underline/dist/underline.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".cdx-underline{text-decoration:underline}")), document.head.appendChild(e);
      }
    } catch (n3) {
      console.error("vite-plugin-css-injected-by-js", n3);
    }
  })();
  var r2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7.5V11.5C9 12.2956 9.31607 13.0587 9.87868 13.6213C10.4413 14.1839 11.2044 14.5 12 14.5C12.7956 14.5 13.5587 14.1839 14.1213 13.6213C14.6839 13.0587 15 12.2956 15 11.5V7.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.71429 18H16.2857"/></svg>';
  var s4 = class s5 {
    /**
     * @param options InlineToolConstructorOptions
     */
    constructor(e) {
      this.tag = "U", this.api = e.api, this.iconClasses = {
        base: this.api.styles.inlineToolButton,
        active: this.api.styles.inlineToolButtonActive
      };
    }
    /**
     * Class name for term-tag
     *
     * @type {string}
     */
    static get CSS() {
      return "cdx-underline";
    }
    /**
     * Create button element for Toolbar
     *
     * @returns {HTMLElement}
     */
    render() {
      return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
    }
    /**
     * Wrap/Unwrap selected fragment
     *
     * @param {Range} range - selected fragment
     */
    surround(e) {
      if (!e)
        return;
      const t = this.api.selection.findParentTag(this.tag, s5.CSS);
      t ? this.unwrap(t) : this.wrap(e);
    }
    /**
     * Wrap selection with term-tag
     *
     * @param {Range} range - selected fragment
     */
    wrap(e) {
      const t = document.createElement(this.tag);
      t.classList.add(s5.CSS), t.appendChild(e.extractContents()), e.insertNode(t), this.api.selection.expandToTag(t);
    }
    /**
     * Unwrap term-tag
     *
     * @param {HTMLElement} termWrapper - term wrapper tag
     */
    unwrap(e) {
      var o4;
      this.api.selection.expandToTag(e);
      const t = window.getSelection();
      if (!t)
        return;
      const n3 = t.getRangeAt(0);
      if (!n3)
        return;
      const i = n3.extractContents();
      i && ((o4 = e.parentNode) == null || o4.removeChild(e), n3.insertNode(i), t.removeAllRanges(), t.addRange(n3));
    }
    /**
     * Check and change Term's state for current selection
     */
    checkState() {
      var t;
      const e = this.api.selection.findParentTag(this.tag, s5.CSS);
      return (t = this.button) == null || t.classList.toggle(this.iconClasses.active, !!e), !!e;
    }
    /**
     * Get Tool icon's SVG
     *
     * @returns {string}
     */
    get toolboxIcon() {
      return r2;
    }
    /**
     * Sanitizer rule
     *
     * @returns {{u: {class: string}}}
     */
    static get sanitize() {
      return {
        u: {
          class: s5.CSS
        }
      };
    }
  };
  s4.isInline = true;
  var a5 = s4;

  // node_modules/@editorjs/image/dist/image.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var o4 = document.createElement("style");
        o4.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption{display:none}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image{display:none}.image-tool--empty .image-tool__caption,.image-tool--uploading .image-tool__caption{display:none!important}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--uploading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--uploading .image-tool__image-picture,.image-tool--uploading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}.image-tool--caption .image-tool__caption{display:block}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(o4);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var R5 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>';
  var I4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>';
  var L5 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
  var x4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
  var B4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
  function M4(C4, i = null, a6 = {}) {
    const s6 = document.createElement(C4);
    Array.isArray(i) ? s6.classList.add(...i) : i !== null && s6.classList.add(i);
    for (const r3 in a6)
      a6.hasOwnProperty(r3) && (s6[r3] = a6[r3]);
    return s6;
  }
  var S4 = /* @__PURE__ */ ((C4) => (C4.Empty = "empty", C4.Uploading = "uploading", C4.Filled = "filled", C4))(S4 || {});
  var U4 = class {
    /**
     * @param ui - image tool Ui module
     * @param ui.api - Editor.js API
     * @param ui.config - user config
     * @param ui.onSelectFile - callback for clicks on Select file button
     * @param ui.readOnly - read-only mode flag
     */
    constructor({ api: i, config: a6, onSelectFile: s6, readOnly: r3 }) {
      this.api = i, this.config = a6, this.onSelectFile = s6, this.readOnly = r3, this.nodes = {
        wrapper: M4("div", [this.CSS.baseClass, this.CSS.wrapper]),
        imageContainer: M4("div", [this.CSS.imageContainer]),
        fileButton: this.createFileButton(),
        imageEl: void 0,
        imagePreloader: M4("div", this.CSS.imagePreloader),
        caption: M4("div", [this.CSS.input, this.CSS.caption], {
          contentEditable: !this.readOnly
        })
      }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
    }
    /**
     * Apply visual representation of activated tune
     * @param tuneName - one of available tunes {@link Tunes.tunes}
     * @param status - true for enable, false for disable
     */
    applyTune(i, a6) {
      this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${i}`, a6);
    }
    /**
     * Renders tool UI
     * @param toolData - saved tool data
     */
    render(i) {
      return i.file === void 0 || Object.keys(i.file).length === 0 ? this.toggleStatus(
        "empty"
        /* Empty */
      ) : this.toggleStatus(
        "uploading"
        /* Uploading */
      ), this.nodes.wrapper;
    }
    /**
     * Shows uploading preloader
     * @param src - preview source
     */
    showPreloader(i) {
      this.nodes.imagePreloader.style.backgroundImage = `url(${i})`, this.toggleStatus(
        "uploading"
        /* Uploading */
      );
    }
    /**
     * Hide uploading preloader
     */
    hidePreloader() {
      this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
        "empty"
        /* Empty */
      );
    }
    /**
     * Shows an image
     * @param url - image source
     */
    fillImage(i) {
      const a6 = /\.mp4$/.test(i) ? "VIDEO" : "IMG", s6 = {
        src: i
      };
      let r3 = "load";
      a6 === "VIDEO" && (s6.autoplay = true, s6.loop = true, s6.muted = true, s6.playsinline = true, r3 = "loadeddata"), this.nodes.imageEl = M4(a6, this.CSS.imageEl, s6), this.nodes.imageEl.addEventListener(r3, () => {
        this.toggleStatus(
          "filled"
          /* Filled */
        ), this.nodes.imagePreloader !== void 0 && (this.nodes.imagePreloader.style.backgroundImage = "");
      }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
    }
    /**
     * Shows caption input
     * @param text - caption content text
     */
    fillCaption(i) {
      this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = i);
    }
    /**
     * CSS classes
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        loading: this.api.styles.loader,
        input: this.api.styles.input,
        button: this.api.styles.button,
        /**
         * Tool's classes
         */
        wrapper: "image-tool",
        imageContainer: "image-tool__image",
        imagePreloader: "image-tool__image-preloader",
        imageEl: "image-tool__image-picture",
        caption: "image-tool__caption"
      };
    }
    /**
     * Creates upload-file button
     */
    createFileButton() {
      const i = M4("div", [this.CSS.button]);
      return i.innerHTML = this.config.buttonContent ?? `${L5} ${this.api.i18n.t("Select an Image")}`, i.addEventListener("click", () => {
        this.onSelectFile();
      }), i;
    }
    /**
     * Changes UI status
     * @param status - see {@link Ui.status} constants
     */
    toggleStatus(i) {
      for (const a6 in S4)
        Object.prototype.hasOwnProperty.call(S4, a6) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${S4[a6]}`, i === S4[a6]);
    }
  };
  function D4(C4) {
    return C4 && C4.__esModule && Object.prototype.hasOwnProperty.call(C4, "default") ? C4.default : C4;
  }
  var H5 = { exports: {} };
  (function(C4, i) {
    (function(a6, s6) {
      C4.exports = s6();
    })(window, function() {
      return function(a6) {
        var s6 = {};
        function r3(e) {
          if (s6[e])
            return s6[e].exports;
          var o4 = s6[e] = { i: e, l: false, exports: {} };
          return a6[e].call(o4.exports, o4, o4.exports, r3), o4.l = true, o4.exports;
        }
        return r3.m = a6, r3.c = s6, r3.d = function(e, o4, d4) {
          r3.o(e, o4) || Object.defineProperty(e, o4, { enumerable: true, get: d4 });
        }, r3.r = function(e) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
        }, r3.t = function(e, o4) {
          if (1 & o4 && (e = r3(e)), 8 & o4 || 4 & o4 && typeof e == "object" && e && e.__esModule)
            return e;
          var d4 = /* @__PURE__ */ Object.create(null);
          if (r3.r(d4), Object.defineProperty(d4, "default", { enumerable: true, value: e }), 2 & o4 && typeof e != "string")
            for (var v5 in e)
              r3.d(d4, v5, function(l3) {
                return e[l3];
              }.bind(null, v5));
          return d4;
        }, r3.n = function(e) {
          var o4 = e && e.__esModule ? function() {
            return e.default;
          } : function() {
            return e;
          };
          return r3.d(o4, "a", o4), o4;
        }, r3.o = function(e, o4) {
          return Object.prototype.hasOwnProperty.call(e, o4);
        }, r3.p = "", r3(r3.s = 3);
      }([function(a6, s6) {
        var r3;
        r3 = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          r3 = r3 || new Function("return this")();
        } catch {
          typeof window == "object" && (r3 = window);
        }
        a6.exports = r3;
      }, function(a6, s6, r3) {
        (function(e) {
          var o4 = r3(2), d4 = setTimeout;
          function v5() {
          }
          function l3(n3) {
            if (!(this instanceof l3))
              throw new TypeError("Promises must be constructed via new");
            if (typeof n3 != "function")
              throw new TypeError("not a function");
            this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], t(n3, this);
          }
          function f3(n3, c5) {
            for (; n3._state === 3; )
              n3 = n3._value;
            n3._state !== 0 ? (n3._handled = true, l3._immediateFn(function() {
              var u2 = n3._state === 1 ? c5.onFulfilled : c5.onRejected;
              if (u2 !== null) {
                var g4;
                try {
                  g4 = u2(n3._value);
                } catch (m4) {
                  return void y5(c5.promise, m4);
                }
                p2(c5.promise, g4);
              } else
                (n3._state === 1 ? p2 : y5)(c5.promise, n3._value);
            })) : n3._deferreds.push(c5);
          }
          function p2(n3, c5) {
            try {
              if (c5 === n3)
                throw new TypeError("A promise cannot be resolved with itself.");
              if (c5 && (typeof c5 == "object" || typeof c5 == "function")) {
                var u2 = c5.then;
                if (c5 instanceof l3)
                  return n3._state = 3, n3._value = c5, void w4(n3);
                if (typeof u2 == "function")
                  return void t((g4 = u2, m4 = c5, function() {
                    g4.apply(m4, arguments);
                  }), n3);
              }
              n3._state = 1, n3._value = c5, w4(n3);
            } catch (h5) {
              y5(n3, h5);
            }
            var g4, m4;
          }
          function y5(n3, c5) {
            n3._state = 2, n3._value = c5, w4(n3);
          }
          function w4(n3) {
            n3._state === 2 && n3._deferreds.length === 0 && l3._immediateFn(function() {
              n3._handled || l3._unhandledRejectionFn(n3._value);
            });
            for (var c5 = 0, u2 = n3._deferreds.length; c5 < u2; c5++)
              f3(n3, n3._deferreds[c5]);
            n3._deferreds = null;
          }
          function b5(n3, c5, u2) {
            this.onFulfilled = typeof n3 == "function" ? n3 : null, this.onRejected = typeof c5 == "function" ? c5 : null, this.promise = u2;
          }
          function t(n3, c5) {
            var u2 = false;
            try {
              n3(function(g4) {
                u2 || (u2 = true, p2(c5, g4));
              }, function(g4) {
                u2 || (u2 = true, y5(c5, g4));
              });
            } catch (g4) {
              if (u2)
                return;
              u2 = true, y5(c5, g4);
            }
          }
          l3.prototype.catch = function(n3) {
            return this.then(null, n3);
          }, l3.prototype.then = function(n3, c5) {
            var u2 = new this.constructor(v5);
            return f3(this, new b5(n3, c5, u2)), u2;
          }, l3.prototype.finally = o4.a, l3.all = function(n3) {
            return new l3(function(c5, u2) {
              if (!n3 || n3.length === void 0)
                throw new TypeError("Promise.all accepts an array");
              var g4 = Array.prototype.slice.call(n3);
              if (g4.length === 0)
                return c5([]);
              var m4 = g4.length;
              function h5(T4, E4) {
                try {
                  if (E4 && (typeof E4 == "object" || typeof E4 == "function")) {
                    var j3 = E4.then;
                    if (typeof j3 == "function")
                      return void j3.call(E4, function(F5) {
                        h5(T4, F5);
                      }, u2);
                  }
                  g4[T4] = E4, --m4 == 0 && c5(g4);
                } catch (F5) {
                  u2(F5);
                }
              }
              for (var k4 = 0; k4 < g4.length; k4++)
                h5(k4, g4[k4]);
            });
          }, l3.resolve = function(n3) {
            return n3 && typeof n3 == "object" && n3.constructor === l3 ? n3 : new l3(function(c5) {
              c5(n3);
            });
          }, l3.reject = function(n3) {
            return new l3(function(c5, u2) {
              u2(n3);
            });
          }, l3.race = function(n3) {
            return new l3(function(c5, u2) {
              for (var g4 = 0, m4 = n3.length; g4 < m4; g4++)
                n3[g4].then(c5, u2);
            });
          }, l3._immediateFn = typeof e == "function" && function(n3) {
            e(n3);
          } || function(n3) {
            d4(n3, 0);
          }, l3._unhandledRejectionFn = function(n3) {
            typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", n3);
          }, s6.a = l3;
        }).call(this, r3(5).setImmediate);
      }, function(a6, s6, r3) {
        s6.a = function(e) {
          var o4 = this.constructor;
          return this.then(function(d4) {
            return o4.resolve(e()).then(function() {
              return d4;
            });
          }, function(d4) {
            return o4.resolve(e()).then(function() {
              return o4.reject(d4);
            });
          });
        };
      }, function(a6, s6, r3) {
        function e(t) {
          return (e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n3) {
            return typeof n3;
          } : function(n3) {
            return n3 && typeof Symbol == "function" && n3.constructor === Symbol && n3 !== Symbol.prototype ? "symbol" : typeof n3;
          })(t);
        }
        r3(4);
        var o4, d4, v5, l3, f3, p2, y5, w4 = r3(8), b5 = (d4 = function(t) {
          return new Promise(function(n3, c5) {
            t = l3(t), (t = f3(t)).beforeSend && t.beforeSend();
            var u2 = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
            u2.open(t.method, t.url), u2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m4) {
              var h5 = t.headers[m4];
              u2.setRequestHeader(m4, h5);
            });
            var g4 = t.ratio;
            u2.upload.addEventListener("progress", function(m4) {
              var h5 = Math.round(m4.loaded / m4.total * 100), k4 = Math.ceil(h5 * g4 / 100);
              t.progress(Math.min(k4, 100));
            }, false), u2.addEventListener("progress", function(m4) {
              var h5 = Math.round(m4.loaded / m4.total * 100), k4 = Math.ceil(h5 * (100 - g4) / 100) + g4;
              t.progress(Math.min(k4, 100));
            }, false), u2.onreadystatechange = function() {
              if (u2.readyState === 4) {
                var m4 = u2.response;
                try {
                  m4 = JSON.parse(m4);
                } catch {
                }
                var h5 = w4.parseHeaders(u2.getAllResponseHeaders()), k4 = { body: m4, code: u2.status, headers: h5 };
                y5(u2.status) ? n3(k4) : c5(k4);
              }
            }, u2.send(t.data);
          });
        }, v5 = function(t) {
          return t.method = "POST", d4(t);
        }, l3 = function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (t.url && typeof t.url != "string")
            throw new Error("Url must be a string");
          if (t.url = t.url || "", t.method && typeof t.method != "string")
            throw new Error("`method` must be a string or null");
          if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && e(t.headers) !== "object")
            throw new Error("`headers` must be an object or null");
          if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(o4).includes(t.type)))
            throw new Error("`type` must be taken from module's \xABcontentType\xBB library");
          if (t.progress && typeof t.progress != "function")
            throw new Error("`progress` must be a function or null");
          if (t.progress = t.progress || function(n3) {
          }, t.beforeSend = t.beforeSend || function(n3) {
          }, t.ratio && typeof t.ratio != "number")
            throw new Error("`ratio` must be a number");
          if (t.ratio < 0 || t.ratio > 100)
            throw new Error("`ratio` must be in a 0-100 interval");
          if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
            throw new Error("`accept` must be a string with a list of allowed mime-types");
          if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
            throw new Error("`multiple` must be a true or false");
          if (t.multiple = t.multiple || false, t.fieldName && typeof t.fieldName != "string")
            throw new Error("`fieldName` must be a string");
          return t.fieldName = t.fieldName || "files", t;
        }, f3 = function(t) {
          switch (t.method) {
            case "GET":
              var n3 = p2(t.data, o4.URLENCODED);
              delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + n3 : t.url + "?" + n3;
              break;
            case "POST":
            case "PUT":
            case "DELETE":
            case "UPDATE":
              var c5 = function() {
                return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || o4.JSON;
              }(t);
              (w4.isFormData(t.data) || w4.isFormElement(t.data)) && (c5 = o4.FORM), t.data = p2(t.data, c5), c5 !== b5.contentType.FORM && (t.headers["content-type"] = c5);
          }
          return t;
        }, p2 = function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          switch (arguments.length > 1 ? arguments[1] : void 0) {
            case o4.URLENCODED:
              return w4.urlEncode(t);
            case o4.JSON:
              return w4.jsonEncode(t);
            case o4.FORM:
              return w4.formEncode(t);
            default:
              return t;
          }
        }, y5 = function(t) {
          return t >= 200 && t < 300;
        }, { contentType: o4 = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d4, get: function(t) {
          return t.method = "GET", d4(t);
        }, post: v5, transport: function(t) {
          return t = l3(t), w4.selectFiles(t).then(function(n3) {
            for (var c5 = new FormData(), u2 = 0; u2 < n3.length; u2++)
              c5.append(t.fieldName, n3[u2], n3[u2].name);
            w4.isObject(t.data) && Object.keys(t.data).forEach(function(m4) {
              var h5 = t.data[m4];
              c5.append(m4, h5);
            });
            var g4 = t.beforeSend;
            return t.beforeSend = function() {
              return g4(n3);
            }, t.data = c5, v5(t);
          });
        }, selectFiles: function(t) {
          return delete (t = l3(t)).beforeSend, w4.selectFiles(t);
        } });
        a6.exports = b5;
      }, function(a6, s6, r3) {
        r3.r(s6);
        var e = r3(1);
        window.Promise = window.Promise || e.a;
      }, function(a6, s6, r3) {
        (function(e) {
          var o4 = e !== void 0 && e || typeof self < "u" && self || window, d4 = Function.prototype.apply;
          function v5(l3, f3) {
            this._id = l3, this._clearFn = f3;
          }
          s6.setTimeout = function() {
            return new v5(d4.call(setTimeout, o4, arguments), clearTimeout);
          }, s6.setInterval = function() {
            return new v5(d4.call(setInterval, o4, arguments), clearInterval);
          }, s6.clearTimeout = s6.clearInterval = function(l3) {
            l3 && l3.close();
          }, v5.prototype.unref = v5.prototype.ref = function() {
          }, v5.prototype.close = function() {
            this._clearFn.call(o4, this._id);
          }, s6.enroll = function(l3, f3) {
            clearTimeout(l3._idleTimeoutId), l3._idleTimeout = f3;
          }, s6.unenroll = function(l3) {
            clearTimeout(l3._idleTimeoutId), l3._idleTimeout = -1;
          }, s6._unrefActive = s6.active = function(l3) {
            clearTimeout(l3._idleTimeoutId);
            var f3 = l3._idleTimeout;
            f3 >= 0 && (l3._idleTimeoutId = setTimeout(function() {
              l3._onTimeout && l3._onTimeout();
            }, f3));
          }, r3(6), s6.setImmediate = typeof self < "u" && self.setImmediate || e !== void 0 && e.setImmediate || this && this.setImmediate, s6.clearImmediate = typeof self < "u" && self.clearImmediate || e !== void 0 && e.clearImmediate || this && this.clearImmediate;
        }).call(this, r3(0));
      }, function(a6, s6, r3) {
        (function(e, o4) {
          (function(d4, v5) {
            if (!d4.setImmediate) {
              var l3, f3, p2, y5, w4, b5 = 1, t = {}, n3 = false, c5 = d4.document, u2 = Object.getPrototypeOf && Object.getPrototypeOf(d4);
              u2 = u2 && u2.setTimeout ? u2 : d4, {}.toString.call(d4.process) === "[object process]" ? l3 = function(h5) {
                o4.nextTick(function() {
                  m4(h5);
                });
              } : function() {
                if (d4.postMessage && !d4.importScripts) {
                  var h5 = true, k4 = d4.onmessage;
                  return d4.onmessage = function() {
                    h5 = false;
                  }, d4.postMessage("", "*"), d4.onmessage = k4, h5;
                }
              }() ? (y5 = "setImmediate$" + Math.random() + "$", w4 = function(h5) {
                h5.source === d4 && typeof h5.data == "string" && h5.data.indexOf(y5) === 0 && m4(+h5.data.slice(y5.length));
              }, d4.addEventListener ? d4.addEventListener("message", w4, false) : d4.attachEvent("onmessage", w4), l3 = function(h5) {
                d4.postMessage(y5 + h5, "*");
              }) : d4.MessageChannel ? ((p2 = new MessageChannel()).port1.onmessage = function(h5) {
                m4(h5.data);
              }, l3 = function(h5) {
                p2.port2.postMessage(h5);
              }) : c5 && "onreadystatechange" in c5.createElement("script") ? (f3 = c5.documentElement, l3 = function(h5) {
                var k4 = c5.createElement("script");
                k4.onreadystatechange = function() {
                  m4(h5), k4.onreadystatechange = null, f3.removeChild(k4), k4 = null;
                }, f3.appendChild(k4);
              }) : l3 = function(h5) {
                setTimeout(m4, 0, h5);
              }, u2.setImmediate = function(h5) {
                typeof h5 != "function" && (h5 = new Function("" + h5));
                for (var k4 = new Array(arguments.length - 1), T4 = 0; T4 < k4.length; T4++)
                  k4[T4] = arguments[T4 + 1];
                var E4 = { callback: h5, args: k4 };
                return t[b5] = E4, l3(b5), b5++;
              }, u2.clearImmediate = g4;
            }
            function g4(h5) {
              delete t[h5];
            }
            function m4(h5) {
              if (n3)
                setTimeout(m4, 0, h5);
              else {
                var k4 = t[h5];
                if (k4) {
                  n3 = true;
                  try {
                    (function(T4) {
                      var E4 = T4.callback, j3 = T4.args;
                      switch (j3.length) {
                        case 0:
                          E4();
                          break;
                        case 1:
                          E4(j3[0]);
                          break;
                        case 2:
                          E4(j3[0], j3[1]);
                          break;
                        case 3:
                          E4(j3[0], j3[1], j3[2]);
                          break;
                        default:
                          E4.apply(v5, j3);
                      }
                    })(k4);
                  } finally {
                    g4(h5), n3 = false;
                  }
                }
              }
            }
          })(typeof self > "u" ? e === void 0 ? this : e : self);
        }).call(this, r3(0), r3(7));
      }, function(a6, s6) {
        var r3, e, o4 = a6.exports = {};
        function d4() {
          throw new Error("setTimeout has not been defined");
        }
        function v5() {
          throw new Error("clearTimeout has not been defined");
        }
        function l3(u2) {
          if (r3 === setTimeout)
            return setTimeout(u2, 0);
          if ((r3 === d4 || !r3) && setTimeout)
            return r3 = setTimeout, setTimeout(u2, 0);
          try {
            return r3(u2, 0);
          } catch {
            try {
              return r3.call(null, u2, 0);
            } catch {
              return r3.call(this, u2, 0);
            }
          }
        }
        (function() {
          try {
            r3 = typeof setTimeout == "function" ? setTimeout : d4;
          } catch {
            r3 = d4;
          }
          try {
            e = typeof clearTimeout == "function" ? clearTimeout : v5;
          } catch {
            e = v5;
          }
        })();
        var f3, p2 = [], y5 = false, w4 = -1;
        function b5() {
          y5 && f3 && (y5 = false, f3.length ? p2 = f3.concat(p2) : w4 = -1, p2.length && t());
        }
        function t() {
          if (!y5) {
            var u2 = l3(b5);
            y5 = true;
            for (var g4 = p2.length; g4; ) {
              for (f3 = p2, p2 = []; ++w4 < g4; )
                f3 && f3[w4].run();
              w4 = -1, g4 = p2.length;
            }
            f3 = null, y5 = false, function(m4) {
              if (e === clearTimeout)
                return clearTimeout(m4);
              if ((e === v5 || !e) && clearTimeout)
                return e = clearTimeout, clearTimeout(m4);
              try {
                e(m4);
              } catch {
                try {
                  return e.call(null, m4);
                } catch {
                  return e.call(this, m4);
                }
              }
            }(u2);
          }
        }
        function n3(u2, g4) {
          this.fun = u2, this.array = g4;
        }
        function c5() {
        }
        o4.nextTick = function(u2) {
          var g4 = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var m4 = 1; m4 < arguments.length; m4++)
              g4[m4 - 1] = arguments[m4];
          p2.push(new n3(u2, g4)), p2.length !== 1 || y5 || l3(t);
        }, n3.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, o4.title = "browser", o4.browser = true, o4.env = {}, o4.argv = [], o4.version = "", o4.versions = {}, o4.on = c5, o4.addListener = c5, o4.once = c5, o4.off = c5, o4.removeListener = c5, o4.removeAllListeners = c5, o4.emit = c5, o4.prependListener = c5, o4.prependOnceListener = c5, o4.listeners = function(u2) {
          return [];
        }, o4.binding = function(u2) {
          throw new Error("process.binding is not supported");
        }, o4.cwd = function() {
          return "/";
        }, o4.chdir = function(u2) {
          throw new Error("process.chdir is not supported");
        }, o4.umask = function() {
          return 0;
        };
      }, function(a6, s6, r3) {
        function e(d4, v5) {
          for (var l3 = 0; l3 < v5.length; l3++) {
            var f3 = v5[l3];
            f3.enumerable = f3.enumerable || false, f3.configurable = true, "value" in f3 && (f3.writable = true), Object.defineProperty(d4, f3.key, f3);
          }
        }
        var o4 = r3(9);
        a6.exports = function() {
          function d4() {
            (function(p2, y5) {
              if (!(p2 instanceof y5))
                throw new TypeError("Cannot call a class as a function");
            })(this, d4);
          }
          var v5, l3, f3;
          return v5 = d4, f3 = [{ key: "urlEncode", value: function(p2) {
            return o4(p2);
          } }, { key: "jsonEncode", value: function(p2) {
            return JSON.stringify(p2);
          } }, { key: "formEncode", value: function(p2) {
            if (this.isFormData(p2))
              return p2;
            if (this.isFormElement(p2))
              return new FormData(p2);
            if (this.isObject(p2)) {
              var y5 = new FormData();
              return Object.keys(p2).forEach(function(w4) {
                var b5 = p2[w4];
                y5.append(w4, b5);
              }), y5;
            }
            throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
          } }, { key: "isObject", value: function(p2) {
            return Object.prototype.toString.call(p2) === "[object Object]";
          } }, { key: "isFormData", value: function(p2) {
            return p2 instanceof FormData;
          } }, { key: "isFormElement", value: function(p2) {
            return p2 instanceof HTMLFormElement;
          } }, { key: "selectFiles", value: function() {
            var p2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return new Promise(function(y5, w4) {
              var b5 = document.createElement("INPUT");
              b5.type = "file", p2.multiple && b5.setAttribute("multiple", "multiple"), p2.accept && b5.setAttribute("accept", p2.accept), b5.style.display = "none", document.body.appendChild(b5), b5.addEventListener("change", function(t) {
                var n3 = t.target.files;
                y5(n3), document.body.removeChild(b5);
              }, false), b5.click();
            });
          } }, { key: "parseHeaders", value: function(p2) {
            var y5 = p2.trim().split(/[\r\n]+/), w4 = {};
            return y5.forEach(function(b5) {
              var t = b5.split(": "), n3 = t.shift(), c5 = t.join(": ");
              n3 && (w4[n3] = c5);
            }), w4;
          } }], (l3 = null) && e(v5.prototype, l3), f3 && e(v5, f3), d4;
        }();
      }, function(a6, s6) {
        var r3 = function(o4) {
          return encodeURIComponent(o4).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
        }, e = function(o4, d4, v5, l3) {
          return d4 = d4 || null, v5 = v5 || "&", l3 = l3 || null, o4 ? function(f3) {
            for (var p2 = new Array(), y5 = 0; y5 < f3.length; y5++)
              f3[y5] && p2.push(f3[y5]);
            return p2;
          }(Object.keys(o4).map(function(f3) {
            var p2, y5, w4 = f3;
            if (l3 && (w4 = l3 + "[" + w4 + "]"), typeof o4[f3] == "object" && o4[f3] !== null)
              p2 = e(o4[f3], null, v5, w4);
            else {
              d4 && (y5 = w4, w4 = !isNaN(parseFloat(y5)) && isFinite(y5) ? d4 + Number(w4) : w4);
              var b5 = o4[f3];
              b5 = (b5 = (b5 = (b5 = b5 === true ? "1" : b5) === false ? "0" : b5) === 0 ? "0" : b5) || "", p2 = r3(w4) + "=" + r3(b5);
            }
            return p2;
          })).join(v5).replace(/[!'()*]/g, "") : "";
        };
        a6.exports = e;
      }]);
    });
  })(H5);
  var q4 = H5.exports;
  var _2 = /* @__PURE__ */ D4(q4);
  function O5(C4) {
    return C4 !== void 0 && typeof C4.then == "function";
  }
  var A5 = class {
    /**
     * @param params - uploader module params
     * @param params.config - image tool config
     * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
     * @param params.onError - callback for uploading errors
     */
    constructor({ config: i, onUpload: a6, onError: s6 }) {
      this.config = i, this.onUpload = a6, this.onError = s6;
    }
    /**
     * Handle clicks on the upload file button
     * Fires ajax.transport()
     * @param onPreview - callback fired when preview is ready
     */
    uploadSelectedFile({ onPreview: i }) {
      const a6 = function(r3) {
        const e = new FileReader();
        e.readAsDataURL(r3), e.onload = (o4) => {
          i(o4.target.result);
        };
      };
      let s6;
      if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
        const r3 = this.config.uploader.uploadByFile;
        s6 = _2.selectFiles({ accept: this.config.types ?? "image/*" }).then((e) => {
          a6(e[0]);
          const o4 = r3(e[0]);
          return O5(o4) || console.warn("Custom uploader method uploadByFile should return a Promise"), o4;
        });
      } else
        s6 = _2.transport({
          url: this.config.endpoints.byFile,
          data: this.config.additionalRequestData,
          accept: this.config.types ?? "image/*",
          headers: this.config.additionalRequestHeaders,
          beforeSend: (r3) => {
            a6(r3[0]);
          },
          fieldName: this.config.field ?? "image"
        }).then((r3) => r3.body);
      s6.then((r3) => {
        this.onUpload(r3);
      }).catch((r3) => {
        this.onError(r3);
      });
    }
    /**
     * Handle clicks on the upload file button
     * Fires ajax.post()
     * @param url - image source url
     */
    uploadByUrl(i) {
      let a6;
      this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (a6 = this.config.uploader.uploadByUrl(i), O5(a6) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : a6 = _2.post({
        url: this.config.endpoints.byUrl,
        data: Object.assign({
          url: i
        }, this.config.additionalRequestData),
        type: _2.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((s6) => s6.body), a6.then((s6) => {
        this.onUpload(s6);
      }).catch((s6) => {
        this.onError(s6);
      });
    }
    /**
     * Handle clicks on the upload file button
     * Fires ajax.post()
     * @param file - file pasted by drag-n-drop
     * @param onPreview - file pasted by drag-n-drop
     */
    uploadByFile(i, { onPreview: a6 }) {
      const s6 = new FileReader();
      s6.readAsDataURL(i), s6.onload = (e) => {
        a6(e.target.result);
      };
      let r3;
      if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
        r3 = this.config.uploader.uploadByFile(i), O5(r3) || console.warn("Custom uploader method uploadByFile should return a Promise");
      else {
        const e = new FormData();
        e.append(this.config.field ?? "image", i), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([o4, d4]) => {
          e.append(o4, d4);
        }), r3 = _2.post({
          url: this.config.endpoints.byFile,
          data: e,
          type: _2.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then((o4) => o4.body);
      }
      r3.then((e) => {
        this.onUpload(e);
      }).catch((e) => {
        this.onError(e);
      });
    }
  };
  var P3 = class _P {
    /**
     * @param tool - tool properties got from editor.js
     * @param tool.data - previously saved data
     * @param tool.config - user config for Tool
     * @param tool.api - Editor.js API
     * @param tool.readOnly - read-only mode flag
     * @param tool.block - current Block API
     */
    constructor({ data: i, config: a6, api: s6, readOnly: r3, block: e }) {
      this.api = s6, this.block = e, this.config = {
        endpoints: a6.endpoints,
        additionalRequestData: a6.additionalRequestData,
        additionalRequestHeaders: a6.additionalRequestHeaders,
        field: a6.field,
        types: a6.types,
        captionPlaceholder: this.api.i18n.t(a6.captionPlaceholder ?? "Caption"),
        buttonContent: a6.buttonContent,
        uploader: a6.uploader,
        actions: a6.actions,
        features: a6.features || {}
      }, this.uploader = new A5({
        config: this.config,
        onUpload: (o4) => this.onUpload(o4),
        onError: (o4) => this.uploadingFailed(o4)
      }), this.ui = new U4({
        api: s6,
        config: this.config,
        onSelectFile: () => {
          this.uploader.uploadSelectedFile({
            onPreview: (o4) => {
              this.ui.showPreloader(o4);
            }
          });
        },
        readOnly: r3
      }), this._data = {
        caption: "",
        withBorder: false,
        withBackground: false,
        stretched: false,
        file: {
          url: ""
        }
      }, this.data = i;
    }
    /**
     * Notify core that read-only mode is supported
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     */
    static get toolbox() {
      return {
        icon: L5,
        title: "Image"
      };
    }
    /**
     * Available image tools
     */
    static get tunes() {
      return [
        {
          name: "withBorder",
          icon: I4,
          title: "With border",
          toggle: true
        },
        {
          name: "stretched",
          icon: x4,
          title: "Stretch image",
          toggle: true
        },
        {
          name: "withBackground",
          icon: R5,
          title: "With background",
          toggle: true
        }
      ];
    }
    /**
     * Renders Block content
     */
    render() {
      var i, a6, s6;
      return (((i = this.config.features) == null ? void 0 : i.caption) === true || ((a6 = this.config.features) == null ? void 0 : a6.caption) === void 0 || ((s6 = this.config.features) == null ? void 0 : s6.caption) === "optional" && this.data.caption) && this.ui.applyTune("caption", true), this.ui.render(this.data);
    }
    /**
     * Validate data: check if Image exists
     * @param savedData — data received after saving
     * @returns false if saved data is not correct, otherwise true
     */
    validate(i) {
      return !!i.file.url;
    }
    /**
     * Return Block data
     */
    save() {
      const i = this.ui.nodes.caption;
      return this._data.caption = i.innerHTML, this.data;
    }
    /**
     * Returns configuration for block tunes: add background, add border, stretch image
     * @returns TunesMenuConfig
     */
    renderSettings() {
      var r3;
      const i = _P.tunes.concat(this.config.actions || []), a6 = {
        border: "withBorder",
        background: "withBackground",
        stretch: "stretched",
        caption: "caption"
      };
      return ((r3 = this.config.features) == null ? void 0 : r3.caption) === "optional" && i.push({
        name: "caption",
        icon: B4,
        title: "With caption",
        toggle: true
      }), i.filter((e) => {
        var d4, v5;
        const o4 = Object.keys(a6).find((l3) => a6[l3] === e.name);
        return o4 === "caption" ? ((d4 = this.config.features) == null ? void 0 : d4.caption) !== false : o4 == null || ((v5 = this.config.features) == null ? void 0 : v5[o4]) !== false;
      }).map((e) => ({
        icon: e.icon,
        label: this.api.i18n.t(e.title),
        name: e.name,
        toggle: e.toggle,
        isActive: this.data[e.name],
        onActivate: () => {
          if (typeof e.action == "function") {
            e.action(e.name);
            return;
          }
          this.tuneToggled(e.name);
        }
      }));
    }
    /**
     * Fires after clicks on the Toolbox Image Icon
     * Initiates click on the Select File button
     */
    appendCallback() {
      this.ui.nodes.fileButton.click();
    }
    /**
     * Specify paste substitutes
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     */
    static get pasteConfig() {
      return {
        /**
         * Paste HTML into Editor
         */
        tags: [
          {
            img: { src: true }
          }
        ],
        /**
         * Paste URL of image into the Editor
         */
        patterns: {
          image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
        },
        /**
         * Drag n drop file from into the Editor
         */
        files: {
          mimeTypes: ["image/*"]
        }
      };
    }
    /**
     * Specify paste handlers
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     * @param event - editor.js custom paste event
     *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
     */
    async onPaste(i) {
      switch (i.type) {
        case "tag": {
          const a6 = i.detail.data;
          if (/^blob:/.test(a6.src)) {
            const r3 = await (await fetch(a6.src)).blob();
            this.uploadFile(r3);
            break;
          }
          this.uploadUrl(a6.src);
          break;
        }
        case "pattern": {
          const a6 = i.detail.data;
          this.uploadUrl(a6);
          break;
        }
        case "file": {
          const a6 = i.detail.file;
          this.uploadFile(a6);
          break;
        }
      }
    }
    /**
     * Private methods
     * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
     */
    /**
     * Stores all Tool's data
     * @param data - data in Image Tool format
     */
    set data(i) {
      this.image = i.file, this._data.caption = i.caption || "", this.ui.fillCaption(this._data.caption), _P.tunes.forEach(({ name: a6 }) => {
        const s6 = typeof i[a6] < "u" ? i[a6] === true || i[a6] === "true" : false;
        this.setTune(a6, s6);
      });
    }
    /**
     * Return Tool data
     */
    get data() {
      return this._data;
    }
    /**
     * Set new image file
     * @param file - uploaded file data
     */
    set image(i) {
      this._data.file = i || { url: "" }, i && i.url && this.ui.fillImage(i.url);
    }
    /**
     * File uploading callback
     * @param response - uploading server response
     */
    onUpload(i) {
      i.success && i.file ? this.image = i.file : this.uploadingFailed("incorrect response: " + JSON.stringify(i));
    }
    /**
     * Handle uploader errors
     * @param errorText - uploading error info
     */
    uploadingFailed(i) {
      console.log("Image Tool: uploading failed because of", i), this.api.notifier.show({
        message: this.api.i18n.t("Couldn\u2019t upload image. Please try another."),
        style: "error"
      }), this.ui.hidePreloader();
    }
    /**
     * Callback fired when Block Tune is activated
     * @param tuneName - tune that has been clicked
     */
    tuneToggled(i) {
      this.setTune(i, !this._data[i]), i === "caption" && !this._data[i] && (this._data.caption = "", this.ui.fillCaption(""));
    }
    /**
     * Set one tune
     * @param tuneName - {@link Tunes.tunes}
     * @param value - tune state
     */
    setTune(i, a6) {
      this._data[i] = a6, this.ui.applyTune(i, a6), i === "stretched" && Promise.resolve().then(() => {
        this.block.stretched = a6;
      }).catch((s6) => {
        console.error(s6);
      });
    }
    /**
     * Show preloader and upload image file
     * @param file - file that is currently uploading (from paste)
     */
    uploadFile(i) {
      this.uploader.uploadByFile(i, {
        onPreview: (a6) => {
          this.ui.showPreloader(a6);
        }
      });
    }
    /**
     * Show preloader and upload image by target url
     * @param url - url pasted
     */
    uploadUrl(i) {
      this.ui.showPreloader(i), this.uploader.uploadByUrl(i);
    }
  };

  // src/client/editor.js
  window.EditorJS = Ts;
  var defaultConfig = {
    /**
     * Các công cụ có sẵn
     */
    tools: {
      header: {
        class: v,
        inlineToolbar: ["marker", "link"],
        config: {
          placeholder: "Enter a header",
          levels: [1, 2, 3],
          defaultLevel: 2
        },
        shortcut: "CMD+SHIFT+H"
      },
      paragraph: {
        class: n,
        inlineToolbar: true,
        config: {
          placeholder: "Type your text here..."
        }
      },
      list: {
        class: G2,
        inlineToolbar: true,
        config: {
          defaultStyle: "unordered"
        },
        shortcut: "CMD+SHIFT+L"
      },
      delimiter: n2,
      table: {
        class: F3,
        inlineToolbar: true,
        shortcut: "CMD+ALT+T"
      },
      quote: {
        class: m3,
        inlineToolbar: true,
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author"
        },
        shortcut: "CMD+SHIFT+O"
      },
      code: {
        class: d3,
        shortcut: "CMD+SHIFT+C"
      },
      marker: {
        class: s,
        shortcut: "CMD+SHIFT+M"
      },
      inlineCode: {
        class: s2,
        shortcut: "CMD+SHIFT+L"
      },
      underline: a5,
      image: {
        class: P3,
        config: {
          endpoints: {
            byFile: "/api/upload-image",
            byUrl: "/api/fetch-image"
          }
        }
      }
    },
    /**
     * Cấu hình mặc định
     */
    placeholder: "Let's write something!",
    inlineToolbar: ["bold", "italic", "marker", "inlineCode", "underline"],
    data: {
      blocks: [{
        type: "paragraph",
        data: {
          text: ""
        }
      }]
    }
  };
  var EditorManager = class {
    static createEditor(config) {
      const editorConfig = {
        ...defaultConfig,
        ...config,
        tools: {
          ...defaultConfig.tools,
          ...config.tools || {}
        }
      };
      return new Ts(editorConfig);
    }
    static async destroyEditor(editor) {
      if (editor && typeof editor.destroy === "function") {
        try {
          await editor.destroy();
        } catch (error) {
          console.error("Error destroying editor:", error);
        }
      }
      return null;
    }
  };
  window.EditorManager = EditorManager;
})();
/*! Bundled license information:

@editorjs/editorjs/dist/editorjs.mjs:
  (*!
   * CodeX.Tooltips
   * 
   * @version 1.0.5
   * 
   * @licence MIT
   * @author CodeX <https://codex.so>
   * 
   * 
   *)
  (*!
   * Library for handling keyboard shortcuts
   * @copyright CodeX (https://codex.so)
   * @license MIT
   * @author CodeX (https://codex.so)
   * @version 1.2.0
   *)
  (**
   * Base Paragraph Block for the Editor.js.
   * Represents a regular text block
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   *)
  (**
   * Editor.js
   *
   * @license Apache-2.0
   * @see Editor.js <https://editorjs.io>
   * @author CodeX Team <https://codex.so>
   *)

@editorjs/header/dist/header.mjs:
  (**
   * Header block for the Editor.js.
   *
   * @author CodeX (team@ifmo.su)
   * @copyright CodeX 2018
   * @license MIT
   * @version 2.0.0
   *)

@editorjs/paragraph/dist/paragraph.mjs:
  (**
   * Base Paragraph Block for the Editor.js.
   * Represents a regular text block
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   *)

@editorjs/delimiter/dist/delimiter.mjs:
  (**
   * Delimiter Block for the Editor.js.
   *
   * @author CodeX (team@ifmo.su)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   * @version 2.0.0
   *)

@editorjs/code/dist/code.mjs:
  (**
   * CodeTool for Editor.js
   * @version 2.0.0
   * @license MIT
   *)

@editorjs/image/dist/image.mjs:
  (**
   * Image Tool for the Editor.js
   * @author CodeX <team@codex.so>
   * @license MIT
   * @see {@link https://github.com/editor-js/image}
   *
   * To developers.
   * To simplify Tool structure, we split it to 4 parts:
   *  1) index.ts — main Tool's interface, public API and methods for working with data
   *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
   *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
   *
   * For debug purposes there is a testing server
   * that can save uploaded files and return a Response {@link UploadResponseFormat}
   *
   *       $ node dev/server.js
   *
   * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
   *
   * image: {
   *   class: ImageTool,
   *   config: {
   *     endpoints: {
   *       byFile: 'http://localhost:8008/uploadFile',
   *       byUrl: 'http://localhost:8008/fetchUrl',
   *     }
   *   },
   * },
   *)
*/
