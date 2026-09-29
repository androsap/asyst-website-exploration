import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { createContext, useContext } from "react";
import "./index.scss";

interface StepContextData {
    currentStep: number;
    setCurrentStep(step: number): void;
    goToNextStep: () => void;
    goToPrevStep: () => void;
}

const StepContext = createContext<StepContextData | undefined>(undefined);
// Hook khusus untuk mengakses konteks langkah
export function useStep() {
    const context = useContext(StepContext);
    if (!context) {
        throw new Error('useStep must be used within a StepProvider');
    }
    return context;
}

const steps = [
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
];


// Komponen induk yang menyediakan state langkah
// export const StepProvider = ({ children }: PropsWithChildren) => {
//     const [currentStep, setCurrentStep] = useState<number>(0);

//     // Fungsi untuk beralih ke langkah selanjutnya
//     const goToNextStep = () => {
//         setCurrentStep((prevStep) => prevStep === steps.length ? prevStep : prevStep + 1);
//     };

//     // Fungsi untuk beralih ke langkah sebelumnya
//     const goToPrevStep = () => {
//         setCurrentStep((prevStep) => prevStep === 0 ? 0 : prevStep - 1);
//     };

//     // Menyediakan state dan fungsi yang dapat digunakan oleh komponen anak
//     const value: StepContextData = {
//         currentStep,
//         setCurrentStep,
//         goToNextStep,
//         goToPrevStep,
//     };

//     return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
// };
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";

import { styled } from '@mui/material/styles';
const CustomStepConnector = styled(StepConnector)(({ }) => ({
    display: 'none',
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        left: '-55%',
        right: '50%',
        top: 8
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background:
                '#002561',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background:
                '#002561',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 2,
        border: 0,
        backgroundColor: '#002f5f1a',
        borderRadius: 1,
        zIndex: 0,
    },
}));


const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
    display: 'none',
    backgroundColor: '#CCD5DF',
    zIndex: 1,
    width: 16,
    height: 16,
    borderRadius: '50%',
    ...(ownerState.active && {
        backgroundColor: '#002F5F'
    }),
    ...(ownerState.completed && {
        backgroundColor: '#002F5F',
    }),
}));

const CustomStepLabel = styled(StepLabel)(({ }) => ({
    '& .MuiStepLabel-labelContainer': {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    '& .MuiStepLabel-label': {
        borderRadius: '100px',
        padding: '8px 16px',
        border: '1px solid #FFF',
        color: '#FFFFFF !important',
        cursor: 'pointer',
        userSelect: 'none',
    },
}));

import { StepIconProps } from '@mui/material/StepIcon';

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        </ColorlibStepIconRoot>
    );
}

const StepFlightShared = () => {
    // const { currentStep } = useStep();
    return (
        <>
            <Stepper className="stepper-flight" activeStep={0} alternativeLabel connector={<CustomStepConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <CustomStepLabel StepIconComponent={ColorlibStepIcon}>
                            {label}
                        </CustomStepLabel>
                    </Step>
                ))}
            </Stepper>
        </>
    );
};

export default StepFlightShared;
