class NoteForm extends HTMLElement {
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
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 2rem;
                    margin-top: 2rem;
                }
                input, textarea {
                    padding: 0.5rem;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
                button {
                    padding: 0.5rem;
                    background-color: #007BFF;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <form>
                <input type="text" id="title" placeholder="Title" required />
                <textarea id="body" rows="4" placeholder="Enter your note..." required></textarea>
                <button type="submit">Add Note</button>
            </form>
        `;

    this.shadowRoot
      .querySelector("form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        const title = this.shadowRoot.getElementById("title").value;
        const body = this.shadowRoot.getElementById("body").value;
        const note = {
          id: `notes-${Date.now()}`,
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        };
        this.dispatchEvent(new CustomEvent("add-note", { detail: note }));
        this.shadowRoot.querySelector("form").reset();
      });
  }
}

customElements.define("note-form", NoteForm);
