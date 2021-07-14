import QuestionsPage from '../pages/QuestionsPage.vue'
import PostsPage from '../pages/MyPostsPage.vue'
import QuestionPage from '../pages/QuestionPage.vue'
import CreateQuestionPage from '../pages/CreateQuestionPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
    {
        path: '/',
        component: QuestionsPage,
        name: 'home'
    },
    {
        path: '/home',
        component: QuestionsPage,
        name: 'home'
    },
    {
        path: '/questions/create',
        component: CreateQuestionPage,
        name: 'questions.create'
    },
    {
        path: '/questions',
        component: QuestionsPage,
        name: 'questions'
    },
    {
        path: '/questions/:slug',
        component: QuestionPage,
        name: 'questions.show'
    },
    {
        path: '/my-posts',
        component: PostsPage,
        name: 'my-posts',
        meta: { 
            requiresAuth: true
        }
    },
    {
        path: '*',
        component: NotFoundPage,
    }
]

export default routes;
