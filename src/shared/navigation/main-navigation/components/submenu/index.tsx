import './index.scss';

import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

import Cari from './cari';
import Destination from './destination';
import GarudaMiles from './garudamiles';
import Penawaran from './penawaran';
import Trip from './trip';
import Services from './services';
import Business from './business-solution';
import Company from './company';
import ServicesSolutions from '../../../../../components/home/components/services-solutions';

interface SubmenuNavigationSharedProps {
    menuCode?: string;
    setHover: (hover: string) => void
}

export default function SubmenuNavigationShared({ menuCode, setHover }: SubmenuNavigationSharedProps) {
    const submenu: any = {
        services: <Services />,
        perjalanan: <Trip />,
        destinasi: <Destination />,
        penawaran: <Penawaran />,
        garudamiles: <GarudaMiles />,
        cari: <Cari />,
        business: <Business />,
        company: <Company />,
        servicessolutions: <ServicesSolutions />,
    }

    const props = {
        onMouseEnter: () => menuCode ? setHover(menuCode) : setHover(""),
        onMouseLeave: () => setHover("")
    }

    const without: string | string[] = [];

    return <>
        <Slide direction="down" {...(!!menuCode ? { timeout: 40 } : {})} in={!!menuCode} mountOnEnter unmountOnExit>
            <Box className="submenu-navigation" zIndex={99}>
                
                    <Box className="submenu-content" color="#000" {...menuCode && !without.includes(menuCode) ? props : {}}>
                    
                        {menuCode && (submenu[menuCode] || menuCode)}
                       
                    </Box>
                
                
            </Box>
        </Slide>
    </>
}
