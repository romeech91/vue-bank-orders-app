<template>
  <app-page back  title="Помощь"></app-page>
  <question-item
    v-for="q in questions"
    :key="q.title"
    :question="q"
  >

  </question-item>
</template>

<script>
import AppPage from "@/components/ui/AppPage";
import QuestionItem from "@/components/question/QuestionItem";

export default  {
  setup() {
    const questions = [
      {title: 'Что есть в данной системе?', text: 'Всё для того, чтобы смотреть какие завяки оставили'},
      {title: 'Как тут работает авторизация', text: 'Реализовано через Firebase'},
    ]

    return {questions}
  },
  components: {AppPage,QuestionItem}
}
</script>