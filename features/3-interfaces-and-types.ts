

interface Configuration {
    domain: string;
    port: number;
    httpsEnabled: boolean;
    googleMapsKey?: string;
}

const conf: Configuration = {
    domain: 'localhost',
    port: 3000,
    httpsEnabled: false
    // продемонстрировать автодополнение
}



type Config = {
    domain: string;
    port: number;
    httpsEnabled: boolean;
    googleMapsKey?: string;
}

const confi: Config = {
    domain: 'localhost',
    port: 3000,
    httpsEnabled: false,
    googleMapsKey: 'fHFwer8wfL'
}


// рассказать о различиях type and interface

interface UserConfiguration {
    emailNotificationsEnabled: boolean;
    smsNotificationsEnabled: boolean;
}
interface FullConfiguration extends Configuration, UserConfiguration {}
// const fullConfiguration: FullConfiguration = {

// }

type UserConfig = {
    emailNotificationsEnabled: boolean;
    smsNotificationsEnabled: boolean;
}
type FullConfig = Config & UserConfig;
// const fullConfig: FullConfig = {

// }