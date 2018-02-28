import { CACssFrameworkAbstract } from "../abstracts/ca-css-framework.abstract";

export class CACssFrameworkGeneric extends CACssFrameworkAbstract
{
  constructor( version:number = 1 )
  {
    super(CACssFrameworkAbstract.FRAMEWORK_GENERIC, version );
  }
}
