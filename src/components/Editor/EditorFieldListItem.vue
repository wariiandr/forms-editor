<template>
    <div class="my-4 p-4 flex items-center border-slate-700 rounded-xl border-2">
        <b-select
            v-model="field.input"
            :label="'Input'"
            :options="fields"
            :required="true"
        />

        <b-input
            v-model="field.label"
            :sizeClasses="'w-2/6'"
            :label="'Label'"
            :type="'text'"
            :required="true"
        />

        <b-select
            v-if="field.input === 'Input'"
            v-model="field.type"
            :label="'Type'"
            :options="inputTypes"
            :required="true"
        />

        <b-chips-input
            v-if="field.input === 'Select'"
            v-model="field.options"
            :sizeClasses="'w-3/6'"
            :label="'Options'"
            :required="true"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import Fields from '@/consts/fields';
import InputTypes from '@/consts/inputTypes';

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
        const formStore = useFormStore();

        watch(field, (value) => {
            formStore.addFormFieldTypeProperties({ fieldIdx, fieldType: value.input });
        })

        return {
            fields: Object.values(Fields),
            inputTypes: Object.values(InputTypes)
        }
    }
})
</script>