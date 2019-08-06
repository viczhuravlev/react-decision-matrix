/// <reference types="react" />
import * as T from './Button.types';
declare function Button(props: T.ButtonProps): JSX.Element;
declare namespace Button {
    var defaultProps: {
        scale: string;
        kind: string;
        outline: boolean;
    };
    var displayName: string;
}
export default Button;
