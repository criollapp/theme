import { CACssFrameworkBootstrap } from "../class/ca-css-framework-bootstrap.class";
import { CACssFrameworkAbstract } from "../abstracts/ca-css-framework.abstract";

describe('CACssFrameworkBootstrap',()=>{
  let object:CACssFrameworkBootstrap = new CACssFrameworkBootstrap();

  it('name is bootstrap by default',()=>{
    expect( object.name == CACssFrameworkAbstract.FRAMEWORK_BOOTSTRAP ).toBeTruthy();
  });

});
