<template>
  <b-form-group
      label="Оценка"
      label-for="selectRating"
    >
    <b-form-select 
    @change="selectRatingChange" 
    id="selectRating" 
    v-model="selected" 
    :options="options" class="mb-3" />
  </b-form-group>
</template>

<script>
export default {
  name: 'st-select-rating',
  data () {
    return {
      selected: 5,
      options: [
        { value: 2, text: '2' },
        { value: 5, text: '4' },
        { value: 7, text: '5' },
        { value: 10, text: '6'}
      ]
    }
  },
  methods: {
    selectRatingChange(value){
      if(value){
        this.$emit('selectRatingChange', value);
      }
    }
  }
}
</script>