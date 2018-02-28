import { CACssFrameworkGeneric } from "../class/ca-css-framework-generic.class";
import { CACssFrameworkAbstract } from "../abstracts/ca-css-framework.abstract";

describe('CACssFrameworkGeneric',()=>{
  let object:CACssFrameworkGeneric = new CACssFrameworkGeneric();

  it('name is generic by default',()=>{
    expect( object.name == CACssFrameworkAbstract.FRAMEWORK_GENERIC ).toBeTruthy();
  });

});
