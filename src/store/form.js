import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

import { fieldTemplates } from '@/consts/fieldTemplates';


export const useFormStore = defineStore('form', () => {
    const form = ref({ title: '', fields: [], creationDate: '' });

    function setForm(newForm) {
        form.value = newForm;
    }

    function addFormNewField() {
        form.value.fields.push({
            input: '',
            label: ''
        })
    }

    function addFormFieldTypeProperties({ fieldIdx, fieldType }) {
        form.value.fields[fieldIdx] = { ...form.value.fields[fieldIdx], ...fieldTemplates[fieldType] };
    }

    const isFormLastFieldInvalid = computed(() => {
        if (form.value.fields.length) {
            const lastFieldValues = Object.values(form.value.fields[form.value.fields.length - 1]);

            return !lastFieldValues.every(elem => {
                if (Array.isArray(elem)) return elem.length;
                return !!elem;
            });
        }

        return false;
    })
    
    return {
        form,
        setForm,
        addFormNewField,
        addFormFieldTypeProperties,
        isFormLastFieldInvalid,
    }
})