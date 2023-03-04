export default {
  mapDOM(scope) {
    return {
      navigator: scope.querySelector(".navigator"),
      navigatorUndo: scope.querySelector(".navigator-undo"),
      contentPanel: scope.querySelector(".content-panel"),
    };
  },
  render() {
    return `${this.html()}${this.css()}`;
  },
  html() {
    return `
            <div class="navigator">
                <button class="navigator-undo"><<<</button>
            </div>
            <div class="content-panel"></div>
        `;
  },
  css() {
    return `<style>
            :host{
                display:flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding:0.5rem;
                width:100%;
                min-height:200px;
                border:1px solid black;
            }
            .navigator{
                display:flex;
                flex-direction:row;
                justify-content: felx-start;
                align-items: center;
                padding-inline:0.25rem;
                margin:0.25rem;
                gap:0.25rem;
            }
            .navigator-undo{
                width: 50px;
                height:30px;
                border: none;
                border-radius:0.25rem;
                background: white;
                color: black;
                font-size: 1.5rem;
                font-width: 800;
                line-height:2 rem;
                box-shadow: 0 0 5px rgba(100,100,100,0.5);
                cursor:pointer;
                transition: all 0.3s ease-out;
            }
            .navigator-undo:hover{
                transform: scale(1.05);
            }
            .content-panel{
                display:flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding:0.5rem;
                width:100%;
                min-height:200px;
                border:1px solid black;
            }
        </style>`;
  },
};
