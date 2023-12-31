// export interface Employment {
//     title: string;
//     key_skill: string;
// }

// export interface Coordinates {
//     lat: number;
//     lng: number;
// }

// export interface Address {
//     city: string;
//     street_name: string;
//     street_address: string;
//     zip_code: string;
//     state: string;
//     country: string;
//     coordinates: Coordinates;
// }
// export interface CreditCard {
//     cc_number: string;
// }
// export interface Subscription {
//     plan: string;
//     status: string;
//     payment_method: string;
//     term: string;
// }
// export interface People {
//     id: number;
//     uid: string;
//     password: string;
//     first_name: string;
//     last_name: string;
//     username: string;
//     email: string;
//     avatar: string;
//     gender: string;
//     phone_number: string;
//     social_insurance_number: string;
//     date_of_birth: string;
//     employment: Employment;
//     address: Address;
//     credit_card: CreditCard;
//     subscription: Subscription;
//   }

export interface User {
    city: string;
    country: string;
    date_of_birth: string;
    email: string;
    first_name: string;
    gender: string;
    id: number;
    job: string;
    last_name: string;
    latitude: number;
    longitude: number;
    phone: string;
    profile_picture: string;
    state: string;
    street: string;
    zipcode: number;
}

export interface Peoples {
    limit: number,
    message: string,
    offset: number,
    success: boolean,
    total_users: number,
    users: User[]
}