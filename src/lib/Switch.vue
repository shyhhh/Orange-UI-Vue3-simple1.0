<template>
  <button
    class="orange-switch"
    @click="toggle"
    :class="classes"
    :disabled="disabled"
  >
    <span></span>
  </button>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };

    const classes = computed(() => {
      const { value, size, disabled } = props;
      return {
        ["orange-switch-checked"]: value,
        [`orange-switch-size-${size}`]: size,
        [`orange-switch-disabled`]: disabled,
      };
    });
    return {
      toggle,
      classes,
    };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.orange-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #9f9f9f;
  border-radius: $h/2;
  position: relative;
  transition: background 250ms;

  &.orange-switch-disabled {
    background: #e8e8e8;

    > span {
      background: #ffffff;
    }
  }

  &:focus {
    outline: none;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  &.orange-switch-checked {
    background: #027be3;
  }

  &.orange-switch-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.orange-switch-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &.orange-switch-size-big {
    width: $h * 3;
  }

  &.orange-switch-size-small {
    width: $h * 1.5;
    height: $h * 0.8;

    > span {
      width: $h2 * 0.7;
      height: $h2 * 0.7;
    }

    &.orange-switch-checked > span {
      left: calc(100% - #{$h2 * 0.7} - 2px);
    }

    &:active {
      > span {
        width: $h2;
      }
    }
  }
}
</style>
