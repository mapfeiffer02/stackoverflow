<template>
  <form @submit.prevent="handleSubmit">
      <div class="form-group">
            <label for="question-title">Question Title</label>
            <input type="text" name="title" v-model="title" class="form-control" :class="errorClass('title')">
                <div class="invalid-feedback" v-if="errors['title'][0]">
                    <strong>{{ errors['title'][0] }}</strong>
                </div>
        </div>
        <div class="form-group">
            <label for="question-body">Explain you question</label>
            <m-editor :body="body" name="question-body">
                <textarea name="body" id="question-body" rows="10" class="form-control" :class="errorClass('body')" v-model="body"></textarea>
                    <div class="invalid-feedback" v-if="errors['body'][0]">
                        <strong>{{ errors['body'][0] }}</strong>
                    </div>
            </m-editor>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-outline-primary btn-lg">{{ buttonText }}</button>
        </div>
  </form>
</template>

<script>
import EventBus from '../event-bus'
import MEditor from './MEditor.vue'

export default {
    data(){
        return {
            title:"",
            body:"",
            errors:{
                title:"",
                body:""
            }
        }
    },
    components: {
        MEditor
    },
    methods:{
        handleSubmit(){
            this.$emit('submitted', {
                title: this.title,
                body: this.body
            })
        },
        errorClass(column){
            return [
                this.errors[column] && this.errors[column][0] ? 'is-invalid' : ''
            ]
        },
    },
    computed:{
        buttonText () {
            return 'Ask Question'
        }
    },
    updated () {
        EventBus.$on('error', (errors) => {this.errors = errors})
    }
}
</script>

<style>

</style>