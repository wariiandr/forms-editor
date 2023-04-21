<template>
    <div class="my-4 p-4 flex items-center border-slate-700 rounded-xl border-2">
        <component v-for="(input, idx) in fieldInputs" 
            :key="idx" 
            :is="`b-${input.component}`" 
            v-model="field[input.value]"
            v-bind="input.params"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import type { Ref } from 'vue'

import Fields from '@/consts/fields';
import InputTypes from '@/consts/inputTypes';
import { IFieldInput, IFieldsTypePropertiesInputs } from '@/lib/interfaces/fieldsTypePropertiesInputs';

import { useFormStore } from '@/store/form.js';

export default defineComponent({
    props: {
        field: {
            type: Object,
            required: true
        },
        fieldIdx: {
            type: Number,
            required: true
        }
    },
    setup({ field, fieldIdx }) {
        let fieldInputs: Ref<IFieldInput[]> = ref([
            { component: 'select', value: 'input', params: { label: 'Input', options: Object.values(Fields), required: true } },
            { component: 'input', value: 'label', params: { sizeAndSpacingClasses: 'w-2/6', label: 'Label', type: 'text', required: true } },
        ]);

        const fieldsTypePropertiesInputs: IFieldsTypePropertiesInputs = {
            [Fields.Input]: [ { component: 'select', value: 'type', params: { label: 'Type', options: Object.values(InputTypes), required: true } } ],
            [Fields.Select]: [ { component: 'chips-input', value: 'options', params: { sizeAndSpacingClasses: 'w-3/6', label: 'Options', required: true } } ],
        };


        const formStore = useFormStore();

        watch(field, (value) => {
            formStore.addFormFieldTypeProperties({ fieldIdx, fieldType: value.input });

            if (value.input !== Fields.Checkbox) {
                fieldInputs.value = [ ...fieldInputs.value, ...fieldsTypePropertiesInputs[value.input] ];
            }
        })

        return {
            fieldInputs
        }
    }
})
</script>