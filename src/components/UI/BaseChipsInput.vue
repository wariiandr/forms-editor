<template>
    <label class="block mr-2" :class="sizeClasses">
        <span class="block text-sm font-medium text-slate-800"> {{ label }} </span>

        <div class="mt-1 px-3 py-2 flex flex-wrap gap-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm">
            <div class="py-1 px-2 bg-slate-200 rounded-xl inline"
                v-for="(chip, idx) in chips"
                :key="idx">
                {{ chip }}
            </div>

            <input
                class="inline-block focus:outline-none"
                @keyup.enter="addNewChip"/>
        </div>

    </label>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'b-chips-input',
    props: {
        modelValue: {
            required: true
        },
        label: {
            type: String,
            required: true
        },
        sizeClasses: {
            type: String,
            required: false
        }
    },
    emits: ['update:modelValue'],
    setup({ modelValue }, { emit }) {
        const chips = ref([ ...modelValue ]);

        function addNewChip(e) {
            chips.value.push(e.target.value);

            emit('update:modelValue', [ ...chips.value ]);

            e.target.value = '';
        }

        return {
            addNewChip,
            chips,
        }
    }
}
</script>