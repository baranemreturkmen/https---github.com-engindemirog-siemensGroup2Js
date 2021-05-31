export class BaseLoggerService{
    log(data){
        
    }
}

export class MonoLoggerService extends BaseLoggerService{
    log(data){
        console.log(`logged to mongo : ${data}` );
    }
}

export class PushNotificationService extends BaseLoggerService{
    log(data){
        console.log(` notified : ${data}` );
    }
}

export class EmailService extends BaseLoggerService{
    log(data){
        console.log(` mailed : ${data}` );
    }
}

export class SmsService extends BaseLoggerService{
    log(data){
        console.log(` texted : ${data}` );
    }
}

export class FirebaseServiceAdapter extends BaseLoggerService{
    log(data){
        let firebaseService = new FirebaseService();
        firebaseService.write(data);
    }
}


//Bu kod node modules içinde
export class FirebaseService{
    write(data){
        console.log(`logged to firebase : ${data}` );
    }
}

