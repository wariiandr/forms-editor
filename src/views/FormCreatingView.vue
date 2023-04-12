<template>
    <div>
        <div class="w-6/12 flex justify-between">
            <h2 class="mb-4 text-4xl font-semibold text-slate-900"> Add fields to the form </h2>

            <b-button 
                :text="'SAVE FORM'"
                :disabled="isFormLastFieldInvalid"
                @click="saveForm()"
            />
        </div>

        <form-creating-field-list />
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';

import FormCreatingFieldList from '@/components/FormCreating/FormCreatingFieldList.vue';

import { useFormStore } from '@/store/form.js';

export default {
    components: { FormCreatingFieldList },
    setup() {
        const formStore = useFormStore();

        const { isFormLastFieldInvalid } = storeToRefs(formStore);

        function saveForm() {

        }

        return {
            saveForm,
            isFormLastFieldInvalid
        }
    }
}
</script>