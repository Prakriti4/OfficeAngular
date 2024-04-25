import { IPropertyBase } from "../model/ipropertybase";

export interface IProperty extends IPropertyBase{ 
    Id:number;
    SellRent:number;
    Name:string;
    PType:string;
    Price: number;
    Image?:string;
}