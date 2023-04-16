<template>
    <div class="flex justify-between">
        <div class="w-6/12">
            <div class="w-full flex justify-between">
                <h2 class="mb-4 text-4xl font-semibold text-slate-900"> {{ route.params.id !== 'new' ? form.title : 'Add fields to the form' }} </h2>

                <b-button 
                    :text="'SAVE FORM'"
                    :disabled="isFormLastFieldInvalid"
                    @click="saveForm()"
                />
            </div>

            <editor-field-list />
        </div>

        <div class="w-6/12 ml-8">
            <h2 class="mb-4 text-4xl font-semibold text-slate-900"> Result </h2>

            <editor-result />
        </div>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';

import EditorFieldList from '@/components/Editor/EditorFieldList.vue';
import EditorResult from '@/components/Editor/EditorResult.vue';

import { useFormStore } from '@/store/form.js';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

export default {
    components: { EditorFieldList, EditorResult },
    setup() {
        const formStore = useFormStore();

        const { form, isFormLastFieldInvalid } = storeToRefs(formStore);

        function saveForm() {
            // запрос на сохранение
        }

        const route = useRoute();

        onMounted(() => {
            if (route.params.id !== 'new') {
                // фетч формы с бека, но пока тестовые данные
                formStore.setForm({ title: 'New form for TCMC students', fields: [], creationDate: '09.04.2023' });
            }
        })

        return {
            form,
            saveForm,
            isFormLastFieldInvalid,
            route
        }
    }
}
</script>