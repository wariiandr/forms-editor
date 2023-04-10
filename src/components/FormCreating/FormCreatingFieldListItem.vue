<template>
    <div class="my-4 p-4 flex items-center border-slate-700 rounded-xl border-2">
        <b-select
            v-model="field.input"
            :label="'Input'"
            :options="options"
        />

        <b-input
            v-model="field.label"
            :sizeClasses="'w-2/6'"
            :label="'Label'"
            :type="'text'"
        />

        <b-select
            v-if="field.input === 'Input'"
            v-model="field.type"
            :label="'Type'"
            :options="inputTypes"
        />

        <b-chips-input
            v-if="field.input === 'Select'"
            v-model="test"
            :sizeClasses="'w-3/6'"
            :label="'Options'"
        />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        field: {
            type: Object,
            required: true
        }
    },
    setup({ field }) {
        const options = [ 'Input', 'Select', 'Checkbox' ];
        const inputTypes = [ 'text', 'number' ];
        const test = ref(['test', 'asd', 'sdaadsdd']);

        return {
            options,
            inputTypes,
            test
        }
    }
}
</script>