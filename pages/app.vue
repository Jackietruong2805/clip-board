<script setup>
import { ref, watch } from 'vue';
import { Clipboard } from '@capacitor/clipboard';
definePageMeta({
  alias: ['/'],
})
const searchText = ref('');
const copyText = ref('');

const writeToClipboard = async (newValue) => {
  await Clipboard.write({
    string: newValue
  });
  copyText.value = newValue;
};

const handleCloseTab = () => {
  copyText.value = ''
};

watch(copyText, async (newText) => {
  if (newText) {
    setTimeout(() => {
      copyText.value = ''
    }, 2000)
  }
});

</script>
<template>
  <ion-page>
    <ion-content>
      <div class="md:w-[600px] sm:w-[450px] w-[350px] mx-auto mt-10">
        <div class="md:p-3 p-4 md:max-w-[500px] sm:max-w-[420px] max-w-[320px] mx-auto h-[500px] bg-gray-200 rounded-md">
          <div class="max-w-[400px] h-full mx-auto relative">
            <h1 class="md:text-xl text-lg font-bold mt-5">Welcome to CopyMe</h1>
            <div class="flex items-center bg-white mt-4">
              <Input :modelValue="searchText" @update:modelValue="newValue => searchText = newValue" />
              <button @click="() => writeToClipboard(searchText)" data-cy="copy"
                class="md:py-2 md:px-3 md:text-base text-sm py-1 px-2 text-white font-semibold h-[50px] cursor-pointer"
                :class="searchText ? 'bg-blue-500' : 'bg-blue-300'" :disabled="!searchText">Copy</button>
            </div>
            <div v-if="copyText" class="absolute flex bottom-10 md:w-[400px] sm:w-[380px] w-[290px]">
              <div class="flex-1 w-full bg-white text-black p-3">Copied</div>
              <div class="bg-black text-white px-[22px] p-3 cursor-pointer font-semibold" @click="handleCloseTab">Ok</div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


