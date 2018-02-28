import { CACSSUtil } from "../utils/ca-css.util";

describe('XCssUtil',()=>{
    it('getAlign return correct css when align is left',()=>{
        const result:string[] = CACSSUtil.getAlign( 'left' );

        expect( result.length == 1 ).toBeTruthy();
        expect( result[0] == 'x-align-left' ).toBeTruthy();
    });

    it('getAlign return correct css when align is right',()=>{
        const result:string[] = CACSSUtil.getAlign( 'right' );

        expect( result.length == 1 ).toBeTruthy();
        expect( result[0] == 'x-align-right' ).toBeTruthy();
    });

    it('getAlign return correct css when align is center',()=>{
        const result:string[] = CACSSUtil.getAlign( 'center' );

        expect( result.length == 1 ).toBeTruthy();
        expect( result[0] == 'x-align-center' ).toBeTruthy();
    });

    it('getAlign return correct css when align is left and is bootstrap',()=>{
        const result:string[] = CACSSUtil.getAlign( 'left', 'bootstrap' );

        expect( result.length == 2 ).toBeTruthy();
        expect( result[0] == 'x-align-left' ).toBeTruthy();
        expect( result[1] == 'text-left' ).toBeTruthy();
    });

    it('getAlign return correct css when align is right and is bootstrap',()=>{
        const result:string[] = CACSSUtil.getAlign( 'right', 'bootstrap' );

        expect( result.length == 2 ).toBeTruthy();
        expect( result[0] == 'x-align-right' ).toBeTruthy();
        expect( result[1] == 'text-right' ).toBeTruthy();
    });

    it('getAlign return correct css when align is center and is bootstrap',()=>{
        const result:string[] = CACSSUtil.getAlign( 'center', 'bootstrap' );

        expect( result.length == 2 ).toBeTruthy();
        expect( result[0] == 'x-align-center' ).toBeTruthy();
        expect( result[1] == 'text-center' ).toBeTruthy();
    });
});