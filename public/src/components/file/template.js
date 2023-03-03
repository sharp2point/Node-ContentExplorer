export default {
  mapDOM(scope) {
    return {
      fileName: scope.querySelector(".file-name"),
      fileImage: scope.querySelector(".file-image"),
    };
  },
  render() {
    return `${this.html()}${this.css()}`;
  },
  html() {
    return `
            <img class="file-image" src="#"/>
            <span class="file-name">file name</span>
        `;
  },
  css() {
    return `
            <style>
                :host{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 200px;
                    height: 30px;
                    padding: 0.2rem;
                    box-shadow: 0 0 5px rgba(200,200,200,0.2);
                    border-radius: 0.25rem;
                    background: #FEFEFE;
                    cursor: pointer;
                }
                .file-name{
                    width: 70%;
                    color: black;
                    font-size: 1rem;
                    line-height:1.5rem;
                    font-weight: 400;
                    overflow: hidden;
                    word-break: keep-all;
                    overflow-wrap: normal;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .file-image{
                    width: 25px;
                    height: 25px;
                    object-fit: cover;
                }
            </style>
        `;
  },
};
