<template>
    <div class="w-6/12">
        <h2 class="mb-4 text-4xl font-semibold text-slate-900"> Add fields to the form </h2>

        <form-creating-field-list-item
            v-for="(field, idx) in fields"
            :key="idx"

            :field="field"
        />

        <button class="block mx-auto text-5xl"
            @click="addNewField()"> 
            + 
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';

import FormCreatingFieldListItem from './FormCreatingFieldListItem.vue';

export default {
    components: { FormCreatingFieldListItem },
    setup() {
        const fields = ref([]);

        function addNewField() {
            fields.value.push({
                input: '',
                label: '',
                type: ''
            })
        }

        return {
            fields,
            addNewField
        }
    }
}
</script>