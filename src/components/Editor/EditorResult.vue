<template>
    <div class="w-6/12">
        <component v-for="(field, idx) in form.fields" 
            :key="idx" 
            :is="`b-${field.input.toLowerCase()}`" 
            :sizeAndSpacingClasses="'mb-4'"
            :label="field.label"
            :options="field.options"
            :type="field.type"
        />
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';

import { useFormStore } from '@/store/form.js';

export default {
    setup() {
        const formStore = useFormStore();

        const { form } = storeToRefs(formStore);

        return {
            formStore,
            form,
        }
    }
}
</script>