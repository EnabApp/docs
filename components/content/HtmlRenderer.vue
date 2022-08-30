<script lang="ts">
import { compile } from "vue";

export default defineComponent({
  props: {
    htmlText: {
      type: String,
      require: true,
      default: "",
    },
  },
  render() {
    return h(compile(this.htmlText));
  },
});
</script>