<template>
    <div class="w-6/12">
        <form-creating-field-list-item
            v-for="(field, idx) in form.fields"
            :key="idx"

            :field="field"
        />

        <button class="block mx-auto text-5xl disabled:text-slate-400"
            :disabled="isFormLastFieldInvalid"
            @click="addFormNewField()"> 
            + 
        </button>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';

import FormCreatingFieldListItem from './FormCreatingFieldListItem.vue';

import { useFormStore } from '@/store/form.js';

export default {
    components: { FormCreatingFieldListItem },
    setup() {
        const formStore = useFormStore();

        const { form, isFormLastFieldInvalid } = storeToRefs(formStore);

        const { addFormNewField } = formStore;

        return {
            formStore,
            form,
            isFormLastFieldInvalid,
            addFormNewField,
        }
    }
}
</script>