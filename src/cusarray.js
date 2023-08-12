import {faker} from '@faker-js/faker'
const customers=[
    {
        'logo' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle()
    },
    {
        'logo' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle()
    }, 
    {
        'logo' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle()
    }
       
]
export default customers ;