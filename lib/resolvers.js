'use strict'

const courses = [
    {
        _id: 'anyid',
        title: 'Mi titulo',
        teacher: 'Mi profesor',
        description: 'Breve descripcion',
        topic: 'Programacion'
    },
    {
        _id: 'anyid',
        title: 'Mi titulo 2',
        teacher: 'Mi profesor',
        description: 'Breve descripcion',
        topic: 'Programacion'
    },
    {
        _id: 'anyid',
        title: 'Mi titulo 3',
        teacher: 'Mi profesor',
        description: 'Breve descripcion',
        topic: 'Programacion'
    }
]

module.exports = {
    getCourses: () => {
        return courses
    }
}