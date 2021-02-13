import MyComponent from "@/components/MyComponent";

MyComponent.install = function (Vue) {
    Vue.component('my-component', MyComponent);
};

export default MyComponent