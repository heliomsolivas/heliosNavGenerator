var Header = function (el, options) {
    this.el = document.querySelector(el);
    this.options = options || {};

    for (var optionName in this.defaultOptions) {
        if (typeof this.options[optionName] === 'undefined') {
            this.options[optionName] = this.defaultOptions[optionName];
        }
    }
}

Header.prototype.defaultOptions = {
    color: "#222",
    backgroundColor: "transparent",
    fontSize: "16px",
    height: "90px",
    nav: ['Home', 'About'],
    logo: 'http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Pepsi-Logo-PNG-Transparent-500x667.png'
}

Header.prototype.mount = function () {

    this.el.style.backgroundColor = this.defaultOptions.backgroundColor;

    if (typeof this.options.backgroundColor !== 'undefined') {
        this.el.style.backgroundColor = this.options.backgroundColor;
    }
    if (typeof this.options.color !== 'undefined') {
        this.el.style.color = this.options.color;
    }
    if (typeof this.options.height !== 'undefined') {
        this.el.style.height = this.options.height + "px";
    }
    if (typeof this.options.fontSize !== 'undefined') {
        this.el.style.fontSize = this.options.fontSize + "px";
    }

    if (typeof this.options.logo !== 'undefined') {
        let fragmento = document.createDocumentFragment();
        let logoWrapper = fragmento.appendChild(document.createElement("div"));
        logoWrapper.className = "logo";

        let imgLogo = logoWrapper.appendChild(document.createElement("img"));
        imgLogo.setAttribute('src', this.options.logo);
        this.el.appendChild(logoWrapper);
    }

    if (typeof this.options.nav !== 'undefined') {
        let fragmento = document.createDocumentFragment();

        let iptChk = document.createElement('input');
        iptChk.setAttribute('id', 'menuOpen');
        iptChk.setAttribute('type', 'checkbox');

        let labelChk = document.createElement('label');
        labelChk.setAttribute('class', 'label-menu');
        labelChk.setAttribute('for', 'menuOpen');

        let menuIcon = document.createElement('div');
        menuIcon.setAttribute('class', 'menu__icon');

        let menuStripe1 = document.createElement('div');
        menuStripe1.setAttribute('class', 'menu__stripe');

        let menuStripe2 = document.createElement('div');
        menuStripe2.setAttribute('class', 'menu__stripe');

        let menuStripe3 = document.createElement('div');
        menuStripe3.setAttribute('class', 'menu__stripe');

        menuIcon.appendChild(menuStripe1);
        menuIcon.appendChild(menuStripe2);
        menuIcon.appendChild(menuStripe3);

        labelChk.appendChild(menuIcon);

        let nav = fragmento.appendChild(document.createElement("nav"));

        let items = this.options.nav;


        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            let itemNav = nav.appendChild(
                document.createElement("li")
            );
            let a = document.createElement("a");
            let href = element.toLowerCase().replace(/\s/g, "-");
            a.setAttribute('href', href);
            a.textContent = element;
            itemNav.appendChild(a);

        }

        this.el.appendChild(iptChk);
        this.el.appendChild(labelChk);
        this.el.appendChild(nav);
    }

}