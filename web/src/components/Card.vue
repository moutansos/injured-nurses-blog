<template>
    <div class="card content-box">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.card {
  margin-bottom: var(--space);
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>