class AppBar extends HTMLElement {
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
                header {
                    background: #007BFF;
                    color: white;
                    text-align: center;
                }
                h1 {
                    margin: 0;
                    font-size: 1.5rem;
                }
            </style>
            <header>
                <h1>Notes App</h1>
            </header>
        `;
  }
}

customElements.define("app-bar", AppBar);
