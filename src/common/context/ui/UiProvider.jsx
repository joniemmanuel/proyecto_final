import { useState } from 'react';

import PropTypes from 'prop-types';

import { UiContext } from './';

export const UiProvider = ({ children }) => {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const toggleSidebar = () => {
        setOpenSidebar( !openSidebar )
    }

    const toggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <UiContext.Provider value={{
            openSidebar,
            toggleSidebar,
            openModal,
            toggleOpenModal,
        }}>
            { children }
        </UiContext.Provider>
    )
};


UiProvider.propTypes = {
    children: PropTypes.element.isRequired
}