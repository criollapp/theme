import { CACssFrameworkMaterial } from "../class/ca-css-framework-material.class";
import { CACssFrameworkAbstract } from "../abstracts/ca-css-framework.abstract";

describe('CACssFrameworkMaterial',()=>{
  let object:CACssFrameworkMaterial = new CACssFrameworkMaterial();

  it('name is material by default',()=>{
    expect( object.name == CACssFrameworkAbstract.FRAMEWORK_MATERIAL ).toBeTruthy();
  });

});
