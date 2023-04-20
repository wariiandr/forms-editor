<template>
    <div>
        <editor-field-list-item
            v-for="(field, idx) in form.fields"
            :key="idx"

            :field="field"
            :fieldIdx="idx"
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

import EditorFieldListItem from './EditorFieldListItem.vue';

import { useFormStore } from '@/store/form.js';

export default {
    components: { EditorFieldListItem },
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