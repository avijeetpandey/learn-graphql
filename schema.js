import {buildSchema} from 'graphql'

const schema = buildSchema(
    `
        type Course{
            id : ID 
            courseName : String
            category : String
            price : Int
            language : String
            stack : Stack
            email : String
            teachingAssits : [TeachingAssist]
        }

        type TeachingAssist{
            firstName : String
            lastName : String
            experience : Int
        }

        enum Stack{
            WEB
            MOBILE
            OTHER
        }

        type Query{
            getCourse(id : ID) : Course
        }

        input CourseInput{
            id : ID 
            courseName : String!
            category : String
            price : Int!
            language : String
            stack : Stack
            email : String
            teachingAssits : [TeachingAssistInput]!
        }

        input TeachingAssistInput{
            firstName : String
            lastName : String
            experience : Int
        }

        type Mutation{
            createCourse(input : CourseInput) : Course
        }
    `
)

export default schema