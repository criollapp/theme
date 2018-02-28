import { CACssFrameworkAbstract } from "../abstracts/ca-css-framework.abstract";

export class CACssFrameworkBootstrap extends CACssFrameworkAbstract
{
  constructor( version:number = 1 )
  {
    super(CACssFrameworkAbstract.FRAMEWORK_BOOTSTRAP, version );
  }
}
