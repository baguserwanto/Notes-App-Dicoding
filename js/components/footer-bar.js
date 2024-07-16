class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        footer {
            background-color: #007BFF;
            color: #fff;
            text-align: center;
            font-weight: bold;
            padding: 1rem;
        }
        p {
          margin: 0;
        }
      </style>
      <footer>
        <p>&copy; 2024 Notes App. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define("footer-bar", FooterBar);
