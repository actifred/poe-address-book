export class UserName {
    title: string;
    first: string;
    last: string;
}

export class UserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

export class User {
    gender: string;
    name: UserName;
    email: string;
    phone: string;
    picture: UserPicture;
}