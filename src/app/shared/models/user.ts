export interface User {
    token(arg0: string, token: any);
    name: String,
    email: String,
    password: String,
    phone: Number,
    dateOfBirth: Date,
    address: Array<any>,
    cart: Array<any>,
    history: Array<any>,
    cards: Array<any>,
    orders: Array<any>,
    profileImg: String
}