import { ISettings } from "./settings.interface";

export class IUser {
    // lastSignInLocation?: google.maps.LatLng;
    uid: string = "";
    bookmarks?: Array<string> = [];
    createdAt?: string;
    displayName?: string = "";
    email: string = "";
    employeeId?: string = "";
    lastLoginAt?: string;
    lastLoginAtLocation?: any;
    photoURL?: string = "";
    providerId?: string = "";
    ps?: string = "";
    workPlace?: string = "";
    settings?: ISettings

}
