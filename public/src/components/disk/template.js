export default {
  mapDOM(scope) {
    return {
      diskHeader: scope.querySelector(".disk-header"),
      diskImage: scope.querySelector(".disk-image"),
    };
  },
  render(props) {
    return `${this.html(props)}${this.css(props)}`;
  },
  html(props) {
    return `
            <h1 class="disk-header"></h1>
        `;
  },
  css(props) {
    return `<style>
            :host{
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              transition: all 0.3s ease-in;
              box-shadow: 0 0 10px rgba(100,100,100,0.2);
              --countur-color: white;
            }
            .disk-header{
                font-size: 1.5rem;
                font-weigth: 800;
                line-height: 5rem;
                color:black;
                text-shadow: -1px -1px 0 var(--countur-color), 1px -1px 0 var(--countur-color), -1px 1px 0 var(--countur-color), 1px 1px 0 var(--countur-color);
            }
        </style>`;
  },
};
