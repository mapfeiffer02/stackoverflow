<template>
    <div>
        <div class="row mt-4" v-cloak v-if="count">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <h2>{{ title }}</h2>
                        </div>
                        <hr>
                        <answer @deleted="remove(index)" v-for="(answer, index) in answers" :answer="answer" :key="answer.id"></answer>
                        <div class="text-center mt-3">
                            <button v-if="nextURL" class="btn btn-outline btn-secondary" @click="fetch(nextURL)">Load more answers</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <new-answer @created="add" :question-id="question.id"></new-answer>
    </div>
    

</template>

<script>
import Answer from "./Answer.vue"
import NewAnswer from "./NewAnswer.vue"

export default {
    props:['question'],
    
    components:{ 
            Answer, 
            NewAnswer 
        },

    computed:{
        title(){
            return this.count + " " + (this.count > 1 ? 'Answers' : 'Answer');
        }
    },

    created(){
        this.fetch(`/questions/${this.questionId}/answers`)
    },

    methods:{
        add(answer){
            this.answers.push(answer),
            this.count++
        },
        fetch(endpoint){
            axios.get(endpoint)
            .then(res => {
                this.answers.push(...res.data.data);
                this.nextURL = res.data.next_page_url
            })
        },
        remove(index){
            this.answers.splice(index, 1)
            this.count--
        }
    },
    data(){
        return{
            questionId: this.question.id,
            count: this.question.answers_count,
            answers: [],
            nextURL: null
        }
    }
}
</script>
