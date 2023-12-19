import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Person } from 'src/entity/person';
import { PersonService } from './services/person/person.service';

@Controller('person')
export class PersonController {

    constructor(private personService: PersonService) { }

    @Post()
    createPerson(@Body() person: Person) {
        this.personService.createPerson(person)
        return person
    }

    @Get(':id')
    getPersonById(@Param('id', ParseIntPipe) id: number) {
        const user = this.personService.fetchPersons().find(f => f.id == id)
        if (!user) throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
        return user
    }

    @Get()
    getAll() {
        return this.personService.fetchPersons()
    }


    @Get('book/:isbn')
    async findBookByIsbn(@Param('isbn') isbn: string) {
        return this.personService.findAll()
    }

}
