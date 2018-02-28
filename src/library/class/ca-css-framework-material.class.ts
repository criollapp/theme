import { CACssFrameworkAbstract } from "../abstracts/ca-css-framework.abstract";

export class CACssFrameworkMaterial extends CACssFrameworkAbstract
{
  constructor( version:number = 1 )
  {
    super(CACssFrameworkAbstract.FRAMEWORK_MATERIAL, version );
  }
}
