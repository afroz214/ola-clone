import React from 'react';
import swal from '@sweetalert/with-react';

const SuccessAlert = props => {
    const {title} = props;
    return (
        swal({
            title
        })
    )
}

export default SuccessAlert;
