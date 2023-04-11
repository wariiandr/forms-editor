<template>
    <div>
        <h2 class="mb-4 text-4xl font-semibold text-slate-900"> Add fields to the form </h2>

        <form-creating-field-list />
    </div>
</template>

<script>
import FormCreatingFieldList from '@/components/FormCreating/FormCreatingFieldList.vue';

export default {
    components: { FormCreatingFieldList }
}
</script>