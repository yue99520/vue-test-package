import MyComponent from "./MyComponent";

MyComponent.install = function (Vue) {
    Vue.component('my-component', MyComponent);
};

export default MyComponent