export default {
  render(props) {
    return `${this.html(props)}${this.css(props)}`;
  },
  html(props) {
    return ``;
  },
  css(props) {
    return `<style>
        :host{
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: start;
            padding: 0.5rem;
            gap:0.5rem;
            border: 1px solid black;
        }
    </style>`
  },
};
