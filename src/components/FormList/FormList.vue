<template>
    <div class="mt-8 flex content-between flex-wrap gap-16">
        <form-list-item
            v-for="(form, idx) in forms"
            :key="idx"

            :form="form"
        />
    </div>
</template>

<script>
import { ref } from 'vue';

import FormListItem from './FormListItem.vue';

export default {
    components: { FormListItem },
    setup() {
        const forms = ref([
            { id: 1, title: 'New form for TCMC students', creationDate: '09.04.2023' },
            { id: 2, title: 'Form for residents of St. Petersburg', creationDate: '09.04.2023' },
            { id: 3, title: 'Form for residents of St. Petersburg', creationDate: '09.04.2023' },
            { id: 4, title: 'Form for residents of St. Petersburg', creationDate: '09.04.2023' },
            { id: 5, title: 'Form for residents of St. Petersburg', creationDate: '09.04.2023' },
        ])

        return {
            forms,
        }
    }
}
</script>