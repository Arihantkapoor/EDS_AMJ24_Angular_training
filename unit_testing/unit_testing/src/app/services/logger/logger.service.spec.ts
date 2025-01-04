import { LoggerService } from "./logger.service"

describe('Logger Service', ()=>{
    let service: LoggerService;
    beforeEach( ()=>{
        service = new LoggerService();
    })

    it('Should not have any message in the start', ()=>{
        //arrange
        // const service = new LoggerService();

        //act
        const length = service.messages.length;

        //assert

        expect(length).toBe(0);
    });


    it('Should add message when log() is called', ()=>{
        //arrange
        // const service = new LoggerService();
       
        //act
        service.log("New Message added");
        const length = service.messages.length;

        expect(length).toBe(1);
        
    })

    it('Should clear all messages when clear() is called', ()=>{
        // const service = new LoggerService();
        service.log("New message");

        service.clear();

        const length = service.messages.length;
        expect(length).toBe(0);
    })

})