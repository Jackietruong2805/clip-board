<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<template>
    <v-text-field class="h-[50px]" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        bg-color="transparent" flat variant="solo" placeholder="Nhập text ở đây..."></v-text-field>
</template>