const { ref } = Vue;
const count = ref(0);

const app = Vue.createApp({
    data() {
    return { count };
  },
});

app.mount("#app");