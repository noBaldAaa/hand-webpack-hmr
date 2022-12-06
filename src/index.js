import name from "./name";

const render = () => {
  const rootDom = document.getElementById("root");
  rootDom.innerText = name;
};

render();

if (module.hot) {
  module.hot.accept("./name", function () {
    console.log("name模块发生变化，处理热更新逻辑");
    render();
  });
}
