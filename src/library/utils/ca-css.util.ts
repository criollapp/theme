import { CACssFrameworkAbstract } from "../abstracts/ca-css-framework.abstract";

export class CACSSUtil
{
    public static readonly CLASS_CA_TITLE:string = 'ca-title';
    public static readonly CLASS_CA_FORM:string = 'ca-form';
    public static readonly CLASS_CA_SUBMIT:string = 'ca-submit';
    public static readonly CLASS_CA_BUTTON:string = 'ca-button';
    public static readonly CLASS_ALIGN_LEFT:string = 'ca-align-left';
    public static readonly CLASS_ALIGN_RIGHT:string = 'ca-align-right';
    public static readonly CLASS_ALIGN_CENTER:string = 'ca-align-center';

    public static readonly CLASS_CA_FORM_GROUP_CONTAINER:string = 'ca-form-group-container';
    public static readonly CLASS_CA_FORM_ITEMS_CONTAINER:string = 'ca-form-items-container';
    public static readonly CLASS_CA_FORM_GROUP:string = 'ca-form-group';
    public static readonly CLASS_CA_FORM_ITEMS:string = 'ca-form-items';
    public static readonly CLASS_CA_FORM_SUBMIT:string = 'ca-form-submit';
    public static readonly CLASS_CA_FORM_SUBMIT_BOTTOM:string = 'ca-form-submit-bottom';
    public static readonly CLASS_CA_FORM_SUBMIT_TOP:string = 'ca-form-submit-top';
    public static readonly CLASS_CA_FORM_TITLE:string = 'ca-form-title';
    public static readonly CLASS_CA_FORM_ALERTS:string = 'ca-form-alerts';
    public static readonly CLASS_CA_FORM_ALERTS_TOP:string = 'ca-form-alerts-top';
    public static readonly CLASS_CA_FORM_ALERTS_BOTTOM:string = 'ca-form-alerts-bottom';

    public static readonly CLASS_BOOTSTRAP_TEXT_LEFT:string = 'text-left';
    public static readonly CLASS_BOOTSTRAP_TEXT_RIGHT:string = 'text-right';
    public static readonly CLASS_BOOTSTRAP_TEXT_CENTER:string = 'text-center';

    public static readonly ALIGN_TO_LEFT:string = 'left';
    public static readonly ALIGN_TO_RIGHT:string = 'right';
    public static readonly ALIGN_TO_CENTER:string = 'center';

    public static getAlign( align:string, frameworkCssName:string = '' )
    {
        let classes:string[] = [];
        const isBootstrap:boolean = CACssFrameworkAbstract.FRAMEWORK_BOOTSTRAP == frameworkCssName;
        switch( align )
        {
            case CACSSUtil.ALIGN_TO_LEFT:
                classes.push( CACSSUtil.CLASS_ALIGN_LEFT );
                if(isBootstrap)
                {
                    classes.push(CACSSUtil.CLASS_BOOTSTRAP_TEXT_LEFT);
                }
                break;
            case CACSSUtil.ALIGN_TO_RIGHT:
                classes.push( CACSSUtil.CLASS_ALIGN_RIGHT );
                if(isBootstrap)
                {
                    classes.push(CACSSUtil.CLASS_BOOTSTRAP_TEXT_RIGHT);
                }
                break;
            case CACSSUtil.ALIGN_TO_CENTER:
                classes.push( CACSSUtil.CLASS_ALIGN_CENTER );
                if(isBootstrap)
                {
                    classes.push(CACSSUtil.CLASS_BOOTSTRAP_TEXT_CENTER);
                }
                break;
        }
        return classes;
    }
}
