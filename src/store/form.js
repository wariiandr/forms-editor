import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useFormStore = defineStore('form', () => {
    const form = ref({ title: '', fields: [], creationDate: '' });

    function setForm(newForm) {
        form.value = newForm;
    }

    function addFormNewField() {
        form.value.fields.push({
            input: '',
            label: '',
            type: '',
            options: []
        })
    }

    const isFormLastFieldInvalid = computed(() => {
        if (form.value.fields.length) {
            const lastField = form.value.fields[form.value.fields.length - 1];

            if (lastField.input === 'Input' && lastField.label && lastField.type) return false;
            if (lastField.input === 'Select' && lastField.label && lastField.options.length) return false;
            if (lastField.input === 'Checkbox' && lastField.label) return false;

            return true;
        }

        return false;
    })
    
    return {
        form,
        setForm,
        addFormNewField,
        isFormLastFieldInvalid,
    }
})