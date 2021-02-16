<template>
  <div class="column box m-1">
    <p class="heading">
      <slot name="title"></slot>
    </p>
    <div class="columns is-mobile">
      <div class="column">
        <p class="title is-5 has-text-danger">
          <slot name="thisSeason"></slot>
        </p>
      </div>
      <div class="column">
        <p class="title is-5 has-text-info">
          <slot name="lastSeason"></slot>
        </p>
      </div>
    </div>
    <p class="heading">
      <slot name="subTitle"></slot>
    </p>
  </div>
</template>