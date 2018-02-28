import { ICACssFramework } from "../interfaces/i-ca-css-framework.interface";
import { TestCACssFramework } from "./utils/test-ca-css-framework-abstract.util";

describe('ICACssFramework',()=>{
  let implementation:ICACssFramework = new TestCACssFramework();

  it('has name attr',()=>{
    expect( implementation.name == '' ).toBeTruthy();
  });

  it('has version attr',()=>{
    expect( implementation.version == 0 ).toBeTruthy();
  });
});
