import { CAClassAbstract } from "@criollapp/common";
import { ICACssFramework } from "../interfaces/i-ca-css-framework.interface";

export abstract class CACssFrameworkAbstract extends CAClassAbstract implements ICACssFramework
{
  public static readonly FRAMEWORK_GENERIC:string = 'generic';
  public static readonly FRAMEWORK_BOOTSTRAP:string = 'bootstrap';
  public static readonly FRAMEWORK_MATERIAL:string = 'material';

  public name:string;
  public version:number;

  constructor( name:string = '', version:number = 0 )
  {
    super();

    this.name = name;
    this.version = version;
  }
}
