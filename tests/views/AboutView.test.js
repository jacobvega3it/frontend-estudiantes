import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("AboutView", () => {
    test("debería renderizar el componente", () => {
        const wrapper = mount(AboutView);
        expect(wrapper.find("h1").exists()).toBe(true);
    });

    test("debería renderizar el título", () => {
        const wrapper = mount(AboutView);
        expect(wrapper.find("h1").text()).toBe("About");
    });

    test("debería renderizar el contenido", () => {
        const wrapper = mount(AboutView);
        expect(wrapper.find("p").text()).toBe("Esta es la página de información");
    });
});