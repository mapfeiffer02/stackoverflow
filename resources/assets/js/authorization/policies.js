export default {
    modify (user, model){
        return user.id === model.user.id
    },

    accept(user, answer) {
        return user.id === answer.question.user_id
    }
}