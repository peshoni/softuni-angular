import { Genders_Enum, Project_Statuses_Enum, Projects_Insert_Input, Ticket_Logs_Insert_Input, Ticket_Statuses_Enum, Tickets_Insert_Input, User_Roles_Enum, Users_Insert_Input } from "../../generated/graphql";

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

    private reporters: string[] = [
        '12903f54-fb0e-48c8-b991-916796f3a125',
        'c8e63091-3e3f-4a68-b6fe-c47759bf25af',
        '22f283c4-b69e-4942-9137-84f49a2133ca',
        '929f94d0-6e13-46b2-9b84-dc859c5bde37',
        'dc0f41d6-21f7-45aa-a072-7cb4b2851204',
        'f842dd07-559e-4b02-bda5-6873778a6131',
        '79827caf-0368-4e85-aff9-9a632c0f59dc',
        '83f84fee-1cbb-4ce1-b923-dc9a3afa2aae',
        '02e58538-0067-4646-9e84-5056bd9f895b',
        '682ed634-30a8-49a8-8a0f-eb4f65eafefb',
        '8d5efe54-6398-4f61-bb89-022e154207ed',
        '79c03360-96bd-41ab-9193-23e8f2dfa852',
        '9e0fc85f-e987-4a2e-a632-78bd9ee6c49e',
        'dbebad9b-2c2e-4134-81da-4ce50af2edfc',
        'ba9a3806-f818-4d84-9bd8-cf03326f0206',
        'a51d04e4-2a4a-4254-b6c8-7be3e9616352'
    ];
    private assigneeIds: string[] = [
        '263512d9-b09c-417f-84b4-1f8fee5e8a79',
        '8bbd3e16-f942-4f37-9b30-d8c1de743f7a',
        '3a243608-b873-4137-9a60-a4db1f96d856',
        '5dea3a57-9450-4234-be85-4868668a3e0f',
        '25ba5912-2e5f-458b-86fe-470b4b0b2935',
        '834b7370-5b3d-4db3-9032-c91a7f23d22f',
        '489aff38-9913-4034-b5c5-b8405a75b249',
        '4776a491-04e9-4b16-b4c1-f48cde7c93d9',
        '25e48a23-ac50-4549-9f81-16f2ebc885af',
        '1d52e2fb-e153-4faa-a230-7efe407d11b2',
        'aa22ac40-5ffc-4ea9-994d-13425a669ba3',
        'a439d603-7b38-41f6-9ccd-096559659df0',
        '84164708-6cae-49ca-8a3b-045042b01abf',
        'a43ae8b5-fc54-4e4d-b175-022084486bf9'
    ];


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
            role,

        };
        return input;
    }

    generateProject(size: number): Projects_Insert_Input[] {
        const projects: Projects_Insert_Input[] = [];
        for (let index = 0; index < size; index++) {
            const randomReporterId = this.reporters[this.getRandomInteger(0, this.reporters.length - 1)];
            const randomString: string = randomReporterId.split('/')[0];

            const projectInput: Projects_Insert_Input = {
                status: Project_Statuses_Enum.Open,
                label: 'Project ' + randomString,
                description: 'Description of project created by : ' + randomReporterId,
                owner_id: randomReporterId,
                tickets: {
                    data: [...this.getRandomTicketsArray(randomReporterId)

                    ]
                }
            };
            projects.push(projectInput);
        }

        return projects;
    }
    getRandomTicketsArray(ownerId: string): Tickets_Insert_Input[] {
        const size: number = this.getRandomInteger(1, 6);
        const tickets: Tickets_Insert_Input[] = [];
        for (let index = 0; index < size; index++) {
            const ticketInsertInput: Tickets_Insert_Input = {
                reporter_id: ownerId,
                status: Ticket_Statuses_Enum.New,
                description: 'Ticket description...',
                assignee_id: this.tryToGetAssignee(index),


            };

            if (ticketInsertInput.assignee_id) {
                ticketInsertInput.ticket_logs = { data: this.createLogsForTicket(ownerId, ticketInsertInput.assignee_id) };

                // ticket_logs: {data: this.createLogsForTicket(ownerId)}
            }

            tickets.push(ticketInsertInput);
        }
        return tickets;
    }
    createLogsForTicket(ownerId: string, assignee_id: any): Ticket_Logs_Insert_Input[] {
        const logs: Ticket_Logs_Insert_Input[] = [];
        const randomReporterComment = this.getRandomInteger(0,1);
        if( randomReporterComment){ 
            logs.push( {
                user_id: ownerId,
                description: 'Additional notes from reporter...'
            });
        }else{
            console.log('WITHOUT LOG...')
        }

        const randomLogsSize = this.getRandomInteger(1,6);
        for (let index = 0; index <= randomLogsSize; index++) {
            const log2: Ticket_Logs_Insert_Input = {
                user_id: assignee_id,
                description: `Job description ${index+1} ....`
            };
            logs.push(log2) 
        }  
        return logs;
    }

    tryToGetAssignee(index: number): any {
        if (index < 4) { // set for first 3 tickets
            const randomAssigneeIndex = this.getRandomInteger(0, this.assigneeIds.length - 1);
            return this.assigneeIds[randomAssigneeIndex];
        } else {
            return null;
        }
    }


    private generateEmail(username: string): string {
        return `${username}@tickets.com`;
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