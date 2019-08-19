import { Question } from '../shared/question.model';

export const questions: readonly Question[] = [
  {
    text: 'Начнем с простого. Яхта парус, ...',
    answers: [
      {text: 'Холодный кубик льда', extraText: 'Хороший. В сантиметре от правильного ответа', correct: false},
      {text: 'Я всегда один', extraText: 'Увы. Это другая песня', correct: false},
      {text: 'Ялта август', extraText: 'Тот период был прекрасен исключительно благодаря тебе', correct: true},
    ]
  },
  {
    text: 'Посложнее. Чижик-пыжик это?',
    answers: [
      {text: 'Человек алкоголик с Фонтанки', extraText: 'Конечно. Как можно было думать иначе???', correct: true},
      {text: 'Птица', extraText: 'Да ну. Бред какой-то', correct: false},
      {text: 'Статуя в Питере, где много мелочи', extraText: 'Мимо :(', correct: false},
    ]
  },
  {
    text: 'Какого числа случился банан?',
    answers: [
      {text: '20.09.2018', extraText: 'Все верно, моя хорошая. Я в тебе ни разу не сомневался', correct: true},
      {text: '11.09.2016', extraText: 'Нееет. В этот день мы познакомились', correct: false},
      {text: '16.12.1991', extraText: 'Ошибочка. Это день независимости Казахстана', correct: false},
      {text: '08.06.1998', extraText: 'Глупышечка. Это же твой день рождения', correct: false}
    ]
  },
  {
    text: 'Самый лучший спорт?',
    answers: [
      {text: 'Волейбол', extraText: 'Шервуд расстроится, но нет. Старейшина Шервуд', correct: false},
      {text: 'Кидать косточки от фиников в мусорку', extraText: 'Без тебя этого никогда бы не было. Спасибо тебе', correct: true},
      {text: 'Шахматы', extraText: 'Ты очень красиво думаешь. Только ради этого готов играть с тобой в них вечность', correct: true},
      {text: 'Шашки', extraText: 'Может быть в другой вселенной', correct: false}
    ]
  },
  {
    text: 'Как мы хотим назвать детей?',
    answers: [
      {text: 'Софа и Родион', extraText: 'Я обожаю эти имена и тебя', correct: true},
      {text: 'Аполлон', extraText: 'Это нужно еще обдумать. Но мне нравится ход твоих мыслей', correct: false},
      {text: 'Костя и Святослав', extraText: 'Чеее?', correct: false},
      {text: 'Джек и Воробей', extraText: 'Хороший вариант. Но нет', correct: false}
    ]
  },
  {
    text: 'Парнас это?',
    answers: [
      {
        text: 'Категория А, категория Б',
        extraText: 'Твой смех над подобной мелочью каждрый раз поднимает мне настроение до небес',
        correct: true
      },
      {text: 'Гора в Греции', extraText: 'Может быть. Пойду схожу за учебником по географии', correct: false},
      {text: 'Станция метро в Питере', extraText: 'Вполне вероятно', correct: false},
    ]
  },
  {
    text: 'Самый страшный страх Димы?',
    answers: [
      {text: 'Высота', extraText: 'Неа. Ошибулик', correct: false},
      {text: 'Розовые пончики', extraText: 'Ахах, неплохо', correct: false},
      {text: 'Клопы', extraText: 'Очень сильно их боюсь, но есть еще страшнее', correct: false},
      {text: 'Заправленная кроватка', extraText: 'Ты мой личный сорт шахмат', correct: true}
    ]
  },
  {
    text: 'Как называют человека, который делает массаж?',
    answers: [
      {text: 'Массажуль', extraText: 'Мне нравится придумывать новые слова с тобой', correct: true},
      {text: 'Массажист', extraText: 'Что за нелепость', correct: false},
    ]
  },
  {
    text: 'Кто самая лучшая жена во вселенной?',
    answers: [
      {text: 'Ника', extraText: 'Даааа. Ты мое очарование', correct: true},
      {text: 'Ника', extraText: 'Очень люблю слушать твой голос', correct: true},
      {text: 'Ника', extraText: 'Чика, чика, ты спелая клубника', correct: true},
      {text: 'Ника', extraText: 'Девушка из высшего общества', correct: true},
    ]
  },
  {
    text: 'Кто сильнее любит?',
    answers: [
      {text: 'Дима', extraText: 'Очень может быть', correct: false},
      {text: 'Ника', extraText: 'Размечталась', correct: false},
      {text: 'Оба', extraText: 'Я так тебя люблю', correct: true},
    ]
  }
];


