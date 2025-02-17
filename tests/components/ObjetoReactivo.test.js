import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import ObjetoReactivo from "@/components/ObjetoReactivo.vue";

describe("ObjetoReactivo", () => {
    test("debería renderizar el componente", () => {
        const wrapper = mount(ObjetoReactivo);
        expect(wrapper.find("h2").exists()).toBe(true);
    });

    test("debería renderizar el título", () => {
        const wrapper = mount(ObjetoReactivo);
        expect(wrapper.find("h2").text()).toBe("Objeto Reactivo");
    });

    test("debería renderizar el nombre de la persona", () => {
        const wrapper = mount(ObjetoReactivo);
        expect(wrapper.find("p").text()).toBe("Nombre: Juan");
    });
});
