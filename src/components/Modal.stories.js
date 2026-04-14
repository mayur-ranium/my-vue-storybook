import Modal from "./Modal.vue";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text" },
    onConfirm: { action: "confirmed" },
    "onUpdate:modelValue": { action: "cancelled" },
  },
};

const Template = (args) => ({
  components: { Modal },
  setup() {
    return { args };
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClose(value) {
      this.isOpen = value;
      if (args["onUpdate:modelValue"]) args["onUpdate:modelValue"](value);
    },
  },
  template: `
    <div>
      <button @click="isOpen = true">Open Modal</button>

      <Modal
        v-bind="args"
        :modelValue="isOpen"
        @update:modelValue="handleClose"
        @confirm="args.onConfirm"
      >
        <p>This is modal content</p>
      </Modal>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Sample Modal",
};