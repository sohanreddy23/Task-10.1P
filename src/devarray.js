import {faker} from '@faker-js/faker'
const devlopers=[
    {
        'image' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle()
    },
    {
        'image' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle()
    }, 
    {
        'image' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle()
    }
       
]
export default devlopers ;