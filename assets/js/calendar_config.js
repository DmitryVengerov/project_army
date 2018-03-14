$(document).ready(function() {
        var view = $('#calendar').fullCalendar('getView');

        $('#calendar').fullCalendar({


            header: {
                left: '',
                center: '',
                right: 'mounth,prev,next title'
            },
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'οюнь', 'οюль', 'Авг.', 'Сент.', 'Окт.', 'Ноя.', 'Дек.'],
            dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            buttonText: {

                today: "Сегодня",
                month: "Месяц",
                week: "Неделя",
                day: "День"
            },
            defaultDate: '2018-03-12',
            navLinks: true, // can click day/week names to navigate views
            eventLimit: true,
            weekNumbersWithinDays: true,
            weekNumberCalculation: 'ISO',
            fixedWeekCount: false,
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [{
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-01'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-02'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-01'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-11'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-11'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-11'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-01'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-01'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-01'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-01'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-01'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-07',
                    end: '2018-03-07'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-07',
                    end: '2018-03-07'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-07',
                    end: '2018-03-07'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-07',
                    end: '2018-03-07'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-07',
                    end: '2018-03-07'
                },
                {
                    title: 'Проект Армия / СТУПЕНЬ ',
                    start: '2018-03-07',
                    end: '2018-03-07'
                }

            ]
        });

    });