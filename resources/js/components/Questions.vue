<template>
  <div class="card-body">
    <div v-if="questions.length">
        <question-excerpt v-for="question in questions" :question="question" :key="question.id"></question-excerpt>
    </div>
        <div v-else class="alert alert-warning">
            <strong>Sorry</strong> There are no questions available.
        </div>
        <div class="card-footer">
            <pagination :meta="meta" :links="links"></pagination>
        </div>
    </div>
</template>

<script>
import Question from './Question.vue'
import QuestionExcerpt from './QuestionExcerpt.vue'
import Pagination from './Pagination.vue'

export default {
  components:{
      QuestionExcerpt,
      Question,
      Pagination
    },

  data () {
    return {
        questions: [],
        meta: {},
        links: {}
    }
  },
  methods:{
    fetchQuestions(){
      axios.get('/api/questions', { params: this.$route.query })
      .then(({data}) => {
        this.questions = data.data;
        this.meta = data.meta;
        this.links = data.links;
      })
    }
  },
  watch: {
        "$route": 'fetchQuestions'
    },
  mounted(){
    this.fetchQuestions();
  }
}
</script>

<style>

</style>
