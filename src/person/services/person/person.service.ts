import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { Observable, catchError, firstValueFrom } from 'rxjs';
import { Book } from 'src/entity/book';
import { Person } from 'src/entity/person';

@Injectable()
export class PersonService {


    constructor(private readonly httpService: HttpService ) { }

    private fakePersons: Person[] = [

        {
            id: 1,
            name: 'Daniel',
            lastName: 'Kaghofer'
        },
        {
            id: 2,
            name: "Sofia",
            lastName: "Fernandez"
        }, {
            id: 3,
            name: "Aisha",
            lastName: "Khan"
        }, {
            id: 4,
            name: "Elijah",
            lastName: "Walker"
        }, {
            id: 5,
            name: "Maya",
            lastName: "Suzuki"
        }, {
            id: 6, "name": "Gabriel",
            lastName: "Garcia"
        }, {
            id: 7,
            name: "Isabelle",
            lastName: "Dupont"
        }, {
            id: 8,
            name: "Omar",
            lastName: "Youssef"
        }, {
            id: 9,
            name: "Evelyn",
            lastName: "Lee"
        }, {
            id: 10,
            name: "Liam",
            lastName: "O'Brien"
        }]

    fetchPersons() {
        return this.fakePersons
    }

    createPerson(person: Person) {
        this.fakePersons.push(person)
        return
    }

    public async findAll() {
        console.log('aqui')
        try{
            const response = await firstValueFrom(this.httpService.get('https://jsonplaceholder.typicode.com/users'))
            console.log(response.data)
            return response.data
        }catch(error){
            throw new HttpException('Erro ', HttpStatus.BAD_REQUEST)
        }
        
    }
}
