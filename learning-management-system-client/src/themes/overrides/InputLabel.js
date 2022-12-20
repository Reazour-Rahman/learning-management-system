// ==============================|| OVERRIDES - INPUT LABEL ||============================== //

export default function InputLabel(theme) {
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[600]
                },
                outlined: {
                    lineHeight: '0.6em',
                    outline: 'none',

                    '&.MuiInputLabel-sizeSmall': {
                        lineHeight: '1em'
                    },
                    '&.MuiInputLabel-shrink': {
                        background: '#FAFAFB',
                        padding: '0 6px',
                        marginLeft: -6,
                        lineHeight: '1.4375em'
                    }
                }
            }
        }
    };
}
