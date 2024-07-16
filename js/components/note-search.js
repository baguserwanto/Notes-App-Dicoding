class NoteSearch extends HTMLElement {
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
        .search-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        input {
          padding: 0.6rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 90%;
          transition: all 0.3s ease-in-out;
        }
      </style>
      <div class="search-bar">
        <div class="search-card">
          <input type="text" id="search" placeholder="Search notes..." />
        </div>
      </div>
    `;

    this.shadowRoot
      .querySelector("#search")
      .addEventListener("input", (event) => {
        const searchEvent = new CustomEvent("search-note", {
          detail: event.target.value,
        });
        this.dispatchEvent(searchEvent);
      });
  }
}

customElements.define("note-search", NoteSearch);
