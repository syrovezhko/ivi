# Тестовое задание
## [HTML верстальщик](https://hh.ru/vacancy/87369473)

<details>
<summary style="font-size: 25px">Текст задания (клик)</summary>
<br>
Задание без скетчей и макетов - это не проверка умения пользоваться пипеткой и линейкой. Цвета, размеры, соотношения сторон и отступы на усмотрение. Это проверка подхода к работе, к оформлению проекта.
<br>
<br>

>Результат в виде двух ссылок:
> 1. На репозиторий проекта
> 2. На рабочее демо

---
P.S.: Можно SASS, LESS, Stylus, можно Grunt, Gulp, Webpack, можно React и JQuery, можно TypeScript, CoffeeScript, можно хоть RoR или JavaScript, но в README.MD нужно будет тогда обосновать выбор чем-либо, кроме личных предпочтений, учитывая, что проект готовится с перспективой масштабирования, работы над ним большой команды с разными уровнями подготовки.

![image](/1.gif)
</details>

### Перед стартом

Установите зависимости и запустите проект

```js
npm i       // для установки зависимостей
            // дождитесь окончания процесса
npm run dev // для запуска проекта
```

### <a href="https://syrovezhko.github.io/ivi/" target="_blank">Ссылка на deploy</a>
<details>
<summary style="font-size: 25px">Обоснование выбора стека (клик)</summary>
<br>

> В проекте использовались: Next, React, TypeScript, SASS (в синтаксисе SCSS), ESLint.

Так как при постановке задачи был сделан акцент на масштабируемость и возможность усложнения системы, а так же комфорт работы большой команды, я принял решение использовать Next app. Компания `IVI` предоставляет стрименговые услуги с поддержкой широкой линейки клиентских устройств. Зачастую, клиенты потребляют контент через SmartTV или ТВ-приставки. Последние, как правило, достаточно мощные и не нагружены большим количеством дополнительных приложений (что не скажешь о смартфонах). Первые же, однако, чаще обладают устаревшей аппартантой частью и слабо поддерживаемой оболочкой.

Как пользователь, будучи в гостях у родителей, я сталкивался с медленной работой приложений на относительно новом (если рассуждать о сроках службы телевизоров) устройтве. При работе онлайн кинотеатров приходилось ощутимо долго ждать переключения пунктов меню и загрузки контента, чего не скажешь о менее "умном" собрате, но с AndroidTV-box. Зачастую, производители SmartTV не спешат повышать производительность своих устройств, из-за чего страдает опыт использования сторонних сервисов. По этому, из-за возможности внедрения SSR, призванного разгрузить клиентские устройства, я выбрал Next.

На React выбор пал из-за его открытости и широких возможностей по использованию сторонних библиотек и дополнений на любой вкус. Можно было бы выбрать Vue, но в нем слишком много "магии", не каждой команде это придется по вкусу. А Angular же слишком громоздкий для подобного решения. 

TypeScript закрывает недочеты JavaScript, систематизирует работу с типами данных и де-факто стал стандартом в мире разработки визуальных интерфейсов. Так решило сообщество, это решение поддержал крупный и средний бизнес, а я пока не настолько опытный, что бы бросать вызов всему миру.

ESLint с конфигом Airbnb использовал что бы показать, что я умею с ним работать, ну и по прямому назначению.

Использование SASS в контексте развития CSS может показаться спорным. Однако, долгие годы Frontend писали на препроцессорах и люди к ним привыкли. Его компилляция происходит налету, незаметно. А замедление процесса сборки на пару процентов - небольшая цена, в сравнении с тратой времени разработчиков на чтение документации по стилям, без догоняющих нововведений которых и так нормально жили. Это весомо для большой командной разработки. Но, если что, синтаксис SCSS обратно совместим с CSS.

Я использовал модульные стили, так как это больше соответствует принципам SOLID, а также этот подход является предпочтительным в сообществе разработчиков Next. Кроме того, изолирование стилей упрощает использование концепции модульности и исключает случайные наложения стилей других компонентов. Для именования стилей использовал БЭМ, благодаря более наглядному обозначению взаимосвязей родитель-потомк, а так же распространенности в сообществе, что ускоряет командную разработку.

Работая со списками, я перенес задачу вычисления нумерации элементов в CSS, так как это быстрее чем в JS. Для создания маркеров я использовал `span`, хотя можно было бы все сделать на псевдоэлементах, так как это улучшает читабельность кода и поддерживает принципы KISS.

Для создания фигуры со скошенным углом я также использовал псевдоэлементы, так как, но мой взгляд, это упрощает чтения кода, в сравнении с `clip path`, и ускоряет работу браузера, в сравнении с `svg`.

Я сознательно не пользовался cтейт менджарами, так как считаю эту тему достаточно интимной и требующей обсуждения с командой. Я могу работать как с Redux, так и с MobX, но, во избежание холиваров, не стал делать выбор. Можно было бы использовать контекст, как альтернативу, но с таким уровнем вложенности, я посчитал это избыточнм. Для меня важнее влиться в команду, а не поднимать острые вопросы (оставим их на BeerJS).

Для CI/CD использовал GitHub Actions, так как на этой платформе опубликован весь код. Я сознательно не создавал структуру веток по GitFlow, так как являюсь единственным разработчиком. Немного противоречит принципам задела на работу в большой команде, но я же должен показать, что понимаю природу принципов. Как только в команде появляется еще один челове, вся разработка переходит в именные ветки, изменения из которых мержится в основную после обсуждения с командой или по решению главного разработчика.
</details>