import { TestCACssFramework } from "./utils/test-ca-css-framework-abstract.util";

describe('CACssFrameworkAbstract',()=>{
  let object:TestCACssFramework = new TestCACssFramework();

  it('name is empty by default',()=>{
    expect( object.name == '' ).toBeTruthy();
  });

  it('version is 0 by default',()=>{
    expect( object.version == 0 ).toBeTruthy();
  });

});
