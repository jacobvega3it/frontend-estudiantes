import { describe, test, expect, vi, beforeEach } from "vitest";
import useApiStudents from "@/composables/useApiStudents";
import axios from 'axios';

vi.mock('axios');

describe("useApiStudents", () => {
    let composable;

    beforeEach(() => {
        composable = useApiStudents(); // Reinicializa el composable antes de cada test
        axios.get.mockReset();
        axios.delete.mockReset();
    });

    test('debe obtener la lista de estudiantes correctamente', async () => {
        // Simula la respuesta de la API con datos falsos
        const fakeStudents = [
            { studentId: 1, name: 'Juan', surname: 'Pérez', career: { name: 'Ingeniería' } },
            { studentId: 2, name: 'María', surname: 'López', career: { name: 'Medicina' } },
        ];
        axios.get.mockResolvedValue({ data: fakeStudents });

        await composable.fetchStudents();

        expect(axios.get).toHaveBeenCalledWith('http://localhost:8095/api/estudiantes', {
            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        });

        expect(composable.students.value).toEqual(fakeStudents);
        expect(composable.message.value).toBe('');
    });

    test('debe eliminar un estudiante correctamente', async () => {
        axios.delete.mockResolvedValue({});
        axios.get.mockResolvedValue({ data: [] }); // Simulamos que la lista queda vacía tras eliminar

        // Simular la confirmación del usuario para eliminar
        vi.spyOn(window, 'confirm').mockReturnValue(true);

        await composable.deleteStudent(1);

        expect(axios.delete).toHaveBeenCalledWith('http://localhost:8095/api/estudiantes/eliminar/1', {
            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        });

        expect(axios.get).toHaveBeenCalled(); // Verifica que fetchStudents() se llamó
        expect(composable.message.value).toBe('Estudiante eliminado correctamente.');
        expect(composable.messageType.value).toBe('message-success');
    });
    
    test('debe manejar errores al obtener estudiantes', async () => {
        axios.get.mockRejectedValue(new Error('Error de conexión'));

        await composable.fetchStudents();

        expect(axios.get).toHaveBeenCalled();
        expect(composable.students.value).toEqual([]);
        expect(composable.message.value).toBe('No se pudo obtener la lista de estudiantes');
        expect(composable.messageType.value).toBe('message-error');
    });

});
