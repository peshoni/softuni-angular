import { Genders_Enum, Project_Statuses_Enum, Projects_Insert_Input, Ticket_Statuses_Enum, User_Roles_Enum, Users_Insert_Input } from "../../generated/graphql";

export class DataGenerator {


    private readonly femaleNames: string[] = [
        'Pavlina',
        'Kalina',
        'Milena',
        'Kristina',
        'Miroslava',
    ];
    private readonly femaleNamesLength = this.femaleNames.length;
    private readonly maleNames: string[] = ['Ivan', 'Dragomir', 'Teodor', 'Krum', 'Borislav'];
    private readonly maleNamesLength = this.maleNames.length;

    private readonly surnamesAndFamily: string[] = [
        'Ivanov',
        'Petrov',
        'Stefanov',
        'Dragomirov',
        'Pavlov',
        'Georgiev',
        'Varadinov',
        'Vladimirov',
    ];
    private readonly surnamesAndFamilyLength = this.surnamesAndFamily.length;

    generateUser(index: number): Users_Insert_Input {
        const isMale = index % 2 === 0;
        const name = this.generateFirstName(isMale);
        const username = name.toLowerCase() + index;
        const role = this.getRandomInteger(0, 1) === 0 ? User_Roles_Enum.Reporter : User_Roles_Enum.Assignee;

        const input: Users_Insert_Input = {
            age: this.getRandomInteger(20, 60),
            name,
            surname: this.generateSurnameOrFamily(isMale),
            family: this.generateSurnameOrFamily(isMale),
            gender: isMale ? Genders_Enum.Male : Genders_Enum.Female,
            username,
            password: username,
            email: this.generateEmail(username),
            role ,

        }
        return input
    }

    generateProject(ownerId: string): Projects_Insert_Input {


        const projectInput: Projects_Insert_Input = {
            status: Project_Statuses_Enum.Open,
            label: 'label',
            description: '',
            owner_id: ownerId,
            tickets: {
                data: [
                    { 
                        reporter_id: ownerId ,
                        status:Ticket_Statuses_Enum.New,
                        description:''

                    }
                ]
            }
        }


        return projectInput;
    }

    private generateEmail(username: string): string {
        return `${username}@tickets.com`
    }

    private generateFirstName(isMale: boolean): string {
        const index = this.getRandomInteger(
            0,
            isMale ? this.maleNamesLength - 1 : this.femaleNamesLength - 1
        );
        return isMale ? this.maleNames[index] : this.femaleNames[index];
    }
    private generateSurnameOrFamily(isMale: boolean) {
        const index = this.getRandomInteger(0, this.surnamesAndFamilyLength - 1);
        return this.surnamesAndFamily[index] + (isMale ? '' : 'а');
    }



    // Returns an integer random number between min (included) and max (included)
    getRandomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    pad(num: number, length: number): string {
        return (1e15 + num + '').slice(-length);
    }
}