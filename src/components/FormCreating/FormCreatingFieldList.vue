<template>
    <div class="w-6/12">
        <form-creating-field-list-item
            v-for="(field, idx) in fields"
            :key="idx"

            :field="field"
        />

        <button class="block mx-auto text-5xl disabled:text-slate-400"
            :disabled="isDisabledAddBtn"
            @click="addNewField()"> 
            + 
        </button>

        <div class="w-full flex justify-end mt-4">
            <b-button 
                :text="'SAVE FORM'"
                :disabled="isDisabledAddBtn"
                @click="saveForm()"
            />
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

import FormCreatingFieldListItem from './FormCreatingFieldListItem.vue';

export default {
    components: { FormCreatingFieldListItem },
    setup() {
        const fields = ref([]);

        function addNewField() {
            fields.value.push({
                input: '',
                label: '',
                type: '',
                options: []
            })
        }

        const isDisabledAddBtn = computed(() => {
            if (fields.value.length) {
                const lastField = fields.value[fields.value.length - 1];

                if (lastField.input === 'Input' && lastField.label && lastField.type) return false;
                if (lastField.input === 'Select' && lastField.label && lastField.options.length) return false;
                if (lastField.input === 'Checkbox' && lastField.label) return false;

                return true;
            }

            return false;
        })

        function saveForm() {

        }

        return {
            fields,
            addNewField,
            isDisabledAddBtn,
            saveForm
        }
    }
}
</script>