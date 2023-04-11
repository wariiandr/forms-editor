<template>
    <div class="my-4 p-4 flex items-center border-slate-700 rounded-xl border-2">
        <b-select
            v-model="field.input"
            :label="'Input'"
            :options="options"
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

<script>
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

        return {
            options,
            inputTypes
        }
    }
}
</script>